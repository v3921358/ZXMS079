/*
 ZEVMSð�յ�(079)��Ϸ�����
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
    if (status == 0) {
        var selStr = "\t" + �� + "  " + �� + "  " + �� + "  " + �� + " #r#e < ת����¼ > #k#n " + �� + "  " + �� + "  " + �� + "  " + �� + "\r\n\r\n";
		selStr += "\r\n"+cm.��ʾת�˼�¼( cm.getPlayer().�����˺�(),1,0)+"";
        //selStr += "\t#e��ȯת����¼;#n\r\n"+cm.��ʾת�˼�¼( cm.getPlayer().�����˺�(),1,0)+"";
		//selStr += "\t#e���ת����¼;#n\r\n"+cm.��ʾת�˼�¼( cm.getPlayer().�����˺�(),1,1)+"";
        cm.˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 100);
                break;

        }
    }
}