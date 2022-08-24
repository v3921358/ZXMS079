/*
ZEVMS冒险岛(079)每日收集
71447500
*/
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}
importPackage(Packages.client);
importPackage(Packages.database);
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
var itemList = Array(
        Array(4000000, "数量"), Array(4000001, "数量"), Array(4000005, "数量"),
        Array(4000003, "数量"), Array(4000006, "数量"), Array(4000007, "数量"),
        Array(4000008, "数量"), Array(4000009, "数量"), Array(4000011, "数量"),
        Array(4000014, "数量"), Array(4000026, "数量"), Array(4000025, "数量"),
        Array(4000029, "数量"), Array(4000032, "数量"), Array(4000036, "数量"),
        Array(4000052, "数量"), Array(4000051, "数量"), Array(4000037, "数量"),
        Array(4000097, "数量"), Array(4000102, "数量"), Array(4000103, "数量"),
        Array(4000109, "数量"), Array(4000113, "数量"), Array(4000117, "数量"),
        Array(4000120, "数量"), Array(4000115, "数量"), Array(4000111, "数量"),
        Array(4000121, "数量"), Array(4000154, "数量"), Array(4000157, "数量"),
        Array(4000158, "数量"), Array(4000153, "数量"), Array(4000159, "数量"),
        Array(4000164, "数量"), Array(4000162, "数量"), Array(4000161, "数量"),
        Array(4000165, "数量"), Array(4000133, "数量"), Array(4000169, "数量"),
        Array(4000190, "数量"), Array(4000191, "数量"), Array(4000193, "数量"),
        Array(4000196, "数量"), Array(4000188, "数量"), Array(4000192, "数量"),
        Array(4000197, "数量"), Array(4000195, "数量"), Array(4000236, "数量"),
        Array(4000004, "数量"), Array(4000002, "数量"), Array(4000012, "数量"),
        Array(4000015, "数量"), Array(4000016, "数量"), Array(4000018, "数量"),
        Array(4000035, "数量"), Array(4000033, "数量"), Array(4000034, "数量"),
        Array(4000031, "数量"), Array(4000023, "数量"), Array(4000027, "数量"),
        Array(4000165, "数量"), Array(4000133, "数量"), Array(4000169, "数量"),
        Array(4000043, "数量"), Array(4000041, "数量"), Array(4000039, "数量"),
        Array(4000059, "数量"), Array(4000060, "数量"), Array(4000061, "数量"),
        Array(4000132, "数量"), Array(4000134, "数量"), Array(4000069, "数量"),
        Array(4000147, "数量"), Array(4000155, "数量"), Array(4000156, "数量"),
        Array(4000170, "数量"), Array(4000171, "数量"), Array(4000172, "数量"),
        Array(4000205, "数量"), Array(4000204, "数量"), Array(4000187, "数量"),
        Array(4000206, "数量"), Array(4000207, "数量"), Array(4000018, "数量"),
        Array(4000110, "数量"), Array(4000107, "数量"), Array(4000106, "数量"),
        Array(4000021, "数量"), Array(4000018, "数量"), Array(4000019, "数量"),
        Array(4000024, "数量"), Array(4000027, "数量"), Array(4000034, "数量"),
        Array(4000118, "数量"), Array(4000119, "数量"), Array(4000119, "数量"),
        Array(4000351, "数量"), Array(4000350, "数量"), Array(4000332, "数量"),
        Array(4000333, "数量"), Array(4000329, "数量"), Array(4000334, "数量"),
        Array(4000335, "数量"), Array(4000379, "数量"), Array(4000380, "数量"),
        Array(4000160, "数量"), Array(4000167, "数量"), Array(4000168, "数量"),
        Array(4000177, "数量"), Array(4000178, "数量"), Array(4000185, "数量"),
        Array(4000276, "数量"), Array(4000277, "数量"), Array(4000278, "数量"),
        Array(4000279, "数量"), Array(4000280, "数量"), Array(4000281, "数量"),
        Array(4000282, "数量"), Array(4000298, "数量"), Array(4000299, "数量"),
        Array(4000289, "数量"), Array(4000288, "数量"), Array(4000287, "数量"),
        Array(4000292, "数量"), Array(4000291, "数量"), Array(4000286, "数量"),
        Array(4000293, "数量"), Array(4000295, "数量"), Array(4000168, "数量"),
        Array(4000353, "数量"), Array(4000354, "数量"), Array(4000356, "数量"),
        Array(4000361, "数量"), Array(4000364, "数量"), Array(4000000, "数量"),
        Array(4000365, "数量"), Array(4000359, "数量"), Array(4000360, "数量"),
        Array(4000433, "数量"), Array(4000467, "数量"), Array(4000468, "数量"),
        Array(4000471, "数量"), Array(4000472, "数量"), Array(4000469, "数量"),
        Array(4000470, "数量"), Array(4000474, "数量"), Array(4000473, "数量"),
        Array(4000476, "数量"), Array(4000475, "数量"), Array(4000477, "数量"),
        Array(4000090, "数量"), Array(4000089, "数量"), Array(4000078, "数量"),
        Array(4000091, "数量"), Array(4000092, "数量"), Array(4000093, "数量"),
        Array(4000033, "数量"), Array(4000436, "数量"), Array(4000438, "数量"),
        Array(4000439, "数量"), Array(4000000, "数量"), Array(4000000, "数量"),
        Array(4000383, "数量"), Array(4000382, "数量"), Array(4000000, "数量")
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
    var MC = cm.getServerName();
    var 等级 = cm.getPlayer().getLevel();
    var 人气 = cm.getPlayer().getFame();
    var 数量 = 0;
    if (等级 < 100) {
        cm.说明文字(" 100级以上才可以进行。");
        cm.对话结束();
        return;
    }

    if (等级 > 210) {
        数量 += 130;
        if (人气 >= 10) {
            数量 -= 10;
        }
        if (人气 >= 50) {
            数量 -= 10;
        }
        if (人气 >= 70) {
            数量 -= 10;
        }
        if (人气 >= 100) {
            数量 -= 10;
        }
    } else if (等级 > 120) {
        数量 += 100;
    } else if (等级 > 110) {
        数量 += 90;
    } else if (等级 > 100) {
        数量 += 80;
    }
    var MC = cm.getServerName();
    var 角色 = cm.getPlayer().id;
    if (status == 0) {
        var selStr = "   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 物品收集 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
        id = cm.getPlayer().getId();
        ringnum = getBossLog("paoshang", id);
		if(getOneTimeLog(id)==-1){
			itemIndex =1;
			setOneTimeLog(1, id);
		}else{
			itemIndex = getOneTimeLog(id);
		}
		if (cm.getBossLog("刷新每日2") <= 0) {
			var ran = Math.floor(Math.random() * itemList.length);
			var itmeid = itemList[ran][0];
			changeOneTimeLog(ran, id);
			cm.setBossLog("刷新每日2");
			cm.说明文字("该任务已经被重置了，请重新打开吧。");
			cm.对话结束();
			return;
		}
		if(ringnum >= 20){
			selStr += "		        你已经完成了今日收集哦。\r\n";
		}else{
			selStr += "#d收集环数#k: #r20#k / #b" + (ringnum+1) + "#k 环\r\n";
			selStr += "#d每环奖励#k: #r1#k AP,#b#z4032226##k x 1\r\n#d最终奖励: #r1#k AP,#b#z4032226##k x ( 1 - 5 ) #b重置卡#k x 1\r\n";
			selStr += "#d收集进程#k: 持有 #r#c" + itemList[itemIndex][0] + "##k 个  #v" + itemList[itemIndex][0] + "#  收集需要 #r" + 数量.toFixed(0) + " #k个\r\n\r\n";
		}	
        selStr += "#b#L0#返回#k#n\r\n";
		if(ringnum < 20){
			selStr += "#b#L1#提交收集#k#n\r\n";
			selStr += "#b#L2#重置收集物品#k#n\r\n";
		}
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 2:
                if(cm.getBossRank9("重置卡",2)>0){
					var ran = Math.floor(Math.random() * itemList.length);
					var itmeid = itemList[ran][0];
					var 数量 = itemList[ran][1];
					if (itemIndex == -1) {
						setOneTimeLog(ran, id);
					} else {
						changeOneTimeLog(ran, id);
					}
					cm.setBossRankCount9("重置卡",-1);
					cm.getPlayer().dropMessage(5,"重置卡 - 1");
					cm.对话结束();
					cm.打开NPC(9310060, 5);
                }else{
					cm.说明文字("很抱歉你没有 #b重置卡#k x 1");
					cm.对话结束();
				}
                break;
            case 1:
                if (ringnum >= 0 && ringnum < 19) {
                    if (cm.haveItem(itemList[itemIndex][0], 数量)) {
                        cm.gainItem(itemList[itemIndex][0], -数量);
                        cm.setBossLog("paoshang");
                        cm.给物品(4032226, 1);
                        cm.给经验(等级 * 5000);
                        cm.gainAp(1);
                        var ran = Math.floor(Math.random() * itemList.length);
                        var itmeid = itemList[ran][0];
                        var 数量 = itemList[ran][1];
                        if (itemIndex == -1) {
                            setOneTimeLog(ran, id);
                        } else {
                            changeOneTimeLog(ran, id);                        }
                        cm.sendNext("恭喜您完成了第 #b" + (ringnum + 1) + "#k 环收集，请开始下一环收集吧。");
                    } else {
                        cm.说明文字("你还没收集完成 #v" + itemList[itemIndex][0] + "# x #r" + 数量.toFixed(0) + " #k个呢。");
                    }
                } else if (ringnum == 19) {
                    if (cm.haveItem(itemList[itemIndex][0], 数量)) {
                        cm.gainItem(itemList[itemIndex][0], -数量);
                        var 随机金猪 = cm.随机数(5);
                        if (随机金猪 <= 0) {
                            var 随机金猪 = 1;
                        }
                        cm.gainAp(1);
                        cm.给物品(4032226, 随机金猪);
                        cm.给经验(等级 * 10000);
                        cm.setBossLog("paoshang");
                        var ran = Math.floor(Math.random() * itemList.length);
                        var itmeid = itemList[ran][0];
                        var 数量 = itemList[ran][1];
                        if (itemIndex == -1) {
                            setOneTimeLog(ran, id);
                        } else {
                            changeOneTimeLog(ran, id);
                        }
						cm.setBossRankCount9("重置卡",1);
						cm.getPlayer().dropMessage(5,"重置卡 + 1");
                        cm.sendNext("恭喜您完成了今日收集。");
						cm.worldMessage(6, "[每日收集] : 恭喜 "+cm.getChar().getName()+" 完成了星缘的每日物品收集。");
						cm.群输出信息("[每日收集] : 恭喜 "+cm.getChar().getName()+" 完成了星缘的每日物品收集。");
                    } else {
                        cm.说明文字("恭喜你完成了今日所有收集。");
					}
                }
                cm.对话结束();
                break;
            case 0:
                cm.dispose();
                cm.打开NPC(9310060, 0);
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
    var ps = con1.prepareStatement("insert into onetimelog (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimelog set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    ps = con.prepareStatement("SELECT log FROM onetimelog WHERE characterid = ?");
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