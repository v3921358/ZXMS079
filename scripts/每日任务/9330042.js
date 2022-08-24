/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：每日任务
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (cm.getBossLog("paoshang") >= 10) {
        var 每日收集 = 10;
    } else {
        var 每日收集 = cm.getBossLog("paoshang");
    }//10

    if (cm.getBossLog("钓鱼") >= 10) {
        var 每日钓鱼 = 10;
    } else {
        var 每日钓鱼 = cm.getBossLog("钓鱼");
    }//10

    if (cm.查询今日在线时间() >= 300) {
        var 每日在线 = 300;
    } else {
        var 每日在线 = cm.查询今日在线时间();
    }//10

    if (cm.getBossLog("武陵塔奖励领取") >= 1) {
        var 每日武陵 = 1;
    } else {
        var 每日武陵 = cm.getBossLog("武陵塔奖励领取");
    }//5

    if (每日副本() >= 5) {
        var 每日副本2 = 5;
    } else {
        var 每日副本2 = 每日副本();
    }//5

    if (cm.getBossLog("日常商城购买") >= 1) {
        var 商城购物 = 1;
    } else {
        var 商城购物 = cm.getBossLog("日常商城购买");
    }//1

    if (cm.getBossLog("每日送货") >= 2) {
        var 每日送货 = 2;
    } else {
        var 每日送货 = cm.getBossLog("每日送货");
    }//2

    if (cm.getBossLog("每日答题") >= 5) {
        var 每日答题 = 5;
    } else {
        var 每日答题 = cm.getBossLog("每日答题");
    }//5

    if (cm.getBossLog("每日附魔") >= 2) {
        var 每日附魔 = 2;
    } else {
        var 每日附魔 = cm.getBossLog("每日附魔");
    }//2

    if (cm.getBossLog("每日打孔") >= 1) {
        var 每日打孔 = 1;
    } else {
        var 每日打孔 = cm.getBossLog("每日打孔");
    }//1

    if (cm.getBossLog("每日分解") >= 1) {
        var 每日分解 = 1;
    } else {
        var 每日分解 = cm.getBossLog("每日分解");
    }//1
    if (cm.getBossLog("查看百科") >= 1) {
        var 查看百科 = 1;
    } else {
        var 查看百科 = cm.getBossLog("查看百科");
    }//1
    if (cm.getBossLog("每日通缉") >= 2) {
        var 每日通缉 = 2;
    } else {
        var 每日通缉 = cm.getBossLog("每日通缉");
    }//1

    if (cm.getBossLog("击杀高级怪物") >= 2) {
        var 击杀高级怪物 = 2;
    } else {
        var 击杀高级怪物 = cm.getBossLog("击杀高级怪物");
    }//2
    if (cm.getBossLog("使用红包") >= 1) {
        var 使用红包 = 1;
    } else {
        var 使用红包 = cm.getBossLog("使用红包");
    }
    if (cm.getBossLog("欢乐豆豆") >= 5) {
        var 欢乐豆豆 = 5;
    } else {
        var 欢乐豆豆 = cm.getBossLog("欢乐豆豆");
    }
    if (cm.getBossLog("挖矿") >= 4) {
        var 每日挖矿 = 4;
    } else {
        var 每日挖矿 = cm.getBossLog("挖矿");
    }

    //10+10+10+5+5+1+2+5+2+1+1=
    var 每日活跃 = 每日挖矿 + 欢乐豆豆 + 使用红包 + 每日送货 * 5 + 商城购物 + 每日副本2 + 每日武陵 * 5 + (每日在线 / 30) + 每日钓鱼 + 每日收集 + 每日答题 + 每日打孔 + 每日分解 + 每日附魔 + 查看百科 + 每日通缉 + 击杀高级怪物;
    if (status == 0) {
        var selStr = "   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 每日任务 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
		selStr += "    #L0##b返回#n#l\r\n";
        selStr += "    #L1##b领取活跃奖励#l\r\n    #L2##b每日任务  +《#r可循环完成，附加经验 10W#b》#l\r\n";
        selStr += "    #L1001##d每日在线#n:#B" + (每日在线 / 3) + "#[ 300 / " + 每日在线 + " ] #b+" + (每日在线 / 30).toFixed(0) + "#k#l\r\n";
        selStr += "    #L1002##d每日收集#n:#B" + (10 * 每日收集) + "#[ 10 / " + 每日收集 + " ] #b+" + 每日收集 + "#k#l\r\n";
        selStr += "    #L1003##d每日钓鱼#n:#B" + (10 * 每日钓鱼) + "#[ 10 / " + 每日钓鱼 + " ] #b+" + 每日钓鱼 + "#k#l\r\n";
        selStr += "    #L1004##d每日送货#n:#B" + (每日送货 * 50) + "#[ 2 / " + 每日送货 + " ] #b+" + 每日送货 * 5 + "#k#l\r\n";
        selStr += "    #L1005##d每日武陵#n:#B" + 每日武陵 * 100 + "#[ 1 / " + 每日武陵 + " ] #b+" + 每日武陵 * 5 + "#k#l\r\n";
        selStr += "    #L1006##d每日副本#n:#B" + (每日副本2 * 20) + "#[ 5 / " + 每日副本2 + " ] #b+" + 每日副本2 + "#k#l\r\n";
        selStr += "    #L1007##d每日答题#n:#B" + (每日答题 * 20) + "#[ 5 / " + 每日答题 + " ] #b+" + 每日答题 + "#k#l\r\n";
        selStr += "    #L1008##d每日附魔#n:#B" + (每日附魔 * 50) + "#[ 2 / " + 每日附魔 + " ] #b+" + 每日附魔 + "#k#l\r\n";
        selStr += "    #L1009##d每日打孔#n:#B" + (每日打孔 * 100) + "#[ 1 / " + 每日打孔 + " ] #b+" + 每日打孔 + "#k#l\r\n";
        selStr += "    #L1010##d每日分解#n:#B" + (每日分解 * 100) + "#[ 1 / " + 每日分解 + " ] #b+" + 每日分解 + "#k#l\r\n";
        selStr += "    #L1011##d每日挖矿#n:#B" + (每日挖矿 * 30) + "#[ 4 / " + 每日挖矿 + " ] #b+" + 每日挖矿 + "#k#l\r\n";
        selStr += "    #L1012##d每日通缉#n:#B" + (每日通缉 * 50) + "#[ 2 / " + 每日通缉 + " ] #b+" + 每日通缉 + "#k#l\r\n";
        selStr += "    #L1013##d欢乐豆豆#n:#B" + (欢乐豆豆 * 20) + "#[ 5 / " + 欢乐豆豆 + " ] #b+" + 欢乐豆豆 + "#k#l\r\n";
        selStr += "    #L1014##d击杀精英#n:#B" + (击杀高级怪物 * 50) + "#[ 2 / " + 击杀高级怪物 + " ] #b+" + 击杀高级怪物 + "#k#l\r\n";
        selStr += "    #L1015##d使用红包#n:#B" + (使用红包 * 100) + "#[ 1 / " + 使用红包 + " ] #b+" + 使用红包 + "#k#l\r\n";
        selStr += "    #L1016##d商城购物#n:#B" + (商城购物 * 100) + "#[ 1 / " + 商城购物 + " ] #b+" + 商城购物 + "#k#l\r\n";
        selStr += "    #L1017##d查看百科#n:#B" + (查看百科 * 100) + "#[ 1 / " + 查看百科 + " ] #b+" + 查看百科 + "#k#l\r\n\r\n";
        cm.说明文字(selStr);
    } else if (status == 1) {
        if (selection >= 1000) {
            cm.对话结束();
            cm.打开NPC(9330042, selection);
        } else {
            switch (selection) {
                case 1:
                    cm.对话结束();
					cm.打开NPC(9330042,1);
                    break;
                default:
                    cm.对话结束();
	 
				cm.打开NPC(9900004,507);
                    break;
                }
        }
    }
}

function 每日副本() {
    var result = 0;
    result += cm.getBossLog("废弃都市");
    result += cm.getBossLog("毒雾森林");
    result += cm.getBossLog("月妙");
    result += cm.getBossLog("玩具塔");
    result += cm.getBossLog("女神塔");
    result += cm.getBossLog("海盗船");
    return result;
}