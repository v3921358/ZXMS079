function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
   cm.sendOk("��л��Ĺ��٣�");
   cm.dispose();
   return;                    
                }
                if (mode == 1) {
   status++;
  }
  else {
   status--;
  }
          if (status == 0) {
   cm.sendSimple("      #e���ã�����#r��������#k\r\n\r\n  #d��Ŀǰӵ�еĽ��:#r" + cm.getMeso() + "  \r\n#r #L6##r������#v4440000# #v4441000##v4442000##v4443000#\r\n\r\n#r#L7#����ͷ���� <ȫ��60> #v1003112#\r\n#L3#������ѡ�ȫ��50��  #v1122076# #l");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e���������Ƕ������ӵ�е�#r�ض�װ��#k���о��ѽ����������ӵ��#r��Ӧװ��#k��ǰ���£�ͨ���ռ�#r���Ѳ���#k�����ɶһ�����װ�����������������������");
            cm.dispose();
    }else if  (selection == 1) {
           cm.sendOk("#e������ľ�壬��������а�������ɱ��ѫ�²��У�\r\n#bPS��ѫ���ڰٲ��û�");
		       cm.dispose();
    }else if  (selection == 4) {
           cm.sendOk("#e������߳�#k");
		       cm.dispose();
       } else if (selection == 6) {//
            cm.openNpc(9900004,1834);
		   
    }else if  (selection == 2) {
           cm.sendOk("#e����̩���������ݶ��޶�����");
		       cm.dispose(); 
       } else if (selection == 7) {//
            cm.openNpc(2100008,0);
       } else if (selection == 3) {//
            cm.openNpc(9900004,2108);
    }else if  (selection == 8) {
           cm.sendOk("#e��������֮�ǣ���������й����������װ�����У�\r\n#bPS�������������Ѻʹ廻");
		       cm.dispose();
    }else if  (selection == 9) {
          cm.sendOk("#e���ڰ���ɭ�֣���������������������װ�����У�\r\n#bPS������������ѧԺ��У�����ﻻ");
		       cm.dispose(); 
    }else if  (selection == 3) {
           cm.sendOk("#e�����ƻ������ִ壬��������к�������װ�����У�\r\n#bPS��������ڻƻ���ʿ���任");
		       cm.dispose();
    }else if  (selection == 10) {
           cm.sendOk("#e��������ͷ��֪�����İ�");
		       cm.dispose();


}
}
}
}

