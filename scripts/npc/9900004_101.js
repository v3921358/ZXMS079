/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű�������������
 */

importPackage(net.sf.odinms.client);
var status = 0;
var status1 = 0;
var �˺�;
var ����;
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (status <= 0 && mode <= 0) {
        cm.�Ի�����();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }
    if (status <= 0) {
        cm.sendGetText("�����������˺ţ�");
    } else if (status == 1) {
        �˺� = cm.getText();
        /*
         �ж��˺ŷ�Χ
         */
        if (�˺� > 9999999 || �˺� < 1000000) {
            cm.˵������("�˺Ų��淶��\r\n������ #r9999999 -1000000#k ֮����˺š� ");
            cm.�Ի�����();
            return;
        }
        /*
         �ж��˺��Ƿ�淶
         */
        if (isNaN(�˺�)) {
            cm.˵������("�����������˺š�");
            cm.�Ի�����();
            return;
        }
        cm.sendGetText("�������������룻");
    } else if (status == 2) {
        ���� = cm.getText();
        /*
         �ж������Ƿ�淶
         */
        if (isNaN(����)) {
            cm.˵������("�������������롣");
            cm.�Ի�����();
            return;
        }
        /*
         �ж����뷶Χ
         */
        if (���� > 9999999 || ���� < 1000000) {
            cm.˵������("���벻�淶��\r\n������ #r9999999 -1000000#k ֮������롣 ");
            cm.�Ի�����();
            return;
        }
        /*
         �ж��˺��Ƿ����
         */
        if (cm.�����˺�(�˺�) == 0) {
            cm.˵������("�˺� #r" + �˺� + "#k �����ڡ�");
            cm.�Ի�����();
            return;
        }
        /*
         �ж��˺�����
         */
        if (cm.�����˺�����(�˺�) != ����) {
            cm.˵������("���벻��ȷ��");
            cm.�Ի�����();
            return;
        }
        cm.getPlayer().�����˺�(�˺�);
        cm.getPlayer().��������(����);
        /*
         ��ʾ�����˺��ڲ���Ϣ
         */
        var selStr = "  " + �� + "  " + �� + "  " + �� + "  " + �� + " #r#e < �������� > #k#n " + �� + "  " + �� + "  " + �� + "  " + �� + "\r\n\r\n";
	    selStr += "��\t\t\t\t\t\t\t\t\t\t\t\t\t��\r\n";
        selStr += "\t\t#d���� : #b" + cm.��ɫIDȡ����(cm.���п�����(�˺�)) + "#k\r\n";
        selStr += "\t\t#d�˺� : #b" + cm.getPlayer().�����˺�() + "#k\r\n";
        selStr += "\t\t#d��� : #r" + cm.���н�����(�˺�) + "#k\r\n";
        selStr += "\t\t#d��ȯ : #r" + cm.���е�ȯ���(�˺�) + "#k\r\n\r\n";
		selStr += "��\t\t\t\t\t\t\t\t\t\t\t\t\t��\r\n#b";
		selStr += "\t\t#L6#ת�˽��#l   #L10#ת���¼#l  #L11#ת����¼#l\r\n";
		selStr += "\t\t#L5#ת�˵�ȯ#l   #L7#�޸�����#l  #L0##r�˳�����#k#l\r\n";
		selStr += "\t\t#b#L1#ȡ��ȯ#l #L3#ȡ���#l #L2#���ȯ#l #L4#����#l\r\n";

        cm.˵������(selStr);
    } else if (status == 3) {
        switch (selection) {
			/*
			ת����¼
			*/
            case 11:
                cm.�Ի�����();
                cm.��NPC(9900004, 111);
                break;	
			/*
			ת���¼
			*/
            case 10:
                cm.�Ի�����();
                cm.��NPC(9900004, 110);
                break;	
			/*
			�޸�����
			*/
            case 7:
                cm.�Ի�����();
                cm.��NPC(9900004, 109);
                break;
			/*
			ת�˽��
			*/
            case 6:
                cm.�Ի�����();
                cm.��NPC(9900004, 108);
                break;
			/*
			ת�˵�ȯ
			*/
            case 5:
                cm.�Ի�����();
                cm.��NPC(9900004, 107);
                break;
			/*
			����
			*/
            case 4:
                cm.�Ի�����();
                cm.��NPC(9900004, 106);
                break;
			/*
			ȡ���
			*/
            case 3:
                cm.�Ի�����();
                cm.��NPC(9900004, 105);
                break;
			/*
			�˳�����
			*/
			case 0:
			    cm.�Ի�����();
                cm.��NPC(9900004, 0);
                break;
			/*
			ȡ��ȯ
			*/
            case 1:
			    cm.�Ի�����();
                cm.��NPC(9900004, 103);
                break;
			/*
			���ȯ
			*/
            case 2:
                cm.�Ի�����();
                cm.��NPC(9900004, 104);
                break;
        }
	}
}

