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
                
   cm.sendOk("��лʹ��.");
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
	var tex2 = "";	
	var text = "";
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d�ϳ�-- #r��6000HPѪ�¡���Ҫ������Ʒ��\r\n#v1012176##d3000HPѪ�� * 1��\r\n#v4000313##d#z4000313# * 500��\r\n#v4000152##d#z4000152# * 300��\r\n#v4000151##d#z4000151# * 300��\r\n#v4000407##d#z4000407# * 300��\r\n#v4000402##d#z4000402# * 300��\r\n#v4000406##d#z4000406# * 300��\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������6000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012083,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000313, 500) && cm.haveItem(4000152,300) && cm.haveItem(4000151,300) && cm.haveItem(4000407,300) && cm.haveItem(4000402,300) && cm.haveItem(4000406,300) && cm.haveItem(1012176,1)){
				cm.gainItem(4000313, -500);
				cm.gainItem(4000152, -300);
				cm.gainItem(4000151, -300);
				cm.gainItem(4000407, -300);
				cm.gainItem(4000402, -300);
				cm.gainItem(4000406, -300);
				cm.gainItem(1012176, -1);
//cm.gainItem(1012057,0,0,0,0,6000,6000,0,0,0,0,0,0,0,0);
cm.������װ��(1012057, 1, 0, 0, 0, 0, 0, 6000, 6000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.worldMessage(6, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����6000HPѪ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������\r\n#v4000313#����500��\r\n#v4000152#����300��\r\n#v4000151#����300��\r\n#v4000407#����300��\r\n#v4000402#����300��\r\n#v4000406#����300��\r\n#v1012176#����1��\r\n");
            cm.dispose();
			}
		}
    }
}




