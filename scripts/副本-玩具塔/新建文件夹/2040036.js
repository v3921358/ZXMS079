/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű����������һ��
 */

var �ռ���Ƭ���� = 25;
var ��һ�ؾ��� = 9000;

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (cm == null){
        return;
	}
    var eim = cm.getEventInstance();
    if (eim == null){
        return;
	}
	if (�Ŷ��ж�() == 1 || �Ŷ��ж�() == 2) {
		cm.˵������("�뱣֤���Ѷ��ڳ���");
		cm.�Ի�����();
		return;
	}
    var stage1status = eim.getProperty("stage1status");
    if (stage1status == null) {
        if (cm.isLeader()) {
            var stage1leader = eim.getProperty("stage1leader");
            if (stage1leader == "done") {
                if (cm.haveItem(4001022, �ռ���Ƭ����)) {
                    cm.sendNext("��ϲ�����Ѿ�ͨ���˵�һ�׶Ρ�������ڣ����˵ڶ��׶Ρ�");
                    cm.removeAll(4001022);
                    clear(1, eim, cm);
                    cm.givePartyExp(��һ�ؾ���, eim.getPlayers());
                    cm.�Ի�����();
                } else {
                    cm.sendNext("��ȷ�������ռ��� #r" + �ռ���Ƭ���� + "#k�� #v4001022##k����");
                }
                cm.�Ի�����();
            } else {
                cm.sendOk("��ӭ������һ�׶Ρ����ռ� #r" + �ռ���Ƭ���� + "��#k #v4001022##k �����Ҽ����������");
                eim.setProperty("stage1leader", "done");
                cm.�Ի�����();
            }
        } else {
            cm.sendNext("��ӭ������һ�׶Ρ����ռ�#r#v4001022##k �����ӳ���Ȼ��жӳ������Ҽ����������");
            cm.�Ի�����();
        }
    } else {
        cm.sendNext("��ϲ�����Ѿ�ͨ���˵�һ�׶Ρ�������ڣ����˵ڶ��׶Ρ�");
        cm.�Ի�����();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
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
