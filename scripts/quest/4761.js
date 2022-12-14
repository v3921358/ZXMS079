/*
 ZEVMS冒险岛(079)游戏服务端
 8级奖励
 */
var huoqu = "#fUI/UIWindow.img/QuestIcon/4/0#";
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			if (qm.判断背包消耗栏().isFull() && qm.判断背包装备栏().isFull()) {
				qm.sendNext("消耗栏必须有一个空位。");
				qm.对话结束();
				return;
			}
            if (qm.getQuestStatus(4761) == 2) {
                qm.sendOk("你已经领取过奖励，继续努力到10级可以获得新奖励喔");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b8#k 级。\r\n\r\n"+huoqu+" #v1082149# x 1#v2040804# x 7");
            }
        } else if (status == 1) {
            qm.sendOk("下一次奖励为 #b10#k 级。");
            qm.gainItem(1082149, 1);
			qm.gainItem(2040804, 7);
            qm.completeQuest();
            qm.dispose();
        }
    }
}