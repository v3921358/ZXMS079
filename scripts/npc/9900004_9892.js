/*
咕咕冒险岛-每日boss
 */


 function start() {
    status = 0;
    action(1, 0, 0);
}
var done ="#b#e"
var notdone = "#r#e"
var color1 = notdone
var color2 = notdone
var color3 = notdone
var color4 = notdone
var color5 = notdone
var color6 = notdone
var color7 = notdone
var color8 = notdone
var bosstime = 0
var maxtime = 2
var havecard1 = false
var havecard2 = false

var missionlog = ["毒雾森林","废弃都市","海盗船","罗密欧与朱丽叶","玩具塔","月妙"]
var missiontime = 0
var missiontimeneed = 0

var name = ["闹钟","暴力熊","树精王","扎昆","黑龙","妖僧"] 
var cost = [4001084,4031739,4031740,4001083,4001430,4031741]
var get = [
"#v"+4000148+"#x#b#e100#n#k、#v"+4031179+"#x#b#e1#n#k、#v"+4000463+"#x#b#e5#n#k",
"#v"+4310002+"#x#b#e2#n#k、#v"+4000463+"#x#b#e5#n#k",
"#v"+4310098+"#x#b#e5#n#k、#v"+4310097+"#x#b#e1#n#k、#v"+4000463+"#x#b#e10#n#k",
"#v"+4310091+"#x#b#e1#n#k、#v"+2022468+"#x#b#e1#n#k、#v"+4000463+"#x#b#e10#n#k",
"#v"+4310058+"#x#b#e1#n#k、#v"+4310060+"#x#b#e2#n#k、#v"+4000463+"#x#b#e10#n#k",
"#v"+4032226+"#x#b#e2#n#k、#v"+4000463+"#x#b#e10#n#k"
]


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		if(cm.haveItem(3700101,1)){
			maxtime += 1
			havecard2 = true
		}
		if(cm.haveItem(3700100,1)){
			havecard1 = true
		}
		missiontimeneed = missionlog.length * 2 - 2
		for(var i = 0; i < missionlog.length; i++){
			if(cm.getBossLog(missionlog[i]) >= 2){
				missiontime += 2
			}else if(cm.getBossLog(missionlog[i]) == 1){
				missiontime += 1
			}
		}
		if(missiontime >= missiontimeneed){
			color7 = done
		}
		if(cm.getBossLog("每日闹钟兑换") >= maxtime){
			color1 = done
		}
		if(cm.getBossLog("每日暴力熊兑换") >= maxtime){
			color2 = done
		}
		if(cm.getBossLog("每日树精兑换") >= maxtime){
			color3 = done
		}
		if(cm.getBossLog("每日扎昆兑换") >= maxtime){
			color4 = done
		}
		if(cm.getBossLog("每日黑龙兑换") >= maxtime){
			color5 = done
		}
		if(cm.getBossLog("每日妖僧兑换") >= maxtime){
			color8 = done
		}
		if(cm.getBossLog("每日闹钟兑换") >= 1){
			bosstime++
		}
		if(cm.getBossLog("每日闹钟兑换") >= 2){
			bosstime++
		}
		if(cm.getBossLog("每日暴力熊兑换") >= 1){
			bosstime++
		}
		if(cm.getBossLog("每日暴力熊兑换") >= 2){
			bosstime++
		}
		if(cm.getBossLog("每日树精兑换") >= 1){
			bosstime++
		}
		if(cm.getBossLog("每日树精兑换") >= 2){
			bosstime++
		}
		if(cm.getBossLog("每日扎昆兑换") >= 1){
			bosstime++
		}
		if(cm.getBossLog("每日扎昆兑换") >= 2){
			bosstime++
		}
		if(cm.getBossLog("每日黑龙兑换") >= 1){
			bosstime++
		}
		if(cm.getBossLog("每日黑龙兑换") >= 2){
			bosstime++
		}
		if(cm.getBossLog("每日妖僧兑换") >= 1){
			bosstime++
		}
		if(cm.getBossLog("每日妖僧兑换") >= 2){
			bosstime++
		}
		if(cm.getBossLog("每日boss兑换") >= 1){
			color6 = done
		}
		if(cm.getBossLog("每日组队兑换") >= 1){
			color7 = done
		}
        var selStr = "每日boss#b#e每天一定要完成喔#n#k！";
			if(havecard1){
				selStr += "\r\n\r\n检测到拥有#b#e材料月卡#n#k，#b#e奖励提升！#n#k";
			}
			if(havecard2){
				selStr += "\r\n检测到拥有#b#e特权月卡#n#k，每日任务#b#e可完成次数+1！#n#k";
			}
			if(cm.getPlayer().getOneTimeLog("金肝卡") >= 1){
				selStr += "\r\n检测到拥有#b#e金肝卡#n#k，可#b#e直接领取最终奖励！#n#k";
			}
			
			selStr += "\r\n#L6#每日boss说明#l";
			selStr += "\r\n#L0#"+color1+"每日闹钟(永恒抽奖)--------("+cm.getBossLog("每日闹钟兑换")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L1#"+color2+"每日暴力熊(永恒武器觉醒)--("+cm.getBossLog("每日暴力熊兑换")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L2#"+color3+"每日树精王(贝勒德制作)----("+cm.getBossLog("每日树精兑换")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L3#"+color4+"每日扎昆(法弗纳制作)------("+cm.getBossLog("每日扎昆兑换")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L4#"+color5+"每日黑龙(暴君制作)--------("+cm.getBossLog("每日黑龙兑换")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L9#"+color8+"每日妖僧(椅子抽奖)--------("+cm.getBossLog("每日妖僧兑换")+"/"+maxtime+")#n#k#l";
			if(cm.getPlayer().getOneTimeLog("金肝卡") >= 1){
				bosstime = 100
				missiontime = missiontimeneed
				selStr += "\r\n#L5#"+color6+"金肝卡领取boss任务奖励#n#k#l";
				selStr += "\r\n#L7#"+color7+"金肝卡领取组队一条龙奖励#n#k#l";
			}else{
				selStr += "\r\n#L5#"+color6+"每日完成8个boss任务-------("+bosstime+"/10)#n#k#l";
				selStr += "\r\n#L7#"+color7+"组队任务一条龙------------("+missiontime+"/"+missiontimeneed+")#n#k#l";
			}
			if(missiontime < missiontimeneed){
			selStr += "#L8#查看进度#l";
			}
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.getBossLog("每日闹钟兑换") >= maxtime){
				cm.sendOk("一天只能兑换+"+maxtime+"+次");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4001084, 1)){
				cm.gainItem(4001084, -1);
				cm.setBossLog("每日闹钟兑换");
				cm.getPlayer().setOneTimeLog("闹钟成就");
				if(havecard1){
					cm.gainItem(4000148, 150);
					cm.gainItem(4000463, 8);
					cm.gainItem(4031179, 2);
					cm.sendOk("兑换成功，你获得100个#v4000148#、2个#v4031179#、8个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日闹钟boss任务，获得50%额外材料奖励")
				}else{
					cm.gainItem(4000148, 100);
					cm.gainItem(4000463, 5);
					cm.gainItem(4031179, 1);
					cm.sendOk("兑换成功，你获得100个#v4000148#、1个#v4031179#、5个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日闹钟boss任务")
				}
				cm.getPlayer().dropMessage(5,"闹钟成就进度："+cm.getPlayer().getOneTimeLog("闹钟成就")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("击败闹钟，把#v4001084#带给我");
			cm.dispose();
		};
		if(selection == 1){
			if(cm.getBossLog("每日暴力熊兑换") >= maxtime){
				cm.sendOk("一天只能兑换"+maxtime+"次");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4031739, 1)){
				cm.gainItem(4031739, -1);
				cm.setBossLog("每日暴力熊兑换");
				cm.getPlayer().setOneTimeLog("暴力熊成就");
				if(havecard1){
					cm.gainItem(4310002, 3);
					cm.gainItem(4000463, 8);
					cm.sendOk("兑换成功，你获得3个#v4310002#、8个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日暴力熊boss任务，获得50%额外材料奖励")
				}else{
					cm.gainItem(4310002, 2);
					cm.gainItem(4000463, 5);
					cm.sendOk("兑换成功，你获得2个#v4310002#、5个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日暴力熊boss任务")
				}
				cm.getPlayer().dropMessage(5,"暴力熊成就进度："+cm.getPlayer().getOneTimeLog("暴力熊成就")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("击败暴力熊或心疤狮王，把#v4031739#带给我");
			cm.dispose();
		};
		if(selection == 2){
			if(cm.getBossLog("每日树精兑换") >= maxtime){
				cm.sendOk("一天只能兑换"+maxtime+"次");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4031740, 1)){
				cm.gainItem(4031740, -1);
				cm.setBossLog("每日树精兑换");
				cm.getPlayer().setOneTimeLog("树精成就");
				if(havecard1){
					cm.gainItem(4310098, 8);
					cm.gainItem(4000463, 15);
					cm.概率给物品2(4310097, 2, 100, "贝勒德币");
					cm.sendOk("兑换成功，你获得8个#v4310098#、随机1~2个#v4310097#、15个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日树精boss任务，获得50%额外材料奖励")
				}else{
					cm.gainItem(4310098, 5);
					cm.gainItem(4000463, 10);
					cm.gainItem(4310097, 1);
					cm.sendOk("兑换成功，你获得5个#v4310098#、1个#v4310097#、10个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日树精boss任务")
				}
				cm.getPlayer().dropMessage(5,"树精成就进度："+cm.getPlayer().getOneTimeLog("树精成就")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("击败树精王，把#v4031740#带给我");
			cm.dispose();
		};
		if(selection == 3){
			if(cm.getBossLog("每日扎昆兑换") >= maxtime){
				cm.sendOk("一天只能兑换"+maxtime+"次");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4001083, 1)){
				cm.gainItem(4001083, -1);
				cm.setBossLog("每日扎昆兑换");
				cm.getPlayer().setOneTimeLog("扎昆成就");
				if(havecard1){
					cm.概率给物品2(4310091, 2, 100, "法弗纳觉醒币");
					cm.gainItem(4000463, 15);
					cm.概率给物品2(2022468, 2, 100, "必成自选箱子");
					cm.sendOk("兑换成功，你获得随机1~2个#v4310091#、随机1~2个#v2022468#、15个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日扎昆boss任务，获得50%额外材料奖励")
				}else{
					cm.gainItem(4310091, 1);
					cm.gainItem(4000463, 10);
					cm.gainItem(2022468, 1);
					cm.sendOk("兑换成功，你获得1个#v4310091#、1个#v2022468#、10个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日扎昆boss任务")
				}
				cm.getPlayer().dropMessage(5,"扎昆成就进度："+cm.getPlayer().getOneTimeLog("扎昆成就")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("击败扎昆，把#v4001083#带给我");
			cm.dispose();
		};
		if(selection == 4){
			if(cm.getBossLog("每日黑龙兑换") >= maxtime){
				cm.sendOk("一天只能兑换"+maxtime+"次");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4001430, 1)){
				cm.gainItem(4001430, -1);
				cm.setBossLog("每日黑龙兑换");
				cm.getPlayer().setOneTimeLog("黑龙成就");
				if(havecard1){
					cm.gainItem(4000463, 15);
					cm.gainItem(4310060, 3);
					cm.概率给物品2(4310058, 2, 100, "暴君币");	
					cm.sendOk("兑换成功，你获得随机1~2个#v4310058#、3个#v4310060#、15个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日黑龙boss任务，获得50%额外材料奖励")
				}else{
					cm.gainItem(4000463, 10);
					cm.gainItem(4310060, 2);
					cm.gainItem(4310058, 1);
					cm.sendOk("兑换成功，你获得1个#v4310058#、2个#v4310060#、10个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日黑龙boss任务")
				}
				cm.getPlayer().dropMessage(5,"黑龙成就进度："+cm.getPlayer().getOneTimeLog("黑龙成就")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("击败黑龙，把#v4001430#带给我");
			cm.dispose();
		};
		if(selection == 9){
			if(cm.getBossLog("每日妖僧兑换") >= maxtime){
				cm.sendOk("一天只能兑换"+maxtime+"次");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4031741, 1)){
				cm.gainItem(4031741, -1);
				cm.setBossLog("每日妖僧兑换");
				cm.getPlayer().setOneTimeLog("妖僧成就");
				if(havecard1){
					cm.gainItem(4000463, 15);
					cm.gainItem(4032226, 3);
					cm.sendOk("兑换成功，你获得3个#v4032226#15个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日妖僧boss任务，获得50%额外材料奖励")
				}else{
					cm.gainItem(4000463, 10);
					cm.gainItem(4032226, 2);
					cm.sendOk("兑换成功，你获得2个#v4032226#10个#v4000463#");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日妖僧boss任务")
				}
				cm.getPlayer().dropMessage(5,"妖僧成就进度："+cm.getPlayer().getOneTimeLog("妖僧成就")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("击败妖僧，把#v4031741#带给我");
			cm.dispose();
		};
		if(selection == 5){
			if(bosstime < 10){
				cm.sendOk("完成至少10次每日boss才可以领取喔");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("每日boss兑换") >= 1){
				cm.sendOk("你已经领取过了");
				cm.dispose();
				return;
			}
			cm.gainItem(4000463, 50);
			cm.gainItem(4310060, 5);
			cm.setBossLog("每日boss兑换");
			cm.getPlayer().setOneTimeLog("每日boss成就");
			if(cm.getPlayer().getOneTimeLog("金肝卡") >= 1){
				if(havecard1){
					cm.gainItem(4000463, 50);
					cm.gainItem(4310060, 5);
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e100#n#k#v4310060#x#b#e10#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[金肝卡特权][材料卡特权]直接领取了每日boss任务奖励，且奖励翻倍")
				}else{
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e50#n#k#v4310060#x#b#e5#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[金肝卡特权]直接领取了每日boss任务奖励")
				}
			}else{
				if(havecard1){
					cm.gainItem(4000463, 50);
					cm.gainItem(4310060, 5);
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e100#n#k#v4310060#x#b#e10#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日boss任务，获得奖励翻倍")
				}else{
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e50#n#k#v4310060#x#b#e5#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日boss任务")
				}
			}
			cm.getPlayer().dropMessage(5,"每日boss成就进度："+cm.getPlayer().getOneTimeLog("每日boss成就")+"");
			cm.dispose();
			return;
		};
		if(selection == 7){
			if(missiontime < missiontimeneed){
				cm.sendOk("你还没有完成，不能领喔");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("每日组队兑换") >= 1){
				cm.sendOk("你已经领取过了");
				cm.dispose();
				return;
			}
			cm.setBossLog("每日组队兑换");
			cm.getPlayer().setOneTimeLog("每日组队成就");
			cm.gainItem(4000463, 100);
			cm.gainItem(4430000, 5);
			if(cm.getPlayer().getOneTimeLog("金肝卡") >= 1){
				if(havecard1){
					cm.gainItem(4000463, 100);
					cm.gainItem(4430000, 5);
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e200#n#k#v4430000#x#b#e10#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[金肝卡特权][材料卡特权]直接领取了每日组队任务奖励，且奖励翻倍")
				}else{
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[金肝卡特权]直接领取了每日组队任务奖励")
				}
			}else{
				if(havecard1){
					cm.gainItem(4000463, 100);
					cm.gainItem(4430000, 5);
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e200#n#k#v4430000#x#b#e10#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 使用[材料卡特权]完成了每日组队任务，获得奖励翻倍")
				}else{
					cm.sendOk("兑换成功，你获得#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k");
					cm.全服黄色喇叭("[每日boss] : 恭喜玩家 "+cm.getPlayer().getName()+" 完成了每日组队任务")
				}
			}
			cm.getPlayer().dropMessage(5,"每日组队成就进度："+cm.getPlayer().getOneTimeLog("每日组队成就")+"");
			cm.dispose();
			return;
		};
		if(selection == 6){
			var string = "每种每日boss每天可以完成2次\r\n"
			for(var i = 0;i < name.length; i++){
				string +="["+name[i]+"]需要#v"+cost[i]+"#，奖励"+get[i]+"\r\n"
			}
			string +="[完成8次任务]可以领取#v4000463#x#b#e50#n#k#v4310060#x#b#e5#n#k\r\n"
			string +="[完成"+missiontimeneed+"次组队任务]可以领取#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k\r\n"
			cm.sendOk(string);
			cm.dispose();
			return;
		};
		if(selection == 8){
			var string = "完成"+missiontimeneed+"次组队任务(每种最多计2次)即可获得奖励\r\n【当前已完成#b#e"+missiontime+"/"+missiontimeneed+"#n#k次】\r\n"
			for(var i = 0;i < missionlog.length; i++){
				if(cm.getBossLog(missionlog[i]) >= 2){
					string +="#b#e【已完成】"
				}else{
					string +="#r#e【未完成】"
				}
				string +="["+missionlog[i]+"]"+cm.getBossLog(missionlog[i])+"次#n#k\r\n"
			}
			string +="奖励#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k\r\n"
			cm.sendOk(string);
			cm.dispose();
			return;
		};
		
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}