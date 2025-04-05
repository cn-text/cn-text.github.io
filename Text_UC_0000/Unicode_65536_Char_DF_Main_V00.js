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
};

UC_CLS.Text_CLS={};

var Unicode_Text_FDN_ARR		=["UC_0000_1X1_00_X1","UC_0000_1X1_01_X8","UC_0001_NXN_00_XD2","UC_0001_NXN_01_XD16"];
var UC_CLS_Text_CLS_Name_ARR	=["Text_CLS_00_00","Text_CLS_00_01","Text_CLS_01_00","Text_CLS_01_01"];
