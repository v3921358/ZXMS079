/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű�����Ե
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.�Ի�����();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (cm.getInventory(1).isFull()) {
        cm.˵������("�뱣֤ #bװ����#k ������2��λ�á�");
        cm.�Ի�����();
        return;
    } else if (cm.getInventory(2).isFull()) {
        cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
        cm.�Ի�����();
        return;
    } else if (cm.getInventory(3).isFull()) {
        cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
        cm.�Ի�����();
        return;
    } else if (cm.getInventory(4).isFull()) {
        cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
        cm.�Ի�����();
        return;
    } else if (cm.getInventory(5).isFull()) {
        cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
        cm.�Ի�����();
        return;
    }
    if (status == 0) {
        var selStr = "	  Hi~#b#h ##k������Ե��������ܸ����㹻������Ҫ�ģ��Ҿ͸���һ���һ���ĵ���Ŷ��\r\n";
		
		selStr += " #L1##b�һ� "+cm.��ʾ��Ʒ(3012011)+"#k#l\r\n";
		
	

        cm.˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
			
			case 1:
				if(cm.�ж���Ʒ����(2022028,100)&&cm.�ж���Ʒ����(2022029,100)&&cm.�ж���Ʒ����(2022030,100)){
				   cm.����Ʒ(2022028,100);
				   cm.����Ʒ(2022029,100);
				   cm.����Ʒ(2022030,100);
				   cm.����Ʒ(3012011,1);
				   cm.���˴浵();
				   cm.˵������("��ϲ��ɹ��һ� "+cm.��ʾ��Ʒ(3012011)+"");
				}else{
				   cm.˵������("�һ� "+cm.��ʾ��Ʒ(3012011)+" ��Ҫ \r\n\r\n"+cm.��ʾ��Ʒ(2022028)+" x 100\r\n"+cm.��ʾ��Ʒ(2022029)+" x 100\r\n"+cm.��ʾ��Ʒ(2022030)+" x 100");
				}
                cm.�Ի�����();
                break;
        }
    }
}