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
			text += "\t\t\t\t#e#b  咕咕冒险岛1000元赞助礼包 #k	#n\r\n"
            text += "#b\t#v1402326# * 《 自选0级神器！ 400六维 》#l\r\n"//3
            text += "#b\t#v1113070# * 《 全属性500 》#l\r\n"//3
            text += "#b\t#v1142557# * 《 全属性1000 》#l\r\n"//3
            text += "#b\t#v1132246# * 《 首饰一套 》#l\r\n"//3
			text += "#b\t#v1072743# * 四件套《#d自选暴君职业任选#b》#l\r\n"//3
            text += "#b\t#r防爆卡#k x 50#l\r\n"//3
            text += "#b\t#r重置卡#k x 50#l\r\n"//3
            text += "#b\t#r必成卡#k x 50#l\r\n"//3
            text += "#b\t#v2022468#[自选必成卷] *50#l\r\n"//3
            text += "#b\t#v5222000#[兑换独有宠物] *1#l\r\n"//3
            text += "#b\t#v4310060# *100#l\r\n"//3
            text += "#b\t盛大点券 #r 300000点卷#l\r\n"//3
            text += "#b\t\额外赠送金币#r 10亿  #l\r\n\r\n"//3
			text += "#b\t\每日PB次数+1(与500档叠加)#l\r\n\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4310003,1000) && cm.getPlayer().getOneTimeLog("1000元累计赞助礼包") == 0){
				cm.getPlayer().setOneTimeLog("1000元累计赞助礼包");
				cm.gainItem(2022466, 4);
				cm.gainItem(2022468, 50);
				cm.gainItem(5222000, 1);
                cm.gainItem(2022467, 1);
				//cm.gainItem(2340000, 100);
				cm.gainMeso(1000000000);
				cm.gainNX(300000);
                  cm.setBossRankCount9("防爆卡",50);
	  cm.说明文字("恭喜你获取 #r防爆卡#k x 50 。");
	  cm.getPlayer().dropMessage(5,"防爆卡 + 50");
    cm.setBossRankCount9("重置卡",50);
	cm.说明文字("恭喜你获取 #r重置卡#k x 50 。");
	cm.getPlayer().dropMessage(5,"重置卡 + 50");
    cm.setBossRankCount9("必成卡",50);
	cm.说明文字("恭喜你获取 #r必成卡#k x 50 。");
	cm.getPlayer().dropMessage(5,"必成卡 + 50");
cm.给属性装备(1113070, 0, 1, 500, 500, 500, 500, 500, 500, 500, 500,0, 0, 0, 0, 40, 40, 0);
cm.给属性装备(1142557, 0, 0, 1000, 1000, 1000, 1000, 15000, 15000, 1000, 1000,0, 0, 0, 0, 40, 40, 0);
		cm.gainItem(4310060,100);
		//cm.gainItem(1142003,70,70,70,70,0,0,70,70,0,0,0,0,0,0);//勋章
		cm.给属性装备(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		cm.给属性装备(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		cm.给属性装备(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		cm.给属性装备(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0)
		//cm.gainItem(4000313,1000);//黄金枫叶
            cm.sendOk("购买成功！");
		//	cm.worldMessage(6,"玩家：["+cm.getName()+"]购买了1000元赞助礼包");
cm.全服黄色喇叭("[累计充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换了1000元累计赞助礼包。")
 
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM");
            cm.dispose();
			}
		}
    }
}