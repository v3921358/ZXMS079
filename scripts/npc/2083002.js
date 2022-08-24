/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：黑龙
 */

var status = -1;

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status < 1 && mode == 0) {
			cm.sendOk("好，需要的时候再来找我。");
			cm.dispose();
			return;
		}
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		if(cm.getMapId() == 910000015 ||cm.getMapId() == 910000020){
			if(cm.判断当前地图指定怪物是否存在(8810018)){
				cm.sendOk("快点击败它");
				cm.dispose();
				return;
			}
			cm.sendYesNo("你要在这里召唤暗黑龙王？");
		}
        if (cm.getMapId() == 240050400) {
            cm.sendYesNo("你想离开这里到#b#m240040700##k吗?");
        } else {
            cm.sendYesNo("你想离开这里到#b#m240040700##k吗?");
        }
    } else if (status == 1) {
		if(cm.getMapId() == 910000015){
			cm.当前地图召唤怪物(8810026,1,50,1515);
			cm.全服公告("[黑龙挑战] : 玩家["+cm.getPlayer().getName()+"]在[自由市场15洞]召唤了[暗黑龙王]");
			cm.dispose();
			return
		}
		if(cm.getMapId() == 910000020){
			cm.当前地图召唤怪物(8810026,1,677,94);
			cm.全服公告("[黑龙挑战] : 玩家["+cm.getPlayer().getName()+"]在[自由市场20洞]召唤了[暗黑龙王]");
			cm.dispose();
			return
		}
        if (cm.getMapId() == 240050400) {
            cm.warp(240040700, 0);
			cm.dispose();
        } else {
            cm.warp(240040700, 0);
	 cm.收物品(5253004,1);		cm.dispose();
        }
		cm.Gaincharacterz("" + cm.getPlayer().id + "", 201, -cm.Getcharacterz("" + cm.getPlayer().id + "", 201));
        cm.dispose();
    }
	}
}