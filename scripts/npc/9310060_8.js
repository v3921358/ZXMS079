/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű�����Ե
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
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
        var selStr = "	  Hi~#b#h ##k������Ե���⣬������Ҫ�������𣿲�����������ֻ���ڴ����һ����ʮ�ſ����͸���Ŷ���ǵõ�ʱ��������ȡ��\r\n";
		selStr += " ��ǰ����:#b"+month+"."+day+"#k\r\n";
		selStr += " ��ȡ����:#b2.5 ~ 2.14#k\r\n";
		selStr += " ��ȡ����:#b150��#k\r\n";
		
        selStr += " #L1##r[��������]#b"+cm.��ʾ��Ʒ(3010073)+"#k#l\r\n";
		
	
	

        cm.˵������(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
				/*if(cm.getChar().getName()!="Сz"){
					return;
				}*/
				if(month!=2){
					cm.˵������("���ǻʱ�䣬�޷���ȡ��");
					cm.�Ի�����();
					return;
				}
				if(day <5 || day>14){
					cm.˵������("���ǻʱ�䣬�޷���ȡ��");
					cm.�Ի�����();
					return;
				}
				if(cm.�жϵȼ�()<150){
					cm.˵������("�ȼ��������޷���ȡ��");
					cm.�Ի�����();
					return;
				}
				if(cm.getBossRank("��������1", 2)>0){
					cm.˵������("���Ѿ���ȡ�ˡ�");
					cm.�Ի�����();
					return;
				}
				cm.setBossRankCount("��������1", 1);
				cm.����Ʒ(3010073,1);
				cm.ȫ����ɫ����("[��������] : ��� "+cm.getPlayer().getName()+" �� "+cm.getPlayer().getMap().getMapName()+" ��Ե����ȡ���������� babyƷ���͡�")
				cm.Ⱥ�����Ϣ("[��������] : ��� "+cm.getPlayer().getName()+" �� "+cm.getPlayer().getMap().getMapName()+" ��Ե����ȡ���������� babyƷ���͡�");
                cm.�Ի�����();
                break;
        }
    }
}











