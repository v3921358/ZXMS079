/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű�����ֳ
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
    var record = cm.getQuestRecord(8252);
    var data = record.getCustomData();
    if (status == 0) {

        var selStr = "    " + �� + " " + �� + "  " + �� + "  " + �� + " #r#e < ��ͼ�Ż� > #k#n " + �� + "  " + �� + "  " + �� + " " + �� + "\r\n";
        selStr += "		Hi~#b#h ##k������㷢�ֵ�ͼ�ϵ���Ƶ�������������ʹ��һ���������Ŷ��ʹ��֮���ͼ�����ض��ӳ�֮����л����ڿ����������Ļ��ͻ������ܶࡣ\r\n		#r�����ظ�ʹ�õ�ͼ����ҽ����ܵ����صĴ���#k\r\n\r\n";
        selStr += "\t\t\t\t#L2#�Ż�������ͼ#l\r\n";
        selStr += "\t\t\t\t#L3#�Ż�������ͼ#l\r\n";
	    selStr += "\t\t\t\t#L5#�Ż���ɮ��ͼ#l\r\n";
        selStr += "\t\t\t\t#L1#�Ż���ǰ��ͼ#l\r\n";


        cm.�Ƿ�˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 2:
                cm.���յ�ͼ(240060200);
				cm.���յ�ͼ(240060100);
				cm.���յ�ͼ(240060000);
                cm.�Ի�����();
                break;
            case 3:
                cm.���յ�ͼ(280030000);
                cm.�Ի�����();
                break;
            case 4:
                cm.���յ�ͼ(240060200);
                cm.�Ի�����();
                break;
			case 5:
                cm.���յ�ͼ(702060000);
                cm.�Ի�����();
                break;	
				
            case 1:
                if (cm.�жϵ�ͼ() == 104000400 ||
                        cm.�жϵ�ͼ() == 101030404 ||
                        cm.�жϵ�ͼ() == 110040000 ||
                        cm.�жϵ�ͼ() == 250010304 ||
                        cm.�жϵ�ͼ() == 200010300 ||
                        cm.�жϵ�ͼ() == 250010503 ||
                        cm.�жϵ�ͼ() == 222010310 ||
                        cm.�жϵ�ͼ() == 107000300 ||
                        cm.�жϵ�ͼ() == 100040105 ||
                        cm.�жϵ�ͼ() == 220050100 ||
                        cm.�жϵ�ͼ() == 221040301 ||
                        cm.�жϵ�ͼ() == 240040401 ||
                        cm.�жϵ�ͼ() == 260010201 ||
                        cm.�жϵ�ͼ() == 261030000 ||
                        cm.�жϵ�ͼ() == 230020100 ||
                        cm.�жϵ�ͼ() == 910000000 ||
                        cm.�жϵ�ͼ() == 910000001 ||
                        cm.�жϵ�ͼ() == 910000002 ||
                        cm.�жϵ�ͼ() == 910000003 ||
                        cm.�жϵ�ͼ() == 910000004 ||
                        cm.�жϵ�ͼ() == 910000005 ||
                        cm.�жϵ�ͼ() == 910000006 ||
                        cm.�жϵ�ͼ() == 910000007 ||
                        cm.�жϵ�ͼ() == 910000008 ||
                        cm.�жϵ�ͼ() == 910000009 ||
                        cm.�жϵ�ͼ() == 910000010 ||
                        cm.�жϵ�ͼ() == 910000011 ||
                        cm.�жϵ�ͼ() == 910000012 ||
                        cm.�жϵ�ͼ() == 910000013 ||
                        cm.�жϵ�ͼ() == 910000014 ||
                        cm.�жϵ�ͼ() == 910000015 ||
                        cm.�жϵ�ͼ() == 910000016 ||
                        cm.�жϵ�ͼ() == 910000017 ||
                        cm.�жϵ�ͼ() == 910000018 ||
                        cm.�жϵ�ͼ() == 910000019 ||
                        cm.�жϵ�ͼ() == 910000020 ||
                        cm.�жϵ�ͼ() == 910000021 ||
                        cm.�жϵ�ͼ() == 910000022 ||
                        cm.�жϵ�ͼ() == 910000023 ||
                        cm.�жϵ�ͼ() == 910000024 ||
                        cm.�жϵ�ͼ() == 230040420
                        ) {
                    cm.˵������("�޷��ڱ���ͼʹ�á�");
                } else {
                    cm.���յ�ͼ();
                }
                cm.�Ի�����();
                break;
            default:
                cm.�Ի�����();
                break;
        }
    }
}