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
			text += "\t\t\t\t#e#b  ����ð�յ�500Ԫ������� #k	#n\r\n"
            text += "#b\t#v1142409# * ��ȫ����+#r500#kHP+#r10000#k��#l\r\n"//3
            text += "#b\t#v1113034# * ��ȫ����+#r300#k��#l\r\n"//3
            text += "#b\t#r������#k x 20#l\r\n"//3
            text += "#b\t#r���ÿ�#k x 20#l\r\n"//3
            text += "#b\t#r�سɿ�#k x 20#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] *50#l\r\n"//3
			text += "#b\t#v4310036#[����FFN] *125#l\r\n"//3
            text += "#b\t#v5251007#[�һ����г���] *1#l\r\n"//3
            //text += "#b\t#v2340000# *100#l\r\n"//3
            text += "#b\tʢ���ȯ #r 200000���#l\r\n"//3
            text += "#b\t\�������ͽ��#r 10��  #l\r\n\r\n"//3
			text += "#b\t\ÿ��PB����+1#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4310003,500) && cm.getPlayer().getOneTimeLog("500Ԫ�ۼ��������") == 0){
				cm.getPlayer().setOneTimeLog("500Ԫ�ۼ��������");
				cm.gainItem(4310036, 125);
				cm.gainItem(2022468, 50);
				cm.gainItem(5251007, 1);
				//cm.gainItem(2340000, 100);
				cm.gainMeso(1000000000);
				cm.gainNX(200000);
                  cm.setBossRankCount9("������",20);
	  cm.˵������("��ϲ���ȡ #r������#k x 20 ��");
	  cm.getPlayer().dropMessage(5,"������ + 20");
    cm.setBossRankCount9("���ÿ�",6);
	cm.˵������("��ϲ���ȡ #r���ÿ�#k x 20 ��");
	cm.getPlayer().dropMessage(5,"���ÿ� + 20");
    cm.setBossRankCount9("�سɿ�",20);
	cm.˵������("��ϲ���ȡ #r�سɿ�#k x 20 ��");
	cm.getPlayer().dropMessage(5,"�سɿ� + 20");
    
  //   cm.gainPet(5000261, 1, 15, 30, 0, 0);
cm.������װ��(1142409, 0, 0, 500, 500, 500, 500, 10000, 10000, 500, 500,0, 0, 0, 0, 40, 40, 0);
cm.������װ��(1113034, 0, 0, 300, 300, 300, 300, 500, 500, 300, 300,0, 0, 0, 0, 40, 40, 0);
		//cm.gainItem(1142969,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//ѫ��
		//cm.gainItem(1112675,12,13,12,12,0,0,10,9,0,0,0,0,0,0);//��ָ
		//cm.gainItem(4000313,300);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
		//	cm.worldMessage(6,"��ң�["+cm.getName()+"]������500Ԫ�������");
cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ��һ���500Ԫ�ۼƳ�ֵ�����")
 
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}