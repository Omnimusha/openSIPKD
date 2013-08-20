from model import * 
class osGroupModules(Base):
    __tablename__ = 'group_modules'
    id = Column(Integer, primary_key=True)
    group_id = Column(Integer, ForeignKey('groups.id'), onupdate="cascade")
    module_id = Column(Integer, ForeignKey('modules.id'), onupdate="cascade")
    reads = Column(Integer, default=0)
    writes = Column(Integer, default=0)
    deletes = Column(Integer, default=0)
    inserts = Column(Integer, default=0)
    created = Column(DateTime, default=func.now())
    updated = Column(DateTime)
    create_uid = Column(Integer)
    update_uid = Column(Integer)
    Index('group_modules_group_id_module_id_ukey',group_id , module_id, unique=True)
