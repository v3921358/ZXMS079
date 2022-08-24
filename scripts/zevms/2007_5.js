/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：道场传送点
 */
function start() {
	var 类型 = 5;
    var 地图 = cm.getMapId();
	var 角色 = cm.getPlayer().id;
    var 传送点 = cm.判断传送点x(角色, 类型);
    var 落脚点 = cm.判断传送点y(角色, 类型);
    if (地图 == 925020000) {
        if(传送点<=0){
			cm.warp(100000000,0);
			cm.sendOk("传送点出错，默认为你回到射手村，已经为你重新配置该传送点。");
		}else{
			cm.warp(传送点, 落脚点);
		}
		cm.设置传送点x(角色,类型,0);
		cm.设置传送点y(角色,类型,0);
    } else {
        //射手村
        if (地图 == 100000000) {
            传送(地图,12);
		//魔法密林
        } else if (地图 == 101000000) {
            传送(地图,18);
        //勇士部落
        } else if (地图 == 102000000) {
            传送(地图,5);
		 //废弃都市
        } else if (地图 == 103000000) {
            传送(地图,42);
		 //明珠港
        } else if (地图 == 104000000) {
            传送(地图,0);
		 //天空之城
        } else if (地图 == 200000000) {
            传送(地图,0);
		 //玩具城
        } else if (地图 == 220000000) {
            传送(地图,0);
		//冰封雪域
        } else if (地图 == 211000000) {
            传送(地图,4);
		//地球防御吧
        } else if (地图 == 221000000) {
            传送(地图,4);
		//武陵
        } else if (地图 == 250000000) {
            传送(地图,24);
		//水上市场
        } else if (地图 == 500000000) {
            传送(地图,4);
		//新加坡
        } else if (地图 == 540000000) {
            传送(地图,14);
		//马来西亚
        } else if (地图 == 550000000) {
            传送(地图,15);
		//马来西亚干塝村
        } else if (地图 == 551000000) {
            传送(地图,0);
		//新叶城
        } else if (地图 == 600000000) {
            传送(地图,6);
		//东方神州
        } else if (地图 == 701000100) {
            传送(地图,6);
		//江户村
        } else if (地图 == 800000000) {
            传送(地图,0);
        } else {
            cm.warp(100000000, 0);
            cm.sendOk("传送点出错，默认为你回到射手村，已经为你重新配置该传送点。");
        }
    }
    cm.dispose();
}


function 传送( a, b) {
	var 类型 = 5;
    var 地图 = cm.getMapId();
	var 角色 = cm.getPlayer().id;
	cm.warp(925020000, 4);
	cm.设置传送点x(角色,类型,a);
	cm.设置传送点y(角色,类型,b);
}