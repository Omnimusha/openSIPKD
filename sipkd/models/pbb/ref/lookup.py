from sipkd.models.model import * 
from sqlalchemy import and_
from sipkd.models.pbb.pbb import osPbb
import types
class osLookup(Base):
    __tablename__ = 'lookup_item'
    kd_lookup_group = Column(String(2), primary_key=True)
    kd_lookup_item = Column(String(1), primary_key=True)
    nm_lookup_item = Column(String(225))
    
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
    def get_by_group(cls,kode):
        return DBSession.query(cls).filter(cls.kd_lookup_group==kode).all()        

    @classmethod
    def get_wp_status(cls):
        return cls.get_by_group('10')
        
    @classmethod
    def get_wp_pekerjaan(cls):
        return cls.get_by_group('08')
                
