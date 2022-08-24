/*
 ZEVMS冒险岛(079)游戏服务端
 道具制作
 */
var 装备 = [
    1122015
	
];
//材料设置
var 材料 = [
    [4000313, 200],
    [4007000, 20],
	[4007001, 20],
	[4007002, 20],
	[4007003, 20],
	[4007004, 20],
	[4007005, 20],
	[4007006, 20],
	[4007007, 20],
];
var 金币 = 800000;
var 点券 = 0;
//说明文字
var 说明文字 = "   hi #b#h ##k 你如果要制作道具的话，就需要给我一些材料，和一些费用，我就会帮你制作。\r\n   我所制作的这些道具都是#b天然属性#k的哦。";


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
        for (var i = 0; i < 装备.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + 装备[i] + "##z" + 装备[i] + "##l#k\r\n";
        }
        文本信息 += "\r\n";
        文本信息 += "#d所需材料；————————————————————#k\r\n";
        for (var ii = 0; ii < 材料.length; ii++) {
            文本信息 += "    #i" + 材料[ii][0] + "#  #b#t" + 材料[ii][0] + "##k [" + 材料[ii][1] + " / #r#c " + 材料[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                文本信息 += "";
            }
        }
        文本信息 += "\r\n";
        if (金币 > 0 || 点券 > 0) {
            文本信息 += "#d所需费用；————————————————————#k\r\n";
            if (金币 > 0) {
                文本信息 += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                文本信息 += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        文本信息 += "\r\n—————————————————————————#k\r\n";
        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
        sels = selection;
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
            cm.说明文字("制作费用不够。");
            cm.对话结束();
            return;
        }
        for (var i = 0; i < 材料.length; i++) {
            if (!cm.haveItem(材料[i][0], 材料[i][1])) {
                cm.说明文字("#i" + 材料[i][0] + "#  #b#t" + 材料[i][0] + "##k 需要 #r" + 材料[i][1] + "#k 个");
                cm.对话结束();
                return;
            }
        }
        cm.是否说明文字("#b确定制作 #b #i" + 装备[sels] + "##k 吗? \r\n");
    } else if (脚本执行 == 2) {
        for (var i = 0; i < 材料.length; i++) {
            cm.收物品(材料[i][0], 材料[i][1]);
        }
        cm.给物品(装备[sels], 1);
        cm.说明文字("#b成功制作 #i" + 装备[sels] + "#");
        cm.对话结束();
    } else {
        cm.说明文字("#r发生错误: mode : " + mode + " 脚本执行 : " + 脚本执行);
        cm.对话结束();
    }
}