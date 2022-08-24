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
            text += "#b\t#v1142101# * 《全属性+#r100#k  #b攻击力+#r50#k #b》#l\r\n"//3
            text += "#b\t#r防爆卡#k x 3#l\r\n"//3
            text += "#b\t#r重置卡#k x 3#l\r\n"//3
            text += "#b\t#r必成卡#k x 3#l\r\n"//3
            text += "#b\t#v2022468#[自选必成卷] *5#l\r\n"//3
            text += "#b\t#v2340000# *60#l\r\n"//3
            text += "#b\t盛大点券 #r 200000点卷#l\r\n"//3
            text += "#b\t\额外赠送金币#r 50000000  ~#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4000424,1)){
				cm.gainItem(4000424, -1);
				cm.gainItem(2340000, 60);
				//cm.gainItem(5211047, 1);
				cm.gainItem(2022468, 5);
				cm.gainMeso(50000000);
				cm.gainNX(200000);
                  cm.setBossRankCount9("防爆卡",3);
	  cm.说明文字("恭喜你获取 #r防爆卡#k x 3 。");
	  cm.getPlayer().dropMessage(5,"防爆卡 + 3");
    cm.setBossRankCount9("重置卡",3);
	cm.说明文字("恭喜你获取 #r重置卡#k x 3 。");
	cm.getPlayer().dropMessage(5,"重置卡 + 3");
    cm.setBossRankCount9("必成卡",3);
	cm.说明文字("恭喜你获取 #r必成卡#k x 3 。");
	cm.getPlayer().dropMessage(5,"必成卡 + 3");
cm.给属性装备(1142101, 1, 1, 100, 100, 100, 100, 500, 500, 50, 50,0, 0, 0, 0, 20, 20, 0);
		//cm.gainItem(4000313,300);//黄金枫叶
            cm.sendOk("购买成功！");
			//cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了300元赞助礼包");
cm.全服黄色喇叭("[累计充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换了300元累计充值礼包。")
 
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM");
            cm.dispose();
			}
		}
    }
}