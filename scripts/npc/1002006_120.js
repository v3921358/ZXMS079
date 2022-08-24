function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
   cm.sendOk("感谢使用.");
   cm.dispose();
   return;                    
                }
                if (mode == 1) {
   status++;
  }
  else {
   status--;
  }
          if (status == 0) {
	var tex2 = "";	
	var text = "";
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d合成-- #r★6000HP血衣★需要以下物品：\r\n#v1012176##d3000HP血衣 * 1个\r\n#v4000313##d#z4000313# * 500个\r\n#v4000152##d#z4000152# * 300个\r\n#v4000151##d#z4000151# * 300个\r\n#v4000407##d#z4000407# * 300个\r\n#v4000402##d#z4000402# * 300个\r\n#v4000406##d#z4000406# * 300个\r\n~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定制作6000HP血衣";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012083,1)){
			cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if(cm.haveItem(4000313, 500) && cm.haveItem(4000152,300) && cm.haveItem(4000151,300) && cm.haveItem(4000407,300) && cm.haveItem(4000402,300) && cm.haveItem(4000406,300) && cm.haveItem(1012176,1)){
				cm.gainItem(4000313, -500);
				cm.gainItem(4000152, -300);
				cm.gainItem(4000151, -300);
				cm.gainItem(4000407, -300);
				cm.gainItem(4000402, -300);
				cm.gainItem(4000406, -300);
				cm.gainItem(1012176, -1);
//cm.gainItem(1012057,0,0,0,0,6000,6000,0,0,0,0,0,0,0,0);
cm.给属性装备(1012057, 1, 0, 0, 0, 0, 0, 6000, 6000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.sendOk("换购成功！");
            cm.dispose();
cm.worldMessage(6, "玩家：[" + cm.getPlayer().getName() + "]成功制作6000HP血衣，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你\r\n#v4000313#不足500个\r\n#v4000152#不足300个\r\n#v4000151#不足300个\r\n#v4000407#不足300个\r\n#v4000402#不足300个\r\n#v4000406#不足300个\r\n#v1012176#不足1个\r\n");
            cm.dispose();
			}
		}
    }
}




