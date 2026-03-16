//========================================Base_Function========================================
//==========DIVISION==========
function Parameter_Base_STR_ijk_XX(p_num)
{
	var i,j,str00,arr00;
	str00="";
	str00+="var i,j,k,m,n,p,q,r,s,t;" + "\n";
	arr00=["num","ele","elel","str","arr","cls","fun","formData","file"];
	//arr00=["num","ele","elel",,"str","arr","torf","flag"];

	for (i=0;i<arr00.length;i++)
	{
		str00+="var ";
		for (j=0;j<p_num;j++)
		{
			str00+=arr00[i] + ("00" + j.toString()).slice(-2);
			if ( j<(p_num - 1) )			{str00+=",";}
			else if ( j==(p_num - 1) )		{str00+=";" + "\n";}
			else							{}
		}
	}

	return str00;
}

function createArray(length)
{
	var arr=new Array(length||0),i=length;
	if ( arguments.length>1 )
	{
		var args=Array.prototype.slice.call(arguments,1);
		while(i--)
		{
			arr[length-1-i]=createArray.apply(this,args);
		}
	}
	return arr;
}

String.prototype.repeat = function( num )
{
	return new Array( num + 1 ).join( this );
};

function ReadTextFile(oFile)
{
	if (window.XMLHttpRequest)//code for IE7+, Firefox, Chrome, Opera, Safari
	{
		xmlhttp=new XMLHttpRequest();
	}
	else// code for IE6, IE5
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.open("GET",oFile,false);
	xmlhttp.send();
	var xmlText=xmlhttp.responseText; 
	return xmlText;
}

function amplifyMedia(mediaElem,multiplier)
{
	var context=new( window.AudioContext || window.webkitAudioContext );
	var result			=
	{
		context			:	context,
		source			:	context.createMediaElementSource(mediaElem),
		gain			:	context.createGain(),
		media			:	mediaElem,
		amplify			:	function(multiplier)
		{
			result.gain.gain.value=multiplier;
		},
		getAmpLevel		:	function()
		{
			return result.gain.gain.value;
		}
	};
	result.source.connect(result.gain);
	result.gain.connect(context.destination);
	result.amplify(multiplier);
	return result;
}

