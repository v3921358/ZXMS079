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
			text += "\t\t\t\t#e#b  ����ð�յ�3000Ԫ������� #k	#n\r\n"
            text += "#b\t#v1402314#�������� ��  ��ά 500 ��#l\r\n"//3
            text += "#b\t#v1142804# *��ȫ����2888��#l\r\n"//3
            text += "#b\t#r������#k x 200#l\r\n"//3
            text += "#b\t#r���ÿ�#k x 200#l\r\n"//3
            text += "#b\t#r�سɿ�#k x 200#l\r\n"//3
			text += "#b\t#v1402251# *ASһ�׼Ӿ���#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] *50#l\r\n"//3
            text += "#b\t#v5010020#[�һ����г���] *1#l\r\n"//3
            text += "#b\t#v2340000# *400#l\r\n"//3
            text += "#b\tʢ���ȯ #r 3000000���#l\r\n"//3
            text += "#b\t\�������ͽ��#r 10��  #l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4310003,3000) && cm.getPlayer().getOneTimeLog("3000Ԫ�ۼ��������") == 0){
				cm.getPlayer().setOneTimeLog("3000Ԫ�ۼ��������");
				cm.gainItem(2022468, 50);
				cm.gainItem(5010020, 1);
				cm.gainItem(4310156, 5);
				
				//cm.gainItem(1402314, 1);
				cm.gainItem(2340000, 400);
				cm.gainMeso(1000000000);
				cm.gainNX(3000000);
                  cm.setBossRankCount9("������",200);
	  cm.˵������("��ϲ���ȡ #r������#k x 200 ��");
	  cm.getPlayer().dropMessage(5,"������ + 200");
    cm.setBossRankCount9("���ÿ�",200);
	cm.˵������("��ϲ���ȡ #r���ÿ�#k x 200 ��");
	cm.getPlayer().dropMessage(5,"���ÿ� + 200");
    cm.setBossRankCount9("�سɿ�",200);
	cm.˵������("��ϲ���ȡ #r�سɿ�#k x 200 ��");
	cm.getPlayer().dropMessage(5,"�سɿ� + 200");
cm.������װ��(1142804, 0, 0, 2888, 2888, 2888, 2888, 30000, 30000, 2888, 2888,2888, 2888, 2888, 2888, 40, 40, 0);
cm.������װ��(1402314, 0, 0, 500, 500, 500, 500, 500, 500, 500, 500,0, 0, 0, 0, 40, 40, 0);
		//cm.gainItem(1142789,100,100,100,100,0,0,100,100,0,0,0,0,0,0);//ѫ��
				//cm.gainMeso(30000000);
				//cm.gainNX(300000);
		//cm.gainItem(4000313,3000);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
			//cm.worldMessage(6,"��ң�["+cm.getName()+"]������3000Ԫ�������");
cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ��һ���3000Ԫ�ۼ����������")
 
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}