/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű��������������ȡ
 */
var status;

function start() {
    status = -1;
    action(1, 0, 0);
}
//����ͨ�ؽ�������
/*
 cm.���ʸ���Ʒ(��Ʒ���룬�̶�����������,��ע)��
 cm.���ʸ���Ʒ2(��Ʒ���룬�������������,��ע)��
 */
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("��ȷ����ĵ�������û����,�����첻������ม�");
    } else if (status == 1) {
        var ͨ�ؾ��� = 50000;
        cm.������(ͨ�ؾ���);
        //���ʢ����������
		
		cm.���ʸ���Ʒ2(4001021, 5, 30, "������Ƥ��");
		cm.���ʸ���Ʒ2(4001021, 2, 30, "������Ƥ��");
        cm.���ʸ���Ʒ2(4006000, 100, 30, "ħ��ʯ");
		cm.���ʸ���Ʒ2(4006000, 100, 30, "ħ��ʯ");
        cm.���ʸ���Ʒ2(4006001, 100, 30, "�ٻ�ʯ");
        cm.���ʸ���Ʒ2(4010000, 30, 30, "��ͭĸ��");
        cm.���ʸ���Ʒ2(4010001, 30, 30, "����ĸ��");
        cm.���ʸ���Ʒ2(4010002, 30, 30, "﮿�ʯĸ��");
        cm.���ʸ���Ʒ2(4010003, 30, 30, "���ʯĸ��");
        cm.���ʸ���Ʒ2(4010004, 30, 30, "����ĸ��");
        cm.���ʸ���Ʒ2(4010005, 30, 30, "�Ͽ�ʯĸ��");
        cm.���ʸ���Ʒ2(4010006, 30, 30, "�ƽ�ĸ��");
        cm.���ʸ���Ʒ2(4010007, 30, 30, "�ĸ��");
        //��¼ͨ����Ϣ
		var ְҵ�� = cm.getBossRank6("�Ŷӵľ���", 2);
		if(ְҵ�� > 0){
			if (cm.getPlayer().VIP > 0) {
				if(cm.getBossLog("ְҵ��ÿ��4") < 3 * 2){
					cm.�Ի�����();
					cm.��NPC(9900004,71447504);
					cm.������ÿ��("ְҵ��ÿ��4");
				}
			}else if(cm.getBossLog("ְҵ��ÿ��4") < 3){
				cm.�Ի�����();
				cm.��NPC(9900004,71447504);
				cm.������ÿ��("ְҵ��ÿ��4");
			}
		}
		if(cm.�������ʱ��2(3) > Date.now()){
			cm.setBossRankCount9("���ɱ�",5);
			cm.getPlayer().dropMessage(5,"���ɱ� + 5");
			cm.setBossLog("������ս3");
		}
        cm.getPlayer().endPartyQuest(1202);
        cm.setBossRankCount("�����", 1);
        cm.setBossLog("�����");
		cm.worldMessage(2, "[����-�����] : ��ϲ " + cm.getPlayer().getName() + " ��������������");
        cm.warp(221024500);
        cm.dispose();
    }
}

function formatSeconds(value) {
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + " �� ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " �� " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
} 