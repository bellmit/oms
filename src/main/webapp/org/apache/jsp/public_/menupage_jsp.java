/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-17 06:12:19 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.public_;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class menupage_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!---- Left side start ---->\r\n");
      out.write("    <aside class=\"main-sidebar fixed-main-sidebar\">\r\n");
      out.write("        <!-- sidebar -->\r\n");
      out.write("        <section class=\"sidebar\">\r\n");
      out.write("        <!-- sidebar menu -->\r\n");
      out.write("        <ul class=\"sidebar-menu fn-left\" id=\"pMenu\">\r\n");
      out.write("\t\t\t       \r\n");
      out.write("        </ul>\r\n");
      out.write("       \t <ul class=\"inMenu-node sidebar fn-right\" id=\"cMenu\">\r\n");
      out.write("                   \r\n");
      out.write("        </ul>\r\n");
      out.write("        \r\n");
      out.write("        \r\n");
      out.write("        <!-- <ul class=\"sidebar-menu fn-left\">\r\n");
      out.write("            <li class=\"treeview\">\r\n");
      out.write("                <a href=\"#\">\r\n");
      out.write("                    <i class=\"icon icon1\"></i>\r\n");
      out.write("                    <span>系统管理</span>\r\n");
      out.write("                </a>\r\n");
      out.write("            </li>                 \r\n");
      out.write("        </ul>\r\n");
      out.write("        <ul class=\"inMenu-node sidebar fn-right\">\r\n");
      out.write("            <li class=\"Menu-nodeTitl\">商品中心</li>\r\n");
      out.write("            <li>\r\n");
      out.write("                <a href=\"#\" class=\"secondNode\">\r\n");
      out.write("                    <i class=\"fa fa-angle-down pull-left opacity0\"></i>\r\n");
      out.write("                    <span>颜色管理</span>\r\n");
      out.write("                </a>                \r\n");
      out.write("            </li>\r\n");
      out.write("            <li>\r\n");
      out.write("                <a href=\"#\">\r\n");
      out.write("                    <i class=\"fa fa-angle-down pull-left\"></i>\r\n");
      out.write("                    <span>分类管理</span>\r\n");
      out.write("                </a>\r\n");
      out.write("                <ul class=\"secNode\">\r\n");
      out.write("                    <li><a href=\"#\">二级分类1</a></li>\r\n");
      out.write("                    <li><a href=\"#\">二级分类2</a></li>\r\n");
      out.write("                    <li><a href=\"#\">二级分类3</a></li>\r\n");
      out.write("                    <li><a href=\"#\">二级分类4</a></li>\r\n");
      out.write("                </ul>\r\n");
      out.write("            </li>          \r\n");
      out.write("        </ul> -->\r\n");
      out.write("        \r\n");
      out.write("    </section>\r\n");
      out.write("</aside>\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("\t\r\n");
      out.write("\t$(function(){\r\n");
      out.write("\t\tvar cMenuName;\r\n");
      out.write("\t\tvar pMenuName;\t\t\r\n");
      out.write("\t\tdefMenuStatus(localStorage.menuId,localStorage.menuName,localStorage.nodeId);\r\n");
      out.write("\t})\r\n");
      out.write("\t\r\n");
      out.write("\t//菜单默认状态\r\n");
      out.write("\tfunction defMenuStatus(id,name,nodeId){\r\n");
      out.write("\t\tloadPmenu();\r\n");
      out.write("\t\tif(undefined!==id){\r\n");
      out.write("\t\t\tsecMenu(id,name);\r\n");
      out.write("\t\t\tif(undefined!=nodeId){\r\n");
      out.write("\t\t\t\tsecNode(nodeId,0);\t\r\n");
      out.write("\t\t\t}\t\r\n");
      out.write("\t\t}\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\t//加载一级菜单\r\n");
      out.write("\tfunction loadPmenu(){\t\t\r\n");
      out.write("\t\tvar html=[];\r\n");
      out.write("\t\tvar url=cas+\"menu/getPMenus\";\r\n");
      out.write("\t\t$.ajax({\r\n");
      out.write("\t\t\t\tasync:false,\r\n");
      out.write("\t\t\t\ttype:\"post\",\r\n");
      out.write("\t\t\t\turl:url,\r\n");
      out.write("\t\t\t\tdata : {\r\n");
      out.write("\t\t\t\t\tkeyParams:getKeyParams(\"{\\\"pMenuId\\\":\\\"0\\\",\\\"appId\\\":\\\"1\\\"}\",keyParams),\r\n");
      out.write("\t\t\t\t\tjsonObject:getJsonObject(\"{\\\"pMenuId\\\":\\\"0\\\",\\\"appId\\\":\\\"1\\\"}\")\r\n");
      out.write("\t\t\t\t},\r\n");
      out.write("\t\t\t\tsuccess : function(data) {\r\n");
      out.write("\t\t\t\t\tvar menus = eval(\"(\" + data + \")\").data[\"menuList\"];\r\n");
      out.write("\t\t\t\t\t$.each(menus,function(i,n){\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<li class='treeview' id='\"+menus[i].menuId+\"'>\");\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<a href='javascript:void(0)' onclick='secMenu(\"+menus[i].menuId+\",\\\"\"+menus[i].menuName+\"\\\")'>\");\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<i class='\"+menus[i].icon+\"'></i>\");\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<span>\"+menus[i].menuName+\"</span>\");\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"</a></li>\");\t\t\t\r\n");
      out.write("\t\t\t\t\t})\r\n");
      out.write("\t\t\t\t\t$(\"#pMenu\").append(html.join(\"\"));\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t  \t});\t\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\t//一级菜单点击事件\r\n");
      out.write("\tfunction secMenu(id,name){\r\n");
      out.write("\t\tlocalStorage.menuId=id;\r\n");
      out.write("\t\tlocalStorage.menuName=name;\r\n");
      out.write("\t\t$(\"#\"+id).addClass('active').siblings().removeClass('active');   \t \t\t \r\n");
      out.write(" \t\tloadCmenu(id,name);\r\n");
      out.write(" \t\tpMenuName=$(\"#\"+id).find(\"span\").html();\r\n");
      out.write(" \t\t$.ajax({\r\n");
      out.write("\t\t\tasync:true,\r\n");
      out.write("\t\t\ttype:\"post\",\r\n");
      out.write("\t\t\turl:cas+\"menu/getMenusByMenu\",\r\n");
      out.write("\t\t\tdata : {keyParams:getKeyParams(\"{\\\"pMenuId\\\":\\\"\"+id+\"\\\",\\\"appId\\\":\\\"1\\\"}\",keyParams),\r\n");
      out.write("\t\t\t\tjsonObject:getJsonObject(\"{\\\"pMenuId\\\":\\\"\"+id+\"\\\",\\\"appId\\\":\\\"1\\\"}\")},\r\n");
      out.write("\t\t\tsuccess : function(data) {\r\n");
      out.write("\t\t\t\tvar menus = eval(\"(\" + data + \")\").data[\"menuList\"];\r\n");
      out.write("\t\t\t\tif(menus.length>0){\r\n");
      out.write("\t\t\t\t\tsecNode(menus[0].menuId,menus[0].haschild);\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t  \t});\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\t//加载二级菜单\r\n");
      out.write("\tfunction loadCmenu(pMenuId,pMenuName){\r\n");
      out.write("\t\tvar html=[];\r\n");
      out.write("\t\tvar url=cas+\"menu/getMenusByMenu\";\t\t\r\n");
      out.write("\t\t$.ajax({\r\n");
      out.write("\t\t\tasync:false,\r\n");
      out.write("\t\t\ttype:\"post\",\r\n");
      out.write("\t\t\turl:url,   \t\t\t\t\r\n");
      out.write("\t\t\tdata : {\r\n");
      out.write("\t\t\tkeyParams:getKeyParams(\"{\\\"pMenuId\\\":\\\"\"+pMenuId+\"\\\",\\\"appId\\\":\\\"1\\\"}\",keyParams),\r\n");
      out.write("\t\t\tjsonObject:getJsonObject(\"{\\\"pMenuId\\\":\\\"\"+pMenuId+\"\\\",\\\"appId\\\":\\\"1\\\"}\")},\r\n");
      out.write("\t\t\tsuccess : function(data) {\r\n");
      out.write("\t\t\t\tvar menus = eval(\"(\" + data + \")\").data[\"menuList\"];\t\t\t\t\t\r\n");
      out.write("\t\t\t\thtml.push(\"<li class='Menu-nodeTitl'>\"+pMenuName+\"</li>\");\r\n");
      out.write("\t\t\t\t$.each(menus,function(i,n){\r\n");
      out.write("\t\t\t\t\thtml.push(\"<li id='\"+menus[i].menuId+\"'>\");\r\n");
      out.write("\t\t\t\t\thtml.push(\"<a href='#/\"+menus[i].name+\"' dataurl='\"+menus[i].name+\"' onclick='secNode(\"+menus[i].menuId+\",\"+menus[i].haschild+\")'>\");\r\n");
      out.write("\t\t\t\t\tif(menus[i].haschild!=0){\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<i class='fa fa-angle-down pull-left'></i>\");\r\n");
      out.write("\t\t\t\t\t}else{\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<i class='fa fa-angle-down pull-left opacity0'></i>\");\r\n");
      out.write("\t\t\t\t\t}\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\thtml.push(\"<span>\"+menus[i].menuName+\"</span>\");\r\n");
      out.write("\t\t\t\t\thtml.push(\"</a></li>\");\r\n");
      out.write("\t\t\t\t})\r\n");
      out.write("\t\t\t\t$(\"#cMenu\").empty();\t\t\t\r\n");
      out.write("\t\t\t\t$(\"#cMenu\").append(html.join(\"\"));\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t  \t});\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\t//二级菜单点击事件\r\n");
      out.write("\tfunction secNode(id,haschild){\r\n");
      out.write("\t\tlocalStorage.nodeId=id;\r\n");
      out.write("\t\tvar cMenu=$(\"#\"+id);\r\n");
      out.write("\t\tcMenu.find(\".secNode-current\").removeClass('secNode-current');\r\n");
      out.write("\t\tcMenu.find(\"a\").addClass('secondNode');\r\n");
      out.write("\t\tcMenu.siblings().find(\"a\").removeClass('secondNode');\t\t\r\n");
      out.write("  \t \tcMenuName=cMenu.find(\"span\").html();\r\n");
      out.write("  \t \tloadBreadCrumb(pMenuName,cMenuName);\t\t\t\r\n");
      out.write("\t\tif(haschild==0){\r\n");
      out.write("\t\t\t$(\"#breadcrumb3\").hide();\r\n");
      out.write("\t\t\tcMenu.find(\"a\").attr(\"href\",\"#/\"+cMenu.find(\"a\").attr(\"dataurl\"));\t        \r\n");
      out.write("\t\t\twindow.location.href=\"#/\"+cMenu.find(\"a\").attr(\"dataurl\");\t\t\t\r\n");
      out.write("\t\t}else{\r\n");
      out.write("\t\t\t$(\"#breadcrumb3\").hide();\t\t\t\r\n");
      out.write("\t\t\tloadSmenu(id);\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t        cMenu.find('i').toggleClass('fa-angle-down fa-angle-up');\r\n");
      out.write("\t        cMenu.siblings().find('i').removeClass('fa-angle-up').addClass('fa-angle-down');\t\t\t\t\t\t\r\n");
      out.write("\t\t}\t\t\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\t//加载三级菜单\r\n");
      out.write("\tfunction loadSmenu(pMenuId){\r\n");
      out.write("\t\tvar cMenu=$(\"#\"+pMenuId);\r\n");
      out.write("\t\tvar html=[];\r\n");
      out.write("\t\tvar url=cas+\"menu/getMenusByMenu\";\r\n");
      out.write("\t\tif(cMenu.find(\".secNode\").html()!=undefined){\r\n");
      out.write("\t\t\tif(cMenu.find(\".secNode\").is(\":hidden\")==true){\r\n");
      out.write("\t\t\t\tcMenu.find(\".secNode\").css(\"display\",\"block\");\t\t\t\t\r\n");
      out.write("\t\t\t}else{\r\n");
      out.write("\t\t\t\tcMenu.find(\".secNode\").css(\"display\",\"none\");\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t\t//cMenu.find(\".secNode\").slideToggle();\r\n");
      out.write("\t\t}else{\r\n");
      out.write("\t\t\t$.ajax({\r\n");
      out.write("\t\t\t\tasync:true,\r\n");
      out.write("\t\t\t\ttype:\"post\",\r\n");
      out.write("\t\t\t\turl:url,\r\n");
      out.write("\t\t\t\tdata : {keyParams:getKeyParams(\"{\\\"pMenuId\\\":\\\"\"+pMenuId+\"\\\",\\\"appId\\\":\\\"1\\\"}\",keyParams),jsonObject:getJsonObject(\"{\\\"pMenuId\\\":\\\"\"+pMenuId+\"\\\"}\")},\r\n");
      out.write("\t\t\t\tsuccess : function(data) {\r\n");
      out.write("\t\t\t\t\tvar menus = eval(\"(\" + data + \")\").data[\"menuList\"];\r\n");
      out.write("\t\t\t\t\thtml.push(\"<ul class='secNode' style='display:block'>\");\r\n");
      out.write("\t\t\t\t\t$.each(menus,function(i,n){\t\t\t\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<li id='\"+menus[i].menuId+\"'>\");\r\n");
      out.write("\t\t\t\t\t\thtml.push(\"<a href='#/\"+menus[i].name+\"' dataurl='\"+menus[i].name+\"' onclick='sesNode(\"+menus[i].menuId+\")'>\"+menus[i].menuName+\"</a></li>\");\t\r\n");
      out.write("\t\t\t\t\t})\r\n");
      out.write("\t\t\t\t\thtml.push(\"</ul>\");\r\n");
      out.write("\t\t\t\t\t$(\"#\"+pMenuId).find(\"ul\").remove();\t\t\t\r\n");
      out.write("\t\t\t\t\t$(\"#\"+pMenuId).append(html.join(\"\"));\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t  \t});\r\n");
      out.write("\t\t  \t\r\n");
      out.write("\t\t}\r\n");
      out.write("\t\tcMenu.siblings().find(\"ul\").css(\"display\",\"none\");\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\t//三级菜单点击事件\r\n");
      out.write("\tfunction sesNode(id){\r\n");
      out.write("\t\t$(\"#breadcrumb3\").show();\r\n");
      out.write("\t\t$(\"#\"+id).addClass(\"secNode-current\").siblings().removeClass(\"secNode-current\");\r\n");
      out.write("\t\tvar sMenu=$(\"#\"+id).find(\"a\");\r\n");
      out.write("\t\tsMenuName=sMenu.html();\r\n");
      out.write("\t\tloadBreadSmenu(sMenuName);\r\n");
      out.write("\t\twindow.location.href=\"#/\"+sMenu.attr(\"dataurl\");\r\n");
      out.write("\t}\n");
      out.write("</script>\r\n");
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