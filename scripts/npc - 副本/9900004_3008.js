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
            text += "#b\t#v1112586# * �� ȫ����10 G 5 ��#l\r\n"//3
            text += "#b\t#v1132243# * �� ����һ�� ��#l\r\n"//3
            text += "#b\t#v2340000# * 200#l\r\n"//3
            text += "#b\t#v4000313# *2000#l\r\n"//3
            text += "#b\t#v4002000# *300#l\r\n"//3
            text += "#b\t#v4000487# *300#l\r\n"//3
            text += "#b\t#v4251202# *60#l\r\n"//3
            text += "#b\t#v4310095# *50#l\r\n"//3
            text += "#b\tʢ���ȯ #r 150000��#l\r\n"//3
            text += "#b\t\��������ð�ձ�#r 30000000  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170013,1)){
				cm.gainItem(4170013, -1);
				cm.gainItem(2340000, 200);//ף��
				cm.gainItem(4002000, 300);//��ţ��Ʊ
				cm.gainItem(4000487, 300);//��Ӱ��
				cm.gainItem(4310095, 50);//ǿ����
				cm.gainItem(4251202, 60);//���ˮ��
				cm.gainMeso(30000000);
				cm.gainNX(150000);
		cm.gainItem(1112586,10,10,10,10,50,50,5,5,0,0,0,0,0,0);//��ָ
		cm.gainItem(1132243,1);//ѫ��
		cm.gainItem(1122264,1);//ѫ��
		cm.gainItem(1032220,1);//ѫ��
		cm.gainItem(1113072,1);//ѫ��
		cm.gainItem(4000313,2000);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�һ���3000Ԫ�ط��������");
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM΢Ц");
            cm.dispose();
			}
		}
    }
}