/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű������������
 */

var ��С�ȼ� = 35;
var ��ߵȼ� = 255;
var �������� = 4;
var ������� = 6;
//����ֻ��չʾ����Ҫ�޸�2040036+
var ��һ�ؾ��� = 9000;
var �ڶ��ؾ��� = 10000;
var �����ؾ��� = 12000;
var ���Ĺؾ��� = 14000;
var ����ؾ��� = 15000;
var ���߹ؾ��� = 16240;
var �ڰ˹ؾ��� = 22000;
var �ھŹؾ��� = 25000;
var ͨ�ؾ��� = 50000;

//���������Ԥ��
/*
 ��Ʒ������
 */
var ����Ԥ�� = [
	[4001021, 10],
	[4006000, 30],
	[4006001, 30],
    [4010000, 30],
	[4010001, 30],
	[4010002, 30],
	[4010003, 30],
	[4010004, 30],
	[4010005, 30],
	[4010006, 30],
	[4010007, 30],
];
var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {1
            cm.dispose();
            return;
        }
        status--;
    }
	var ����� = cm.getBossRank("�����", 2);
	var ���ͨ����� = cm.��ɫIDȡ����(cm.ȡ����ͨ��������(2));
    var ���ͨ��ʱ�� = ʱ��(cm.ȡ����ͨ�����ʱ��(2));
    var ��ɫ = cm.getPlayer().id;
	if (����� < 0) {
        var ����� = 0;
    }
    if (status == 0) {
		var �ı���Ϣ = "";
        for (var i = 0; i < ����Ԥ��.length; i++) {
            �ı���Ϣ += "   " + cm.��ʾ��Ʒ(����Ԥ��[i][0]) + "  " + ����Ԥ��[i][1] + " % #k\r\n";
        }
        cm.sendYesNo("#e#d[����]:#k#n#r�����#k \r\n     #kHi~#b#h ##k�������101�㸱������Ҫ�������Э����ϣ�����ͨ�أ��������ǻ��������Ķ���������Ҫ�� #b" + �������� + " - " + ������� + "#k���ȼ�Ҫ��#b" + ��С�ȼ� + " - " + ��ߵȼ� + "#k����Ҫ�μӸ���#b�����#k��\r\n\r\n    ��ս����: #b" + ����� + "#k / #r" + cm.getBossLog("�����") + " \r\n\r\n    #k#b#e��������Ԥ��:#n\r\n#d\t��һ�� #r" + ��һ�ؾ��� + "#k\r\n#d\t�ڶ��� #r" + �ڶ��ؾ��� + "#k\r\n#d\t������ #r" + �����ؾ��� + "#k\r\n#d\t���Ĺ� #r" + ���Ĺؾ��� + "#k\r\n#d\t����� #r" + ����ؾ��� + "#k\r\n#d\t���߹� #r" + ���߹ؾ��� + "#k\r\n#d\t�ڰ˹� #r" + �ڰ˹ؾ��� + "#k\r\n#d\t�ھŹ� #r" + �ھŹؾ��� + "#k\r\n\r\n    #k#e#b��������Ԥ��:#n\r\n" + �ı���Ϣ + "");
    } else
    if (status == 1) {
        cm.removeAll(4001022);
        cm.removeAll(4001023);
        if (cm.getParty() == null) {
            cm.sendOk("������������ң������öӳ����ҡ�");
        } else
        if (cm.getParty() == null) {
            cm.˵������("��Ķ���û�дﵽҪ��:\r\n\r\n����: #b�����#k\r\n����: #b" + �������� + " - " + ������� + "#k\r\n�ȼ�: #b" + ��С�ȼ� + " - " + ��ߵȼ� + "#k");
        } else if (!cm.isLeader()) {
            cm.sendSimple("��������������� #b�ӳ�#k ����̸.#b\r\n");
        } else {
            var party = cm.getParty().getMembers();
            var mapId = cm.getMapId();
            var next = true;
            var levelValid = 0;
            var inMap = 0;
            var it = party.iterator();

            while (it.hasNext()) {
                var cPlayer = it.next();
                if ((cPlayer.getLevel() >= ��С�ȼ�) && (cPlayer.getLevel() <= ��ߵȼ�)) {
                    levelValid += 1;
                } else {
                    next = false;
                }
                if (cPlayer.getMapid() == mapId) {
                    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
                }
            }
            if (party.size() > ������� || inMap < ��������) {
                next = false;
            }
			if (�Ŷ��ж�() == 1 || �Ŷ��ж�() == 2) {
                cm.˵������("�뱣֤���Ѷ��ڳ���");
                cm.�Ի�����();
                return;
            }
            if (next) {
                var em = cm.getEventManager("LudiPQ");
                if (em == null) {
                    cm.sendSimple("�Ҳ����ű�������GM#b\r\n");
                } else {
                    var prop = em.getProperty("state");
                    if (prop.equals("0") || prop == null) {
                        em.startInstance(cm.getParty(), cm.getMap());
                        cm.removeAll(4001022);
                        cm.removeAll(4001023);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�#b\r\n");
                    }
                }
            } else {
                cm.sendSimple("��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " + �������� + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + ��С�ȼ� + " �� �ȼ� " + ��ߵȼ� + ".#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l");
            }
        }
        cm.�Ի�����();
    }
}

function ʱ��(value) {
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

function �Ŷ��ж�() {
    var ���� = cm.getParty().getMembers();
    var mapId = cm.�жϵ�ͼ();
    var Channel = cm.getPlayer().getClient().getChannel();
    var valid = 0;
    var it = ����.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (cPlayer.getMapid() != mapId) {
            valid = 1;
        }
        if (cPlayer.getChannel() != Channel) {
            valid = 2;
        }
    }
    return valid;
}
