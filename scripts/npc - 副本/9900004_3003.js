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
            text += "#b\t#v1402326# * �� ��ѡ0�������� ������ #r180#b��#r504 #b���� ��#l\r\n"//3
            text += "#b\t#v1113070# * �� ȫ����230 ������ +#r80#b��#l\r\n"//3
            text += "#b\t#v1142003# * �� ȫ����100 ��#l\r\n"//3
            text += "#b\t#v1132246# * �� ����һ�� ��#l\r\n"//3
            text += "#b\t#r������#k x 6#l\r\n"//3
            text += "#b\t#r���ÿ�#k x 6#l\r\n"//3
            text += "#b\t#r�سɿ�#k x 6#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] *6#l\r\n"//3
            text += "#b\t#v5222000#[�һ����г���] *1#l\r\n"//3
            text += "#b\t#v2340000# *100#l\r\n"//3
            text += "#b\tʢ���ȯ #r 300000���#l\r\n"//3
            text += "#b\t\�������ͽ��#r 100000000  #l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4031505,1)){
				cm.gainItem(4031505, -1);
				cm.gainItem(2022468, 6);
				cm.gainItem(5222000, 1);
                                cm.gainItem(2022467, 1);
				cm.gainItem(2340000, 100);
				cm.gainMeso(100000000);
				cm.gainNX(300000);
                  cm.setBossRankCount9("������",6);
	  cm.˵������("��ϲ���ȡ #r������#k x 6 ��");
	  cm.getPlayer().dropMessage(5,"������ + 6");
    cm.setBossRankCount9("���ÿ�",6);
	cm.˵������("��ϲ���ȡ #r���ÿ�#k x 6 ��");
	cm.getPlayer().dropMessage(5,"���ÿ� + 6");
    cm.setBossRankCount9("�سɿ�",6);
	cm.˵������("��ϲ���ȡ #r�سɿ�#k x 6 ��");
	cm.getPlayer().dropMessage(5,"�سɿ� + 6");
cm.������װ��(1113070, 1, 1, 230, 230, 230, 230, 500, 500, 80, 80,0, 0, 0, 0, 40, 40, 0);
cm.������װ��(1142003, 1, 1, 100, 100, 100, 100, 0, 0, 0, 0,0, 0, 0, 0, 40, 40, 0);
		//cm.gainItem(1113070,20,20,20,20,200,200,20,20,0,0,0,0,0,0);//ѫ��
		//cm.gainItem(1142003,70,70,70,70,0,0,70,70,0,0,0,0,0,0);//ѫ��
		cm.gainItem(1032223,1);//����
		cm.gainItem(1122267,1);//����
		cm.gainItem(1132246,1);//����
		cm.gainItem(1113075,1);//����
		//cm.gainItem(4000313,1000);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
		//	cm.worldMessage(6,"��ң�["+cm.getName()+"]������1000Ԫ�������");
cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ��һ���1000Ԫ�ۼƳ�ֵ�����")
 
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}