/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű��������������
 */

var �ռ���Ƭ���� = 32;
var �����ؾ��� = 12000;


var status = -1;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
	if(eim==null){
		return;
	}
	if (�Ŷ��ж�() == 1 || �Ŷ��ж�() == 2) {
		cm.˵������("�뱣֤���Ѷ��ڳ���");
		cm.�Ի�����();
		return;
	}
    var stage3status = eim.getProperty("stage3status");

    if (stage3status == null) {
        if (cm.isLeader()) {
            var stage3leader = eim.getProperty("stage3leader");
            if (stage3leader == "done") {

                if (cm.haveItem(4001022, �ռ���Ƭ����)) {
                    cm.sendNext("��ϲ�����Ѿ�ͨ���˵����׶Ρ�������ڣ�����4�׶Ρ�");
                    cm.removeAll(4001022);
                    clear(3, eim, cm);
                    cm.givePartyExp(�����ؾ���, eim.getPlayers());
                } else {
                    cm.sendNext("��ȷ�������ռ��� #r" + �ռ���Ƭ���� + "#k �� #v4001022# ����");
                }
            } else {
                cm.sendOk("��ӭ���������׶Ρ����ռ� #r" + �ռ���Ƭ���� + "#k ��#v4001022# �����Ҽ����������");
                eim.setProperty("stage3leader", "done");
            }
        } else {
            cm.sendNext("��ӭ���������׶Ρ����ռ�#v4001022# �����ӳ���Ȼ��жӳ������Ҽ����������");
        }
    } else {
        cm.sendNext("��ϲ�����Ѿ�ͨ���˵����׶Ρ�������ڣ�����4�׶Ρ�");
    }
    cm.safeDispose();
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
