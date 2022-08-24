/*
 ZEVMS冒险岛(079)游戏服务端
 地铁箱子
 */
 var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var maplist=[
//[910000001,253,-206,"自由市场1洞"],
//[910000002,253,-206,"自由市场2洞"],
//[910000003,253,-206,"自由市场3洞"],
//[910000004,253,-206,"自由市场4洞"],
//[910000005,253,-206,"自由市场5洞"],
//[910000006,253,-206,"自由市场6洞"],
//[910000007,-930,-108,"自由市场7洞"],
//[910000008,-930,-108,"自由市场8洞"],
//[910000009,-930,-108,"自由市场9洞"],
//[910000010,-930,-108,"自由市场10洞"],
//[910000011,-930,-108,"自由市场11洞"],
//[910000012,-930,-108,"自由市场12洞"],
//[910000013,14,1185,"自由市场13洞"],
//[910000014,14,1185,"自由市场14洞"],
//[910000015,14,1185,"自由市场15洞"],
//[910000016,14,1185,"自由市场16洞"],
//[910000017,14,1185,"自由市场17洞"],
//[910000018,546,-146,"自由市场18洞"],
//[910000019,546,-146,"自由市场19洞"],
//[910000020,546,-146,"自由市场20洞"],
//[910000021,546,-146,"自由市场21洞"],
//[910000022,546,-146,"自由市场22洞"],
[100000000,917,94,"射手村"],
[100000000,1584,-116,"射手村"],
[100000000,3528,394,"射手村"],
[100000000,4426,244,"射手村"],
[100000000,5207,94,"射手村"],
]
var moblist=[7130400,7130401,7130402]

function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
	
    if (status == 0) {
    } else if (status == 1) {
		if (cm.getPlayer().isGM()) {
			}else{
				cm.sendOk("你不是GM")
				cm.dispose();
				return
			}
        var selStr = "GM操作面板";
        
			selStr += "\r\n#L1#万圣节活动刷怪#l";
			//selStr += "\r\n#L1#召唤鬼怪(需要#v2022256#x30)#l";
			//selStr += "\r\n#L2#抽取奖励(需要#v4031792#x20)#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			
		};
		if(selection == 1){
			var string1 =""
			for(var i = 0;i<10;i++){
				var random = Math.floor(Math.random() * + maplist.length);
				var random2 = Math.floor(Math.random() * + 3);
				
				cm.指定地图召唤怪物(moblist[random2],maplist[random][0],maplist[random][1],maplist[random][2]);
				var random3 = Math.floor(Math.random() * + 2);
				if(random3 >= 0){
					cm.指定地图召唤怪物(8150000,maplist[random][0],maplist[random][1],maplist[random][2]);
					cm.指定地图召唤怪物(8150000,maplist[random][0],maplist[random][1],maplist[random][2]);
					cm.全服公告("[万圣节活动] : 鬼怪出现在1频道["+maplist[random][3]+"]，似乎还带了什么帮手");
				}else{
					cm.全服公告("[万圣节活动] : 鬼怪出现在1频道["+maplist[random][3]+"]");
				}
				//string1 +="地图:"+maplist[random][0]+";怪物:"+moblist[random2]+";\r\n" //测试
			}
			//cm.sendOk(string1)//测试
			cm.dispose();
			return
			
		};
		if(selection == 2){
			
			
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}