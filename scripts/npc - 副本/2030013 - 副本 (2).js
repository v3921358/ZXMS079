/*
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
		
     //  var selStr = "\r\n    " + �� + " " + �� + "  " + �� + "  " + �� + "#r#e < ����ð�յ� > #k#n " + �� + "  " + �� + "  " + �� + " " + �� + "\r\n\r\n";
var selStr = "";
	selStr += " #b#e[��������������ͼ��ѡ��������ͼ]\r\n#d     �µ�ͼ�����׵���\r\n\r\n\r\n#n#k";
//Ѳ�����Ա�ɼ�
		//if (cm.getPlayer().getGMLevel() > 0) {
			//selStr += " #L99999##rѲ�����#k#l\r\n";
		//}
		 
        selStr += " #L1##r����#b��������ͼ#b��#k#l\r\n";

        selStr += " #L2##r����#b���µ�ͼ�������壬һ������Ҫһ��#v4001017##b��#k#l\r\n";
		

	

        cm.�Ƿ�˵������(selStr);
               // cm.gainItem(5211047, -1000);
               // cm.gainItem(5360014, -1000);
    } else if (status == 1) {
        switch (selection) {
            case 1:
}else */if(cm.haveItem(4031506,1)){
                cm.�Ի�����();
               cm.gainItem(5010020, 1);
                break;
            case 2:
            cm.�Ի�����();
                cm.��NPC(2030013, 2);
 //cm.gainItem(5211047, -1000);
             //cm.gainItem(5360014, -1000);
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
            case 101:
                cm.�Ի�����();
                cm.openNpc(9900004, 99);
                break;
            case 102:
                cm.�Ի�����();
                cm.openNpc(9900004, 98);
                break;
            case 103:
                cm.�Ի�����();
                cm.openNpc(9900004, 97);
                break;
            case 104:
                cm.�Ի�����();
                cm.openNpc(9900004, 95);
                break;
           case 105:
                 cm.�Ի�����();
		   cm.openNpc(9900004, 93);
                break;
            case 4:
                cm.�Ի�����();
                cm.openNpc(9900004, 4);
                break;
            case 5:
                cm.�Ի�����();
                cm.openNpc(9900004, 5);
                break;
			case 99:
			//	cm.getPlayer().���˼���=0;
				cm.˵������("\t\t���촰������  #r@����#k   ���ɲ鿴����ָ�\r\n\r\n#d\t\t�������ҷ��ָ�����ල����ɫ��Ϸ������\r\n\r\n\t\t#d��֤�ݽ�ͼ��ź��㽫��������вƲ�������\r\n\r\n#e#r\t\t��ͼΪ֤��������ɾ�Ŵ�������");
                cm.�Ի�����();
			    //cm.��NPC(9900004, 99999);
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
			case 26:
                cm.�Ի�����();
           cm.openNpc(9900004, 94);
          
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
            case 30:
                if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
					cm.�Ի�����();
					cm.��NPC(9900004, 3);
				}else{
					cm.˵������("�����г���ʹ�øù��ܡ�");
					cm.�Ի�����();
				}
                break;
			case 31:
				if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
					cm.�Ի�����();
					cm.��NPC(9900004, 30);
				}else{
					cm.˵������("�����г���ʹ�øù��ܡ�");
					cm.�Ի�����();
				}
                break;
			case 100:
				if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
					cm.�Ի�����();
					cm.��NPC(9900004, 100);
				}else{
					cm.˵������("�����г���ʹ�øù��ܡ�");
					cm.�Ի�����();
				}
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

function �������() {
	var �ı� = "�������";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#b"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}

function ��ȯ����() {
	var �ı� = "��ȯ����";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#b"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}

function ��������() {
	var �ı� = "��������";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#b"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}