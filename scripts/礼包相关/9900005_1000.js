/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：礼包设置文件
 */
function action() {
    cm.给物品(3010070,1);
	cm.说明文字("恭喜你获取 "+cm.显示物品(3010070)+" x 1");
	cm.对话结束();
}