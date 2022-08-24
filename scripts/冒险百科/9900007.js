/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：冒险百科
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
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
	cm.setBossLog("查看百科");
    if (status == 0) {
		var selStr = "\t\t\t" + 心 + "  " + 心 + " #r#e < 冒险百科 > #k#n " + 心 + "  " + 心 + "\r\n\r\n";
	    selStr += " #L0##b返回#k#l\r\n";
		selStr += " #L1##b稀有物品#k#l\r\n";
		selStr += " #L2##b装备艺术#k#l\r\n";
		selStr += " #L3##b属性宝石#k#l\r\n";
		selStr += " #L4##b团队的荣誉#k#l\r\n";
		selStr += " #L5##b装备套装效果#k#l\r\n";
		selStr += " #L6##b特殊属性加持#k#l\r\n";
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 6:
                cm.对话结束();
                cm.打开NPC(9900007, 6);
                break;
			case 5:
                cm.对话结束();
                cm.打开NPC(9900007, 5);
                break;
			case 4:
                cm.对话结束();
                cm.打开NPC(9900007, 4);
                break;
            case 3:
                cm.对话结束();
                cm.打开NPC(9900007, 3);
                break;
			
            case 2:
                cm.对话结束();
                cm.打开NPC(9900007, 2);
                break;
            
            case 1:
                cm.对话结束();
                cm.打开NPC(9900007, 1);
                break;
			case 0:
                cm.对话结束();
                cm.打开NPC(9900004, 0);
                break;
        }
    }
}