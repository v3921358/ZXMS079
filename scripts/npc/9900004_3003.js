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
			text += "\t\t\t\t#e#b  ����ð�յ�1000Ԫ������� #k	#n\r\n"
            text += "#b\t#v1402326# * �� ��ѡ0�������� 400��ά ��#l\r\n"//3
            text += "#b\t#v1113070# * �� ȫ����500 ��#l\r\n"//3
            text += "#b\t#v1142557# * �� ȫ����1000 ��#l\r\n"//3
            text += "#b\t#v1132246# * �� ����һ�� ��#l\r\n"//3
			text += "#b\t#v1072743# * �ļ��ס�#d��ѡ����ְҵ��ѡ#b��#l\r\n"//3
            text += "#b\t#r������#k x 50#l\r\n"//3
            text += "#b\t#r���ÿ�#k x 50#l\r\n"//3
            text += "#b\t#r�سɿ�#k x 50#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] *50#l\r\n"//3
            text += "#b\t#v5222000#[�һ����г���] *1#l\r\n"//3
            text += "#b\t#v4310060# *100#l\r\n"//3
            text += "#b\tʢ���ȯ #r 300000���#l\r\n"//3
            text += "#b\t\�������ͽ��#r 10��  #l\r\n\r\n"//3
			text += "#b\t\ÿ��PB����+1(��500������)#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4310003,1000) && cm.getPlayer().getOneTimeLog("1000Ԫ�ۼ��������") == 0){
				cm.getPlayer().setOneTimeLog("1000Ԫ�ۼ��������");
				cm.gainItem(2022466, 4);
				cm.gainItem(2022468, 50);
				cm.gainItem(5222000, 1);
                cm.gainItem(2022467, 1);
				//cm.gainItem(2340000, 100);
				cm.gainMeso(1000000000);
				cm.gainNX(300000);
                  cm.setBossRankCount9("������",50);
	  cm.˵������("��ϲ���ȡ #r������#k x 50 ��");
	  cm.getPlayer().dropMessage(5,"������ + 50");
    cm.setBossRankCount9("���ÿ�",50);
	cm.˵������("��ϲ���ȡ #r���ÿ�#k x 50 ��");
	cm.getPlayer().dropMessage(5,"���ÿ� + 50");
    cm.setBossRankCount9("�سɿ�",50);
	cm.˵������("��ϲ���ȡ #r�سɿ�#k x 50 ��");
	cm.getPlayer().dropMessage(5,"�سɿ� + 50");
cm.������װ��(1113070, 0, 1, 500, 500, 500, 500, 500, 500, 500, 500,0, 0, 0, 0, 40, 40, 0);
cm.������װ��(1142557, 0, 0, 1000, 1000, 1000, 1000, 15000, 15000, 1000, 1000,0, 0, 0, 0, 40, 40, 0);
		cm.gainItem(4310060,100);
		//cm.gainItem(1142003,70,70,70,70,0,0,70,70,0,0,0,0,0,0);//ѫ��
		cm.������װ��(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		cm.������װ��(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		cm.������װ��(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		cm.������װ��(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		//cm.gainItem(4000313,1000);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
		//	cm.worldMessage(6,"��ң�["+cm.getName()+"]������1000Ԫ�������");
cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ��һ���1000Ԫ�ۼ����������")
 
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}