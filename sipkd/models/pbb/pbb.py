
class osPbb(object):
    def __init__(self):
      pass
      
    @classmethod
    def nop_split(cls, nop):
        return nop[1:2], nop[3:2], nop[5:3], nop[8:3], nop[11:3], nop[14:4], nop[18:1]  
        
    @classmethod
    def nop_join(cls, kd_propinsi, kd_dati2, kd_kecamatan, kd_kelurahan, kd_blok, no_urut, kd_jns_op):
        return ''.join(kd_propinsi, kd_dati2, kd_kecamatan, kd_kelurahan, kd_blok, no_urut, kd_jns_op)  
        
    @classmethod
    def nop_join_formated(cls, kd_propinsi, kd_dati2, kd_kecamatan, kd_kelurahan, kd_blok, no_urut, kd_jns_op):
        return ''.join(kd_propinsi, kd_dati2, kd_kecamatan, kd_kelurahan, kd_blok, no_urut, kd_jns_op)  
        
    @classmethod
    def frm_split(cls, frm):
        return {'tahun':frm[1:4], 'bundle':frm[5:4], 'no_urut':frm[9:3]}
        
    @classmethod
    def frm_merge(cls, frm):
        return ''.join(frm.tahun, frm.bundle, frm.no_urut)
