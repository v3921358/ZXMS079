/*
 ZEVMSð�յ�(079)��Ϸ�����
 8������
 */
var huoqu = "#fUI/UIWindow.img/QuestIcon/4/0#";
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			if (qm.�жϱ���������().isFull() && qm.�жϱ���װ����().isFull()) {
				qm.sendNext("������������һ����λ��");
				qm.�Ի�����();
				return;
			}
            if (qm.getQuestStatus(4761) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����10�����Ի���½����");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ����� #b8#k ����\r\n\r\n"+huoqu+" #v1082149# x 1#v2040804# x 7");
            }
        } else if (status == 1) {
            qm.sendOk("��һ�ν���Ϊ #b10#k ����");
            qm.gainItem(1082149, 1);
			qm.gainItem(2040804, 7);
            qm.completeQuest();
            qm.dispose();
        }
    }
}