/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű�������
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

var ZEV = 5100000;
var ���� = 1;
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

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

    if (status == 0) {
        var selStr = "\r\n   " + �� + " " + �� + "  " + �� + "  " + �� + " #r#e < ���ֵ㲥 > #k#n " + �� + "  " + �� + "  " + �� + " " + �� + "\r\n\r\n";
		selStr+="\t\t�㲥��Ҫ����:"+cm.��ʾ��Ʒ(ZEV)+" x #r"+����+"#k ����[#r#c"+ZEV+"##k]\r\n\r\n";
        selStr += "\t\t\t\t  #L0##b���ؽ���#k#l\r\n";
		selStr += "\t\t\t\t  #L1##b��ͼ�㲥#k#l\r\n";
		selStr += "\t\t\t\t  #L2##bȫ���㲥#k#l\r\n";
        cm.˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 0:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9900004, 151);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9900004, 152);
                break;

        }
    }
}