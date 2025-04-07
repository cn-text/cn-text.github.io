//========================================Base_Function========================================
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

var TTIS=100;
var TTI_IN_USE=TTIS;
//========================================Base_Function========================================
//========================================控件動作變化========================================
function TEXT_ATTRIBUTION(ele,evt,n)
{
	//==========DIVISION==========
	eval(Parameter_Base_STR_ijk_XX(5));
	var ID,LEN,ID_LEN;
	//==========DIVISION==========
	//console___log("function now is : TEXT_ATTRIBUTION(ele,evt,n)");

	//IE7 : evt.srcElement ;Other : evt.target;
	var evt_target = evt.target ? evt.target : evt.srcElement;
	//alert(evt_target.tagName);

	var ele_disabled;
	if ( n==0 )//鼠標移入。
	{
		if ( evt_target.tagName.toUpperCase()=="A" || evt_target.tagName.toUpperCase()=="SELECT" )
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
				console.log(err.message);
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
		//==========DIVISION==========
	}
	else if ( n==3 )//點擊了按鈕。
	{
	}
	else
	{
	}
}
//========================================控件動作變化========================================
//========================================Unicode_65536_Char_DF========================================
function Unicode_ID_SEL_Switch(ele)
{
	//==========DIVISION==========
	eval(Parameter_Base_STR_ijk_XX(5));
	var ID,LEN,ID_LEN;
	//==========DIVISION==========
	ele01=document.getElementsByClassName("TXT_TAG_A_Target")[0];
	elel01=ele01.getElementsByTagName("a");
	ele02=document.getElementsByClassName("Unicode_ID_SEL")[0];//ele02=ele;
	//==========DIVISION==========
	for (i=0;i<elel01.length;i++)
	{
		//	elel01[i].href=elel01[i].href.replace(/^.*#.*txt_id_/gm,"#" + 
		//	ele02.options[ele02.selectedIndex].innerHTML.replace(/_CT_[\s\S]*/gm,"_") + "txt_id_");
		elel01[i].setAttribute("href",elel01[i].getAttribute("href").replace(/^.*#.*txt_id_/gm,"#" + 
		ele02.options[ele02.selectedIndex].innerHTML.replace(/_CT_[\s\S]*/gm,"_") + "txt_id_"));
	}
	//==========DIVISION==========
}

