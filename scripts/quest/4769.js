/*
 ZEVMS冒险岛(079)游戏服务端
 70级奖励
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
            if (qm.判断背包特殊栏().isFull(2)) {
                qm.sendNext("特殊栏必须有三个空位。");
                qm.对话结束();
                return;
            }
            if (qm.getQuestStatus(4769) == 2) {
                qm.sendOk("你已经领取过奖励，继续努力到71级可以获得更多奖励喔");
                qm.completeQuest();
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b70#k 级。\r\n\r\n" + huoqu + " #v1032113# #v1102041# #v1132093# x 1");
            }
        } else if (status == 1) {
            qm.sendOk("下一次奖励为 #b71#k 级。");
            qm.gainItem(1032113, 1);
            qm.gainItem(1102041, 1);
            qm.gainItem(1132093, 2);
            qm.completeQuest();
            qm.dispose();
        }
    }
}