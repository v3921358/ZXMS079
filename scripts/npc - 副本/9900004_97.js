/*
 ZEVMSð�յ�(079)��Ϸ����˽ű�
 ���ͣ�װ����ħ������
 ʱ�䣺2019-01-03
 ���ߣ�ZEV�����ͷſ�
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
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;
    action(1, 0, 0)
}
function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--

    }
    if (status <= 0) {
        var selStr = "   Hi~#b#h ##k����������#r������#k�ĵ��������ߣ��ҿ��Դ���Ƿ��ĵ���Ч�����������ĵ�����������Ч���𣿸�ħ�ĵ���ͨ���ƶ�����������Ϣ���鿴��ϸ��Ϣ��\r\n#r��ħ��װ�����ܽ���ǿ�������������ȡ�#n\r\n\r\n";
		
		selStr += " #L1##bװ�����#k#l  #L2##bװ����ħ#k#l  #L8##r�߽׸�ħ#k#l  #L3##bװ����ϴ#k#l\r\n";
		selStr += " #L6##bװ��ϴ��#k#l  #L4##b��ʯϴ��#k#l  #L7##rָ����ϴ#k#l\r\n";
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
        case 1:
			cm.�Ի�����();
            cm.��NPC(1032002,1);
            break;
		case 2:
			cm.�Ի�����();
            cm.��NPC(1032002,2);
            break;
		case 3:
			cm.�Ի�����();
            cm.��NPC(1032002,3);
            break;
		case 4:
			cm.�Ի�����();
            cm.��NPC(1032002,4);
            break;
		case 5:
			cm.�Ի�����();
            cm.��NPC(1032002,5);
            break;
		case 6:
			cm.�Ի�����();
            cm.��NPC(1032002,6);
            break; 
		case 7:
			cm.�Ի�����();
            cm.��NPC(1032002,7);
            break;
		case 8:
			cm.�Ի�����();
            cm.��NPC(1032002,8);
            break;
        }
    }
}