/* global cm */
//var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		   text += " \t\t\t  #e#r #v4000005#  ��Ҷ��ָ  #v4000005##k#n              \r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #dʣ���ң�#b" + cm.getMeso() + "#k#n\r\n"	
		
		var tex2 = ""+cm.getHyPay(1)+"";
            text += "#L1##r" + ��ɫ�ǵ� + "��Ҷ��ָ1�׶� 20��ά#r New     #v1112670##l#l\r\n\r\n"//3
            text += "#L2##r" + ��ɫ�ǵ� + "��Ҷ��ָ2�׶� 40��ά#r New     #v1112671##l#l\r\n\r\n"//3
            text += "#L3##r" + ��ɫ�ǵ� + "��Ҷ��ָ3�׶� 80��ά#r New     #v1112672##l#l\r\n\r\n"//3
            text += "#L4##r" + ��ɫ�ǵ� + "��Ҷ��ָ4�׶� 120��ά#r New     #v1112673##l#l\r\n\r\n"//3

text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
 if (cm.getPlayer().isGM()) {
                text += " \t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
                text += "#L1000#��ݴ���#l\t#L1001#����תְ#l\t#L1002#ˢ��Ʒ#l\t#L1003#������#l\r\n#L1004#ˢ������#l\r\n"

            
  }
		    cm.sendSimple(text);
        } else if (selection == 1) {//�񻰶���1
            cm.openNpc(9900004, 1800);
        } else if (selection == 2) {//�񻰶���2
            cm.openNpc(9900004, 1801);
        } else if (selection == 3) {//�񻰶���3
            cm.openNpc(9900004, 1802);
        } else if (selection == 4) {//�񻰶���4
            cm.openNpc(9900004, 1803);
        } else if (selection == 5) { //�񻰶���5
            cm.openNpc(9900004, 1804);
	} else if (selection == 4) {//������
            cm.openNpc(9900004, 2003);
        } else if (selection == 5) {//����
            cm.openNpc(9900004, 2004);
        } else if (selection == 6) {//����
            cm.openNpc(9900004, 2005);
        } else if (selection == 7) {//����
            cm.openNpc(9900004, 2006);
        } else if (selection == 9) {//��������
           cm.openNpc(9900004, 77);
        } else if (selection == 10) {//��������
            cm.openNpc(9900004, 78);
        } else if (selection == 9) {//�����ͻ�
            cm.openNpc(9010009, 0);
        } else if (selection == 10) {//��ѵ�װ
            cm.openNpc(9310071, 0);
        } else if (selection == 11) {//���ﲹ��
            cm.openNpc(9900004, 68);
        } else if (selection == 12) {//�����һ�
            cm.openNpc(2000, 22);
        } else if (selection == 13) {//ѫ����ȡ
            cm.openNpc(9900004, 7);
        } else if (selection == 14) {//��������
            cm.openNpc(9310033, 0);
        } else if (selection == 15) {//��ֵ����
            cm.openNpc(9900004, 81);
        } else if (selection == 2999) {//ÿ������
            cm.openNpc(9900004, 2);
        } else if (selection == 3999) {//ÿ��ǩ��
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) {//��������
            cm.openNpc(9310057, 0);
        } else if (selection == 5999) {//Ѫ������
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) {//�齱
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) {//����
            cm.openNpc(9000021, 0);
        } else if (selection == 999) {//21��
            cm.openNpc(9900004, 932);
        } else if (selection == 9999) {//����
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) {//
            cm.openNpc(2000, 0);
     } else if (selection == 1000) {//
            cm.openNpc(9900004, 1004);
        } else if (selection == 6666) {//
            cm.openNpc(9900004, 16);
        } else if (selection == 7777) {//
            cm.openNpc(9900004, 7);
        } else if (selection == 8888) {//
            cm.openNpc(9900004, 6);
        } else if (selection == 1002) {//
           cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) {//
            cm.dispose();
          cm.openNpc(9100200, 0);
        } else if (selection == 111999) {//
            cm.dispose();
          cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
          cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
              cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������99999���!\r\n\r\n\t\t\t#e#r��ϲ������2E���!");
            cm.dispose();
        } else if (selection == 9999) {//
		if(cm.getBossLog("2016�") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016�");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��2016-04-10���ϻ���影�������x3��");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���������������ռ�");
            cm.dispose();
		}
		}
    }
}


