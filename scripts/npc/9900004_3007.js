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
            text += "#b\t#v1142544# * ��ȫ����60  G20 ��#l\r\n"//3
            text += "#b\t#v1112585# * ��ȫ����10 G5 ��#l\r\n"//3
            text += "#b\t#v2340000# * 80#l\r\n"//3
            text += "#b\t#v4000313# *500#l\r\n"//3
            text += "#b\t#v4002000# *200#l\r\n"//3
            text += "#b\t#v4000487# *200#l\r\n"//3
            text += "#b\t#v4251202# *15#l\r\n"//3
            text += "#b\t#v4000463# *100#l\r\n"//3
            text += "#b\tʢ���ȯ #r 50000��#l\r\n"//3
            text += "#b\t\��������ð�ձ�#r 5000000  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170012,1)){
				cm.gainItem(4170012, -1);
				cm.gainItem(2340000, 80);//ף��
				cm.gainItem(4002000, 200);//��ţ��Ʊ
				cm.gainItem(4000487, 200);//��Ӱ��
				cm.gainItem(4000463, 100);//�����
				cm.gainItem(4251202, 15);//���ˮ��
				cm.gainMeso(10000000);
				cm.gainNX(100000);
		cm.gainItem(1142544,60,60,60,60,500,500,20,20,0,0,0,0,0,0);//ѫ��
		cm.gainItem(1112585,10,10,10,10,50,50,5,5,0,0,0,0,0,0);//��ָ
		cm.gainItem(4000313,500);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]������1000Ԫ�������");
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM΢Ц");
            cm.dispose();
			}
		}
    }
}