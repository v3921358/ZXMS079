/*
 ��������
 */

var ���� = "#fEffect/CharacterEff/1022223/4/0#";


 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" ���㣬�ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = "��������ר��:"
			selStr += "\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+""
			selStr += "��������ÿ������#v4000463#x10����ѡ����Ҫ����ĵ���:"
			selStr += "\r\n#L0#С���߽�ָ(��������1)#v1112540##l";
			selStr += "\r\n#L1#ȫ����10��װ(��������4)#v1102510##l";
			selStr += "\r\n#L2#ȫ����25��ָ(��������14)#v1112675##l";
			selStr += "\r\n#L3#��ά50˫��30����(��������20)#v1102556##l";
			selStr += "\r\n#L4#[������ɱ��]�ɾ�ѫ��#v1142008##l";
			selStr += "\r\n#L5#[bossɱ��]�ɾ�ѫ��#v1142863##l";
			selStr += "\r\n#L6#[boss��¾��]�ɾ�ѫ��#v1142865##l";
			selStr += "\r\n#L7#[��˫ɱ��]�ɾ�ѫ��#v1142867##l";
			selStr += "\r\n#L8#[��Ӵ���][����һ����][�ε۹���]�ɾ͵�װ#v1012057##l";
			selStr += "\r\n#L9#[�����Ѽ���ħ]�ɾ͵�װ#v1112900##l";

			
			
			selStr += "\r\n\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			selStr += "�ֶ�����������Ҫ��ϵGM��";
			selStr += "\r\n#L888#���߲���#l";

			
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("��������") >= 1){
				cm.gainItem(4000463,-10)
				cm.������װ��(1112540, 1, 0, 8, 8, 8, 8, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[С���߽�ָ]�ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("����������Ȳ���");
			cm.dispose();
            return;	
		};
		if(selection == 1){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("��������") >= 4){
				cm.gainItem(4000463,-10)
				cm.������װ��(1102510, 0, 0, 10, 10, 10, 10, 0, 0, 10, 10,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[��������ȫ����+10��װ]�ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("����������Ȳ���");
			cm.dispose();
            return;	
		};
		if(selection == 2){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("��������") >= 14){
				cm.gainItem(4000463,-10)
				cm.������װ��(1112675, 0, 0, 25, 25, 25, 25, 0, 0, 25, 25,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[��������ȫ����+25��ָ]�ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("����������Ȳ���");
			cm.dispose();
            return;	
		};
		if(selection == 3){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("��������") >= 20){
				cm.gainItem(4000463,-10)
				cm.������װ��(1102556, 0, 0, 50, 50, 50, 50, 0, 0, 30, 30,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[������������]�ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("����������Ȳ���");
			cm.dispose();
            return;
		};
		if(selection == 4){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("PB�ɾ�") >= 100){
				cm.gainItem(4000463,-10)
				cm.������װ��(1142008, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[������ɱ��]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("�㻹û���������ɾ�");
			cm.dispose();
            return;
		};
		if(selection == 5){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("ÿ��boss�ɾ�") >= 5){
				cm.gainItem(4000463,-10)
				cm.������װ��(1142008, 0, 0, 66, 66, 66, 66, 66, 66, 66, 66,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[bossɱ��]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("�㻹û���������ɾ�");
			cm.dispose();
            return;
		};
		if(selection == 6){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("ÿ��boss�ɾ�") >= 14){
				cm.gainItem(4000463,-10)
				cm.������װ��(1142865, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[boss��¾��]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("�㻹û���������ɾ�");
			cm.dispose();
            return;
		};
		if(selection == 7){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("ÿ��boss�ɾ�") >= 60){
				cm.gainItem(4000463,-10)
				cm.������װ��(1142867, 0, 0, 300, 300, 300, 300, 300, 300, 300, 300,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[��˫ɱ��]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("�㻹û���������ɾ�");
			cm.dispose();
            return;
		};
		if(selection == 8){
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("ÿ����ӳɾ�") >= 60){
				cm.gainItem(4000463,-10)
				cm.������װ��(1012057, 0, 0, 120, 120, 120, 120, 120, 120, 120, 120,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[�ε۹���]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			if(cm.getPlayer().getOneTimeLog("ÿ����ӳɾ�") >= 14){
				cm.gainItem(4000463,-10)
				cm.������װ��(1012057, 0, 0, 80, 80, 80, 80, 80, 80, 80, 80,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[����һ����]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			if(cm.getPlayer().getOneTimeLog("ÿ����ӳɾ�") >= 5){
				cm.gainItem(4000463,-10)
				cm.������װ��(1012057, 0, 0, 40, 40, 40, 40, 40, 40, 40, 40,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[��Ӵ���]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("�㻹û���������ɾ�");
			cm.dispose();
            return;
		};
		if(selection == 9){
				cm.sendOk("������ƨ�ԣ����������֧������");
				cm.dispose();
				return;
			if(cm.haveItem(4000463,10)==false){
				cm.sendOk("����������Ҫ#v4000463#x10");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getOneTimeLog("�����Ѽ���ħ�ɾ�") >= 300){
				cm.gainItem(4000463,-10)
				cm.������װ��(1112900, 0, 0, 80, 80, 80, 80, 80, 80, 80, 80,0, 0, 0, 0, 0, 0, 0);
				cm.ȫ����ɫ����("[��������] : ["+cm.getPlayer().getName()+"]����[�����Ѽ���ħ]�ɾͽ����ɹ�")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				return;	
			}
			cm.sendOk("�㻹û���������ɾ�");
			cm.dispose();
            return;
		};
		if(selection == 88){
			cm.dispose();
            cm.openNpc(9900004, 9909);
            return;
		};
		if(selection == 15){
			cm.dispose();
            cm.openNpc(9900004, 9914);
            return;
		};
		if(selection == 888){
			cm.dispose();
            cm.openNpc(9900004, 9910);
            return;
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}