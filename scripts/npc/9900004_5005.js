function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b  ����ƺŲ��� #k	#n\r\n"
			text += "#v1142655#ȫ����50��5000HPMP"
            text += "#L1##rȷ����ȡ�͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getPlayer().getOneTimeLog("����ƺ�") == 0){
			if(cm.getLevel() <10 ){
				cm.sendOk("�ﵽ10���ſ������");
				cm.dispose();
				return;
			}
			cm.������װ��(1142655, 0, 0, 50, 50, 50, 50, 5000, 5000, 50, 50,0, 0, 0, 0, 0, 0, 0);
			cm.sendOk("��ȡ�ɹ���");
			cm.getPlayer().setOneTimeLog("����ƺ�");
			cm.ȫ����ɫ����("[����ƺ�] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ������ƺš�")
			cm.dispose();
			}else{
            cm.sendOk("#e#bһ����ֻ����ȡһ��\r\n ");
            cm.dispose();
			}
		}
	}
}