var TTIS=100;
var TTI_IN_USE=TTIS;
//==========DIVISION==========
var Screen_Width	=window.screen.width;
var Screen_Height	=window.screen.height;
//==========DIVISION==========
//解析操作系统信息。
var Platform		=navigator.platform;
var OS				="Unknown";
if ( Platform.match(/win/i) )					{OS={STR:"Windows",	ID:0	,	HWID:0,		HWSTR:"PC",			};}
else if ( Platform.match(/mac/i) )				{OS={STR:"MacOS",	ID:1	,	HWID:0,		HWSTR:"PC",			};}
else if ( Platform.match(/linux/i) )
{
	if ( Screen_Width>=Screen_Height )			{OS={STR:"Linux",	ID:2	,	HWID:0,		HWSTR:"PC",			};}
	else										{OS={STR:"Android",	ID:3	,	HWID:1,		HWSTR:"Mobile",		};}
}
else if ( Platform.match(/android/i) )			{OS={STR:"Android",	ID:3	,	HWID:1,		HWSTR:"Mobile",		};}
else if ( Platform.match(/iphone|ipad|ipod/i) )	{OS={STR:"iOS",		ID:4	,	HWID:1,		HWSTR:"Mobile",		};}
else											{}
//==========DIVISION==========
function OS_Screen_LEN_WOrH()
{
	var Screen_Width	=window.screen.width;
	var Screen_Height	=window.screen.height;
	var OS_Screen_LEN_WOrH_VAL={ID:0,STR:"Width"};
	if ( OS.ID==0 || OS.ID==1 || OS.ID==2 )			{}
	else if ( OS.ID==3 || OS.ID==4 )
	{
		if ( Screen_Width>=Screen_Height )			{}
		else if ( Screen_Width<Screen_Height )		{OS_Screen_LEN_WOrH_VAL={ID:1,STR:"Height"};}
		else		{}
	}
	else											{}
	return OS_Screen_LEN_WOrH_VAL;
}
//==========DIVISION==========
//========================================Base_Function========================================
//========================================Pre_Definition========================================
function ELE_ELEL_STR_INI(INI_Type)
{
	//==========DIVISION==========
	if ( INI_Type==0 )		{return "";}
	else if ( INI_Type==1 )	{}
	else					{}
	//==========DIVISION==========
	//==============================ELE_ELEL_STR_INI.Begin==============================
	//====================DIVISION====================
	//==========DIVISION==========
	//var ID,LEN,ID_LEN;
	//==========DIVISION==========
	var ele_CSS_Main						=document.getElementsByClassName("CSS_Main")[0];
	var ele_CSS_SD							=document.getElementsByClassName("CSS_SD")[0];
	var ele_MP3_Array_Ctrl_Table			=document.getElementsByClassName("MP3_Array_Ctrl_Table")[0];
	var ele_BG_IMG_Table					=document.getElementsByClassName("BG_IMG_Table")[0];
	var ele_MP3_Array_IFrame				=document.getElementsByClassName("MP3_Array_IFrame")[0];
	//==========DIVISION==========
	var ele_MP3_Array_Ctrl_ScrollTo_Top_BTN			=ele_MP3_Array_Ctrl_Table.getElementsByClassName("MP3_Array_Ctrl_ScrollTo_Top_BTN"			)[0];
	var ele_MP3_Array_Ctrl_ScrollTo_Bottom_BTN		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("MP3_Array_Ctrl_ScrollTo_Bottom_BTN"		)[0];
	//==========DIVISION==========
	var ele_BG_IMG_Type_SEL							=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Type_SEL"							)[0];
	var ele_BG_IMG_Shake_BTN						=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_BTN"							)[0];
	var ele_BG_IMG_Shake_CSS_ITV_Margin_Top_CLS		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_CSS_ITV_Margin_Top_CLS"		)[0];
	var ele_BG_IMG_Shake_CSS_ITV_Margin_Left_CLS	=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_CSS_ITV_Margin_Left_CLS"		)[0];
	var ele_BG_IMG_Shake_CSS_Margin_Slope_EAB		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_CSS_Margin_Slope_EAB"		)[0];
	var ele_BG_IMG_Shake_CSS_Margin_Slope_CLS		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_CSS_Margin_Slope_CLS"		)[0];
	var ele_BG_IMG_Shake_CSS_ITV_Zoom_CLS			=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_CSS_ITV_Zoom_CLS"			)[0];
	var ele_BG_IMG_Shake_CSS_ITV_Rotate_CLS			=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_CSS_ITV_Rotate_CLS"			)[0];
	var ele_BG_IMG_Shake_CSS_ITV_Opacity_CLS		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_CSS_ITV_Opacity_CLS"			)[0];
	//==========DIVISION==========
	var ele_DFCB_MP3_Array_Show_BTN					=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_Array_Show_BTN"					)[0];
	var ele_DFCB_MP3_Array_Clear_BTN				=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_Array_Clear_BTN"					)[0];
	var ele_DFCB_MP3_CT_SEL							=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_CT_SEL"							)[0];
	var ele_DFCB_MP3_Array_Show_Type_SEL			=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_Array_Show_Type_SEL"				)[0];
	//==========DIVISION==========
	var ele_Audio_CSS_Border_EAB					=ele_MP3_Array_Ctrl_Table.getElementsByClassName("Audio_CSS_Border_EAB"						)[0];
	var ele_IFrame_CSS_Border_EAB					=ele_MP3_Array_Ctrl_Table.getElementsByClassName("IFrame_CSS_Border_EAB"					)[0];
	var ele_IFrame_Video_NUM_Type_SEL				=ele_MP3_Array_Ctrl_Table.getElementsByClassName("IFrame_Video_NUM_Type_SEL"				)[0];
	var ele_IFrame_Play_Or_Not_Type_SEL				=ele_MP3_Array_Ctrl_Table.getElementsByClassName("IFrame_Play_Or_Not_Type_SEL"				)[0];
	var ele_Speed_Type_SEL							=ele_MP3_Array_Ctrl_Table.getElementsByClassName("Speed_Type_SEL"							)[0];
	//==========DIVISION==========
	function elelf_BG_IMG()							{return ele_BG_IMG_Table.getElementsByTagName("img");}
	//==========DIVISION==========
	function elelf_IFrame()							{return ele_MP3_Array_IFrame.getElementsByTagName("iframe");}
	function elelf_IFrame_WIN_OBJ(ID)				{return ele_MP3_Array_IFrame.getElementsByTagName("iframe")[ID].contentWindow;}
	//==========DIVISION==========
	//====================DIVISION====================
	//==============================ELE_ELEL_STR_INI.End==============================
	//==========DIVISION==========
	var fun_ct_cache;
	fun_ct_cache=arguments.callee;
	var str00;
	str00=fun_ct_cache.toString().replace(/\r\n/gm,"\n")
	//Use 0.104 s .//.replace(new RegExp("^[\\s\\S]+\\r\\n\\t+(\\/\\/=+BC_Code_Almost_Same_Area\\(\\\"" + 
	//Use 0.003 s .//.replace(new RegExp("^function[ ]*[\\s\\S]+\\r\\n\\t+(\\/\\/=+BC_Code_Almost_Same_Area\\(\\\"" + 
	//Use 0.001-0.002 s .//
	//.replace(new RegExp("^function[ ]*" + fun_ct_cache.name + "\\(INI_Type\\)\\n[\\t]*\\{\\n([\\t]*\\/\\/=+" + fun_ct_cache.name + "\.Begin)","gm"),"$1")
	.replace(new RegExp("^function[ ]*" + fun_ct_cache.name + 
	"\\(INI_Type\\)\\n[\\t]*\\{[\\s\\S]*\\n([\\t]*\\/\\/=+" + fun_ct_cache.name + "\.Begin)","gm"),"$1")
	.replace(new RegExp("(\\/\\/=+" + fun_ct_cache.name + "\.End=+\\n)[\\s\\S]*$","gm"),"$1")
	.replace(/(\n)[\t]{1}/gm,"$1");
	return str00;
	//==========DIVISION==========
}
//========================================Pre_Definition========================================
//========================================DFCB_XXXX_ARR_Function========================================
//==========DIVISION==========
//IMG_ART_V0000_02_12_NOJS_02_Main.html
//IMG_ART_V0000_02_12_NOJS_02_Sub.html
var MP3_Array_IFrame_SRC=location.href
.replace(/^(.+)(_Main.html)(\?.+)$/gm,"$1_Sub.html")
.replace(/^(.+)(_Main.html)(#.+)$/gm,"$1_Sub.html")
.replace(/^(.+)(_Main.html)(.+)$/gm,"$1_Sub.html")
.replace(/^(.+)(_Main.html)$/gm,"$1_Sub.html");
//==========DIVISION==========
//========================================DFCB_XXXX_ARR_Function========================================
//========================================MP3_Array_IFrame_Function========================================
var MP3_Array_CLS								=
{
	VAL											:
	{
		//==========DIVISION==========
		BG_IMG_Type_ID							:	0,//0:"右一";1:"右二";2:"左一";3:"左二";
		BG_IMG_Shake_State						:	0,//0:"Stop";1:"Start";
		BG_IMG_Shake_ST_ID						:	0,
		//==========DIVISION==========
		BG_IMG_Shake_CSS_ITV_Margin_Top			:	10,
		BG_IMG_Shake_CSS_ITV_Margin_Left		:	10,
		BG_IMG_Shake_CSS_Margin_Slope_EAB		:	0,//0:"Disabled";1:"Enabled";
		BG_IMG_Shake_CSS_Margin_Slope			:	1.000,
		BG_IMG_Shake_CSS_ITV_Zoom				:	0.000,
		BG_IMG_Shake_CSS_ITV_Rotate				:	0,
		BG_IMG_Shake_CSS_ITV_Opacity			:	0.000,
		//==========DIVISION==========
		DFCB_MP3_CT_ID							:	0,
		DFCB_MP3_Array_Show_Type				:	0,//0:"In_Order";1:"Random_Order";
		//==========DIVISION==========
		IFrame_Video_NUM_Type_ID				:	1,//Video_TD_012_X_TR_009___IFrame_TD_008_X_TR_006
		IFrame_Video_NUM_ARR					:	[0,0,0,0],
		IFrame_NUMX								:	0,
		IFrame_NUMY								:	0,
		Video_NUMX								:	0,
		Video_NUMY								:	0,
		//==========DIVISION==========
		Audio_CSS_Border_EAB					:	0,//0:"Disabled";1:"Enabled";
		IFrame_CSS_Border_EAB					:	0,//0:"Disabled";1:"Enabled";
		IFrame_Play_Or_Not_Type_ID				:	0,//0:"Inner_First_Paused";1:"Inner_First_Played";2:"Inner_ALL_Paused";3:"Inner_ALL_Played";
		//==========DIVISION==========
		Speed_Type_CM							:	5,
		Speed_Type_ID							:	21,
		Speed_Type_STR							:	"Speed:[0.9,10/9]",
		//==========DIVISION==========
	},
};

function MP3_Array_Ctrl_Table_INI()
{
	//==========DIVISION==========
	//eval(ELE_ELEL_STR_INI(0));
	eval(Parameter_Base_STR_ijk_XX(10));
	var ID,LEN,ID_LEN;
	var AR_ID;
	//==========DIVISION==========
	arr00=[MP3_Array_IFrame_SRC];
	LEN=arr00.length;
	//==========DIVISION==========
	ele00=ele_MP3_Array_Ctrl_Table;
	ele00.style.display="";
	//==========DIVISION==========
	ele_MP3_Array_Ctrl_ScrollTo_Top_BTN		.style.backgroundColor="#1EB0E9";
	ele_MP3_Array_Ctrl_ScrollTo_Bottom_BTN	.style.backgroundColor="#1EB0E9";
	//==========DIVISION==========
	ele01=ele_BG_IMG_Type_SEL				;
	ele02=ele_BG_IMG_Shake_BTN				;
	ele03=ele_DFCB_MP3_Array_Show_BTN		;
	ele04=ele_DFCB_MP3_Array_Clear_BTN		;
	ele05=ele_DFCB_MP3_CT_SEL				;
	ele06=ele_DFCB_MP3_Array_Show_Type_SEL	;
	ele07=ele_IFrame_Video_NUM_Type_SEL		;
	ele08=ele_IFrame_Play_Or_Not_Type_SEL	;
	ele09=ele_Speed_Type_SEL				;
	//==========DIVISION==========
	str01="";
	str01+="<option>右一</option>";
	str01+="<option>右二</option>";
	str01+="<option>左一</option>";
	str01+="<option>左二</option>";
	ele01.innerHTML=str01;ele01.selectedIndex=parseInt(4 * Math.random(),10);
	MP3_Array_CLS.VAL.BG_IMG_Type_ID=ele01.selectedIndex;//0:"右一";1:"右二";2:"左一";3:"左二";
	(function(){
		var ele,evt,post_method;
		ele=ele_MP3_Array_Ctrl_Table;evt={type:"change",target:ele_BG_IMG_Type_SEL};post_method=2;
		MP3_Array_Ctrl_Table_Action(ele,evt,post_method);
	})();
	//==========DIVISION==========
	ele02=ele00.getElementsByClassName("BG_IMG_Shake_BTN")[0];
	MP3_Array_CLS.VAL.BG_IMG_Shake_State=0;//0:"Stop";1:"Start";
	ele02.style.backgroundColor=["red","#1EB0E9"][MP3_Array_CLS.VAL.BG_IMG_Shake_State];
	MP3_Array_CLS.VAL.BG_IMG_Shake_ST_ID=0;
	ele03=ele00.getElementsByClassName("DFCB_MP3_Array_Show_BTN")[0];
	ele03.style.backgroundColor="#1EB0E9";
	ele04=ele00.getElementsByClassName("DFCB_MP3_Array_Clear_BTN")[0];
	ele04.style.backgroundColor="red";
	//==========DIVISION==========
	MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Margin_Top				=ele_BG_IMG_Shake_CSS_ITV_Margin_Top_CLS	.value=10;
	MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Margin_Left				=ele_BG_IMG_Shake_CSS_ITV_Margin_Left_CLS	.value=10;
	MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_Margin_Slope_EAB				=0;//0:"Disabled";1:"Enabled";
	ele_BG_IMG_Shake_CSS_Margin_Slope_EAB.style.backgroundColor		=["red","#1EB0E9"][MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_Margin_Slope_EAB];
	BG_IMG_CSS_VAL_CLS.Margin_Slope									=
	MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_Margin_Slope					=ele_BG_IMG_Shake_CSS_Margin_Slope_CLS		.value=1.000;
	MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Zoom						=ele_BG_IMG_Shake_CSS_ITV_Zoom_CLS			.value=0.000;
	MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Rotate					=ele_BG_IMG_Shake_CSS_ITV_Rotate_CLS		.value=0;
	MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Opacity					=ele_BG_IMG_Shake_CSS_ITV_Opacity_CLS		.value=0.000;
	//==========DIVISION==========
	str05="";
	str05+="<option>DFJF_MP3_ALL</option>";
	str05+="<option>DFJF_MP3_One</option>";
	str05+="<option>ET_BGM_ALL</option>";
	str05+="<option>ET_BGM_One</option>";
	ele05.innerHTML=str05;ele05.selectedIndex=0;
	MP3_Array_CLS.VAL.DFCB_MP3_CT_ID=ele05.selectedIndex;
	//==========DIVISION==========
	str06="";
	str06+="<option>In_Order</option>";
	str06+="<option>Random_Order</option>";
	ele06.innerHTML=str06;ele06.selectedIndex=parseInt(2 * Math.random(),10);
	MP3_Array_CLS.VAL.DFCB_MP3_Array_Show_Type=ele06.selectedIndex;
	//==========DIVISION==========
	//0:"Disabled";1:"Enabled";
	MP3_Array_CLS.VAL.Audio_CSS_Border_EAB=num00=parseInt(2 * Math.random(),10);
	ele_Audio_CSS_Border_EAB.style.backgroundColor=["red","#1EB0E9"][num00];
	//0:"Disabled";1:"Enabled";
	MP3_Array_CLS.VAL.IFrame_CSS_Border_EAB=num01=parseInt(2 * Math.random(),10);
	ele_IFrame_CSS_Border_EAB.style.backgroundColor=["red","#1EB0E9"][num01];
	//==========DIVISION==========
	ele_CSS_Main.innerHTML=ele_CSS_Main.innerHTML
		.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;\-]padding\:)([0-9]+)(px;.+)$/gm,"$1" + [0,3][num01] + "$3")
		.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;\-]border\-width\:)([0-9]+)(px;.+)$/gm,"$1" + [[0,1],[0,0]][num00][num01] + "$3")
		;
	//	[num00,num01,border-width]
	//	[0,		0,		0]
	//	[0,		1,		1]
	//	[1,		0,		0]
	//	[1,		1,		0]
	//==========DIVISION==========
	//Video_TD_012_X_TR_009___IFrame_TD_001_X_TR_001
	//Video_TD_008_X_TR_006___IFrame_TD_001_X_TR_001
	//Video_TD_004_X_TR_003___IFrame_TD_001_X_TR_001
	//Video_TD_001_X_TR_001___IFrame_TD_008_X_TR_006
	//Video_TD_001_X_TR_001___IFrame_TD_012_X_TR_009
	//Video_TD_001_X_TR_001___IFrame_TD_024_X_TR_018
	//Video_TD_012_X_TR_009___IFrame_TD_008_X_TR_006
	//Video_TD_008_X_TR_006___IFrame_TD_012_X_TR_009
	//Video_TD_004_X_TR_003___IFrame_TD_024_X_TR_018
	str07="";
	str07+="<option>VX012_VY014_IFX001_IFY001</option>";
	str07+="<option>VX012_VY009_IFX001_IFY001</option>";
	str07+="<option>VX008_VY006_IFX001_IFY001</option>";
	str07+="<option>VX004_VY003_IFX001_IFY001</option>";
	str07+="<option>VX001_VY001_IFX008_IFY006</option>";
	str07+="<option>VX001_VY001_IFX012_IFY009</option>";
	str07+="<option>VX001_VY001_IFX024_IFY018</option>";
	str07+="<option>VX012_VY009_IFX008_IFY006</option>";
	str07+="<option>VX008_VY006_IFX012_IFY009</option>";
	str07+="<option>VX004_VY003_IFX024_IFY018</option>";
	ele07.innerHTML=str07;ele07.selectedIndex=4;
	MP3_Array_CLS.VAL.IFrame_Video_NUM_Type_ID=ele07.selectedIndex;//Video_TD_012_X_TR_009___IFrame_TD_008_X_TR_006
	//==========DIVISION==========
	//str07+="<option>VX012_VY009_IFX008_IFY006</option>";
	str00=ele07.options[ele07.selectedIndex].value;
	str01="arr00=[" + 
	str00.replace(/^VX[0]*([1-9])([0-9]*)_VY[0]*([1-9])([0-9]*)_IFX[0]*([1-9])([0-9]*)_IFY[0]*([1-9])([0-9]*)$/gm,"$1$2,$3$4,$5$6,$7$8") + 
	"];";
	eval(str01);
	//==========DIVISION==========
	MP3_Array_CLS.VAL.IFrame_Video_NUM_ARR	=arr00;
	MP3_Array_CLS.VAL.IFrame_NUMX			=arr00[2];
	MP3_Array_CLS.VAL.IFrame_NUMY			=arr00[3];
	MP3_Array_CLS.VAL.Video_NUMX			=arr00[0];
	MP3_Array_CLS.VAL.Video_NUMY			=arr00[1];
	//==========DIVISION==========
	num00=Screen_Width / MP3_Array_CLS.VAL.IFrame_NUMX;
	num01=Screen_Height / MP3_Array_CLS.VAL.IFrame_NUMY;
	ele_CSS_Main.innerHTML=
	ele_CSS_Main.innerHTML	.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;]width\:)([0-9]+)(px;.+)$/gm,"$1" + num00 + "$3")
							.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;]height\:)([0-9]+)(px;.+)$/gm,"$1" + num01 + "$3");
	console.log("num00 : " + num00 + ";\t" + 
				"num01 : " + num01 + ";\t" + 
				"");
	//==========DIVISION==========
	str08="";
	str08+="<option>Inner_First_Paused</option>";
	str08+="<option>Inner_First_Played</option>";
	str08+="<option>Inner_ALL_Paused</option>";
	str08+="<option>Inner_ALL_Played</option>";
	ele08.innerHTML=str08;ele08.selectedIndex=parseInt(2 * Math.random(),10);
	MP3_Array_CLS.VAL.IFrame_Play_Or_Not_Type_ID=ele08.selectedIndex;//0:"Inner_First_Paused";1:"Inner_First_Played";2:"Inner_ALL_Paused";3:"Inner_ALL_Played";
	//==========DIVISION==========
	//"CM":"Calculate_Method";
	str09="";
	str09+="<option CM=0>Speed:[0.5]</option>";			//00;
	str09+="<option CM=0>Speed:[0.6]</option>";			//01;
	str09+="<option CM=0>Speed:[0.7]</option>";			//02;
	str09+="<option CM=0>Speed:[0.8]</option>";			//03;
	str09+="<option CM=0>Speed:[0.9]</option>";			//04;
	str09+="<option CM=0>Speed:[1.0]</option>";			//05;
	str09+="<option CM=0>Speed:[1.1]</option>";			//06;
	str09+="<option CM=0>Speed:[1.2]</option>";			//07;
	str09+="<option CM=0>Speed:[1.3]</option>";			//08;
	str09+="<option CM=0>Speed:[1.4]</option>";			//09;
	str09+="<option CM=0>Speed:[1.5]</option>";			//10;
	str09+="<option CM=0>Speed:[1.6]</option>";			//11;
	str09+="<option CM=0>Speed:[1.7]</option>";			//12;
	str09+="<option CM=0>Speed:[1.8]</option>";			//13;
	str09+="<option CM=0>Speed:[1.9]</option>";			//14;
	str09+="<option CM=0>Speed:[2.0]</option>";			//15;
	str09+="<option CM=1>Speed:[0.8,1.2]</option>";		//16;
	str09+="<option CM=2>Speed:[0.5,2]</option>";		//17;
	str09+="<option CM=2>Speed:[0.6,5/3]</option>";		//18;
	str09+="<option CM=2>Speed:[0.7,10/7]</option>";	//19;
	str09+="<option CM=2>Speed:[0.8,1.25]</option>";	//20;
	str09+="<option CM=2>Speed:[0.9,10/9]</option>";	//21;
	ele09.innerHTML=str09;ele09.selectedIndex=5;
	MP3_Array_CLS.VAL.Speed_Type_CM=2;
	MP3_Array_CLS.VAL.Speed_Type_ID=ele09.selectedIndex;
	MP3_Array_CLS.VAL.Speed_Type_STR=ele09.value;
	//==========DIVISION==========
}

