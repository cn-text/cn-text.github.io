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
	var ele_CSS_Main					=document.getElementsByClassName("CSS_Main")[0];
	var ele_CSS_SD						=document.getElementsByClassName("CSS_SD")[0];
	var ele_MP3_Array_Audio				=document.getElementsByClassName("MP3_Array_Audio")[0];
	//==========DIVISION==========
	function elelf_TD_Video()			{return ele_MP3_Array_Audio.getElementsByTagName("td");}
	function elelf_Video()				{return ele_MP3_Array_Audio.getElementsByTagName("video");}
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
//========================================URL_VAR_Function========================================
var URL_VAR_CLS;
function URL_VAR_CLS_INI()
{
	//==========DIVISION==========
	var URL=location.href;
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(DFCB_MP3_CT_ID=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(DFCB_MP3_Array_Show_Type=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(Audio_CSS_Border_EAB=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(IFrame_Video_NUM_Type_ID=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(IFrame_Video_NUM_ARR=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(IFrame_Play_Or_Not_Type_ID=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(Play_Or_Not=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(Speed_Type_CM=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(Speed_Type_ID=[^\&]+)([\&]*.*)$/gm,"$2")));
	eval("var " + decodeURIComponent(URL.replace(/^(.+[\?\&])(Speed_Type_STR=[^\&]+)([\&]*.*)$/gm,"$2")));
	URL_VAR_CLS={};
	URL_VAR_CLS.VAL={};
	URL_VAR_CLS.VAL.DFCB_MP3_CT_ID				=DFCB_MP3_CT_ID;
	URL_VAR_CLS.VAL.DFCB_MP3_Array_Show_Type	=DFCB_MP3_Array_Show_Type;
	URL_VAR_CLS.VAL.Audio_CSS_Border_EAB		=Audio_CSS_Border_EAB;
	URL_VAR_CLS.VAL.IFrame_Video_NUM_Type_ID	=IFrame_Video_NUM_Type_ID;
	URL_VAR_CLS.VAL.IFrame_Video_NUM_ARR		=IFrame_Video_NUM_ARR;
	URL_VAR_CLS.VAL.IFrame_NUMX					=IFrame_Video_NUM_ARR[2];
	URL_VAR_CLS.VAL.IFrame_NUMY					=IFrame_Video_NUM_ARR[3];
	URL_VAR_CLS.VAL.IF_Video_NUMX				=IFrame_Video_NUM_ARR[0];
	URL_VAR_CLS.VAL.IF_Video_NUMY				=IFrame_Video_NUM_ARR[1];
	URL_VAR_CLS.VAL.IFrame_Play_Or_Not_Type_ID	=IFrame_Play_Or_Not_Type_ID;
	URL_VAR_CLS.VAL.Play_Or_Not					=Play_Or_Not;
	URL_VAR_CLS.VAL.Speed_Type_CM				=Speed_Type_CM;
	URL_VAR_CLS.VAL.Speed_Type_ID				=Speed_Type_ID;
	URL_VAR_CLS.VAL.Speed_Type_STR				=Speed_Type_STR;
	//==========DIVISION==========
	//console.log(URL_VAR_CLS);
	//==========DIVISION==========
}
//========================================URL_VAR_Function========================================
//========================================MP3_Array_Audio_Function========================================
function MP3_Array_Audio_INI()
{
	//==========DIVISION==========
	var ele_CSS_Main				=document.getElementsByClassName("CSS_Main")[0];
	var ele_MP3_Array_Audio			=document.getElementsByClassName("MP3_Array_Audio")[0];
	//==========DIVISION==========
	//eval(ELE_ELEL_STR_INI(0));
	eval(Parameter_Base_STR_ijk_XX(10));
	var ID,LEN,ID_LEN;
	var AR_ID;
	var IFIDX,IFIDY,VIDX,VIDY;
	//==========DIVISION==========
	var DFCB_MP3_CT_ID				=URL_VAR_CLS.VAL.DFCB_MP3_CT_ID				;
	var DFCB_MP3_Array_Show_Type	=URL_VAR_CLS.VAL.DFCB_MP3_Array_Show_Type	;
	var Audio_CSS_Border_EAB		=URL_VAR_CLS.VAL.Audio_CSS_Border_EAB		;
	var IFrame_Video_NUM_Type_ID	=URL_VAR_CLS.VAL.IFrame_Video_NUM_Type_ID	;
	var IFrame_Video_NUM_ARR		=URL_VAR_CLS.VAL.IFrame_Video_NUM_ARR		;
	var IFrame_NUMX					=URL_VAR_CLS.VAL.IFrame_NUMX				;
	var IFrame_NUMY					=URL_VAR_CLS.VAL.IFrame_NUMY				;
	var IF_Video_NUMX				=URL_VAR_CLS.VAL.IF_Video_NUMX				;
	var IF_Video_NUMY				=URL_VAR_CLS.VAL.IF_Video_NUMY				;
	var IFrame_Play_Or_Not_Type_ID	=URL_VAR_CLS.VAL.IFrame_Play_Or_Not_Type_ID	;
	var Play_Or_Not					=URL_VAR_CLS.VAL.Play_Or_Not				;
	var Speed_Type_CM				=URL_VAR_CLS.VAL.Speed_Type_CM				;
	var Speed_Type_ID				=URL_VAR_CLS.VAL.Speed_Type_ID				;
	var Speed_Type_STR				=URL_VAR_CLS.VAL.Speed_Type_STR				;
	//==========DIVISION==========
	arr00=DFCB_MP3_CT_ARRX2[DFCB_MP3_CT_ID];
	LEN=arr00.length;
	//==========DIVISION==========
	str00="";
	str00+="\n";
	for (VIDY=0,m=0;VIDY<IF_Video_NUMY;VIDY++)
	{
		str00+="\t".repeat(1) + "<tr>" + "\n";
		for (VIDX=0;VIDX<IF_Video_NUMX;VIDX++,m++)
		{
			//==========DIVISION==========
			//0:"In_Order";1:"Random_Order";
			if ( DFCB_MP3_Array_Show_Type==0 )			{}
			else if ( DFCB_MP3_Array_Show_Type==1 )
			{
				m=parseInt(Math.random() * LEN,10);
			}
			else		{}
			//==========DIVISION==========
			str00+="\t".repeat(2) + '<td><div><video controls="" name="media"' + ['',' loop=true autoplay="autoplay"'][Play_Or_Not] + 
									'><source src="' + arr00[m%LEN] + '" type="audio/mpeg"></video></div></td>' + "\n";
		}
		str00+="\t".repeat(1) + "</tr>" + "\n";
	}
	ele_MP3_Array_Audio.getElementsByTagName("tbody")[0].innerHTML=str00;
	//==========DIVISION==========
	ele_CSS_Main.innerHTML=ele_CSS_Main.innerHTML
		.replace(/^(table\.MP3_Array_Audio td.+[\{\;\-]border\-width\:)([0-9]+)(px;.+)$/gm,"$1" + [0,1][Audio_CSS_Border_EAB] + "$3");
	//==========DIVISION==========
}

function MP3_Array_Audio_ST_Do()
{
	//==========DIVISION==========
	//eval(ELE_ELEL_STR_INI(0));
	eval(Parameter_Base_STR_ijk_XX(10));
	var ID,LEN,ID_LEN;
	var AR_ID;
	//==========DIVISION==========
	elel00=elelf_Video();
	for (i=0;i<elel00.length;i++)
	{
		//==========DIVISION==========
		setTimeout(function (elel00,i)
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
			//==========DIVISION==========
			var DFCB_MP3_CT_ID				=URL_VAR_CLS.VAL.DFCB_MP3_CT_ID				;
			var DFCB_MP3_Array_Show_Type	=URL_VAR_CLS.VAL.DFCB_MP3_Array_Show_Type	;
			var Audio_CSS_Border_EAB		=URL_VAR_CLS.VAL.Audio_CSS_Border_EAB		;
			var IFrame_Video_NUM_Type_ID	=URL_VAR_CLS.VAL.IFrame_Video_NUM_Type_ID	;
			var IFrame_Video_NUM_ARR		=URL_VAR_CLS.VAL.IFrame_Video_NUM_ARR		;
			var IFrame_NUMX					=URL_VAR_CLS.VAL.IFrame_NUMX				;
			var IFrame_NUMY					=URL_VAR_CLS.VAL.IFrame_NUMY				;
			var IF_Video_NUMX				=URL_VAR_CLS.VAL.IF_Video_NUMX				;
			var IF_Video_NUMY				=URL_VAR_CLS.VAL.IF_Video_NUMY				;
			var IFrame_Play_Or_Not_Type_ID	=URL_VAR_CLS.VAL.IFrame_Play_Or_Not_Type_ID	;
			var Play_Or_Not					=URL_VAR_CLS.VAL.Play_Or_Not				;
			var Speed_Type_CM				=URL_VAR_CLS.VAL.Speed_Type_CM				;
			var Speed_Type_ID				=URL_VAR_CLS.VAL.Speed_Type_ID				;
			var Speed_Type_STR				=URL_VAR_CLS.VAL.Speed_Type_STR				;
			//==========DIVISION==========
			var TTI_SD=TTI_IN_USE;
			//==========DIVISION==========
			ele00=elel00[i];
			//==========DIVISION==========
			if ( ele00!=undefined && ele00.readyState==4 )
			{
				//==========DIVISION==========
					//	if ( ele00.paused==true || 1 )
					//	{
					//		try
					//		{
					//			//==========DIVISION==========
					//			//if ( window.top==window.self )
					//			//{
					//			//}
					//			//else		{}
					//			//==========DIVISION==========
					//			//ele00.play();
					//			//旧版可以，新版不行。查谷歌，exe后面要加什么？
					//			//==========DIVISION==========
					//		}
					//		catch (err)
					//		{
					//			console.log(err.message);
					//		}
					//	}
					//	else		{}
				//==========DIVISION==========
				if ( ele00.paused==false && Play_Or_Not==0 )
				{
					try
					{
						ele00.removeAttribute("loop");
						ele00.removeAttribute("autoplay");
						ele00.pause();
					}
					catch (err)
					{
						console.log(err.message);
					}
				}
				else		{}
				//==========DIVISION==========
				if ( ele00.paused==true && Play_Or_Not==1 )
				{
					try
					{
						ele00.setAttribute("loop",true);
						ele00.setAttribute("autoplay","autoplay");
						ele00.play();
					}
					catch (err)
					{
						console.log(err.message);
					}
				}
				else		{}
				//==========DIVISION==========
				if ( ele00.paused==false || 1 )
				{
					//==========DIVISION==========
					//110s-130s:
					TTI_SD=60000 * 2 + 10 * (2 * parseInt(2 * Math.random(),10) - 1);
					//==========DIVISION==========
					//clearTimeout();
					//ele00.currentTime;
					//ele00.volume;
					//ele00.play();
					//1:
					//num00=1;
					//0.8-1.2:
					//num00=1 + parseFloat(Math.random() * 0.2 * (2 * parseInt(2 * Math.random(),10) - 1));//.toFixed(3);
					//0.5-2:0.6-5/3:0.7-10/7:
					//num00=parseFloat(Math.pow(1 - Math.random() * 0.4,(2 * parseInt(2 * Math.random(),10) - 1)));//.toFixed(3);
					//console.log(num00);
					str00="arr00=" + Speed_Type_STR.replace(/^Speed\:(.+)$/gm,"$1") + ";";
					eval(str00);
					if ( Speed_Type_CM==0 )//&& Speed_Type_ID>=0 && Speed_Type_ID<=15 )
					{
						num00=arr00[0];
					}
					else if ( Speed_Type_CM==1 )//&& Speed_Type_ID>=16 && Speed_Type_ID<=16 )
					{
						//num00=1 + parseFloat(Math.random() * 0.2 * (2 * parseInt(2 * Math.random(),10) - 1));//.toFixed(3);
						num00=arr00[0] + parseFloat((arr00[1] - arr00[0]) * Math.random());//.toFixed(3);
					}
					else if ( Speed_Type_CM==2 )//&& Speed_Type_ID>=17 && Speed_Type_ID<=21 )
					{
						//num00=parseFloat(Math.pow(1 - Math.random() * 0.4,(2 * parseInt(2 * Math.random(),10) - 1)));//.toFixed(3);
						num00=parseFloat(Math.pow(1 - Math.random() * (1 - arr00[0]),(2 * parseInt(2 * Math.random(),10) - 1)));//.toFixed(3);
					}
					else		{}
					//console.log("num00 : " + num00 + " .");
					ele00.playbackRate=num00;
					//==========DIVISION==========
				}
				else		{}
				//==========DIVISION==========
			}
			else		{}
			//==========DIVISION==========
			setTimeout(fun_ct_cache_00,TTI_SD,elel00,i);
			//==========DIVISION==========
		},TTI_IN_USE,elel00,i);
		//==========DIVISION==========
	}
	//==========DIVISION==========
}
//========================================MP3_Array_Audio_Function========================================
//==========DIVISION==========
var console___log=console.log;
//console.log=function (){};
//==========DIVISION==========
URL_VAR_CLS_INI();
MP3_Array_Audio_INI();
eval(ELE_ELEL_STR_INI(1));
MP3_Array_Audio_ST_Do();
//==========DIVISION==========
