/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2016-12-22 09:39:22 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.cas.register;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class register_005fenterprise_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\n");
      out.write("<form id=\"addShop\">\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left\">企业全称：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<input type=\"text\" name=\"shopName\" id=\"shopName\" ng-model=\"shopName\">\n");
      out.write("\t\t\t<span class=\"text-css\">信息审核成功后，企业名称不可修改。</span>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix \">\n");
      out.write("\t\t<div class=\"box-left\">企业简介：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<textarea id=\"shopInfo\" type=\"text\" name=\"shopInfo\" ng-model=\"companyInterduce\" ></textarea>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("    <div class=\"register-new-box clearfix\">\n");
      out.write("        <div class=\"box-left\">企业编号：</div>\n");
      out.write("        <div class=\"box-right\">\n");
      out.write("            <input type=\"text\" name=\"shopNum\" id=\"shopNum\" ng-model=\"shopNum\">\n");
      out.write("            <span class=\"text-css\"></span>\n");
      out.write("        </div>\n");
      out.write("    </div>\n");
      out.write("\t<div class=\"register-new-box clearfix \">\n");
      out.write("\t\t<div class=\"box-left\" >营业执照注册号：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<input id=\"shopCer\" type=\"text\" name=\"licenseNumber\" ng-model=\"businessLicenseCode\" >\n");
      out.write("\t\t\t<span class=\"text-css\">请输入15位营业执照注册号或18位统一社会信用代码</span>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left\">营业执照扫描件：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<div class=\"cerdesc\">\n");
      out.write("\t\t\t\t<span class=\"text-css\">请上传营业执照清晰彩色原件扫描件或数码照</span><br />\n");
      out.write("\t\t\t\t<span class=\"text-css\">营业执照需在有效期内</span><br />\n");
      out.write("\t\t\t\t<span class=\"text-css\">由中国大陆工商局或市场监督管理局颁发</span><br />\n");
      out.write("\t\t\t\t<span class=\"text-css\">支持.jpg,.png,.bemp格式照片,大小不超过2M</span>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"upload-box licenseScan clearfix\">\n");
      out.write("\t\t\t\t<img alt=\"请选择图片\" src=\"http://static.qineasy.com/base/images/add_files01.png\" id=\"licenseScan\" name=\"licenseScan\">\n");
      out.write("\t\t\t\t<input type=\"file\" class=\"uploadCer\"   ngf-multiple=\"false\" ngf-select=\"uploadFiles($files)\"/>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left \">通讯地址：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<select class=\"col-md-3 mgr5\" name=\"province\" ng-model=\"shopList[0].province\" ng-change=\"shopList[0].district='';shopList[0].city='';initprovinces()\">\n");
      out.write("\t\t\t\t<option value=\"\"></option>\n");
      out.write("\t\t\t\t<option ng-repeat=\"province in provinces\" value=\"{{province.name}}\">{{province.name}}</option>\n");
      out.write("\t\t\t</select>\n");
      out.write("\t\t\t<select class=\"col-md-3 mgr5\" name=\"city\" ng-model=\"shopList[0].city\" ng-change=\"shopList[0].district='';initcitys()\">\n");
      out.write("\t\t\t\t<option value=\"\"></option>\n");
      out.write("\t\t\t\t<option ng-repeat=\"city in citys[provinceId]\" value=\"{{city.name}}\">{{city.name}}</option>\n");
      out.write("\t\t\t</select>\n");
      out.write("\t\t\t<select class=\"col-md-3 mgr5\" name=\"district\" ng-model=\"shopList[0].district\">\n");
      out.write("\t\t\t\t<option value=\"\"></option>\n");
      out.write("\t\t\t\t<option ng-repeat=\"district in districts[cityId]\" value=\"{{district.name}}\">{{district.name}}</option>\n");
      out.write("\t\t\t</select>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left\">详细地址：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<input class=\"\" type=\"text\" id=\"shopAddr\" name=\"shopAddr\" ng-model=\"address\" >\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left\">管理员身份证姓名：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<input class=\"\" type=\"text\" name=\"contacts\" ng-model=\"companyManeName\" >\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left\">管理员身份证号码：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<input class=\"\" type=\"text\" name=\"idCard\" ng-model=\"ComManCardNo\">\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left\">管理员手机号：</div>\n");
      out.write("\t\t<div class=\"box-right\">\n");
      out.write("\t\t\t<input class=\"\" type=\"text\" name=\"shopTel\" ng-model=\"ComManPhone\">\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"box-right\">\n");
      out.write("\t\t<a href=\"javascript:;\" class=\"step\" ng-click=\"nextStepCompany()\">下一步</a>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"register-new-box clearfix\">\n");
      out.write("\t\t<div class=\"box-left\"></div>\n");
      out.write("\t</div>\n");
      out.write("</form>");
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