var BG_IMG_CSS_Code_Area	=1;
var BG_IMG_CSS_VAL_ITV_CLS	={Margin_Top:10,Margin_Left:10,Zoom:0.000,Rotate:0,Opacity:0.000};
var BG_IMG_CSS_VAL_CLS		={Margin_Slope_EAB:0,Margin_Slope:1.000};
var BG_IMG_CSS_ARR			=
[
	[
		{Margin_Top:-1520,Margin_Left:-3000,Zoom:1,Rotate:0,Opacity:1},
		{Margin_Top:-1616,Margin_Left:-3000,Zoom:1,Rotate:0,Opacity:1},
		{Margin_Top:-1616,Margin_Left:-944,	Zoom:1,Rotate:0,Opacity:1},
		{Margin_Top:-1520,Margin_Left:-944,	Zoom:1,Rotate:0,Opacity:1},
	],
	[
		{Margin_Top:-2344,Margin_Left:-2176,Zoom:1,Rotate:90,Opacity:1},
		{Margin_Top:-2440,Margin_Left:-2176,Zoom:1,Rotate:90,Opacity:1},
		{Margin_Top:-2440,Margin_Left:-120,	Zoom:1,Rotate:270,Opacity:1},
		{Margin_Top:-2344,Margin_Left:-120,	Zoom:1,Rotate:270,Opacity:1},
	]
];
var BG_IMG_URL_ARR=
[
	[
		"MLH_020/MLH_010_R_R090.jpg",
		"MLH_020/MLH_011_M_R090.jpg",
		"MLH_020/MLH_030_R_R270.jpg",
		"MLH_020/MLH_031_M_R270.jpg",
	],
	[
		"MLH_020/master_Li_high.jpg",
		"MLH_020/master_Li_high.jpg",
		"MLH_020/master_Li_high.jpg",
		"MLH_020/master_Li_high.jpg",
	]
];

