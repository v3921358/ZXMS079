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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b  ð�յ�VIP��� #k	#n\r\n"
            text += "#b\t#v1142101# * ��ȫ����25  G10 ��#l\r\n"//3
            text += "#b\t#v2049170# * 10#l\r\n"//3
            text += "#b\t#v4000313# *100#l\r\n"//3
            text += "#b\t#v4002000# *50#l\r\n"//3
            text += "#b\t#v4000487# *50#l\r\n"//3
            text += "#b\tʢ���ȯ #r 50000��#l\r\n"//3
            text += "#L1##rȷ�����������͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4170011,1)){
				cm.gainItem(4170011, -1);
				cm.gainItem(2049170, 10);//ף��
				cm.gainItem(4002000, 50);//��ţ��Ʊ
				cm.gainItem(4000487, 50);//��Ӱ��
				cm.gainNX(50000);
		cm.gainItem(1142101,25,25,25,25,200,200,10,10,10,10,0,0,0,0);//ѫ��
		cm.gainItem(4000313,100);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]������500Ԫ�ط��������");
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM΢Ц");
            cm.dispose();
			}
		}
    }
}