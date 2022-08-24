/*
 ZEVMS冒险岛(079)游戏服务端
 心跳箱子1
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

function action() {
	var 随机 = cm.随机数(25);
	switch (随机) {
		case 1:
			cm.给物品(4006000,cm.随机数(10));
			cm.说明文字("恭喜你获得 #b魔法石#k 礼包。");
			break;
		case 2:
			cm.给物品(4006001,cm.随机数(10));
			cm.说明文字("恭喜你获得 #b召回#k 礼包。");
			break;
		case 3:
			cm.给物品(4004000,cm.随机数(5));
			cm.给物品(4004001,cm.随机数(5));
			cm.给物品(4004002,cm.随机数(5));
			cm.给物品(4004003,cm.随机数(5));
			cm.给物品(4004004,cm.随机数(5));
			cm.说明文字("恭喜你获得 #b母矿石#k 礼包。");
			break;
		case 4:
			cm.给物品(4001009,cm.随机数(3));
			cm.说明文字("恭喜你获得 #b橡皮擦#k 礼包。");
			break;
		case 5:
			cm.给物品(4001010,cm.随机数(3));
			cm.说明文字("恭喜你获得 #b橡皮擦#k 礼包。");
			break;
		case 6:
			cm.给物品(4001011,cm.随机数(3));
			cm.说明文字("恭喜你获得 #b橡皮擦#k 礼包。");
			break;
		case 7:
			cm.给物品(4001012,cm.随机数(3));
			cm.说明文字("恭喜你获得 #b橡皮擦#k 礼包。");
			break;
		case 8:
			cm.给物品(4001013,cm.随机数(3));
			cm.说明文字("恭喜你获得 #b橡皮擦#k 礼包。");
			break;
		case 9:
			cm.给物品(4001014,cm.随机数(3));
			cm.说明文字("恭喜你获得 #b橡皮擦#k 礼包。");
			break;
		case 10:
			cm.给能力点(cm.随机数(3));
			cm.说明文字("恭喜你获得 #b能力点#k 礼包。");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
			cm.给金币(cm.随机数(100000));
			cm.说明文字("恭喜你获得 #b金币#k 礼包。");
			break;
		case 21:
			cm.给经验(cm.随机数(100000));
			cm.说明文字("恭喜你获得 #b经验#k 礼包。");
			break;
		case 22:
			cm.给点券(cm.随机数(10000));
			cm.说明文字("恭喜你获得 #b点券#k 礼包。");
			break;
		case 23:
			cm.给人气(cm.随机数(5));
			cm.说明文字("恭喜你获得 #b人气#k 礼包。");
			break;	
		default:
			cm.说明文字("这是一个空箱子。");
			break;
	}
	cm.收物品(2022465,1);
	cm.对话结束();
}