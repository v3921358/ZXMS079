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
	text += "#d�ϳ�-- #r��  #v1113096#����Ҫ������Ʒ�� ����Ȼ���ԡ�\r\n#v4000313##d#z4000313# * 100��\r\n#v4001126##d#z4001126# * 888��\r\n#v1112540##d#z1112540# * 1��\r\n#v4000019##d#z4000019# * 500��\r\n#v4000000##d#z4000000# * 400��\r\n#v4000016##d#z4000016# * 300��\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ����������ר����ָ�� ";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112540,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose()
        } else if(cm.haveItem(4000313,100) && cm.haveItem(4001126,888) && cm.haveItem(4000019,500)&& cm.haveItem(4000016,300)&& cm.haveItem(4000000,400)&& cm.haveItem(1112540,1)){
				cm.gainItem(4000313, -100);
				cm.gainItem(4000019, -500);
				cm.gainItem(4000016, -300);
				cm.gainItem(4000000, -400);
				cm.gainItem(4001126, -888);
				cm.gainItem(1112540, -1);			
cm.gainItem(1113096,30,30,30,30,200,200,8,8,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.worldMessage(6, "��ң�[" + cm.getPlayer().getName() + "]�ɹ������ﱾ��ר����ָ���ϲ����");
			}else{
            cm.sendOk("�޷���������Ĳ��ϲ��㣬������Ĳ���");
            cm.dispose();
			}
		}
    }
}




