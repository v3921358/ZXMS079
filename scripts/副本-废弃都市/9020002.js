/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：废弃都市奖励
 */
importPackage(java.awt);
importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.handling.world);
var status;

function start() {
    status = -1;
    action(1, 0, 0);
}
var time = 0;
function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.对话结束();
        return;
    } else {
        if (mode == 1){
            status++;
        }else{
            status--;
		}
        var mapId = cm.getMapId();
        if (mapId == 103000890) {
            cm.warp(103000000, "mid00");
            cm.removeAll(4001007);
            cm.removeAll(4001008);
            cm.对话结束();
        } else {
            var outText;
            if (mapId == 103000805) {
                outText = "你确定要离开地图？？";
                time = 1;
            } else {
                outText = "一旦你离开地图，你将不得不重新启动整个任务，如果你想再次尝试。你还是要离开这个地图？";
                time = 0;
            }
            if (status == 0) {
                cm.sendYesNo(outText);
            } else if (mode == 1) {
                if (time == 1) {
                    getPrize();
                }
				cm.warp(103000890, "st00");
                cm.对话结束();
            }
        }
    }
}
//副本通关奖励区域
/*
cm.概率给物品(物品代码，固定数量，概率,备注)；
cm.概率给物品2(物品代码，随机数量，概率,备注)；
*/
function getPrize() {
	var eim = cm.getEventInstance();
	var 最后通关 = 20000000;
	var 通关时间 = 1000000;
	if(eim==null){
		var 消耗时间 = 999999999;
	}else{
		var 消耗时间 = (通关时间 - eim.getTimeLeft())/1000;
	}
	var 角色 = cm.getPlayer().id;
	var 总完成 = cm.getBossRank("废弃都市", 2);
	var 神秘粉末获取次数 = 99999;
	//废弃盛产母矿，恩。
	if(cm.判断每日值("废弃都市神秘粉末")<=神秘粉末获取次数){
		cm.概率给物品2(4032135,20,70,"神秘粉末");
		cm.增加每日值("废弃都市神秘粉末");
	}else{
		cm.个人公告("今日无法获取神秘粉末。");
	}
	cm.gainMeso(10000000);
	cm.概率给物品2(4001009,2,50,"橡皮擦");
	cm.概率给物品(4006000,10,100,"魔法石");
	cm.概率给物品2(4310113,50,100,"胡萝卜币");
	cm.概率给物品2(4310022,50,100,"樱花节纪念币");
	cm.概率给物品2(4310044,3,10,"猫郎诅咒币");  
	cm.概率给物品2(4006000,10,100,"魔法石");
	cm.概率给物品2(4006001,10,50,"召回石");
	//cm.概率给物品2(4004000,2,30,"力量母矿");
	//cm.概率给物品2(4004001,2,30,"智慧母矿");
	//cm.概率给物品2(4004002,2,30,"敏捷母矿");
	//cm.概率给物品2(4004003,2,30,"幸运母矿");	
	cm.概率给物品2(4170006,1,50,"飞天猪的蛋");
	//cm.概率给物品2(4004004,2,1,"黑暗水晶母矿");
	//cm.概率给物品2(4020000,2,10,"石榴石母矿");
	//cm.概率给物品2(4020001,2,10,"紫水晶母矿");
	//cm.概率给物品2(4020002,2,10,"海蓝石母矿");
	//cm.概率给物品2(4020003,2,10,"祖母绿母矿");
	//cm.概率给物品2(4020004,2,10,"蛋白石母矿");
	//cm.概率给物品2(4020005,2,10,"蓝宝石母矿");
	//cm.概率给物品2(4020006,2,10,"黄晶母矿");
	//cm.概率给物品2(4020007,2,10,"钻石母矿");
	//cm.概率给物品2(4020008,2,10,"黑水晶母矿");
	cm.给经验(最后通关);
	//解锁成就后获取额外的经验。
cm.worldMessage(2, "[副本-废弃都市] : 恭喜 " + cm.getPlayer().getName() + " 完成废弃都市副本，消耗时间 "+formatSeconds(消耗时间)+"。");
	if(总完成>=10){
		cm.给经验(最后通关/2);
	}
	//解锁成就后一定机率获取AP点。
	if(总完成>=150){
		if(cm.判断每日值("废弃给AP点")<=2){
			if(cm.百分率(5)){
				cm.给能力点(1);
				cm.增加每日值("废弃给AP点");
				cm.个人公告("获取 1 AP");
			}
		}
	}
	//记录通关信息
	cm.getPlayer().endPartyQuest(1201);
	cm.setBossRankCount("废弃都市",1);
	cm.setBossLog("废弃都市");
			if(eim!=null){
				if(cm.取副本通关时间(1,角色) > 消耗时间){
			cm.写记录(1,角色,消耗时间);
			cm.个人公告("恭喜你刷新个人记录。");
		}else if(cm.取副本通关时间(1,角色) <=0){
			cm.写记录(1,角色,消耗时间);
			cm.个人公告("恭喜你刷新个人记录。");
		}
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