/*
 ZEVMSð�յ�(079)��Ϸ�����
 1204033_1 ���齱
 1204033_2 �������ҵ�ȯ
 */
function action() {
	var r = Math.ceil(Math.random() * 2);
	//����齱
	if(r ==0){
		cm.����ȯ( Math.ceil(Math.random() * 10000));
	}else if(r ==1){
		cm.�����( Math.ceil(Math.random() * 10000));
	}else if(r ==2){
		cm.������( Math.ceil(Math.random() * 100000));
	}
	cm.gainItem(2022336, -1);
	cm.�Ի�����();
}