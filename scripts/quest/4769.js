/*
 ZEVMSð�յ�(079)��Ϸ�����
 70������
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
            if (qm.�жϱ���������().isFull(2)) {
                qm.sendNext("������������������λ��");
                qm.�Ի�����();
                return;
            }
            if (qm.getQuestStatus(4769) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����71�����Ի�ø��ཱ���");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ����� #b70#k ����\r\n\r\n" + huoqu + " #v1032113# #v1102041# #v1132093# x 1");
            }
        } else if (status == 1) {
            qm.sendOk("��һ�ν���Ϊ #b71#k ����");
            qm.gainItem(1032113, 1);
            qm.gainItem(1102041, 1);
            qm.gainItem(1132093, 2);
            qm.completeQuest();
            qm.dispose();
        }
    }
}