function MP3_Array_Ctrl_Table_Action(ele,evt,post_method)
{
	//==============================arguments.callee==============================
	var fun_ct_cache;
	fun_ct_cache=arguments.callee;
	var STO=0;//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
	//==============================arguments.callee==============================
	//====================Pre_Definition====================
	//==========DIVISION==========
	//eval(ELE_ELEL_STR_INI(0));
	eval(Parameter_Base_STR_ijk_XX(10));
	var ID,LEN,ID_LEN;
	var CAT_ID_00,CAT_ID_01,CAT_ID_02;
	var INI_Type;
	var Code_Area;
	//==========DIVISION==========
	var parseType="",parseType_STR="",RegExp_STR="";
	//==========DIVISION==========
	var evt_target = evt.target ? evt.target : evt.srcElement;
	//==========DIVISION==========
	if ( evt_target.className=="" )		{return;}
	//==========DIVISION==========
	//====================Pre_Definition====================
	//====================DIVISION====================
	//==========DIVISION==========
	//	var ele_BG_IMG_Type_SEL					=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Type_SEL"				)[0];
	//	var ele_BG_IMG_Shake_BTN				=ele_MP3_Array_Ctrl_Table.getElementsByClassName("BG_IMG_Shake_BTN"				)[0];
	//	var ele_DFCB_MP3_Array_Show_BTN			=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_Array_Show_BTN"		)[0];
	//	var ele_DFCB_MP3_Array_Clear_BTN		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_Array_Clear_BTN"		)[0];
	//	var ele_DFCB_MP3_CT_SEL					=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_CT_SEL"				)[0];
	//	var ele_DFCB_MP3_Array_Show_Type_SEL	=ele_MP3_Array_Ctrl_Table.getElementsByClassName("DFCB_MP3_Array_Show_Type_SEL"	)[0];
	//	var ele_IFrame_Video_NUM_Type_SEL		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("IFrame_Video_NUM_Type_SEL"	)[0];
	//	var ele_IFrame_Play_Or_Not_Type_SEL		=ele_MP3_Array_Ctrl_Table.getElementsByClassName("IFrame_Play_Or_Not_Type_SEL"	)[0];
	//	var ele_Speed_Type_SEL					=ele_MP3_Array_Ctrl_Table.getElementsByClassName("Speed_Type_SEL"				)[0];
	//==========DIVISION==========
	//	var MP3_Array_CLS					=
	//	{
	//		VAL								:
	//		{
	//			BG_IMG_Type_ID				:	0,//0:"右一";1:"右二";2:"左一";3:"左二";
	//			BG_IMG_Shake_State			:	0,//0:"Stop";1:"Start";
	//			BG_IMG_Shake_ST_ID			:	0,
	//			DFCB_MP3_CT_ID				:	0,
	//			DFCB_MP3_Array_Show_Type	:	0,//0:"In_Order";1:"Random_Order";
	//			IFrame_Video_NUM_Type_ID	:	1,//Video_TD_012_X_TR_009___IFrame_TD_008_X_TR_006
	//			IFrame_Video_NUM_ARR		:	[0,0,0,0],
	//			IFrame_NUMX					:	0,
	//			IFrame_NUMY					:	0,
	//			Video_NUMX					:	0,
	//			Video_NUMY					:	0,
	//			IFrame_Play_Or_Not_Type_ID	:	0,//0:"Inner_First_Paused";1:"Inner_First_Played";2:"Inner_ALL_Paused";3:"Inner_ALL_Played";
	//			Speed_Type_ID				:	5,
	//		},
	//	};
	//==========DIVISION==========
	//====================DIVISION====================
	if ( post_method==2 && evt && evt.type=="change" )//onchange;
	{
		//==========DIVISION==========
		if ( ele.className=="MP3_Array_Ctrl_Table" && 
			( evt_target.className=="BG_IMG_Type_SEL" || evt_target.className=="DFCB_MP3_CT_SEL" || evt_target.className=="DFCB_MP3_Array_Show_Type_SEL" || 
				evt_target.className=="IFrame_Video_NUM_Type_SEL" || evt_target.className=="IFrame_Play_Or_Not_Type_SEL" || 
				evt_target.className=="Speed_Type_SEL" || 
				0 ) )
		{
			//==========DIVISION==========
			parseType_STR="evt_target.selectedIndex";
			str00="MP3_Array_CLS.VAL." + evt_target.className.replace(/_SEL$/gm,"_ID") + "=" + parseType_STR + ";";
			eval(str00);
			//==========DIVISION==========
			if ( evt_target.className=="DFCB_MP3_CT_SEL" || evt_target.className=="DFCB_MP3_Array_Show_Type_SEL" || 
					evt_target.className=="IFrame_Video_NUM_Type_SEL" || evt_target.className=="IFrame_Play_Or_Not_Type_SEL" || 
					evt_target.className=="Speed_Type_SEL" || 
					0 )
			{
				LEN=elelf_IFrame().length;
				for (ID=0;ID<LEN;ID++)
				{
					str00="elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL." + evt_target.className.replace(/_SEL$/gm,"ID") + 
						"=MP3_Array_CLS.VAL." + evt_target.className.replace(/_SEL$/gm,"_ID") + ";";
					eval(str00);
				}
			}
			else		{}
			//==========DIVISION==========
			if ( evt_target.className=="BG_IMG_Type_SEL" )
			{
				//==========DIVISION==========
				var url00,url01,url02,url03,url04;
				Code_Area=BG_IMG_CSS_Code_Area;//Code_Area=1;
				//==========DIVISION==========
				if ( Code_Area==0 )
				{
					//==========DIVISION==========
					//1920X1080;
					url00="MLH_020/MLH_010_R_R090.jpg";str00="";str00+="margin-top:-1520px;margin-left:-3000px;"	+ "zoom:1;";
					url01="MLH_020/MLH_011_M_R090.jpg";str01="";str01+="margin-top:-1616px;margin-left:-3000px;"	+ "zoom:1;";
					url02="MLH_020/MLH_030_R_R270.jpg";str02="";str02+="margin-top:-1616px;margin-left:-944px;"		+ "zoom:1;";
					url03="MLH_020/MLH_031_M_R270.jpg";str03="";str03+="margin-top:-1520px;margin-left:-944px;"		+ "zoom:1;";
					//==========DIVISION==========
					str00+="transform:rotate(0deg)rotateX(0deg)rotateY(0deg)rotateZ(0deg);";		str00+="opacity:1;";
					str01+="transform:rotate(0deg)rotateX(0deg)rotateY(0deg)rotateZ(0deg);";		str01+="opacity:1;";
					str02+="transform:rotate(0deg)rotateX(0deg)rotateY(0deg)rotateZ(0deg);";		str02+="opacity:1;";
					str03+="transform:rotate(0deg)rotateX(0deg)rotateY(0deg)rotateZ(0deg);";		str03+="opacity:1;";
					//==========DIVISION==========
				}
				else if ( Code_Area==1 )
				{
					//==========DIVISION==========
					//(5864-4216)/2=824;
					url00="MLH_020/master_Li_high.jpg";str00="";str00+="margin-top:-2344px;margin-left:-2176px;"	+ "zoom:1;";
					url01="MLH_020/master_Li_high.jpg";str01="";str01+="margin-top:-2440px;margin-left:-2176px;"	+ "zoom:1;";
					url02="MLH_020/master_Li_high.jpg";str02="";str02+="margin-top:-2440px;margin-left:-120px;"		+ "zoom:1;";
					url03="MLH_020/master_Li_high.jpg";str03="";str03+="margin-top:-2344px;margin-left:-120px;"		+ "zoom:1;";
					//==========DIVISION==========
					str00+="transform:rotate(90deg)rotateX(0deg)rotateY(0deg)rotateZ(0deg);";		str00+="opacity:1;";
					str01+="transform:rotate(90deg)rotateX(0deg)rotateY(180deg)rotateZ(0deg);";		str01+="opacity:1;";
					str02+="transform:rotate(270deg)rotateX(0deg)rotateY(0deg)rotateZ(0deg);";		str02+="opacity:1;";
					str03+="transform:rotate(270deg)rotateX(0deg)rotateY(180deg)rotateZ(0deg);";	str03+="opacity:1;";
					//==========DIVISION==========
				}
				else		{}
				//==========DIVISION==========
				arr00=[url00,url01,url02,url03];
				arr01=[str00,str01,str02,str03];
				//==========DIVISION==========
				elelf_BG_IMG()[0].src=arr00[MP3_Array_CLS.VAL.BG_IMG_Type_ID];
				ele_CSS_Main.innerHTML=
				ele_CSS_Main.innerHTML	.replace(/^(table.BG_IMG_Table img.+\{)(.+)(\})$/gm,"$1" + arr01[MP3_Array_CLS.VAL.BG_IMG_Type_ID] + "$3");
				console.log("URL : " + arr00[MP3_Array_CLS.VAL.BG_IMG_Type_ID] + ";\t" + 
							"CSS : " + arr01[MP3_Array_CLS.VAL.BG_IMG_Type_ID] + ";\t" + 
							"");
				//==========DIVISION==========
			}
			else if ( evt_target.className=="IFrame_Video_NUM_Type_SEL" )
			{
				//==========DIVISION==========
				//str07+="<option>VX012_VY009_IFX008_IFY006</option>";
				str00=evt_target.options[evt_target.selectedIndex].value;
				str01="arr00=[" + 
				str00.replace(/^VX[0]*([1-9])([0-9]*)_VY[0]*([1-9])([0-9]*)_IFX[0]*([1-9])([0-9]*)_IFY[0]*([1-9])([0-9]*)$/gm,"$1$2,$3$4,$5$6,$7$8") + 
				"];";
				eval(str01);
				//==========DIVISION==========
				MP3_Array_CLS.VAL.IFrame_Video_NUM_ARR	=arr00;
				MP3_Array_CLS.VAL.IFrame_NUMX			=arr00[2];
				MP3_Array_CLS.VAL.IFrame_NUMY			=arr00[3];
				MP3_Array_CLS.VAL.Video_NUMX			=arr00[0];
				MP3_Array_CLS.VAL.Video_NUMY			=arr00[1];
				//==========DIVISION==========
				LEN=elelf_IFrame().length;
				for (ID=0;ID<LEN;ID++)
				{
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.IFrame_Video_NUM_ARR		=MP3_Array_CLS.VAL.IFrame_Video_NUM_ARR		;
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.IFrame_NUMX				=MP3_Array_CLS.VAL.IFrame_NUMX				;
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.IFrame_NUMY				=MP3_Array_CLS.VAL.IFrame_NUMY				;
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.Video_NUMX					=MP3_Array_CLS.VAL.Video_NUMX				;
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.Video_NUMY					=MP3_Array_CLS.VAL.Video_NUMY				;
				}
				//==========DIVISION==========
				num00=Screen_Width / MP3_Array_CLS.VAL.IFrame_NUMX;
				num01=Screen_Height / MP3_Array_CLS.VAL.IFrame_NUMY;
				ele_CSS_Main.innerHTML=
				ele_CSS_Main.innerHTML	.replace(/^(table.MP3_Array_IFrame td iframe.+[\{\;]width\:)([0-9]+)(px;.+)$/gm,"$1" + num00 + "$3")
										.replace(/^(table.MP3_Array_IFrame td iframe.+[\{\;]height\:)([0-9]+)(px;.+)$/gm,"$1" + num01 + "$3");
				console.log("num00 : " + num00 + ";\t" + 
							"num01 : " + num01 + ";\t" + 
							"");
				//==========DIVISION==========
			}
			else if ( evt_target.className=="IFrame_Play_Or_Not_Type_SEL" )
			{
				//==========DIVISION==========
				var IFIDX,IFIDY,VIDX,VIDY;
				var IFrame_NUMX=MP3_Array_CLS.VAL.IFrame_NUMX;
				var IFrame_NUMY=MP3_Array_CLS.VAL.IFrame_NUMY;
				var IFrame_Play_Or_Not_Type_ID=MP3_Array_CLS.VAL.IFrame_Play_Or_Not_Type_ID;
				var Play_Or_Not;
				//==========DIVISION==========
				for (IFIDY=0;IFIDY<IFrame_NUMY;IFIDY++)
				{
					for (IFIDX=0;IFIDX<IFrame_NUMX;IFIDX++)
					{
						ID=IFIDX + IFrame_NUMX * IFIDY;
						Play_Or_Not=Get_Play_Or_Not(IFrame_Play_Or_Not_Type_ID,IFIDX,IFIDY,IFrame_NUMX,IFrame_NUMY);
						elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.Play_Or_Not=Play_Or_Not;
					}
				}
				//==========DIVISION==========
			}
			else if ( evt_target.className=="Speed_Type_SEL" )
			{
				//==========DIVISION==========
				str00=evt_target.options[evt_target.selectedIndex].value;
				num00=parseInt(evt_target.options[evt_target.selectedIndex].getAttribute("CM"),10);
				//==========DIVISION==========
				MP3_Array_CLS.VAL.Speed_Type_CM		=num00	;
				MP3_Array_CLS.VAL.Speed_Type_ID				;
				MP3_Array_CLS.VAL.Speed_Type_STR	=str00	;
				//==========DIVISION==========
				LEN=elelf_IFrame().length;
				for (ID=0;ID<LEN;ID++)
				{
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.Speed_Type_CM	=MP3_Array_CLS.VAL.Speed_Type_CM	=num00	;
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.Speed_Type_ID	=MP3_Array_CLS.VAL.Speed_Type_ID			;
					elelf_IFrame_WIN_OBJ(ID).URL_VAR_CLS.VAL.Speed_Type_STR	=MP3_Array_CLS.VAL.Speed_Type_STR	=str00	;
				}
				//==========DIVISION==========
			}
			else		{}
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && 
				( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Top_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Left_CLS" || 
					evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" || 
					evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" || 
				0 ) )
		{
			//==========DIVISION==========
			if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" || 
				evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" || 
				//==========DIVISION==========
				0 )
			{parseType="parseFloat";	parseType_STR="parseFloat(evt_target.value)";	RegExp_STR="[0-9\.]+";}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Top_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Left_CLS" || 
				//==========DIVISION==========
				0 )
			{parseType="parseInt";		parseType_STR="parseInt(evt_target.value,10)";	RegExp_STR="[0-9]+";}
			else		{}
			//==========DIVISION==========
			if ( evt_target.value!="" && !isNaN(evt_target.value) && ( evt_target.value.replace(new RegExp(RegExp_STR,"gm"),"")=="" ) )
			{
				str00="";
				str00+="MP3_Array_CLS.VAL." + evt_target.className.replace(/^(BG_IMG_Shake_CSS_ITV_)(.+)_CLS$/gm,"$1$2") + "=" + parseType_STR + ";" + "\n";
				str00+="BG_IMG_CSS_VAL_ITV_CLS." + evt_target.className.replace(/^(BG_IMG_Shake_CSS_ITV_)(.+)_CLS$/gm,"$2") + "=" + parseType_STR + ";" + "\n";
				eval(str00);
				console.log(JSON.stringify(BG_IMG_CSS_VAL_ITV_CLS));
			}
			else
			{
				alert("Error , it must be setted to a number .");
				evt_target.focus();
				str00="evt_target.value=MP3_Array_CLS.VAL." + evt_target.className.replace(/^(BG_IMG_Shake_CSS_ITV_)(.+)_CLS$/gm,"$1$2") + ";";
				eval(str00);
				evt_target.setAttribute("value",evt_target.value);
			}
			//==========DIVISION==========
			if ( evt_target.className=="" || evt_target.className=="" )
			{
			}
			else		{}
			//==========DIVISION==========
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_CLS" )
		{
			//==========DIVISION==========
			parseType="parseFloat";	parseType_STR="parseFloat(evt_target.value)";	RegExp_STR="[0-9\-\.]+";
			//==========DIVISION==========
			if ( evt_target.value!="" && !isNaN(evt_target.value) && ( evt_target.value.replace(new RegExp(RegExp_STR,"gm"),"")=="" ) )
			{
				str00="";
				str00+="MP3_Array_CLS.VAL." + evt_target.className.replace(/^(BG_IMG_Shake_CSS_)(.+)_CLS$/gm,"$1$2") + "=" + parseType_STR + ";" + "\n";
				str00+="BG_IMG_CSS_VAL_CLS." + evt_target.className.replace(/^(BG_IMG_Shake_CSS_)(.+)_CLS$/gm,"$2") + "=" + parseType_STR + ";" + "\n";
				eval(str00);
				console.log(str00);
				console.log(JSON.stringify(BG_IMG_CSS_VAL_CLS));
			}
			else
			{
				alert("Error , it must be setted to a number .");
				evt_target.focus();
				str00="evt_target.value=MP3_Array_CLS.VAL." + evt_target.className.replace(/^(BG_IMG_Shake_CSS_)(.+)_CLS$/gm,"$1$2") + ";";
				eval(str00);
				evt_target.setAttribute("value",evt_target.value);
			}
			//==========DIVISION==========
			if ( evt_target.className=="" || evt_target.className=="" )
			{
			}
			else		{}
			//==========DIVISION==========
		}
		else		{}
		//==========DIVISION==========
	}
	else if ( post_method==3 && evt && evt.type=="click" )//onclick;
	{
		if ( ele.className=="MP3_Array_Ctrl_Table" && evt_target.className=="BG_IMG_Shake_BTN" )
		{
			//==========DIVISION==========
			//0:"Stop";1:"Start";
			num00=MP3_Array_CLS.VAL.BG_IMG_Shake_State;
			num00=(num00 + 1)%2;
			evt_target.style.backgroundColor=["red","#1EB0E9"][num00];
			MP3_Array_CLS.VAL.BG_IMG_Shake_State=num00;
			//==========DIVISION==========
			clearTimeout(MP3_Array_CLS.VAL.BG_IMG_Shake_ST_ID);
			if ( num00==0 )
			{
				(function(){
					var ele,evt,post_method;
					ele=ele_MP3_Array_Ctrl_Table;evt={type:"change",target:ele_BG_IMG_Type_SEL};post_method=2;
					MP3_Array_Ctrl_Table_Action(ele,evt,post_method);
				})();
			}
			else if ( num00==1 )
			{
				MP3_Array_CLS.VAL.BG_IMG_Shake_ST_ID=setTimeout(function ()
				{
					//==========DIVISION==========
					//console.clear();
					//clearTimeout(MP3_Array_CLS.VAL.BG_IMG_Shake_ST_ID);
					//==========DIVISION==========
					var fun_ct_cache_00;
					fun_ct_cache_00=arguments.callee;
					//==========DIVISION==========
					//eval(ELE_ELEL_STR_INI(0));
					eval(Parameter_Base_STR_ijk_XX(10));
					var ID,LEN,ID_LEN;
					var AR_ID;
					var Code_Area;
					//==========DIVISION==========
					var TTI_SD=TTI_IN_USE;TTI_SD=10;
					//==========DIVISION==========
					var url00,url01,url02,url03,url04;
					Code_Area=BG_IMG_CSS_Code_Area;//Code_Area=1;
					//==========DIVISION==========
					arr00=BG_IMG_URL_ARR[BG_IMG_CSS_Code_Area];
					arr02=BG_IMG_CSS_ARR[BG_IMG_CSS_Code_Area];
					//BG_IMG_CSS_ARR[BG_IMG_CSS_Code_Area][MP3_Array_CLS.VAL.BG_IMG_Type_ID];
					//BG_IMG_URL_ARR[BG_IMG_CSS_Code_Area][MP3_Array_CLS.VAL.BG_IMG_Type_ID];
					cls02=BG_IMG_CSS_VAL_ITV_CLS;
					//==========DIVISION==========
					function VAL_ITV_CLS(BG_IMG_CSS_ARRI2,Type_ID,Attr,VAL_Type,ITV_CLS)
					{
						var str00,num02,num03,str02,str03;
						str00="";
						str00+="num02=BG_IMG_CSS_ARRI2[Type_ID]." + Attr + ";" + "\n";
						str00+="num00=ITV_CLS." + Attr + ";" + "\n";
						eval(str00);
						if ( VAL_Type=="INT" )
						{
							num03=parseInt((num00 + 1) * Math.random(),10) * [-1,1][parseInt(2 * Math.random(),10)];
						}
						else if ( VAL_Type=="FLOAT" )
						{
							num03=parseFloat(num00 * Math.random()) * [-1,1][parseInt(2 * Math.random(),10)];
						}
						else		{}
						num02+=num03;
						str03=num03.toString();
						str02=num02.toString();
						return {ITV:str03,STR:str02};
					}
					//==========DIVISION==========
					//1920X1080;
					//(5864-4216)/2=824;
					url00=arr00[0];str00="";
					url01=arr00[1];str01="";
					url02=arr00[2];str02="";
					url03=arr00[3];str03="";
					//==========DIVISION==========
					cls04=VAL_ITV_CLS(arr02,0,"Margin_Top","INT",cls02);
					cls05=VAL_ITV_CLS(arr02,1,"Margin_Top","INT",cls02);
					cls06=VAL_ITV_CLS(arr02,2,"Margin_Top","INT",cls02);
					cls07=VAL_ITV_CLS(arr02,3,"Margin_Top","INT",cls02);
					str00+="margin-top:" + cls04.STR + "px;";
					str01+="margin-top:" + cls05.STR + "px;";
					str02+="margin-top:" + cls06.STR + "px;";
					str03+="margin-top:" + cls07.STR + "px;";
					//==========DIVISION==========
					//0:"Disabled";1:"Enabled";
					if ( BG_IMG_CSS_VAL_CLS.Margin_Slope_EAB==0 )
					{
						str00+="margin-left:" + VAL_ITV_CLS(arr02,0,"Margin_Left","INT",cls02).STR + "px;";
						str01+="margin-left:" + VAL_ITV_CLS(arr02,1,"Margin_Left","INT",cls02).STR + "px;";
						str02+="margin-left:" + VAL_ITV_CLS(arr02,2,"Margin_Left","INT",cls02).STR + "px;";
						str03+="margin-left:" + VAL_ITV_CLS(arr02,3,"Margin_Left","INT",cls02).STR + "px;";
					}
					else if ( BG_IMG_CSS_VAL_CLS.Margin_Slope_EAB==1 )
					{
						//	console.log(BG_IMG_CSS_VAL_CLS.Margin_Slope + "___" + 
						//				ParseInt((arr02[0].Margin_Left + parseInt(cls04.ITV,10) * -BG_IMG_CSS_VAL_CLS.Margin_Slope),10));
						str00+="margin-left:" + parseInt((arr02[0].Margin_Left + parseInt(cls04.ITV,10) * -BG_IMG_CSS_VAL_CLS.Margin_Slope),10).toString() + "px;";
						str01+="margin-left:" + parseInt((arr02[1].Margin_Left + parseInt(cls05.ITV,10) * -BG_IMG_CSS_VAL_CLS.Margin_Slope),10).toString() + "px;";
						str02+="margin-left:" + parseInt((arr02[2].Margin_Left + parseInt(cls06.ITV,10) * -BG_IMG_CSS_VAL_CLS.Margin_Slope),10).toString() + "px;";
						str03+="margin-left:" + parseInt((arr02[3].Margin_Left + parseInt(cls07.ITV,10) * -BG_IMG_CSS_VAL_CLS.Margin_Slope),10).toString() + "px;";
					}
					else		{}
					//==========DIVISION==========
					str00+="zoom:" + VAL_ITV_CLS(arr02,0,"Zoom","FLOAT",cls02).STR + ";";
					str01+="zoom:" + VAL_ITV_CLS(arr02,1,"Zoom","FLOAT",cls02).STR + ";";
					str02+="zoom:" + VAL_ITV_CLS(arr02,2,"Zoom","FLOAT",cls02).STR + ";";
					str03+="zoom:" + VAL_ITV_CLS(arr02,3,"Zoom","FLOAT",cls02).STR + ";";
					str00+="opacity:" + VAL_ITV_CLS(arr02,0,"Opacity","FLOAT",cls02).STR + ";";
					str01+="opacity:" + VAL_ITV_CLS(arr02,1,"Opacity","FLOAT",cls02).STR + ";";
					str02+="opacity:" + VAL_ITV_CLS(arr02,2,"Opacity","FLOAT",cls02).STR + ";";
					str03+="opacity:" + VAL_ITV_CLS(arr02,3,"Opacity","FLOAT",cls02).STR + ";";
					//==========DIVISION==========
					str00+="transform:rotate(" + VAL_ITV_CLS(arr02,0,"Rotate","FLOAT",cls02).STR + "deg)";
					str01+="transform:rotate(" + VAL_ITV_CLS(arr02,1,"Rotate","FLOAT",cls02).STR + "deg)";
					str02+="transform:rotate(" + VAL_ITV_CLS(arr02,2,"Rotate","FLOAT",cls02).STR + "deg)";
					str03+="transform:rotate(" + VAL_ITV_CLS(arr02,3,"Rotate","FLOAT",cls02).STR + "deg)";
					//==========DIVISION==========
					if ( Code_Area==0 )
					{
						//==========DIVISION==========
						str00+="rotateX(0deg)rotateY(0deg)rotateZ(0deg);";
						str01+="rotateX(0deg)rotateY(0deg)rotateZ(0deg);";
						str02+="rotateX(0deg)rotateY(0deg)rotateZ(0deg);";
						str03+="rotateX(0deg)rotateY(0deg)rotateZ(0deg);";
						//==========DIVISION==========
					}
					else if ( Code_Area==1 )
					{
						//==========DIVISION==========
						str00+="rotateX(0deg)rotateY(0deg)rotateZ(0deg);";
						str01+="rotateX(0deg)rotateY(180deg)rotateZ(0deg);";
						str02+="rotateX(0deg)rotateY(0deg)rotateZ(0deg);";
						str03+="rotateX(0deg)rotateY(180deg)rotateZ(0deg);";
						//==========DIVISION==========
					}
					else		{}
					//==========DIVISION==========
					arr00=[url00,url01,url02,url03];
					arr01=[str00,str01,str02,str03];
					//==========DIVISION==========
					//elelf_BG_IMG()[0].src=arr00[MP3_Array_CLS.VAL.BG_IMG_Type_ID];
					ele_CSS_Main.innerHTML=
					ele_CSS_Main.innerHTML	.replace(/^(table.BG_IMG_Table img.+\{)(.+)(\})$/gm,"$1" + arr01[MP3_Array_CLS.VAL.BG_IMG_Type_ID] + "$3");
					//	console.log("BG_IMG_Type_ID : " + MP3_Array_CLS.VAL.BG_IMG_Type_ID + " .\t" + 
					//				"URL : " + arr00[MP3_Array_CLS.VAL.BG_IMG_Type_ID] + " .\t" + 
					//				"CSS : " + arr01[MP3_Array_CLS.VAL.BG_IMG_Type_ID] + " ." + 
					//				"");
					//==========DIVISION==========
					MP3_Array_CLS.VAL.BG_IMG_Shake_ST_ID=setTimeout(fun_ct_cache_00,TTI_SD);
					//==========DIVISION==========
				},TTI_IN_USE);
			}
			else		{}
			//==========DIVISION==========
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_EAB" )
		{
			//0:"Disabled";1:"Enabled";
			num00=MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_Margin_Slope_EAB;
			num00=(num00 + 1)%2;
			evt_target.style.backgroundColor=["red","#1EB0E9"][num00];
			BG_IMG_CSS_VAL_CLS.Margin_Slope_EAB=
			MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_Margin_Slope_EAB=num00;
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && 
				( evt_target.className=="MP3_Array_Ctrl_ScrollTo_Top_BTN" || evt_target.className=="MP3_Array_Ctrl_ScrollTo_Bottom_BTN" ) )
		{
			//==========DIVISION==========
			var ele_TAG_A=document.createElement("a");
			ele_TAG_A.href="#" + evt_target.className.replace(/^(MP3_Array_Ctrl_)(ScrollTo_)(Top|Bottom)(_BTN)$/gm,"$1TD_$3");
			ele_TAG_A.click();
			//==========DIVISION==========
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && evt_target.className=="DFCB_MP3_Array_Show_BTN" )
		{
			//==========DIVISION==========
			MP3_Array_IFrame_INI(1);
			//==========DIVISION==========
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && evt_target.className=="DFCB_MP3_Array_Clear_BTN" )
		{
			//==========DIVISION==========
			MP3_Array_IFrame_INI(0);
			//==========DIVISION==========
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && evt_target.className=="Audio_CSS_Border_EAB" )
		{
			//==========DIVISION==========
			//0:"Disabled";1:"Enabled";
			num00=MP3_Array_CLS.VAL.Audio_CSS_Border_EAB;
			num00=(num00 + 1)%2;
			ele_Audio_CSS_Border_EAB.style.backgroundColor=["red","#1EB0E9"][num00];
			MP3_Array_CLS.VAL.Audio_CSS_Border_EAB=num00;
			//==========DIVISION==========
			var IFrame_NUMX		=MP3_Array_CLS.VAL.IFrame_NUMX	;
			var IFrame_NUMY		=MP3_Array_CLS.VAL.IFrame_NUMY	;
			var Video_NUMX		=MP3_Array_CLS.VAL.Video_NUMX	;
			var Video_NUMY		=MP3_Array_CLS.VAL.Video_NUMY	;
			//==========DIVISION==========
			num01=parseInt(Screen_Width / IFrame_NUMX,10)	 + [0,Video_NUMX * 2][num00];
			num02=parseInt(Screen_Height / IFrame_NUMY,10)	 + [0,Video_NUMY * 2][num00];
			ele_CSS_Main.innerHTML=ele_CSS_Main.innerHTML
				.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;]width\:)([0-9]+)(px;.+)$/gm,"$1" + num01 + "$3")
				.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;]height\:)([0-9]+)(px;.+)$/gm,"$1" + num02 + "$3")
				;
			//==========DIVISION==========
			LEN=elelf_IFrame().length;
			for (ID=0;ID<LEN;ID++)
			{
				elelf_IFrame_WIN_OBJ(ID).ele_CSS_Main.innerHTML=elelf_IFrame_WIN_OBJ(ID).ele_CSS_Main.innerHTML
					.replace(/^(table\.MP3_Array_Audio td.+[\{\;\-]border\-width\:)([0-9]+)(px;.+)$/gm,"$1" + [0,1][num00] + "$3")
					;
			}
			//==========DIVISION==========
		}
		else if ( ele.className=="MP3_Array_Ctrl_Table" && evt_target.className=="IFrame_CSS_Border_EAB" )
		{
			//==========DIVISION==========
			num00=MP3_Array_CLS.VAL.Audio_CSS_Border_EAB;
			//0:"Disabled";1:"Enabled";
			num01=MP3_Array_CLS.VAL.IFrame_CSS_Border_EAB;
			num01=(num01 + 1)%2;
			ele_IFrame_CSS_Border_EAB.style.backgroundColor=["red","#1EB0E9"][num01];
			MP3_Array_CLS.VAL.IFrame_CSS_Border_EAB=num01;
			//==========DIVISION==========
			ele_CSS_Main.innerHTML=ele_CSS_Main.innerHTML
				.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;\-]padding\:)([0-9]+)(px;.+)$/gm,"$1" + [0,3][num01] + "$3")
				.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;\-]border\-width\:)([0-9]+)(px;.+)$/gm,"$1" + [[0,1],[0,0]][num00][num01] + "$3")
				;
			//	[num00,num01,border-width]
			//	[0,		0,		0]
			//	[0,		1,		1]
			//	[1,		0,		0]
			//	[1,		1,		0]
			//==========DIVISION==========
		}
		else		{}
	}
	else		{}
	//====================DIVISION====================
}

