/*
 ZEVMSð�յ�(079)��Ϸ�����
 5������
 */
var status = -1;
var huoqu = "#fUI/UIWindow.img/QuestIcon/4/0#";

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (qm.�жϱ���������().isFull()) {
				qm.sendNext("������������һ����λ��");
				qm.�Ի�����();
				return;
			}
			if(qm.getQuestStatus(4760)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����8�����Ի�ø��ཱ���");
			qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ����� #b5#k ����\r\n\r\n"+huoqu+" #v2000019# x 50");
			}
		} else if (status == 1) {
			qm.sendOk("��һ�ν���Ϊ #b8#k ����"); 
			qm.gainItem(2000019, 50);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}