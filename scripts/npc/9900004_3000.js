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
			text += "\t\t\t\t#e#b  ����ð�յ�100Ԫ������� #k	#n\r\n"
            text += "#b\t#v1302081# ������ѡ����6��#l\r\n"//3
            text += "#b\t#v1142679# ȫ��+#r150#k HP+#r5000#k #l\r\n"//3
            text += "#b\t#r������#k x 5#l\r\n"//3
            text += "#b\t#r���ÿ�#k x 5#l\r\n"//3
            text += "#b\t#r�سɿ�#k x 5#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] x20#l\r\n"//3
			text += "#b\t#v4310014# x1000#l\r\n"//3
            text += "#b\tʢ���ȯ #r 100000 ��ȯ#l\r\n"//3
            text += "#b\t\�������ͽ��#r 1��  #l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4310003,100) && cm.getPlayer().getOneTimeLog("100Ԫ�ۼ��������") == 0){
				cm.getPlayer().setOneTimeLog("100Ԫ�ۼ��������");
				cm.gainItem(4310113, 1728);
				cm.gainItem(4310022, 528);
				cm.gainItem(4310014, 1000);
				cm.gainItem(2022468, 20);
				cm.gainMeso(100000000);
				cm.gainNX(100000);
                  cm.setBossRankCount9("������",5);
	  cm.˵������("��ϲ���ȡ #r������#k x 5 ��");
	  cm.getPlayer().dropMessage(5,"������ + 5");
    cm.setBossRankCount9("���ÿ�",5);
	cm.˵������("��ϲ���ȡ #r���ÿ�#k x 5 ��");
	cm.getPlayer().dropMessage(5,"���ÿ� + 5");
    cm.setBossRankCount9("�سɿ�",5);
	cm.˵������("��ϲ���ȡ #r�سɿ�#k x 5 ��");
	cm.getPlayer().dropMessage(5,"�سɿ� + 5");
cm.������װ��(1142679, 0, 0, 150, 150, 150, 150, 5000, 5000, 150, 150,0, 0, 0, 0, 0, 0, 0);

		//cm.gainItem(4000313,30);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
	//cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��100Ԫ�ۼ��������");
cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ��һ���100Ԫ�ۼ����������")
 
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}