var Log = '�����ٻ�����';
var Log1 = '�����ٻ�����';

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
			text += "#e#b����ð�յ�����BOSS���ж��� #k	#n\r\n #r#e��������:#n#k�����ѽ���: #b#e" + cm.getBossLog(Log) + " #k#n�� \r\n #r#e��������:#n#k�����ѽ���: #b#e" + cm.getBossLog(Log1) + " #k#n�� \r\n"
            text += "#L1##r�ٻ�����(#b����ֻ���ٻ�10��#r)��#l\r\n#L2##r�ٻ�����ħ��#l\r\n#L3##r�ٻ�����#l\r\n#L4##r�ٻ�Ʒ���ͣ�#l\r\n#L5##r�ٻ���������(#b����ֻ���ٻ�5��#r)��#l\r\n#L6##r�ٻ�������ͼ˹��#l\r\n#L7##r�ٻ�Ƥ��ū˹��#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getBossLog("�����ٻ�����")<10){
				//cm.gainNX(-5000);
				cm.spawnMonster(8800003, 1);
				cm.spawnMonster(8800004, 1);
				cm.spawnMonster(8800005, 1);
				cm.spawnMonster(8800006, 1);
				cm.spawnMonster(8800007, 1);
				cm.spawnMonster(8800008, 1);
				cm.spawnMonster(8800009, 1);
				cm.spawnMonster(8800010, 1);
				cm.spawnMonster(8800000, 1);
cm.setBossLog("�����ٻ�����");
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ�����������ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("���������޷��ٻ���");
            cm.dispose();
			}}else if (selection == 2) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-2500);
				cm.spawnMonster(8150000, 3);
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ�������ħ����ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 3) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9400014, 1);
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ���������ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 4) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(8820001, 1);
				cm.spawnMonster(8820000, 1);
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ���Ʒ���ͣ���ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 5) {
			if(cm.getBossLog("�����ٻ�����")<5){
				//cm.gainNX(-1000);
				cm.spawnMonster(8810026, 1);
cm.setBossLog("�����ٻ�����");
				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ��˰�����������ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("���������޷��ٻ���");
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
                       }}else if (selection == 8) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(8860000, 1);

				cm.ȫ����ɫ����("��ң�["+cm.getName()+"]��18-22���ٻ���Ƥ��ū˹����ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
			}
		}
    }
}


