/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű��������˺�ȡ���
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
    var ��� = cm.���н�����(�˺�);
    if (status <= 0) {
        cm.sendGetText("��������Ҫȡ���Ľ��������");
    } else if (status == 1) {
        ��� = cm.getText();
        if (isNaN(���)) {
            cm.˵������("���벻�淶��");
            cm.�Ի�����();
            return;
        }
        if (��� < 0 || ��� > 1000000000) {
            cm.˵������("��������ȷ�Ľ�");
            cm.�Ի�����();
            return;
        }
        if (cm.���н�����(�˺�) >= ���) {
            cm.�����(���);
			cm.���˴浵();
            cm.������н��(�˺�, ��� - parseInt(���));
            cm.˵������("ȡ����� #b" + ��� + "#k��");
        } else {
            cm.˵������("���㡣");
        }
        cm.�Ի�����();
    }
}