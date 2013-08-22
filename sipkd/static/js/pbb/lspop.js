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


