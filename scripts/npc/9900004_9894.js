/*
 ʮ�ֽ�ָ����
 */

 var ring = [1112599,1112600,1112601,1112602,1112603,1112604,1112605,1112606,1112607,1112608,1112609,1112610,1112611,1112612,1112613]
 var havering = -1;
 var cost = [4000040,4000176,4031789,4031216,4001085,4000235,4000243,4000460,4000461,4000462,4001084,4031740,4031739,4001083,4001430]
 var mobname = ["Ģ����","��ʬĢ����","������ʦ","�����","����","�����","��ӥ","���","����������","�׿�","����boss","����boss","�����ܻ��İ�ʨ��","����boss","����boss"]
 var playercalled = ["Ӵ���±�","��ã�ʿ��","��ã�ʿ��","��ã�ʿ��","�𾴵�սʿ","�𾴵�սʿ","�𾴵�սʿ","�ۣ����ã��ҵ���ʿ","�ۣ����ã��ҵ���ʿ","�ۣ����ã��ҵ���ʿ","ΰ���Ӣ��","ΰ���Ӣ��","ΰ���Ӣ��","Oh�����ŵĴ���","ΰ��ĺ����ս���"]
 var update =[2,5,8,10,15,20,25,30,40,50,60,70,80,110,160]
 var selStr=""
 var next=0
 
 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" ������ȥ�����ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		for(var i =0 ; i < ring.length;i++){
			if(cm.haveItem(ring[i],1)){
			havering = i
			next = i + 1
			}
		}
		if(havering >= 0 && havering < 14){
			selStr += ""+playercalled[havering]+"��\r\n�������������ǻ���#b#e"+mobname[next]+"#n#k\r\nȻ���#i"+cost[next]+"#�����ҡ�\r\n��������˹�أ��ҿ��Ը����ٽ���һ��"
		}else if(havering == 14){
			cm.sendOk(""+playercalled[14]+"�����Ľ�ָ�Ѿ������ˣ�");
			cm.dispose();
            return;
		}else{
			selStr += "��Ҫΰ���ʮ�־��Ž�ָ����������֤�����ʵ������\r\n����#b#e"+mobname[0]+"#n#k������#i"+cost[0]+"#���Ҿ����������š�\r\n(������Ѿ������˾��ţ�����#b#e�ѽ�ָ���ڱ�����#n#k����)\r\n";
		}
			selStr += "\r\n#L0#ʮ�־��Ž�ָ����#l";
			if(havering == -1){
				selStr += "\r\n#L1##b#e�������#n#k#l";
			}else{
				selStr += "\r\n#L1##b#e�������ϣ�������ָ#n#k#l";
			}
			//selStr += "\r\n#L2#��#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			var string1 = "���ܸ���boss��ö�Ӧ�Ĳ��ϼ���������ָ\r\n#b#e����ʱ��ָ������ڱ����#n#k\r\n#b#eͬ�ȼ���ָֻ�ܳ���һ��#n#k���̵�����\r\n�����Ǹ��ȼ�ʮ�־��Ž�ָ��Ҫ�Ĳ���\r\n"
			for(var i =0 ; i < ring.length;i++){
				string1 += "#i"+ring[i]+"##b#e"+update[i]+"#n#kȫ���ԣ���Ҫ��#i"+cost[i]+"#������#b#e"+mobname[i]+"#n#k�ɻ�ò���\r\n"
			}
			cm.sendOk(string1);
		};
		
		if(selection == 1){
			if(havering == -1){
				if(cm.haveItem(cost[0],1)){
					cm.gainItem(cost[0],-1)
					cm.������װ��(ring[0],0,0,update[0],update[0],update[0],update[0],0,0,update[0],update[0],0,0,0,0,0,0,0);
					cm.sendOk("��ϲ��ɹ��������");
					cm.ȫ����ɫ����("[ʮ�־���] : ���["+cm.getPlayer().getName()+"]�ɹ�����ʮ�־��ţ���Ϊ����ָ�տɴ�")
					cm.dispose();
					return;
				}
				cm.sendOk("��û��#i"+cost[0]+"#����ƭ���Żᱻ������������");
				cm.dispose();
				return;
			}else if(havering > -1 || havering < 14){
				if(cm.haveItem(cost[next],1)){
					cm.gainItem(ring[havering],-1)
					cm.gainItem(cost[next],-1)
					cm.������װ��(ring[next],0,0,update[next],update[next],update[next],update[next],0,0,update[next],update[next],0,0,0,0,0,0,0);
					cm.ȫ����ɫ����("[ʮ�־���] : ���["+cm.getPlayer().getName()+"]ʹ�û���["+mobname[next]+"]��֤��������ʮ�־��ŵȼ��������ȫ����"+update[next]+"�Ľ�ָ")
					cm.sendOk("��Ľ�ָ��������#b#e"+update[next]+"#n#kȫ���Ե�#i"+ring[next]+"#");
					cm.dispose();
					return;
				}else{
					cm.sendOk("��û��#i"+cost[next]+"#����Ҫƭ��");
					cm.dispose();
					return;
				}
			}
			cm.sendOk("��֣�û�ҵ���ľ��ŵȼ��أ���ϵGM�ɡ�");
			cm.dispose();	
			
		};
		if(selection == 2){
			
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}