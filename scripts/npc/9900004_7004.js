var weapon = [1302297, 1312173, 1322223, 1332247, 1372195, 1382231, 1402220, 1412152, 1422158, 1432187,1442242,1452226,1462213,1472235,1482189,1492199];
var req = [
    [4000487, 0]
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d��Ҫ:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##t" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#r        \r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r�����ռ䲻��");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b����û��#r#i" + req[i][0] + "##t" + req[i][0] + "#x" + req[i][1] + "");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b�Ƿ�Ҫ��������#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
        cm.sendNext("#b�Ѿ����������� #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}