importPackage(net.sf.odinms.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var ���� = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
//var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ������ͷ = "#fUI/Basic/BtHide2/mouseOver/0#";
var ���ͷ = "#fUI/Basic/icon/arrow#"; // �� ���ͷ
var ���� = "#fUI/Basic/BtClaim/normal/0#";
var ��� = "#fUI/UIWindow/QuestIcon/7/0#";
var ��ȯ = "#fUI/CashShop/CashItem/0#";
var �Ӻ� = "#fUI/Basic/BtMax/normal/0#";
var �ȵ��Ƽ� = "#fUI/CashShop/CSChar/BtCoordination/mouseOver/0#";
var ���� = "#fUI/CashShop/CSDiscount/bonus#";
var ��Ʒ���ۿ� = "#fUI/CashShop/GuideWords/0#";
var ���ڲ��ǹ���ʱ�� = "#fUI/CashShop/GuideWords/1#";
var ��� = "#fUI/Basic/CheckBox/0#";   //�п�� �ޡ�
var ���1 = "#fUI/Basic/CheckBox/1#";   //�п�� �С�
var ���� = "#fEffect/CharacterEff/1022223/4/0#"; // ����ǳɫ�ۺ찮��
var ����1 = "#fEffect/CharacterEff/1003271/0/0#"; // ʵ��ۺ찮��
var ����2 = "#fEffect/CharacterEff/1022223/3/0#"; // ������ɫ�ۺ찮��
var ����3 = "#fEffect/CharacterEff/1042176/0/2#"; // ʵ����찮�ġ����͡�
var ����4 = "#fEffect/CharacterEff/1042176/1/1#"; // ʵ����찮�ġ�С�͡�
var ����5 = "#fEffect/CharacterEff/1050312/0/0#"; // ����*7
var ����6 = "#fEffect/CharacterEff/1050312/1/0#"; // ���� ���� ���
var ����6 = "#fEffect/CharacterEff/1051296/0/4#"; // ��ɫ����
var ���� = "#fEffect/CharacterEff/1051366/1/0#"; // ��ɫ����
var ��ݮ = "#fUI/GuildMark/Mark/Plant/00003000/1#"; // ��ɫ��ݮ
var ��ݮ1 = "#fUI/GuildMark/Mark/Plant/00003000/10#"; // ����ɫ��ݮ
var ��ݮ2 = "#fUI/GuildMark/Mark/Plant/00003000/11#"; // ��ɫ��ݮ
var ��ݮ3 = "#fUI/GuildMark/Mark/Plant/00003000/15#"; // ��ɫ��ݮ
var ��ݮ4 = "#fUI/GuildMark/Mark/Plant/00003000/3#"; // ��ɫ��ݮ
var ��ݮ5 = "#fUI/GuildMark/Mark/Plant/00003000/8#"; // ��ɫ��ݮ
var �ķ�ӡ = "#fUI/GuildMark/Mark/Pattern/00004014/11#"; // ��ɫ�ķ�ӡ
var �ķ�ӡ1 = "#fUI/GuildMark/Mark/Pattern/00004014/16#"; // ��ɫ�ķ�ӡ
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var а��С��1 = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� = "#fEffect/CharacterEff/1003249/0/0#";  //ǳ��ɫ���ַ���
var ����1 = "#fEffect/CharacterEff/1003249/1/0#"; //����ɫ���ַ���
var ����2 = "#fEffect/CharacterEff/1032063/0/0#";  //���ַ���*5
var ����11 = "#fEffect/CharacterEff/1112900/2/0#";  //ǳ��ɫ�����ַ���
var �� = "#fEffect/CharacterEff/1050334/0/1#";  //��ɫС��
var ��1 = "#fEffect/CharacterEff/1050334/0/3#";  //��ɫ��
var ��2 = "#fEffect/CharacterEff/1050334/1/2#";  //����ɫ��
var ���� = "#fEffect/CharacterEff/1051294/1/0#"; //��ת����1
var ����1 = "#fEffect/CharacterEff/1051294/1/1#"; //��ת����2
var ����2 = "#fEffect/CharacterEff/1051294/1/2#"; //��ת����3
var ����3 = "#fEffect/CharacterEff/1051294/1/3#"; //��ת����4
var ����4 = "#fEffect/CharacterEff/1051294/1/4#"; //��ת����5
var ����5 = "#fEffect/CharacterEff/1051294/1/5#"; //��ת����6
var ���� = "#fEffect/CharacterEff/1114000/2/0#"; //�������

var ����ֵ = "#fUI/UIWindow/QuestIcon/8/0#";
var ������ = "#fUI/UIWindow/QuestIcon/6/0#";
var ���ʻ�� = "#fUI/UIWindow/Quest/prob#";
var ѡ���� = "#fUI/UIWindow/Quest/select#";
var ���� = "#fUI/UIWindow/Quest/reward#";
var ˫��ͷ = "#fUI/UIWindow/Quest/icon8/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";


	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n";
		textz += "#r#L0#" + ��ݮ + "  #e�������#e #b(#d�����ֻ����ȡһ�Σ���֧��С��#b)#n#l\r\n\r\n";

		textz += "#r#L1#" + ��ݮ + "  #e�������� #b(#d�ٶ�#r+200#d ��Ծ#r+200#b)#l#n\r\n\r\n";


		textz += "    \r\n";


                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {
                		cm.dispose();
              cm.openNpc(9900004, 5001);


}else if (selection == 1) {
		cm.dispose();
	              //  cm.openNpc(9900004, 12);
cm.������װ��(1142085, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 200, 200, 50);
cm.sendOk("#r�ɹ���ȡ����ѫ�£�ÿ�������ȡ ��");
	    

}else if (selection == 2) {
	if (cm.haveItem(1432010,1)) {
		cm.gainItem(1432010,-1);
		cm.����ǰƵ�������(10000,1);
               // cm.gainExp( + 100000);
		cm.sendOk("#r#e�������,��ǰƵ����������˻��#b1W#r���");
cm.ȫ����ɫ����("[����������] : ��� "+cm.getPlayer().getName()+" ����ǰƵ�������˷�����1�������ƣ�����")
 
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��#v1432010# #b#z1432010#");
		cm.dispose();

}else if (selection == 3){
	if (cm.haveItem(1002390,1)) {
		cm.gainItem(1002390,-1);
		cm.����ǰƵ�������(10000,1);
               // cm.gainExp( + 100000);
		cm.sendOk("#r#e�������,��ǰƵ����������˻��#b1W#r���");
cm.ȫ����ɫ����("[����������] : ��� "+cm.getPlayer().getName()+" ����ǰƵ�������˷�����1�������ƣ�����")
 
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��#v1432010# #b#z1432010#");
		cm.dispose();

}else if (selection == 4){
	if (cm.haveItem(4000127,100) && cm.getBossLog('PlayQuest5') < 1) {
		cm.gainItem(4000127,-100);
		cm.setBossLog('PlayQuest5');
		cm.gainItem(4000313,5);
                cm.gainExp( + 100000);
		cm.sendOk("�������,���Ⱥ��΢Ц�������͵�\r\n10����!");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 5){
	if (cm.haveItem(4000106,100) && cm.getBossLog('PlayQuest6') < 1) {
		cm.gainItem(4000106,-100);
		cm.setBossLog('PlayQuest6');
		cm.gainItem(4000313,5);
		cm.gainExp( + 100000);
		cm.sendOk("�������,���Ⱥ��΢Ц�������͵�\r\n10����!");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 6){
	if (cm.haveItem(4000052,100) && cm.getBossLog('PlayQuest7') < 1) {
		cm.gainItem(4000052,-100);
		cm.setBossLog('PlayQuest7');
		cm.gainItem(4000313,5);
		cm.gainExp( + 100000);
		cm.sendOk("�������,���Ⱥ��΢Ц�������͵�\r\n10����!");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 7){
	if (cm.haveItem(4000190,100) && cm.getBossLog('PlayQuest8') < 1) {
		cm.gainItem(4000190,-100);
		cm.setBossLog('PlayQuest8');
		cm.gainItem(4000313,5);
		cm.gainExp( + 100000);
		cm.sendOk("�������,���Ⱥ��΢Ц�������͵�\r\n10����");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 8){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest9') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest9');
		cm.gainNX(100);
		cm.sendOk("�������,������½���:\r\n100���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 9){
	if (cm.haveItem(4001084,1) && cm.getBossLog('PlayQuest10') < 1) {
		cm.gainItem(4001084,-1);
		cm.setBossLog('PlayQuest10');
		cm.gainNX(100);
		cm.sendOk("�������,������½���:\r\n100���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 10){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest11') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest11');
		cm.gainNX(200);
		cm.sendOk("�������,������½���:\r\n2000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();



}else if (selection == 11){
	if (cm.haveItem(4001126,1000) && cm.getBossLog('PlayQuest14') < 1) {
		cm.gainItem(4001126,-1000);
		cm.setBossLog('PlayQuest14');
		cm.gainNX(100);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();


}
}
}
}
