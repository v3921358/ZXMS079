/*
 ZEVMSð�յ�(079)ÿ���ռ�
 71447500
 */
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}
importPackage(Packages.client);
importPackage(Packages.database);
var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
//��ͼ����ʾ������X1������X2������Y1������Y2
var itemList = Array(
        Array(100000000, "������Ե�Աߵ������ϡ�", 5200, 5235, 400, 402),
        Array(105030000, "Ц���ϵ�ľͰ��", 260, 300, -731, -731),
        Array(105030000, "Ц���µ�ľͰ��", -150, -120, -370, -370),
        Array(100000200, "ȥ����Ϸ�ش����������4��λ���ϲ²��ĸ��ǶԵġ�", 4353, 4385, 607, 607),
        Array(100000200, "ȥ����Ϸ�ش����������4��λ���ϲ²��ĸ��ǶԵġ�", 4395, 4417, 639, 639),
        Array(100000200, "ȥ����Ϸ�ش����������4��λ���ϲ²��ĸ��ǶԵġ�", 4563, 4594, 611, 611),
        Array(100000200, "ȥ����Ϸ�ش����������4��λ���ϲ²��ĸ��ǶԵġ�", 4519, 4546, 647, 647),
        Array(100000204, "ȥ�����ɣ��Ǹ������ֵĵ��á�", -370, 370, 155, 165),
        Array(100000200, "ȥ��Ȫ�Ͽ�����", 2193, 2487, 403, 403),
        Array(100000103, "ȥԺ����ҽ���м䣬�����Ǻúÿ����㡣", -27, 30, 181, 181),
        Array(100000103, "ȥ͵��Ժ����ҽ�����ǶԻ���ȥ��������ߵĵط���", -174, -174, -219, -219),
        Array(100000105, "ȥ����һ��Ƥ���ɣ�ȥ�Ǹ�����ʦ�Ա߻����", -82, 114, -52, -52),
        Array(809030000, "ȥ�����������Ǹ���ɫ�����Ͽ�����", 182, 296, -83, -83),
        Array(749030000, "ȥ���ε���߰ɡ�", -399, 415, -9, -9),
        Array(100000000, "վ�����ִ������ڲݶ������档", -502, -395, 173, 173),
        Array(100000000, "վ�����ִ������ڵ��Ǹ�ľ���ϡ�", -663, -475, 110, 125),
        Array(100000000, "վ�ڹ�����ϣ������ô��", -155, -148, 203, 203),
        Array(100000000, "ȥ�Ϳ�ݵĳ��ϡ�", 5216, 5382, -225, -175),
        Array(100000001, "ȥ���ǵļ��ұ������䡣", 258, 638, 274, 274),
        Array(100000001, "ȥ���ǵ���ߡ�", -174, 106, 38, 38)
        );
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var days = myDate.getDate();
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
    var �ȼ� = cm.getPlayer().getLevel();
    if (�ȼ� < 70) {
        cm.˵������(" 70�����ϲſ��Խ��С�");
        cm.�Ի�����();
        return;
    }
    var x = cm.getPlayer().getPosition().x;
    var y = cm.getPlayer().getPosition().y;
    var MC = cm.getServerName();
    var ��ɫ = cm.getPlayer().id;
    if (status == 0) {
        var selStr = "   " + �� + " " + �� + "  " + �� + "  " + �� + " #r#e < �������� > #k#n " + �� + "  " + �� + "  " + �� + " " + �� + "\r\n\r\n";
        id = cm.getPlayer().getId();
        ringnum = getBossLog("paoshang6", id);
        if (getOneTimeLog(id) == -1) {
            itemIndex = 1;
            setOneTimeLog(1, id);
        } else {
            itemIndex = getOneTimeLog(id);
        }
        if (cm.getBossLog("ˢ��ÿ��6") <= 0) {
            var ran = Math.floor(Math.random() * itemList.length);
            var itmeid = itemList[ran][0];
            changeOneTimeLog(ran, id);
            cm.setBossLog("ˢ��ÿ��6");
            cm.˵������("�������Ѿ��������ˣ������´򿪰ɡ�");
            cm.�Ի�����();
            return;
        }
        var x1 = itemList[itemIndex][2];
        var x2 = itemList[itemIndex][3];
        var y1 = itemList[itemIndex][4];
        var y2 = itemList[itemIndex][5];
        if (ringnum >= 2) {
            selStr += "		        ���Ѿ�����˽�������Ŷ��\r\n";
        } else {
            selStr += "#d��������#k: #r2#k / #b" + (ringnum + 1) + "#k ��\r\n";
            selStr += "#d��������#k: #b���ɱ�#k x 1\r\n#d";
            selStr += "#d������ʾ#k: \r\n";
            selStr += "#d��ͼ#k: #b#m" + itemList[itemIndex][0] + "##k\r\n";
            selStr += "#d��ʾ#k: #b" + itemList[itemIndex][1] + "#k\r\n";
        }
        selStr += "#b#L0#����#k#n#l\r\n";
        if (ringnum < 2) {
            if (cm.getBossRank("��������", 2) <= 0) {
                selStr += "#b#L10#��ʼ��������#k#n\r\n";
            }
            if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) {
                selStr += "#b#L1#�������#l#k#n\r\n";
            }
            selStr += "#b#L2#��������#l#k#n\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 10:
                cm.setBossRankCount("��������", 1);
                cm.˵������("��ʼ���������硣");
                cm.�Ի�����();
                break;
            case 2:
                if (cm.getBossRank9("���ÿ�", 2) > 0) {
                    var ran = Math.floor(Math.random() * itemList.length);
                    var itmeid = itemList[ran][0];
                    var ���� = itemList[ran][1];
                    if (itemIndex == -1) {
                        setOneTimeLog(ran, id);
                    } else {
                        changeOneTimeLog(ran, id);
                    }
                    cm.setBossRankCount9("���ÿ�", -1);
                    cm.getPlayer().dropMessage(5, "���ÿ� - 1");
                    cm.�Ի�����();
                    cm.��NPC(9310060, 14);
                } else {
                    cm.˵������("�ܱ�Ǹ��û�� #b���ÿ�#k x 1");
                    cm.�Ի�����();
                }
                break;
            case 1:
				var x = cm.getPlayer().getPosition().x;
				var y = cm.getPlayer().getPosition().y;
				var x1 = itemList[itemIndex][2];
				var x2 = itemList[itemIndex][3];
				var y1 = itemList[itemIndex][4];
				var y2 = itemList[itemIndex][5];
                if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) {
                    cm.setBossLog("��������");
                    cm.setBossLog("paoshang6");
                    var ran = Math.floor(Math.random() * itemList.length);
                    var itmeid = itemList[ran][0];
                    var ���� = itemList[ran][1];
                    if (itemIndex == -1) {
                        setOneTimeLog(ran, id);
                    } else {
                        changeOneTimeLog(ran, id);
                    }
                    cm.setBossRankCount("��������", -cm.getBossRank("��������", 2));
                    cm.setBossRankCount9("���ɱ�", 1);
                    cm.getPlayer().dropMessage(5, "���ɱ� + 1");
                    cm.sendNext("��ϲ��������������硣");
                    if (ringnum == 1) {
                        cm.worldMessage(6, "[ÿ���ռ�] : ��ϲ " + cm.getChar().getName() + " �������Ե��ÿ���������硣");
                        cm.Ⱥ�����Ϣ("[ÿ���ռ�] : ��ϲ " + cm.getChar().getName() + " �������Ե��ÿ���������硣");
                    }
                }
                cm.�Ի�����();
                break;
            case 0:
                cm.dispose();
                cm.��NPC(9310060, 0);
                break;
        }
    }
}

function getBossLog(boss, id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    var day = "" + year + "-" + month + "-" + days + "";
    ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= ?");
    ps.setInt(1, id);
    ps.setString(2, boss);
    ps.setString(3, day);
    var rs = ps.executeQuery();
    if (rs.next()) {
        count = rs.getInt(1);
    } else {
        count = -1;
    }
    rs.close();
    ps.close();
    return count;
}

function setOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("insert into onetimeloe (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimeloe set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    ps = con.prepareStatement("SELECT log FROM onetimeloe WHERE characterid = ?");
    ps.setInt(1, id);
    var rs = ps.executeQuery();
    if (rs.next()) {
        count = rs.getString("log");
    } else {
        count = -1;
    }
    rs.close();
    ps.close();
    return count;
}