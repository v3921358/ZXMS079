/*
 ʯͷ������
 */

var day = 0
var mod = 0
var list1=[
	[0,4032226,20],
	[0,2022613,2],
	[0,4310060,40],
	[0,4310091,5],
	[0,4310097,5],
	[0,4000463,200],
	[100,1142891,1],
]
var list2=[
	[0,4000463,500],
	[0,4032226,200],
	[0,3010070,1],
	[288,1012318,1],
	[0,2022678,50],
	[0,4310058,10],
	[200,1112904,1],
]
var list3=[
	[0,2022613,5],
	[0,4310038,20],
	[0,4310060,100],
	[0,4310091,20],
	[0,4310097,20],
	[0,4310060,150],
	[0,2022466,1],
]
var item=[
	[4000059],
	[4000294],
	[4000172],
	[4000074],
	[4000265],
	[4000064],
	[4000167],
	[4000069],
	[4000197],
	[4000473],
	[4000090],
	[4000118],
	[4000350],
	[4000287],
	[4000018],
	[4000281],
	[4000429],
	[4000371],
	[4000471],
	[4000206],//
	[4000078],
	[4000260],
	[4000453],
	[2022026],
	[4000066],//
	[4000397],
	[4000010],
	[4000330],
	[4000178],
	[4000043],
	[4000405],
	[4000274]
	
]
 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 4) {
            cm.sendOk(" ������ȥ�����ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		day = cm.�ж���()
		buy = cm.getPlayer().getOneTimeLog("�����") * 10
		var selStr = "����10��1�տ�ʼ��Ԫ������";
		if(cm.getPlayer().getOneTimeLog("�������뺯")==0){
			selStr += "\r\n��������ﵽ#b20#kʱ������ȡ#b�������뺯#k\r\n����#b����ʢװ���뺯#k��#b����ҫ�����뺯#k�ɻ���#b�������뺯#k\r\nÿ��#b���뺯�ۼ�50������#k����������㹻��#v4310003#�ſɹ��򣬹���ʱ����#v4430000#\r\n�����ڻ�������ѡ�"+buy+"��";
			selStr += "\r\n#L101#��ȡ�������뺯("+cm.getPlayer().getOneTimeLog("���뺯����")+"/20)#l";
			selStr += "\r\n#L2#�������ʢװ���뺯#l";
			selStr += "\r\n#L3#�������ҫ�����뺯#l";
			selStr += "\r\n#L1#�鿴�����б�#l";
			selStr += "\r\n#L102#��ȡ���뺯����#l";
		}
		if(cm.getPlayer().getOneTimeLog("�������뺯")>=1){
			selStr += "\r\n���������#b������#k���������ﵽָ��ֵ������ȡ����\r\nÿ��#b���뺯�ۼ�50������#k����������㹻��#v4310003#�ſɹ��򣬹���ʱ����#v4430000#\r\n�����ڻ�������ѡ�"+buy+"��";
			selStr += "\r\n��ǰ������["+cm.getPlayer().getOneTimeLog("������")+"]";
			selStr += "\r\n#L201#��ȡ�������뺯����#l";
			if(cm.getPlayer().getOneTimeLog("����ʢװ���뺯")>=1){
				selStr += "\r\n#L202#��ȡ����ʢװ���뺯����#l";
			}else{
				selStr += "\r\n#L2#�������ʢװ���뺯#l";
			}
			if(cm.getPlayer().getOneTimeLog("����ҫ�����뺯")>=1){
				selStr += "\r\n#L203#��ȡ����ҫ�����뺯����#l";
			}else{
				selStr += "\r\n#L3#�������ҫ�����뺯#l";
			}
			selStr += "\r\n#L1#�鿴�����б�#l";
			selStr += "\r\n#L204#��ȡ������#l";
			
		}


        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        
		if(selection == 1){
			var day1 = 0
			var string1 = "�������뺯������\r\n"
			for(var i = 0;i<list1.length;i++){
				day1 = (i + 1)*10
				string1 += ""+day1+"��������#v"+list1[i][1]+"#"
				if(list1[i][0]==0){
					string1 += "x"+list1[i][2]+"\r\n"
				}else{
					string1 += "ȫ����+"+list1[i][0]+"\r\n"
				}
			}
			string1 += "\r\n\r\n����ʢװ���뺯������\r\n"
			for(var i = 0;i<list2.length;i++){
				day1 = (i + 1)*10
				string1 += ""+day1+"��������#v"+list2[i][1]+"#"
				if(list2[i][0]==0){
					string1 += "x"+list2[i][2]+"\r\n"
				}else{
					string1 += "ȫ����+"+list2[i][0]+"\r\n"
				}
			}
			string1 += "\r\n\r\n����ҫ�����뺯������\r\n"
			for(var i = 0;i<list3.length;i++){
				day1 = (i + 1)*10
				string1 += ""+day1+"��������#v"+list3[i][1]+"#"
				if(list3[i][0]==0){
					string1 += "x"+list3[i][2]+"\r\n"
				}else{
					string1 += "ȫ����+"+list3[i][0]+"\r\n"
				}
			}
			cm.sendOk(string1);
			cm.dispose();
			return;	
		};
		if(selection == 2){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy2 = buy +50
				cm.sendOk("������Ȳ���Ŷ\r\n��Ҫ��"+buy2+"#v4310003#�ſ��Լ�������\r\n���ε��������ǲ������");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
            cm.getPlayer().setOneTimeLog("����ʢװ���뺯");
			cm.getPlayer().dropMessage(5,"���ѻ��[����ʢװ���뺯]");
			cm.ȫ����ɫ����("[����] : ["+cm.getPlayer().getName()+"]������[����ʢװ���뺯]��")
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			if(cm.getPlayer().getOneTimeLog("�������뺯")==0){
				cm.getPlayer().setOneTimeLog("�������뺯");
				cm.getPlayer().dropMessage(5,"���ѻ��[�������뺯]");
			}
			cm.dispose();
            return;	
			}else{
				cm.sendOk("��Ҫ#v4430000#x50�ſ��Թ����");
			}
			cm.dispose();
            return;
		};
		if(selection == 3){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy2 = buy +50
				cm.sendOk("������Ȳ���Ŷ\r\n��Ҫ��"+buy2+"#v4310003#�ſ��Լ�������\r\n���ε��������ǲ������");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
            cm.getPlayer().setOneTimeLog("����ҫ�����뺯");
			cm.getPlayer().dropMessage(5,"���ѻ��[����ҫ�����뺯]");
			cm.ȫ����ɫ����("[����] : ["+cm.getPlayer().getName()+"]������[����ҫ�����뺯]��")
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			cm.getPlayer().setOneTimeLog("�����");
			if(cm.getPlayer().getOneTimeLog("�������뺯")==0){
				cm.getPlayer().setOneTimeLog("�������뺯");
				cm.getPlayer().dropMessage(5,"���ѻ��[�������뺯]");
			}
			cm.dispose();
            return;	
			}else{
				cm.sendOk("��Ҫ#v4430000#x50�ſ��Թ����");
			}
			cm.dispose();
            return;
		};
		if(selection == 101){
			if(cm.getPlayer().getOneTimeLog("���뺯����")<20){
				cm.sendOk("���뺯���������أ����������");
				cm.dispose();
				return
			}
			cm.getPlayer().setOneTimeLog("�������뺯");
			cm.getPlayer().dropMessage(5,"���ѻ��[�������뺯]");
			cm.ȫ����ɫ����("[����] : ["+cm.getPlayer().getName()+"]�����ȡ��[�������뺯]��")
			cm.dispose();
			return
		}
		if(selection == 102){
			mod = 1
			var string2 = "��ѡ�񽻸��Ĳ��ϣ�\r\n"
			for(var i = 0;i<item.length;i++){
				if(cm.getPlayer().getOneTimeLog("���뺯����"+i+"")==0){
					string2 += "#L"+i+"##v"+item[i]+"#x30#l  "
				}
			}
			cm.sendOk(string2);
		};
		if(selection == 201 || selection == 202 ||selection == 203){
			var needpoint = 0
			if(selection == 201 && cm.getPlayer().getOneTimeLog("�������뺯��ȡ") <= 6){
				needpoint = (cm.getPlayer().getOneTimeLog("�������뺯��ȡ")+1)*10
			}else if(selection == 202 && cm.getPlayer().getOneTimeLog("����ʢװ���뺯��ȡ") <= 6){
				needpoint = (cm.getPlayer().getOneTimeLog("����ʢװ���뺯��ȡ")+1)*10
			}else if(selection == 203 && cm.getPlayer().getOneTimeLog("����ҫ�����뺯��ȡ") <= 6){
				needpoint = (cm.getPlayer().getOneTimeLog("����ҫ�����뺯��ȡ")+1)*10
			}else{
				cm.sendOk("���Ѿ�ȫ����ȡ������")
				cm.dispose();
				return
			}
			if(cm.getPlayer().getOneTimeLog("������") < needpoint){
				cm.sendOk("��������("+cm.getPlayer().getOneTimeLog("������")+"/"+needpoint+")")
				cm.dispose();
				return
			}
			var choose1 = 0
			if(selection == 201){
				choose1 = cm.getPlayer().getOneTimeLog("�������뺯��ȡ")
				if(list1[choose1][0]==0){
					cm.gainItem(list1[choose1][1],list1[choose1][2])
				}else{
					cm.������װ��(list1[choose1][1], 0, 0, list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0],0, 0, 0, 0, 0, 0, 0);
				}
				choose1++
				cm.ȫ����ɫ����("[����] : ��ϲ��� "+cm.getPlayer().getName()+" ��ȡ[�������뺯]��["+choose1+"]�ν����ɹ�")
				cm.getPlayer().setOneTimeLog("�������뺯��ȡ")
				cm.sendOk("��ȡ�ɹ�")
				cm.dispose();
				return
			}else if(selection == 202){
				choose1 = cm.getPlayer().getOneTimeLog("����ʢװ���뺯��ȡ")
				if(list2[choose1][0]==0){
					cm.gainItem(list2[choose1][1],list2[choose1][2])
				}else{
					cm.������װ��(list2[choose1][1], 0, 0, list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0],0, 0, 0, 0, 0, 0, 0);
				}
				choose1++
				cm.ȫ����ɫ����("[����] : ��ϲ��� "+cm.getPlayer().getName()+" ��ȡ[����ʢװ���뺯]��["+choose1+"]�ν����ɹ�")
				cm.getPlayer().setOneTimeLog("����ʢװ���뺯��ȡ")
				cm.sendOk("��ȡ�ɹ�")
				cm.dispose();
				return
			}else if(selection == 203){
				choose1 = cm.getPlayer().getOneTimeLog("����ҫ�����뺯��ȡ")
				if(list3[choose1][0]==0){
					cm.gainItem(list3[choose1][1],list3[choose1][2])
				}else{
					cm.������װ��(list3[choose1][1], 0, 0, list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0],0, 0, 0, 0, 0, 0, 0);
				}
				choose1++
				cm.ȫ����ɫ����("[����] : ��ϲ��� "+cm.getPlayer().getName()+" ��ȡ[����ҫ�����뺯]��["+choose1+"]�ν����ɹ�")
				cm.getPlayer().setOneTimeLog("����ҫ�����뺯��ȡ")
				cm.sendOk("��ȡ�ɹ�")
				cm.dispose();
				return
			}
		};
		if(selection == 204){
			mod = 2
			var string3 = "�����б�\r\n"
			string3 += "#L101#���ÿ��boss[3��]\r\n"
			string3 += "#L102#���ÿ���������[3��]\r\n"
			string3 += "#L103#��ɱPB[2��]\r\n"
			string3 += "#L104#�ύ[#z"+item[day]+"#]x100[2��]\r\n"
			cm.sendOk(string3);
		};
    }else if (status == 3) {
		if(selection >= 0 && selection<=item.length && mod==1){
			if(cm.haveItem(item[selection],30)){
				cm.gainItem(item[selection],-30)
				cm.getPlayer().setOneTimeLog("���뺯����"+selection+"")
				cm.getPlayer().setOneTimeLog("���뺯����")
				cm.sendOk("�����ɹ�����ǰ����["+cm.getPlayer().getOneTimeLog("���뺯����")+"]")
				cm.dispose();
				return
			}else{
				cm.sendOk("���ϲ���")
				cm.dispose();
				return
			}
			
		}
		if(selection == 101){
			if(cm.getBossLog("ÿ��boss�һ�")>=1){
				if(cm.getBossLog("���ÿ��boss")!=0){
					cm.sendOk("ÿ��ֻ�����һ��");
					cm.dispose();
					return
				}
				cm.getPlayer().setOneTimeLog("������")
				cm.getPlayer().setOneTimeLog("������")
				cm.getPlayer().setOneTimeLog("������")
				cm.sendOk("�����ɹ�����ǰ����["+cm.getPlayer().getOneTimeLog("������")+"]")
				cm.setBossLog("���ÿ��boss")
				cm.dispose();
				return
			}else{
				cm.sendOk("�㻹δ���ÿ��boss");
				cm.dispose();
				return
			}	
		}
		if(selection == 102){
			if(cm.getBossLog("ÿ����Ӷһ�")>=1){
				if(cm.getBossLog("���ÿ�����")!=0){
					cm.sendOk("ÿ��ֻ�����һ��");
					cm.dispose();
					return
				}
				cm.getPlayer().setOneTimeLog("������")
				cm.getPlayer().setOneTimeLog("������")
				cm.getPlayer().setOneTimeLog("������")
				cm.sendOk("�����ɹ�����ǰ����["+cm.getPlayer().getOneTimeLog("������")+"]")
				cm.setBossLog("���ÿ�����")
				cm.dispose();
				return
			}else{
				cm.sendOk("�㻹δ���ÿ�����");
				cm.dispose();
				return
			}	
		}
		if(selection == 103){
			if(cm.getBossLog("��PB��")>=2){
				if(cm.getBossLog("���PB")!=0){
					cm.sendOk("ÿ��ֻ�����һ��");
					cm.dispose();
					return
				}
				cm.getPlayer().setOneTimeLog("������")
				cm.getPlayer().setOneTimeLog("������")
				cm.sendOk("�����ɹ�����ǰ����["+cm.getPlayer().getOneTimeLog("������")+"]")
				cm.setBossLog("���PB")
				cm.dispose();
				return
			}else{
				cm.sendOk("����컹δ��PB");
				cm.dispose();
				return
			}	
		}
		if(selection == 104){
			if(cm.getBossLog("������")!=0){
				cm.sendOk("ÿ��ֻ�����һ��");
				cm.dispose();
				return
			}
			if(cm.haveItem(item[day],100)){
				cm.gainItem(item[day],-100)
				cm.getPlayer().setOneTimeLog("������")
				cm.getPlayer().setOneTimeLog("������")
				cm.sendOk("�����ɹ�����ǰ����["+cm.getPlayer().getOneTimeLog("������")+"]")
				cm.setBossLog("������")
				cm.dispose();
				return
			}else{
				cm.sendOk("����ϲ�����");
				cm.dispose();
				return
			}
		}
		cm.sendOk("�쳣");
        cm.dispose();
    }
}