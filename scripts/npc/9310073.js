/*
 ʯͷ������
 */

 var meso = 1000000;
 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" ������ȥ�����ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = " ʲô�����ٻ�������Ҫ��С����ż��\r\n������#b#eʯͷ������#n#k����Ӯ���Ҿ͸���#v4032246#\r\n������������Ҫ����#b#e100��#n#k�#r#e";
        
			selStr += "\r\n#L0#ʯͷ#l";
			selStr += "\r\n#L1#����#l";
			selStr += "\r\n#L2#��#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.getMeso() < meso){
				cm.sendOk("����߿�����");
				cm.dispose();
			}
			var random = Math.floor(Math.random() * +3);
			if(random == 0){
				cm.sendOk("�ҳ�ʯͷ��ƽ�֣���Ӯ�˲��ܸ���С����ż��");
				cm.dispose();
			}
			if(random == 1){
				cm.sendOk("�ҳ��������ߣ���Ӯ�ˣ����������");
				cm.gainItem(4032246,2);
				cm.dispose();
			}
			if(random == 2){
			cm.sendOk("�ҳ����������������ˣ�����ҪС����ż�ˣ�");
			cm.gainMeso(-meso);
			cm.dispose();
			}
			cm.dispose();
		};
		if(selection == 1){
			if(cm.getMeso() < meso){
				cm.sendOk("����߿�����");
				cm.dispose();
			}
			var random = Math.floor(Math.random() * +3);
			if(random == 0){
				cm.sendOk("�ҳ�ʯͷ�������������ˣ�����ҪС����ż�ˣ�");
				cm.gainMeso(-meso);
				cm.dispose();
			}
			if(random == 1){
				cm.sendOk("�ҳ�������ƽ�֣���Ӯ�˲��ܸ���С����ż��");
				cm.dispose();
			}
			if(random == 2){
			cm.sendOk("�ҳ������ߣ���Ӯ�ˣ���������ɣ�");
			cm.gainItem(4032246,2);
			cm.dispose();
			}
			cm.dispose();
		};
		if(selection == 2){
			if(cm.getMeso() < meso){
				cm.sendOk("����߿�����");
				cm.dispose();
			}
			var random = Math.floor(Math.random() * +3);
			if(random == 0){
				cm.sendOk("�ҳ�ʯͷ���ߣ���Ӯ�ˣ���������ɣ�");
				cm.gainItem(4032246,2);
				cm.dispose();
			}
			if(random == 1){
				cm.sendOk("�ҳ������������������ˣ�����ҪС����ż�ˣ�");
				cm.gainMeso(-meso);
				cm.dispose();
			}
			if(random == 2){
			cm.sendOk("�ҳ�����ƽ�֣���Ӯ�˲��ܸ���С����ż��");
			cm.dispose();
			}
			cm.dispose();
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}