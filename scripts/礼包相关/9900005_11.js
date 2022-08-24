/*
 ZEVMS冒险岛(079)游戏服务端
 道具制作
 */
var 装备 = [
    /*************
     手套
     *************/
    //重生定边手套
    1082239,
    //重生逍遥手套
    1082240,
    //重生白云手套
    1082241,
    //重生探云手套
    1082242,
    //重生抚浪手套
    1082243,
    /*************
     鞋子
     *************/
    //重生坚壁靴
    1072361,
    //重生缥缈鞋
    1072362,
    //重生彩虹鞋
    1072363,
    //重生舞空靴
    1072364,
    //重生定海靴
    1072365,
    /*************
     套服
     *************/
    //重生演武铠
    1052160,
    //重生奥神袍
    1052161,
    //重生巡礼者
    1052162,
    //重生翻云服
    1052163,
    //重生霸七海
    1052164,
    /*************
     帽子
     *************/
    //重生冠军盔
    1002790,
    //重生玄妙帽
    1002791,
    //重生霓翎帽
    1002792,
    //重生迷踪帽
    1002793,
    //重生海王星
    1002794,
    /*************
     武器
     *************/
    //重生破甲剑
    1302086,
    //重生断蚺斧
    1312038,
    //重生惊破天
    1322061,
    //重生狂鲨锯
    1332075,
    //重生断首刃
    1332076,
    //重生蝶翼杖
    1372045,
    //重生冰轮杖
    1382059,
    //重生玄冥剑
    1402047,
    //重生碎鼋斧
    1412034,
    //重生威震天
    1422038,
    //重生显圣枪
    1432049,
    //重生神光戟
    1442067,
    //重生惊电弓
    1452059,
    //重生冥雷弩
    1462051,
    //重生大悲赋
    1472071,
    //重生孔雀翎
    1482024,
    //重生凤凰铳
    1492025
];
//说明文字
var 说明文字 = "   hi #b#h ##k 请选择你要的装备吧，选择后是不能反悔的哦，#r进入此页面后请勿不选择#k，CDK已经被消耗。";


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

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
        sels = selection;
        cm.gainItem(装备[sels], 1);
        cm.说明文字("恭喜你获得 " + cm.显示物品(装备[sels]) + "");
		cm.输出记录("礼包兑换记录/重生套装兑换记录.txt",""+cm.时间()+" : "+cm.getChar().getName()+" 兑换了 "+cm.getItemName(装备[sels])+" \r\n");
        cm.对话结束();
    } else {
        cm.说明文字("#r发生错误: mode : " + mode + " 脚本执行 : " + 脚本执行);
        cm.对话结束();
    }
}