var itemid=0;
var sl=0;

function start() 
{
	status = -1;
	action(1, 0, 0);
	
}
function action(mode, type, selection) 
{
	if (mode == 1) 
		{
			status++
		}
	else
		{
			cm.dispose();
			return;
		}
	if (status == 0)
		{	
			if (cm.getPlayer().isGM()) {
			}else{
				cm.dispose();
				return
			}
			panduan();
			cm.sendGetNumber("#e#r ˢװ��NPC \r\n#b�װ���#r#h ##b����,�ҿ���Ϊ��ˢȡ�κ�װ�����벻Ҫ������#r[װ�����룡]\r\n\r\n         #e#d������װ������",0,1000000,9999999)
		}
	else if (status==1)
		{
			itemid=selection;
			cm.sendGetNumber("#i"+itemid+"##t"+itemid+"#\r\n#r������װ�����ԣ����Ա������3��,#k#r��#r#k\r\n��������:#k",1,1,30000)
		}
	else if (status==2)
		{
			sl=selection
			if(sl==100 && cm.haveItem(itemid))
				{
					sl=sl*288
					cm.sendYesNo("ȷ��Ҫ��������#i"+itemid+"##t"+itemid+"#?")
				}
				else
				{
					cm.������װ��(itemid, 10, 0, sl, sl, sl, sl, sl, sl, sl, sl,0, 0, 0, 0, sl, sl, 0);
					cm.ȫ������("[����װ��] : GM��� "+cm.getPlayer().getName()+"����"+sl+"ȫ����װ���ɹ�����������г��в���Ƭ��������");
					cm.dispose();
				}
		}
	else if(status==3)
		{
	cm.gainItem(itemid,-sl)
	cm.dispose();
		}

}

function panduan()
{
	if(cm.haveItem(2430693)==false)
		{
			cm.gainItem(2430693,1);
		}
	if(cm.haveItem(2430267)==false)
		{
			cm.gainItem(2430267,1);
		}
	if(cm.haveItem(2430481)==false)
		{
			cm.gainItem(2430481,1);
		}

}