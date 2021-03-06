/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-05 03:18:17 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.pos.Kpi;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class kpiMgt_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<div class=\"content-wrapper kip-content content-forwardAdd-wrapper pb20\">\n");
      out.write("\t<div class=\"col-md-11 mgl20 pl0 pageTitl\">\n");
      out.write("\t\t<h2 class=\"am-ft-16 fn-left\">店铺业绩目标设定</h2>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"col-md-9 mgl20 mgb20 pl0\">\n");
      out.write("\t\t<span>选择年份：</span>\n");
      out.write("\t\t<select name=\"\" class=\"year-select\" ng-model=\"year\" ng-options=\"item.year as item.year for item in yearDateArr\" ng-change=\"searchShopPlan()\">\n");
      out.write("\t\t</select>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"col-md-9 mgl20 mgb20 pl0  \">\n");
      out.write("\t\t<div class=\"col-md-12 pl0 pr0 month-list\">\n");
      out.write("\t\t\t<ul>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='01'}\" ng-click=\"setMonth('01')\">01月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='02'}\" ng-click=\"setMonth('02')\">02月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='03'}\" ng-click=\"setMonth('03')\">03月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='04'}\" ng-click=\"setMonth('04')\">04月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='05'}\" ng-click=\"setMonth('05')\">05月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='06'}\" ng-click=\"setMonth('06')\">06月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='07'}\" ng-click=\"setMonth('07')\">07月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='08'}\" ng-click=\"setMonth('08')\">08月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='09'}\" ng-click=\"setMonth('09')\">09月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='10'}\" ng-click=\"setMonth('10')\">10月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='11'}\" ng-click=\"setMonth('11')\">11月</li>\n");
      out.write("\t\t\t\t<li class=\"col-md-1 pl0 pr0\" ng-class=\"{'month-select':month=='12'}\" ng-click=\"setMonth('12')\">12月</li>\n");
      out.write("\t\t\t</ul>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<table class=\"table table-hover center-align table-striped table-bordered kpi-table\">\n");
      out.write("\t\t\t<tr>\n");
      out.write("\t\t\t\t<th class=\"col-md-3\">店铺</th>\n");
      out.write("\t\t\t\t<th class=\"col-md-4\">月目标（元）</th>\n");
      out.write("\t\t\t\t<th class=\"col-md-5\">操作</th>\n");
      out.write("\t\t\t</tr>\n");
      out.write("\t\t\t<tr ng-repeat=\"shopPlanList in shopPlanLists track by $index\">\n");
      out.write("\t\t\t\t<td>{{shopPlanList.shopName}}</td>\n");
      out.write("\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t<div ng-show=\"shopPlanList.edit==false\">\n");
      out.write("\t\t\t\t\t\t<span>{{shopPlanList.planAmount}}</span>\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\"><i class=\"fa fa-pencil mgl5\" aria-hidden=\"true\" ng-click=\"editShopPlan($index)\"></i></a>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div ng-show=\"shopPlanList.edit==true\">\n");
      out.write("\t\t\t\t\t\t<!--<input type=\"text\" name=\"\" id=\"\" ng-change=\"inputPlanAmount($index,shopPlanList.planAmount)\" ng-model=\"shopPlanList.planAmount\"/>-->\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" name=\"\" id=\"\" ng-model=\"shopPlanList.planAmount\" />\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" class=\"mgl5\" ng-click=\"saveShopPlan($index)\">保存</a>\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" class=\"mgl5\" ng-click=\"cancelEdit($index)\">取消</a>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</td>\n");
      out.write("\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t<div class=\"kpi-deal fn-clear\">\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" class=\"fn-left am-ft-blue\" ng-click=\"setDailyKpi(shopPlanList)\">设置日目标</a>\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" class=\"fn-right am-ft-blue\" ng-click=\"setGuideKpi(shopPlanList)\">导购业绩设定</a>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</td>\n");
      out.write("\t\t\t</tr>\n");
      out.write("\t\t\t<tr>\n");
      out.write("\t\t\t\t<td colspan=\"3\">\n");
      out.write("\t\t\t\t\t<div style=\"position: relative;\">\n");
      out.write("\t\t\t\t\t\t<div class=\"setUnionSaveBox\" ng-show=\"showDialog\" style=\"top:0px;left:130px;width:400px\">\n");
      out.write("\t\t\t\t\t\t\t<span>统一设置月目标为：</span>\n");
      out.write("\t\t\t\t\t\t\t<input type=\"number\" ng-model=\"togetherPlanAmount\" class=\"ng-pristine ng-untouched ng-valid\">&nbsp;\n");
      out.write("\t\t\t\t\t\t\t<button class=\"batchSet\" ng-click=\"setMonthPlanTogether()\">设置</button>\n");
      out.write("\t\t\t\t\t\t\t<button class=\"batchSetConsel\" ng-click=\"cancelSetTogether()\">取消</button>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<button class=\"selectNotSaleProduct fn-left\" ng-click=\"toSetAllPlan()\">统一设置月目标</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</td>\n");
      out.write("\t\t\t</tr>\n");
      out.write("\t\t</table>\n");
      out.write("\t</div>\n");
      out.write("</div>");
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
