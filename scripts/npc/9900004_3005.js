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
            text += "#b\t#v1112907# ��ȫ����5 G2��..#l\r\n"//3
            text += "#b\t#v4000313# *30#l\r\n"//3
            text += "#b\t#v2340000# *10#l\r\n"//3
            text += "#b\tʢ���ȯ #r 10000��#l\r\n"//3
            text += "#b\t\��������ð�ձ�#r 1000000  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170010,1)){
				cm.gainItem(4170010, -1);
				cm.gainItem(2340000, 10);
				cm.gainMeso(1000000);
				cm.gainNX(10000);
		cm.gainItem(1112907,5,5,5,5,50,50,2,2,0,0,0,0,0,0);//��ָ
		cm.gainItem(4000313,30);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�һ���100Ԫ�ط��������");
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM΢Ц");
            cm.dispose();
			}
		}
    }
}