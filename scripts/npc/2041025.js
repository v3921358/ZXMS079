/*
	Machine Apparatus - Origin of Clocktower(220080001)
*/

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
		cm.sendOk("#L0##b�ٻ�����(��Ҫ#v4031179#)\r\n#L1##b��Ҫ�뿪��")
		//cm.sendYesNo("�...�...����Ҫ�뿪�𣿣�");
    } else if (status == 1) {
		if(selection==0){
			if(cm.haveItem(4031179,1)==false){
				cm.sendOk("��û��DƬ��Ҫƭ��")
				cm.dispose();
				return
			}
			if(cm.�жϵ�ͼָ����������(8500000)>0 || cm.�жϵ�ͼָ����������(8500001)>0 || cm.�жϵ�ͼָ����������(8500002)>0){
				cm.sendOk("�Ѿ��ٻ�����")
				cm.dispose();
				return
			}
			cm.gainItem(4031179,-1)
			cm.��ǰ��ͼ�ٻ�����(8500000,1,-410,-386);
			cm.dispose();
			return
		}
		if(selection==1){
			cm.warp(220080000);
			if (cm.getPlayerCount(220080001) == 0) {
				cm.getMap(220080000).resetReactors();
			}
		cm.dispose();
		}
    } else {
	cm.dispose();
	}
}
