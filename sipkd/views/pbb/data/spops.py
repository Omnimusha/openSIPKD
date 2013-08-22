import json
import types
from pyramid.httpexceptions import HTTPFound
from pyramid.renderers import get_renderer
from pyramid.response import Response
from pyramid.view import view_config
from pyramid.httpexceptions import HTTPForbidden
from pyramid.security import remember
from pyramid.security import forget
from pyramid.security import has_permission

from sqlalchemy import *
from sipkd.models import *
from sipkd.models.model import *
from sqlalchemy.exc import DBAPIError

from sipkd.models.apps import osApps

from sipkd.models.pbb.pbb import osPbb

from sipkd.models.pbb.data import *
from sipkd.models.pbb.data.dat_objek_pajak import osDOP
from sipkd.models.pbb.data.dat_subjek_pajak import osDSP
from sipkd.models.pbb.data.dat_op_bumi import osDOPBumi
from sipkd.models.pbb.ref.lookup import osLookup
import colander
from deform import Form
from deform import ValidationFailure

def default(o):
    if type(o) is DateTime:
        return o.isoformat()
        
class osSpopValid(colander.MappingSchema):
    pass
    """name = colander.SchemaNode(colander.String())
    shoe_size = colander.SchemaNode(
        colander.Integer(),
        missing = 0,
    )"""
    
    
