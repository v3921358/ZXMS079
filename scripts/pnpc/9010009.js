/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű����ͻ�
 */
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
function ��һ�׶ν���() {
	var �ȼ� = cm.getPlayer().getLevel();
	//cm.������(50);
    cm.����ȯ(20000);
	if(�ȼ�>=120){
		cm.����Ʒ(4000463, cm.�����(20));
	}
    cm.������(�ȼ� * 100000);
	cm.setBossLog("ÿ���ͻ�");
}

function �ڶ��׶ν���() {
	var �ȼ� = cm.getPlayer().getLevel();
	//cm.������(50);
    cm.����ȯ(20000);
	if(�ȼ�>=120){
		cm.����Ʒ(4000463, cm.�����(20));
	}
    cm.������(�ȼ� * 100000);
	cm.setBossLog("ÿ���ͻ�");
}

function �����׶ν���() {
	var �ȼ� = cm.getPlayer().getLevel();
	//cm.������(50);
	cm.����ȯ(20000);
	if(�ȼ�>=120){
		cm.����Ʒ(4000463, cm.�����(20));
	}
    cm.������(�ȼ� * 100000);
}

function ���Ľ׶ν���() {
	var �ȼ� = cm.getPlayer().getLevel();
	//cm.������(50);
	cm.����ȯ(20000);
	if(�ȼ�>=120){
		cm.����Ʒ(4000463, cm.�����(50));
	}
    cm.������(�ȼ� * 100000);
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
	//���Դ�����õ����ѣ�ÿ��12��׼����ʼ�û��
    if (hour < 0) {
        cm.˵������("�����ʱ��Ϊ #r12:00#k ֮��");
        cm.�Ի�����();
        return;
    }
    var �ͻ� = cm.�ж�ÿ��ֵ("�ͻ�");
    if (status == 0) {
        var �ı� = "\r\n";
        switch (cm.�жϵ�ͼ()) {
            //����۵�һ�׶ο�ʼ
            case 104000000:
                if (�ͻ� == 0) {
                    �ı� += "	Hi~#b#h ##k����Ҫ����Ұѻ����͵����ִ壬�����ִ���ٽ����Ұɡ�\r\n\r\n";
                    �ı� += "#L1##b��ʼ�ͻ������ִ�#l";
                } else if (�ͻ� == 1) {
                    �ı� += "�ͻ�Ҫ�͵ý�̤ʵ�ص�Ŷ��ȥ���ִ�ɡ�";
                } else {
                    �ı� += "��Ҫ��˳����";
                }
                break;
                //���ִ���ɵ�һ�׶�
            case 100000000:
                �ı� += "	Hi~#b#h ##k���аѻ����͹�����\r\n\r\n";
                if (cm.�жϵ�һ�׶��Ƿ����() == 9 && �ͻ� == 1) {
                    �ı� += "	#L2##b��ȡ��һ�׶��ͻ�����#l";
                } else if (cm.�жϵ�һ�׶��Ƿ����() == 9 && �ͻ� == 2) {
                    �ı� += "	#L10##b��ʼ�ͻ���ħ������#l";
                } else if (cm.�жϵ�һ�׶��Ƿ����() != 9) {
                    �ı� += "	�����Ҫһ·�߹������а�����Ҫ��̤ʵ�ز��С�\r\n\r\n";
                } else if (�ͻ� == 3) {
                    �ı� += "	�ѻ����͵�#bħ������#k�ɡ�\r\n\r\n";
                }

                break;
                //ħ��ɭ����ɵڶ��׶�
            case 101000000:
                �ı� += "	Hi~#b#h ##k���аѻ����͹�����\r\n\r\n";
                if (cm.�жϵڶ��׶��Ƿ����() == 7 && �ͻ� == 3) {
                    �ı� += "	#L12##b��ȡ�ڶ��׶��ͻ�����#l";
                } else if (cm.�жϵڶ��׶��Ƿ����() == 7 && �ͻ� == 4) {
                    �ı� += "	#L20##b��ʼ�ͻ�����ʿ����#l";
                } else if (cm.�жϵڶ��׶��Ƿ����() != 7) {
                    �ı� += "	�����Ҫһ·�߹������а�����Ҫ��̤ʵ�ز��С�\r\n\r\n";
                } else if (�ͻ� == 5) {
                    �ı� += "	�ѻ����͵�#b��ʿ����#k�ɡ�\r\n\r\n";
                }
                break;
                //��ʿ������ɵ����׶�
            case 102000000:
                �ı� += "	Hi~#b#h ##k���аѻ����͹�����\r\n\r\n";
                if (cm.�жϵ����׶��Ƿ����() == 10 && �ͻ� == 5) {
                    �ı� += "	#L22##b��ȡ�����׶��ͻ�����#l";
                } else if (cm.�жϵ����׶��Ƿ����() == 10 && �ͻ� == 6) {
                    �ı� += "	#L30##b��ʼ�ͻ�����������#l";
                } else if (cm.�жϵ����׶��Ƿ����() != 10) {
                    �ı� += "	�����Ҫһ·�߹������а�����Ҫ��̤ʵ�ز��С�\r\n\r\n";
                } else if (�ͻ� == 7) {
                    �ı� += "	�ѻ����͵�#b��������#k�ɡ�\r\n\r\n";
                }
                break;
                break;
                //����������ɵ��Ľ׶�
            case 103000000:
                �ı� += "	Hi~#b#h ##k���аѻ����͹�����\r\n\r\n";
                if (cm.�жϵ��Ľ׶��Ƿ����() == 6 && �ͻ� == 7) {
                    �ı� += "	#L32##b��ȡ�����ս׶��ͻ�����#l";
                } else if (cm.�жϵ��Ľ׶��Ƿ����() == 6) {
                    �ı� += "	������Ѿ������˻�Ŷ�����������ɡ�\r\n\r\n";
                } else if (cm.�жϵ��Ľ׶��Ƿ����() != 6) {
                    �ı� += "	�����Ҫһ·�߹������а�����Ҫ��̤ʵ�ز��С�\r\n\r\n";
                }
                break;
            default:
                break;
        }
        cm.�Ƿ�˵������(�ı�);
    } else if (status == 1) {
        switch (selection) {
            case 2:
                ��һ�׶ν���();
                ���֮��();
                break;
            case 12:
                �ڶ��׶ν���();
                ���֮��();
                break;
            case 22:

                �����׶ν���();
                ���֮��();
                break;
            case 32:
                ���Ľ׶ν���();
                ���֮��();
                break;
                //��һ�׶ο�ʼ
            case 1:
                if (�ͻ� <= 0) {
                    cm.����ÿ��ֵ("�ͻ�");
                    cm.˵������("��Ѱѻ����͵�#b���ִ�#k���Ұɡ�");
                } else {
                    cm.˵������("��Ѱѻ����͵�#b���ִ�#k���Ұɣ��㻹û��ʼ������");
                }
                cm.�Ի�����();
                break;
                //�ڶ��׶ο�ʼ
            case 10:
                if (�ͻ� == 2) {
                    cm.����ÿ��ֵ("�ͻ�");
                    cm.˵������("��Ѱѻ����͵�#bħ������#k���Ұɡ�");
                } else {
                    cm.˵������("��Ѱѻ����͵�#bħ������#k���Ұɣ��㻹û��ʼ������");
                }
                cm.�Ի�����();
                break;
                //�����׶ο�ʼ
            case 20:
                if (�ͻ� == 4) {
                    cm.����ÿ��ֵ("�ͻ�");
                    cm.˵������("��Ѱѻ����͵�#b��ʿ����#k���Ұɡ�");
                } else {
                    cm.˵������("��Ѱѻ����͵�#b��ʿ����#k���Ұɣ��㻹û��ʼ������");
                }
                cm.�Ի�����();
                break;
                //���Ľ׶ο�ʼ
            case 30:
                if (�ͻ� == 6) {
                    cm.����ÿ��ֵ("�ͻ�");
                    cm.˵������("��Ѱѻ����͵�#b��������#k���Ұɡ�");
                } else {
                    cm.˵������("��Ѱѻ����͵�#b��������#k���Ұɣ��㻹û��ʼ������");
                }
                cm.�Ի�����();
                break;
            default:
				cm.�Ի�����();
                break;
        }
    }
}

function ���֮��() {
    switch (cm.�жϵ�ͼ()) {
        case 100000000:
            cm.˵������("     ��ϲ����ȡ��#r����� �� ���ִ�#k ����������Կ�ʼ�ڶ��׶��ͻ�Ŷ��");
            break;
        case 101000000:
            cm.˵������("     ��ϲ����ȡ��#r���ִ� �� ħ������#k ����������Կ�ʼ�����׶��ͻ�Ŷ��");
            break;
        case 102000000:
            cm.˵������("     ��ϲ����ȡ��#rħ������ �� ��ʿ����#k ����������Կ�ʼ���Ľ׶��ͻ�Ŷ��");
            break;
        case 103000000:
            cm.˵������("     ��ϲ����ȡ��#r��ʿ���� �� ��������#k ����������Կ�ʼ���Ľ׶��ͻ�Ŷ��");
            break;
        default:
            break;
    }
    cm.����ÿ��ֵ("�ͻ�");
	cm.�Ի�����();
}