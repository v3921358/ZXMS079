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
			text += "\t\t\t\t#e#b  冒险岛新人礼包 #k	#n\r\n"
			text += "#b\t#v1402039##v1432040##v1382039##v1452045##v1462040##v1472055##v1332055##v1482022##v1492022##l\r\n"//3
			text += "#b\t本职业64枫叶武器(110级武器的攻击，100命中和20四维)#l\r\n"//3
            text += "#b\t#v2040709##v2040006##v2040303##v2040403##v2040506##v2040603##v2040806##v2040903# #l\r\n"//3
			text += "#b\t 《 改版必成卷 》(只给一个，上面就是让你看看)#l\r\n"//3
			text += "#b\t#v4000148# x #r100 可以用于永恒抽奖 #l\r\n"//3
            text += "#b\t#v1113084#  30六维黑龙指环 *1#l\r\n"//3
            text += "#b\t#v2049100#  《赌狗卷轴》 *20#l\r\n"//3
            text += "#b\t#v1113075#  不给这个 #l\r\n"//3
            text += "#b\t#v1432214#  也不给这个 #l\r\n"//3
            //text += "#b\t盛大点券 #r 300000点卷#l\r\n"//3
            text += "#b\t\额外赠送金币#r 30000000  #l\r\n\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getPlayer().getOneTimeLog("70级礼包") == 0){
			if(cm.getLevel() <72 ){
				cm.sendOk("达到72级才可以领喔");
				cm.dispose();
				return;
			};
			var job = cm.判断职业();
			if(job == 110 || job == 111 || job == 112 || job == 120 || job == 121 || job == 122 || job == 1100 || job == 1110 || job == 1111 || job == 1112){
				cm.给属性装备(1402039,0,0,20,20,20,20,1000,1000,105,0,0,0,0,100,23,40,0);
			}else if(job == 130 || job == 131 || job == 132){
				cm.给属性装备(1432040,0,0,20,20,20,20,1000,1000,107,0,0,0,0,100,23,40,0);
			}else if(job == 2000 || job == 2100 || job == 2110 || job == 2111 || job == 2112){
				cm.给属性装备(1442051,0,0,20,20,20,20,1000,1000,107,0,0,0,0,100,23,40,0);
			}else if(job == 200 || job == 210 || job == 211 || job == 212 || job == 220 || job == 221 || job == 222 || job == 230 || job == 231 || job == 232 || job == 1200 || job == 1210 || job == 1211 || job == 1212){
				cm.给属性装备(1382039,0,0,20,20,20,20,1000,1000,80,125,0,0,0,100,23,40,0);
			}else if(job == 310 || job == 311 || job == 312 || job == 1300 || job == 1310 || job == 1311 || job == 1312){
				cm.给属性装备(1452045,0,0,20,20,20,20,1000,1000,100,0,0,0,0,100,23,40,0);
			}else if(job == 320 || job == 321 || job == 322){
				cm.给属性装备(1462040,0,0,20,20,20,20,1000,1000,103,0,0,0,0,100,23,40,0);
			}else if(job == 410 || job == 411 || job == 412 || job == 1400 || job == 1410 || job == 1411 || job == 1412){
				cm.给属性装备(1472055,0,0,20,20,20,20,1000,1000,50,0,0,0,0,100,23,40,0);
				cm.给属性装备(1332055,0,0,20,20,20,20,1000,1000,100,0,0,0,0,100,23,40,0);
			}else if(job == 420 || job == 421 || job == 422){
				cm.给属性装备(1332055,0,0,20,20,20,20,1000,1000,100,0,0,0,0,100,23,40,0);
			}else if(job == 510 || job == 511 || job == 512 || job == 1500 || job == 1510 || job == 1511 || job == 1512){
				cm.给属性装备(1482022,0,0,20,20,20,20,1000,1000,78,0,0,0,0,100,23,40,0);
			}else if(job == 520 || job == 521 || job == 522){
				cm.给属性装备(1492022,0,0,20,20,20,20,1000,1000,78,0,0,0,0,100,23,40,0);
			}else{
				cm.sendOk("检测职业失败，请二转后再尝试！");
				cm.dispose();
				return;
			}
			//var job = cm.判断职业();
			cm.gainItem(4000148, 100);
			cm.gainItem(2040709, 1);
			cm.gainItem(2049100, 20);
			cm.gainMeso(30000000);
			cm.给属性装备(1113084, 0, 0, 30, 30, 30, 30, 500, 500, 30, 30,0, 0, 0, 0, 40, 40, 0);
			cm.sendOk("领取成功！");
			cm.getPlayer().setOneTimeLog("70级礼包");
			cm.全服黄色喇叭("[70级礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了70级大礼包。")
			cm.dispose();
			}else{
            cm.sendOk("#e#b一个人只能领取一次\r\n ");
            cm.dispose();
			}
		}
	}
}