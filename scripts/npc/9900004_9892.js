/*
����ð�յ�-ÿ��boss
 */


 function start() {
    status = 0;
    action(1, 0, 0);
}
var done ="#b#e"
var notdone = "#r#e"
var color1 = notdone
var color2 = notdone
var color3 = notdone
var color4 = notdone
var color5 = notdone
var color6 = notdone
var color7 = notdone
var color8 = notdone
var bosstime = 0
var maxtime = 2
var havecard1 = false
var havecard2 = false

var missionlog = ["����ɭ��","��������","������","����ŷ������Ҷ","�����","����"]
var missiontime = 0
var missiontimeneed = 0

var name = ["����","������","������","����","����","��ɮ"] 
var cost = [4001084,4031739,4031740,4001083,4001430,4031741]
var get = [
"#v"+4000148+"#x#b#e100#n#k��#v"+4031179+"#x#b#e1#n#k��#v"+4000463+"#x#b#e5#n#k",
"#v"+4310002+"#x#b#e2#n#k��#v"+4000463+"#x#b#e5#n#k",
"#v"+4310098+"#x#b#e5#n#k��#v"+4310097+"#x#b#e1#n#k��#v"+4000463+"#x#b#e10#n#k",
"#v"+4310091+"#x#b#e1#n#k��#v"+2022468+"#x#b#e1#n#k��#v"+4000463+"#x#b#e10#n#k",
"#v"+4310058+"#x#b#e1#n#k��#v"+4310060+"#x#b#e2#n#k��#v"+4000463+"#x#b#e10#n#k",
"#v"+4032226+"#x#b#e2#n#k��#v"+4000463+"#x#b#e10#n#k"
]


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
		if(cm.haveItem(3700101,1)){
			maxtime += 1
			havecard2 = true
		}
		if(cm.haveItem(3700100,1)){
			havecard1 = true
		}
		missiontimeneed = missionlog.length * 2 - 2
		for(var i = 0; i < missionlog.length; i++){
			if(cm.getBossLog(missionlog[i]) >= 2){
				missiontime += 2
			}else if(cm.getBossLog(missionlog[i]) == 1){
				missiontime += 1
			}
		}
		if(missiontime >= missiontimeneed){
			color7 = done
		}
		if(cm.getBossLog("ÿ�����Ӷһ�") >= maxtime){
			color1 = done
		}
		if(cm.getBossLog("ÿ�ձ����ܶһ�") >= maxtime){
			color2 = done
		}
		if(cm.getBossLog("ÿ�������һ�") >= maxtime){
			color3 = done
		}
		if(cm.getBossLog("ÿ�������һ�") >= maxtime){
			color4 = done
		}
		if(cm.getBossLog("ÿ�պ����һ�") >= maxtime){
			color5 = done
		}
		if(cm.getBossLog("ÿ����ɮ�һ�") >= maxtime){
			color8 = done
		}
		if(cm.getBossLog("ÿ�����Ӷһ�") >= 1){
			bosstime++
		}
		if(cm.getBossLog("ÿ�����Ӷһ�") >= 2){
			bosstime++
		}
		if(cm.getBossLog("ÿ�ձ����ܶһ�") >= 1){
			bosstime++
		}
		if(cm.getBossLog("ÿ�ձ����ܶһ�") >= 2){
			bosstime++
		}
		if(cm.getBossLog("ÿ�������һ�") >= 1){
			bosstime++
		}
		if(cm.getBossLog("ÿ�������һ�") >= 2){
			bosstime++
		}
		if(cm.getBossLog("ÿ�������һ�") >= 1){
			bosstime++
		}
		if(cm.getBossLog("ÿ�������һ�") >= 2){
			bosstime++
		}
		if(cm.getBossLog("ÿ�պ����һ�") >= 1){
			bosstime++
		}
		if(cm.getBossLog("ÿ�պ����һ�") >= 2){
			bosstime++
		}
		if(cm.getBossLog("ÿ����ɮ�һ�") >= 1){
			bosstime++
		}
		if(cm.getBossLog("ÿ����ɮ�һ�") >= 2){
			bosstime++
		}
		if(cm.getBossLog("ÿ��boss�һ�") >= 1){
			color6 = done
		}
		if(cm.getBossLog("ÿ����Ӷһ�") >= 1){
			color7 = done
		}
        var selStr = "ÿ��boss#b#eÿ��һ��Ҫ����#n#k��";
			if(havecard1){
				selStr += "\r\n\r\n��⵽ӵ��#b#e�����¿�#n#k��#b#e����������#n#k";
			}
			if(havecard2){
				selStr += "\r\n��⵽ӵ��#b#e��Ȩ�¿�#n#k��ÿ������#b#e����ɴ���+1��#n#k";
			}
			if(cm.getPlayer().getOneTimeLog("��ο�") >= 1){
				selStr += "\r\n��⵽ӵ��#b#e��ο�#n#k����#b#eֱ����ȡ���ս�����#n#k";
			}
			
			selStr += "\r\n#L6#ÿ��boss˵��#l";
			selStr += "\r\n#L0#"+color1+"ÿ������(����齱)--------("+cm.getBossLog("ÿ�����Ӷһ�")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L1#"+color2+"ÿ�ձ�����(������������)--("+cm.getBossLog("ÿ�ձ����ܶһ�")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L2#"+color3+"ÿ��������(���յ�����)----("+cm.getBossLog("ÿ�������һ�")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L3#"+color4+"ÿ������(����������)------("+cm.getBossLog("ÿ�������һ�")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L4#"+color5+"ÿ�պ���(��������)--------("+cm.getBossLog("ÿ�պ����һ�")+"/"+maxtime+")#n#k#l";
			selStr += "\r\n#L9#"+color8+"ÿ����ɮ(���ӳ齱)--------("+cm.getBossLog("ÿ����ɮ�һ�")+"/"+maxtime+")#n#k#l";
			if(cm.getPlayer().getOneTimeLog("��ο�") >= 1){
				bosstime = 100
				missiontime = missiontimeneed
				selStr += "\r\n#L5#"+color6+"��ο���ȡboss������#n#k#l";
				selStr += "\r\n#L7#"+color7+"��ο���ȡ���һ��������#n#k#l";
			}else{
				selStr += "\r\n#L5#"+color6+"ÿ�����8��boss����-------("+bosstime+"/10)#n#k#l";
				selStr += "\r\n#L7#"+color7+"�������һ����------------("+missiontime+"/"+missiontimeneed+")#n#k#l";
			}
			if(missiontime < missiontimeneed){
			selStr += "#L8#�鿴����#l";
			}
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.getBossLog("ÿ�����Ӷһ�") >= maxtime){
				cm.sendOk("һ��ֻ�ܶһ�+"+maxtime+"+��");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4001084, 1)){
				cm.gainItem(4001084, -1);
				cm.setBossLog("ÿ�����Ӷһ�");
				cm.getPlayer().setOneTimeLog("���ӳɾ�");
				if(havecard1){
					cm.gainItem(4000148, 150);
					cm.gainItem(4000463, 8);
					cm.gainItem(4031179, 2);
					cm.sendOk("�һ��ɹ�������100��#v4000148#��2��#v4031179#��8��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ������boss���񣬻��50%������Ͻ���")
				}else{
					cm.gainItem(4000148, 100);
					cm.gainItem(4000463, 5);
					cm.gainItem(4031179, 1);
					cm.sendOk("�һ��ɹ�������100��#v4000148#��1��#v4031179#��5��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ������boss����")
				}
				cm.getPlayer().dropMessage(5,"���ӳɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("���ӳɾ�")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("�������ӣ���#v4001084#������");
			cm.dispose();
		};
		if(selection == 1){
			if(cm.getBossLog("ÿ�ձ����ܶһ�") >= maxtime){
				cm.sendOk("һ��ֻ�ܶһ�"+maxtime+"��");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4031739, 1)){
				cm.gainItem(4031739, -1);
				cm.setBossLog("ÿ�ձ����ܶһ�");
				cm.getPlayer().setOneTimeLog("�����ܳɾ�");
				if(havecard1){
					cm.gainItem(4310002, 3);
					cm.gainItem(4000463, 8);
					cm.sendOk("�һ��ɹ�������3��#v4310002#��8��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ�ձ�����boss���񣬻��50%������Ͻ���")
				}else{
					cm.gainItem(4310002, 2);
					cm.gainItem(4000463, 5);
					cm.sendOk("�һ��ɹ�������2��#v4310002#��5��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ�ձ�����boss����")
				}
				cm.getPlayer().dropMessage(5,"�����ܳɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("�����ܳɾ�")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("���ܱ����ܻ��İ�ʨ������#v4031739#������");
			cm.dispose();
		};
		if(selection == 2){
			if(cm.getBossLog("ÿ�������һ�") >= maxtime){
				cm.sendOk("һ��ֻ�ܶһ�"+maxtime+"��");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4031740, 1)){
				cm.gainItem(4031740, -1);
				cm.setBossLog("ÿ�������һ�");
				cm.getPlayer().setOneTimeLog("�����ɾ�");
				if(havecard1){
					cm.gainItem(4310098, 8);
					cm.gainItem(4000463, 15);
					cm.���ʸ���Ʒ2(4310097, 2, 100, "���յ±�");
					cm.sendOk("�һ��ɹ�������8��#v4310098#�����1~2��#v4310097#��15��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ������boss���񣬻��50%������Ͻ���")
				}else{
					cm.gainItem(4310098, 5);
					cm.gainItem(4000463, 10);
					cm.gainItem(4310097, 1);
					cm.sendOk("�һ��ɹ�������5��#v4310098#��1��#v4310097#��10��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ������boss����")
				}
				cm.getPlayer().dropMessage(5,"�����ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("�����ɾ�")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("��������������#v4031740#������");
			cm.dispose();
		};
		if(selection == 3){
			if(cm.getBossLog("ÿ�������һ�") >= maxtime){
				cm.sendOk("һ��ֻ�ܶһ�"+maxtime+"��");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4001083, 1)){
				cm.gainItem(4001083, -1);
				cm.setBossLog("ÿ�������һ�");
				cm.getPlayer().setOneTimeLog("�����ɾ�");
				if(havecard1){
					cm.���ʸ���Ʒ2(4310091, 2, 100, "�����ɾ��ѱ�");
					cm.gainItem(4000463, 15);
					cm.���ʸ���Ʒ2(2022468, 2, 100, "�س���ѡ����");
					cm.sendOk("�һ��ɹ����������1~2��#v4310091#�����1~2��#v2022468#��15��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ������boss���񣬻��50%������Ͻ���")
				}else{
					cm.gainItem(4310091, 1);
					cm.gainItem(4000463, 10);
					cm.gainItem(2022468, 1);
					cm.sendOk("�һ��ɹ�������1��#v4310091#��1��#v2022468#��10��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ������boss����")
				}
				cm.getPlayer().dropMessage(5,"�����ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("�����ɾ�")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("������������#v4001083#������");
			cm.dispose();
		};
		if(selection == 4){
			if(cm.getBossLog("ÿ�պ����һ�") >= maxtime){
				cm.sendOk("һ��ֻ�ܶһ�"+maxtime+"��");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4001430, 1)){
				cm.gainItem(4001430, -1);
				cm.setBossLog("ÿ�պ����һ�");
				cm.getPlayer().setOneTimeLog("�����ɾ�");
				if(havecard1){
					cm.gainItem(4000463, 15);
					cm.gainItem(4310060, 3);
					cm.���ʸ���Ʒ2(4310058, 2, 100, "������");	
					cm.sendOk("�һ��ɹ����������1~2��#v4310058#��3��#v4310060#��15��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ�պ���boss���񣬻��50%������Ͻ���")
				}else{
					cm.gainItem(4000463, 10);
					cm.gainItem(4310060, 2);
					cm.gainItem(4310058, 1);
					cm.sendOk("�һ��ɹ�������1��#v4310058#��2��#v4310060#��10��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ�պ���boss����")
				}
				cm.getPlayer().dropMessage(5,"�����ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("�����ɾ�")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("���ܺ�������#v4001430#������");
			cm.dispose();
		};
		if(selection == 9){
			if(cm.getBossLog("ÿ����ɮ�һ�") >= maxtime){
				cm.sendOk("һ��ֻ�ܶһ�"+maxtime+"��");
				cm.dispose();
				return;
			}
			if(cm.haveItem(4031741, 1)){
				cm.gainItem(4031741, -1);
				cm.setBossLog("ÿ����ɮ�һ�");
				cm.getPlayer().setOneTimeLog("��ɮ�ɾ�");
				if(havecard1){
					cm.gainItem(4000463, 15);
					cm.gainItem(4032226, 3);
					cm.sendOk("�һ��ɹ�������3��#v4032226#15��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ����ɮboss���񣬻��50%������Ͻ���")
				}else{
					cm.gainItem(4000463, 10);
					cm.gainItem(4032226, 2);
					cm.sendOk("�һ��ɹ�������2��#v4032226#10��#v4000463#");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ����ɮboss����")
				}
				cm.getPlayer().dropMessage(5,"��ɮ�ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("��ɮ�ɾ�")+"");
				cm.dispose();
				return;
			}
			cm.sendOk("������ɮ����#v4031741#������");
			cm.dispose();
		};
		if(selection == 5){
			if(bosstime < 10){
				cm.sendOk("�������10��ÿ��boss�ſ�����ȡ�");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("ÿ��boss�һ�") >= 1){
				cm.sendOk("���Ѿ���ȡ����");
				cm.dispose();
				return;
			}
			cm.gainItem(4000463, 50);
			cm.gainItem(4310060, 5);
			cm.setBossLog("ÿ��boss�һ�");
			cm.getPlayer().setOneTimeLog("ÿ��boss�ɾ�");
			if(cm.getPlayer().getOneTimeLog("��ο�") >= 1){
				if(havecard1){
					cm.gainItem(4000463, 50);
					cm.gainItem(4310060, 5);
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e100#n#k#v4310060#x#b#e10#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[��ο���Ȩ][���Ͽ���Ȩ]ֱ����ȡ��ÿ��boss���������ҽ�������")
				}else{
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e50#n#k#v4310060#x#b#e5#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[��ο���Ȩ]ֱ����ȡ��ÿ��boss������")
				}
			}else{
				if(havecard1){
					cm.gainItem(4000463, 50);
					cm.gainItem(4310060, 5);
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e100#n#k#v4310060#x#b#e10#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ��boss���񣬻�ý�������")
				}else{
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e50#n#k#v4310060#x#b#e5#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ��boss����")
				}
			}
			cm.getPlayer().dropMessage(5,"ÿ��boss�ɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("ÿ��boss�ɾ�")+"");
			cm.dispose();
			return;
		};
		if(selection == 7){
			if(missiontime < missiontimeneed){
				cm.sendOk("�㻹û����ɣ��������");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("ÿ����Ӷһ�") >= 1){
				cm.sendOk("���Ѿ���ȡ����");
				cm.dispose();
				return;
			}
			cm.setBossLog("ÿ����Ӷһ�");
			cm.getPlayer().setOneTimeLog("ÿ����ӳɾ�");
			cm.gainItem(4000463, 100);
			cm.gainItem(4430000, 5);
			if(cm.getPlayer().getOneTimeLog("��ο�") >= 1){
				if(havecard1){
					cm.gainItem(4000463, 100);
					cm.gainItem(4430000, 5);
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e200#n#k#v4430000#x#b#e10#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[��ο���Ȩ][���Ͽ���Ȩ]ֱ����ȡ��ÿ��������������ҽ�������")
				}else{
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[��ο���Ȩ]ֱ����ȡ��ÿ�����������")
				}
			}else{
				if(havecard1){
					cm.gainItem(4000463, 100);
					cm.gainItem(4430000, 5);
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e200#n#k#v4430000#x#b#e10#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" ʹ��[���Ͽ���Ȩ]�����ÿ��������񣬻�ý�������")
				}else{
					cm.sendOk("�һ��ɹ�������#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k");
					cm.ȫ����ɫ����("[ÿ��boss] : ��ϲ��� "+cm.getPlayer().getName()+" �����ÿ���������")
				}
			}
			cm.getPlayer().dropMessage(5,"ÿ����ӳɾͽ��ȣ�"+cm.getPlayer().getOneTimeLog("ÿ����ӳɾ�")+"");
			cm.dispose();
			return;
		};
		if(selection == 6){
			var string = "ÿ��ÿ��bossÿ��������2��\r\n"
			for(var i = 0;i < name.length; i++){
				string +="["+name[i]+"]��Ҫ#v"+cost[i]+"#������"+get[i]+"\r\n"
			}
			string +="[���8������]������ȡ#v4000463#x#b#e50#n#k#v4310060#x#b#e5#n#k\r\n"
			string +="[���"+missiontimeneed+"���������]������ȡ#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k\r\n"
			cm.sendOk(string);
			cm.dispose();
			return;
		};
		if(selection == 8){
			var string = "���"+missiontimeneed+"���������(ÿ������2��)���ɻ�ý���\r\n����ǰ�����#b#e"+missiontime+"/"+missiontimeneed+"#n#k�Ρ�\r\n"
			for(var i = 0;i < missionlog.length; i++){
				if(cm.getBossLog(missionlog[i]) >= 2){
					string +="#b#e������ɡ�"
				}else{
					string +="#r#e��δ��ɡ�"
				}
				string +="["+missionlog[i]+"]"+cm.getBossLog(missionlog[i])+"��#n#k\r\n"
			}
			string +="����#v4000463#x#b#e100#n#k#v4430000#x#b#e5#n#k\r\n"
			cm.sendOk(string);
			cm.dispose();
			return;
		};
		
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}