importPackage(net.sf.odinms.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


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

	    var textz = "\r\n#e#b�㽫��Ϊ��ҵľ��������ռ�������Ʒ���Ը���ǰƵ�������ͬ�ĵ��(#rû����ǵ�ǰƵ���������һ����#b)#n\r\n#d#e��ҿ��Թ�ͬ��������ռ�����,����õ������#n\r\n";

		textz += "#d#L0#�ռ� #v4000017# #b#z4000017##r 100 #d�� ������ǰƵ�����#r20W#d���#l\r\n\r\n";

		textz += "#d#L1#�ռ� #v4002000# #b#z4002000##r 50 #d�� ������ǰƵ�����#r20W#d���#l\r\n\r\n";
		textz += "#d#L2#�ռ� #v1432010# #b#z1432010##r 1 #d�� ������ǰƵ�����#r1W#d���#l\r\n\r\n";
		textz += "#d#L3#�ռ� #v1002390# #b#z1002390##r 1 #d�� ������ǰƵ�����#r1W#d���#l\r\n\r\n";

		textz += "    \r\n";


                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {
        if (cm.haveItem(4000017,100)) {
		cm.gainItem(4000017,-100);
		cm.����ǰƵ�������(200000,1);
                //cm.gainExp( + 100000);
		cm.sendOk("#r#e�������,��ǰƵ����������˻��#b20W#r���");
cm.ȫ����ɫ����("[����������] : ��� "+cm.getPlayer().getName()+" ����ǰƵ�������˷�����20�������ƣ�����")
 
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��#v4002000# #b#z4002000#");
		cm.dispose();
	    


}else if (selection == 1) {
	if (cm.haveItem(4002000,50)) {
		cm.gainItem(4002000,-50);
		cm.����ǰƵ�������(200000,1);
               // cm.gainExp( + 100000);
		cm.sendOk("#r#e�������,��ǰƵ����������˻��#b20W#r���");
cm.ȫ����ɫ����("[����������] : ��� "+cm.getPlayer().getName()+" ����ǰƵ�������˷�����20�������ƣ�����")
 
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��#v4002000# #b#z4002000#");
		cm.dispose();
	    

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
