/*
 ZEVMSð�յ�(079)��Ϸ�����
 �ű�����������
 */

var ��С���� = 3;
var ������� = 6;
var ��͵ȼ� = 21;
var ��ߵȼ� = 256;
//����ֻ��չʾ����Ҫ�޸�9020001
var ��һ�ؾ��� = 20000000;
var �ڶ��ؾ��� = 20000000;
var �����ؾ��� = 20000000;
var ���Ĺؾ��� = 20000000;
//����ֻ��չʾ����Ҫ�޸�9020002
var ���ͨ�� = 20000000;
var ���ط�ĩ��ȡ���� = 10;
//��������Ԥ��
/*
 ��Ʒ������
 */
var ����Ԥ�� = [
	[4006000, 100,"11~20"],
	[4006001, 50,"1~10"],
    [4310113, 100,"1~50"],
    [4310022, 100,"1~50"],
    [4170006, 50,"1"],
    [4310044, 10,"1~3"],
    [4032135, 70,"1~20"],
    [4001009, 50,"1~2"]
    //[4004000, 30],
    //[4004001, 30],
    //[4004002, 30],
    //[4004003, 30],
    //[4004004, 1],
    //[4020000, 10],
    //[4020001, 10],
   // [4020002, 10],
    //[4020003, 10],
    //[4020004, 10],
    //[4020005, 10],
    //[4020006, 10],
    //[4020007, 10],
    //[4020008, 10]

];
var status = 0;

function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.�Ի�����();
        return;
    }
    var ����� = cm.getBossRank("��������", 2);
    var ���ͨ����� = cm.��ɫIDȡ����(cm.ȡ����ͨ��������(1));
    var ���ͨ��ʱ�� = ʱ��(cm.ȡ����ͨ�����ʱ��(1));
    var ��ɫ = cm.getPlayer().id;
    if (����� < 0) {
        var ����� = 0;
    }
    if (status == 1) {
        var �ı���Ϣ = "";
		�ı���Ϣ += "    #dð�ձ�#k  #r1000W#k\r\n"
        for (var i = 0; i < ����Ԥ��.length; i++) {
            �ı���Ϣ += "    #d#z" + ����Ԥ��[i][0] + "##k  #r" + ����Ԥ��[i][1] + "% ���� "+����Ԥ��[i][2]+" ��#k\r\n";
        }
        var �ɾ� = "\r\n";
        if (����� >= 10) {
            �ɾ� += "    #r[�ɾ�]#d���ͨ�ض����ȡ #b50%#k #d����#k\r\n";
        }
        if (����� >= 50) {
            �ɾ� += "    #r[�ɾ�]#d���ͨ�ض����ȡ #b#z4032135##k x #d10#k\r\n";
        }
        if (����� >= 150) {
            �ɾ� += "    #r[�ɾ�]#d���ͨ�� #b5%#d ���ʻ�ȡ #b1#d ��AP(2��/��)#k\r\n";
        }
        var ˵�� = "#e#d[����]:#k#n#r��������#k  #e#d[����]:#k#n#r" + ���ͨ����� + "#n#d  " + ���ͨ��ʱ�� + "\r\n    #kHi~#b#h ##k��λ�ڷ�������ˮ���ĸ������񣬿���ͨ����ɸø�����ȡ�������档������Ҫ���������#b" + ��С���� + " - " + ������� + "#k���ȼ�Ҫ��#b" + ��͵ȼ� + " - " + ��ߵȼ� + "#k����Ҫ�μӸ���#b��������#k�����ط�ĩÿ��ֻ��ǰ #r" + ���ط�ĩ��ȡ���� + "#k �βŻ�����л��ʻ�ȡ����������㹻���ͨ�ش������ͻ�����ɾͣ���ȡ����Ľ�����";
        cm.sendYesNo("" + ˵�� + "\r\n" + �ɾ� + "\r\n    ��ս����: #b" + ����� + "#k / #r" + cm.getBossLog("��������") + "  #k����¼: #r" + ʱ��(cm.ȡ����ͨ��ʱ��(1, ��ɫ)) + "\r\n\r\n    #k#b#e��������Ԥ��:#n\r\n#d\t��һ�� #r" + ��һ�ؾ��� + "#k\r\n#d\t�ڶ��� #r" + �ڶ��ؾ��� + "#k\r\n#d\t������ #r" + �����ؾ��� + "#k\r\n#d\t���Ĺ� #r" + ���Ĺؾ��� + "#k\r\n#d\t���ͨ�� #r" + ���ͨ�� + "#k\r\n\r\n    #k#e#b��������Ԥ��:#n\r\n" + �ı���Ϣ + "");
    } else if (status == 2) {
        if (cm.getParty() == null) {
            cm.˵������("������������ң������öӳ����ҡ�");
        } else if (!cm.isLeader()) {
            cm.˵������("�����Ķӳ�������!");
        } else {
            var party = cm.getParty().getMembers();
            var mapId = cm.getMapId();
            var next = true;
            var levelValid = 0;
            var inMap = 0;

            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                if (cPlayer.getLevel() >= ��͵ȼ� && cPlayer.getLevel() <= ��ߵȼ�) {
                    levelValid += 1;
                } else {
                    next = false;
                }
                if (cPlayer.getMapid() == mapId) {
                    inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
                }
            }
            if (party.size() > ������� || inMap < ��С����) {
                next = false;
            }
            if (�Ŷ��ж�() == 1 || �Ŷ��ж�() == 2) {
                cm.˵������("�뱣֤���Ѷ��ڳ���");
                cm.�Ի�����();
                return;
            }
            if (next) {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.˵������("�Ҳ����ű�������ϵ����Ա��");
                    cm.�Ի�����();
                    return;
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        em.startInstance(cm.getParty(), cm.getMap());
                    } else {
                        cm.˵������("�Ѿ��ж�����������ս�ˡ�");
                        cm.�Ի�����();
                        return;
                    }
                }
            } else {
                cm.˵������("����: #b��������#k\r\n����: #b" + ��С���� + " - " + ������� + "#k\r\n�ȼ�: #b" + ��͵ȼ� + " - " + ��ߵȼ� + "#k");
                cm.�Ի�����();
                return;
            }
        }
        cm.�Ի�����();
    }
}

function �Ŷ��ж�() {
    var ���� = cm.getParty().getMembers();
    var mapId = cm.�жϵ�ͼ();
    var Channel = cm.getPlayer().getClient().getChannel();
    var valid = 0;
    var it = ����.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
		//����ͬ��ͼ
        if (cPlayer.getMapid() != mapId) {
            valid = 1;
        }
		//����ͬƵ��
        if (cPlayer.getChannel() != Channel) {
            valid = 2;
        }
    }
    return valid;
}

function ʱ��(value) {
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + " �� ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " �� " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
} 