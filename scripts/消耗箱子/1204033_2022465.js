/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������1
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

function action() {
	var ��� = cm.�����(25);
	switch (���) {
		case 1:
			cm.����Ʒ(4006000,cm.�����(10));
			cm.˵������("��ϲ���� #bħ��ʯ#k �����");
			break;
		case 2:
			cm.����Ʒ(4006001,cm.�����(10));
			cm.˵������("��ϲ���� #b�ٻ�#k �����");
			break;
		case 3:
			cm.����Ʒ(4004000,cm.�����(5));
			cm.����Ʒ(4004001,cm.�����(5));
			cm.����Ʒ(4004002,cm.�����(5));
			cm.����Ʒ(4004003,cm.�����(5));
			cm.����Ʒ(4004004,cm.�����(5));
			cm.˵������("��ϲ���� #bĸ��ʯ#k �����");
			break;
		case 4:
			cm.����Ʒ(4001009,cm.�����(3));
			cm.˵������("��ϲ���� #b��Ƥ��#k �����");
			break;
		case 5:
			cm.����Ʒ(4001010,cm.�����(3));
			cm.˵������("��ϲ���� #b��Ƥ��#k �����");
			break;
		case 6:
			cm.����Ʒ(4001011,cm.�����(3));
			cm.˵������("��ϲ���� #b��Ƥ��#k �����");
			break;
		case 7:
			cm.����Ʒ(4001012,cm.�����(3));
			cm.˵������("��ϲ���� #b��Ƥ��#k �����");
			break;
		case 8:
			cm.����Ʒ(4001013,cm.�����(3));
			cm.˵������("��ϲ���� #b��Ƥ��#k �����");
			break;
		case 9:
			cm.����Ʒ(4001014,cm.�����(3));
			cm.˵������("��ϲ���� #b��Ƥ��#k �����");
			break;
		case 10:
			cm.��������(cm.�����(3));
			cm.˵������("��ϲ���� #b������#k �����");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
			cm.�����(cm.�����(100000));
			cm.˵������("��ϲ���� #b���#k �����");
			break;
		case 21:
			cm.������(cm.�����(100000));
			cm.˵������("��ϲ���� #b����#k �����");
			break;
		case 22:
			cm.����ȯ(cm.�����(10000));
			cm.˵������("��ϲ���� #b��ȯ#k �����");
			break;
		case 23:
			cm.������(cm.�����(5));
			cm.˵������("��ϲ���� #b����#k �����");
			break;	
		default:
			cm.˵������("����һ�������ӡ�");
			break;
	}
	cm.����Ʒ(2022465,1);
	cm.�Ի�����();
}