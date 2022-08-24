/*
 咕咕冒险岛-月卡
 */

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var buy = 0

 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想觉醒装备了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		buy = cm.getPlayer().getOneTimeLog("活动消费") * 10
        var selStr = ""
			selStr += "月卡属于活动道具，只能通过赞助获得的赞助币购买\r\n您已在活动道具消费【"+buy+"】\r\n"
			selStr += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+""
			if(cm.haveItem(3700100,1)){
				selStr += "\r\n\r\n   "+爱心+"材料月卡#v3700100#(已拥有)";
			}else{
				selStr += "\r\n\r\n#L1#"+爱心+"材料月卡#v3700100##l";
			}
			selStr += "#L11#"+红色箭头+"材料月卡说明#l";
			if(cm.haveItem(3700101,1)){
				selStr += "\r\n\r\n   "+爱心+"特权月卡#v3700101#(已拥有)";
			}else{
				selStr += "\r\n\r\n#L2#"+爱心+"特权月卡#v3700101##l";
			}
			selStr += "#L12#"+红色箭头+"特权月卡说明#l";
			if(cm.getPlayer().getOneTimeLog("金肝卡") > 0){
				selStr += "\r\n\r\n#L4#"+爱心+"金肝卡(领取每日福利)#l";
			}else{
				selStr += "\r\n\r\n#L3#"+爱心+"金肝卡(终身)#l";
			}
			selStr += "#L13#"+红色箭头+"金肝卡说明#l";
			
			selStr += "\r\n\r\n\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
			
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 1){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy0 = buy +50
				cm.sendOk("赞助额度不足哦\r\n需要有"+buy0+"#v4310003#才可以继续购买\r\n白嫖的赞助币是不能买的");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
			cm.给物品(3700100, 1,31)
			cm.全服黄色喇叭("[超值月卡] : ["+cm.getPlayer().getName()+"]购买了[材料月卡]！")
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.dispose();
			return;	
			}else{
				cm.sendOk("需要#v4430000#x50才可以购买喔");
			}
			
		};
		if(selection == 2){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy1 = buy +50
				cm.sendOk("赞助额度不足哦\r\n需要有"+buy1+"#v4310003#才可以继续购买\r\n白嫖的赞助币是不能买的");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
            cm.给物品(3700101, 1,31)
			cm.全服黄色喇叭("[超值月卡] : ["+cm.getPlayer().getName()+"]购买了[特权月卡]！")
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.dispose();
            return;	
			}else{
				cm.sendOk("需要#v4430000#x50才可以购买喔");
			}
		};
		if(selection == 3){
			if(cm.haveItem(4310003,100+buy)==false){
				var buy2 = buy +50
				cm.sendOk("赞助额度不足哦\r\n需要有"+buy2+"#v4310003#才可以继续购买\r\n白嫖的赞助币是不能买的");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,100)){
			cm.gainItem(4430000,-100)
            cm.getPlayer().setOneTimeLog("金肝卡");
			cm.getPlayer().dropMessage(5,"您已开启金肝卡特权，可以自动完成每日组队一条龙，搭配材料月卡食用风味更佳");
			cm.全服黄色喇叭("[超值月卡] : ["+cm.getPlayer().getName()+"]开启了[金肝卡(终身)]特权！")
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.dispose();
            return;	
			}else{
				cm.sendOk("需要#v4430000#x100才可以购买喔");
			}
			cm.dispose();
            return;
		};
		if(selection == 4){
			if(cm.getBossLog("每日金肝福利") >= 1){
				cm.sendOk("每天只能领取一次");
				cm.dispose();
				return;	
			}
			cm.setBossLog("每日金肝福利");
			cm.gainItem(2022613,1)
			cm.gainItem(4000463,100)
			cm.gainItem(4310060,5)
			cm.gainItem(4032226,10)
			cm.全服黄色喇叭("[金肝福利] : ["+cm.getPlayer().getName()+"]领取了每日金肝卡福利！")
			cm.dispose();
		};
		if(selection == 11){
			cm.sendOk("材料月卡#v3700100#持续31天，售价#v4430000#x50\r\n占用一格设置栏\r\n每日boss获得奖励提升50%(1个变为随机1~2个，5个变为8个)\r\n每日boss最终奖励提升100%\r\n组队一条龙奖励提升100%");
			cm.dispose();
            return;
		};
		if(selection == 12){
			cm.sendOk("特权月卡#v3700101#持续31天，售价#v4430000#x50\r\n占用一格设置栏\r\n每日boss可完成次数+1\r\n自助强化最终属性+5\r\n暴君吞噬最终属性+10\r\n无限金锤优惠100个#v4000463#\r\n金花戒指幸运值+1(可突破上限)");
			cm.dispose();
            return;
		};
		if(selection == 13){
			cm.sendOk("金肝卡永久存在，售价#v4430000#x100\r\n不占用背包\r\n可直接领取每日boss最终奖励\r\n可直接领取组队一条龙奖励\r\n可直接领取在线奖励(个人)\r\n每日领取#v2022613#x1#v4000463#x100#v4310060#x5#v4032226#x10");
			cm.dispose();
            return;
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}