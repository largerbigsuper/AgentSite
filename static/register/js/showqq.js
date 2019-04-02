var qqnum = [];
//证书代理QQ
qqnum[1000] = '2355258079'; //贾凤珍
qqnum[1001] = '2355258060'; //孙老师
qqnum[1002] = '2396587213'; //钱老师
qqnum[1003] = '2355728520';
qqnum[1004] = '2355728529';
qqnum[1005] = '2355258074'; //戴老师
qqnum[1006] = '2355728521';
qqnum[1007] = '2355728524'; //高老师
qqnum[1008] = '2355728523';
qqnum[1009] = '1357584753';
qqnum[1010] = '2355728528';
qqnum[1011] = '2103313178';
qqnum[1012] = '2355728525';
qqnum[1013] = '1138826013';
qqnum[1014] = '2355728522';
qqnum[1015] = '510485539';
qqnum[1016] = '2355258064'; //分省联系QQ
qqnum[1017] = '2355258078'; //exam培训机构列表QQ
qqnum[1018] = '2355258075'; //职称刘老师
qqnum[1019] = '2355258062'; //职称汪老师
qqnum[1020] = '1036179508'; //招标1
qqnum[1021] = '1036179508'; //招标2
qqnum[1022] = '2215557413'; //www联系我们  vip小杨
qqnum[1023] = '2355258071'; //vip小张
qqnum[1024] = '200650360'; //vip
qqnum[1025] = '1036179508'; //招投标客服
qqnum[1026] = '1420428308'; //意见反馈客服
qqnum[1027] = '917688619'; //施垚
qqnum[1028] = '2355258070';//钱伟杰
qqnum[1029] = '782422173';//小朱
qqnum[1030] = '2355258056';//毛老师
qqnum[1031] = '2355258068'; //周老师
qqnum[1032] = '2355258073';//王老师
qqnum[1033] = '2355258069';//段老师
qqnum[1034] = '2355258076';//张老师
qqnum[1035] = '2355258081';//曹老师
qqnum[1036] = '2355918161';//段老师
qqnum[1037] = '2355918160';//王老师
qqnum[1038] = '2355258063';//吴老师
qqnum[1039] = '2355728526';//吴老师
qqnum[1040] = '2881634724';//洪老师
qqnum[1041] = '2355728523';//
qqnum[1042] = '2355258067';//段老师
qqnum[1043] = '2355728527';//卢老师

//企业QQ
qqnum[10000] = '800058360';
var qqimg = [];
qqimg[0] =  "./images/qq.gif";
qqimg[9] = "http://" + window.location.host + "/images/kefu/qqs_1.gif";

//判断QQ的显示方式
function CBI360_QQM(id, imgid, txt, css) //id为1001,imgid为图片链接id，txt为a标签里面的文本,css为a标签的样式
{
    if (imgid == "" && txt == "")//显示QQ
    {
        document.write(qqnum[id]);
    }
    if (imgid != "" && txt == "")//显示带图片QQ超链接
    {
        if (id != "10000") {//非企业QQ
            if (imgid == "1" || imgid == "2" || imgid == "11") {
                document.write("<a target=\"_blank\" class=\"" + css + "\" onclick=\"KeFuQQButton('" + qqnum[id] + "');\"" + ShowQQHref(1, qqnum[id]) + "><img src=\"http://wpa.qq.com/pa?p=2:" + qqnum[id] + ":" + qqimg[imgid] + "\" /></a>");
            }
            else {
                document.write("<a target=\"_blank\" class=\"" + css + "\" onclick=\"KeFuQQButton('" + qqnum[id] + "');\"" + ShowQQHref(1, qqnum[id]) + "><img src=\"" + qqimg[imgid] + "\" /></a>");
            }
        }
        else {//企业QQ
            if (imgid == "1" || imgid == "2" || imgid == "11") {
                document.write("<a target=\"_blank\" class=\"" + css + "\" onclick=\"KeFuQQButton('" + qqnum[id] + "');\"" + ShowQQHref(2, qqnum[id]) + "><img src=\"http://wpa.qq.com/pa?p=2:" + qqnum[id] + ":" + qqimg[imgid] + "\" /></a>");
            }
            else {
                document.write("<a  target=\"_blank\" class=\"" + css + "\" onclick=\"KeFuQQButton('" + qqnum[id] + "');\"" + ShowQQHref(2, qqnum[id]) + "><img src=\"" + qqimg[imgid] + "\" /></a>");
            }
        }
    }
    if (imgid == "" && txt != "")//显示带文本的超链接
    {
        if (id != "10000") {//非企业QQ
            document.write("<a target=\"_blank\" class=\"" + css + "\" onclick=\"KeFuQQButton('" + qqnum[id] + "');\"" + ShowQQHref(1, qqnum[id]) + ">" + txt + "</a>");
        }
        else {//企业QQ
            document.write("<a target=\"_blank\" class=\"" + css + "\" onclick=\"KeFuQQButton('" + qqnum[id] + "');\"" + ShowQQHref(2, qqnum[id]) + ">" + txt + "</a>");
        }
    }
}
//拼接出不同类型的QQ窗体url，个人和企业等，这些链接形式根据腾讯提供的链接
function ShowQQHref(type, qqnum)//type=1,2,3...
{
    if (type == 1) {
        return "href=\"http://wpa.qq.com/msgrd?v=3&amp;uin=" + qqnum + "&amp;site=qq&amp;menu=yes\"";
    }
    if (type == 2) {
        if (qqnum == '800058360') {
            return "href=\"http://wpa.qq.com/msgrd?v=3&uin=800058360&site=qq&menu=yes\"";
        }
        return "href=\"tencent://message/?Menu=yes&amp;amp;uin=" + qqnum + "&amp;amp;Service=58&amp;amp;SigT=A7F6FEA02730C9889C27090E1D4524B80D9653A08E927A9745C80DFE7623DF644CDEC3F5B9E05A98EDB90DEE849ACD39F51DD5D203179D578C3EDFE960BF5E05E0726449DEE02CA223ADE4C4D250D5BF1B09AA2EABD307B4B15E6AD9ADE1749A084E2EAF3D2D3CA223F0F4E383EA4EB253D3CE22F75B9996&amp;amp;SigU=30E5D5233A443AB2FAEC0095B504D08E8936E834F8A6F6FC9BBCFA20E476046121FDDE593E4DFA80\"";
    }
}

//统计QQ方法
function KeFuQQButton(qq) {
    var username;
    var coo = new HttpCookie("91ZhengShu");
    if (coo.isExisted() != false) {
        username = decodeURI(coo.values.getValues("UserAccount"));
    }
    else {
        username = "";
    }
    ButtonLog(3, username, qq);
}

function KeFuSysButton() {
    var username;
    var coo = new HttpCookie("91ZhengShu");
    if (coo.isExisted() != false) {
        username = decodeURI(coo.values.getValues("UserAccount"));
    }
    else {
        username = "";
    }
    ButtonLog(4, username);
    window.open("http://cssystem.cbi360.net/Index.aspx?comeurl=" + document.URL);
}

function HHBSysButton() {
    var username;
    var coo = new HttpCookie("91ZhengShu");
    if (coo.isExisted() != false) {
        username = decodeURI(coo.values.getValues("UserAccount"));
    }
    else {
        username = "";
    }
    ButtonLog(4, username);
    window.open("http://cssystem.cbi360.net/Linking.aspx?fp=1&comeurl=" + document.URL);
}