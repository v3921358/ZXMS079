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
            text += "#b\t#v1402304# * �� ������ѡһ�ѣ���ϵGM��� ��#l\r\n"//3
            text += "#b\t#v1042255# * �� ��ѡְҵһ��FFN���������� ����ϵGM��� ��#l\r\n"//3
            text += "#b\t#v2044003# * 30����ѡ ��ϵGM��á�#l\r\n"//3
            text += "#b\t#v4000313# *3000#l\r\n"//3
            text += "#b\t#v4002000# *600#l\r\n"//3
            text += "#b\t#v4000487# *600#l\r\n"//3
            text += "#b\t#v4000463# *600#l\r\n"//3
            text += "#b\t#v4251202# *100#l\r\n"//3
            text += "#b\t#v4310095# *100#l\r\n"//3
            text += "#b\tʢ���ȯ #r 300000��#l\r\n"//3
            text += "#b\t\��������ð�ձ�#r 60000000  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170015,1)){
				cm.gainItem(4170015, -1);
				cm.gainItem(4002000, 600);//��ţ��Ʊ
				cm.gainItem(4000487, 600);//��Ӱ��
				cm.gainItem(4000463, 600);//�����
				cm.gainItem(4310095, 100);//ǿ����
				cm.gainItem(4251202, 100);//���ˮ��
				cm.gainMeso(30000000);
				cm.gainNX(300000);
		cm.gainItem(4000313,3000);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�һ���6000Ԫ�ط��������");
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM΢Ц");
            cm.dispose();
			}
		}
    }
}