function Get_Play_Or_Not(IFrame_Play_Or_Not_Type_ID,IFIDX,IFIDY,IFrame_NUMX,IFrame_NUMY)
{
	//==========DIVISION==========
	var Play_Or_Not=0;
	//==========DIVISION==========
	if ( IFrame_Play_Or_Not_Type_ID>=0 && IFrame_Play_Or_Not_Type_ID<=1 )//0:"Inner_First_Paused";1:"Inner_First_Played";
	{
		if ( IFIDX==0 || IFIDX==(IFrame_NUMX - 1) || IFIDY==0 || IFIDY==(IFrame_NUMY - 1) )
		{
			Play_Or_Not=0;
		}
		else if ( IFIDX!=0 && IFIDX!=(IFrame_NUMX - 1) && IFIDY!=0 && IFIDY!=(IFrame_NUMY - 1) )
		{
			if ( IFIDX%2==0 && IFIDY%2==0 || IFIDX%2==1 && IFIDY%2==1 )
			{
				Play_Or_Not=IFrame_Play_Or_Not_Type_ID;
			}
			else if ( IFIDX%2==0 && IFIDY%2==1 || IFIDX%2==1 && IFIDY%2==0 )
			{
				Play_Or_Not=(IFrame_Play_Or_Not_Type_ID + 1)%2;
			}
			else		{}
		}
		else		{}
	}
	else if ( IFrame_Play_Or_Not_Type_ID>=2 && IFrame_Play_Or_Not_Type_ID<=3 )//2:"Inner_ALL_Paused";3:"Inner_ALL_Played";
	{
		Play_Or_Not=IFrame_Play_Or_Not_Type_ID - 2;
	}
	else		{}
	//==========DIVISION==========
	return Play_Or_Not;
	//==========DIVISION==========
}

