/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű���ȥ�Ϻ�
 */

var status = 0;
function start() {
    cm.sendYesNo("    Hi~#b#h ##k���Ƿ�Ҫ���������#r������#k������Ʒ���˴���պ��޷��ָ���");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
        cm.�Ի�����();
		cm.��NPC(9900004,5);
        return;
    }
    status++;
    if (status == 1) {
		for (var i = 0; i <= 96; i++) {
			if (cm.getInventory(2).getItem(i) != null) {
				cm.removeAll(cm.getInventory(2).getItem(i).getItemId());
			}
		}
        cm.�Ի�����();
	}
}