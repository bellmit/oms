/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-06-13 10:00:57 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.businessMgt;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class service_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!-- <a href=\"javascript:;\" class=\"line-btn forwardTop-goBack\" ng-if=\"type=='1'\" ng-click=\"gobWorkBench()\" >返回</a> -->\r\n");
      out.write("<div class=\"content-wrapper content-wrapper-itemshow content-wrapper-itemshow2 saleSumary-wrapper\">\r\n");
      out.write("\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t<div class=\"ManColTable col-lg-12 saleDetail\">\r\n");
      out.write("\t\t\r\n");
      out.write("\t\t<div class=\"col-lg-12 saleSummary service-nav\" >\r\n");
      out.write("\t\t\t<ul class=\"fn-clear\">\r\n");
      out.write("\t\t\t\t<li class=\"fn-left constractCount\" >\r\n");
      out.write("\t\t\t\t\t<p class=\"am-ft-18 am-ft-black\">22</p>\r\n");
      out.write("\t\t\t\t\t<p class=\"am-ft-12 am-ft-66\">合同总数</p>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t<li class=\"fn-left newclient \" >\r\n");
      out.write("\t\t\t\t\t<p class=\"am-ft-18 am-ft-black\">22</p>\r\n");
      out.write("\t\t\t\t\t<p class=\"am-ft-12 am-ft-66\">席位总数</p>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t<li class=\"fn-left moneyAmount\" >\r\n");
      out.write("\t\t\t\t\t<p class=\"am-ft-18 am-ft-f6\">¥2000</p>\r\n");
      out.write("\t\t\t\t\t<p class=\"am-ft-12 am-ft-66\">席位平均单价</p>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t<li class=\"fn-left moneyAmount \" >\r\n");
      out.write("\t\t\t\t<p class=\"am-ft-18 am-ft-f6\">¥2000</p>\r\n");
      out.write("\t\t\t\t\t<p class=\"am-ft-12 am-ft-66\">服务费用总额</p>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t</ul>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!-- 商品列表 -->\r\n");
      out.write("\t\t<div>\r\n");
      out.write("\t\t\t<div class=\"AddproTabnav\">\r\n");
      out.write("\t\t\t\t<div class=\"tab-item \" ng-class=\"{true:'tabactive'}[model.isShiftTab=='1']\"  ng-click=\"shiftShopTab('1')\">在册商户<span ng-if=\"model.isShiftTab=='1'\">({{count1}})</span></div>\r\n");
      out.write("\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[model.isShiftTab=='2']\" ng-click=\"shiftShopTab('2')\">暂停商户<span ng-if=\"model.isShiftTab=='2'\">({{count2}})</span></div>\r\n");
      out.write("\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[model.isShiftTab=='3']\" ng-click=\"shiftShopTab('3')\">完结商户<span ng-if=\"model.isShiftTab=='3'\">({{count3}})</span></div>\r\n");
      out.write("\t\t\t\t<div class=\"tab-item\" ng-class=\"{true:'tabactive'}[model.isShiftTab=='4']\" ng-click=\"shiftShopTab('4')\">全部商户<span ng-if=\"model.isShiftTab=='4'\">({{count4}})</span></div>\r\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div>\r\n");
      out.write("\t\t\t<div class=\"saleSearch\">\r\n");
      out.write("\t\t\t\t\t\t<form id='search'>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"clientInfo  fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"artDes_seach fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 \">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span>商户名称：</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<select id=\"comCiaList\" class=\"selectpicker\" data-live-search=\"true\" name=\"orgId\" ng-model=\"search.orgId\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\" \">请选择</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 \" >\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span>负责商务：</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  ng-model='search.signName'/>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 \" style=\"margin-left: 23px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span>类型：</span> \r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<select ng-model=\"search.serviceType\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\" \">请选择</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">值守</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">提成</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t\t<div  class=\"artDes_seach fn-clear\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 mgt10\" >\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span>服务区域：</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<select ng-options=\"n.areaName as n.areaName for n in departAreaList\" ng-model=\"search.serviceArea\" ng-change=\"getDepart()\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\" \">请选择</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"fn-left pdr20 mgt10\" style=\"margin-left: 10px; margin-right: 56px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span class=\"fn-left\">服务部门：</span> \r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<select class=\"col-md-2 mgr10\" ng-options=\"n.departId as n.departName for n in parts1\" ng-model=\"selectKe1\" ng-change=\"departSelect(selectKe1,1)\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">请选择</option>\r\n");
      out.write("\t\t\t\t                        </select>\r\n");
      out.write("\t\t\t\t                        <select class=\"col-md-2 mgr10\" ng-show=\"parts2.length != 0\" ng-options=\"x.departId as x.departName for x in parts2\" ng-model=\"selectKe2\" ng-change=\"departSelect(selectKe2,2)\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">请选择</option>\r\n");
      out.write("\t\t\t\t                        </select>\r\n");
      out.write("\t\t\t\t                        <select class=\"col-md-2 mgr10\" ng-show=\"parts3.length != 0\" ng-options=\"a.departId as a.departName for a in parts3\" ng-model=\"selectKe3\" ng-change=\"departSelect(selectKe3,3)\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">请选择</option>\r\n");
      out.write("\t\t\t\t                        </select>\r\n");
      out.write("\t\t\t\t                         <select class=\"col-md-2 mgr10\" ng-show=\"parts4.length != 0\" ng-options=\"a.departId as a.departName for a in parts4\" ng-model=\"selectKe4\" ng-change=\"departSelect(selectKe4,4)\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">请选择</option>\r\n");
      out.write("\t\t\t\t                        </select>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"fn-left mgt10\" style=\"margin-left: -28px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span>服务周期：</span> \r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<select ng-model=\"search.months\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\" \">请选择</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">一个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">二个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">三个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">四个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\">五个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\">六个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\">七个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\">八个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\">九个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\">十个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\">十一个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\">十二个月</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p class=\"fn-left pdl15 mgt10\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<button class=\"selectContractBtn\" ng-click=\"getContracts()\">查询</button>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"productCenterInfo\" >\r\n");
      out.write("\t\t\t\t\t\t<table class=\"table clientTable\">\r\n");
      out.write("\t\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >合同编号</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >商户名称</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >类型</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >席位数</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >单价</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >服务周期</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >服务费用</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >服务日期</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >负责商务</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >服务区域</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >服务部门</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >任务状态</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" >操作</th>\r\n");
      out.write("\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t\t<tr  ng-repeat='contract in contractList'>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td>{{contract.contractNum}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td class=\"fn-clear pl0 pr0 pt0 pb0\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t{{contract.orgInfo.shopName}}\r\n");
      out.write("\t\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if='contract.taskInfo.serviceType==\"0\"'>值守</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span ng-if='contract.taskInfo.serviceType==\"1\"'>提成{{contract.taskInfo.deductRate}}%</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td class=\"deepColor\">{{contract.taskInfo.serviceNum}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td>{{contract.taskInfo.unitPrice}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td >{{contract.taskInfo.months}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td>{{contract.taskInfo.serviceAmount}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t{{contract.taskInfo.beginDate}}至{{contract.taskInfo.endDate}}\r\n");
      out.write("\t\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td class=\"deepColor\">{{contract.userName}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td >{{contract.taskInfo.serviceArea}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td >{{contract.taskInfo.departNameTree}}</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='0'\">待财务确认</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='1'\">待分配区域</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='2'\">待分配人员</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='3'\">待人员确认</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='4'\">服务中</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='5'\">暂停申请</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='6'\">已暂停</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='7'\">已完成</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td ng-if=\"contract.taskInfo.taskStatus=='8'\">已续签</td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<td><a href=\"javascript:;\" ng-click=\"showLog(this)\">查看</a></td>\r\n");
      out.write("\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t</table>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"pagelist priv-pagelist\">\r\n");
      out.write("\t\t\t\t\t\t\t<div id=\"paging\"></div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!-- /商品列表 -->\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"fn-clear\"></div>\r\n");
      out.write("</div>\r\n");
      out.write("<!--发布商品弹框-->\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("\t$(function(){\r\n");
      out.write("\t\t$('.selectpicker').selectpicker('refresh');\r\n");
      out.write("\t})\r\n");
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
