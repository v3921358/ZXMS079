/*
 ����ð�յ�-�¿�
 */

var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var buy = 0

 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" ���������װ���ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		buy = cm.getPlayer().getOneTimeLog("�����") * 10
        var selStr = ""
			selStr += "�¿����ڻ���ߣ�ֻ��ͨ��������õ������ҹ���\r\n�����ڻ�������ѡ�"+buy+"��\r\n"
			selStr += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+""
			if(cm.haveItem(3700100,1)){
				selStr += "\r\n\r\n   "+����+"�����¿�#v3700100#(��ӵ��)";
			}else{
				selStr += "\r\n\r\n#L1#"+����+"�����¿�#v3700100##l";
			}
			selStr += "#L11#"+��ɫ��ͷ+"�����¿�˵��#l";
			if(cm.haveItem(3700101,1)){
				selStr += "\r\n\r\n   "+����+"��Ȩ�¿�#v3700101#(��ӵ��)";
			}else{
				selStr += "\r\n\r\n#L2#"+����+"��Ȩ�¿�#v3700101##l";
			}
			selStr += "#L12#"+��ɫ��ͷ+"��Ȩ�¿�˵��#l";
			if(cm.getPlayer().getOneTimeLog("��ο�") > 0){
				selStr += "\r\n\r\n#L4#"+����+"��ο�(��ȡÿ�ո���)#l";
			}else{
				selStr += "\r\n\r\n#L3#"+����+"��ο�(����)#l";
			}
			selStr += "#L13#"+��ɫ��ͷ+"��ο�˵��#l";
			
			selStr += "\r\n\r\n\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 1){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy0 = buy +50
				cm.sendOk("������Ȳ���Ŷ\r\n��Ҫ��"+buy0+"#v4310003#�ſ��Լ�������\r\n���ε��������ǲ������");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
			cm.����Ʒ(3700100, 1,31)
			cm.ȫ����ɫ����("[��ֵ�¿�] : ["+cm.getPlayer().getName()+"]������[�����¿�]��")
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.dispose();
			return;	
			}else{
				cm.sendOk("��Ҫ#v4430000#x50�ſ��Թ����");
			}
			
		};
		if(selection == 2){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy1 = buy +50
				cm.sendOk("������Ȳ���Ŷ\r\n��Ҫ��"+buy1+"#v4310003#�ſ��Լ�������\r\n���ε��������ǲ������");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
            cm.����Ʒ(3700101, 1,31)
			cm.ȫ����ɫ����("[��ֵ�¿�] : ["+cm.getPlayer().getName()+"]������[��Ȩ�¿�]��")
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.dispose();
            return;	
			}else{
				cm.sendOk("��Ҫ#v4430000#x50�ſ��Թ����");
			}
		};
		if(selection == 3){
			if(cm.haveItem(4310003,100+buy)==false){
				var buy2 = buy +50
				cm.sendOk("������Ȳ���Ŷ\r\n��Ҫ��"+buy2+"#v4310003#�ſ��Լ�������\r\n���ε��������ǲ������");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,100)){
			cm.gainItem(4430000,-100)
            cm.getPlayer().setOneTimeLog("��ο�");
			cm.getPlayer().dropMessage(5,"���ѿ�����ο���Ȩ�������Զ����ÿ�����һ��������������¿�ʳ�÷�ζ����");
			cm.ȫ����ɫ����("[��ֵ�¿�] : ["+cm.getPlayer().getName()+"]������[��ο�(����)]��Ȩ��")
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.dispose();
            return;	
			}else{
				cm.sendOk("��Ҫ#v4430000#x100�ſ��Թ����");
			}
			cm.dispose();
            return;
		};
		if(selection == 4){
			if(cm.getBossLog("ÿ�ս�θ���") >= 1){
				cm.sendOk("ÿ��ֻ����ȡһ��");
				cm.dispose();
				return;	
			}
			cm.setBossLog("ÿ�ս�θ���");
			cm.gainItem(2022613,1)
			cm.gainItem(4000463,100)
			cm.gainItem(4310060,5)
			cm.gainItem(4032226,10)
			cm.ȫ����ɫ����("[��θ���] : ["+cm.getPlayer().getName()+"]��ȡ��ÿ�ս�ο�������")
			cm.dispose();
		};
		if(selection == 11){
			cm.sendOk("�����¿�#v3700100#����31�죬�ۼ�#v4430000#x50\r\nռ��һ��������\r\nÿ��boss��ý�������50%(1����Ϊ���1~2����5����Ϊ8��)\r\nÿ��boss���ս�������100%\r\n���һ������������100%");
			cm.dispose();
            return;
		};
		if(selection == 12){
			cm.sendOk("��Ȩ�¿�#v3700101#����31�죬�ۼ�#v4430000#x50\r\nռ��һ��������\r\nÿ��boss����ɴ���+1\r\n����ǿ����������+5\r\n����������������+10\r\n���޽��Ż�100��#v4000463#\r\n�𻨽�ָ����ֵ+1(��ͻ������)");
			cm.dispose();
            return;
		};
		if(selection == 13){
			cm.sendOk("��ο����ô��ڣ��ۼ�#v4430000#x100\r\n��ռ�ñ���\r\n��ֱ����ȡÿ��boss���ս���\r\n��ֱ����ȡ���һ��������\r\n��ֱ����ȡ���߽���(����)\r\nÿ����ȡ#v2022613#x1#v4000463#x100#v4310060#x5#v4032226#x10");
			cm.dispose();
            return;
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}