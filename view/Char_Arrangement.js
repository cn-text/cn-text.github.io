function Key_Evt_INI()
{
	document.getElementsByTagName("body")[0].setAttribute("onkeydown","Hotkey_Mouse(this,event,0)");
}
Key_Evt_INI();

//#CCE8CF
//#3399FF
var BODY_COLOR=0;
function BGColor_Switch_00()
{
	var i,j,k;
	var elel_tag_a=document.getElementsByTagName("a");
	if ( BODY_COLOR==0 )
	{
		BODY_COLOR=1;
		document.getElementsByTagName("body")[0].style.color="#FFFFFF";
		document.getElementsByTagName("body")[0].style.backgroundColor="#000000";
		for (i=0;i<elel_tag_a.length;i++)		{elel_tag_a[i].style.backgroundColor="#7FFFFF";}
	}
	else if ( BODY_COLOR==1 )
	{
		BODY_COLOR=0;
		document.getElementsByTagName("body")[0].style.color="#000000";
		document.getElementsByTagName("body")[0].style.backgroundColor="#CCE8CF";
		for (i=0;i<elel_tag_a.length;i++)		{elel_tag_a[i].style.backgroundColor="#CCE8CF";}
	}
	else
	{
	}
	//console.log(document.getElementsByTagName("body")[0].style.color);
}

function BGColor_Switch_01()
{
	var i,j,k;
	var elel_tag_a=document.getElementsByTagName("a");
	if ( BODY_COLOR==0 )
	{
		BODY_COLOR=1;
		document.getElementsByTagName("body")[0].style.color="#FFFFFF";
		//document.getElementsByTagName("body")[0].style.backgroundColor="#000000";
		for (i=0;i<elel_tag_a.length;i++)		{elel_tag_a[i].style.backgroundColor="#7FFFFF";}
	}
	else if ( BODY_COLOR==1 )
	{
		BODY_COLOR=0;
		document.getElementsByTagName("body")[0].style.color="#000000";
		//document.getElementsByTagName("body")[0].style.backgroundColor="#CCE8CF";
		for (i=0;i<elel_tag_a.length;i++)		{elel_tag_a[i].style.backgroundColor="#CCE8CF";}
	}
	else
	{
	}
	//console.log(document.getElementsByTagName("body")[0].style.color);
}

function BGColor_Switch_02()
{
	var i,j,k;
	var elel_tag_a=document.getElementsByTagName("a");
	if ( BODY_COLOR==0 )
	{
		BODY_COLOR=1;
		//document.getElementsByTagName("body")[0].style.color="#FFFFFF";
		document.getElementsByTagName("body")[0].style.backgroundColor="#000000";
		for (i=0;i<elel_tag_a.length;i++)		{elel_tag_a[i].style.backgroundColor="#7FFFFF";}
	}
	else if ( BODY_COLOR==1 )
	{
		BODY_COLOR=0;
		//document.getElementsByTagName("body")[0].style.color="#000000";
		document.getElementsByTagName("body")[0].style.backgroundColor="#CCE8CF";
		for (i=0;i<elel_tag_a.length;i++)		{elel_tag_a[i].style.backgroundColor="#CCE8CF";}
	}
	else
	{
	}
	//console.log(document.getElementsByTagName("body")[0].style.color);
}

var TTI_1000=1000;//var transfer_time_interval_normal=1000;
var TTI_100=100;//var transfer_time_interval_small=100;
var TTI_10=10;//var transfer_time_interval_very_small=10;
var TTI_1=1;//var transfer_time_interval_mini_small=1;
var TTI_IN_USE=2*TTI_100;//var transfer_time_interval_in_use=100;
var Timing_Mode;
Timing_Mode=0;

function Hotkey_Mouse(ele,evt,post_method)
{
	var i,j,k,m,n;
	var str00,str01,str02,str03,str04;
	var ele00,ele01,ele02,ele03,ele04;
	var fun_str;
	var Num_X;

	if ( evt.which>=48 && evt.which<=57 )			{Num_X=evt.which-48;}//Left_Top_NUM:0-9:48-57;
	else if ( evt.which>=96 && evt.which<=105 )		{Num_X=evt.which-96;}//Right_Rectangle_NUM0-9:96-105;
	else if ( evt.which==84 )						{}//t:84;
	else											{}
	if ( Num_X>=0 && Num_X<=9 )						{fun_str="BGColor_Switch_" + ("00" + Num_X.toString()).slice(-2) + "();";}

	if ( post_method==0 && evt && evt.type=="keydown" && evt.which==84 )
	{
		//t:84;
		if ( evt.target.tagName.toUpperCase()=="BODY" && ele.tagName.toUpperCase()=="BODY" )
		{
			Timing_Mode=(Timing_Mode + 1)%2;
		}
		else
		{
		}
	}
	if ( post_method==0 && evt && evt.type=="keydown" && (evt.which>=48 && evt.which<=57) || (evt.which>=96 && evt.which<=105) )
	{
		//Left_Top_NUM:0-9:48-57;
		//Right_Rectangle_NUM0-9:96-105;
		if ( evt.target.tagName.toUpperCase()=="BODY" && ele.tagName.toUpperCase()=="BODY" )
		{
			if ( Timing_Mode==0 )
			{
				eval(fun_str);
			}
			else if ( Timing_Mode==1 )
			{
				eval(fun_str);
				setTimeout(function(){Hotkey_Mouse(ele,evt,post_method);},TTI_IN_USE);
			}
			else
			{
				eval(fun_str);
			}
		}
		else
		{
		}
	}
	else
	{
	}

	console.log(evt.type + "\n" + evt.which + "\n" + evt.target.tagName + "\n" + ele.tagName + "\n" + 
					"Num_X == " + Num_X + "\n" + "Timing_Mode == " + Timing_Mode);
}
