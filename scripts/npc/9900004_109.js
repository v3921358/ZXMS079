/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű��������˺��޸�����
 */

importPackage(net.sf.odinms.client);
var status = 0;
var ���;

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
    var �˺� = cm.getPlayer().�����˺�();
    if (status <= 0) {
        cm.sendGetText("��������Ҫ�޸ĵ����룻");
    } else if (status == 1) {
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
		cm.��������˺�����(�˺�,����);
		cm.˵������("�����޸ĳɹ���");
        cm.�Ի�����();
    }
}