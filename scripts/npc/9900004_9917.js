/*
 ����ð�յ�-��ʥ�ڻ
 */
 
 var itemList =
    Array(
		Array(4001126,1000,100,"��Ҷx100"),//���롢���ʡ��������ı�
		Array(4310097,1000,1,"���յ±�x1"),
		Array(4310058,1000,1,"������x1"),
		Array(4310060,1000,3,"����ǿ����x3"),
		Array(2022466,25,1,"������ѡ����x1"),
		Array(4310038,1000,1,"PB��x1"),
		Array(4310091,1000,1,"FFN���ѱ�x1"),
		Array(4310014,1000,200,"ѩ����x200"),
		Array(2022468,1000,3,"�س���ѡ����x3"),
		Array(4032226,1000,5,"�ƽ�����x5"),
		Array(4000463,1000,20,"��������x20"),
		Array(2022613,100,1,"PB����x1"),
		Array(4031792,100,40,"Ģ����x40"),
		Array(5150038,100,1,"��������������x1"),
		Array(4430000,100,5,"������x5")
			
)


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
        var selStr = "Ҫ����ʥ���ǹ����ܲμ���ʥ�ڻӴ\r\n�ڻ��ͼ���ٻ���֣�Ȼ���ù�ֵ����Ģ���ǳ�ȡ�����ɣ�\r\n��ֵĵ��䲻�ܱ���Ӱ��~";
        
			selStr += "\r\n#L0#���������ͼ(��Ҫ#v2022256#x20)#l";
			selStr += "\r\n#L1#�ٻ����(��Ҫ#v2022256#x30)#l\r\n#L3#�ٻ�ʮ�ι��(��Ҫ#v2022256#x300)#l";;
			selStr += "\r\n#L2#��ȡ����(��Ҫ#v4031792#x20)#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if (!cm.haveItem(2022256,20)) {
            cm.sendNext("tui���������ǣ��Լ��ܹ�ȥ�ɣ�");
            cm.safeDispose();
        } else {
            cm.gainItem(2022256,-20)
            cm.warp(222010402);
            cm.dispose();
        }
		};
		if(selection == 1){
			if(cm.�жϵ�ͼ()!=222010402){
				cm.sendOk("�����ڻ��ͼ�ڲſ����ٻ����")
				cm.dispose();
				return
			}
			if(cm.haveItem(2022256,30)==false){
				cm.sendOk("Ҫ��30��#v2022256#���ն�����ֲŻ����")
				cm.dispose();
				return
			}
			var random = Math.floor(Math.random() * +3);
			cm.ȫ������("[��ʥ�ڻ] : ���["+cm.getPlayer().getName()+"]�ٻ��˹��");
			if(random==0){
				cm.gainItem(2022256,-30)
				cm.��ǰ��ͼ�ٻ�����(7130400,1,-11,153);
				cm.playerMessage(5, "�����������ˣ��棬�ƻƵĺö��ģ���������");
				cm.dispose();
				return
			}
			if(random==1){
				cm.gainItem(2022256,-30)
				cm.��ǰ��ͼ�ٻ�����(7130401,1,-11,153);
				cm.playerMessage(5, "�ۣ��ز�ɫ�Ĺ�֣������ܵķ�˿��СѬ��Ҫ���������ǡ�");
				cm.dispose();
				return
			}
			if(random==2){
				cm.gainItem(2022256,-30)
				cm.��ǰ��ͼ�ٻ�����(7130402,1,-11,153);
				cm.playerMessage(5, "ԭ��ɫ���������������ԭ���");
				cm.dispose();
				return
			}
		};
		if(selection == 2){
			if(cm.haveItem(4031792,20)==false){
				cm.sendOk("tui���������ǻ���齱��")
				cm.dispose();
				return
			}
			var sum = 0;
			for (var i = 0; i <itemList.length; i++){
				sum += itemList[i][1]; 
			}
			var chance = Math.floor(Math.random() * +sum);
			for (var i = 0; i <itemList.length; i++){
				chance -= itemList[i][1];
				if(chance <= 0){	
					var finalchance = i;
					break;				
				}
			}
			cm.gainItem(itemList[finalchance][0],itemList[finalchance][2])
			cm.gainItem(4031792,-20)
			cm.ȫ����ɫ����("[��ʥ�ڻ] : ["+cm.getPlayer().getName()+"]��ȡ��ʥ�ڻ�����������["+itemList[finalchance][3]+"]")
			return
			
		};
		if(selection == 3){
			if(cm.�жϵ�ͼ()!=222010402){
				cm.sendOk("�����ڻ��ͼ�ڲſ����ٻ����")
				cm.dispose();
				return
			}
			if(cm.haveItem(2022256,300)==false){
				cm.sendOk("Ҫ��30��#v2022256#���ն�����ֲŻ����")
				cm.dispose();
				return
			}
			cm.ȫ������("[��ʥ�ڻ] : ���["+cm.getPlayer().getName()+"]һ���ٻ���ʮֻ���");
			cm.gainItem(2022256,-300)
			cm.playerMessage(5, "��ô���֣��㶥��ס�");
			for(var i =1;i<10;i++){
				var random = Math.floor(Math.random() * +3);
				if(random==0){
					cm.��ǰ��ͼ�ٻ�����(7130400,1,-11,153);	
				}
				if(random==1){
					cm.��ǰ��ͼ�ٻ�����(7130401,1,-11,153);
				}
				if(random==2){
					cm.��ǰ��ͼ�ٻ�����(7130402,1,-11,153);
				}
			}
			cm.dispose();
			return
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}