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
			cm.sendGetNumber("#e#r 刷装备NPC \r\n#b亲爱的#r#h ##b您好,我可以为你刷取任何装备，请不要输错代码#r[装备代码！]\r\n\r\n         #e#d请输入装备代码",0,1000000,9999999)
		}
	else if (status==1)
		{
			itemid=selection;
			cm.sendGetNumber("#i"+itemid+"##t"+itemid+"#\r\n#r请输入装备属性，属性必须低于3万,#k#r请#r#k\r\n输入属性:#k",1,1,30000)
		}
	else if (status==2)
		{
			sl=selection
			if(sl==100 && cm.haveItem(itemid))
				{
					sl=sl*288
					cm.sendYesNo("确定要丢弃所有#i"+itemid+"##t"+itemid+"#?")
				}
				else
				{
					cm.给属性装备(itemid, 10, 0, sl, sl, sl, sl, sl, sl, sl, sl,0, 0, 0, 0, sl, sl, 0);
					cm.全服公告("[制作装备] : GM玩家 "+cm.getPlayer().getName()+"制作"+sl+"全属性装备成功，点击自由市场中层名片即可制作");
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