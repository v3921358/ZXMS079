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
			text += "\t\t\t\t#e#b  ð�յ�������� #k	#n\r\n"
            text += "#b\t#v1142099# * �� 15����֮ѫ�£� ������ +#r35 #b���� ��#l\r\n"//3
            text += "#b\t#v1142101# * �� ȫ����20 ������ +#r15#b��#l\r\n"//3
           // text += "#b\t#v1142003# * �� ȫ����100 ��#l\r\n"//3
            text += "#b\t#v2022465# * �� ��������Ҽ��ܵ� �� x #r30#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] *1#l\r\n"//3
            text += "#b\t#v1932243#[����ʼ�����] *1#l\r\n"//3
            text += "#b\t#v2012000##z2012000# *20#l\r\n"//3
            text += "#b\t#v2000019##z2000019# *200#l\r\n"//3
            text += "#b\t#v2340000##z2340000# *10#l\r\n"//3
            text += "#b\tʢ���ȯ #r 20000���#l\r\n"//3
            text += "#b\t\�������ͽ��#r 2000000  #l\r\n\r\n"//3
            text += "#L1##rȷ����ȡ������͵��Ұɣ�#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(2022552,1)){
				cm.gainItem(2022552, -1);
				cm.gainItem(2022468, 1);
				cm.gainItem(2022678, 1);
				cm.gainItem(2012000, 20);
				cm.gainItem(2022465, 30);
                                cm.gainItem(2000019, 200);
				cm.gainItem(2340000, 10);
				cm.gainMeso(2000000);
				cm.gainNX(20000);
                
cm.������װ��(1142099, 100, 1, 20, 20, 20, 20, 500, 500, 35, 35,0, 0, 0, 0, 40, 40, 380);
cm.������װ��(1142101, 1, 1, 20, 20, 20, 20, 500, 500, 15, 15,0, 0, 0, 0, 40, 40, 0);
		//cm.gainItem(1113070,20,20,20,20,200,200,20,20,0,0,0,0,0,0);//ѫ��
		//cm.gainItem(1142003,70,70,70,70,0,0,70,70,0,0,0,0,0,0);//ѫ��
		//cm.gainItem(1032223,1);//����
		//cm.gainItem(1122267,1);//����
		//cm.gainItem(1132246,1);//����
		//cm.gainItem(1113075,1);//����
		//cm.gainItem(4000313,1000);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
		//	cm.worldMessage(6,"��ң�["+cm.getName()+"]������1000Ԫ�������");
cm.ȫ����ɫ����("[�������] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ�����˴������")
 
            cm.dispose();
			}else{
            cm.sendOk("#e#bһ����ֻ����ȡһ�Σ���֧��С�ţ�\r\n #dQQ����Ⱥ��652862993 \r\n #rQQ��ϵ�ͷ�Ⱥ������ɫ����ȡ��");
            cm.dispose();
			}
		}
    }
}