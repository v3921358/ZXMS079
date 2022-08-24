/*
 ZEVMS冒险岛(079)游戏服务端
 */

var 小红包 = 4031546;
var 中红包 = 4031547;
var 大红包 = 4031548;
var 特大红包 = 4031549;


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
    //开始
    if (status == 0) {

        var selStr = "	Hi~#b#h ##k在我们这里，每一天都是新年，每一天都热热闹闹的对吧。你如果可以给我红包，我会给你一些报酬。\r\n";
        selStr += "\t #L1#" + cm.显示物品(小红包) + "  [ #b#c" + 小红包 + "##k ]#l\r\n";
        selStr += "\t #L2#" + cm.显示物品(中红包) + "  [ #b#c" + 中红包 + "##k ]#l\r\n";
        selStr += "\t #L3#" + cm.显示物品(大红包) + "  [ #b#c" + 大红包 + "##k ]#l\r\n";
        selStr += "\t #L4#" + cm.显示物品(特大红包) + "  [ #b#c" + 特大红包 + "##k ]#l\r\n";




        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			//特大红包
            case 4:
                if (cm.判断物品数量(特大红包, 1)) {
                    if (cm.百分率(60)) {
                        cm.给点券(cm.随机数(50));
                    }
                    if (cm.百分率(90)) {
                        cm.给金币(cm.随机数(5000));
                    }
                    if (cm.百分率(50)) {
                        cm.给经验(cm.随机数(50000));
                    }
					cm.收物品(特大红包,1);
                }else{
					cm.说明文字("你没有给我红包。");
				}
                cm.对话结束();
                break;
			//大红包
            case 3:
                if (cm.判断物品数量(大红包, 1)) {
                    if (cm.百分率(60)) {
                        cm.给点券(cm.随机数(30));
                    }
                    if (cm.百分率(90)) {
                        cm.给金币(cm.随机数(3000));
                    }
                    if (cm.百分率(50)) {
                        cm.给经验(cm.随机数(30000));
                    }
					cm.收物品(大红包,1);
                }else{
					cm.说明文字("你没有给我红包。");
				}
                cm.对话结束();
                break;
			//中红包
            case 2:
                if (cm.判断物品数量(中红包, 1)) {
                    if (cm.百分率(60)) {
                        cm.给点券(cm.随机数(30));
                    }
                    if (cm.百分率(90)) {
                        cm.给金币(cm.随机数(2000));
                    }
                    if (cm.百分率(50)) {
                        cm.给经验(cm.随机数(20000));
                    }
					cm.收物品(中红包,1);
                }else{
					cm.说明文字("你没有给我红包。");
				}
                cm.对话结束();
                break;
            //小红包
            case 1:
                if (cm.判断物品数量(小红包, 1)) {
                    if (cm.百分率(60)) {
                        cm.给点券(cm.随机数(10));
                    }
                    if (cm.百分率(90)) {
                        cm.给金币(cm.随机数(1000));
                    }
                    if (cm.百分率(50)) {
                        cm.给经验(cm.随机数(10000));
                    }
					cm.收物品(小红包,1);
                }else{
					cm.说明文字("你没有给我红包。");
				}
                cm.对话结束();
                break;

        }
    }
}





















