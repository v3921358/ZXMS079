/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű��������˺�ע��
 */

importPackage(net.sf.odinms.client);
var status = 0;
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
        cm.sendGetText("������Ҫע��������˺ţ�");
    } else if (status == 1) {
        �˺� = cm.getText();
        /*
         �ж��˺��Ƿ�淶
        */
        if (isNaN(�˺�)) {
            cm.˵������("�����������˺š�");
            cm.�Ի�����();
            return;
        }
        /*
         �ж��˺ŷ�Χ
        */
        if (�˺� > 9999999 || �˺� < 1000000) {
            cm.˵������("�˺Ų��淶��\r\n������ #r9999999 - 1000000#k ֮����˺š� ");
            cm.�Ի�����();
            return;
        }
        cm.sendGetText("������Ҫע����������룻");
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
        if (cm.�����˺�(�˺�) != 0) {
            cm.˵������("�˺� #r" + �˺� + "#k �Ѿ����ڡ�");
            cm.�Ի�����();
            return;
        }
		cm.ע�������˺�(�˺�,����, cm.getPlayer().id);
		cm.˵������("��ϲ��ע�������˺ųɹ���\r\n�˺�:#b"+�˺�+"#k\r\n����:#b"+����+"#k ");
		cm.�Ի�����();
    }
}





