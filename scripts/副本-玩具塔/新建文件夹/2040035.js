/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：玩具塔奖励领取
 */
var status;

function start() {
    status = -1;
    action(1, 0, 0);
}
//副本通关奖励区域
/*
 cm.概率给物品(物品代码，固定数量，概率,备注)；
 cm.概率给物品2(物品代码，随机数量，概率,备注)；
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
        cm.sendNext("请确认你的道具栏有没有满,满了领不到东西喔。");
    } else if (status == 1) {
        var 通关经验 = 50000;
        cm.给经验(通关经验);
        //玩具盛产金属，恩
		
		cm.概率给物品2(4001021, 5, 30, "狸子橡皮擦");
		cm.概率给物品2(4001021, 2, 30, "狸子橡皮擦");
        cm.概率给物品2(4006000, 100, 30, "魔法石");
		cm.概率给物品2(4006000, 100, 30, "魔法石");
        cm.概率给物品2(4006001, 100, 30, "召回石");
        cm.概率给物品2(4010000, 30, 30, "青铜母矿");
        cm.概率给物品2(4010001, 30, 30, "钢铁母矿");
        cm.概率给物品2(4010002, 30, 30, "锂矿石母矿");
        cm.概率给物品2(4010003, 30, 30, "朱矿石母矿");
        cm.概率给物品2(4010004, 30, 30, "银的母矿");
        cm.概率给物品2(4010005, 30, 30, "紫矿石母矿");
        cm.概率给物品2(4010006, 30, 30, "黄金母矿");
        cm.概率给物品2(4010007, 30, 30, "锂母矿");
        //记录通关信息
		var 职业套 = cm.getBossRank6("团队的精神", 2);
		if(职业套 > 0){
			if (cm.getPlayer().VIP > 0) {
				if(cm.getBossLog("职业套每日4") < 3 * 2){
					cm.对话结束();
					cm.打开NPC(9900004,71447504);
					cm.给个人每日("职业套每日4");
				}
			}else if(cm.getBossLog("职业套每日4") < 3){
				cm.对话结束();
				cm.打开NPC(9900004,71447504);
				cm.给个人每日("职业套每日4");
			}
		}
		if(cm.任务结束时间2(3) > Date.now()){
			cm.setBossRankCount9("自由币",5);
			cm.getPlayer().dropMessage(5,"自由币 + 5");
			cm.setBossLog("极限挑战3");
		}
        cm.getPlayer().endPartyQuest(1202);
        cm.setBossRankCount("玩具塔", 1);
        cm.setBossLog("玩具塔");
		cm.worldMessage(2, "[副本-玩具塔] : 恭喜 " + cm.getPlayer().getName() + " 完成玩具塔副本。");
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
    var result = "" + parseInt(theTime) + " 秒 ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " 分 " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
} 