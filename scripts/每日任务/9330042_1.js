/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű���ÿ������
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

    if (cm.getBossLog("paoshang") >= 10) {
        var ÿ���ռ� = 10;
    } else {
        var ÿ���ռ� = cm.getBossLog("paoshang");
    }//10

    if (cm.getBossLog("����") >= 10) {
        var ÿ�յ��� = 10;
    } else {
        var ÿ�յ��� = cm.getBossLog("����");
    }//10

    if (cm.��ѯ��������ʱ��() >= 300) {
        var ÿ������ = 300;
    } else {
        var ÿ������ = cm.��ѯ��������ʱ��();
    }//10

    if (cm.getBossLog("������������ȡ") >= 1) {
        var ÿ������ = 1;
    } else {
        var ÿ������ = cm.getBossLog("������������ȡ");
    }//5

    if (ÿ�ո���() >= 5) {
        var ÿ�ո���2 = 5;
    } else {
        var ÿ�ո���2 = ÿ�ո���();
    }//5

    if (cm.getBossLog("�ճ��̳ǹ���") >= 1) {
        var �̳ǹ��� = 1;
    } else {
        var �̳ǹ��� = cm.getBossLog("�ճ��̳ǹ���");
    }//1

    if (cm.getBossLog("ÿ���ͻ�") >= 2) {
        var ÿ���ͻ� = 2;
    } else {
        var ÿ���ͻ� = cm.getBossLog("ÿ���ͻ�");
    }//2

    if (cm.getBossLog("ÿ�մ���") >= 5) {
        var ÿ�մ��� = 5;
    } else {
        var ÿ�մ��� = cm.getBossLog("ÿ�մ���");
    }//5

    if (cm.getBossLog("ÿ�ո�ħ") >= 2) {
        var ÿ�ո�ħ = 2;
    } else {
        var ÿ�ո�ħ = cm.getBossLog("ÿ�ո�ħ");
    }//2

    if (cm.getBossLog("ÿ�մ��") >= 1) {
        var ÿ�մ�� = 1;
    } else {
        var ÿ�մ�� = cm.getBossLog("ÿ�մ��");
    }//1

    if (cm.getBossLog("ÿ�շֽ�") >= 1) {
        var ÿ�շֽ� = 1;
    } else {
        var ÿ�շֽ� = cm.getBossLog("ÿ�շֽ�");
    }//1
    if (cm.getBossLog("�鿴�ٿ�") >= 1) {
        var �鿴�ٿ� = 1;
    } else {
        var �鿴�ٿ� = cm.getBossLog("�鿴�ٿ�");
    }//1
    if (cm.getBossLog("ÿ��ͨ��") >= 2) {
        var ÿ��ͨ�� = 2;
    } else {
        var ÿ��ͨ�� = cm.getBossLog("ÿ��ͨ��");
    }//1

    if (cm.getBossLog("��ɱ�߼�����") >= 2) {
        var ��ɱ�߼����� = 2;
    } else {
        var ��ɱ�߼����� = cm.getBossLog("��ɱ�߼�����");
    }//2
    if (cm.getBossLog("ʹ�ú��") >= 1) {
        var ʹ�ú�� = 1;
    } else {
        var ʹ�ú�� = cm.getBossLog("ʹ�ú��");
    }
    if (cm.getBossLog("���ֶ���") >= 5) {
        var ���ֶ��� = 5;
    } else {
        var ���ֶ��� = cm.getBossLog("���ֶ���");
    }
    if (cm.getBossLog("�ڿ�") >= 4) {
        var ÿ���ڿ� = 4;
    } else {
        var ÿ���ڿ� = cm.getBossLog("�ڿ�");
    }

    //10+10+10+5+5+1+2+5+2+1+1=
    var ÿ�ջ�Ծ = ÿ���ڿ� + ���ֶ��� + ʹ�ú�� + ÿ���ͻ� * 5 + �̳ǹ��� + ÿ�ո���2 + ÿ������ * 5 + (ÿ������ / 30) + ÿ�յ��� + ÿ���ռ� + ÿ�մ��� + ÿ�մ�� + ÿ�շֽ� + ÿ�ո�ħ + �鿴�ٿ� + ÿ��ͨ�� + ��ɱ�߼�����;
    if (status == 0) {
        var selStr = "   " + �� + " " + �� + "  " + �� + "  " + �� + " #r#e < ÿ������ > #k#n " + �� + "  " + �� + "  " + �� + " " + �� + "\r\n\r\n";
        selStr += "\t\t\t   \t#d��Ծ��:( 75 / #b" + ÿ�ջ�Ծ.toFixed(0 ) + "#k )#n\r\n";
		selStr += "\t\t#L0##b����#l\r\n";
        if (cm.getBossLog("��Ծ��1") <= 0) {
            selStr += "\t\t#L1##b��ȡ #r10#b ��Ծ�Ƚ��� #r2000W#b ���#l\r\n";
        }else{
			selStr += "\r\n\t\t   #b��ȡ #r10#b ��Ծ�Ƚ��� #r2000W#b ���#k[#d���#k]\r\n";
		}
		
        if (cm.getBossLog("��Ծ��2") <= 0) {
            selStr += "\t\t#L2##b��ȡ #r20#b ��Ծ�Ƚ��� #r5W#b ��ȯ#l\r\n";
        }else{
			selStr += "\t\t   #b��ȡ #r20#b ��Ծ�Ƚ��� #r5W#b ��ȯ#k[#d���#k]\r\n";
		}
		
        if (cm.getBossLog("��Ծ��3") <= 0) {
            selStr += "\t\t#L3##b��ȡ #r30#b ��Ծ�Ƚ��� #r3 #bAP#l\r\n";
        }else{
			selStr += "\t\t   #b��ȡ #r30#b ��Ծ�Ƚ��� #r3 #bAP#k[#d���#k]\r\n";
		}
		
        if (cm.getBossLog("��Ծ��4") <= 0) {
            selStr += "\t\t#L4##b��ȡ #r40#b ��Ծ�Ƚ��� #r30 #b#z4000463##l\r\n";
        }else{
			selStr += "\t\t   #b��ȡ #r40#b ��Ծ�Ƚ��� #r30 #b#z4000463##k[#d���#k]\r\n";
		}
		
        if (cm.getBossLog("��Ծ��5") <= 0) {
            selStr += "\t\t#L5##b��ȡ #r50#b ��Ծ�Ƚ��� #r50 #b#z4000463##l\r\n";
        }else{
			selStr += "\t\t   #b��ȡ #r50#b ��Ծ�Ƚ��� #r50 #b#z4000463##k[#d���#k]\r\n";
		}
		
        if (cm.getBossLog("��Ծ��6") <= 0) {
            selStr += "\t\t#L6##b��ȡ #r65#b ��Ծ�Ƚ��� #r������ #bx 2#l\r\n";
        }else{
			selStr += "\t\t   #b��ȡ #r65#b ��Ծ�Ƚ��� #r������ #bx 2#k[#d���#k]\r\n";
		}
		
        cm.˵������(selStr);
    } else if (status == 1) {

            switch (selection) {
                case 6:
                    if (ÿ�ջ�Ծ > 64) {
                        cm.setBossRankCount9("������", 2);
                        cm.setBossLog("��Ծ��6");
                    } else {
                        cm.˵������("��Ծ�Ȳ�����");
                    }
                    cm.�Ի�����();
                    break;
                case 5:
                    if (ÿ�ջ�Ծ >= 50) {
                        cm.����Ʒ(4000463, 50);
                        cm.setBossLog("��Ծ��5");
                    } else {
                        cm.˵������("��Ծ�Ȳ�����");
                    }
                    cm.�Ի�����();
                    break;
                case 4:
                    if (ÿ�ջ�Ծ >= 40) {
                        cm.����Ʒ(4000463, 30);
                        cm.setBossLog("��Ծ��4");
                    } else {
                        cm.˵������("��Ծ�Ȳ�����");
                    }
                    cm.�Ի�����();
                    break;
                case 3:
                    if (ÿ�ջ�Ծ >= 30) {
                        cm.��������(3);
                        cm.setBossLog("��Ծ��3");
                    } else {
                        cm.˵������("��Ծ�Ȳ�����");
                    }
                    cm.�Ի�����();
                    break;
                case 2:
                    if (ÿ�ջ�Ծ >= 20) {
                        cm.����ȯ(5 * 10000);
                        cm.setBossLog("��Ծ��2");
                    } else {
                        cm.˵������("��Ծ�Ȳ�����");
                    }
                    cm.�Ի�����();
                    break;
                case 1:
                    if (ÿ�ջ�Ծ >= 10) {
                        cm.�����(20 * 1000000);
                        cm.setBossLog("��Ծ��1");
                    } else {
                        cm.˵������("��Ծ�Ȳ�����");
                    }
                    cm.�Ի�����();
                    break;
                default:
                    cm.�Ի�����();
					cm.��NPC(9330042,0);
                    break;
                }
        
    }
}

function ÿ�ո���() {
    var result = 0;
    result += cm.getBossLog("��������");
    result += cm.getBossLog("����ɭ��");
    result += cm.getBossLog("����");
    result += cm.getBossLog("�����");
    result += cm.getBossLog("Ů����");
    result += cm.getBossLog("������");
    return result;
}