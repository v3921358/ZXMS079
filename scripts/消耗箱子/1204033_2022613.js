var itemList =
    Array(
		Array(1012532,100,1,"品克缤脸饰"),//代码、概率、数量、文本
		Array(1022144,100,1,"品克缤眼饰"),
		Array(4310058,200,3,"暴君币x3"),
		Array(4310060,100,5,"暴君强化币x5"),
		Array(4310038,300,2,"PB币x2"),
		Array(4310038,80,5,"PB币x5"),
		Array(4000463,100,200,"国庆纪念币x200"),
		Array(2022466,20,1,"暴君自选箱子")
		
)

function action() {
	var sum = 0;
	for (var i = 0; i <itemList.length; i++){
		sum += itemList[i][1]; 
	}
	var chance = Math.floor(Math.random() * +sum);
	for (var i = 0; i <itemList.length; i++){
		chance -= itemList[i][1];
		if(chance <= 0){	
			var finalchance = i;
			break;				
		}
	}
	cm.setBossLog("开PB箱");
	if(cm.getBossLog("开PB箱")==2 || cm.getBossLog("开PB箱")==4){
		cm.getPlayer().setOneTimeLog("PB成就");
		cm.getPlayer().dropMessage(5,"PB成就进度："+cm.getPlayer().getOneTimeLog("PB成就")+"");
	}
	cm.gainItem(itemList[finalchance][0],itemList[finalchance][2])
	cm.gainItem(2022613,-1)
    cm.全服黄色喇叭("[PB奖励] : ["+cm.getPlayer().getName()+"]开启PB奖励箱子，获得了["+itemList[finalchance][3]+"]")
	return
}