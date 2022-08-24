

function start() {
       if(!cm.getPlayerStat("LVL")>=0 && cm.getPlayerStat("LVL")<=9){

	cm.给经验(1000);

    cm.dispose();
	} else {
	    
cm.playerMessage(5, "只有等级在10级以内的玩家才可以使用。");
cm.sendOk("只有等级在10级以内的玩家才可以使用。");
    cm.dispose();
}
}