function MP3_Array_IFrame_INI(INI_Type)
{
	//==========DIVISION==========
	//eval(ELE_ELEL_STR_INI(0));
	eval(Parameter_Base_STR_ijk_XX(10));
	var ID,LEN,ID_LEN;
	var AR_ID;
	var IFIDX,IFIDY,VIDX,VIDY;
	//==========DIVISION==========
	var DFCB_MP3_CT_ID				=MP3_Array_CLS.VAL.DFCB_MP3_CT_ID				;
	var DFCB_MP3_Array_Show_Type	=MP3_Array_CLS.VAL.DFCB_MP3_Array_Show_Type		;
	var Audio_CSS_Border_EAB		=MP3_Array_CLS.VAL.Audio_CSS_Border_EAB			;
	var IFrame_Video_NUM_Type_ID	=MP3_Array_CLS.VAL.IFrame_Video_NUM_Type_ID		;
	var IFrame_Video_NUM_ARR		=MP3_Array_CLS.VAL.IFrame_Video_NUM_ARR			;
	var IFrame_NUMX					=MP3_Array_CLS.VAL.IFrame_NUMX					;
	var IFrame_NUMY					=MP3_Array_CLS.VAL.IFrame_NUMY					;
	var Video_NUMX					=MP3_Array_CLS.VAL.Video_NUMX					;
	var Video_NUMY					=MP3_Array_CLS.VAL.Video_NUMY					;
	var IFrame_Play_Or_Not_Type_ID	=MP3_Array_CLS.VAL.IFrame_Play_Or_Not_Type_ID	;
	var Speed_Type_CM				=MP3_Array_CLS.VAL.Speed_Type_CM				;
	var Speed_Type_ID				=MP3_Array_CLS.VAL.Speed_Type_ID				;
	var Speed_Type_STR				=MP3_Array_CLS.VAL.Speed_Type_STR				;
	//==========DIVISION==========
	var Play_Or_Not;
	//==========DIVISION==========
	str00="";
	str00+="\n";
	if ( INI_Type==0 )//"DFCB_MP3_Array_Clear_BTN";
	{
		str00+="";
	}
	else if ( INI_Type==1 )//"DFCB_MP3_Array_Show_BTN";
	{
		//==========DIVISION==========
		num00=Audio_CSS_Border_EAB;
		num01=parseInt(Screen_Width / IFrame_NUMX,10)	 + [0,Video_NUMX * 2][num00];
		num02=parseInt(Screen_Height / IFrame_NUMY,10)	 + [0,Video_NUMY * 2][num00];
		ele_CSS_Main.innerHTML=ele_CSS_Main.innerHTML
			.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;]width\:)([0-9]+)(px;.+)$/gm,"$1" + num01 + "$3")
			.replace(/^(table\.MP3_Array_IFrame td iframe.+[\{\;]height\:)([0-9]+)(px;.+)$/gm,"$1" + num02 + "$3")
			;
		//==========DIVISION==========
		for (IFIDY=0,m=0;IFIDY<IFrame_NUMY;IFIDY++)
		{
			str00+="\t".repeat(1) + "<tr>" + "\n";
			for (IFIDX=0;IFIDX<IFrame_NUMX;IFIDX++,m++)
			{
				//==========DIVISION==========
				Play_Or_Not=Get_Play_Or_Not(IFrame_Play_Or_Not_Type_ID,IFIDX,IFIDY,IFrame_NUMX,IFrame_NUMY);
				//==========DIVISION==========
				str00+="\t".repeat(2) + '<td>';
				str00+='<iframe src="' + MP3_Array_IFrame_SRC + 
					"?" + "DFCB_MP3_CT_ID"				 + '=' + encodeURIComponent(DFCB_MP3_CT_ID									) + ';' + 
					"&" + "DFCB_MP3_Array_Show_Type"	 + '=' + encodeURIComponent(DFCB_MP3_Array_Show_Type						) + ';' + 
					"&" + "Audio_CSS_Border_EAB"		 + '=' + encodeURIComponent(Audio_CSS_Border_EAB							) + ';' + 
					"&" + "IFrame_Video_NUM_Type_ID"	 + '=' + encodeURIComponent(IFrame_Video_NUM_Type_ID						) + ';' + 
					"&" + "IFrame_Video_NUM_ARR"		 + '=' + encodeURIComponent("[" + IFrame_Video_NUM_ARR.toString()	 + "]"	) + ';' + 
					"&" + "IFrame_Play_Or_Not_Type_ID"	 + '=' + encodeURIComponent(IFrame_Play_Or_Not_Type_ID						) + ';' + 
					"&" + "Play_Or_Not"					 + '=' + encodeURIComponent(Play_Or_Not										) + ';' + 
					"&" + "Speed_Type_CM"				 + '=' + encodeURIComponent(Speed_Type_CM									) + ';' + 
					"&" + "Speed_Type_ID"				 + '=' + encodeURIComponent(Speed_Type_ID									) + ';' + 
					"&" + "Speed_Type_STR"				 + '=' + encodeURIComponent('"' + Speed_Type_STR					 + '"'	) + ';' + 
					'"></iframe>' + "\n";
				str00+="\t".repeat(2) + '</td>';
				//==========DIVISION==========
			}
			str00+="\t".repeat(1) + "</tr>" + "\n";
		}
		//==========DIVISION==========
	}
	else		{}
	ele_MP3_Array_IFrame.style.display="none";
	ele_MP3_Array_IFrame.getElementsByTagName("tbody")[0].innerHTML=str00;
	ele_MP3_Array_IFrame.style.display="";
	//==========DIVISION==========
}
//MP3_Array_IFrame_INI(INI_Type);

