from sipkd.models.model import * 
from sqlalchemy import and_
from sipkd.models.pbb.pbb import osPbb
import types
class osDOPBng(Base):
    __tablename__ = 'dat_op_bangunan'
    kd_propinsi = Column(String(2), primary_key=True)
    kd_dati2 = Column(String(2), primary_key=True)
    kd_kecamatan = Column(String(3), primary_key=True)
    kd_kelurahan = Column(String(3), primary_key=True)
    kd_blok = Column(String(3), primary_key=True)
    no_urut = Column(String(4), primary_key=True)
    kd_jns_op = Column(String(1), primary_key=True)
    no_bng = Column(Float, primary_key=True)
    kd_jpb = Column(String(2))
    no_formulir_lspop = Column(String(11))
    thn_dibangun_bng = Column(String(4))
    thn_renovasi_bng = Column(String(4))
    luas_bng = Column(Float)
    jml_lantai_bng = Column(Float)
    kondisi_bng = Column(String(1))
    jns_konstruksi_bng = Column(String(1))
    jns_atap_bng = Column(String(1))
    kd_dinding = Column(String(1))
    kd_lantai = Column(String(1))
    kd_langit_langit = Column(String(1))
    nilai_sistem_bng = Column(Float)
    jns_transaksi_bng = Column(String(1))
    tgl_pendataan_bng = Column(DateTime)
    nip_pendata_bng = Column(String(18))
    tgl_pemeriksaan_bng = Column(DateTime)
    nip_pemeriksa_bng = Column(String(18))
    tgl_perekaman_bng = Column(DateTime)
    nip_perekam_bng = Column(String(18))

    
    def __init__(self):
      pass
      
    @classmethod
    def row2dict(cls,row):
        d = {}
        if row:
            for column in row.__table__.columns:
                d[column.name] = getattr(row, column.name)
        return d

    @classmethod
    def get_rows(cls):
        return DBSession.query(cls).all()
        
    @classmethod
    def get_by_id(cls,id):
        return DBSession.query(cls).filter(cls.id==id).first()
        
    @classmethod
    def get_by_nama(cls,nama):
        return DBSession.query(cls).filter(cls.nama==nama).first()
    
    @classmethod
    def get_by_kode(cls,kode):
        return DBSession.query(cls).filter( and_(
                cls.kd_propinsi==kode['kd_propinsi'],
                cls.kd_dati2==kode['kd_dati2'],
                cls.kd_kecamatan==kode['kd_kecamatan'],
                cls.kd_kelurahan==kode['kd_kelurahan'],
                cls.kd_blok==kode['kd_blok'],
                cls.no_urut==kode['no_urut'],
                cls.kd_jns_op==kode['kd_jns_op'],
                cls.no_bumi=='01')
                ).first()        

    @classmethod
    def get_by_form(cls,frm):
        return DBSession.query(cls).filter( 
                cls.no_formulir_spop==osPbb.frm_merge(frm)
                ).first()     
                
    @classmethod
    def tambah(cls, datas):
        data=cls(datas)
        DBSession.add()
            
    @classmethod
    def edit(cls, data):
        DBsession.merge()
            
    @classmethod
    def hapus(cls,datas,nop):
        DBSession.query(cls).filter( and_()
                ).delete()

