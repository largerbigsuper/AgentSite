var qqnum = [];
//证书代理QQ
qqnum[1000] = '307281614'; //贾凤珍
qqnum[1001] = '307281614'; //孙老师
qqnum[1002] = '307281614'; //钱老师
qqnum[1003] = '307281614';
qqnum[1004] = '307281614';
qqnum[1005] = '307281614'; //戴老师

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

// //统计QQ方法
function KeFuQQButton(qq) {
    return qq;
    // var username;
    // var coo = new HttpCookie("91ZhengShu");
    // if (coo.isExisted() != false) {
    //     username = decodeURI(coo.values.getValues("UserAccount"));
    // }
    // else {
    //     username = "";
    // }
    // ButtonLog(3, username, qq);
}

function KeFuSysButton() {
    return true;
    // var username;
    // var coo = new HttpCookie("91ZhengShu");
    // if (coo.isExisted() != false) {
    //     username = decodeURI(coo.values.getValues("UserAccount"));
    // }
    // else {
    //     username = "";
    // }
    // ButtonLog(4, username);
    // window.open("http://cssystem.cbi360.net/Index.aspx?comeurl=" + document.URL);
}

function HHBSysButton() {
    return true;
    // var username;
    // var coo = new HttpCookie("91ZhengShu");
    // if (coo.isExisted() != false) {
    //     username = decodeURI(coo.values.getValues("UserAccount"));
    // }
    // else {
    //     username = "";
    // }
    // ButtonLog(4, username);
    // window.open("http://cssystem.cbi360.net/Linking.aspx?fp=1&comeurl=" + document.URL);
}