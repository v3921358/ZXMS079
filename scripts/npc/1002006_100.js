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
	text += "#d�ϳ�-- #r��1000HPѪ�¡���Ҫ������Ʒ��\r\n#v4000017##d#z4000017# * 50��\r\n#v4000005##d#z4000005# * 300��\r\n#v4000021##d#z4000021# * 200��\r\n#v4000010##d#z4000010# * 200��\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������1000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012412,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000017,50) && cm.haveItem(4000005,300) && cm.haveItem(4000021,200) && cm.haveItem(4000010,200)){
				cm.gainItem(4000017, -100);
				cm.gainItem(4000005, -300);
				cm.gainItem(4000021, -400);
				cm.gainItem(4000010, -400);
//cm.gainItem(1012412,0,0,0,0,1000,1000,0,0,0,0,0,0,0,0);
cm.������װ��(1012412, 1, 0, 0, 0, 0, 0, 1000, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.worldMessage(6, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����1000HPѪ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v4000017#����100��\r\n#v4000005#����300��\r\n#v4000021#����400��\r\n#v4000010#����400��\r\n");
            cm.dispose();
			}
		}
    }
}




