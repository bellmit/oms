/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2016-12-22 09:30:34 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.public_;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class footstyle_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\" src=\"http://static.qineasy.com/base/js/select2/js/select2.full.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"http://static.qineasy.com/base/js/select2/js/select2.js\"></script>\r\n");
      out.write("\r\n");
      out.write("<!-- 删除模态层 -->\r\n");
      out.write("<div class=\"am-dialog addColordialog\" id=\"deldialog\">\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <div class=\"am-dialog-header\">\r\n");
      out.write("            <h3 class=\"am-ft-center\">是否删除</h3>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"am-flexbox-item btn am-button alterOv\"\r\n");
      out.write("\t\t\t\t\tam-bg=\"blue\" onClick=\"del()\">确定</button>\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"am-flexbox-item btn am-button\"\r\n");
      out.write("\t\t\t\t\tid=\"closeDialog\" am-bg=\"white\">取消</button>\r\n");
      out.write("\t\t\t\t\t<input type=\"reset\" name=\"reset\" style=\"display: none;\" />\r\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("    $(function () {\r\n");
      out.write("    \tif(!cas||!pos){\r\n");
      out.write("    \t\tconsole.log(\"WebUrl未定义\");\r\n");
      out.write("    \t}\r\n");
      out.write("\t\t//工具提示\r\n");
      out.write("        $('[data-toggle=\"tooltip\"]').tooltip();           \r\n");
      out.write("    })\r\n");
      out.write("</script>\r\n");
      out.write("\r\n");
      out.write("<!-- 模态层 -->\r\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("\tjQuery.fn.center = function () {\r\n");
      out.write("        this.css({\r\n");
      out.write("        \"position\" :\"fixed\",\r\n");
      out.write("        \"top\" : 50 + \"%\",\r\n");
      out.write("        \"marginTop\" : (\"-\" + this.height() / 2) + \"px\",\r\n");
      out.write("        \"left\" : ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + \"px\"\r\n");
      out.write("        });\r\n");
      out.write("        return this;\r\n");
      out.write("    };\r\n");
      out.write("    \r\n");
      out.write("    $(\".am-dialog\").center();\r\n");
      out.write("    \r\n");
      out.write("    $('#closeDialog,.alterOv,.maskBg').click(function(){\r\n");
      out.write("        $('.am-dialog,.maskBg,#am-dialogBtn').fadeOut();\r\n");
      out.write("    });\r\n");
      out.write("    \r\n");
      out.write("    function delete_dialog(){\r\n");
      out.write("\t\t$('#deldialog').fadeIn();\r\n");
      out.write("\t\t$('.maskBg').fadeIn();\r\n");
      out.write("\t};\n");
      out.write("</script>\r\n");
      out.write("\r\n");
      out.write("<!--重新登录弹窗-->\r\n");
      out.write("<div class=\"am-dialog addColordialog re-login-wrapper\">\r\n");
      out.write("\t<form id=\"loginform\">\r\n");
      out.write("\t    <i class=\"fa fa-close closeDia\"></i>\r\n");
      out.write("\t    <div class=\"am-dialog-header\">\r\n");
      out.write("\t        <h3 class=\"am-ft-center\">重新登录</h3>\r\n");
      out.write("\t    </div>\r\n");
      out.write("\t    <div class=\"am-dialog-body\">\r\n");
      out.write("\t        <div class=\"am-input-line\">\r\n");
      out.write("\t            <i class=\"fa fa-user\"></i>\r\n");
      out.write("\t            <input type=\"text\" name=\"userName\" placeholder=\"请输入用户名\"/>\r\n");
      out.write("\t        </div>\r\n");
      out.write("\t        <div class=\"am-input-line\">\r\n");
      out.write("\t            <i class=\"fa fa-lock\"></i>\r\n");
      out.write("\t            <input type=\"password\" name=\"passWord\" placeholder=\"请输入密码\"/>\r\n");
      out.write("\t        </div>\r\n");
      out.write("\t    </div>\r\n");
      out.write("\t    <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("\t        <button type=\"button\" class=\"am-flexbox-item btn am-button\" am-bg=\"blue\" onClick=\"reLogin()\">登录</button>\r\n");
      out.write("\t        <div class=\"fn-clear\"></div>\r\n");
      out.write("\t    </div>\r\n");
      out.write("    </form>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 登录浮层 -->\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("\t$('.re-login-wrapper').center();\t\r\n");
      out.write("    $('.closeDia').click(function(){\r\n");
      out.write("        $('.re-login-wrapper,.maskBg').hide();\r\n");
      out.write("    });\r\n");
      out.write("  \tfunction reLogin(){\r\n");
      out.write("    \tvar keyParams='{\"timestamp\":\"\",\"duid\":\"duid\",\"token\":\"\",\"userId\":\"\",\"appKey\":\"aZ23dA4S4I\",\"orgId\":\"\",\"brandId\":\"\"}'; \t\t\r\n");
      out.write("        var url=cas+\"user/userlogin\";\r\n");
      out.write("        var jsonObject = $(\"#loginform\").serializeJson();\r\n");
      out.write("\t\t$.ajax({\r\n");
      out.write("\t\t\tasync:true,\r\n");
      out.write("\t\t\ttype:\"post\",\r\n");
      out.write("\t\t\turl:url,\r\n");
      out.write("\t\t\tdata : {keyParams:getKeyParams(jsonObject,keyParams),\r\n");
      out.write("\t\t\t\t\tjsonObject:getJsonObject(jsonObject)},\r\n");
      out.write("\t\t\tsuccess : function(data) {\r\n");
      out.write("\t\t\t\tvar json = $.parseJSON(data);\t\r\n");
      out.write("\t\t\t\tif(json.code=='1'){\r\n");
      out.write("\t\t\t\t\tvar object=json.data.user;\r\n");
      out.write("\t\t\t\t\tvar keyParams={\"timestamp\":object.timestamp,\"duid\":\"duid\",\"token\":object.token,\"userId\":object.userId,\"appKey\":object.appKey,\"orgId\":object.orgId,\"brandId\":object.brandId};\r\n");
      out.write("\t    \t\t\tlocalStorage.keyParams=JSON.stringify(keyParams);\r\n");
      out.write("\t\t\t\t\tlocalStorage.userInfo=JSON.stringify(object);\r\n");
      out.write("\t\t\t\t\treMenuRoute();\r\n");
      out.write("\t\t\t\t\tlocation.reload();\r\n");
      out.write("\t\t\t\t}else{\r\n");
      out.write("\t\t\t\t\talertmsg(json.msg);\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t},\r\n");
      out.write("\t\t\terror:function(XMLHttpRequest, textStatus, errorThrown){\r\n");
      out.write("\t\t\t\t alert(\"系统异常!\");\r\n");
      out.write("\t\t    }\r\n");
      out.write("\t\t})\r\n");
      out.write("    }\r\n");
      out.write("    \r\n");
      out.write("    function reMenuRoute(){\r\n");
      out.write("\t\t$.ajax({\r\n");
      out.write("\t\t\tasync:false,\t\t\t\r\n");
      out.write("\t\t\ttype:\"post\",\r\n");
      out.write("\t\t\turl:cas+\"priv/getRoute\",\r\n");
      out.write("\t\t\tdata : {\r\n");
      out.write("\t\t\t\tkeyParams:getKeyParams(\"{}\",localStorage.keyParams),\r\n");
      out.write("\t\t\t\tjsonObject:getJsonObject(\"{}\")\r\n");
      out.write("\t\t\t},\r\n");
      out.write("\t\t\tsuccess : function(data) {\r\n");
      out.write("\t\t\t\tvar jsonObj=JSON.parse(data);\t\r\n");
      out.write("\t\t\t\tvar routeList=JSON.stringify(jsonObj.data.routeList);\r\n");
      out.write("\t\t\t\tsessionStorage.routeList=routeList;\r\n");
      out.write("\t\t\t}\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t})\r\n");
      out.write("\t\t} \r\n");
      out.write("\t\t//让弹出框的位置居中\r\n");
      out.write("jQuery.fn.centera=function(){\r\n");
      out.write("\t\tvar Height=this.height();\r\n");
      out.write("\t\tvar Width=this.width();\r\n");
      out.write("\t\tvar winWidth=document.documentElement.clientWidth;\r\n");
      out.write("\t\tvar winHeight=document.documentElement.clientHeight;\r\n");
      out.write("\t\t this.css({\r\n");
      out.write("\t\t \t\"position\":\"fixed\",\r\n");
      out.write("\t\t\t\"left\":(winWidth-Width)/2+\"px\",\r\n");
      out.write("\t\t\t\"top\":(winHeight-Height)/2+\"px\"\r\n");
      out.write("\t\t})\r\n");
      out.write("}\r\n");
      out.write("jQuery.fn.showName = function() {\r\n");
      out.write("\t\tthis.on(\"mousemove\", \".storeName\", function(event) {\r\n");
      out.write("\t\t\t//\t\tevent.preventDefault();\r\n");
      out.write("\t\t\t//\t\tevent.stopPropagation();\r\n");
      out.write("\t\t\t//\t\tif($(event.target).hasClass(\"storeName\")) {\r\n");
      out.write("\t\t\tvar thisShopName = $(event.target).parent().find(\".shopNameaa\").html();\r\n");
      out.write("\t\t\tvar html = \"<div id='showShopName'></div>\";\r\n");
      out.write("\t\t\t$(this).append(html);\r\n");
      out.write("\t\t\t$(\"#showShopName\").html(thisShopName).offset({}).css({\r\n");
      out.write("\t\t\t\t\"z-index\": \"2000\",\r\n");
      out.write("\t\t\t\t\"position\": \"fixed\",\r\n");
      out.write("\t\t\t\t\"left\": event.pageX + 15 + \"px\",\r\n");
      out.write("\t\t\t\t\"top\": event.pageY + 10 + \"px\"\r\n");
      out.write("\t\t\t});\r\n");
      out.write("\t\t\t//\t\t}\r\n");
      out.write("\t\t})\r\n");
      out.write("\t}\r\n");
      out.write("\tjQuery.fn.removeName = function() {\r\n");
      out.write("\t\tthis.on(\"mouseout\", function() {\r\n");
      out.write("\t\t\t$(\"#showShopName\").remove();\r\n");
      out.write("\t\t})\r\n");
      out.write("\t}\r\n");
      out.write("</script>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
