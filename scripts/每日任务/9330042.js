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
		selStr += "    #L0##b����#n#l\r\n";
        selStr += "    #L1##b��ȡ��Ծ����#l\r\n    #L2##bÿ������  +��#r��ѭ����ɣ����Ӿ��� 10W#b��#l\r\n";
        selStr += "    #L1001##dÿ������#n:#B" + (ÿ������ / 3) + "#[ 300 / " + ÿ������ + " ] #b+" + (ÿ������ / 30).toFixed(0) + "#k#l\r\n";
        selStr += "    #L1002##dÿ���ռ�#n:#B" + (10 * ÿ���ռ�) + "#[ 10 / " + ÿ���ռ� + " ] #b+" + ÿ���ռ� + "#k#l\r\n";
        selStr += "    #L1003##dÿ�յ���#n:#B" + (10 * ÿ�յ���) + "#[ 10 / " + ÿ�յ��� + " ] #b+" + ÿ�յ��� + "#k#l\r\n";
        selStr += "    #L1004##dÿ���ͻ�#n:#B" + (ÿ���ͻ� * 50) + "#[ 2 / " + ÿ���ͻ� + " ] #b+" + ÿ���ͻ� * 5 + "#k#l\r\n";
        selStr += "    #L1005##dÿ������#n:#B" + ÿ������ * 100 + "#[ 1 / " + ÿ������ + " ] #b+" + ÿ������ * 5 + "#k#l\r\n";
        selStr += "    #L1006##dÿ�ո���#n:#B" + (ÿ�ո���2 * 20) + "#[ 5 / " + ÿ�ո���2 + " ] #b+" + ÿ�ո���2 + "#k#l\r\n";
        selStr += "    #L1007##dÿ�մ���#n:#B" + (ÿ�մ��� * 20) + "#[ 5 / " + ÿ�մ��� + " ] #b+" + ÿ�մ��� + "#k#l\r\n";
        selStr += "    #L1008##dÿ�ո�ħ#n:#B" + (ÿ�ո�ħ * 50) + "#[ 2 / " + ÿ�ո�ħ + " ] #b+" + ÿ�ո�ħ + "#k#l\r\n";
        selStr += "    #L1009##dÿ�մ��#n:#B" + (ÿ�մ�� * 100) + "#[ 1 / " + ÿ�մ�� + " ] #b+" + ÿ�մ�� + "#k#l\r\n";
        selStr += "    #L1010##dÿ�շֽ�#n:#B" + (ÿ�շֽ� * 100) + "#[ 1 / " + ÿ�շֽ� + " ] #b+" + ÿ�շֽ� + "#k#l\r\n";
        selStr += "    #L1011##dÿ���ڿ�#n:#B" + (ÿ���ڿ� * 30) + "#[ 4 / " + ÿ���ڿ� + " ] #b+" + ÿ���ڿ� + "#k#l\r\n";
        selStr += "    #L1012##dÿ��ͨ��#n:#B" + (ÿ��ͨ�� * 50) + "#[ 2 / " + ÿ��ͨ�� + " ] #b+" + ÿ��ͨ�� + "#k#l\r\n";
        selStr += "    #L1013##d���ֶ���#n:#B" + (���ֶ��� * 20) + "#[ 5 / " + ���ֶ��� + " ] #b+" + ���ֶ��� + "#k#l\r\n";
        selStr += "    #L1014##d��ɱ��Ӣ#n:#B" + (��ɱ�߼����� * 50) + "#[ 2 / " + ��ɱ�߼����� + " ] #b+" + ��ɱ�߼����� + "#k#l\r\n";
        selStr += "    #L1015##dʹ�ú��#n:#B" + (ʹ�ú�� * 100) + "#[ 1 / " + ʹ�ú�� + " ] #b+" + ʹ�ú�� + "#k#l\r\n";
        selStr += "    #L1016##d�̳ǹ���#n:#B" + (�̳ǹ��� * 100) + "#[ 1 / " + �̳ǹ��� + " ] #b+" + �̳ǹ��� + "#k#l\r\n";
        selStr += "    #L1017##d�鿴�ٿ�#n:#B" + (�鿴�ٿ� * 100) + "#[ 1 / " + �鿴�ٿ� + " ] #b+" + �鿴�ٿ� + "#k#l\r\n\r\n";
        cm.˵������(selStr);
    } else if (status == 1) {
        if (selection >= 1000) {
            cm.�Ի�����();
            cm.��NPC(9330042, selection);
        } else {
            switch (selection) {
                case 1:
                    cm.�Ի�����();
					cm.��NPC(9330042,1);
                    break;
                default:
                    cm.�Ի�����();
	 
				cm.��NPC(9900004,507);
                    break;
                }
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