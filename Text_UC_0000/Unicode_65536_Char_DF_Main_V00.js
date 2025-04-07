//"UTF-8[●]";
UC_CLS.Text_CLS_00_00		=
{
	Unicode_One_File_NUM	:	256,
	Unicode_Total_NUM		:	256,
	Unicode_Begin_ID		:	0,
	Unicode_End_ID			:	65535,
	OFNUM					:	256,
	IFNUM					:	0,//Math.ceil(Unicode_Total_NUM / Unicode_One_File_NUM);
	FDN						:	"UC_0000_1X1_00_X1",
	FN_PRE					:	"Unicode_65536_Char_DF_1X1",
	TAG_A_TID_ARR			:	[],
};

UC_CLS.Text_CLS_00_01		=
{
	Unicode_One_File_NUM	:	256*8,
	Unicode_Total_NUM		:	256*8,
	Unicode_Begin_ID		:	0,
	Unicode_End_ID			:	65535,
	OFNUM					:	32,
	IFNUM					:	0,//Math.ceil(Unicode_Total_NUM / Unicode_One_File_NUM);
	FDN						:	"UC_0000_1X1_01_X8",
	FN_PRE					:	"Unicode_65536_Char_DF_1X1",
	TAG_A_TID_ARR			:	[],
};

UC_CLS.Text_CLS_01_00		=
{
	Unicode_One_File_NUM	:	256/2,
	Unicode_Total_NUM		:	256,
	Unicode_Begin_ID		:	0,
	Unicode_End_ID			:	65535,
	OFNUM					:	256,
	IFNUM					:	0,//Math.ceil(Unicode_Total_NUM / Unicode_One_File_NUM);
	FDN						:	"UC_0001_NXN_00_XD2",
	FN_PRE					:	"Unicode_65536_Char_DF_NXN",
	TAG_A_TID_ARR			:	[],
};

UC_CLS.Text_CLS_01_01		=
{
	Unicode_One_File_NUM	:	256/16,
	Unicode_Total_NUM		:	256,
	Unicode_Begin_ID		:	0,
	Unicode_End_ID			:	256,
	OFNUM					:	256,
	IFNUM					:	0,//Math.ceil(Unicode_Total_NUM / Unicode_One_File_NUM);
	FDN						:	"UC_0001_NXN_01_XD16",
	FN_PRE					:	"Unicode_65536_Char_DF_NXN",
	TAG_A_TID_ARR			:	[],
};

UC_CLS.Text_CLS={};

var Unicode_Text_FDN_ARR		=["UC_0000_1X1_00_X1","UC_0000_1X1_01_X8","UC_0001_NXN_00_XD2","UC_0001_NXN_01_XD16"];
var UC_CLS_Text_CLS_Name_ARR	=["Text_CLS_00_00","Text_CLS_00_01","Text_CLS_01_00","Text_CLS_01_01"];
var TAG_A_TID_ARR_00			=
[
	"TID_000","TID_001","TID_002","TID_003","TID_004","TID_005",
	"TID_100",
	"TID_110","TID_111",
	"TID_120","TID_121",
	"TID_130","TID_131",
	"TID_140","TID_141",
	"TID_200","TID_201","TID_202","TID_203","TID_204","TID_205",
	"TID_300","TID_301",
	"TID_310","TID_311",
	"TID_320","TID_321",
	"TID_330","TID_331",
];

var TAG_A_TID_ARR_01			=
[
	"TID_000","TID_001","TID_002","TID_003","TID_004","TID_005",
	"TID_100","TID_101","TID_102","TID_103","TID_104",
	"TID_200","TID_201","TID_202","TID_203","TID_204","TID_205",
	"TID_210","TID_211","TID_212","TID_213","TID_214","TID_215",
	"TID_220","TID_221","TID_222","TID_223","TID_224","TID_225",
	"TID_230","TID_231","TID_232","TID_233","TID_234","TID_235",
	"TID_300","TID_301",
	"TID_310","TID_311","TID_312","TID_313",
	"TID_320","TID_321","TID_322","TID_323",
	"TID_330","TID_331","TID_332","TID_333",
	"TID_340","TID_341","TID_342","TID_343",
	"TID_400","TID_401","TID_402","TID_403","TID_404","TID_405",
	"TID_410","TID_411","TID_412","TID_413","TID_414","TID_415",
	"TID_420","TID_421","TID_422","TID_423","TID_424","TID_425",
	"TID_430","TID_431","TID_432","TID_433","TID_434","TID_435",
];

UC_CLS.Text_CLS_00_00.TAG_A_TID_ARR=JSON.parse(JSON.stringify(TAG_A_TID_ARR_00));
UC_CLS.Text_CLS_00_01.TAG_A_TID_ARR=JSON.parse(JSON.stringify(TAG_A_TID_ARR_00));
UC_CLS.Text_CLS_01_00.TAG_A_TID_ARR=JSON.parse(JSON.stringify(TAG_A_TID_ARR_01));
UC_CLS.Text_CLS_01_01.TAG_A_TID_ARR=JSON.parse(JSON.stringify(TAG_A_TID_ARR_01));
