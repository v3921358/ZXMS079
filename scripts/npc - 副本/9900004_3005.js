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
            text += "#b\t#v1112907# 《全属性5 G2》..#l\r\n"//3
            text += "#b\t#v4000313# *30#l\r\n"//3
            text += "#b\t#v2340000# *10#l\r\n"//3
            text += "#b\t盛大点券 #r 10000点#l\r\n"//3
            text += "#b\t\额外赠送冒险币#r 1000000  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170010,1)){
				cm.gainItem(4170010, -1);
				cm.gainItem(2340000, 10);
				cm.gainMeso(1000000);
				cm.gainNX(10000);
		cm.gainItem(1112907,5,5,5,5,50,50,2,2,0,0,0,0,0,0);//戒指
		cm.gainItem(4000313,30);//黄金枫叶
            cm.sendOk("购买成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]兑换了100元重返补偿礼包");
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM微笑");
            cm.dispose();
			}
		}
    }
}