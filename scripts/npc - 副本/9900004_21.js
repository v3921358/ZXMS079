/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű��������ѯ
 */


importPackage(net.sf.odinms.client);
var ��ȯ = "#fUI/CashShop.img/CashItem/0#";
var status = 0;
var fee;
var chance = Math.floor(Math.random() * 1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("�������ƹ��룿");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendGetText("	Hi~#b#h ##k����������Ҫ��ѯ����Ʒ���룬����㲻֪������������ѯ��վ��һ�°ɡ�#k\r\n\r\n��������Ʒ����[#r����ID#k]��");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("ȷ�����������Ʒ���� �� #r" + fee + " #k?");
        } else if (fee <= 0 ) {
            cm.sendOk("�������󣡣���");
            cm.dispose();
		} else if (cm.getItemName(fee)==null) {
            cm.sendOk("��Ʒ�����ڡ�");
            cm.dispose();
        } else if(cm.��ѯ����(fee)==""){
			cm.sendOk("	Hi~#b#h ##k����Ҫ��ѯ�� "+cm.��ʾ��Ʒ(fee)+" ���������\r\n\r\n    ����Ʒ�޵���");
		}else{
			cm.sendOk("	Hi~#b#h ##k����Ҫ��ѯ�� "+cm.��ʾ��Ʒ(fee)+" ���������\r\n\r\n"+cm.��ѯ����(fee)+"");
			cm.�Ի�����();
		}
    }
}