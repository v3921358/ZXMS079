/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：清理背包
 */
importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage(Packages.net.channel);
importPackage(Packages.tools);
importPackage(Packages.scripting);
importPackage(Packages.tools.packet);
importPackage(Packages.tools.data);
importPackage(Packages.tools);
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var status = -1;
var itemss;
var slot = Array();

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }var MC = cm.getServerName();

    if (status == 0) {
		var avail = "";
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(2).getItem(i) != null) {
				avail += "#L" + cm.getInventory(2).getItem(i).getItemId() + "##z" + cm.getInventory(2).getItem(i).getItemId() + ":##l\r\n";
			}
			slot.push(i);
		}
		  
		cm.sendSimple("       #r"+心+" "+心+" #e"+MC+"#k#n 背包快捷清理 "+心+" "+心+"\r\n\r\n\t#r提示；可连续清理。不要点下一步，直接点结束。\r\n#b" + avail);
	 
    } else if (status == 1) {
        itemss = selection;
		var shul = cm.getPlayer().getItemQuantity(itemss, false);
		cm.removeAll(itemss);
		 cm.dispose();	
		 cm.openNpc(9900004,57);
            	
    } else {
        cm.dispose();
    }//status
}// function

function Ok(text) {
    cm.sendOk(text);
}



