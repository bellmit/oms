/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-16 08:17:21 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.saleMgt.saleManage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class customerMgt_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\n");
      out.write("<!-- <a href=\"javascript:;\" class=\"line-btn forwardTop-goBack\" ng-if=\"type=='1'\" ng-click=\"gobWorkBench()\" >返回</a> -->\n");
      out.write("<div class=\"content-wrapper content-wrapper-itemshow content-wrapper-itemshow2\">\n");
      out.write("\t<div class=\"forwardTop-content fn-left\" ng-if=\"userInfo.orgType == '6'\">\n");
      out.write("\t\t<div class=\"forwardTop-left\">\n");
      out.write("\t\t\t<img ng-src=\"{{orgInfo.shopLogo}}\" ng-if=\"orgInfo.shopLogo != '' \" />\n");
      out.write("\t\t\t<img src=\"http://static.qineasy.com/base/images/img_default_company.png\" ng-if=\"orgInfo.shopLogo == '' \" />\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"forwardTop-right\">\n");
      out.write("\t\t\t<div class=\"forwardTop-righttop\">\n");
      out.write("\t\t\t\t<p href=\"javascript:;\" class=\"forwardTop-rightTitl\">{{orgInfo.shopName}}</p>\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<p class=\"am-ft-black\">\n");
      out.write("\t\t\t\t<span class=\"stores-count\">店铺数：<a href=\"javascript:;\">{{orgInfo.shopNum}}个</a></span>\n");
      out.write("\t\t\t\t<span class=\"mgl10\">运营人员：{{orgInfo.userName}}<!-- <a href=\"javascript:;\"\n");
      out.write("\t\t\t\t\t\tclass=\"mgl5 allotOprate\">更换</a> --></span>\n");
      out.write("\t\t\t</p>\n");
      out.write("\t\t\t<p>联系电话：{{orgInfo.shopTel}}</p>\n");
      out.write("\t\t\t<p>\n");
      out.write("\t\t\t\t<span class=\"fn-left\">详细地址：{{orgInfo.province}}{{orgInfo.city}}{{orgInfo.district}}{{orgInfo.shopAddr}}</span>\n");
      out.write("\t\t\t\t<span class=\"fn-right am-ft-gray\">商户添加时间：{{orgInfo.openDate}}</span>\n");
      out.write("\t\t\t</p>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("\t<div class=\"ManColTable col-lg-12\">\n");
      out.write("\t\t<!-- 商品列表 -->\n");
      out.write("\t\t<div>\n");
      out.write("\t\t\t<div class=\"AddproTabnav mgb10\">\n");
      out.write("\t\t\t\t<a href=\"javascript:;\" class=\"btn fn-right btn-primary\"  ng-click=\"addData('saleManage','commercialAdd',{},'1')\">添加商户</a>\t\t\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div>\n");
      out.write("\t\t\t\t\t<div class=\"saleSearch\">\n");
      out.write("\t\t\t\t\t\t<form id='search'>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"clientName\">\n");
      out.write("\t\t\t\t\t\t\t\t<span>商户名称：</span><input type=\"text\" name='inputId'\n");
      out.write("\t\t\t\t\t\t\t\t\tplaceholder=\"请输入商户名称\" />\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"clientInfo fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 mgt20\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>服务区域：</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<!--<select name=\"\" id=\"\" ng-init=\"province='全部'\" ng-model=\"province\" ng-options=\"provinceList.province as provinceList.province for provinceList in provinceLists\">\n");
      out.write("\t\t\t\t\t\t\t\t</select>-->\n");
      out.write("\t\t\t\t\t\t\t\t\t<select name='serviceArea'>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=''></option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value='杭州'>杭州</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value='武汉'>武汉</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value='合肥'>合肥</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 mgt20\" >\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>销售人：</span> <select name=\"\" ng-init=\"saler=''\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\tng-model=\"saler\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\tng-options=\"userList.userId as userList.trueName   for userList in userLists\">\n");
      out.write("\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left mgt20\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>状态：</span> <select name='contractStatus'>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"\"></option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"0\">待审核</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"1\">待分配</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"2\">待确认</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"3\">服务中</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"4\">已完成</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"5\">暂停</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"6\">终止</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"7\">暂停待审批</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"8\">终止待审批</option>\n");
      out.write("\t\t\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"fn-left pdl15 mgt20\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<button class=\"selectContractBtn\" ng-click=\"searchData()\">查询</button>\n");
      out.write("\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</form>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"productCenterInfo\" >\n");
      out.write("\t\t\t\t\t\t<table class=\"table clientTable\">\n");
      out.write("\t\t\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"34%\">商户</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"10%\">合同总数</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"13%\">合同总金额</th>\n");
      out.write("\t\t\t\t\t\t\t\t<!--<th class=\"col-lg-1\">服务类型</th>-->\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"12%\">到期时间</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"11%\">销售人员</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"10%\">状态</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >操作</th>\n");
      out.write("\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t\t<tr ng-repeat=\"shopList in shopLists track by $index\" ng-class=\"{'服务中':'inServer','已到期':'notinServer'}[shopList.status]\">\n");
      out.write("\t\t\t\t\t\t\t\t<td class=\"fn-clear pl0 pr0 pt0 pb0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"fn-left shopLoge\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{shopList.shopLogo}}\" alt=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"fn-left shopInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<p class=\"shopNamea\"><a href=\"javascript:;\" ng-click=\"addData('saleManage','orgInfo',this.shopList,'1')\">{{shopList.shopName}}</a></p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<p class=\"shopPhone\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>联系电话：</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>{{shopList.shopTel}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<p class=\"shopAddr\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>{{shopList.province}}</span> &nbsp;&nbsp;\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>{{shopList.city}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t<td class=\"deepColor\">{{shopList.contractCount}}份</td>\n");
      out.write("\t\t\t\t\t\t\t\t<td class=\"deepColor\">{{shopList.totalprice}}元</td>\n");
      out.write("\t\t\t\t\t\t\t\t<!--<td>客服托管（无字段）</td>-->\n");
      out.write("\t\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if=\"shopList.enddate != ''\">{{shopList.enddate}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if=\"shopList.enddate == ''\">——</span>\n");
      out.write("\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t<td>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if=\"shopList.businessUserName != ''\">{{shopList.businessUserName}}</span>\t\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if=\"shopList.businessUserName == ''\">——</span>\t\n");
      out.write("\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t<td >{{shopList.status}}</td>\n");
      out.write("\t\t\t\t\t\t\t\t<td><a href=\"javascript:;\" ng-click=\"addData('saleManage','orgInfo',this.shopList,'1')\">查看详情</a></td>\n");
      out.write("\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t</table>\n");
      out.write("\t\t\t\t\t\t<div class=\"pagelist priv-pagelist\">\n");
      out.write("\t\t\t\t\t\t\t<div id=\"paging2\"></div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t<!--分页 start-->\n");
      out.write("\t\t\t<!--分页 end-->\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<!-- /商品列表 -->\n");
      out.write("\t</div>\n");
      out.write("\t<div class=\"fn-clear\"></div>\n");
      out.write("</div>\n");
      out.write("<!--发布商品弹框-->\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("\t$(function(){\n");
      out.write("\t\t$('.selectpicker').selectpicker('refresh');\n");
      out.write("\t})\n");
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