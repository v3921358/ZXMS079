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
			text += "\t\t\t\t#e#b  ����ð�յ�300Ԫ������� #k	#n\r\n"
            text += "#b\t#v1142544# * ��ȫ����+#r300#kHP+#r8000#k��#l\r\n"//3
			text += "#b\t#v1112743# * ��ȫ����+#r200#k��#l\r\n"//3
			text += "#b\t#v4310027# x 200#l\r\n"//3
            text += "#b\t#r������#k x 10#l\r\n"//3
            text += "#b\t#r���ÿ�#k x 10#l\r\n"//3
            text += "#b\t#r�سɿ�#k x 10#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] *50#l\r\n"//3
            //text += "#b\t#v2340000# *60#l\r\n"//3
            text += "#b\tʢ���ȯ #r 200000���#l\r\n"//3
            text += "#b\t\�������ͽ��#r 5��  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4310003,300) && cm.getPlayer().getOneTimeLog("300Ԫ�ۼ��������") == 0){
				cm.getPlayer().setOneTimeLog("300Ԫ�ۼ��������");
				//cm.gainItem(2340000, 60);
				//cm.gainItem(5211047, 1);
				cm.gainItem(2022468, 50);
				cm.gainItem(4310027, 200);
				cm.gainMeso(500000000);
				cm.gainNX(200000);
                  cm.setBossRankCount9("������",10);
	  cm.˵������("��ϲ���ȡ #r������#k x 10 ��");
	  cm.getPlayer().dropMessage(5,"������ + 10");
    cm.setBossRankCount9("���ÿ�",10);
	cm.˵������("��ϲ���ȡ #r���ÿ�#k x 10 ��");
	cm.getPlayer().dropMessage(5,"���ÿ� + 10");
    cm.setBossRankCount9("�سɿ�",10);
	cm.˵������("��ϲ���ȡ #r�سɿ�#k x 10 ��");
	cm.getPlayer().dropMessage(5,"�سɿ� + 10");
cm.������װ��(1142544, 0, 0, 300, 300, 300, 300, 8000, 8000, 300, 300,0, 0, 0, 0, 20, 20, 0);
cm.������װ��(1112743, 0, 0, 200, 200, 200, 200, 500, 500, 200, 200,0, 0, 0, 0, 20, 20, 0);
		//cm.gainItem(4000313,300);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
			//cm.worldMessage(6,"��ң�["+cm.getName()+"]������300Ԫ�������");
cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ��һ���300Ԫ�ۼ����������")
 
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}