/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű���ÿ������
 */
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	
if (status == 0) {
        var selStr = "ȥħ��������#b�׵�#k���е��߸�ħ�����ɻ�ȡ��Ծ�ȡ�";
        cm.˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
			default:
                cm.�Ի�����();
				cm.��NPC(9330042,0);
                break;
        }
    }
}