/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：星缘，家族在线奖励，自行修改
 */
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.对话结束();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	var 家族 =cm.getPlayer().getGuildId();
	if(cm.getPlayer().getGuildId() <=0 ){
		cm.说明文字("你还未加入家族。");
		cm.对话结束();
		return;
	}
    var 在线奖励1时间 = 300;
    var 在线奖励1代码 = 2022154;
    var 在线奖励1数量 = 10;

    var 在线奖励2时间 = 600;
    var 在线奖励2代码 = 2050004;
    var 在线奖励2数量 = 100;

    var 在线奖励3时间 = 900;
    var 在线奖励3代码 = 5150040;
    var 在线奖励3数量 = 10;

    var 在线奖励4时间 = 1200;
    var 在线奖励4代码 = 5510000;
    var 在线奖励4数量 = 10;

    var 在线奖励5时间 = 1500;
    var 在线奖励5代码 = 5073000;
    var 在线奖励5数量 = 5;

    var 在线奖励6时间 = 1800;
    var 在线奖励6代码 = 5130000;
    var 在线奖励6数量 = 10;

    var 在线奖励7时间 = 2100;
    var 在线奖励7代码 = 2450000;
    var 在线奖励7数量 = 3;

    var 在线奖励8时间 = 2400;
    var 在线奖励8代码 = 5570000;
    var 在线奖励8数量 = 2;
    if (status == 0) {
        var selStr = "	  Hi~#b#h ##k 你所在的家族 #r"+cm.获取家族名称(cm.getPlayer().getGuildId())+"#k 玩家今日在线:#b #n#e" + cm.今日家族总在线时间(cm.getPlayer().getGuildId()) + " #n#k分钟#k，你是不是想要找我领取奖品呢。\r\n";

        selStr += "在线 #r" + 在线奖励1时间 + " #k分钟可领取 #v" + 在线奖励1代码 + "##z" + 在线奖励1代码 + "#  x  " + 在线奖励1数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励1时间 && cm.getBossLog("家族在线奖励1时间") == 0) {
            selStr += "#L1#" + 箭头 + "#b领取#r" + 在线奖励1时间 + "#k#b分钟奖励#l#k\r\n";
        }

        selStr += "在线 #r" + 在线奖励2时间 + " #k分钟可领取 #v" + 在线奖励2代码 + "##z" + 在线奖励2代码 + "#  x  " + 在线奖励2数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励2时间 && cm.getBossLog("家族在线奖励2时间") == 0) {
            selStr += "#L2#" + 箭头 + "#b领取#r" + 在线奖励2时间 + "#k#b分钟奖励#l#k\r\n";
        }

        selStr += "在线 #r" + 在线奖励3时间 + " #k分钟可领取 #v" + 在线奖励3代码 + "##z" + 在线奖励3代码 + "# x  " + 在线奖励3数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励3时间 && cm.getBossLog("家族在线奖励3时间") == 0) {
            selStr += "#L3#" + 箭头 + "#b领取#r" + 在线奖励3时间 + "#k#b分钟奖励#l#k\r\n";
        }

        selStr += "在线 #r" + 在线奖励4时间 + " #k分钟可领取 #v" + 在线奖励4代码 + "##z" + 在线奖励4代码 + "# x  " + 在线奖励4数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励4时间 && cm.getBossLog("家族在线奖励4时间") == 0) {
            selStr += "#L4#" + 箭头 + "#b领取#r" + 在线奖励4时间 + "#k#b分钟奖励#l#k\r\n";
        }

        selStr += "在线 #r" + 在线奖励5时间 + " #k分钟可领取 #v" + 在线奖励5代码 + "##z" + 在线奖励5代码 + "# x  " + 在线奖励5数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励5时间 && cm.getBossLog("家族在线奖励5时间") == 0) {
            selStr += "#L5#" + 箭头 + "#b领取#r" + 在线奖励5时间 + "#k#b分钟奖励#l#k\r\n";
        }

        selStr += "在线 #r" + 在线奖励6时间 + " #k分钟可领取 #v" + 在线奖励6代码 + "##z" + 在线奖励6代码 + "# x  " + 在线奖励6数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励6时间 && cm.getBossLog("家族在线奖励6时间") == 0) {
            selStr += "#L6#" + 箭头 + "#b领取#r" + 在线奖励6时间 + "#k#b分钟奖励#l#k\r\n";
        }

        selStr += "在线 #r" + 在线奖励7时间 + " #k分钟可领取 #v" + 在线奖励7代码 + "##z" + 在线奖励7代码 + "# x  " + 在线奖励7数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励7时间 && cm.getBossLog("家族在线奖励7时间") == 0) {
            selStr += "#L7#" + 箭头 + "#b领取#r" + 在线奖励7时间 + "#k#b分钟奖励#l#k\r\n";
        }

        selStr += "在线 #r" + 在线奖励8时间 + " #k分钟可领取 #v" + 在线奖励8代码 + "##z" + 在线奖励8代码 + "# x  " + 在线奖励8数量 + "\r\n";
        if (cm.今日家族总在线时间(家族) >= 在线奖励8时间 && cm.getBossLog("家族在线奖励8时间") == 0) {
            selStr += "#L8#" + 箭头 + "#b领取#r" + 在线奖励8时间 + "#k#b分钟奖励#l#k\r\n";
        }


        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.gainItem(在线奖励1代码, 在线奖励1数量);
                cm.setBossLog("家族在线奖励1时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励1时间 + " 分钟在线奖励");

                cm.对话结束();
                break;
            case 2:
                cm.gainItem(在线奖励2代码, 在线奖励2数量);
                cm.setBossLog("家族在线奖励2时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励2时间 + " 分钟在线奖励");
                cm.对话结束();
                break;
            case 3:
                cm.gainItem(在线奖励3代码, 在线奖励3数量);
                cm.setBossLog("家族在线奖励3时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励3时间 + " 分钟在线奖励");
                cm.对话结束();
                break;
            case 4:
                cm.gainItem(在线奖励4代码, 在线奖励4数量);
                cm.setBossLog("家族在线奖励4时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励4时间 + " 分钟在线奖励");
                cm.对话结束();
                break;
            case 5:
                cm.gainItem(在线奖励5代码, 在线奖励5数量);
                cm.setBossLog("家族在线奖励5时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励5时间 + " 分钟在线奖励");
                cm.对话结束();
                break;
            case 6:
                cm.gainItem(在线奖励6代码, 在线奖励6数量);
                cm.setBossLog("家族在线奖励6时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励6时间 + " 分钟在线奖励");
                cm.对话结束();
                break;
            case 7:
                cm.gainItem(在线奖励7代码, 在线奖励7数量);
                cm.setBossLog("家族在线奖励7时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励7时间 + " 分钟在线奖励");
                cm.对话结束();
                break;
            case 8:
                cm.gainItem(在线奖励8代码, 在线奖励8数量);
                cm.setBossLog("家族在线奖励8时间");
                cm.worldMessage(6, "[家族在线奖励快讯]:" + cm.getChar().getName() + " 领取了 " + 在线奖励8时间 + " 分钟在线奖励");
                cm.对话结束();
                break;
        }
    }
}