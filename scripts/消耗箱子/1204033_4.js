/*
 ZEVMSð�յ�(079)��Ϸ����˽ű�
 ���ͣ�װ����ħ������
 ʱ�䣺2018-08-09
 ���ߣ�ZEV�����ͷſ�
 
 ��ʾ��ֻ�ܸ��²��Ϻͳɹ����������������޸�
 
 */
//��ħ���Ͳ鿴����˺������
//���ͣ�����ֵ������ֵ�����ָ�
var fuMoData = [
    [1, 8, 8, 1],
	[2, 8, 8, 1],
	[3, 8, 8, 1],
	[4, 8, 8, 1],
    [5, 8, 8, 1],
    [6, 8, 8, 1],
    [7, 8, 8, 1],
    [8, 8, 8, 1],
	[9, 8, 8, 1],
	[10, 800, 800, 1],
	[21, 8, 8, 1],
	[22, 80, 80, 1],
	[23, 8, 8, 1],
	[24, 8, 8, 1],
	[31, 8, 8, 1],
	[32, 8, 8, 1],
	[33, 8, 8, 1],
	[34, 8, 8, 1],
	[100, 8, 8, 1],
	[200, 8, 8, 1],
	[300, 8, 8, 1],
	[301, 8, 8, 1],
	[302, 8, 8, 1],
	[400, 8, 8, 1],
	[401, 8, 8, 1],
	[500, 80, 80, 1],
	[501, 80, 80, 1],
	[502, 800, 800, 1],
	[503, 8, 8, 1],
];
/************************************/
//��ħ�ɹ�������
var һ�׸�ħ�ɹ��� = 70;//%
var ���׸�ħ�ɹ��� = 70;//%
var ���׸�ħ�ɹ��� = 70;//%
/************************************/
function rd(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}
/************************************/
function getFuMoType() {
    var tarr = [];

    for (var i = 0; i < fuMoData.length; i++) {
        var count = fuMoData[i][3];
        for (var j = 1; j <= count; j++) {
            tarr.push(fuMoData[i]);
        }
    }

    var i = rd(1, tarr.length) - 1;
    return tarr[i][0];
}
/************************************/
function getFuMoValue(fuMoType) {
    for (var i = 0; i < fuMoData.length; i++) {
        var arr = fuMoData[i];
        var fmType = arr[0];
        var lowVal = arr[1];
        var highVal = arr[2];
        if (fmType == fuMoType) {
            if (lowVal == highVal) { 
                return lowVal;
            } else {
                return rd(lowVal, highVal);
            }
        }
    }
    return 0;
}
/************************************/
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var status;
/************************************/
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
	cm.gainItem(2022336, -1);
    if (selection == 0) {
        var txt1 = '   #e#d��ѡ����Ҫ��ħ��װ������ħ���ֵ�Ч�������#n#k\r\n                ��#r�������ӹ̶�8%#k��\r\n\r\n';
        var txt2 = '';
        var inv = cm.getInventory(-1);
        txt2 += "\r\n#dѡ��ħװ��������������������������������������������#k";
        var ñ�� = inv.getItem(-1);
        var ñ��ID;
        if (ñ�� != null)
            ñ��ID = ñ��.getItemId();
        if (ñ��ID > 0) {
            txt2 += "\r\n#L10101##i" + ñ��ID + "# #b#t" + ñ��ID + "##k  �ɸ�ħ: #r" + cm.��ѯ����װ���ɸ�ħ��(-1) + "#k / �Ѵ��: #r" + cm.��ѯ����װ���Ѵ����(-1) + "#k#l";
        }
        var ���� = inv.getItem(-5);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10105##i" + ����ID + "# #b#t" + ����ID + "##k  �ɸ�ħ: #r" + cm.��ѯ����װ���ɸ�ħ��(-5) + "#k / �Ѵ��: #r" + cm.��ѯ����װ���Ѵ����(-5) + "#k#l";
        }
        var ���� = inv.getItem(-6);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10106##i" + ����ID + "# #b#t" + ����ID + "##k  �ɸ�ħ: #r" + cm.��ѯ����װ���ɸ�ħ��(-6) + "#k / �Ѵ��: #r" + cm.��ѯ����װ���Ѵ����(-6) + "#k#l";
        }
        var Ь�� = inv.getItem(-7);
        var Ь��ID;
        if (Ь�� != null)
            Ь��ID = Ь��.getItemId();
        if (Ь��ID > 0) {
            txt2 += "\r\n#L10107##i" + Ь��ID + "# #b#t" + Ь��ID + "##k  �ɸ�ħ: #r" + cm.��ѯ����װ���ɸ�ħ��(-7) + "#k / �Ѵ��: #r" + cm.��ѯ����װ���Ѵ����(-7) + "#k#l";
        }
        var ���� = inv.getItem(-8);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10108##i" + ����ID + "# #b#t" + ����ID + "##k  �ɸ�ħ: #r" + cm.��ѯ����װ���ɸ�ħ��(-8) + "#k / �Ѵ��: #r" + cm.��ѯ����װ���Ѵ����(-8) + "#k#l";
        }
        var ���� = inv.getItem(-9);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10109##i" + ����ID + "# #b#t" + ����ID + "##k  �ɸ�ħ: #r" + cm.��ѯ����װ���ɸ�ħ��(-9) + "#k / �Ѵ��: #r" + cm.��ѯ����װ���Ѵ����(-9) + "#k#l";
        }
        var ���� = inv.getItem(-11);
        var ����ID;
        if (���� != null)
            ����ID = ����.getItemId();
        if (����ID > 0) {
            txt2 += "\r\n#L10111##i" + ����ID + "# #b#t" + ����ID + "##k  �ɸ�ħ: #r" + cm.��ѯ����װ���ɸ�ħ��(-11) + "#k / �Ѵ��: #r" + cm.��ѯ����װ���Ѵ����(-11) + "#k#l";
        }

        cm.sendNext(txt1 + txt2);
    } else if (selection == 10101) {
        var x = -1;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.��ѯ����װ���Ѵ����(x) == 0) {
            cm.sendNext(" ���Ƚ� #v" + ID + "# #t" + ID + "# ��ף�");
            return;
        }

        var r = Math.ceil(Math.random() * 100);
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 3) {
            if (r <= һ�׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 2) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 1) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        }
    } else if (selection == 10105) {
        var x = -5;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.��ѯ����װ���Ѵ����(x) == 0) {
            cm.sendNext(" ���Ƚ� #v" + ID + "# #t" + ID + "# ��ף�");
            return;
        }
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# ���ܸ�ħ�ˣ�");
            return;
        }
        if (cm.�жϽ��() < ��� || cm.�жϵ�ȯ() < ��ȯ) {
            cm.sendNext("��Ҫ�������ò���!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k ��Ҫ #r" + req[i][1] + "#k ��");
                cm.dispose();
                return;
            }
        }
        cm.�ս��(���);
        cm.�յ�ȯ(��ȯ);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 3) {
            if (r <= һ�׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 2) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 1) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        }
    } else if (selection == 10106) {
        var x = -6;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.��ѯ����װ���Ѵ����(x) == 0) {
            cm.sendNext(" ���Ƚ� #v" + ID + "# #t" + ID + "# ��ף�");
            return;
        }
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# ���ܸ�ħ�ˣ�");
            return;
        }
        if (cm.�жϽ��() < ��� || cm.�жϵ�ȯ() < ��ȯ) {
            cm.sendNext("��Ҫ�������ò���!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k ��Ҫ #r" + req[i][1] + "#k ��");
                cm.dispose();
                return;
            }
        }
        cm.�ս��(���);
        cm.�յ�ȯ(��ȯ);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 3) {
            if (r <= һ�׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 2) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 1) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        }
    } else if (selection == 10107) {
        var x = -7;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.��ѯ����װ���Ѵ����(x) == 0) {
            cm.sendNext(" ���Ƚ� #v" + ID + "# #t" + ID + "# ��ף�");
            return;
        }
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# ���ܸ�ħ�ˣ�");
            return;
        }
        if (cm.�жϽ��() < ��� || cm.�жϵ�ȯ() < ��ȯ) {
            cm.sendNext("��Ҫ�������ò���!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k ��Ҫ #r" + req[i][1] + "#k ��");
                cm.dispose();
                return;
            }
        }
        cm.�ս��(���);
        cm.�յ�ȯ(��ȯ);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 3) {
            if (r <= һ�׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 2) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 1) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        }
    } else if (selection == 10108) {
        var x = -8;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.��ѯ����װ���Ѵ����(x) == 0) {
            cm.sendNext(" ���Ƚ� #v" + ID + "# #t" + ID + "# ��ף�");
            return;
        }
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# ���ܸ�ħ�ˣ�");
            return;
        }
        if (cm.�жϽ��() < ��� || cm.�жϵ�ȯ() < ��ȯ) {
            cm.sendNext("��Ҫ�������ò���!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k ��Ҫ #r" + req[i][1] + "#k ��");
                cm.dispose();
                return;
            }
        }
        cm.�ս��(���);
        cm.�յ�ȯ(��ȯ);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 3) {
            if (r <= һ�׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 2) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 1) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        }
    } else if (selection == 10109) {
        var x = -9;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.��ѯ����װ���Ѵ����(x) == 0) {
            cm.sendNext(" ���Ƚ� #v" + ID + "# #t" + ID + "# ��ף�");
            return;
        }
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# ���ܸ�ħ�ˣ�");
            return;
        }
        if (cm.�жϽ��() < ��� || cm.�жϵ�ȯ() < ��ȯ) {
            cm.sendNext("��Ҫ�������ò���!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k ��Ҫ #r" + req[i][1] + "#k ��");
                cm.dispose();
                return;
            }
        }
        cm.�ս��(���);
        cm.�յ�ȯ(��ȯ);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 3) {
            if (r <= һ�׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 2) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 1) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        }
    } else if (selection == 10111) {
        var x = -11;
        var inv = cm.getInventory(-1);
        var AB = inv.getItem(x);
        if (AB != null)
            ID = AB.getItemId();
        if (cm.��ѯ����װ���Ѵ����(x) == 0) {
            cm.sendNext(" ���Ƚ� #v" + ID + "# #t" + ID + "# ��ף�");
            return;
        }
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 0) {
            cm.sendNext(" #v" + ID + "# #t" + ID + "# ���ܸ�ħ�ˣ�");
            return;
        }
        if (cm.�жϽ��() < ��� || cm.�жϵ�ȯ() < ��ȯ) {
            cm.sendNext("��Ҫ�������ò���!");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#i" + req[i][0] + "#  #b#t" + req[i][0] + "##k ��Ҫ #r" + req[i][1] + "#k ��");
                cm.dispose();
                return;
            }
        }
        cm.�ս��(���);
        cm.�յ�ȯ(��ȯ);
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        var r = Math.ceil(Math.random() * 100);
        if (cm.��ѯ����װ���ɸ�ħ��(x) == 3) {
            if (r <= һ�׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 2) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        } else if (cm.��ѯ����װ���ɸ�ħ��(x) == 1) {
			if (r <= ���׸�ħ�ɹ���) {
                var fumotype = getFuMoType();
                var fumoval = getFuMoValue(fumotype);
                if (fumoval > 0) {
                    var res = cm.��ħ(x, fumotype, fumoval);
                    cm.sendNext(" #v" + ID + "# ��ħ�ɹ�����ϲ���ˣ�");
                } else {
                    cm.sendNext("��ħʧЧ��");
                }
            } else {
                cm.sendNext(" #v" + ID + "# ��ħʧ�ܡ�");
            }
        }
    } else if (selection == 101) {
    } else if (selection == 101) {
    } else if (selection == 101) {
    }
}