

function start() {
	if(cm.getPlayer().getName()=="�������"){
		cm.teachSkill(2001002, 20);//ħ����
		cm.teachSkill(2301001, 20);//˲��
		cm.teachSkill(2301003, 20);//��֮����
		cm.teachSkill(2311003, 30);//��֮��
		cm.teachSkill(2321005, 30);//ʥ��֮��
		cm.teachSkill(2321006, 10);//������
		cm.teachSkill(1321002, 30);//̩ɽ
		cm.teachSkill(1301007, 30);//��ʥ֮��
		cm.teachSkill(4001003, 20);//������
		cm.teachSkill(4111006, 20);//������
		cm.teachSkill(4111002, 30);//Ӱ����
		//cm.teachSkill(3121002, 30);//����
		
		//������
		//cm.teachSkill(3120005, 30)
		//cm.teachSkill(3121000, 30)
		//cm.teachSkill(3121003, 30)
		//cm.teachSkill(3121004, 30)
		//cm.teachSkill(3121007, 30)
		//cm.teachSkill(3121008, 30)
		//cm.teachSkill(3121009, 5)
		var name = cm.getPlayer().getName()
		cm.playerMessage(5, "["+name+"]�������������͵ļ��ܣ���ϵGM��");
	}
	
       if(!cm.getPlayerStat("LVL")>=0 && cm.getPlayerStat("LVL")<=9){

	cm.������(1000);

    cm.dispose();
	} else {
	    
cm.playerMessage(5, "ֻ�еȼ���10�����ڵ���Ҳſ���ʹ�á�");
cm.sendOk("ֻ�еȼ���10�����ڵ���Ҳſ���ʹ�á�");
    cm.dispose();
}
}