/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：空间传送
 */
var 魔法石 = 5253004;
//传送地点，消耗金币
var maps = Array(
		[702060000, 1],
		[240060200, 1],
		[280030000, 1],
		[912010100, 1]

        );
var status = 0;
var show;
var sCost;
var selectedMap = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.说明文字(" 等你想去哪里了，记得找我哦！");
            cm.对话结束();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = "  #d#e请选择你要去的地方：#k#n#b\r\n\r\n#r[凯琳的训练场 #b就是新地图扎昆 主体]#n#b";
        for (var i = 0; i < maps.length; i++) {
			 selStr += "\r\n#L" + i + "# #m" + maps[i] + "##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        show = maps[selection][1];
        cm.sendYesNo("\t传送目标: #b#m" + maps[selection] + "##k\r\n\t需要 "+cm.显示物品(魔法石)+" x #b" + show + "#k");
        selectedMap = selection;
    } else if (status == 3) {
        if (!cm.判断物品数量(魔法石,1)) {
            cm.sendNext("你没有 "+cm.显示物品(魔法石)+" 无法启动空间传送阵。");
            cm.safeDispose();
        } else {
            //cm.收物品(魔法石,1);
            cm.warp(maps[selectedMap][0]);
            cm.dispose();
        }
    }
}