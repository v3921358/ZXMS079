/*
 ����ð�յ�-������Խ𻨽�ָ
 */
var luckmax = 10;//���˵�������
var luckcost = 100;//ÿ����1�����˵�����Ҫ�����˱�
var luckpoint = 0; //���˵���
var superlucky = 10;//�������˱�ʱ�������ӵ�����
var superluckycost = 200;//��������������Ҫ���ѵ����˱�����
var luckgive = 5;//ÿ���������͵����˱�����
var costitem = 4310014;//ǿ�����ĵı�
var luckitem = 4310027;//���˱�
var str = 0;
var dex = 0;
var luk = 0;
var int1 = 0;	
var ad = 0;
var md = 0;
var random = 0;
var randomtime = 1;
var superlucky1 = 0;

 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" ������������ָ�ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		for(var i = 0; i < luckmax + 1;i++){
			if(cm.haveItem(luckitem,luckcost * i)){
				luckpoint = i
			}
		}
		if(cm.haveItem(3700101,1)){
			luckpoint++
		}
		randomtime = luckpoint + 1;
        var selStr = "��Ҫ�����𻨽�ָ��\r\n�������ֵ��#b#e��"+luckpoint+"��#n#k��\r\nÿ�����Զ��������#b#e"+randomtime+"#n#k���Σ�Ȼ��ȡ���ֵ�#r#e";
			if(cm.haveItem(3700101,1)){
				selStr += "\r\n��Ȩ�¿�����Ч������ֵ+1";
			}
        
			selStr += "\r\n#L0##b#e��ָ����˵��#n#k#l";
			selStr += "\r\n#L1##b#e�����𻨽�ָ#n#k#l";
			selStr += "\r\n#L2##b#eǿ������#r#e�����㡿#n#k#l";
			selStr += "\r\n#L3##b#eȥ����������������Ǯ������ֱ��������#n#k#l";
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			cm.sendOk("�𻨽�ָ���1-100��ά����ÿ�����Ե��������\r\n�����𻨽�ָ��Ҫ#b#e100#n#k��#v"+costitem+"#\r\n#v"+costitem+"#������#b#e������������#n#k��á�\r\nÿ�������𻨽�ָ���Ի��#b#e"+luckgive+"#n#kö#v"+luckitem+"#(����˫��)��\r\nÿ#b#e"+luckcost+"#n#kö#v"+luckitem+"#��������#b#e1#n#k������ֵ\r\n����ֵ����Ϊ��#b#e"+luckmax+"#n#k��������ǰ�ǡ�#b#e"+luckpoint+"#n#k��\r\n��ǿ�ˡ���������#b#e"+superluckycost+"#n#k#v"+luckitem+"#������׷��#b#e"+superlucky+"#n#k(���ܳ�����)");
			cm.dispose();
		};
		if(selection == 1){
			if(cm.haveItem(costitem,100)){
				var string = "�����ɹ������������"+randomtime+"\r\n���������"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(str < random){
						str = random;
					};
				};
				string += "\r\n������ݣ�"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(dex < random){
						dex = random;
					};
				};
				string += "\r\n���������"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(luk < random){
						luk = random;
					};
				};
				string += "\r\n���������"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(int1 < random){
						int1 = random;
					};
				};
				string += "\r\n����﹥��"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(ad < random){
						ad = random;
					};
				};
				string += "\r\n���ħ����"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(md < random){
						md = random;
					};
				};
				var sum = str + dex + luk + int1 +ad + md;
				string += "\r\n�������ԣ�����"+str+"������"+dex+"������"+luk+"������"+int1+"���﹥"+ad+"��ħ��"+md+"��������"+sum+""
				cm.gainItem(costitem, -100);
				cm.gainItem(luckitem, luckgive);
				cm.������װ��(1113226,0,0,str,dex,luk,int1,0,0,ad,md,0,0,0,0,0,0,0);
				if(sum < 250){
					cm.gainItem(luckitem, luckgive)
					cm.ȫ����ɫ����("[�𻨽�ָ] : ��TM���Ц����������["+cm.getPlayer().getName()+"]������������"+str+"������"+dex+"������"+luk+"������"+int1+"���﹥"+ad+"��ħ��"+md+"�Ľ𻨽�ָ��������"+sum+"��������250")
					cm.getPlayer().setOneTimeLog("������ɾ�");
					cm.getPlayer().dropMessage(5,"������ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("������ɾ�")+"");
				}
				if(sum > 450 && sum != 600){
					cm.ȫ����ɫ����("[�𻨽�ָ] : ["+cm.getPlayer().getName()+"]������������"+str+"������"+dex+"������"+luk+"������"+int1+"���﹥"+ad+"��ħ��"+md+"�Ľ𻨽�ָ�������Ըߴ�"+sum+"/600")
				}
				if(sum == 600){
					cm.ȫ����ɫ����("[�𻨽�ָ] : �ѣ�����ŷ�ʸ��壡����["+cm.getPlayer().getName()+"]������������ȫ���Ľ𻨽�ָ����ֱը�ѣ�������ŷ�ʲ���Ҫ��ǿ�ˡ�")
					cm.getPlayer().setOneTimeLog("��������ɾ�");
					cm.getPlayer().dropMessage(5,"��������ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("��������ɾ�")+"");
				}
				cm.sendOk(string);
				cm.dispose();
				return;
			}
			cm.sendOk("#v"+costitem+"#���㣬�޷�����");
            cm.dispose();
            return;
		};
		if(selection == 2){
			if(cm.haveItem(costitem,100)){
				if(cm.haveItem(luckitem,superluckycost)){
				superlucky1 = superlucky
				cm.gainItem(luckitem, 0 - superluckycost);
				}else{
					cm.sendOk("��Ҫ"+superluckycost+"��#v"+luckitem+"#��#v"+luckitem+"#���㣬�޷�������ǿ�ˡ�");
					cm.dispose();
					return;
				}
				var string = "�����ɹ������������"+randomtime+"\r\n���������"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(str < random){
						str = random;
					};
				};
				str = str +superlucky1;
				if(str > 100){
					str = 100;
				}
				string += "\r\n������ݣ�"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(dex < random){
						dex = random;
					};
				};
				dex = dex +superlucky1;
				if(dex > 100){
					dex = 100;
				}
				string += "\r\n���������"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(luk < random){
						luk = random;
					};
				};
				luk = luk +superlucky1;
				if(luk > 100){
					luk = 100;
				}
				string += "\r\n���������"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(int1 < random){
						int1 = random;
					};
				};
				int1 = int1 +superlucky1;
				if(int1 > 100){
					int1 = 100;
				}
				string += "\r\n����﹥��"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(ad < random){
						ad = random;
					};
				};
				ad = ad +superlucky1;
				if(ad > 100){
					ad = 100;
				}
				string += "\r\n���ħ����"
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"��";
					if(md < random){
						md = random;
					};
				};
				md = md +superlucky1;
				if(md > 100){
					md = 100;
				}
				var sum = str + dex + luk + int1 +ad + md;
				string += "\r\n��������"
				if(superlucky1 == superlucky){
					string +="(ǿ��׷��"+superlucky1+"����)"
				}
				string += "������"+str+"������"+dex+"������"+luk+"������"+int1+"���﹥"+ad+"��ħ��"+md+"��������"+sum+""
				cm.gainItem(costitem, -100);
				cm.gainItem(luckitem, luckgive);
				cm.������װ��(1113226,0,0,str,dex,luk,int1,0,0,ad,md,0,0,0,0,0,0,0);
				if(sum < 250){
					cm.gainItem(luckitem, luckgive)
					cm.ȫ����ɫ����("[�𻨽�ָ] : ��ɾ�Űɣ�ǿ�˶��Ȳ����㣡����["+cm.getPlayer().getName()+"]ʹ�á�ǿ�ˡ�������������"+str+"������"+dex+"������"+luk+"������"+int1+"���﹥"+ad+"��ħ��"+md+"�Ľ𻨽�ָ��������"+sum+"��������250")
					cm.getPlayer().setOneTimeLog("������ɾ�");
					cm.getPlayer().dropMessage(5,"������ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("������ɾ�")+"");
					cm.getPlayer().setOneTimeLog("�߿���forever�ɾ�");
					cm.getPlayer().dropMessage(5,"�߿���forever�ɾʹ��");
				}
				if(sum > 450 && sum != 600){
					cm.ȫ����ɫ����("[�𻨽�ָ] : ["+cm.getPlayer().getName()+"]ʹ�á�ǿ�ˡ�������������"+str+"������"+dex+"������"+luk+"������"+int1+"���﹥"+ad+"��ħ��"+md+"�Ľ𻨽�ָ�������Ըߴ�"+sum+"/600")
				}
				if(sum == 600){
					cm.ȫ����ɫ����("[�𻨽�ָ] : �ѣ�����ŷ�ʸ��壡����["+cm.getPlayer().getName()+"]ʹ�á�ǿ�ˡ�������������ȫ���Ľ𻨽�ָ����ֱը�ѣ�����")
					cm.getPlayer().setOneTimeLog("��������ɾ�");
					cm.getPlayer().dropMessage(5,"��������ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("��������ɾ�")+"");
				}
				cm.sendOk(string);
				cm.dispose();
				return;
			}
			cm.sendOk("#v"+costitem+"#���㣬�޷�����");
            cm.dispose();
            return;
		};
		if(selection == 3){
			cm.sendOk("�����ʹ���������������Ϸ��ɾ�Ű�");
			cm.dispose();
			return;
		}
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}