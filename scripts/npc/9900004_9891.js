/*
咕咕冒险岛-贝勒制作与合成
 */
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

 function start() {
    status = 0;
    action(1, 0, 0);
}
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var cost = 3; //合成需要数量
var cost2 = 3; //抽奖需要材料数量
var itemlist = [1113072,1132243,1122264,1032220];

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想合成了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = " 你好，我是贝勒制作合成NPC\r\n———————————————————————————\r\n#b#e"+cost2+"#n#k个#v4310098#可以抽取一次低级贝勒\r\n连抽请#b#e注意装备空格#n#k，吞掉不补";
			selStr += "\r\n#L4##b#e抽取贝勒#l";
			selStr += "\r\n#L5##r#e五连抽！#n#k#l";
			selStr += "\r\n#L19##r#e十连抽！！！#n#k#l";
			selStr += "\r\n\r\n———————————————————————————"
			selStr += "\r\n合成是【#b#e"+cost+"合1#n#k】"
			selStr += "\r\n#L0##b#e"+蓝色角点+"中级#v1113073##l";
			selStr += "#L1#"+蓝色角点+"高级#v1113074##l";
			selStr += "#L2#"+蓝色角点+"最高#v1113075##l#n#k";
			selStr += "\r\n#L3##r#e"+蓝色角点+"一键自动合成#v1113073##v1113074##v1113075##l#n#k";
			selStr += "\r\n\r\n———————————————————————————"
			selStr += "\r\n#L6##b#e"+蓝色角点+"中级#v1132244##l";
			selStr += "#L7#"+蓝色角点+"高级#v1132245##l";
			selStr += "#L8#"+蓝色角点+"最高#v1132246##l#n#k";
			selStr += "\r\n#L9##r#e"+蓝色角点+"一键自动合成#v1132244##v1132245##v1132246##l#n#k";
			selStr += "\r\n\r\n———————————————————————————"
			selStr += "\r\n#L10##b#e"+蓝色角点+"中级#v1122265##l";
			selStr += "#L11#"+蓝色角点+"高级#v1122266##l";
			selStr += "#L12#"+蓝色角点+"最高#v1122267##l#n#k";
			selStr += "\r\n#L13##r#e"+蓝色角点+"一键自动合成#v1122265##v1122266##v1122267##l#n#k";
			selStr += "\r\n\r\n———————————————————————————"
			selStr += "\r\n#L14##b#e"+蓝色角点+"中级#v1032221##l";
			selStr += "#L15#"+蓝色角点+"高级#v1032222##l";
			selStr += "#L16#"+蓝色角点+"最高#v1032223##l#n#k";
			selStr += "\r\n#L17##r#e"+蓝色角点+"一键自动合成#v1032221##v1032222##v1032223##l#n#k";
			selStr += "\r\n\r\n———————————————————————————"
			selStr += "\r\n#L18##r#e"+蓝色角点+"全部自动合成#v1113075##v1132246##v1122267##v1032223##l#n#k";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.haveItem(1113072,cost)){
				cm.gainItem(1113072, 0-cost);
				cm.给属性装备(1113073,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.dispose();
				return;
			};
			cm.sendOk("你没有戒指，休想骗我");
			cm.dispose();
			return;
		};
		if(selection == 1){
			if(cm.haveItem(1113073,cost)){
				cm.gainItem(1113073,0-cost);
				cm.给属性装备(1113074,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成50六维[高级贝勒戒指]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有戒指，休想骗我");
			cm.dispose();
			return;	
		};
		if(selection == 2){
			if(cm.haveItem(1113074,cost)){
				cm.gainItem(1113074,0-cost);
				cm.给属性装备(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成100六维[最高级贝勒戒指]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有戒指，休想骗我");
			cm.dispose();
			return;		
		};
		if(selection == 3){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1113072,cost)){
					cm.gainItem(1113072,0-cost);
					cm.给属性装备(1113073,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1113073,cost)){
					cm.gainItem(1113073,0-cost);
					cm.给属性装备(1113074,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1113074,cost)){
					cm.gainItem(1113074,0-cost);
					cm.给属性装备(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.全服黄色喇叭("[贝勒合成] : 玩家 "+cm.getPlayer().getName()+" 一次合成了"+a+"个中级"+b+"个高级"+c+"个最高级贝勒戒指，恐怖如斯")
				}
			cm.sendOk("自动合成完毕");
			cm.dispose();
			return;	
		};
		if(selection == 4){
			if(cm.haveItem(4310098,cost2)){
				cm.gainItem(4310098,0-cost2)
				var random = Math.floor(Math.random() * +4);
				cm.gainItem(itemlist[random],1)
				cm.sendOk("抽取完毕");
				cm.dispose();
				return;
			}
			cm.sendOk("材料不足");
			cm.dispose();
			return;
		};
		if(selection == 5){
			for(var i =0;i<5;i++){
				if(cm.haveItem(4310098,cost2)){
				cm.gainItem(4310098,0-cost2)
				var random = Math.floor(Math.random() * +4);
				cm.gainItem(itemlist[random],1)
				}else{
					cm.sendOk("材料不足，抽取中断");
					cm.dispose();
					return;
				}
			}
			random = Math.floor(Math.random() * +3);
			random += 1
			cm.gainItem(4310098,random)
			cm.sendOk("抽取完毕，返还"+random+"个#v4310098#(随机1~3)");
			cm.dispose();
			return;
			
		};
		if(selection == 6){
			if(cm.haveItem(1132243,cost)){
				cm.gainItem(1132243, 0-cost);
				cm.给属性装备(1132244,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.dispose();
				return;
			};
			cm.sendOk("你没有腰带，休想骗我");
			cm.dispose();
			return;
		};
		if(selection == 7){
			if(cm.haveItem(1132244,cost)){
				cm.gainItem(1132244,0-cost);
				cm.给属性装备(1132245,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成50六维[高级贝勒腰带]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有腰带，休想骗我");
			cm.dispose();
			return;	
		};
		if(selection == 8){
			if(cm.haveItem(1132245,cost)){
				cm.gainItem(1132245,0-cost);
				cm.给属性装备(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成100六维[最高级贝勒腰带]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有腰带，休想骗我");
			cm.dispose();
			return;		
		};
		if(selection == 9){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1132243,cost)){
					cm.gainItem(1132243,0-cost);
					cm.给属性装备(1132244,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1132244,cost)){
					cm.gainItem(1132244,0-cost);
					cm.给属性装备(1132245,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1132245,cost)){
					cm.gainItem(1132245,0-cost);
					cm.给属性装备(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.全服黄色喇叭("[贝勒合成] : 玩家 "+cm.getPlayer().getName()+" 一次合成了"+a+"个中级"+b+"个高级"+c+"个最高级贝勒腰带，恐怖如斯")
				}
			cm.sendOk("自动合成完毕");
			cm.dispose();
			return;	
		};
		if(selection == 10){
			if(cm.haveItem(1122264,cost)){
				cm.gainItem(1122264, 0-cost);
				cm.给属性装备(1122265,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.dispose();
				return;
			};
			cm.sendOk("你没有项链，休想骗我");
			cm.dispose();
			return;
		};
		if(selection == 11){
			if(cm.haveItem(1122265,cost)){
				cm.gainItem(1122265,0-cost);
				cm.给属性装备(1122266,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成50六维[高级贝勒项链]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有项链，休想骗我");
			cm.dispose();
			return;	
		};
		if(selection == 12){
			if(cm.haveItem(1122266,cost)){
				cm.gainItem(1122266,0-cost);
				cm.给属性装备(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成100六维[最高级贝勒项链]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有项链，休想骗我");
			cm.dispose();
			return;		
		};
		if(selection == 13){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1122264,cost)){
					cm.gainItem(1122264,0-cost);
					cm.给属性装备(1122265,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1122265,cost)){
					cm.gainItem(1122265,0-cost);
					cm.给属性装备(1122266,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1122266,cost)){
					cm.gainItem(1122266,0-cost);
					cm.给属性装备(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.全服黄色喇叭("[贝勒合成] : 玩家 "+cm.getPlayer().getName()+" 一次合成了"+a+"个中级"+b+"个高级"+c+"个最高级贝勒项链，恐怖如斯")
				}
			cm.sendOk("自动合成完毕");
			cm.dispose();
			return;	
		};
		if(selection == 14){
			if(cm.haveItem(1032220,cost)){
				cm.gainItem(1032220, 0-cost);
				cm.给属性装备(1032221,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.dispose();
				return;
			};
			cm.sendOk("你没有耳环，休想骗我");
			cm.dispose();
			return;
		};
		if(selection == 15){
			if(cm.haveItem(1032221,cost)){
				cm.gainItem(1032221,0-cost);
				cm.给属性装备(1032222,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成50六维[高级贝勒耳环]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有耳环，休想骗我");
			cm.dispose();
			return;	
		};
		if(selection == 16){
			if(cm.haveItem(1032222,cost)){
				cm.gainItem(1032222,0-cost);
				cm.给属性装备(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("合成成功");
				cm.全服黄色喇叭("[贝勒合成] : 恭喜玩家 "+cm.getPlayer().getName()+" 合成100六维[最高级贝勒耳环]成功！！！")
				cm.dispose();
				return;
			};
			cm.sendOk("你没有耳环，休想骗我");
			cm.dispose();
			return;		
		};
		if(selection == 17){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1032220,cost)){
					cm.gainItem(1032220,0-cost);
					cm.给属性装备(1032221,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1032221,cost)){
					cm.gainItem(1032221,0-cost);
					cm.给属性装备(1032222,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1032222,cost)){
					cm.gainItem(1032222,0-cost);
					cm.给属性装备(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.全服黄色喇叭("[贝勒合成] : 玩家 "+cm.getPlayer().getName()+" 一次合成了"+a+"个中级"+b+"个高级"+c+"个最高级贝勒耳环，恐怖如斯")
				}
			cm.sendOk("自动合成完毕");
			cm.dispose();
			return;	
		};
		if(selection == 18){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1113072,cost)){
					cm.gainItem(1113072,0-cost);
					cm.给属性装备(1113073,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1113073,cost)){
					cm.gainItem(1113073,0-cost);
					cm.给属性装备(1113074,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1113074,cost)){
					cm.gainItem(1113074,0-cost);
					cm.给属性装备(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					a += 1;
				}else{
					break;
				};
			}
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1132243,cost)){
					cm.gainItem(1132243,0-cost);
					cm.给属性装备(1132244,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1132244,cost)){
					cm.gainItem(1132244,0-cost);
					cm.给属性装备(1132245,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1132245,cost)){
					cm.gainItem(1132245,0-cost);
					cm.给属性装备(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					b += 1;
				}else{
					break;
				};
			}
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1122264,cost)){
					cm.gainItem(1122264,0-cost);
					cm.给属性装备(1122265,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1122265,cost)){
					cm.gainItem(1122265,0-cost);
					cm.给属性装备(1122266,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1122266,cost)){
					cm.gainItem(1122266,0-cost);
					cm.给属性装备(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c += 1;
				}else{
					break;
				};
			}
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1032220,cost)){
					cm.gainItem(1032220,0-cost);
					cm.给属性装备(1032221,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1032221,cost)){
					cm.gainItem(1032221,0-cost);
					cm.给属性装备(1032222,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1032222,cost)){
					cm.gainItem(1032222,0-cost);
					cm.给属性装备(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					d += 1;
				}else{
					break;
				};
			}
			if( a>0 || b>0 || c>0 || d>0){
				var string = "[贝勒合成] : 玩家 "+cm.getPlayer().getName()+" 一键合成了"
				if(a>0){
					string += ""+a+"个最高戒指"
				}
				if(b>0){
					string += ""+b+"个最高腰带"
				}
				if(c>0){
					string += ""+c+"个最高项链"
				}
				if(d>0){
					string += ""+d+"个最高耳环"
				}
				string += "，真是恐怖如斯"
				cm.全服黄色喇叭(string)
				}
			cm.sendOk("自动合成完毕");
			cm.dispose();
			return;	
		};
		if(selection == 19){
			for(var i =0;i<10;i++){
				if(cm.haveItem(4310098,cost2)){
				cm.gainItem(4310098,0-cost2)
				var random = Math.floor(Math.random() * +4);
				cm.gainItem(itemlist[random],1)
				}else{
					cm.sendOk("材料不足，抽取中断");
					cm.dispose();
					return;
				}
			}
			var random = Math.floor(Math.random() * +4);
			cm.gainItem(itemlist[random],1)
			cm.sendOk("抽取完毕，额外赠送一个");
			cm.dispose();
			return;
			
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}