function Unicode_65536_Char_DF_INI()
{
	//==========DIVISION==========
	eval(Parameter_Base_STR_ijk_XX(10));
	var ID,LEN,ID_LEN;
	//==========DIVISION==========
	ele00=document.getElementsByTagName("title")[0];
	ele01=document.getElementsByClassName("TXT_TAG_A_Target")[0];
	elel01=ele01.getElementsByTagName("a");
	ele02=document.getElementsByClassName("Unicode_ID_SEL")[0];
	//==========DIVISION==========
	//李洪志法轮功真善忍_Unicode_65536_Char_DF_D_24255-24255_H_5EBF-5EBF_N_0001.html
	str00=ele00.innerHTML;
	str01=str00.replace(/^.+_D_([0-9]+)\-([0-9]+)_H_([0-9A-Za-z]+)\-([0-9A-Za-z]+)_N_([0-9]+)\.html$/gm,"$1");num01=parseInt(str01,10);
	str02=str00.replace(/^.+_D_([0-9]+)\-([0-9]+)_H_([0-9A-Za-z]+)\-([0-9A-Za-z]+)_N_([0-9]+)\.html$/gm,"$2");num02=parseInt(str02,10);
	str03=str00.replace(/^.+_D_([0-9]+)\-([0-9]+)_H_([0-9A-Za-z]+)\-([0-9A-Za-z]+)_N_([0-9]+)\.html$/gm,"$3");num03=str03;
	str04=str00.replace(/^.+_D_([0-9]+)\-([0-9]+)_H_([0-9A-Za-z]+)\-([0-9A-Za-z]+)_N_([0-9]+)\.html$/gm,"$4");num04=str04;
	str05=str00.replace(/^.+_D_([0-9]+)\-([0-9]+)_H_([0-9A-Za-z]+)\-([0-9A-Za-z]+)_N_([0-9]+)\.html$/gm,"$5");num05=parseInt(str05,10);
	//	console.log("str00 : " + str00 + ";\t" + 
	//				"num01 : " + num01 + ";\t" + 
	//				"num02 : " + num02 + ";\t" + 
	//				"num03 : " + num03 + ";\t" + 
	//				"num04 : " + num04 + ";\t" + 
	//				"num05 : " + num05 + ";\t" + 
	//				"");
	//==========DIVISION==========
	str06="";
	for (i=0;i<num05;i++)
	{
		str01=("0".repeat(5) + (num01 + i).toString()).slice(-5);
		str03=("0".repeat(4) + (num01 + i).toString(16)).slice(-4).toUpperCase();
		str06+="<option>" + "U_" + "D_" + str01 + "_H_" + str03 + "_CT_" + String.fromCharCode(num01 + i) + "</option>";
	}
	ele02.innerHTML=str06;
	ele02.selectedIndex=0;
	//==========DIVISION==========
	for (i=0;i<elel01.length;i++)
	{
		//	elel01[i].href=elel01[i].href.replace(/^.*#.*txt_id_/gm,"#" + 
		//	ele02.options[ele02.selectedIndex].innerHTML.replace(/_CT_[\s\S]*/gm,"_") + "txt_id_");
		elel01[i].setAttribute("href",elel01[i].getAttribute("href").replace(/^.*#.*txt_id_/gm,"#" + 
		ele02.options[ele02.selectedIndex].innerHTML.replace(/_CT_[\s\S]*/gm,"_") + "txt_id_"));
	}
	//==========DIVISION==========
}

function CSS_Browser_INI()
{
	//==========DIVISION==========
	eval(Parameter_Base_STR_ijk_XX(5));
	var ID,LEN,ID_LEN;
	//==========DIVISION==========
	ele00=document.getElementsByClassName("CSS_Firefox")[0];
	ele01=document.getElementsByClassName("CSS_Google_Chrome")[0];
	//==========DIVISION==========
	if ( navigator.userAgent.indexOf("Chrome")>=0 )
	{
		ele00.innerHTML="";
	}
	else if ( navigator.userAgent.indexOf("Firefox")>=0 )
	{
		ele01.innerHTML="";
	}
	else		{}
	//==========DIVISION==========
}

