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
import json
import types
from sipkd.models.apps import osApps
from sipkd.models.pbb.dat_objek_pajak import osDOP
from sipkd.models.pbb.pbb import osPbb
from sipkd.models.pbb.dat_subjek_pajak import osDSP
from sipkd.models.pbb.dat_op_bumi import osDOPBumi


def default(o):
    if type(o) is DateTime:
        return o.isoformat()
        
class osSpop(object):
    def __init__(self, context, request):
        self.context = context
        self.request = request
                
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
        
    def get_rows(cls):
        pass

    @view_config(route_name='pbbdspopc1',
                 renderer='json')
    def pbbdspopc1(self):
        session = self.request.session
        if session['logged']<>1:
           return HTTPFound(location='/logout') 

        request = self.request
        fields = request.matchdict
        frm = osPbb.frm_split(fields['f'])
        if frm:
            datas=osDOP.row2dict(osDOP.get_by_form(frm))
            
        if datas:
            print(datas)
            data2=osDOPBumi.row2dict(osDOPBumi.get_by_kode(datas))
            datas.update(data2)
            data2=osDSP.row2dict(osDSP.get_by_kode(datas['subjek_pajak_id']))
            datas.update(data2)
            datas['found'] = 1
        else:
            datas['found'] = 0
        datas['fail']=1
        return json.dumps(datas, default=default)