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
	text += "�������Ҿ��Ǳ����ľ������˰˵��֣����и��ŵľ��ѷ������԰������#v1002357##r������ͷ����#k���һ��#b�񼶾���#k\r\n��Ҫ������Ʒ�����Ѿ���ɹ��񼶾��ѵ���ͷ��Ч����\r\n#v1002357# * 1��\r\n#v4440000##d#z4440000# * 10��\r\n#v4441000##d#z4441000# * 10��\r\n#v4442000##d#z4442000# * 10��\r\n#v4310022##d#z4310022# * 200��\r\n#v4443000##d#z4443000# * 10��\r\n#v2140002##d��� * 1��\r\n~\r\n"
	text += "\r\n#L1##b���ռ���������Ʒ��ȷ����ʼ����װ��";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4310022,200) && cm.haveItem(4440000,10) && cm.haveItem(4441000,10) && cm.haveItem(4442000,10)  && cm.haveItem(4443000,10) && cm.haveItem(1002357,1)){
				cm.gainItem(4441000, -10);
				cm.gainItem(4440000, -10);
				cm.gainItem(4442000, -10);
				cm.gainItem(4443000, -10);
				cm.gainItem(4310022, -200);
                                cm.gainMeso(-100000000);
				cm.gainItem(1002357, -1);
                     //cm.gainItem(1002357,60,60,60,60,200,200,10,10,0,0,0,0,0,0);
             cm.������װ��(1002357, 10, 0, 60, 60, 60, 60, 200, 200, 10, 10,0, 0, 0, 0, 20, 20, 0);
            cm.sendOk("���ѳɹ�������ͻ����ʣ�");
            cm.dispose();
//cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]������ͷ�����񼶾��ѳɹ�������ͻ����ʣ���ϲ����");
cm.ȫ����ɫ����("[�񼶾���] : ��ϲ��� "+cm.getPlayer().getName()+" ������ͷ�����񼶾��ѳɹ�������ͻ����ʣ���ϲ����")
 
			}else{
            cm.sendOk("�޷�������������Ĳ��ϲ��㣬��˶Բ��Ϻ����ԣ�\r\n");
            cm.dispose();
			}
		}
    }
}




