/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：飞天猪-射手村
 对应的蛋：4170000
 */
var 城镇 = "射手村";
var status = 1;
//物品ID，抽奖概率，物品数量，(0/不广播，1广播)
var itemList =
        Array(
	//-----椅子-----
			Array(1082234,100,1,1),
			Array(1082235,100,1,1),
			Array(1082236,100,1,1),
			Array(1082237,100,1,1),
		        Array(1082238,200,1,1),//
			Array(1072355,100,1,1),
			Array(1072356,100,1,1),
		       Array(1072357,200,1,1),//
		       Array(1072358,100,1,1),//
		       Array(1072359,200,1,1),//
		       Array(1052155,200,1,1),//
		       Array(1052156,300,1,1),//
		       Array(1052157,300,1,1),//
			Array(1052158,100,1,1),
			Array(1052159,100,1,1),
		   Array(1002776,200,1,1),//
		    Array(1002777,100,1,1),//
		   Array(1002778,200,1,1),//
		    Array(1002779,200,1,1),//
		    Array(1002780,300,1,1),//
		    Array(1312037,300,1,1),//
			Array(1322060,100,1,1),
			Array(1332073,100,1,1),
		   Array(1332074,200,1,1),//
		    Array(1372044,100,1,1),//
		   Array(1382057,200,1,1),//
		    Array(1402046,200,1,1),//
		    Array(1412033,300,1,1),//
		    Array(1422037,300,1,1),//
		    Array(1432047,100,1,1),//
		   Array(1442063,200,1,1),//
		    Array(1452057,200,1,1),//
		    Array(1462050,300,1,1),//
		    Array(1472068,300,1,1),//
		    Array(1482023,300,1,1),//
		    Array(1492023,100,1,1)
		

				
                );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("你没有 " + cm.显示物品(4310022) + " ？");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4310022, 66) & cm.haveItem(4310113,288)){
            var str1 = "";
            for (var i = 0; i < itemList.length; i++) {
                str1 += "#v" + itemList[i][0] + "#";
            }
            cm.sendYesNo("我是#b红色武器抽奖#kNPC，你好 #b#h ##k 给我 " + cm.显示物品(4310022) + " x #r66#k " + cm.显示物品(4310113) + " x #r288#k ,就可以抽奖了。\r\n\r\n#v1082234# #v1072355# #v1052155# #v1002776# #v1302081#");
        } else {
            var str1 = "\r\n";
            for (var i = 0; i < itemList.length; i++) {
                str1 += "#v" + itemList[i][0] + "#";
            }
            cm.sendOk("我是#b红色武器抽奖#kNPC，你没有 " + cm.显示物品(4310022) + " ! 等你有了在来找我把。\r\n\r\n#v1082234# #v1072355# #v1052155# #v1002776# #v1302081#");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * +100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            if (finalitem.length == 0) {
                return 1;
            }
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "永恒装备抽奖", notice);
            if (item != -1) {
                cm.gainItem(4310022, -66);
                cm.gainItem(4310113, -288);
                cm.sendOk("你获得了 " + cm.显示物品(item) + " x #b"+quantity+"#k");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。");
            cm.safeDispose();
        }
        cm.safeDispose();
    }
}