/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű����������˵�
 */
//ʱ������
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//�ز�����
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.�Ի�����();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var ���ٶ� = cm.Getcharactera("���ִ己�ٶ�", 1);
    var ���� = cm.Getcharactera("���ִ己�ٶ�", 1) / 10000;
    if (status == 0) {
        var selStr = "	Hi~#b#h ##k����Ҫһ�������ִ������ִ���һ���羰�����ĳ���Ŷ�����ܶ����̻���ֲ����һ�������ִ�������#r�ݵ㾭��#k��ȡ��Ŷ��Խ�Ƿ��٣����Ի�ȡԽ�ࡣ������������ƻ����򣬻���ٷ��ٶȡ�\r\n";

        selStr += "\t\t\t#k" + r + " ʱ��: #r" + hour + "#k #b: #r" + minute + "#k #b: #r" + second + "#k\r\n";


        selStr += "���ִ壻����[#b�����ȡ#k]\r\n";
        selStr += "���ٶȣ�#b" + ���ٶ� + "#k\r\n";
        selStr += "�����ʣ�#b" + ����.toFixed(2) + "%#k\r\n";

        selStr += "\t\t\t\t\t#L1##b���ӷ��ٶ�#k#l\r\n";
        selStr += "\t\t\t\t\t#L2##b�������а�#k#l";

        cm.�Ƿ�˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.�Ի�����();
                cm.openNpc(9300000, 1);
                break;
            case 2:
                var text = "   ������������������< #e#r���װ�#k#n >�������������������� #n\r\n\r\n";
                text += "    ����        \t���         \t\t���׵�\r\n";
                var rankinfo_list = cm.getBossRankCountTop("���ִ幱�׵�");
                if (rankinfo_list != null) {
                    for (var i = 0; i < rankinfo_list.size(); i++) {
                        if (i == 20) {
                            break;
                        }
                        var info = rankinfo_list.get(i);

                        text += i == 0 ? "#r" : i == 1 ? "#b" : i == 2 ? "#b" : "";
                        text += "\t" + (i + 1) + "\t\t\t\t";
                        text += info.getCname();
                        for (var j = 16 - info.getCname().getBytes().length; j > 0; j--) {
                            text += " ";
                        }
                        text += "\t#k#n#r" + info.getCount();
                        text += "#k#n \t\t#k";
                        text += "";
                    }
                }
                text += "\r\n\r\n";
                cm.sendOkS(text, 3);
                cm.dispose();
                break;
            default:
                cm.�Ի�����();
                break;
        }
    }
}