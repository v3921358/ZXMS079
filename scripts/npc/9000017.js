
importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server);


var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);


	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("好的如果要出去随时来找我.");
		cm.dispose();
	}else 
	{
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0)
	{		
		cm.sendYesNo(""+ cm.getChar().getName() +"你好,当前时间是#b" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒. \r\n#k#r此NPC只有每日17点,18点,19点,20点,21点,22点,23点整#k才可以使用到时候,请拿起你的鼠标疯狂点击吧~\r\n每次点击都会获得#b点卷#k,运气不错时,可以获得很多哦!\r\n给你#e#r1分钟时间#k#n,看谁点的快!\r\n\r\n" );	
	}
	else if (status == 1) {
 if (cm.getPlayer().getClient().getChannel() !=1) {
cm.sendOk("此活动只能在#r1#k频道进行!");
cm.dispose();
		 } else if (cm.getHour() < 17  ||cm.getHour() > 23 ) {
cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
 } else if (cm.getMin() < 1) {
//cm.sendOk("已经过了哦.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();


// }else if (cm.getPlayer().getName().getVip() == 0) {
       if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =4001126;
cm.gainNX(10);
cm.serverNotice("[射手村-可可]:[" + cm.getPlayer().getName() + "]疯狂点击获得 10 点卷.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =4001126;
cm.gainNX(30);
cm.serverNotice("[射手村-可可]:[" + cm.getPlayer().getName() + "]疯狂点击获得 50 点卷.");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =4001126;
cm.gainNX(30);
cm.serverNotice("[射手村-可可]:[" + cm.getPlayer().getName() + "]疯狂点击获得 30 点卷.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =4001126;
cm.gainNX(222);
cm.全服黄色喇叭("[射手村-可可] : 恭喜玩家 "+cm.getPlayer().getName()+" 疯狂点击获得 222 点卷大家鼓掌.")
 
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =4001126;
cm.gainNX(58);
cm.serverNotice("[射手村-可可]:[" + cm.getPlayer().getName() + "]疯狂点击获得 58 点卷."); 
cm.dispose();
}else{
var zz =4001126;
cm.gainNX(30);
cm.serverNotice("[射手村-可可]:[" + cm.getPlayer().getName() + "]疯狂点击获得 30 点卷.");
cm.dispose();}



		 }else {
cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
		cm.dispose();	
	}
}
}}