function URL_HREF_INI(ext_inner_cls)
{
	//====================arguments.callee====================
	var fun_ct_cache;
	fun_ct_cache=arguments.callee;
	//====================arguments.callee====================
	console.log("window.document.readyState : " + window.document.readyState);
	if ( window.document.readyState=="complete" && window.location.href.indexOf("\/Unicode_65536_Char_DF")>=0 )
	{
		//==========DIVISION==========
		//eval(ELE_ELEL_STR_INI());
		eval(Parameter_Base_STR_ijk_XX(5));
		var ID,LEN,ID_LEN;
		//==========DIVISION==========
		var STO=0;//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		//==========DIVISION==========
		var this_step					=ext_inner_cls.this_step;
		//==========DIVISION==========
		if ( this_step==0 )
		{
			//==========DIVISION==========
			if ( location.href.indexOf("?")<0 )			{return;}
			//==========DIVISION==========
			//Unicode_65536_Char_DF_NXN_D_00000-00015_H_0000-000F_N_0016.html?uid=00160&uc=　&tid=TID_001&w=Hello.
			//Unicode_65536_Char_DF_NXN_D_21136-21151_H_5290-529F_N_0016.html?uid=21151&uc=功&tid=TID_001&w=Hello.
			//==========DIVISION==========
			var UID		=location.href.replace(/^(.+\?)(.*)([\&]*)(uid=)([^\?\&]*)([\&]*)(.*)$/gm,"$5");
			var UC		=location.href.replace(/^(.+\?)(.*)([\&]*)(uc=)([^\?\&]*)([\&]*)(.*)$/gm,"$5");
			var TID		=location.href.replace(/^(.+\?)(.*)([\&]*)(tid=)([^\?\&]*)([\&]*)(.*)$/gm,"$5");
			var W		=location.href.replace(/^(.+\?)(.*)([\&]*)(w=)([^\?\&]*)([\&]*)(.*)$/gm,"$5");
			var UC_LEN	=0;
			if ( UID!="" && !isNaN(UID) )			{UID=parseInt(UID,10);UC_LEN=1;}
			else
			{
				UC=decodeURIComponent(UC);
				UC_LEN=UC.length;
				if ( UC.length==0 )					{UID="-";}
				else if ( UC.length==1 )
				{
					UID=UC.charCodeAt(0);
					if ( !isNaN(UID) )				{UID=parseInt(UID,10);}
					else							{UID="-";}
				}
				else if ( UC.length>=2 )
				{
					UID=4096;
				}
				else		{}
			}
			W=decodeURIComponent(W);
			console.log("UC_LEN : " + UC_LEN + ";\t" + 
						"UID : " + UID + ";\t" + 
						"UC : " + UC + ";\t" + 
						"decodeURIComponent(UC) : " + decodeURIComponent(UC) + ";\t" + 
						"W : " + W + ";\t" + 
						"decodeURIComponent(W) : " + decodeURIComponent(W) + ";\t" + 
						"");
			//==========DIVISION==========
			var SID;
			//==========DIVISION==========
			if ( UC_LEN==0 )			{}
			else if ( UC_LEN==1 || UC_LEN>=2 )
			{
				//==========DIVISION==========
				if ( UC_LEN>=2 )
				{
					//==========DIVISION==========
					var ELE_PRE_CLS_txt_cls_000_NUM=0;
					//==========DIVISION==========
					elel00=document.getElementsByTagName("pre");
					for (i=0;i<elel00.length;i++)
					{
						//==========DIVISION==========
						if ( elel00[i].className.toLowerCase()=="txt_cls_000" )		{ELE_PRE_CLS_txt_cls_000_NUM++;}
						else														{}
						//==========DIVISION==========
						if ( ELE_PRE_CLS_txt_cls_000_NUM>=0 && ELE_PRE_CLS_txt_cls_000_NUM<=1 )		{}
						else if ( ELE_PRE_CLS_txt_cls_000_NUM>=2 )					{elel00[i].innerHTML="";}
						else														{}
						//==========DIVISION==========
					}
					//==========DIVISION==========
					var ELE_PRE_CLS_txt_cls_000_NUM=0;
					//==========DIVISION==========
					for (i=0;i<elel00.length;i++)
					{
						//==========DIVISION==========
						if ( elel00[i].className.toLowerCase()=="txt_cls_000" )		{ELE_PRE_CLS_txt_cls_000_NUM++;}
						else														{}
						//==========DIVISION==========
						if ( ELE_PRE_CLS_txt_cls_000_NUM>=0 && ELE_PRE_CLS_txt_cls_000_NUM<=1 )
						{
							elel00[i].innerHTML=elel00[i].innerHTML.replace(new RegExp(String.fromCharCode(UID),"gm"),UC);
						}
						else if ( ELE_PRE_CLS_txt_cls_000_NUM>=2 )					{}
						else														{}
						//==========DIVISION==========
					}
					//==========DIVISION==========
				}
				else		{}
				//==========DIVISION==========
				if ( UID!="-" )
				{
					//==========DIVISION==========
					ele00=document.getElementsByTagName("title")[0];
					ele01=document.getElementsByClassName("TXT_TAG_A_Target")[0];
					elel01=ele01.getElementsByTagName("a");
					ele02=document.getElementsByClassName("Unicode_ID_SEL")[0];
					//==========DIVISION==========
					ele02.selectedIndex=SID=UID - parseInt(ele02.options[0].innerHTML.replace(/^U_D_([0-9]+)_.+$/gm,"$1"),10);
					//==========DIVISION==========
					Unicode_ID_SEL_Switch(ele02);
					//==========DIVISION==========
					for (i=0;i<elel01.length;i++)
					{
						if ( TID.toUpperCase()==elel01[i].innerHTML )
						{
							elel01[i].click();
							break;
						}
						else		{}
					}
					//==========DIVISION==========
				}
				else		{}
				//==========DIVISION==========
			}
			else		{}
			//==========DIVISION==========
			if ( this_step==0 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else if ( this_step==1 )
		{
			//==========DIVISION==========
			console.log("URL_HREF_INI Over .");
			//==========DIVISION==========
			if ( this_step==1 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else if ( this_step==2 )
		{
			//==========DIVISION==========
			if ( this_step==2 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else if ( this_step==3 )
		{
			//==========DIVISION==========
			if ( this_step==3 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else		{STO=0;}
		//==========DIVISION==========
		ext_inner_cls.this_step			=this_step;
		//==========DIVISION==========
		//====================STO====================
		if ( STO==0 )//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		{
		}
		else if ( STO==1 )//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		{
			setTimeout(fun_ct_cache,TTI_IN_USE * 2,ext_inner_cls);
		}
		else if ( STO==2 )//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		{
			fun_ct_cache(ext_inner_cls);
		}
		else		{}
		//====================STO====================
	}
	else
	{
		setTimeout(fun_ct_cache,TTI_IN_USE * 2,ext_inner_cls);
	}
}

setTimeout(function (ext_inner_cls)
{
	//====================arguments.callee====================
	var fun_ct_cache;
	fun_ct_cache=arguments.callee;
	//====================arguments.callee====================
	//==========DIVISION==========
	console.log("window.document.readyState : " + window.document.readyState);
	if ( window.document.readyState=="complete" && window.location.href.indexOf("\/Unicode_65536_Char_DF")>=0 )
	{
		//==========DIVISION==========
		//eval(ELE_ELEL_STR_INI());
		eval(Parameter_Base_STR_ijk_XX(5));
		var ID,LEN,ID_LEN;
		//==========DIVISION==========
		var STO=0;//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		//==========DIVISION==========
		var this_step					=ext_inner_cls.this_step;
		//==========DIVISION==========
		if ( this_step==0 )
		{
			//==========DIVISION==========
			Unicode_65536_Char_DF_INI();
			CSS_Browser_INI();
			URL_HREF_INI({this_step:0});
			//==========DIVISION==========
			if ( this_step==0 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else if ( this_step==1 )
		{
			//==========DIVISION==========
			console.log("Unicode_65536_Char_DF_INI Over .");
			//==========DIVISION==========
			if ( this_step==1 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else if ( this_step==2 )
		{
			//==========DIVISION==========
			if ( this_step==2 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else if ( this_step==3 )
		{
			//==========DIVISION==========
			if ( this_step==3 )			{this_step++;STO=1;}
			//==========DIVISION==========
		}
		else		{STO=0;}
		//==========DIVISION==========
		ext_inner_cls.this_step			=this_step;
		//==========DIVISION==========
		//====================STO====================
		if ( STO==0 )//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		{
		}
		else if ( STO==1 )//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		{
			setTimeout(fun_ct_cache,TTI_IN_USE,ext_inner_cls);
		}
		else if ( STO==2 )//0:Do_Not_Run_setTimeout;1:Run_setTimeout;2:Run_Function_Now;
		{
			fun_ct_cache(ext_inner_cls);
		}
		else		{}
		//====================STO====================
	}
	else
	{
		setTimeout(fun_ct_cache,TTI_IN_USE,ext_inner_cls);
	}
	//==========DIVISION==========
},TTI_IN_USE,{this_step:0});
//========================================Unicode_65536_Char_DF========================================
