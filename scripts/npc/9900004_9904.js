/*
 咕咕冒险岛(079)游戏服务端
 道具购买
 */
 
//道具id，单次购买数量，消耗材料数量
var itemlist = [
[4000463,200,10,"通用货币"],
[4000463,2000,90,"通用货币"],
[4310014,1000,10,"制作金花戒指"],
[4310027,100,10,"增加1点金花戒指幸运值"],
[4310002,10,5,"永恒武器觉醒"],
[4310098,30,3,"贝勒德十连抽"],
[4310097,4,10,"贝勒德觉醒"],
[4310097,40,90,"贝勒德觉醒"],
[4310036,25,50,"FFN制作"],
[4310091,4,10,"FFN觉醒"],
[4310091,40,90,"FFN觉醒"],
[4310058,4,10,"暴君制作"],
[4310060,20,5,"暴君强化"],
[4310060,220,50,"暴君强化"],
[2022468,2,1,"必成卷"],
[2022678,10,1,"随机骑宠"],
[2022467,1,300,"400六维页游武器"],
];

var costitem = 4430000

//说明文字
var 说明文字 = "赞助商店：";


var sels;
var 脚本执行 = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        脚本执行++;
    } else if (mode == 0) {
        脚本执行--;
    } else {
        cm.对话结束();
        return;
    }
    if (脚本执行 == 0) {
        var 文本信息 = "";
        for (var i = 0; i < itemlist.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + itemlist[i][0] + "#x#r"+itemlist[i][1]+"#b，需要#i"+costitem+"#x#r"+itemlist[i][2]+"#b("+itemlist[i][3]+")#l#k\r\n";
        }

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
		sels = selection;
		if(cm.haveItem(costitem, itemlist[sels][2])){
		
        
        cm.gainItem(itemlist[sels][0], itemlist[sels][1]);
		cm.gainItem(costitem, -itemlist[sels][2]);
        cm.说明文字("购买成功");
        cm.对话结束();
		}
		cm.说明文字("你钱不够呢，去找GM赞助吧");
    } else {
        cm.对话结束();
    }
}