class osSpop(object):
    def __init__(self, context, request):
        self.context = context
        self.request = request
        renderer = get_renderer("../../../templates/layout.pt")
        self.layout = renderer.implementation().macros['layout']
        
        renderer = get_renderer("../../../templates/main.pt")
        self.main = renderer.implementation().macros['main']

        renderer = get_renderer("../../../templates/pbbd/nav.pt")
        self.nav = renderer.implementation().macros['nav']
                
    @classmethod
    def BlankRow(cls):
            return { 'readonly':'readonly', 'form_visible': 'false',  
                  'frmjns':'S', 'frmjnstxt':'SPOP',  'frm1':'', 'frm2':'', 'frm3':'',
                  'kd_propinsi' :gkd_propinsi, 'kd_dati2' : gkd_dati2, 'kd_kecamatan' : '', 'kd_kelurahan' : '', 'kd_blok' : '',
                  'no_urut' : '', 'kd_jns_op' : '', 'subjek_pajak_id' : '', 'no_formulir_spop' : '',
                  'no_persil' : '', 'jalan_op' : '', 'blok_kav_no_op' : '', 'rw_op' : '',
                  'rt_op' : '', 'kd_status_cabang' : '', 'kd_status_wp' : '', 'total_luas_bumi' : '', 
                  'total_luas_bng' : '', 'njop_bumi' : '', 'njop_bng' : '', 'status_peta_op' : '',
                  'jns_transaksi_op' : '', 'tgl_pendataan_op' : '', 'nip_pendata' : '', 'tgl_pemeriksaan_op' : '',
                  'nip_pemeriksa_op' : '', 'tgl_perekaman_op' : '', 'nip_perekam_op' : '',
                  'subjek_pajak_id' : '', 'nm_wp' : '', 'jalan_wp' : '', 'blok_kav_no_wp' : '',
                  'rw_wp' : '', 'rt_wp' : '', 'kelurahan_wp' : '', 'kota_wp' : '',
                  'kd_pos_wp' : '', 'telp_wp' : '', 'npwp' : '',
                  'status_pekerjaan_wp' : '', 'kecamatan_wp' : '',
                  'propinsi_wp' : '',
                  }

                  
    def validate(cls):
        pass
        
    def get_row(self):
        session = self.request.session
        if session['logged']<>1:
           return HTTPFound(location='/logout') 

        request = self.request
        fields = request.matchdict
        frm = osPbb.frm_split(fields['f'])
        if frm:
            datas=osDOP.row2dict(osDOP.get_by_form(frm))
            
        if datas:
            data2=osDOPBumi.row2dict(osDOPBumi.get_by_kode(datas))
            datas.update(data2)
            data2=osDSP.row2dict(osDSP.get_by_kode(datas['subjek_pajak_id']))
            datas.update(data2)
            datas['found'] = 1
        else:
            datas['found'] = 0
        row=osDOP.frm_max(frm)
        
        if row:
            datas['frm_max']=row[0]
        else:    
            datas['frm_max']=''.join((frm['tahun'],frm['bundle'],'000'))
        if abs(float(row[0])-float(osPbb.frm_join(frm)))>1:
            datas['frm_fail']=1
        else:
            datas['frm_fail']=0
        return datas

    @view_config(route_name='pbbdspop',
                 renderer='../../../templates/pbbd/spop.pt')
    def pbbdspop(self):
        session = self.request.session
        if session['logged']<>1:
           return HTTPFound(location='/logout') 

        request = self.request
        resource = None
        url=request.resource_url(resource)
        
        datas= osSpop.BlankRow()
        datas['wp_pekerjaan']=osLookup.get_wp_pekerjaan()
        datas['wp_status']=osLookup.get_wp_status()

        if self.request.session['sa']==1:
            datas['opts']=osApps.get_rows()
            opts = osApps.get_rows()
        else:
            pass

        schema = osSpopValid()
        myform = Form(schema, buttons=('submit',))
        if 'btn_save' in self.request.POST:
            controls = self.request.POST.items()
            try:
                appstruct = myform.validate(controls)
            except ValidationFailure, e:
                return {'form':e.render(), 'values': False}
            # Process the valid form data, do some work
            
            data2=dict((x, y) for x, y in controls)
            datas.update(data2)
            print datas
            #return {"form": myform.render(), "values": values}
        # We are a GET not a POST
        #return {"form": myform.render(), "values": None}
        return dict(title="OpenSIPKD",
                    message="",
                    usernm=self.request.session['usernm'], 
                    opts=opts,
                    datas=datas,
                    url=url)
                    
    @view_config(route_name='pbbdspopc1',
                 renderer='json')
    def pbbdspopc1(self):
        datas=self.get_row()
        return json.dumps(datas, default=default)
 
    @view_config(route_name='pbbdspopc2',
                 renderer='json')
    def pbbdspopc2(self): 
        datas=self.get_row()
        if not 'kd_propinsi' in datas:
            session = self.request.session
            if session['logged']<>1:
               return HTTPFound(location='/logout') 

            request = self.request
            fields = request.matchdict
            nop = osPbb.nop_split(fields['n'])
            if nop:
                data_nop=osDOP.row2dict(osDOP.get_by_kode(nop))
                
            if data_nop:
                datas['found'] = 1
                datas.update(data_nop)
                """data2=osDOPBumi.row2dict(osDOPBumi.get_by_kode(datas))
                datas.update(data2)
                data2=osDSP.row2dict(osDSP.get_by_kode(datas['subjek_pajak_id']))
                datas.update(data2)"""
            else:
                datas['found'] = 0
        return json.dumps(datas, default=default)
        
    @view_config(route_name='pbbddsp',
                 renderer='json')
    def pbbddsp(self): 
        session = self.request.session
        if session['logged']<>1:
           return HTTPFound(location='/logout') 

        request = self.request
        fields = request.matchdict
        
        datas=osDSP.row2dict(osDSP.get_by_kode(fields['kode']))
        if datas:
            datas['found'] = 1
        else:
            datas['found'] = 0
        print datas
        return json.dumps(datas, default=default)
        
    def pbbdspopproses(self):
        session = self.request.session
        if session['logged']<>1:
           return HTTPFound(location='/logout') 

        request = self.request
        resource = None
        url=request.resource_url(resource)
        datas= osSpop.BlankRow()
        datas['wp_pekerjaan']=osLookup.get_wp_pekerjaan()
        datas['wp_status']=osLookup.get_wp_status()

        if self.request.session['sa']==1:
            datas['opts']=osApps.get_rows()
            opts = osApps.get_rows()
        else:
            pass
        return dict(title="OpenSIPKD",
                    message="",
                    usernm=self.request.session['usernm'], 
                    opts=opts,
                    datas=datas,
                    url=url)
        