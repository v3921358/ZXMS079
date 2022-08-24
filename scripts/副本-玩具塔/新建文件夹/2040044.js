/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：玩具塔第九关
 */

var 第九关经验 = 25000;
var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == -1 && cm.isLeader()) {
        var eim = cm.getEventInstance();
		if(eim==null){
			return;
		}
	if (团队判断() == 1 || 团队判断() == 2) {
		cm.说明文字("请保证队友都在场。");
		cm.对话结束();
		return;
	}
        if (eim.getProperty("crackLeaderPreamble") == null) {
            eim.setProperty("crackLeaderPreamble", "done");
            cm.sendNext("请干掉 窗台上的 #b黑色老鼠#k 然后就会召唤 #b最终boss#k 干掉之后捡到钥匙再来找我。");
            cm.dispose();
        } else {
            if (cm.haveItem(4001023)) {
                status = 0;
                cm.sendNext("恭喜完成，想要前往颁奖之地？");
            } else {
                cm.sendNext("请打败#r最终boss#k 给我#v4001023#。");
                cm.dispose();
            }
        }
    } else if (status == -1 && !cm.isLeader()) {
        cm.sendNext("请干掉 窗台上的 #b黑色老鼠#k 然后就会召唤 #b最终boss#k 干掉之后捡到钥匙再来来请队长找我。");
        cm.dispose();
    } else if (status == 0 && cm.isLeader()) {
        var eim = cm.getEventInstance();
        clear(9, eim, cm);
        cm.gainItem(4001023, -1);

        var players = eim.getPlayers();
        cm.givePartyExp(第九关经验, players);
        eim.setProperty("cleared", "true"); 
        eim.restartEventTimer(60000);
        var bonusmap = cm.getMap(922011000);
        for (var i = 0; i < players.size(); i++) {
            players.get(i).changeMap(bonusmap, bonusmap.getPortal(0));
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function clear(stage, eim) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
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
