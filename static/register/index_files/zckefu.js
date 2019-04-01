document.writeln("      <link href=\"http://" + window.location.host + "/css/zckefu.css?20171226\" rel=\"stylesheet\" type=\"text/css\" />");
document.writeln("      <script type=\"text/javascript\">");
document.writeln("        function show_0831() {");
document.writeln("            document.getElementById('divFloatToolsView').style.display = \"block\";");
document.writeln("            document.getElementById('aFloatTools_Hide').style.display = \"block\";");
document.writeln("            document.getElementById('aFloatTools_Show').style.display = \"none\";");
document.writeln("        }");
document.writeln("        function hide_0831() {");
document.writeln("            document.getElementById('divFloatToolsView').style.display = \"none\";");
document.writeln("            document.getElementById('aFloatTools_Hide').style.display = \"none\";");
document.writeln("            document.getElementById('aFloatTools_Show').style.display = \"block\";");
document.writeln("        }");
document.writeln("      </script>");

function isInclude(name) {
    var js = /js$/i.test(name);
    var es = document.getElementsByTagName(js ? 'script' : 'link');
    for (var i = 0; i < es.length; i++) {
        if (es[i][js ? 'src' : 'href'].indexOf(name) != -1) {
            return true;
        }
    }
    return false;
}

document.writeln("<div id=\"onlineqq\" class=\"float0831\">");
document.writeln("    <div class=\"floatL\">");
document.writeln("        <a style=\"display: none\" id=\"aFloatTools_Show\" class=\"btnOpen\" title=\"查看在线客服\" onclick=\"show_0831()\" href=\"javascript:void(0);\">展开</a> ");
document.writeln("        <a id=\"aFloatTools_Hide\" class=\"btnCtn \" title=\"关闭在线客服\" onclick=\"hide_0831()\" href=\"javascript:void(0);\">收缩</a>");
document.writeln("    </div>");
document.writeln("    <div id=\"divFloatToolsView\" class=\"floatR\">");
document.writeln("        <div class=\"floattp\"></div>");
document.writeln("        <div class=\"floatcn\">");
document.writeln("            <ul>");
document.writeln("                <li class=\"floattop\">");
document.writeln("                    <h3 class=\"titZx\"></h3>");
document.writeln("                </li>");
document.writeln("                <li><script>CBI360_QQM('1019','','肖老师','icoTc');</script></li>");
document.writeln("                <li><script>CBI360_QQM('1042','','段老师','icoTc');</script></li>");
document.writeln("                <li><script>CBI360_QQM('1041','','周老师','icoTc');</script></li>");
document.writeln("                <li><script>CBI360_QQM('1043','','卢老师','icoTc');</script></li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("        <div class=\"titDh\"></div>");
document.writeln("        <div style=\"color: #cc0000;height:20px;overflow:hidden; width:130px;font-weight: bold; font-size: 14px;float:left; clear:both; text-align:center;\">0571-56234830</div>");
document.writeln("        <div class=\"floatbtom\"></div>");
document.writeln("    </div>");