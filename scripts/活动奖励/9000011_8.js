/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������ͨ�ؽ���
 ���Ը���ͨ���Ĺ������ڵĵ�ͼ���ֱ�����
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
function action() {
	if (cm.�ж�ÿ��("������������ȡ")<=0) {
		var �ȼ� = cm.getPlayer().getLevel();
		if(�ȼ�>=150){
			cm.����Ʒ(4006000,50);
			cm.����Ʒ(4006001,50);
			cm.����Ʒ(4032226,5)
		}
		cm.����ȯ(10*1000);
		cm.�����(100*1000);
		cm.������(100*0000);
		cm.������(10);
		cm.������ÿ��("������������ȡ");
	}
	if(cm.�������ʱ��2(1) > Date.now()){
		cm.setBossRankCount9("���ɱ�",3);
		cm.getPlayer().dropMessage(5,"���ɱ� + 3");
		cm.setBossLog("������ս1");
	}
    cm.�Ի�����();
}