/*
 ZEVMSð�յ�(079)��Ϸ�����
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var Ģ�� = "#fUI/UIWindow.img/Minigame/Common/mark#";
var Message = new Array(
			"����Ա����������Ҫ�����˺ź����롣",
			"ÿ��ת�������Ϊ10�ڡ�",
			"����Ҵ����������бȷ��ڱ�������ȫ��",
            "���û�������˺ţ������Լ����롣",
		    "ת����ȷ�϶Է��˺ţ�����ת�������ʧ��",
		    "�����˺�����ֻ�ܴ����֣�����Ӣ�Ļ��߷��ŵȡ�",
			"���������˺ŵ�������߱��ˣ�Ϊ����ĲƲ���ȫ��",
            "����֮��ת��ֻҪ��Ҫ�Է������˺š�"
            );
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	cm.getPlayer().�����˺�(0);
	cm.getPlayer().��������(0);
    if (status == 0) {
        var selStr = "   " + �� + "  " + �� + "  " + �� + "  " + �� + " #r#e < �������� > #k#n " + �� + "  " + �� + "  " + �� + "  " + �� + "\r\n\r\n";
        selStr += "  " + Ģ�� + " ���й���:#r" + Message[Math.floor(Math.random() * Message.length)] + "#k\r\n\r\n";
		selStr += "\t\t\t\t\t #L0##b���ؽ���#k#l\r\n";
		selStr += "\t\t\t\t\t #L1##b��½�˺�#k#l\r\n";
		selStr += "\t\t\t\t\t #L2##bע���˺�#k#l\r\n";


        cm.˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 0:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9900004, 101);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9900004, 102);
                break;

        }
    }
}