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
var ����ͼ�� = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

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
	if(cm.getPlayer().�Ĳ�����>0){
		cm.�Ի�����();
		cm.��NPC(9900004,303);
		return;
	}
	//ð������
	if(cm.getPlayer().getClient().getChannel()==4){
		if(cm.ð������()>0){
			if(���ͼ(cm.�жϵ�ͼ())){
				cm.�Ի�����();
				cm.��NPC(9900004,71447502);
				return;
			}
		}
	}

	//��Ӱ�ﲻ�ɴ�����
	if(cm.�жϵ�ͼ()>=970000000 && cm.�жϵ�ͼ()<=970000005){
		cm.���˹���("�������޷�ʹ�á�");
		cm.�Ի�����();
		return;
	}
	var ƣ��ֵ = cm.getPlayer().�ж�ƣ��ֵ();
	//��ʾ�Ľ��ȣ���Ҫ�ĳɺͿ���̨1�ŵ�ʱ��һ��������
	var ƣ��ֵ���� = 600;
	var ���� = ƣ��ֵ/ƣ��ֵ����*100;
	if(ƣ��ֵ>ƣ��ֵ����){
		����=100;
	}
	//��ʾ
    if (status == 0) {
		
       var selStr = "\r\n   " + �� + " " + �� + "  " + �� + "  " + �� + " #r#e < ����ð�յ� > #k#n " + �� + "  " + �� + "  " + �� + " " + �� + "\r\n\r\n";
	selStr += " #k" + ����ͼ�� + "ʱ��:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k ƣ��:#B"+(100-����)+"# ["+(100-����).toFixed(2)+"%]\r\n";
		 
        selStr += " #L1##b������Ϣ#k#l #L2##b�ռ䴫��#k#l #L3##b�� �� ��#k#l#L4##b����ֿ�#k#l\r\n";

        selStr += " #L5##b������#k#l #L6##bÿ������#k#l #L7##b����ר��#k#l#L8##b�ƹ�ϵͳ#k#l\r\n";
		
		selStr += " #L10##bð�հٿ�#k#l #L11##b����ϵͳ#k#l #L12##b��������#k#l#L13##b�� Ӱ ��#k#l\r\n";
		
		selStr += " #L14##b����ʹ��#k#l #L15##b���ֵ㲥#k#l #L16##b��������#k#l#L53##b��������#l\r\n";
		selStr += " #L54##b�����ֲ�#k#l #L25##b��ͼ�Ż�#k#l\r\n";
		
		selStr += "\r\n\r\n";
		
		selStr += "\t\t\t\t   www.zm8au.cn\r\n";

        cm.�Ƿ�˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.�Ի�����();
                cm.openNpc(9900004, 1);
                break;
            case 2:
            cm.�Ի�����();
                cm.��NPC(9900004, 2);
                break;
			//��������
			case 100:
				if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
					cm.�Ի�����();
					cm.��NPC(9900004, 100);
				}else{
					cm.˵������("�����г���ʹ�øù��ܡ�");
					cm.�Ի�����();
				}
                break;
			//�������
            case 3:
                cm.�Ի�����();
                cm.openNpc(9900004, 3);
                break;
            case 4:
                cm.�Ի�����();
                cm.openNpc(9900004, 4);
                break;
            case 5:
                cm.�Ի�����();
                cm.openNpc(9900004, 5);
                break;
            case 6:
     			cm.�Ի�����();
                //cm.��NPC(9900004, 22);
				cm.��NPC(9330042, 0);
                break;
            case 7:
                cm.�Ի�����();
                cm.openNpc(9900004, 7);
                break;
            case 8:
                cm.�Ի�����();
                cm.openNpc(9900004, 8);
                break;
			case 9:
                cm.�Ի�����();
                cm.openNpc(9900004, 9);
                break;
			case 10:
                cm.�Ի�����();
                cm.openNpc(9900007, 0);
                break;
			case 11:
                cm.�Ի�����();
                cm.openNpc(9900004, 11);
                break;
			case 53:
                cm.�Ի�����();
			    cm.��NPC(2000, 1);
                break;
			case 12:
                cm.�Ի�����();
                cm.openNpc(9900004, 12);
                break;
			case 13:
                cm.�Ի�����();
                cm.openNpc(2007, 11);
                break;
			case 14:
                cm.�Ի�����();
                cm.openNpc(9900004, 14);
                break;
			case 15:
                cm.�Ի�����();
                cm.openNpc(9900004, 15);
                break;
			case 54:
                cm.�Ի�����();
			    cm.openNpc(9900004, 21);
                break;
			case 25:
                cm.�Ի�����();
                cm.��NPC(9900004, 25);
                break;
			case 16:
                cm.�Ի�����();
                cm.openNpc(2007, 2007);
                break;
			default:
                cm.�Ի�����();
                break;
        }
    }
}