$(document).ready(function () {
    if ($("#form_visible").val() == 1) {
        $("#data").css('display', 'block');
        $("#btn_validate").css('visibility', 'hidden');
        $("#btn_save").removeAttr('disabled');
    }

    $("#btn_validate").click(function () {
        if (isNaN($("#frm1").val()) || isNaN($("#frm2").val()) || isNaN($("#frm3").val()) || isNaN($("#kd_kecamatan").val()) || isNaN($("#kd_kelurahan").val()) || isNaN($("#kd_blok").val()) || isNaN($("#kd_jns_op").val()) || isNaN($("#no_urut").val()) || isNaN($("#jns_transaksi_op").val()) || !($("#frm1").val()) || !($("#frm2").val()) || !($("#frm3").val()) || !($("#kd_kecamatan").val()) || !($("#kd_kelurahan").val()) || !($("#kd_blok").val()) || !($("#kd_jns_op").val()) || !($("#no_urut").val()) || !($("#jns_transaksi_op").val())) {
            alert('Lengkapi Isian Form');
            return false;
        }

        var trans = $("#jns_transaksi_op").val();

        var frm1h = $("#frm1h").val();
        var frm2h = $("#frm2h").val();
        var frm3h = $("#frm3h").val();

        var frm1 = $("#frm1").val();
        var frm2 = $("#frm2").val();
        var frm3 = $("#frm3").val();

        if (frm1h && frm2h && frm3h) {
            if (frm1 != frm1h || frm2 != frm2h || frm3 != frm3h) {
                alert('Data Formulir Tidak Sama');
                return false;
            }
        }

        var kd_propinsi = $("#kd_propinsi").val();
        var kd_dati2 = $("#kd_dati2").val();

        var kd_kecamatanh = $("#kd_kecamatanh").val();
        var kd_kelurahanh = $("#kd_kelurahanh").val();
        var kd_blokh = $("#kd_blokh").val();
        var no_uruth = $("#no_uruth").val();
        var kd_jns_oph = $("#kd_jns_oph").val();

        var kd_kecamatan = $("#kd_kecamatan").val();
        var kd_kelurahan = $("#kd_kelurahan").val();
        var kd_blok = $("#kd_blok").val();
        var no_urut = $("#no_urut").val();
        var kd_jns_op = $("#kd_jns_op").val();

        var nop = kd_propinsi + '.' + kd_dati2 + '-' + kd_kecamatan + '.' + kd_kelurahan +
            '.' + kd_blok + '.' + no_urut + '.' + kd_jns_op;

        if (kd_kecamatanh && kd_kelurahanh && kd_blokh && no_uruth && kd_jns_oph) {
            if (kd_kecamatan != kd_kecamatanh || kd_kelurahan != kd_kelurahanh || kd_blok != kd_blokh || no_urut != no_uruth || kd_jns_op != kd_jns_oph) {
                alert('Data NOP Tidak Sama');
                return false;
            }
        }

        var kec2h = $("#kec2h").val();
        var kel2h = $("#kel2h").val();
        var blk2h = $("#blk2h").val();
        var urt2h = $("#urt2h").val();
        var jns2h = $("#jns2h").val();

        var kec2 = $("#kec2").val();
        var kel2 = $("#kel2").val();
        var blk2 = $("#blk2").val();
        var urt2 = $("#urt2").val();
        var jns2 = $("#jns2").val();

        if (kec2h && kel2h && blk2h && urt2h && jns2h) {
            if (kec2 != kec2h || kel2 != kel2h || blk2 != blk2h || urt2 != urt2h || jns2 != jns2h) {
                alert('Data NOP Bersama Tidak Sama');
                return false;
            }
        }
        var kec3h = $("#kec3h").val();
        var kel3h = $("#kel3h").val();
        var blk3h = $("#blk3h").val();
        var urt3h = $("#urt3h").val();
        var jns3h = $("#jns3h").val();

        var kec3 = $("#kec3").val();
        var kel3 = $("#kel3").val();
        var blk3 = $("#blk3").val();
        var urt3 = $("#urt3").val();
        var jns3 = $("#jns3").val();

        if (kec3h && kel3h && blk3h && urt3h && jns3h) {
            if (kec3 != kec3h || kel3 != kel3h || blk3 != blk3h || urt3 != urt3h || jns3 != jns3h) {
                alert('Data NOP Asal Tidak Sama');
                return false;
            }
        }

        var fmsg = "";
        //cek Tahun
        var d = new Date();
        var vls_tahun = d.getFullYear();
        if (frm1.length != 4) fmsg = 'Inputan untuk tahun harus 4 digit !';
        if (frm1 < 1900) fmsg = 'Inputan untuk tahun tidak valid !';
        if (frm1.length != 4 && frm1 != vls_thn) {
            cmsg = 'Yakin Isian tahun bukan tahun ' + vlstahun;
            if (confirm(cmsg) == false) return false;
        }
        //cek bundle
        if (frm2.length != 4) fmsg = 'Inputan nomor buku/bundel tidak boleh kosong dan harus 4 digit !';
        if (frm2 < 1) fmsg = 'Inputan nomor buku/bundel tidak valid !';

        //cek no_urut
        if (frm3.length != 3) fmsg = 'Inputan nomor urut formulir tidak boleh kosong dan harus 3 digit !';
        if (frm3 < 1) fmsg = 'Inputan nomor formulir tidak valid !';

        if (no_urut < 1) fmsg = 'Inputan nomor urut tidak boleh 0000!';

        if (kd_blok != '000') {
            kd_jns_op = '0';
            $('#kd_jns_op').val(kd_jns_op);
        }
        if (kd_jns_op == 8 || kd_jns_op == 9) {
            kec2 = '';
            kel2 = '';
            blk2 = '';
            urt2 = '';
            jns2 = '';
            $('#kec2').val(kec2);
            $('#kel2').val(kel2);
            $('#blk2').val(blk2);
            $('#urt2').val(urt2);
            $('#jns2').val(jns2);
        } else {
            if (!kec2) {
                cmsg = 'Apakah Tidak Punya NOP Bersama?';
                if (confirm(cmsg) == false) return false;
                else {
                    kec2 = '';
                    kel2 = '';
                    blk2 = '';
                    urt2 = '';
                    jns2 = '';
                    $('#kec2').val(kec2);
                    $('#kel2').val(kel2);
                    $('#blk2').val(blk2);
                    $('#urt2').val(urt2);
                    $('#jns2').val(jns2);
                }
            } else {
                if (isNaN(kec2) || isNaN(kel2) || isNaN(blk2) || isNaN(jns2) || isNaN(urt2) || !(kec2) || !(kel2) || !(blk2) || !(jns2) || !(urt2)) {
                    fmsg = 'Lengkapi NOP Bersama';
                }
                if (blk2 == '000')
                    jns2 = '8';
                else
                    jns2 = '9';
                $('#jns2').val(jns2);
            }
        };

        if (!kec3) {
            cmsg = 'Apakah Tidak Punya NOP Asal?';
            if (confirm(cmsg) == false) return false;
            else {
                kec3 = '';
                kel3 = '';
                blk3 = '';
                urt3 = '';
                jns3 = '';
                $('#kec3').val(kec3);
                $('#kel3').val(kel3);
                $('#blk3').val(blk3);
                $('#urt3').val(urt3);
                $('#jns3').val(jns3);
            }
        } else {
            if (isNaN(kec3) || isNaN(kel3) || isNaN(blk3) || isNaN(jns3) || isNaN(urt3) || !(kec3) || !(kel3) || !(blk3) || !(jns3) || !(urt3)) {
                fmsg = 'Lengkapi NOP Asal';
            }
        }

        if (fmsg) {
            alert(fmsg);
            return false;
        }
        fmsg = '';
        
        if (!$("#readonly_state").val()) {
            $.ajax({
                url: $("#url_c1").val() + 'f121/f1211_c1?t=' + trans + '&f=' + frm1 + frm2 + frm3 + '&n=' + nop + '&b=' + kec2 + kel2 + blk2 + urt2 + jns2 + '&a=' + kec3 + kel3 + blk3 + urt3 + jns3,
                success: function (json) {
                    data = JSON.parse(json);

                    if (data['isFrmFail'] == "1") {
                        var c = confirm('No Form Terakhir ' + data['frmmax'] + ' Lanjutkan?');
                        if (!c) return false;
                    }

                    if (data['isFrmUsed'] == 1) {
                        var nopmsg = 'No. Form sudah digunakan untuk NOP: ' +
                            data['kd_propinsi'] + '.' + data['kd_dati2'] + '-' + data['kd_kecamatan'] + '.' + data['kd_kelurahan'] + '-' +
                            data['kd_blok'] + '.' + data['no_urut'] + '.' + data['kd_jns_op'];

                        if (trans == 11) {
                            alert(nopmsg);
                            return false;
                        } else {

                            if (trans == 12 || trans == 22) {
                                if (confirm(nopmsg + ' gunakan NOP?') == false) {
                                    return false;
                                } else {

                                    /*              $("#kec2").val(data['kec2']);
              $("#kel2").val(data['kel2']);
              $("#blk2").val(data['blk2']);
              $("#urt2").val(data['urt2']);
              $("#jns2").val(data['jns2']);
              
              $("#kec3").val(data['kec3']);
              $("#kel3").val(data['kel3']);
              $("#blk3").val(data['blk3']);
              $("#urt3").val(data['urt3']);
              $("#jns3").val(data['jns3']);
*/

                                    $("#kd_kecamatan").val(data['kd_kecamatan']);
                                    $("#kd_kelurahan").val(data['kd_kelurahan']);
                                    $("#kd_blok").val(data['kd_blok']);
                                    $("#no_urut").val(data['no_urut']);
                                    $("#kd_jns_op").val(data['kd_jns_op']);

                                    $("#subjek_pajak_id").val(data["subjek_pajak_id"]);
                                    $("#no_formulir_spop").val(data["no_formulir_spop"]);
                                    $("#no_persil").val(data["no_persil"]);
                                    $("#jalan_op").val(data["jalan_op"]);
                                    $("#blok_kav_no_op").val(data["blok_kav_no_op"]);
                                    $("#rw_op").val(data["rw_op"]);
                                    $("#rt_op").val(data["rt_op"]);
                                    $("#kd_status_cabang").val(data["kd_status_cabang"]);
                                    $("#kd_status_wp").val(data["kd_status_wp"]);
                                    $("#total_luas_bumi").val(data["total_luas_bumi"]);
                                    $("#total_luas_bng").val(data["total_luas_bng"]);
                                    $("#njop_bumi").val(data["njop_bumi"]);
                                    $("#njop_bng").val(data["njop_bng"]);
                                    $("#status_peta_op").val(data["status_peta_op"]);
                                    $("#jns_transaksi_op").val(data["jns_transaksi_op"]);
                                    $("#tgl_pendataan_op").val(data["tgl_pendataan_op"]);
                                    $("#nip_pendata").val(data["nip_pendata"]);
                                    $("#tgl_pemeriksaan_op").val(data["tgl_pemeriksaan_op"]);
                                    $("#nip_pemeriksa_op").val(data["nip_pemeriksa_op"]);
                                    $("#tgl_perekaman_op").val(data["tgl_perekaman_op"]);
                                    $("#nip_perekam_op").val(data["nip_perekam_op"]);


                                    $("#kd_znt").val(data["kd_znt"]);
                                    $("#luas_bumi").val(data["luas_bumi"]);
                                    $("#jns_bumi").val(data["jns_bumi"]);

                                    $("#nm_wp").val(data["nm_wp"]);
                                    $("#jalan_wp").val(data["jalan_wp"]);
                                    $("#blok_kav_no_wp").val(data["blok_kav_no_wp"]);
                                    $("#rw_wp").val(data["rw_wp"]);
                                    $("#rt_wp").val(data["rt_wp"]);
                                    $("#kelurahan_wp").val(data["kelurahan_wp"]);
                                    $("#kota_wp").val(data["kota_wp"]);
                                    $("#kd_pos_wp").val(data["kd_pos_wp"]);
                                    $("#telp_wp").val(data["telp_wp"]);
                                    $("#npwp").val(data["npwp"]);
                                    $("#status_pekerjaan_wp").val(data["status_pekerjaan_wp"]);
                                    $("#kecamatan_wp").val(data["kecamatan_wp"]);
                                    $("#propinsi_wp").val(data["propinsi_wp"]);

                                };
                            } else {
                                return false
                            }
                        }
                    }

                    if (trans == '14' && data['induk'] < 1)
                        fmsg = 'Data objek pajak atas NOP ' + nop +
                            ' bukan merupakan anggota OP bersama !';
                    if (trans == '11' && data['hapus'] > 0)
                        fmsg = 'Data objek pajak atas NOP ' + nop +
                            ' sudah pernah ada dan sudah dihapus !';

                    if (jns3 && data['isAsal'] == 0)
                        fmsg = 'Data atas NOP asal ' + kd_propinsi + '.' + kd_dati2 + '-' + kec3 + '.' + kel3 + '-' + blk3 + '.' + urt3 + '.' + jns3 +
                            ' tidak ada dalam basis data !';

                    if (fmsg) {
                        alert(fmsg);
                        return false;
                    }

                    fmsg = '';
                    if (trans == '11' && data['isNopUsed'] == 1)
                        fmsg = 'Data Obyek Pajak atas NOP ' + nop + ' sudah ada dalam basis data !';
                    else if (trans != '11' && data['isNopUsed'] == 0)
                        fmsg = 'Data Obyek Pajak atas NOP ' + nop + ' tidak ada dalam basis data !';
                    if (fmsg) {
                        alert(fmsg);
                        return false;
                    }
                    fmsg = '';
                    if (trans == '12' || trans == '13' || trans == '14') {
                        if (jns2) {
                            var nop_induk = kec2 + '.' + kel2 + '-' + blk2 + '.' + urt2 + '.' + jns2;
                            if (nop_induk) nop_induk = kd_propinsi + '.' + kd_dati2 + '-' + nop_induk;
                        } else {
                            nop_induk = '';
                        }

                        var nop_induk2 = data['nop_induk'];
                        alert(nop_induk);
                        if (nop_induk2 != nop_induk) {
                            var msg = 'NOP Induk atas NOP ini adalah ' + nop_induk2 + ' ... Gunakan NOP induk ini ?';
                            if (confirm(msg) == true) {
                                kec2 = nop_induk2.substring(7, 3);
                                kel2 = nop_induk2.substring(11, 3);
                                blk2 = nop_induk2.substring(15, 3);
                                urt2 = nop_induk2.substring(19, 4);
                                jns2 = nop_induk2.substring(24, 1);
                            } else return false;
                        }
                    }
                    /*bangunan
		begin  
	  select count(*) into vli_temp from dat_objek_pajak where kd_propinsi = :bl_nop.tx_prop and 
		  kd_dati2 = :bl_nop.tx_dat and kd_kecamatan = :bl_nop.tx_kec and 
		  kd_kelurahan = :bl_nop.tx_kel and kd_blok = :bl_nop.tx_blk and 
		  no_urut = :bl_nop.tx_urut and kd_jns_op = :bl_nop.tx_jns;
	exception when others then vli_temp := 0;
	end;
		
   if vli_temp > 0 THEN
			if :bl_nop.tx_jns_form = 'L' THEN
			  begin
			    select count(*) into vli_temp from dat_op_bangunan where kd_propinsi = :bl_nop.tx_prop and 
				  kd_dati2 = :bl_nop.tx_dat and kd_kecamatan = :bl_nop.tx_kec and 
				  kd_kelurahan = :bl_nop.tx_kel and kd_blok = :bl_nop.tx_blk and 
				  no_urut = :bl_nop.tx_urut and kd_jns_op = :bl_nop.tx_jns;
			  exception when others then vli_temp := 0;
			  end;			  
				if :bl_nop.tx_jns_trs  = '22' THEN
				  if vli_temp <= 0 THEN Set_Alert_Property('AL_UMUM', ALERT_MESSAGE_TEXT, 'Data bangunan atas NOP '||
				  	:bl_nop.tx_prop||'.'||:bl_nop.tx_dat||'.'||:bl_nop.tx_kec||'.'||
				  	:bl_nop.tx_kel||'.'||:bl_nop.tx_blk||'-'||:bl_nop.tx_urut||'.'||:bl_nop.tx_jns||
				  	' tidak ada dalam basis data !');
				    vli_alert := Show_Alert('al_umum');
				    Go_item('bl_nop.tx_prop');
				  else Go_item('bl_nop_l.tx_no_1_l');
				  end if;
				elsif :bl_nop.tx_jns_trs  = '24' THEN
					if vli_temp <= 0 THEN Set_Alert_Property('AL_UMUM', ALERT_MESSAGE_TEXT, 'Data bangunan atas NOP '||
					 	:bl_nop.tx_prop||'.'||:bl_nop.tx_dat||'.'||:bl_nop.tx_kec||'.'||
					 	:bl_nop.tx_kel||'.'||:bl_nop.tx_blk||'-'||:bl_nop.tx_urut||'.'||:bl_nop.tx_jns||
					 	' tidak ada dalam basis data !');
					  vli_alert := Show_Alert('al_umum');
					  Go_item('bl_nop.tx_prop');
					else Go_item('bl_nop_ind.tx_prop_k');
					end if;
				elsif :bl_nop.tx_jns_trs  = '23' THEN
					if vli_temp <= 0 THEN Set_Alert_Property('AL_UMUM', ALERT_MESSAGE_TEXT, 'Data bangunan atas NOP '||
					 	:bl_nop.tx_prop||'.'||:bl_nop.tx_dat||'.'||:bl_nop.tx_kec||'.'||
					 	:bl_nop.tx_kel||'.'||:bl_nop.tx_blk||'-'||:bl_nop.tx_urut||'.'||:bl_nop.tx_jns||
					 	' tidak ada dalam basis data !');
					  vli_alert := Show_Alert('al_umum');
					  Go_item('bl_nop.tx_prop');
					else 
					 	Go_item('bl_nop_l.tx_no_1_l');
					end if;
				elsif :bl_nop.tx_jns_trs = '21' THEN 
					 	Go_item('bl_nop_l.tx_no_1_l'); 
				end if;
			end if;
	  end if;
	  */



                    //Fill Form

                    $("#frm1").attr('readonly', 'readonly');
                    $("#frm2").attr('readonly', 'readonly');
                    $("#frm3").attr('readonly', 'readonly');
                    $("#kd_kecamatan").attr('readonly', 'readonly');
                    $("#kd_kelurahan").attr('readonly', 'readonly');
                    $("#kd_blok").attr('readonly', 'readonly');
                    $("#no_urut").attr('readonly', 'readonly');
                    $("#kd_jns_op").attr('readonly', 'readonly');
                    $("#kec2").attr('readonly', 'readonly');
                    $("#kel2").attr('readonly', 'readonly');
                    $("#blk2").attr('readonly', 'readonly');
                    $("#urt2").attr('readonly', 'readonly');
                    $("#jns2").attr('readonly', 'readonly');
                    $("#kec3").attr('readonly', 'readonly');
                    $("#kel3").attr('readonly', 'readonly');
                    $("#blk3").attr('readonly', 'readonly');
                    $("#urt3").attr('readonly', 'readonly');
                    $("#jns3").attr('readonly', 'readonly');
                    $("#data").css('display', 'block');
                    $("#btn_validate").css('visibility', 'hidden');
                    $("#btn_save").removeAttr('disabled');

                },
                error: function (xhr, desc, er) {
                    alert(er);
                }
            });
        }


    });

    $("#btn_cariwp").click(function () {
        var id = $("#subjek_pajak_id").val();
        if (!id) {
            id = $("#kd_propinsi").val() + $("#kd_dati2").val() + $("#kd_kecamatn").val() +
                $("#kd_kelurahan").val() + $("#kd_blok").val() + $("#no_urut").val() + $("#kd_jns_op").val();
        }
        $.ajax({
            url: $("#url_c1").val() + "f121/f1211_cwp?id=" + id,
            success: function (json) {
                data = JSON.parse(json);
                if (data['found'] == 1) {
                    $('#subjek_pajak_id').val($data['subjek_pajak_id']);
                    $('#nm_wp').val($data['nm_wp']);
                    $('#jalan_wp').val($data['jalan_wp']);
                    $('#blok_kav_no_wp').val($data['blok_kav_no_wp']);
                    $('#rw_wp').val($data['rw_wp']);
                    $('#rt_wp').val($data['rt_wp']);
                    $('#kelurahan_wp').val($data['kelurahan_wp']);
                    $('#kota_wp').val($data['kota_wp']);
                    $('#kd_pos_wp').val($data['kd_pos_wp']);
                    $('#telp_wp').val($data['telp_wp']);
                    $('#npwp').val($data['npwp']);
                    $('#status_pekerjaan_wp').val($data['status_pekerjaan_wp']);
                    $('#kecamatan_wp').val($data['kecamatan_wp']);
                    $('#propinsi_wp').val($data['propinsi_wp']);
                };

                $('#subjek_pajak_id').removeAttr('readonly');
                $('#nm_wp').removeAttr('readonly');
                $('#jalan_wp').removeAttr('readonly');
                $('#blok_kav_no_wp').removeAttr('readonly');
                $('#rw_wp').removeAttr('readonly');
                $('#rt_wp').removeAttr('readonly');
                $('#kelurahan_wp').removeAttr('readonly');
                $('#kota_wp').removeAttr('readonly');
                $('#kd_pos_wp').removeAttr('readonly');
                $('#telp_wp').removeAttr('readonly');
                $('#npwp').removeAttr('readonly');
                $('#status_pekerjaan_wp').removeAttr('readonly');
                $('#kecamatan_wp').removeAttr('readonly');
                $('#propinsi_wp').removeAttr('readonly');
            },
            error: function (xhr, desc, er) {
                alert(er);
            }
        });

    });

    $("#status_pekerjaan_wp").change(function () {
        var id = $("#status_pekerjaan_wp").val();
    });
    $("#btn_save").click(function () {
        $("#myform").submit();

    })

    $("#frm1, #frm2, #frm3").keypress(function () {
        var frm3 = $("#frm3").val();
        var frm1 = $("#frm1").val();
        var frm2 = $("#frm2").val();
        if (frm1.length==4 && frm2.length==4 && frm3.length==3) {
            if (isNaN($("#frm1").val()) || isNaN($("#frm2").val()) || isNaN($("#frm3").val()) || !($("#frm1").val()) || !($("#frm2").val()) || !($("#frm3").val())) {
                alert('Lengkapi Isian Form');
                return false;
            }
            var trans = $("#jns_transaksi_op").val();

            var fmsg = "";
            //cek tahun
            var d = new Date();
            var vls_tahun = d.getFullYear();
            if (frm1.length != 4) fmsg = 'Inputan untuk tahun harus 4 digit !';
            if (frm1 < 1900) fmsg = 'Inputan untuk tahun tidak valid !';
            if (frm1.length != 4 && frm1 != vls_thn) {
                cmsg = 'Yakin Isian tahun bukan tahun ' + vlstahun;
                if (confirm(cmsg) == false) return false;
            }
            //cek bundle
            if (frm2.length != 4) fmsg = 'Inputan nomor buku/bundel tidak boleh kosong dan harus 4 digit !';
            if (frm2 < 1) fmsg = 'Inputan nomor buku/bundel tidak valid !';

            //cek no_urut
            if (frm3.length != 3) fmsg = 'Inputan nomor urut formulir tidak boleh kosong dan harus 3 digit !';
            if (frm3 < 1) fmsg = 'Inputan nomor formulir tidak valid !';

            if (no_urut < 1) fmsg = 'Inputan nomor urut tidak boleh 0000!';

            if (fmsg) {
                alert(fmsg);
                return false;
            }
            fmsg = '';
            if (!$("#readonly_state").val()) {
                $.ajax({
                    url: '/pbbd/spop/c1/' + trans + '/' + frm1 + frm2 + frm3,
                    success: function (json) {
                        data = JSON.parse(json);
                        alert(data['kd_propinsi']);
                        if (data['fail'] == "1") {
                            var c = confirm('No Form Terakhir ' + data['frmmax'] + ' Lanjutkan?');
                            if (!c) return false;
                        }

                        if (data['found'] == 1) {
                            var nopmsg = 'No. Form sudah digunakan untuk NOP: ' +
                                data['kd_propinsi'] + '.' + data['kd_dati2'] + '-' + data['kd_kecamatan'] + '.' + data['kd_kelurahan'] + '-' +
                                data['kd_blok'] + '.' + data['no_urut'] + '.' + data['kd_jns_op'];

                            if (trans == 11) {
                                alert(nopmsg);
                                return false;
                            } else {

                                if (trans == 12) {
                                    if (confirm(nopmsg + ', gunakan NOP?') == false) {
                                        return false;
                                    } else {
                                        $("#kd_kecamatan").val(data['kd_kecamatan']);
                                        $("#kd_kelurahan").val(data['kd_kelurahan']);
                                        $("#kd_blok").val(data['kd_blok']);
                                        $("#no_urut").val(data['no_urut']);
                                        $("#kd_jns_op").val(data['kd_jns_op']);

                                        $("#subjek_pajak_id").val(data["subjek_pajak_id"]);
                                        $("#no_formulir_spop").val(data["no_formulir_spop"]);
                                        $("#no_persil").val(data["no_persil"]);
                                        $("#jalan_op").val(data["jalan_op"]);
                                        $("#blok_kav_no_op").val(data["blok_kav_no_op"]);
                                        $("#rw_op").val(data["rw_op"]);
                                        $("#rt_op").val(data["rt_op"]);
                                        $("#kd_status_cabang").val(data["kd_status_cabang"]);
                                        $("#kd_status_wp").val(data["kd_status_wp"]);
                                        $("#total_luas_bumi").val(data["total_luas_bumi"]);
                                        $("#total_luas_bng").val(data["total_luas_bng"]);
                                        $("#njop_bumi").val(data["njop_bumi"]);
                                        $("#njop_bng").val(data["njop_bng"]);
                                        $("#status_peta_op").val(data["status_peta_op"]);
                                        $("#jns_transaksi_op").val(data["jns_transaksi_op"]);
                                        $("#tgl_pendataan_op").val(data["tgl_pendataan_op"]);
                                        $("#nip_pendata").val(data["nip_pendata"]);
                                        $("#tgl_pemeriksaan_op").val(data["tgl_pemeriksaan_op"]);
                                        $("#nip_pemeriksa_op").val(data["nip_pemeriksa_op"]);
                                        $("#tgl_perekaman_op").val(data["tgl_perekaman_op"]);
                                        $("#nip_perekam_op").val(data["nip_perekam_op"]);

                                        $("#kd_znt").val(data["kd_znt"]);
                                        $("#luas_bumi").val(data["luas_bumi"]);
                                        $("#jns_bumi").val(data["jns_bumi"]);

                                        $("#nm_wp").val(data["nm_wp"]);
                                        $("#jalan_wp").val(data["jalan_wp"]);
                                        $("#blok_kav_no_wp").val(data["blok_kav_no_wp"]);
                                        $("#rw_wp").val(data["rw_wp"]);
                                        $("#rt_wp").val(data["rt_wp"]);
                                        $("#kelurahan_wp").val(data["kelurahan_wp"]);
                                        $("#kota_wp").val(data["kota_wp"]);
                                        $("#kd_pos_wp").val(data["kd_pos_wp"]);
                                        $("#telp_wp").val(data["telp_wp"]);
                                        $("#npwp").val(data["npwp"]);
                                        $("#status_pekerjaan_wp").val(data["status_pekerjaan_wp"]);
                                        $("#kecamatan_wp").val(data["kecamatan_wp"]);
                                        $("#propinsi_wp").val(data["propinsi_wp"]);

                                        $("#jns_transaksi_op").attr('readonly', 'readonly');
                                        $("#frm1").attr('readonly', 'readonly');
                                        $("#frm2").attr('readonly', 'readonly');
                                        $("#frm3").attr('readonly', 'readonly');

                                        $("#kd_kecamatan").attr('readonly', 'readonly');
                                        $("#kd_kelurahan").attr('readonly', 'readonly');
                                        $("#kd_blok").attr('readonly', 'readonly');
                                        $("#no_urut").attr('readonly', 'readonly');
                                        $("#kd_jns_op").attr('readonly', 'readonly');
                                        $("#data").css('display', 'block');
                                        $("#btn_validate").css('visibility', 'hidden');
                                        $("#btn_save").removeAttr('disabled');
                                    };
                                } else {
                                    return false
                                }
                            }
                        }

                        if (fmsg) {
                            alert(fmsg);
                            return false;
                        }
                    },
                    error: function (xhr, desc, er) {
                        alert(er);
                    }
                });
            }


        }
    });

    $("#btn_cariwp").click(function () {
        var id = $("#subjek_pajak_id").val();
        if (!id) {
            id = $("#kd_propinsi").val() + $("#kd_dati2").val() + $("#kd_kecamatn").val() +
                $("#kd_kelurahan").val() + $("#kd_blok").val() + $("#no_urut").val() + $("#kd_jns_op").val();
        }
        $.ajax({
            url: "/pbb/spop/cwp?id=" + id,
            success: function (json) {
                data = JSON.parse(json);
                if (data['found'] == 1) {
                    $('#subjek_pajak_id').val($data['subjek_pajak_id']);
                    $('#nm_wp').val($data['nm_wp']);
                    $('#jalan_wp').val($data['jalan_wp']);
                    $('#blok_kav_no_wp').val($data['blok_kav_no_wp']);
                    $('#rw_wp').val($data['rw_wp']);
                    $('#rt_wp').val($data['rt_wp']);
                    $('#kelurahan_wp').val($data['kelurahan_wp']);
                    $('#kota_wp').val($data['kota_wp']);
                    $('#kd_pos_wp').val($data['kd_pos_wp']);
                    $('#telp_wp').val($data['telp_wp']);
                    $('#npwp').val($data['npwp']);
                    $('#status_pekerjaan_wp').val($data['status_pekerjaan_wp']);
                    $('#kecamatan_wp').val($data['kecamatan_wp']);
                    $('#propinsi_wp').val($data['propinsi_wp']);
                };

                $('#subjek_pajak_id').removeAttr('readonly');
                $('#nm_wp').removeAttr('readonly');
                $('#jalan_wp').removeAttr('readonly');
                $('#blok_kav_no_wp').removeAttr('readonly');
                $('#rw_wp').removeAttr('readonly');
                $('#rt_wp').removeAttr('readonly');
                $('#kelurahan_wp').removeAttr('readonly');
                $('#kota_wp').removeAttr('readonly');
                $('#kd_pos_wp').removeAttr('readonly');
                $('#telp_wp').removeAttr('readonly');
                $('#npwp').removeAttr('readonly');
                $('#status_pekerjaan_wp').removeAttr('readonly');
                $('#kecamatan_wp').removeAttr('readonly');
                $('#propinsi_wp').removeAttr('readonly');
            },
            error: function (xhr, desc, er) {
                alert(er);
            }
        });
    });
    $("#btn_save").click(function () {
        $("#myform").submit();

    })

    $("#btn_reset").click(function () {
        $("#data").css('display', 'none');
        $("#frm1").removeAttr('readonly');
        $("#frm2").removeAttr('readonly');
        $("#frm3").removeAttr('readonly');
        $("#kd_kecamatan").removeAttr('readonly');
        $("#kd_kelurahan").removeAttr('readonly');
        $("#kd_blok").removeAttr('readonly');
        $("#no_urut").removeAttr('readonly');
        $("#kd_jns_op").removeAttr('readonly');

        $('#subjek_pajak_id').attr('readonly', 'readonly');
        $('#nm_wp').attr('readonly', 'readonly');
        $('#jalan_wp').attr('readonly', 'readonly');
        $('#blok_kav_no_wp').attr('readonly', 'readonly');
        $('#rw_wp').attr('readonly', 'readonly');
        $('#rt_wp').attr('readonly', 'readonly');
        $('#kelurahan_wp').attr('readonly', 'readonly');
        $('#kota_wp').attr('readonly', 'readonly');
        $('#kd_pos_wp').attr('readonly', 'readonly');
        $('#telp_wp').attr('readonly', 'readonly');
        $('#npwp').attr('readonly', 'readonly');
        $('#status_pekerjaan_wp').attr('readonly', 'readonly');
        $('#kecamatan_wp').attr('readonly', 'readonly');
        $('#propinsi_wp').attr('readonly', 'readonly');

        $("#btn_validate").css('visibility', 'visible');
        $("#btn_save").attr('disabled', 'disabled');
    });

});