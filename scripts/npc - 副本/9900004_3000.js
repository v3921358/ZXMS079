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
			text += "\t\t\t\t#e#b  ð�յ�VIP ��� #k	#n\r\n"
            text += "#b\t#v1112444# ��Ȼ..#l\r\n"//3
            text += "#b\t#v5211047# ����#l\r\n"//3
            text += "#b\t#v1142178# ȫ��+#r50#k  #l\r\n"//3
            text += "#b\t#r������#k x 1#l\r\n"//3
            text += "#b\t#r���ÿ�#k x 1#l\r\n"//3
            text += "#b\t#r�سɿ�#k x 1#l\r\n"//3
            text += "#b\t#v2022468#[��ѡ�سɾ�] *2#l\r\n"//3
            text += "#b\t#v2340000# *30#l\r\n"//3
            text += "#b\tʢ���ȯ #r 100000 ���#l\r\n"//3
            text += "#b\t\�������ͽ��#r 10000000  #l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4000423,1)){
				cm.gainItem(4000423, -1);
				cm.gainItem(2340000, 30);
				cm.gainItem(5211047, 1);
				cm.gainItem(2022468, 2);
				cm.gainMeso(10000000);
				cm.gainNX(100000);
                  cm.setBossRankCount9("������",1);
	  cm.˵������("��ϲ���ȡ #r������#k x 1 ��");
	  cm.getPlayer().dropMessage(5,"������ + 1");
    cm.setBossRankCount9("���ÿ�",1);
	cm.˵������("��ϲ���ȡ #r���ÿ�#k x 1 ��");
	cm.getPlayer().dropMessage(5,"���ÿ� + 1");
    cm.setBossRankCount9("�سɿ�",1);
	cm.˵������("��ϲ���ȡ #r�سɿ�#k x 1 ��");
	cm.getPlayer().dropMessage(5,"�سɿ� + 1");
cm.������װ��(1112444, 1, 1, 8, 8, 8, 8, 300, 300, 15, 15,0, 0, 0, 0, 0, 0, 0);
cm.������װ��(1142178, 1, 1, 50, 50, 50, 50, 300, 300, 0, 0,0, 0, 0, 0, 20, 20, 0);
		//cm.gainItem(4000313,30);//�ƽ��Ҷ
            cm.sendOk("����ɹ���");
	//cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��100Ԫ�ۼ��������");
cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ��һ���100Ԫ�ۼƳ�ֵ�����")
 
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}