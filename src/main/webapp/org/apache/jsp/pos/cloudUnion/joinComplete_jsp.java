/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-19 08:37:25 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.cloudUnion;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class joinComplete_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("   <!--content-->\r\n");
      out.write(" <div class=\"content-wrapper content-wrapper-order\">\r\n");
      out.write("    \t<div class=\"col-md-11 pageTitl\">\r\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">加入云仓分享联盟</h2>\r\n");
      out.write("\t    </div>\r\n");
      out.write("         <div class=\"col-md-12 joinNav\">\r\n");
      out.write("            <div class=\"joinUion01 \">\r\n");
      out.write("            \t<span class=\"joinUNav1\">1</span>\r\n");
      out.write("            \t<span class=\"joinUNav2\">加入联盟</span>\r\n");
      out.write("            </div> \r\n");
      out.write("            <div class=\"joinUion02 \">\r\n");
      out.write("            \t<span class=\"joinUNav1\">2</span>\r\n");
      out.write("            \t <span class=\"joinUNav2\">选择成员</span>\r\n");
      out.write("            </div> \r\n");
      out.write("            <div class=\"joinUion03 joinUion03active\">\r\n");
      out.write("            \t<span class=\"joinUNav1 activespan\">3</span>\r\n");
      out.write("            \t<span class=\"joinUNav2\">完成</span>    \r\n");
      out.write("            </div>          \r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("        <div class=\"col-md-11 join-titl-note joinCpt\">\r\n");
      out.write("        <p > \r\n");
      out.write("        \t<span class=\"joinMber\">成功加入联盟：</span><span>{{cloudName}}&nbsp;&nbsp;</span>\r\n");
      out.write("        \t<span class=\"joinMber\">品牌：</span><span>{{brandName}}&nbsp;&nbsp;</span>\r\n");
      out.write("        \t<span class=\"joinMber\">创建商户：</span><span>{{shopName}}</span>\r\n");
      out.write("        </p>\r\n");
      out.write("        <p >共加入<span ng-if=\"allSelect\">{{counts}}</span>\r\n");
      out.write("        \t    <span ng-if=\"partSelect\">{{selectedCounts}}</span>\r\n");
      out.write("        \t个成员，<a href=\"javascript:;\" ng-click=\"scanJoinedMemberA()\"><span>查看加入成员</span></a></p>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"col-md-11 joinCptSet\">\r\n");
      out.write("               <p>您还没有设置商品的结算价，<a href=\"javascript:;\" ><span>立即设置结算价</span></a></p>\r\n");
      out.write("               <p>您还没有设置商品的库存，<a href=\"javascript:;\" ><span>立即设置库存</span></a></p>          \r\n");
      out.write("         </div>\r\n");
      out.write("          <div class=\"fn-clear\"></div>      \r\n");
      out.write("    </div>\r\n");
      out.write("      <!-- /content -->");
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
