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
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ��͵ȼ� = 21;
var ��ߵȼ� = 256;


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
	//selStr += " #k" + ����ͼ�� + "ʱ��:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k ƣ��:#B"+(100-����)+"# ["+(100-����).toFixed(2)+"%]\r\n";
//Ѳ�����Ա�ɼ�
selStr += "\r\n" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n";
	selStr += "     #b��ǰʱ��:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k  #b���#r" + cm.getPlayer().getCSPoints(1) + "#k#n#b  ���þ�#r" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n";
	//selStr += "ƣ��:#B"+(100-����)+"# ["+(100-����).toFixed(2)+"%]\r\n\r\n";
	selStr += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n";
		//if (cm.getPlayer().getGMLevel() > 0) {
			//selStr += " #L99999##rѲ�����#k#l\r\n";
		//}
		 
        //selStr += " #L1##b������Ϣ#k#l #L2##b��ͼ����#k#l #L3##b���߽���#k#l#L4##b����ֿ�#k#l\r\n";

       // selStr += " #L5##b������#k#l #L6##bÿ������#k#l #L54##b�����ֲ�#k#l#L8##b�ƹ�ϵͳ#k#l\r\n";
		
		//selStr += " #L10##bð�հٿ�#k#l #L11##r������ֵ#k#l #L105##r�ۼƳ�ֵ#k#l#L26##b�ط�BOSS#k#l\r\n";//#L13##b�� Ӱ ��#k#l
		
		//selStr += " #L14##b����ʹ��#k#l #L15##b���ֵ㲥#k#l #L16##b��������#k#l#L53##b��������#l\r\n";
		selStr += " #L3##k�� �� ��#k#l #L30##k"+�������()+"#k#l #L31##k"+��ȯ����()+"#k#l#L100##k"+��������()+"#k#l\r\n\r\n\r\n";
selStr += "\r\n\r\n";
		
		selStr += "\t\t\t\t#L99##d#e���ָ��鿴#k#n#l\r\n\r\n";
		
		//selStr += "\t\t\t\t   www.zm8au.cn\r\n";

        cm.�Ƿ�˵������(selStr);
               // cm.gainItem(5211047, -1000);
               // cm.gainItem(5360014, -1000);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.�Ի�����();
                cm.openNpc(9900004, 1);
                break;
            case 2:
            cm.�Ի�����();
                cm.��NPC(9900004, 2);
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
            case 111:
              cm.�Ի�����();
                cm.openNpc(2030013, 100);
                break;
            case 112:
              cm.�Ի�����();
                cm.openNpc(9900004, 5001);
                break;
            case 113:
              cm.�Ի�����();
                cm.openNpc(9900004, 502);
                break;
            case 115:
              cm.�Ի�����();
                cm.openNpc(9900004, 999);
                break;
            case 116:
              cm.�Ի�����();
                cm.openNpc(9900004, 504);
                break;
            case 117:
              cm.�Ի�����();
                cm.openNpc(9900004, 505);
                break;
            case 118:
            cm.�Ի�����();
                cm.openNpc(9900004, 506);

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
           case 106:
                 cm.�Ի�����();
		   cm.openNpc(9000008);
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
		var result = "#k"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}

function ��ȯ����() {
	var �ı� = "��ȯ����";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#k"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}

function ��������() {
	var �ı� = "��������";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#k"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}