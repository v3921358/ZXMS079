/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű�������
 */

var status = -1;

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status < 1 && mode == 0) {
			cm.sendOk("�ã���Ҫ��ʱ���������ҡ�");
			cm.dispose();
			return;
		}
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		if(cm.getMapId() == 910000015 ||cm.getMapId() == 910000020){
			if(cm.�жϵ�ǰ��ͼָ�������Ƿ����(8810018)){
				cm.sendOk("��������");
				cm.dispose();
				return;
			}
			cm.sendYesNo("��Ҫ�������ٻ�����������");
		}
        if (cm.getMapId() == 240050400) {
            cm.sendYesNo("�����뿪���ﵽ#b#m240040700##k��?");
        } else {
            cm.sendYesNo("�����뿪���ﵽ#b#m240040700##k��?");
        }
    } else if (status == 1) {
		if(cm.getMapId() == 910000015){
			cm.��ǰ��ͼ�ٻ�����(8810026,1,50,1515);
			cm.ȫ������("[������ս] : ���["+cm.getPlayer().getName()+"]��[�����г�15��]�ٻ���[��������]");
			cm.dispose();
			return
		}
		if(cm.getMapId() == 910000020){
			cm.��ǰ��ͼ�ٻ�����(8810026,1,677,94);
			cm.ȫ������("[������ս] : ���["+cm.getPlayer().getName()+"]��[�����г�20��]�ٻ���[��������]");
			cm.dispose();
			return
		}
        if (cm.getMapId() == 240050400) {
            cm.warp(240040700, 0);
			cm.dispose();
        } else {
            cm.warp(240040700, 0);
	 cm.����Ʒ(5253004,1);		cm.dispose();
        }
		cm.Gaincharacterz("" + cm.getPlayer().id + "", 201, -cm.Getcharacterz("" + cm.getPlayer().id + "", 201));
        cm.dispose();
    }
	}
}