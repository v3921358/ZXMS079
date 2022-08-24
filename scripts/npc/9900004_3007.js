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
            text += "#b\t#v1142544# * 《全属性60  G20 》#l\r\n"//3
            text += "#b\t#v1112585# * 《全属性10 G5 》#l\r\n"//3
            text += "#b\t#v2340000# * 80#l\r\n"//3
            text += "#b\t#v4000313# *500#l\r\n"//3
            text += "#b\t#v4002000# *200#l\r\n"//3
            text += "#b\t#v4000487# *200#l\r\n"//3
            text += "#b\t#v4251202# *15#l\r\n"//3
            text += "#b\t#v4000463# *100#l\r\n"//3
            text += "#b\t盛大点券 #r 50000点#l\r\n"//3
            text += "#b\t\额外赠送冒险币#r 5000000  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170012,1)){
				cm.gainItem(4170012, -1);
				cm.gainItem(2340000, 80);//祝福
				cm.gainItem(4002000, 200);//蜗牛邮票
				cm.gainItem(4000487, 200);//暗影币
				cm.gainItem(4000463, 100);//国庆币
				cm.gainItem(4251202, 15);//五彩水晶
				cm.gainMeso(10000000);
				cm.gainNX(100000);
		cm.gainItem(1142544,60,60,60,60,500,500,20,20,0,0,0,0,0,0);//勋章
		cm.gainItem(1112585,10,10,10,10,50,50,5,5,0,0,0,0,0,0);//戒指
		cm.gainItem(4000313,500);//黄金枫叶
            cm.sendOk("购买成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1000元赞助礼包");
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM微笑");
            cm.dispose();
			}
		}
    }
}