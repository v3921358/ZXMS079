/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：爆物查询
 */


importPackage(net.sf.odinms.client);
var 点券 = "#fUI/CashShop.img/CashItem/0#";
var status = 0;
var fee;
var chance = Math.floor(Math.random() * 1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("你输入推广码？");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendGetText("	Hi~#b#h ##k，请输入你要查询的物品代码，如果你不知道，请入代码查询网站查一下吧。#k\r\n\r\n请输入物品代码[#r数字ID#k]；");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("确认你输入的物品代码 ； #r" + fee + " #k?");
        } else if (fee <= 0 ) {
            cm.sendOk("输入有误！！！");
            cm.dispose();
		} else if (cm.getItemName(fee)==null) {
            cm.sendOk("物品不存在。");
            cm.dispose();
        } else if(cm.查询爆物(fee)==""){
			cm.sendOk("	Hi~#b#h ##k，你要查询的 "+cm.显示物品(fee)+" 掉落出处；\r\n\r\n    该物品无掉落");
		}else{
			cm.sendOk("	Hi~#b#h ##k，你要查询的 "+cm.显示物品(fee)+" 掉落出处；\r\n\r\n"+cm.查询爆物(fee)+"");
			cm.对话结束();
		}
    }
}