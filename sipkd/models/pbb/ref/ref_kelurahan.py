from sipkd.models.model import * 
from sqlalchemy import and_
from sipkd.models.pbb.pbb import osPbb
import types
class osKelurahan(Base):
    __tablename__ = 'ref_kelurahan'
    kd_propinsi = Column(String(2), primary_key=True)
    kd_dati2 = Column(String(2), primary_key=True)
    kd_kecamatan = Column(String(3), primary_key=True)
    kd_kelurahan = Column(String(3), primary_key=True)
    kd_sektor = Column(String(2), primary_key=True)
    nm_kelurahan = Column(String(30))
    no_kelurahan = Column(Integer)
    kd_pos_kelurahan = Column(String(5))

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
    def hapus(cls,datas,kode):
        DBSession.query(cls).filter( and_(          
              cls.kd_propinsi==kode['kd_propinsi'],
              cls.kd_dati2==kode['kd_dati2'],
              cls.kd_kecamatan==kode['kd_kecamatan'],
              cls.kd_kelurahan==kode['kd_kelurahan'],
            )).delete()

    @classmethod
    def get_rows(cls):
        return DBSession.query(cls).all()
        
    @classmethod
    def get_by_kode(cls,kode):
        return DBSession.query(cls).filter(and_(
              cls.kd_propinsi==kode['kd_propinsi'],
              cls.kd_dati2==kode['kd_dati2'],
              cls.kd_kecamatan==kode['kd_kecamatan'],
              cls.kd_kelurahan==kode['kd_kelurahan'],
              )).first()
        
    @classmethod
    def get_by_nama(cls,nama):
        return DBSession.query(cls).filter(cls.nm_kelurahan.like(''.join((nama,'%')))).first()
    
    