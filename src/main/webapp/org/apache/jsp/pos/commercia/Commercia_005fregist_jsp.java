/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-05 03:18:09 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.commercia;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class Commercia_005fregist_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\r\n");
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper commercia-content\">\r\n");
      out.write("    <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("        <h2 class=\"am-ft-16 fn-left\">免费开通商户</h2>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("    <!-- Main content -->\r\n");
      out.write("    <section class=\"container-fluid\">\r\n");
      out.write("    <form id=\"commerciaForm\">\r\n");
      out.write("        <div class=\"row\">\r\n");
      out.write("            <div class=\"prodet-nav prodet-content\">\r\n");
      out.write("                <div class=\"prodet-box\">\r\n");
      out.write("                    <div class=\"commercia-info mgt0\">\r\n");
      out.write("                        <!-- row1 -->\r\n");
      out.write("                        <div class=\"row mgt15\">\r\n");
      out.write("                            <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>企业名称:</div>\r\n");
      out.write("                            <div class=\"col-md-3 form-group needValInfo\">\r\n");
      out.write("                                <input type=\"text\" class=\"col-md-8 text-overflow shopName mgl0\" name=\"shopName\" value=\"\"/>\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <!-- row2 -->\r\n");
      out.write("                        <div class=\"row\">\r\n");
      out.write("                            <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>企业简介:</div>\r\n");
      out.write("                            <div class=\"col-md-5 form-group needValInfo\">\r\n");
      out.write("                                <textarea class=\"mgb0 shopInfo\" placeholder=\"请输入...\" name=\"shopInfo\"></textarea>\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <!-- row3 -->\r\n");
      out.write("                        <div class=\"row\">\r\n");
      out.write("                            <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>联系人:</div>\r\n");
      out.write("                            <div class=\"col-md-3 form-group needValInfo\">\r\n");
      out.write("                                <input type=\"text\" class=\"col-md-8 text-overflow contacts\" name=\"contacts\" value=\"\"/>\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <!--row4-->\r\n");
      out.write("                        <div class=\"row\">\r\n");
      out.write("                            <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>联系方式:</div>\r\n");
      out.write("                            <div class=\"col-md-3 form-group needValInfo\">\r\n");
      out.write("                                <input type=\"text\" class=\"col-md-8 text-overflow shopTel\" name=\"shopTel\" value=\"\"/>\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <!-- row5 -->\r\n");
      out.write("                        <div class=\"row\">\r\n");
      out.write("                            <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>通讯地址:</div>\r\n");
      out.write("                            <div class=\"col-md-8 form-group needValInfo\">\r\n");
      out.write("                            <select class=\"col-md-3 mgr5 shopAddr1\" ng-options=\"province.name for province in provinces\" ng-model=\"province\" ng-change=\"member.city='';member.district='';\">\r\n");
      out.write("                                <option value=\"\">请选择省</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                            <select class=\"col-md-3 mgr5 shopAddr2\" ng-options=\"city.name for city in citys[province.id]\" ng-model=\"city\" ng-change=\"member.district='';\">\r\n");
      out.write("                                <option value=\"\">请选择市</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                            <select class=\"col-md-3 mgr5 shopAddr3\" ng-options=\"district.name for district in districts[city.id]\" ng-model=\"district\">\r\n");
      out.write("                                <option value=\"\">请选择区</option>\r\n");
      out.write("                            </select>\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <!-- row7 -->\r\n");
      out.write("                        <div class=\"row\">\r\n");
      out.write("                            <div class=\"nowraps-text inprodet-titl am-ft-14\"><em class=\"am-ft-red mgr5\">*</em>详细地址:</div>\r\n");
      out.write("                            <div class=\"col-md-3 form-group needValInfo\">\r\n");
      out.write("                                <input type=\"text\" class=\"col-md-12 text-overflow shopAddrDet\" name=\"shopAddr\" value=\"\"/>\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"fn-clear\"></div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <button type=\"button\" class=\"btn btn-primary mgl20\" ng-click=\"AddCommercial()\">确认商户信息并开通</button>\r\n");
      out.write("   \t</form>\r\n");
      out.write("    </section>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 工具提示 start-->\r\n");
      out.write("    <div class=\"alert alert-danger alert-dismissible fade in fn-hide\" role=\"alert\">\r\n");
      out.write("    <button type=\"button\" class=\"close\">\r\n");
      out.write("    <span>×</span>\r\n");
      out.write("    </button>\r\n");
      out.write("    <h4>保存失败!</h4>\r\n");
      out.write("    <p>输入的内容不能为空</p>\r\n");
      out.write("    </div>\r\n");
      out.write("<!-- 工具提示 end -->\r\n");
      out.write("\r\n");
      out.write("<script>\r\n");
      out.write("\t$(function(){\r\n");
      out.write("\t\tvar formArray=[];\r\n");
      out.write("    \tformArray.push('{\"commerciaForm\":\"/shop/addShopAndOrg\"}');\r\n");
      out.write("    \tinitValidate(formArray,pos);\r\n");
      out.write("\t})\r\n");
      out.write("//关闭工具提示\r\n");
      out.write("$('.close').click(function() {\r\n");
      out.write("    $('.alert,.maskBg').hide();\r\n");
      out.write("});\r\n");
      out.write("\r\n");
      out.write("</script>\r\n");
      out.write("<!-- 尾部 -->\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "../../public/footstyle.jsp", out, false);
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
