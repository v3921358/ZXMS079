/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：玩具塔副本
 */

var 最小等级 = 35;
var 最高等级 = 255;
var 最少人数 = 4;
var 最多人数 = 6;
//以下只是展示，需要修改2040036+
var 第一关经验 = 9000;
var 第二关经验 = 10000;
var 第三关经验 = 12000;
var 第四关经验 = 14000;
var 第五关经验 = 15000;
var 第七关经验 = 16240;
var 第八关经验 = 22000;
var 第九关经验 = 25000;
var 通关经验 = 50000;

//玩具塔奖励预览
/*
 物品，概率
 */
var 奖励预览 = [
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
	var 总完成 = cm.getBossRank("玩具塔", 2);
	var 最快通关玩家 = cm.角色ID取名字(cm.取副本通关最快玩家(2));
    var 最快通关时间 = 时间(cm.取副本通关最快时间(2));
    var 角色 = cm.getPlayer().id;
	if (总完成 < 0) {
        var 总完成 = 0;
    }
    if (status == 0) {
		var 文本信息 = "";
        for (var i = 0; i < 奖励预览.length; i++) {
            文本信息 += "   " + cm.显示物品(奖励预览[i][0]) + "  " + 奖励预览[i][1] + " % #k\r\n";
        }
        cm.sendYesNo("#e#d[副本]:#k#n#r玩具塔#k \r\n     #kHi~#b#h ##k，玩具塔101层副本，需要大家齐心协力配合，才能通关，这里是智慧与力量的锻炼。人数要求 #b" + 最少人数 + " - " + 最多人数 + "#k，等级要求#b" + 最小等级 + " - " + 最高等级 + "#k，你要参加副本#b玩具塔#k吗？\r\n\r\n    挑战次数: #b" + 总完成 + "#k / #r" + cm.getBossLog("玩具塔") + " \r\n\r\n    #k#b#e副本经验预览:#n\r\n#d\t第一关 #r" + 第一关经验 + "#k\r\n#d\t第二关 #r" + 第二关经验 + "#k\r\n#d\t第三关 #r" + 第三关经验 + "#k\r\n#d\t第四关 #r" + 第四关经验 + "#k\r\n#d\t第五关 #r" + 第五关经验 + "#k\r\n#d\t第七关 #r" + 第七关经验 + "#k\r\n#d\t第八关 #r" + 第八关经验 + "#k\r\n#d\t第九关 #r" + 第九关经验 + "#k\r\n\r\n    #k#e#b副本奖励预览:#n\r\n" + 文本信息 + "");
    } else
    if (status == 1) {
        cm.removeAll(4001022);
        cm.removeAll(4001023);
        if (cm.getParty() == null) {
            cm.sendOk("请组队再来找我，或者让队长找我。");
        } else
        if (cm.getParty() == null) {
            cm.说明文字("你的队伍没有达到要求:\r\n\r\n副本: #b玩具塔#k\r\n人数: #b" + 最少人数 + " - " + 最多人数 + "#k\r\n等级: #b" + 最小等级 + " - " + 最高等级 + "#k");
        } else if (!cm.isLeader()) {
            cm.sendSimple("如果你想做任务，请 #b队长#k 跟我谈.#b\r\n");
        } else {
            var party = cm.getParty().getMembers();
            var mapId = cm.getMapId();
            var next = true;
            var levelValid = 0;
            var inMap = 0;
            var it = party.iterator();

            while (it.hasNext()) {
                var cPlayer = it.next();
                if ((cPlayer.getLevel() >= 最小等级) && (cPlayer.getLevel() <= 最高等级)) {
                    levelValid += 1;
                } else {
                    next = false;
                }
                if (cPlayer.getMapid() == mapId) {
                    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
                }
            }
            if (party.size() > 最多人数 || inMap < 最少人数) {
                next = false;
            }
			if (团队判断() == 1 || 团队判断() == 2) {
                cm.说明文字("请保证队友都在场。");
                cm.对话结束();
                return;
            }
            if (next) {
                var em = cm.getEventManager("LudiPQ");
                if (em == null) {
                    cm.sendSimple("找不到脚本请联络GM#b\r\n");
                } else {
                    var prop = em.getProperty("state");
                    if (prop.equals("0") || prop == null) {
                        em.startInstance(cm.getParty(), cm.getMap());
                        cm.removeAll(4001022);
                        cm.removeAll(4001023);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendSimple("其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。#b\r\n");
                    }
                }
            } else {
                cm.sendSimple("你的队伍貌似没有达到要求...:\r\n\r\n#r要求: " + 最少人数 + " 玩家成员, 每个人的等级必须在 " + 最小等级 + " 到 等级 " + 最高等级 + ".#b\r\n#L0#我要兑换有裂痕的眼镜#l");
            }
        }
        cm.对话结束();
    }
}

function 时间(value) {
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
    var result = "" + parseInt(theTime) + " 秒 ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " 分 " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
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
