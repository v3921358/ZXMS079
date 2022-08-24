/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：玩具塔第二关
 */

var 收集卡片数量 = 15;
var 第二关经验 = 10000;

var status;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
	if(eim==null){
		return;
	}
	if (团队判断() == 1 || 团队判断() == 2) {
		cm.说明文字("请保证队友都在场。");
		cm.对话结束();
		return;
	}
    var stage2status = eim.getProperty("stage2status");
    if (stage2status == null) {
        if (cm.isLeader()) {
            var stage2leader = eim.getProperty("stage2leader");
            if (stage2leader == "done") {

                if (cm.haveItem(4001022, 收集卡片数量)) {
                    cm.sendNext("恭喜！你已经通过了第二阶段。快点现在，到第三阶段。");
                    cm.removeAll(4001022);
                    clear(2, eim, cm);
                    cm.givePartyExp(第二关经验);
                    cm.dispose();
                } else {
                    cm.sendNext("你确定你有收集了 #r" + 收集卡片数量 + "#k张 #v4001022#？？");
                }
                cm.dispose();
            } else {
                cm.sendOk("欢迎来到第二阶段。请收集 #r" + 收集卡片数量 + "#k张#v4001022# 来找我即可完成任务。");
                eim.setProperty("stage2leader", "done");
                cm.dispose();
            }
        } else {
            cm.sendNext("欢迎来到第二阶段。请收集#v4001022# 交给队长，然后叫队长来找我即可完成任务。");
            cm.dispose();
        }
    } else {
        cm.sendNext("恭喜！你已经通过了第二阶段。快点现在，到第三阶段。");
        cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}

function 团队判断() {
    var 队伍 = cm.getParty().getMembers();
    var mapId = cm.判断地图();
    var Channel = cm.getPlayer().getClient().getChannel();
    var valid = 0;
    var it = 队伍.iterator();
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
