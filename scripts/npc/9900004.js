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
		if(cm.haveItem(2022552,1)==false){
			cm.gainItem(2022552,1)
		}
		
     //  var selStr = "\r\n    " + �� + " " + �� + "  " + �� + "  " + �� + "#r#e < ����ð�յ� > #k#n " + �� + "  " + �� + "  " + �� + " " + �� + "\r\n";
var selStr = "";
	//selStr += " #k" + ����ͼ�� + "ʱ��:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k ƣ��:#B"+(100-����)+"# ["+(100-����).toFixed(2)+"%]\r\n";
//Ѳ�����Ա�ɼ�
  //selStr += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "";
	selStr += "#L1# #b��ǰʱ��:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k  #b���#r" + cm.getPlayer().getCSPoints(1) + "#k#n#b  ���þ�#r" + cm.getPlayer().getCSPoints(2) + "#l#k#n\r\n\r\n";
	//selStr += "ƣ��:#B"+(100-����)+"# ["+(100-����).toFixed(2)+"%]\r\n\r\n";
	selStr += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n";
			if (cm.getPlayer().getGMLevel() > 0) {
		selStr += "#L9999##r�����޵�ȯ/��ҡ�#k#l #L1000##rGM��ͼ����#l #L1001##d����#n#k#r(��ʼ����ɫ)#l\r\n";
		selStr += "#L9991##r#e��#d�߼�װ��#r��#k#l #L9992##r#e��#d�ʼ�����#r��#k#l\r\n";
		selStr += "#L1010##r#e��ָ����ͼNPC�ٻ����� -#k��ȥ���ڵ㿪�ٻ�-#r�߼�#r#e��#l#n\r\n";
		selStr += "#L1011##r#e��ָ����ͼNPC�ٻ����� -#k��ȥ���ڵ㿪�ٻ�-#b��ͨ#r#e��#l#n\r\n";
		}
		 
        selStr += " #L112##b�������#k#l #L2##b���ٴ���#k#l #L3##b���߽���#k#l#L6##bÿ�ջ�Ծ#k#l\r\n";

        selStr += " #L5##b������#k#l #L4##b����ֿ�#k#l #L54##b�����ֲ�#k#l#L88##b���תְ#k#l\r\n";
		
		selStr += " #L10##bð�հٿ�#k#l #L11##r������ֵ#k#l #L105##r�ۼ�����#k#l#L26##b�ط�BOSS#k#l\r\n";//#L13##b�� Ӱ ��#k#l
		
		selStr += " #L25##b��ͼ�Ż�#k#l #L15##g��ֵ�¿�#k#l #L8##b����̵�#k#l#L53##b��������#l\r\n";
		//selStr += " #L25##��ͼ�Ż�#k#l #L30##b"+�������()+"#k#l #L31##b"+��ȯ����()+"#k#l#L100##b"+��������()+"#k#l\r\n";
		selStr += " #L103##dװ����ħ#k#l #L104##r�����̵�#k#l #L101##d����̳�#k#l#L102##g���ҽ���#k#l\r\n"
		selStr += " #L16##b��������#k#l #L111##b����10��#k#l #L113##bѧϰ����#k#l#L118##b��������#k#l\r\n"
		selStr += " #L115##rÿ��Boss#k#l #L116##rװ������#k#l #L117##r����װ��#k#l#L999##r��ת����#k#l\r\n";
		selStr += " #L200##b���ӳ齱#k#l #L201##r�ɾ�ϵͳ#k#l #L202##r���ջ#k#l#L203##k��������#k#l\r\n\r\n";
		
	//selStr += "\t\t\t#L99#" + �� + "#d#e GMָ��鿴 #k#n" + �� + "#l\r\n\r\n";
		
		selStr += "\t\t\t\t  www.22mxd.com\r\n";

        cm.�Ƿ�˵������(selStr);
               // cm.gainItem(5211047, -1000);
               // cm.gainItem(5360014, -1000);
    } else if (status == 1) {
        switch (selection) {
            case 1010:
                if(cm.�жϵ�ͼ()>=910000018 && cm.�жϵ�ͼ()<=910000022){
					cm.�Ի�����();
					cm.��NPC(9900004, 5000);
				}else{
              cm.warp(910000018, 0);
					cm.˵������("�����г�18-22����ʹ�ø��ٻ����﹦�ܡ�");
					cm.�Ի�����();

				}
break;
            case 1011:
                if(cm.�жϵ�ͼ()>=910000007 && cm.�жϵ�ͼ()<=910000012){
					cm.�Ի�����();
					cm.��NPC(9900004, 6000);
				}else{
              cm.warp(910000007, 0);
					cm.˵������("�����г�7-12����ʹ�ø��ٻ����﹦�ܡ�");
					cm.�Ի�����();

				}
break;
            case 1:
                cm.�Ի�����();
                cm.openNpc(9900004, 1);
                break;
       case 9992:
                cm.�Ի�����();
                cm.openNpc(9900004, 5009);
                break;
            case 9902:
                cm.�Ի�����();
                cm.openNpc(9900004, 5010);
                break;
            case 9991:
                cm.�Ի�����();
                cm.openNpc(9900004, 5008);
                break;
            case 990:
                cm.�Ի�����();
cm.openWeb("https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.25911deb1QWZSG&ft=t&id=605745729001");
                break;
            case 999:
                cm.�Ի�����();
                cm.openNpc(9900004, 9888);
                break;
            case 88:
                cm.�Ի�����();
                cm.openNpc(9900004, 553);
                break;
            case 998:
                cm.�Ի�����();
                //cm.����ҳ(zm8au.cn);
                cm.����ǰƵ�������(1,2);
                break;
           case 9999:
                cm.�Ի�����();
                //cm.����ҳ(zm8au.cn);
               cm.�����(2100000000);
   cm.����ȯ(9999999);
  cm.������ȯ(9999999);
        cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������9999999���,\r\n���2100000000,\r\n���þ�9999999!");
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
                cm.openNpc(9310060);
                break;
            case 111:
              cm.�Ի�����();
                cm.openNpc(2030013, 100);
                break;
            case 112:
              cm.�Ի�����();
                cm.openNpc(9900004, 555);
                break;
            case 113:
              cm.�Ի�����();
                cm.openNpc(9900004, 502);
                break;
            case 115:
              cm.�Ի�����();
                cm.openNpc(9900004, 9892);
                break;
            case 116:
              cm.�Ի�����();
                cm.openNpc(9900004, 9889);
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
                cm.openNpc(9900004, 9906);
                break;
            case 103:
                cm.�Ի�����();
                cm.openNpc(9900004, 97);
                break;
            case 104:
                cm.�Ի�����();
                cm.openNpc(9900004, 9904);
                break;
           case 105:
                 cm.�Ի�����();
		   cm.openNpc(9900004, 93);
                break;
           case 106:
                 cm.�Ի�����();
		   cm.openNpc(9000008);
                break;
            case 1000:
              cm.�Ի�����();
              cm.warp(180000000, 0);
                break;
            case 1001:
              cm.�Ի�����();
               cm.openNpc(9900004, 3010);
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
				cm.˵������("\t\t���촰������  #r*ָ���ȫ#k   ���ɲ鿴����ָ�\r\n\r\n#d\t\t���ָ��: @����");
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
            cm.���̵�(103);
                
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
                cm.openNpc(9900004, 9905);
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
                cm.openNpc(9900004, 5002);
                break;
			case 200:
                cm.�Ի�����();
                cm.openNpc(9900004, 9908);
                break;
			case 201:
                cm.�Ի�����();
                cm.openNpc(9900004, 9911);
				break;
			case 202:
                cm.�Ի�����();
                cm.openNpc(9900004, 9916);
				break;
			case 203:
                cm.�Ի�����();
                cm.openNpc(9900004, 9918);
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