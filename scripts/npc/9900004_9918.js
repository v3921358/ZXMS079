/*
 自助重领
 */

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";


 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = "自助服务专区:"
			selStr += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+""
			selStr += "自助重领每次消耗#v4000463#x10，请选择需要重领的道具:"
			selStr += "\r\n#L0#小青蛇戒指(主线任务1)#v1112540##l";
			selStr += "\r\n#L1#全属性10点装(主线任务4)#v1102510##l";
			selStr += "\r\n#L2#全属性25戒指(主线任务14)#v1112675##l";
			selStr += "\r\n#L3#四维50双攻30披风(主线任务20)#v1102556##l";
			selStr += "\r\n#L4#[萌物屠杀者]成就勋章#v1142008##l";
			selStr += "\r\n#L5#[boss杀手]成就勋章#v1142863##l";
			selStr += "\r\n#L6#[boss屠戮者]成就勋章#v1142865##l";
			selStr += "\r\n#L7#[无双杀手]成就勋章#v1142867##l";
			selStr += "\r\n#L8#[组队达人][完美一条龙][肝帝归来]成就点装#v1012057##l";
			selStr += "\r\n#L9#[椅子搜集狂魔]成就点装#v1112900##l";

			
			
			selStr += "\r\n\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
			selStr += "手动补发道具需要联系GM：";
			selStr += "\r\n#L888#道具补发#l";

			
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("主线任务") >= 1){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1112540, 1, 0, 8, 8, 8, 8, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[小青蛇戒指]成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("主线任务进度不足");
			cm.dispose();
            return;	
		};
		if(selection == 1){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("主线任务") >= 4){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1102510, 0, 0, 10, 10, 10, 10, 0, 0, 10, 10,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[主线任务全属性+10点装]成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("主线任务进度不足");
			cm.dispose();
            return;	
		};
		if(selection == 2){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("主线任务") >= 14){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1112675, 0, 0, 25, 25, 25, 25, 0, 0, 25, 25,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[主线任务全属性+25戒指]成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("主线任务进度不足");
			cm.dispose();
            return;	
		};
		if(selection == 3){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("主线任务") >= 20){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1102556, 0, 0, 50, 50, 50, 50, 0, 0, 30, 30,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[主线任务披风]成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("主线任务进度不足");
			cm.dispose();
            return;
		};
		if(selection == 4){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("PB成就") >= 100){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1142008, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[萌物屠杀者]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("你还没有完成这个成就");
			cm.dispose();
            return;
		};
		if(selection == 5){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("每日boss成就") >= 5){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1142008, 0, 0, 66, 66, 66, 66, 66, 66, 66, 66,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[boss杀手]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("你还没有完成这个成就");
			cm.dispose();
            return;
		};
		if(selection == 6){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("每日boss成就") >= 14){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1142865, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[boss屠戮者]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("你还没有完成这个成就");
			cm.dispose();
            return;
		};
		if(selection == 7){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("每日boss成就") >= 60){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1142867, 0, 0, 300, 300, 300, 300, 300, 300, 300, 300,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[无双杀手]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("你还没有完成这个成就");
			cm.dispose();
            return;
		};
		if(selection == 8){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("每日组队成就") >= 60){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1012057, 0, 0, 120, 120, 120, 120, 120, 120, 120, 120,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[肝帝归来]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			if(cm.getPlayer().getOneTimeLog("每日组队成就") >= 14){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1012057, 0, 0, 80, 80, 80, 80, 80, 80, 80, 80,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[完美一条龙]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			if(cm.getPlayer().getOneTimeLog("每日组队成就") >= 5){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1012057, 0, 0, 40, 40, 40, 40, 40, 40, 40, 40,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[组队达人]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("你还没有完成这个成就");
			cm.dispose();
            return;
		};
		if(selection == 9){
				cm.sendOk("你在想屁吃，这个东西不支持重领");
				cm.dispose();
				return;
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("自助重领需要#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("椅子搜集狂魔成就") >= 300){
				cm.gainItem(4000463,-10)
				cm.给属性装备(1112900, 0, 0, 80, 80, 80, 80, 80, 80, 80, 80,0, 0, 0, 0, 0, 0, 0);
				cm.全服黄色喇叭("[自助重领] : ["+cm.getPlayer().getName()+"]重领[椅子搜集狂魔]成就奖励成功")
				cm.sendOk("领取成功");
				cm.dispose();
				return;	
			}
			cm.sendOk("你还没有完成这个成就");
			cm.dispose();
            return;
		};
		if(selection == 88){
			cm.dispose();
            cm.openNpc(9900004, 9909);
            return;
		};
		if(selection == 15){
			cm.dispose();
            cm.openNpc(9900004, 9914);
            return;
		};
		if(selection == 888){
			cm.dispose();
            cm.openNpc(9900004, 9910);
            return;
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}