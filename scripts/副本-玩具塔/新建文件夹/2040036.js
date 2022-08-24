/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：玩具塔第一关
 */

var 收集卡片数量 = 25;
var 第一关经验 = 9000;

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
	if (团队判断() == 1 || 团队判断() == 2) {
		cm.说明文字("请保证队友都在场。");
		cm.对话结束();
		return;
	}
    var stage1status = eim.getProperty("stage1status");
    if (stage1status == null) {
        if (cm.isLeader()) {
            var stage1leader = eim.getProperty("stage1leader");
            if (stage1leader == "done") {
                if (cm.haveItem(4001022, 收集卡片数量)) {
                    cm.sendNext("恭喜！你已经通过了第一阶段。快点现在，到了第二阶段。");
                    cm.removeAll(4001022);
                    clear(1, eim, cm);
                    cm.givePartyExp(第一关经验, eim.getPlayers());
                    cm.对话结束();
                } else {
                    cm.sendNext("你确定你有收集了 #r" + 收集卡片数量 + "#k张 #v4001022##k？？");
                }
                cm.对话结束();
            } else {
                cm.sendOk("欢迎来到第一阶段。请收集 #r" + 收集卡片数量 + "张#k #v4001022##k 来找我即可完成任务。");
                eim.setProperty("stage1leader", "done");
                cm.对话结束();
            }
        } else {
            cm.sendNext("欢迎来到第一阶段。请收集#r#v4001022##k 交给队长，然后叫队长来找我即可完成任务。");
            cm.对话结束();
        }
    } else {
        cm.sendNext("恭喜！你已经通过了第一阶段。快点现在，到了第二阶段。");
        cm.对话结束();
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
