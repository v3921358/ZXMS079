/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű���������ս
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
    if (cm.getPlayer().getClient().getChannel() == 4) {
        cm.˵������("������ #b1��2��3#k Ƶ����ս��");
        cm.�Ի�����();
    } else if (status == 0) {
        var selStr = "\r\n";
        if (cm.�ж�ָ����ͼ�������(240060200) == 0 && cm.�ж�ָ����ͼ�������(240060100) == 0 && cm.�ж�ָ����ͼ�������(240060000) == 0) {  
                            selStr += " #L13##r��ʼԶ������#k#l\r\n";             
        }else{
			cm.˵������("�Ѿ�������Զ�������������ͨ���ط�boss����\r\n#L21#�ط�BOSS#l");
		}
        cm.˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 13:
                cm.getMap(240060000).resetFully();
                cm.getMap(240060100).resetFully();
                cm.getMap(240060200).resetFully();
                //cm.Gaincharacterz("����Զ���Ӷӳ�", 202, 1);
                cm.��ʼ����Զ��(3, 240060000);
				//cm.����Ʒ(5253004, 1);
				cm.ָ����ͼ�ٻ�����(8810024, 240060000, 890, 230);
                cm.ָ����ͼ�ٻ�����(8810025, 240060100, -360, 230);
				cm.warp(240060000, 0);
				cm.�Ի�����();
                break;
			case 21:
                cm.warp(240060000, 0);
                cm.�Ի�����();
                break;
        }
    }
} 