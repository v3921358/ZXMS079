/*
 ZEVMSð�յ�(079)��Ϸ����˽ű�
 ���ͣ�װ����ħ������
 ʱ�䣺2019-01-03
 ���ߣ�ZEV�����ͷſ�
 ��ʾ��ֻ�ܸ��²��Ϻͳɹ����������������޸�
 */

//��д���ϡ����룬����
var req = [
    [4001021, 1]
];
var ��� = 10 * 10000;
var ��ȯ = 0;

//��ϴ�ɹ�������
var ��ϴ�ɹ��� = 5;

var status;
var fee = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var MC = cm.getServerName();
    var ��� = cm.getChar().getName();
    if (selection == 0) {
        var txt1 = '#r#e����ϴ���ĸ���λ�ã����ѡ���᲻���档#k#n\r\n';
        var txt2 = '';
        var inv = cm.getInventory(-1);
        txt2 += "#d������ϴλ�ã� ��ǰ��ȷ��ϴ #r" + cm.getPlayer().��ϴ() + "#k ��#k\r\n";
        txt2 += " #L1##b�ӿ�λ#l #L2#����λ#l#k\r\n\r\n";
        txt2 += "#d��ϴ������ϣ�#k\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            txt2 += "    #i" + req[ii][0] + "#  #b#t" + req[ii][0] + "##k [" + req[ii][1] + " / #r#c " + req[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                txt2 += "";
            }
        }
        if (��� > 0 || ��ȯ > 0) {
            txt2 += "#d��ϴ������ã�#k\r\n";
            if (��� > 0) {
                txt2 += "    #v5200000##b  ��� #k[" + ��� + " / #r" + cm.�жϽ��() + "#k]\r\n";
            }
            if (��ȯ > 0) {
                txt2 += "    #v5440000##b  ��ȯ #k[" + ��ȯ + " / #r" + cm.�жϵ�ȯ() + "#k]\r\n";
            }
        }
        txt2 += "\r\n#dѡ����ϴװ����#k";
        var ñ�� = inv.getItem(-1);
        var ñ��ID;
        if (ñ�� != null)
            ñ��ID = ñ��.getItemId();
        if (ñ��ID > 0) {
            txt2 += "\r\n#L10201#" + cm.��ʾ��Ʒ(ñ��ID) + "#k#l";
        }
        var ���� = inv.getItem(-2);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10202#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-3);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10203#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-4);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10204#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-5);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10205#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-6);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10206#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var Ь�� = inv.getItem(-7);
        var Ь��ID;
        if (Ь�� != null)
            Ь��ID = Ь��.getItemId();
        if (Ь��ID > 0) {
            txt2 += "\r\n#L10207#" + cm.��ʾ��Ʒ(Ь��ID) + "#k#l";
        }
        var ���� = inv.getItem(-8);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10208#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-9);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10209#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-11);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10211#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-17);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10217#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        var ���� = inv.getItem(-29);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10229#" + cm.��ʾ��Ʒ(����ID) + "#k#l";
        }
        cm.sendNext(txt1 + txt2);
    } else if (selection == 1) {
        cm.getPlayer().����ϴ();
        cm.�Ի�����();
        cm.��NPC(1032002, 7);
    } else if (selection == 2) {
        if (cm.getPlayer().��ϴ() > 1) {
            cm.getPlayer().����ϴ();
        }
        cm.�Ի�����();
        cm.��NPC(1032002, 7);
    } else if (selection == 10201) {
        ��ϴ(-1);
    } else if (selection == 10202) {
        ��ϴ(-2);
    } else if (selection == 10203) {
        ��ϴ(-3);
    } else if (selection == 10204) {
        ��ϴ(-4);
    } else if (selection == 10205) {
        ��ϴ(-5);
    } else if (selection == 10206) {
        ��ϴ(-6);
    } else if (selection == 10207) {
        ��ϴ(-7);
    } else if (selection == 10208) {
        ��ϴ(-8);
    } else if (selection == 10209) {
        ��ϴ(-9);
    } else if (selection == 10211) {
        ��ϴ(-11);
    } else if (selection == 10217) {
        ��ϴ(-17);
    } else if (selection == 10229) {
        ��ϴ(-29);
    }
}


function ��ϴ(x) {

    var inv = cm.getInventory(-1);
    var AB = inv.getItem(x);
    if (AB != null) {
        ID = AB.getItemId();
    }
    if (cm.�жϽ��() < ��� || cm.�жϵ�ȯ() < ��ȯ) {
        cm.sendNext("��Ҫ�ķ��ò���!");
        cm.�Ի�����();
        return;
    }
    for (var i = 0; i < req.length; i++) {
        if (!cm.haveItem(req[i][0], req[i][1])) {
            cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k ��Ҫ #r" + req[i][1] + "#k ��");
            cm.�Ի�����();
            return;
        }
    }
    for (var i = 0; i < req.length; i++) {
        cm.gainItem(req[i][0], -req[i][1]);
    }
    cm.�ս��(���);
    cm.�յ�ȯ(��ȯ);
    if (cm.�ٷ���(��ϴ�ɹ���)) {
        cm.��ϴ����װ����ħ(x, cm.getPlayer().��ϴ��());
        cm.sendNext("��ϲ�㣬" + cm.��ʾ��Ʒ(ID) + " ��ϴ�ɹ�~");
    } else {
        cm.sendNext("���ź���" + cm.��ʾ��Ʒ(ID) + " ��ϴʧ��~");
    }
    cm.�Ի�����();
}