/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű����ղ��ֲ᡾�桿
 */
importPackage(net.sf.odinms.client);
var status = 0;
var fee;
var a;
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var slot = Array();
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.�Ի�����();
    } else {
        if (mode == 0) {
            status == 0;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            var avail = "";
            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(4).getItem(i) != null) {
                       avail += "#L" + cm.getInventory(4).getItem(i).getItemId() + "# " + cm.��ʾ��Ʒ(cm.getInventory(4).getItem(i).getItemId()) + " x#b #c" + cm.getInventory(4).getItem(i).getItemId() + "##k#l\r\n";
                    
                }
                slot.push(i);
            }
			if(avail==""){
				cm.˵������("��û��������Ʒ���Թ��ס�");
                cm.�Ի�����();
                return;
			}
            cm.sendSimple("ѡ����Ҫ�ύ����Ʒ�ɣ������Թ��׷��ٶ�Ŷ:\r\n#b" + avail);
        } else if (status == 1) {
            itemss = selection;
            cm.sendGetText("��������Ҫ���׵� " + cm.��ʾ��Ʒ(itemss) + " ��������");
        } else {
            fee = cm.getText();
			if(fee==""){
				cm.˵������("��������ȷ��������");
                cm.�Ի�����();
                return;
			}
			if(fee<0){
				cm.˵������("��������ȷ��������");
                cm.�Ի�����();
                return;
			}
			if(fee>2000){
				cm.˵������("һ�����ֻ�ܹ���2000��");
                cm.�Ի�����();
                return;
			}
            if (!cm.�ж���Ʒ����(itemss, fee)) {
                cm.˵������("�㲢û����ô�ࡣ");
                cm.�Ի�����();
                return;
            }
			cm.setBossRankCount("���ִ幱�׵�", fee);
			cm.Gaincharactera("���ִ己�ٶ�",1,fee);
            cm.����Ʒ(itemss, fee);
            cm.˵������("���׳ɹ���");
            cm.�Ի�����();
        }
    }
}