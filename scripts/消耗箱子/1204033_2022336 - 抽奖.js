/*
 ZEVMSð�յ�(079)��Ϸ�����
 1204033_1 ���齱
 1204033_2 �������ҵ�ȯ
 1204033_3 ��8%
 */
function action() {
	var r = Math.ceil(Math.random() * 100);
	//����齱
	if(r >=0 && r <=30){
		cm.��NPC(1204033,1);
	}else if(r >50 && r<=70){
		cm.��NPC(1204033,2);
	/*}else if(r >70 && r<=72){
		cm.��NPC(1204033,3);
	}else if(r ==77){
		cm.��NPC(1204033,4);
	}else if(r ==80){
		cm.��NPC(1204033,5);*/
	}else{
		cm.˵������(" ��TMD�Ǹ��յģ���");
		cm.gainItem(2022336, -1);
		cm.�Ի�����();
	}
}