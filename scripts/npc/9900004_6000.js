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
			text += "#e#b����ð�յ�����BOSS���ж��� #k	#n\r\n"
            text += "#L5##r�ٻ���������ѩ�ˣ�#l\r\n#L1##r�ٻ�����ţħ����#l\r\n#L2##r�ٻ������ˣ�#l\r\n#L4##r�ٻ�����ʿ�٣�#l\r\n#L3##r�ٻ������ֱۣ�#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-5000);
				cm.spawnMonster(9300249, 5);
				cm.spawnMonster(9300250, 5);

				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��7-12���ٻ�������ţħ������ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
			}}else if (selection == 2) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-2500);
				cm.spawnMonster(9500134, 20);
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��7-12���ٻ��˰����ˣ���ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 3) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(8800003, 1);
				cm.spawnMonster(8800004, 1);
				cm.spawnMonster(8800005, 1);
				cm.spawnMonster(8800006, 1);
				cm.spawnMonster(8800007, 1);
				cm.spawnMonster(8800008, 1);
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��7-12���ٻ��������ֱۣ���ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 4) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(6230602, 20);
				//cm.spawnMonster(8820000, 1);
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��7-12���ٻ�������ʿ�٣���ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 5) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9200020, 20);

				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��7-12���ٻ�����������ѩ�ˣ���ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 6) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9500362, 1);

				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ���������ͼ˹����ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 7) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9500363, 1);

				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ���Ƥ��ū˹����ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
			}
		}
    }
}


