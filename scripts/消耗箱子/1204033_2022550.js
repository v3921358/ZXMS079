/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������
 */
 var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var maplist=[
//[910000001,253,-206,"�����г�1��"],
//[910000002,253,-206,"�����г�2��"],
//[910000003,253,-206,"�����г�3��"],
//[910000004,253,-206,"�����г�4��"],
//[910000005,253,-206,"�����г�5��"],
//[910000006,253,-206,"�����г�6��"],
//[910000007,-930,-108,"�����г�7��"],
//[910000008,-930,-108,"�����г�8��"],
//[910000009,-930,-108,"�����г�9��"],
//[910000010,-930,-108,"�����г�10��"],
//[910000011,-930,-108,"�����г�11��"],
//[910000012,-930,-108,"�����г�12��"],
//[910000013,14,1185,"�����г�13��"],
//[910000014,14,1185,"�����г�14��"],
//[910000015,14,1185,"�����г�15��"],
//[910000016,14,1185,"�����г�16��"],
//[910000017,14,1185,"�����г�17��"],
//[910000018,546,-146,"�����г�18��"],
//[910000019,546,-146,"�����г�19��"],
//[910000020,546,-146,"�����г�20��"],
//[910000021,546,-146,"�����г�21��"],
//[910000022,546,-146,"�����г�22��"],
[100000000,917,94,"���ִ�"],
[100000000,1584,-116,"���ִ�"],
[100000000,3528,394,"���ִ�"],
[100000000,4426,244,"���ִ�"],
[100000000,5207,94,"���ִ�"],
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
            cm.sendOk(" ������ȥ�����ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
	
    if (status == 0) {
    } else if (status == 1) {
		if (cm.getPlayer().isGM()) {
			}else{
				cm.sendOk("�㲻��GM")
				cm.dispose();
				return
			}
        var selStr = "GM�������";
        
			selStr += "\r\n#L1#��ʥ�ڻˢ��#l";
			//selStr += "\r\n#L1#�ٻ����(��Ҫ#v2022256#x30)#l";
			//selStr += "\r\n#L2#��ȡ����(��Ҫ#v4031792#x20)#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			
		};
		if(selection == 1){
			var string1 =""
			for(var i = 0;i<10;i++){
				var random = Math.floor(Math.random() * + maplist.length);
				var random2 = Math.floor(Math.random() * + 3);
				
				cm.ָ����ͼ�ٻ�����(moblist[random2],maplist[random][0],maplist[random][1],maplist[random][2]);
				var random3 = Math.floor(Math.random() * + 2);
				if(random3 >= 0){
					cm.ָ����ͼ�ٻ�����(8150000,maplist[random][0],maplist[random][1],maplist[random][2]);
					cm.ָ����ͼ�ٻ�����(8150000,maplist[random][0],maplist[random][1],maplist[random][2]);
					cm.ȫ������("[��ʥ�ڻ] : ��ֳ�����1Ƶ��["+maplist[random][3]+"]���ƺ�������ʲô����");
				}else{
					cm.ȫ������("[��ʥ�ڻ] : ��ֳ�����1Ƶ��["+maplist[random][3]+"]");
				}
				//string1 +="��ͼ:"+maplist[random][0]+";����:"+moblist[random2]+";\r\n" //����
			}
			//cm.sendOk(string1)//����
			cm.dispose();
			return
			
		};
		if(selection == 2){
			
			
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}