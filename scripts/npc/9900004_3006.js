function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b  冒险岛VIP礼包 #k	#n\r\n"
            text += "#b\t#v1142101# * 《全属性25  G10 》#l\r\n"//3
            text += "#b\t#v2049170# * 10#l\r\n"//3
            text += "#b\t#v4000313# *100#l\r\n"//3
            text += "#b\t#v4002000# *50#l\r\n"//3
            text += "#b\t#v4000487# *50#l\r\n"//3
            text += "#b\t盛大点券 #r 50000点#l\r\n"//3
            text += "#L1##r确定购买大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4170011,1)){
				cm.gainItem(4170011, -1);
				cm.gainItem(2049170, 10);//祝福
				cm.gainItem(4002000, 50);//蜗牛邮票
				cm.gainItem(4000487, 50);//暗影币
				cm.gainNX(50000);
		cm.gainItem(1142101,25,25,25,25,200,200,10,10,10,10,0,0,0,0);//勋章
		cm.gainItem(4000313,100);//黄金枫叶
            cm.sendOk("购买成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了500元重返补偿礼包");
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM微笑");
            cm.dispose();
			}
		}
    }
}