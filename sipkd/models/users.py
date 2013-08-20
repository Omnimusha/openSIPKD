from model import * 
class osUsers(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    create_uid = Column(Integer)
    created = Column(DateTime, default=func.now())
    updated = Column(DateTime)
    update_uid = Column(Integer)
    kode = Column(String(32), unique=True)
    nama = Column(String(64))
    passwd = Column(String(64))
    nip = Column(String(32))
    locked = Column(Integer, default=0) 
    
    def __init__(self, kode, passwd,nama, locked):
        self.kode = kode
        self.passwd = passwd
        self.nama = nama
        self.locked  = locked

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
            return DBSession.query(cls).filter(cls.kode==kode).first() 
            
class osGroups(Base):
    __tablename__ = 'groups'
    id = Column(Integer, primary_key=True)
    kode = Column(String(20), unique=True)
    nama = Column(String(50), unique=True)
    locked = Column(Integer,  default=0)
    created = Column(DateTime, default=func.now())
    updated = Column(DateTime)
    create_uid = Column(Integer)
    update_uid = Column(Integer)
    extend_existing=True

class osUserGroups(Base):
    __tablename__ = 'user_groups'
    id = Column(Integer, primary_key=True)
    group_id = Column(Integer, ForeignKey('groups.id', onupdate="RESTRICT", ondelete="RESTRICT"))
    user_id = Column(Integer, ForeignKey('users.id', onupdate="RESTRICT", ondelete="RESTRICT"))
    created = Column(DateTime, default=func.now())
    updated = Column(DateTime)
    create_uid = Column(Integer)
    update_uid = Column(Integer)
    Index('user_group_group_id_user_id_ukey',group_id , user_id, unique=True)
    
    