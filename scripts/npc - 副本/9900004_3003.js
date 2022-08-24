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
            text += "#b\t#v1402326# * 《 自选0级神器！ 攻击力 #r180#b到#r504 #b左右 》#l\r\n"//3
            text += "#b\t#v1113070# * 《 全属性230 攻击力 +#r80#b》#l\r\n"//3
            text += "#b\t#v1142003# * 《 全属性100 》#l\r\n"//3
            text += "#b\t#v1132246# * 《 首饰一套 》#l\r\n"//3
            text += "#b\t#r防爆卡#k x 6#l\r\n"//3
            text += "#b\t#r重置卡#k x 6#l\r\n"//3
            text += "#b\t#r必成卡#k x 6#l\r\n"//3
            text += "#b\t#v2022468#[自选必成卷] *6#l\r\n"//3
            text += "#b\t#v5222000#[兑换独有宠物] *1#l\r\n"//3
            text += "#b\t#v2340000# *100#l\r\n"//3
            text += "#b\t盛大点券 #r 300000点卷#l\r\n"//3
            text += "#b\t\额外赠送金币#r 100000000  #l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4031505,1)){
				cm.gainItem(4031505, -1);
				cm.gainItem(2022468, 6);
				cm.gainItem(5222000, 1);
                                cm.gainItem(2022467, 1);
				cm.gainItem(2340000, 100);
				cm.gainMeso(100000000);
				cm.gainNX(300000);
                  cm.setBossRankCount9("防爆卡",6);
	  cm.说明文字("恭喜你获取 #r防爆卡#k x 6 。");
	  cm.getPlayer().dropMessage(5,"防爆卡 + 6");
    cm.setBossRankCount9("重置卡",6);
	cm.说明文字("恭喜你获取 #r重置卡#k x 6 。");
	cm.getPlayer().dropMessage(5,"重置卡 + 6");
    cm.setBossRankCount9("必成卡",6);
	cm.说明文字("恭喜你获取 #r必成卡#k x 6 。");
	cm.getPlayer().dropMessage(5,"必成卡 + 6");
cm.给属性装备(1113070, 1, 1, 230, 230, 230, 230, 500, 500, 80, 80,0, 0, 0, 0, 40, 40, 0);
cm.给属性装备(1142003, 1, 1, 100, 100, 100, 100, 0, 0, 0, 0,0, 0, 0, 0, 40, 40, 0);
		//cm.gainItem(1113070,20,20,20,20,200,200,20,20,0,0,0,0,0,0);//勋章
		//cm.gainItem(1142003,70,70,70,70,0,0,70,70,0,0,0,0,0,0);//勋章
		cm.gainItem(1032223,1);//贝勒
		cm.gainItem(1122267,1);//贝勒
		cm.gainItem(1132246,1);//贝勒
		cm.gainItem(1113075,1);//贝勒
		//cm.gainItem(4000313,1000);//黄金枫叶
            cm.sendOk("购买成功！");
		//	cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1000元赞助礼包");
cm.全服黄色喇叭("[累计充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换了1000元累计充值礼包。")
 
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM");
            cm.dispose();
			}
		}
    }
}