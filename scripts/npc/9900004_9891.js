/*
����ð�յ�-����������ϳ�
 */
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

 function start() {
    status = 0;
    action(1, 0, 0);
}
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var cost = 3; //�ϳ���Ҫ����
var cost2 = 3; //�齱��Ҫ��������
var itemlist = [1113072,1132243,1122264,1032220];

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" ������ϳ��ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = " ��ã����Ǳ��������ϳ�NPC\r\n������������������������������������������������������\r\n#b#e"+cost2+"#n#k��#v4310098#���Գ�ȡһ�εͼ�����\r\n������#b#eע��װ���ո�#n#k���̵�����";
			selStr += "\r\n#L4##b#e��ȡ����#l";
			selStr += "\r\n#L5##r#e�����飡#n#k#l";
			selStr += "\r\n#L19##r#eʮ���飡����#n#k#l";
			selStr += "\r\n\r\n������������������������������������������������������"
			selStr += "\r\n�ϳ��ǡ�#b#e"+cost+"��1#n#k��"
			selStr += "\r\n#L0##b#e"+��ɫ�ǵ�+"�м�#v1113073##l";
			selStr += "#L1#"+��ɫ�ǵ�+"�߼�#v1113074##l";
			selStr += "#L2#"+��ɫ�ǵ�+"���#v1113075##l#n#k";
			selStr += "\r\n#L3##r#e"+��ɫ�ǵ�+"һ���Զ��ϳ�#v1113073##v1113074##v1113075##l#n#k";
			selStr += "\r\n\r\n������������������������������������������������������"
			selStr += "\r\n#L6##b#e"+��ɫ�ǵ�+"�м�#v1132244##l";
			selStr += "#L7#"+��ɫ�ǵ�+"�߼�#v1132245##l";
			selStr += "#L8#"+��ɫ�ǵ�+"���#v1132246##l#n#k";
			selStr += "\r\n#L9##r#e"+��ɫ�ǵ�+"һ���Զ��ϳ�#v1132244##v1132245##v1132246##l#n#k";
			selStr += "\r\n\r\n������������������������������������������������������"
			selStr += "\r\n#L10##b#e"+��ɫ�ǵ�+"�м�#v1122265##l";
			selStr += "#L11#"+��ɫ�ǵ�+"�߼�#v1122266##l";
			selStr += "#L12#"+��ɫ�ǵ�+"���#v1122267##l#n#k";
			selStr += "\r\n#L13##r#e"+��ɫ�ǵ�+"һ���Զ��ϳ�#v1122265##v1122266##v1122267##l#n#k";
			selStr += "\r\n\r\n������������������������������������������������������"
			selStr += "\r\n#L14##b#e"+��ɫ�ǵ�+"�м�#v1032221##l";
			selStr += "#L15#"+��ɫ�ǵ�+"�߼�#v1032222##l";
			selStr += "#L16#"+��ɫ�ǵ�+"���#v1032223##l#n#k";
			selStr += "\r\n#L17##r#e"+��ɫ�ǵ�+"һ���Զ��ϳ�#v1032221##v1032222##v1032223##l#n#k";
			selStr += "\r\n\r\n������������������������������������������������������"
			selStr += "\r\n#L18##r#e"+��ɫ�ǵ�+"ȫ���Զ��ϳ�#v1113075##v1132246##v1122267##v1032223##l#n#k";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.haveItem(1113072,cost)){
				cm.gainItem(1113072, 0-cost);
				cm.������װ��(1113073,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.dispose();
				return;
			};
			cm.sendOk("��û�н�ָ������ƭ��");
			cm.dispose();
			return;
		};
		if(selection == 1){
			if(cm.haveItem(1113073,cost)){
				cm.gainItem(1113073,0-cost);
				cm.������װ��(1113074,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�50��ά[�߼����ս�ָ]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û�н�ָ������ƭ��");
			cm.dispose();
			return;	
		};
		if(selection == 2){
			if(cm.haveItem(1113074,cost)){
				cm.gainItem(1113074,0-cost);
				cm.������װ��(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�100��ά[��߼����ս�ָ]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û�н�ָ������ƭ��");
			cm.dispose();
			return;		
		};
		if(selection == 3){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1113072,cost)){
					cm.gainItem(1113072,0-cost);
					cm.������װ��(1113073,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1113073,cost)){
					cm.gainItem(1113073,0-cost);
					cm.������װ��(1113074,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1113074,cost)){
					cm.gainItem(1113074,0-cost);
					cm.������װ��(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.ȫ����ɫ����("[���պϳ�] : ��� "+cm.getPlayer().getName()+" һ�κϳ���"+a+"���м�"+b+"���߼�"+c+"����߼����ս�ָ���ֲ���˹")
				}
			cm.sendOk("�Զ��ϳ����");
			cm.dispose();
			return;	
		};
		if(selection == 4){
			if(cm.haveItem(4310098,cost2)){
				cm.gainItem(4310098,0-cost2)
				var random = Math.floor(Math.random() * +4);
				cm.gainItem(itemlist[random],1)
				cm.sendOk("��ȡ���");
				cm.dispose();
				return;
			}
			cm.sendOk("���ϲ���");
			cm.dispose();
			return;
		};
		if(selection == 5){
			for(var i =0;i<5;i++){
				if(cm.haveItem(4310098,cost2)){
				cm.gainItem(4310098,0-cost2)
				var random = Math.floor(Math.random() * +4);
				cm.gainItem(itemlist[random],1)
				}else{
					cm.sendOk("���ϲ��㣬��ȡ�ж�");
					cm.dispose();
					return;
				}
			}
			random = Math.floor(Math.random() * +3);
			random += 1
			cm.gainItem(4310098,random)
			cm.sendOk("��ȡ��ϣ�����"+random+"��#v4310098#(���1~3)");
			cm.dispose();
			return;
			
		};
		if(selection == 6){
			if(cm.haveItem(1132243,cost)){
				cm.gainItem(1132243, 0-cost);
				cm.������װ��(1132244,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.dispose();
				return;
			};
			cm.sendOk("��û������������ƭ��");
			cm.dispose();
			return;
		};
		if(selection == 7){
			if(cm.haveItem(1132244,cost)){
				cm.gainItem(1132244,0-cost);
				cm.������װ��(1132245,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�50��ά[�߼���������]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û������������ƭ��");
			cm.dispose();
			return;	
		};
		if(selection == 8){
			if(cm.haveItem(1132245,cost)){
				cm.gainItem(1132245,0-cost);
				cm.������װ��(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�100��ά[��߼���������]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û������������ƭ��");
			cm.dispose();
			return;		
		};
		if(selection == 9){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1132243,cost)){
					cm.gainItem(1132243,0-cost);
					cm.������װ��(1132244,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1132244,cost)){
					cm.gainItem(1132244,0-cost);
					cm.������װ��(1132245,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1132245,cost)){
					cm.gainItem(1132245,0-cost);
					cm.������װ��(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.ȫ����ɫ����("[���պϳ�] : ��� "+cm.getPlayer().getName()+" һ�κϳ���"+a+"���м�"+b+"���߼�"+c+"����߼������������ֲ���˹")
				}
			cm.sendOk("�Զ��ϳ����");
			cm.dispose();
			return;	
		};
		if(selection == 10){
			if(cm.haveItem(1122264,cost)){
				cm.gainItem(1122264, 0-cost);
				cm.������װ��(1122265,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.dispose();
				return;
			};
			cm.sendOk("��û������������ƭ��");
			cm.dispose();
			return;
		};
		if(selection == 11){
			if(cm.haveItem(1122265,cost)){
				cm.gainItem(1122265,0-cost);
				cm.������װ��(1122266,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�50��ά[�߼���������]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û������������ƭ��");
			cm.dispose();
			return;	
		};
		if(selection == 12){
			if(cm.haveItem(1122266,cost)){
				cm.gainItem(1122266,0-cost);
				cm.������װ��(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�100��ά[��߼���������]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û������������ƭ��");
			cm.dispose();
			return;		
		};
		if(selection == 13){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1122264,cost)){
					cm.gainItem(1122264,0-cost);
					cm.������װ��(1122265,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1122265,cost)){
					cm.gainItem(1122265,0-cost);
					cm.������װ��(1122266,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1122266,cost)){
					cm.gainItem(1122266,0-cost);
					cm.������װ��(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.ȫ����ɫ����("[���պϳ�] : ��� "+cm.getPlayer().getName()+" һ�κϳ���"+a+"���м�"+b+"���߼�"+c+"����߼������������ֲ���˹")
				}
			cm.sendOk("�Զ��ϳ����");
			cm.dispose();
			return;	
		};
		if(selection == 14){
			if(cm.haveItem(1032220,cost)){
				cm.gainItem(1032220, 0-cost);
				cm.������װ��(1032221,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.dispose();
				return;
			};
			cm.sendOk("��û�ж���������ƭ��");
			cm.dispose();
			return;
		};
		if(selection == 15){
			if(cm.haveItem(1032221,cost)){
				cm.gainItem(1032221,0-cost);
				cm.������װ��(1032222,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�50��ά[�߼����ն���]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û�ж���������ƭ��");
			cm.dispose();
			return;	
		};
		if(selection == 16){
			if(cm.haveItem(1032222,cost)){
				cm.gainItem(1032222,0-cost);
				cm.������װ��(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
				cm.sendOk("�ϳɳɹ�");
				cm.ȫ����ɫ����("[���պϳ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ϳ�100��ά[��߼����ն���]�ɹ�������")
				cm.dispose();
				return;
			};
			cm.sendOk("��û�ж���������ƭ��");
			cm.dispose();
			return;		
		};
		if(selection == 17){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1032220,cost)){
					cm.gainItem(1032220,0-cost);
					cm.������װ��(1032221,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
					a=a+1;
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1032221,cost)){
					cm.gainItem(1032221,0-cost);
					cm.������װ��(1032222,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
					b=b+1;
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1032222,cost)){
					cm.gainItem(1032222,0-cost);
					cm.������װ��(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c=c+1;
				}else{
					break;
				};
			}
			if( b>0 || c>0){
				cm.ȫ����ɫ����("[���պϳ�] : ��� "+cm.getPlayer().getName()+" һ�κϳ���"+a+"���м�"+b+"���߼�"+c+"����߼����ն������ֲ���˹")
				}
			cm.sendOk("�Զ��ϳ����");
			cm.dispose();
			return;	
		};
		if(selection == 18){
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1113072,cost)){
					cm.gainItem(1113072,0-cost);
					cm.������װ��(1113073,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1113073,cost)){
					cm.gainItem(1113073,0-cost);
					cm.������װ��(1113074,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1113074,cost)){
					cm.gainItem(1113074,0-cost);
					cm.������װ��(1113075,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					a += 1;
				}else{
					break;
				};
			}
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1132243,cost)){
					cm.gainItem(1132243,0-cost);
					cm.������װ��(1132244,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1132244,cost)){
					cm.gainItem(1132244,0-cost);
					cm.������װ��(1132245,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1132245,cost)){
					cm.gainItem(1132245,0-cost);
					cm.������װ��(1132246,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					b += 1;
				}else{
					break;
				};
			}
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1122264,cost)){
					cm.gainItem(1122264,0-cost);
					cm.������װ��(1122265,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1122265,cost)){
					cm.gainItem(1122265,0-cost);
					cm.������װ��(1122266,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1122266,cost)){
					cm.gainItem(1122266,0-cost);
					cm.������װ��(1122267,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					c += 1;
				}else{
					break;
				};
			}
			for(var i = 0;i < 10; i++){
				if(cm.haveItem(1032220,cost)){
					cm.gainItem(1032220,0-cost);
					cm.������װ��(1032221,0,0,20,20,20,20,200,200,20,20,100,100,50,50,20,20,0);
				}else{
					break;
				};
			}
			for(var ii = 0;ii < 10; ii++){
				if(cm.haveItem(1032221,cost)){
					cm.gainItem(1032221,0-cost);
					cm.������װ��(1032222,0,0,50,50,50,50,500,500,50,50,100,100,50,50,20,20,0);
				}else{
					break;
				};	
			}
			for(var iii = 0;iii < 10; iii++){
				if(cm.haveItem(1032222,cost)){
					cm.gainItem(1032222,0-cost);
					cm.������װ��(1032223,0,0,100,100,100,100,1500,1500,100,100,100,100,50,50,20,20,0);
					d += 1;
				}else{
					break;
				};
			}
			if( a>0 || b>0 || c>0 || d>0){
				var string = "[���պϳ�] : ��� "+cm.getPlayer().getName()+" һ���ϳ���"
				if(a>0){
					string += ""+a+"����߽�ָ"
				}
				if(b>0){
					string += ""+b+"���������"
				}
				if(c>0){
					string += ""+c+"���������"
				}
				if(d>0){
					string += ""+d+"����߶���"
				}
				string += "�����ǿֲ���˹"
				cm.ȫ����ɫ����(string)
				}
			cm.sendOk("�Զ��ϳ����");
			cm.dispose();
			return;	
		};
		if(selection == 19){
			for(var i =0;i<10;i++){
				if(cm.haveItem(4310098,cost2)){
				cm.gainItem(4310098,0-cost2)
				var random = Math.floor(Math.random() * +4);
				cm.gainItem(itemlist[random],1)
				}else{
					cm.sendOk("���ϲ��㣬��ȡ�ж�");
					cm.dispose();
					return;
				}
			}
			var random = Math.floor(Math.random() * +4);
			cm.gainItem(itemlist[random],1)
			cm.sendOk("��ȡ��ϣ���������һ��");
			cm.dispose();
			return;
			
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}