function MP3_Array_IFrame_ST_Do()
{
	//==========DIVISION==========
	//eval(ELE_ELEL_STR_INI(0));
	eval(Parameter_Base_STR_ijk_XX(10));
	var ID,LEN,ID_LEN;
	var AR_ID;
	var IFrame_ID;
	//==========DIVISION==========
	ele00=document.getElementsByClassName("MP3_Array_IFrame")[0];
	elel00=ele00.getElementsByTagName("td");
	IFrame_ID=0;
	setTimeout(function (elel00,IFrame_ID)
	{
		//==========DIVISION==========
		//console.clear();
		//==========DIVISION==========
		var fun_ct_cache_00;
		fun_ct_cache_00=arguments.callee;
		//==========DIVISION==========
		//eval(ELE_ELEL_STR_INI(0));
		eval(Parameter_Base_STR_ijk_XX(10));
		var ID,LEN,ID_LEN;
		var AR_ID;
		var WObj_Cache;
		//==========DIVISION==========
		var TTI_SD=TTI_IN_USE;
		var Thread_Num=1,Thread_Capacity_Num=5;
		var Do_Action_ID=1;
		//==========DIVISION==========
		for (j=0,i=IFrame_ID;j<Thread_Capacity_Num && i>=0 && i<elel00.length;j++,i++)
		{
			//==========DIVISION==========
			WObj_Cache=elel00[i].getElementsByTagName("iframe")[0];
			//==========DIVISION==========
			if ( WObj_Cache==undefined )		{Do_Action_ID=0;break;}
			else if ( WObj_Cache!=undefined && WObj_Cache.contentWindow.document.readyState=="complete" )		{}
			else		{}
			//==========DIVISION==========
		}
		//==========DIVISION==========
		if ( Do_Action_ID==0 )
		{
			//==========DIVISION==========
			arr00=[MP3_Array_IFrame_SRC];
			LEN=arr00.length;
			//==========DIVISION==========
			for (j=0,i=IFrame_ID;j<Thread_Capacity_Num && i>=0 && i<elel00.length;j++,i++)
			{
				//==========DIVISION==========
				WObj_Cache=elel00[i].getElementsByTagName("iframe")[0];
				//==========DIVISION==========
				if ( WObj_Cache==undefined )
				{
					//==========DIVISION==========
					m=parseInt(Math.random() * LEN,10);
					//==========DIVISION==========
					elel00[i].innerHTML='<iframe src="' + arr00[m] + '"></iframe>';
					//==========DIVISION==========
					console.log("IFrame_ID : " + IFrame_ID + ";\t" + 
								"i : " + i + ";\t" + 
								"");
					//==========DIVISION==========
				}
				else if ( WObj_Cache!=undefined && WObj_Cache.contentWindow.document.readyState=="complete" )		{}
				else		{}
				//==========DIVISION==========
			}
			//==========DIVISION==========
		}
		else if ( Do_Action_ID==1 )
		{
			//==========DIVISION==========
			IFrame_ID+=Thread_Capacity_Num;
			//==========DIVISION==========
			console.log("Thread_Capacity_Num : " + Thread_Capacity_Num + ";\t" + 
						"IFrame_ID : " + IFrame_ID + ";\t" + 
						"");
			//==========DIVISION==========
		}
		else		{}
		//==========DIVISION==========
		if ( IFrame_ID>=0 && IFrame_ID<elel00.length )
		{
			setTimeout(fun_ct_cache_00,TTI_SD,elel00,IFrame_ID);
		}
		else		{}
		//==========DIVISION==========
	},TTI_IN_USE,elel00,IFrame_ID);
	//==========DIVISION==========
}
//MP3_Array_IFrame_ST_Do();
//========================================MP3_Array_IFrame_Function========================================
//==================================================控件動作變化==================================================
function TEXT_ATTRIBUTION(ele,evt,n)
{
	eval(Parameter_Base_STR_ijk_XX(5));
	//eval(ELE_ELEL_STR_INI(0));

	//console___log("function now is : TEXT_ATTRIBUTION(ele,evt,n)");

	//IE7 : evt.srcElement ;Other : evt.target;
	var evt_target = evt.target ? evt.target : evt.srcElement;
	//alert(evt_target.tagName);

	var ele_disabled;
	if ( n==0 )//鼠標移入。
	{
		if ( evt_target.tagName.toUpperCase()=="TEXTAREA" || evt_target.tagName.toUpperCase()=="INPUT" || evt_target.tagName.toUpperCase()=="SELECT" )
		{
			try
			{
				if ( evt_target.disabled==true )	{ele_disabled=true;evt_target.disabled=false;}
				evt_target.focus();//設置焦點。
				evt_target.select();//選中全文。
				if ( ele_disabled==true )			{evt_target.disabled=true;}
			}
			catch (err)
			{
				console___log(err.message);
			}
		}
		else		{}
	}
	else if ( n==1 )//鼠標移出。
	{
		//ele.blur();//失去焦點。
	}
	else if ( n==2 )//更改了文本框的內容。
	{
		//==========DIVISION==========
		var parseType="",parseType_STR="",RegExp_STR="";
		//==========DIVISION==========
		if ( ele.className=="MP3_Array_Table" && 
				( evt_target.className=="" || 
				//==========DIVISION==========
				0 ) )
		{
			//==========DIVISION==========
			if ( evt_target.className=="" || 
				//==========DIVISION==========
				0 )
			{parseType="parseFloat";	parseType_STR="parseFloat(evt_target.value)";	RegExp_STR="[0-9\.]+";}
			else if ( evt_target.className=="" || 
				//==========DIVISION==========
				0 )
			{parseType="parseInt";		parseType_STR="parseInt(evt_target.value,10)";	RegExp_STR="[0-9]+";}
			else		{}
			//==========DIVISION==========
			if ( evt_target.value!="" && !isNaN(evt_target.value) && ( evt_target.value.replace(new RegExp(RegExp_STR,"gm"),"")=="" ) )
			{
				str00="MP3_Array_CLS.VAL." + evt_target.className.replace(/_CLS$/gm,"") + "=" + parseType_STR + ";";
				eval(str00);
			}
			else
			{
				alert("Error , it must be setted to a number .");
				evt_target.focus();
				str00="evt_target.value=MP3_Array_CLS.VAL." + evt_target.className.replace(/_CLS$/gm,"") + ";";
				eval(str00);
				evt_target.setAttribute("value",evt_target.value);
			}
			//==========DIVISION==========
			if ( evt_target.className=="" || evt_target.className=="" )
			{
				//Audio_Bar_InnerHTML_INI(evt_target);
			}
			else		{}
			//==========DIVISION==========
		}
		else		{}
		//==========DIVISION==========
		//	console.log("MP3_Array_CLS : ");
		//	console.log(MP3_Array_CLS);
		//	console.log("MP3_Array_CLS.VAL : " + JSON.stringify(MP3_Array_CLS.VAL,null,"\t") + ";\t" + 
		//				"");
		//==========DIVISION==========
	}
	else if ( n==3 )//點擊了按鈕。
	{
	}
	else
	{
	}
}
//==================================================控件動作變化==================================================
//==================================================MP3_Array_Hotkey_Mouse==================================================
function MP3_Array_Hotkey_Mouse(ele,evt,post_method)
{
	//==========DIVISION==========
	eval(Parameter_Base_STR_ijk_XX(10));
	//eval(ELE_ELEL_STR_INI(0));
	var ID,LEN,ID_LEN;
	//==========DIVISION==========
	//console.log("function now is : TEXT_ATTRIBUTION(ele,evt,n)");

	//IE7 : evt.srcElement ;Other : evt.target;
	var evt_target = evt.target ? evt.target : evt.srcElement;
	//alert(evt_target.outerHTML + "\n" + 
	//	evt_target.tagName + "\n" + evt_target.className + "\n" + 
	//	evt_target.tpye + "\n" + evt_target.getAttribute("type") + "\n" + 
	//	evt_target.getAttribute("type_x_y"));

	//evt.ctrlKey失效可能是其他函数的原因。
	//console.log("evt _ evt.ctrlKey _ evt.altKey _ evt.shiftKey _ evt.which : " + evt + evt.ctrlKey + "_" + evt.altKey + "_" + evt.shiftKey + "_" + evt.which);
	//						17				18			16
	//==========DIVISION==========
	if ( post_method==0 && evt && evt.type=="keydown" && 
		( ( evt.which == 33 || evt.which == 34 ) || ( evt.ctrlKey || evt.altKey || evt.shiftKey ) ) )
	{
		//Google Search :
		//javascript page up no scroll
		//https://stackoverflow.com/questions/26440644/is-it-possible-to-prevent-users-page-up-page-down-up-and-down-arrow-keys-from
		//Is it possible to prevent users Page Up, Page Down, Up and Down arrow keys from scroll functioning?
		//evt.preventDefault();
	}
	else
	{
	}
	//==========DIVISION==========
	var referenceNode;
	if ( post_method==0 && evt && evt.type=="keydown" && evt.which==13 )//enter:13;
	{
		if ( ele.className=="MP3_Array_Table" && evt_target.className=="" )
		{
			ele01=evt_target.parentNode;
			//	while ( ele01.className!="??????" )		{ele01=ele01.parentNode;}
			//	ele01.getElementsByClassName("??????")[0].click();
		}
		else
		{
		}
	}
	else if ( post_method==0 && evt && evt.type=="keydown" && 
				( ( evt.which == 33 || evt.which == 34 || evt.which == 38 || evt.which == 40 || evt.which == 36 || evt.which == 35 ) || 
				( evt.which == 38 || evt.which == 40 ) || 
				//( evt.which == 17 && evt.ctrlKey || evt.which == 18 && evt.altKey || evt.which == 16 && evt.shiftKey ) || 
				0 ) )
	{
		//====================DIVISION====================
		//==========DIVISION==========
		//if ( ( evt.which == 33 || evt.which == 34 ) || ( evt.ctrlKey || evt.altKey || evt.shiftKey ) )
		if ( ( evt.which == 33 || evt.which == 34 ) || 
			( evt.ctrlKey && !evt.altKey && !evt.shiftKey || !evt.ctrlKey && evt.altKey && !evt.shiftKey || 
				!evt.ctrlKey && !evt.altKey && evt.shiftKey ) )
		{
			evt.preventDefault();
		}
		else		{}
		//==========DIVISION==========
		//====================DIVISION====================
		//==========DIVISION==========
		/*
		up arrow	38
		down arrow	40
		page up		33
		page down	34
		home	36
		end		35
		*/
		var i,j,str;
		var NUM_10,NUM_X,NUM_MIN,NUM_MAX;
		var number_system,NS,NUM_SYS_MAX;
		var NS_00,NS_01;
		var evt_sd;
		NS_00=10;
		//==========DIVISION==========
		if ( ( evt.which == 33 || evt.which == 34 || evt.which == 38 || evt.which == 40 || evt.which == 36 || evt.which == 35 ) && 
				ele.tagName.toUpperCase()=="TABLE" && 
				//==========DIVISION==========
				( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Top_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Left_CLS" || 
				evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_CLS" || 
				evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" || 
				evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" || 
				//==========DIVISION==========
				0 ) )
		{
			//==========DIVISION==========
			NUM_MAX=10000*10000;
			//==========DIVISION==========
			if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Top_CLS" )			{NUM_MIN=0;NUM_MAX=10000*10000;}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Left_CLS" )	{NUM_MIN=0;NUM_MAX=10000*10000;}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_CLS" )		{NUM_MIN=-10000*10000;NUM_MAX=10000*10000;}
			//==========DIVISION==========
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" )			{NUM_MIN=0;NUM_MAX=10000*10000;}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" )			{NUM_MIN=0;NUM_MAX=10000*10000;}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" )		{NUM_MIN=0;NUM_MAX=1;}
			//==========DIVISION==========
			else																		{NUM_MIN=0;NUM_MAX=10000*10000;}
			//==========DIVISION==========
			//evt_target.value=("00" + evt_target.value).slice(-2);
			if ( evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_CLS" )			{NUM_10=parseFloat(evt_target.value);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" )			{NUM_10=parseFloat(evt_target.value);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" )			{NUM_10=parseFloat(evt_target.value);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" )		{NUM_10=parseFloat(evt_target.value);}
			//==========DIVISION==========
			else																		{NUM_10=parseInt(evt_target.value,10);}
			//==========DIVISION==========
			num00=0;
			if		( evt.which == 38 )	{num00++;}		//up arrow		38
			else if ( evt.which == 40 )	{num00--;}		//down arrow	40
			else if ( evt.which == 33 )	{num00+=10;}	//page up		33
			else if ( evt.which == 34 )	{num00-=10;}	//page down		34
			else if ( evt.which == 36 )	{num00+=100;}	//home			36
			else if ( evt.which == 35 )	{num00-=100;}	//end			35
			else{}

			if ( evt.ctrlKey || evt.altKey || evt.shiftKey )
			{
				if ( evt.ctrlKey )			{num00*=Math.pow(NS_00,1);}	//{num00*=Math.pow(10,1);}
				else if ( evt.altKey )		{num00*=Math.pow(NS_00,2);}	//{num00*=Math.pow(10,2);}
				else if ( evt.shiftKey )	{num00*=Math.pow(NS_00,3);}	//{num00*=Math.pow(10,3);}
				else						{num00*=Math.pow(NS_00,0);}	//{num00*=Math.pow(10,0);}
			}
			else							{num00*=Math.pow(NS_00,0);}	//{num00*=Math.pow(10,0);}
			//==========DIVISION==========
			if ( evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_CLS" )			{NUM_10=(parseFloat(num00/1000) + NUM_10).toFixed(3);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" )			{NUM_10=(parseFloat(num00/1000) + NUM_10).toFixed(3);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" )			{NUM_10=(parseFloat(num00/1000) + NUM_10).toFixed(3);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" )		{NUM_10=(parseFloat(num00/1000) + NUM_10).toFixed(3);}
			//==========DIVISION==========
			else																		{NUM_10=num00 + NUM_10;}
			//==========DIVISION==========
			if		( NUM_10<NUM_MIN )						{NUM_10=NUM_MIN;}
			else if ( NUM_10>NUM_MAX )						{NUM_10=NUM_MAX;}
			else{}

			evt_target.value=NUM_10;
			//==========DIVISION==========
			if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Top_CLS" )		{MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Margin_Top	=NUM_10;}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Left_CLS" ){MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Margin_Left	=NUM_10;}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_CLS" )	{MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_Margin_Slope	=parseFloat(NUM_10);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" )		{MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Zoom		=parseFloat(NUM_10);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" )		{MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Rotate		=parseFloat(NUM_10);}
			else if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" )	{MP3_Array_CLS.VAL.BG_IMG_Shake_CSS_ITV_Opacity		=parseFloat(NUM_10);}
			//==========DIVISION==========
			else															{}
			//==========DIVISION==========
			if ( evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Top_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Margin_Left_CLS" || 
				evt_target.className=="BG_IMG_Shake_CSS_Margin_Slope_CLS" || 
				evt_target.className=="BG_IMG_Shake_CSS_ITV_Zoom_CLS" || evt_target.className=="BG_IMG_Shake_CSS_ITV_Rotate_CLS" || 
				evt_target.className=="BG_IMG_Shake_CSS_ITV_Opacity_CLS" || 
				0 )
			{
				(function(){
					var ele,evt,post_method;
					ele=ele_MP3_Array_Ctrl_Table;evt={type:"change",target:evt_target};post_method=2;
					MP3_Array_Ctrl_Table_Action(ele,evt,post_method);
				})();
			}
			else		{}
			//==========DIVISION==========
			//	console.log("Audio_URL_STR_CLS : ");
			//	console.log(Audio_URL_STR_CLS);
			//	console.log("Audio_URL_STR_CLS.VAL : " + JSON.stringify(Audio_URL_STR_CLS.VAL,null,"\t") + ";\t" + 
			//				"");
			//==========DIVISION==========
		}
		else
		{
		}
		//==========DIVISION==========
		//console.log(evt_target.className + "\n" + ele.className);
		//==========DIVISION==========
	}
	else
	{
	}
	//==========DIVISION==========
}
//==================================================MP3_Array_Hotkey_Mouse==================================================
//==================================================MP3_Array_Body_Hotkey_Mouse==================================================
function MP3_Array_Body_Hotkey_Mouse(ele,evt,post_method)
{
	//==========DIVISION==========
	eval(Parameter_Base_STR_ijk_XX(10));
	eval(ELE_ELEL_STR_INI(0));
	var ID,LEN,ID_LEN;
	//==========DIVISION==========
	//console.log("function now is : TEXT_ATTRIBUTION(ele,evt,n)");

	//IE7 : evt.srcElement ;Other : evt.target;
	var evt_target = evt.target ? evt.target : evt.srcElement;
	//alert(evt_target.outerHTML + "\n" + 
	//	evt_target.tagName + "\n" + evt_target.className + "\n" + 
	//	evt_target.tpye + "\n" + evt_target.getAttribute("type") + "\n" + 
	//	evt_target.getAttribute("type_x_y"));

	//evt.ctrlKey失效可能是其他函数的原因。
	//console.log("evt _ evt.ctrlKey _ evt.altKey _ evt.shiftKey _ evt.which : " + evt + evt.ctrlKey + "_" + evt.altKey + "_" + evt.shiftKey + "_" + evt.which);
	//						17				18			16
	//==========DIVISION==========
	if ( post_method==0 && evt && evt.type=="keydown" && 
		( ( evt.which == 33 || evt.which == 34 ) || ( evt.ctrlKey || evt.altKey || evt.shiftKey ) ) )
	{
		//Google Search :
		//javascript page up no scroll
		//https://stackoverflow.com/questions/26440644/is-it-possible-to-prevent-users-page-up-page-down-up-and-down-arrow-keys-from
		//Is it possible to prevent users Page Up, Page Down, Up and Down arrow keys from scroll functioning?
		//evt.preventDefault();
	}
	else
	{
	}
	//==========DIVISION==========
	var referenceNode;
	if ( post_method==0 && evt && evt.type=="keydown" && evt.which==13 )//enter:13;
	{
		if ( ele.className=="MP3_Array_Table" && evt_target.className=="" )
		{
			ele01=evt_target.parentNode;
			//	while ( ele01.className!="??????" )		{ele01=ele01.parentNode;}
			//	ele01.getElementsByClassName("??????")[0].click();
		}
		else
		{
		}
	}
	else if ( post_method==0 && evt && evt.type=="keydown" && 
				( ( evt.which == 33 || evt.which == 34 || evt.which == 38 || evt.which == 40 || evt.which == 36 || evt.which == 35 ) || 
				( evt.which == 38 || evt.which == 40 ) || 
				//( evt.which == 17 && evt.ctrlKey || evt.which == 18 && evt.altKey || evt.which == 16 && evt.shiftKey ) || 
				0 ) )
	{
		//==========DIVISION==========
		/*
		up arrow	38
		down arrow	40
		page up		33
		page down	34
		home	36
		end		35
		*/
		var i,j,str;
		var NUM_10,NUM_X,NUM_MIN,NUM_MAX;
		var number_system,NS,NUM_SYS_MAX;
		var NS_00,NS_01;
		var evt_sd;
		NS_00=10;
		//==========DIVISION==========
		//	if		( evt.which == 38 )		{ele_MP3_Array_Ctrl_ScrollTo_Top_BTN.click();}			//up arrow		38
		//	else if ( evt.which == 40 )		{ele_MP3_Array_Ctrl_ScrollTo_Bottom_BTN.click();}		//down arrow	40
		//	else		{}
		//==========DIVISION==========
		//console.log(evt_target.className + "\n" + ele.className);
		//==========DIVISION==========
	}
	else if ( post_method==0 && evt && evt.type=="keydown" && 
			!( evt.which == 33 || evt.which == 34 || evt.which == 38 || evt.which == 40 || evt.which == 36 || evt.which == 35 ) )
	{
		if		( evt.which == 84 )		{ele_MP3_Array_Ctrl_ScrollTo_Top_BTN.click();}			//t				84
	}
	else
	{
	}
	//==========DIVISION==========
}
//==================================================MP3_Array_Body_Hotkey_Mouse==================================================
//==========DIVISION==========
var console___log=console.log;
//console.log=function (){};
//==========DIVISION==========
eval(ELE_ELEL_STR_INI(1));
MP3_Array_Ctrl_Table_INI();
//==========DIVISION==========
