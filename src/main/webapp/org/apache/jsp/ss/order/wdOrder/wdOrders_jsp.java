/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-08-28 07:20:13 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.ss.order.wdOrder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class wdOrders_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html;charset=utf-8");
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
      out.write("<!--------------- Content start --------------- -->\n");
      out.write("\n");
      out.write("<div class=\"content-wrapper\">\n");
      out.write("\t<!-- search -->\n");
      out.write("\t<div class=\"col-md-11 saleListSearch wdOrderSearch\">\n");
      out.write("\t\t<form id=\"searchOrderForm \">\n");
      out.write("\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t<span>商品名称：</span>\n");
      out.write("\t\t\t\t<input type=\"text\" ng-model=\"search.proName\"/>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t<span>会员昵称：</span>\n");
      out.write("\t\t\t\t<input type=\"text\" ng-model=\"search.memberName\"/>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t<span>订单号：</span>\n");
      out.write("\t\t\t\t<input type=\"text\" ng-model=\"search.orderId\"/>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-left dealTime\">\n");
      out.write("\t\t\t\t<span>下单时间：</span>\n");
      out.write("\t\t\t\t<input class=\"laydate-icon storeOrderTime\" type=\"text\" id=\"startTime\" onclick=\"laydate({max: laydate.now()})\" name=\"createDate\" value=\"\" readonly=\"readonly\" placeholder=\"\" style=\"height: 34px;\" />\n");
      out.write("\t\t\t\t<span class=\"mgl5 mgr5\">至</span>\n");
      out.write("\t\t\t\t<input class=\"laydate-icon storeOrderTime\" type=\"text\" id=\"endTime\" onclick=\"laydate({max: laydate.now()})\" name=\"endDate\" value=\"\" readonly=\"readonly\" placeholder=\"\" style=\"height: 34px;\" />\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"fn-left \">\n");
      out.write("\t\t\t\t<button class=\"selectOrderBtn \" ng-click=\"getWdOrderList()\">查询</button>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</form>\n");
      out.write("\t</div>\n");
      out.write("\t<!-- /search -->\n");
      out.write("\t<!-- Main content -->\n");
      out.write("\t<div class=\"ManColTable col-md-11 mgl20 pl0\">\n");
      out.write("\t\t<!-- 订单列表 -->\n");
      out.write("\t\t<div class=\"\">\n");
      out.write("\t\t\t<div class=\"ordersTable\">\n");
      out.write("\t\t\t\t<div class=\"oderListNavBox fn-clear\">\n");
      out.write("\t\t\t\t\t<ul class=\"oderListNav oderListNava fn-clear\" >\n");
      out.write("\t\t\t\t\t\t<li id=\"\" class=\"commonOrdera\" ng-class=\"{'orderActivea':tab=='0'}\" ng-click=\"showOrder('0')\">\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\">全部订单</a>\n");
      out.write("\t\t\t\t\t\t</li>\n");
      out.write("\t\t\t\t\t\t<li id=\"\" class=\"commonOrdera\" ng-class=\"{'orderActivea':tab=='1'}\" ng-click=\"showOrder('1')\">\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\">待支付 </a>\n");
      out.write("\t\t\t\t\t\t</li>\n");
      out.write("\t\t\t\t\t\t<li id=\"\" class=\"commonOrdera\" ng-class=\"{'orderActivea':tab=='2'}\" ng-click=\"showOrder('2')\">\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\">待发货 </a>\n");
      out.write("\t\t\t\t\t\t</li>\n");
      out.write("\t\t\t\t\t\t<li id=\"\" class=\"commonOrdera\" ng-class=\"{'orderActivea':tab=='3'}\" ng-click=\"showOrder('3')\">\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\">待收货 </a>\n");
      out.write("\t\t\t\t\t\t</li>\n");
      out.write("\t\t\t\t\t\t<li id=\"\" class=\"commonOrdera\" ng-class=\"{'orderActivea':tab=='4'}\" ng-click=\"showOrder('4')\">\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\">退款退货</a>\n");
      out.write("\t\t\t\t\t\t</li>\n");
      out.write("\t\t\t\t\t\t<li id=\"\" class=\"commonOrdera\" ng-class=\"{'orderActivea':tab=='5'}\" ng-click=\"showOrder('5')\">\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\">已完成</a>\n");
      out.write("\t\t\t\t\t\t</li>\n");
      out.write("\t\t\t\t\t\t<li id=\"\" class=\"commonOrdera\" ng-class=\"{'orderActivea':tab=='6'}\" ng-click=\"showOrder('6')\">\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\">已关闭</a>\n");
      out.write("\t\t\t\t\t\t</li>\n");
      out.write("\t\t\t\t\t</ul>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"col-md-12  fn-clear paddinglr0\">\n");
      out.write("\t\t\t\t\t<div class=\"wdOrders-nav\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">查询结果（ 订单数：<span class=\"am-ft-orangeS\">{{count}}</span>条）</span>\n");
      out.write("\t\t\t\t\t\t<select name=\"\" id=\"\" class=\"exportType\" ng-model=\"search.exportType\">\n");
      out.write("\t\t\t\t\t\t\t<option value=\"one\">当前页</option>\n");
      out.write("\t\t\t\t\t\t\t<option value=\"all\">全部页</option>\n");
      out.write("\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t<button class=\"blue-white-btn fn-right mgt10 \" ng-click=\"exportOrder()\">导出订单</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"orderTbTabel mgl0\">\n");
      out.write("\t\t\t\t\t\t<table>\n");
      out.write("\t\t\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"23%\">商品信息</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"12%\">单价</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"8%\">数量</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"12%\">会员昵称</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"12%\">金额</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"10%\">订单状态</th>\n");
      out.write("\t\t\t\t\t\t\t\t<th scope=\"col\" width=\"10%\">操作</th>\n");
      out.write("\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t\t<tr ng-repeat=\"order in orderList\">\n");
      out.write("\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"orderTbReponse orderTbReponsea pt0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<table>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"orderTbTabelCode\" style=\"background: #E9F8FF;text-align: left;\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgr10 am-ft-gray\">订单号：{{order.orderId}} </span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-gray\">{{order.orderTime}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr ng-repeat=\"orderDetail in order.orderDetails\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td scope=\"col\" width=\"23%\" class=\"orderTbProBox\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"orderTbUnit img-set\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{orderDetail.picUrl}}\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"orderTbPro\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{orderDetail.proName}}</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mgt5\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ng-if=\"orderDetail.productSpec.item1!=''\">{{orderDetail.productSpec.item1}} </span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ng-if=\"orderDetail.productSpec.item2!=''\">{{orderDetail.productSpec.item2}} </span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ng-if=\"orderDetail.productSpec.item3!=''\">{{orderDetail.productSpec.item3}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ng-if=\"orderDetail.productSpec.proColorName!=''\">{{orderDetail.productSpec.proColorName}} </span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ng-if=\"orderDetail.productSpec.proSizeName!=''\">{{orderDetail.productSpec.proSizeName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"\" width=\"12%\" scope=\"col\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t{{orderDetail.unitPrice}}元\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"\" width=\"8%\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t{{orderDetail.amount}}\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"{{order.orderDetails.length}}\" width=\"12%\" ng-if=\"$index==0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t{{order.memberName}}\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"{{order.orderDetails.length}}\" width=\"12%\" ng-if=\"$index==0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"am-ft-orange\">{{order.totalPrice}}元</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<p>（运费：{{order.buyPostPrice}}元）</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<p ng-if=\"order.couponAmt>0\">优惠：-{{order.couponAmt}}元</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<p ng-if=\"order.couponAmt==0\">优惠：0.00元</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"{{order.orderDetails.length}}\" width=\"12%\" ng-if=\"$index==0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<p ng-class=\"{'am-ft-orange':order.orderStatus=='未支付','am-ft-blue':order.orderStatus=='未发货','am-ft-orange':order.orderStatus=='已发货'}\">{{order.orderStatus}}</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"am-ft-black\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" ng-click='checkDetail(this)'>查看详情</a>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"{{order.orderDetails.length}}\" width=\"12%\" ng-if=\"$index==0\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"blueGroundWhiteBtn\" ng-if=\"order.orderStatus=='未发货'\" ng-click=\"showLogiticInfo(this)\">确认发货</button>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"blueGroundWhiteBtn \" ng-if=\"order.orderStatus=='未支付'\" ng-click=\"showCloseOrder(this)\">关闭订单</button>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"blueGroundWhiteBtn \" ng-if=\"order.orderStatus=='待退款'\" ng-click=\"showRefundOrder(this)\">同意退款</button>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t\t\t\t</table>\n");
      out.write("\t\t\t\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t\t\t</tr>\n");
      out.write("\t\t\t\t\t\t</table>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"pagelist priv-pagelist\">\n");
      out.write("            <div id=\"paging\"></div>\n");
      out.write("        </div>\n");
      out.write("\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t<!-- /订单列表 -->\n");
      out.write("\t</div>\n");
      out.write("\t<!--订单详情\n");
      out.write("\t<div class=\"ManColTable col-lg-12 mgt30\" ng-hide=\"true\" id=\"orderInfo\">\n");
      out.write("\t\t<div class=\"col-md-10 orderTbDetilNav\" style=\"border:none\">\n");
      out.write("\t\t\t<span class=\"\">订单号：</span>\n");
      out.write("\t\t\t<span>{{orderDetail.orderId}}</span>\n");
      out.write("\t\t\t<span class=\"mgl15\">{{orderDetail.orderTime.substring(0,19)}}</span>\n");
      out.write("\t\t\t<span class=\"mgl15\">店铺：{{chooseShopName}}</span>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"col-md-10 orderTbDetilNav\" style=\"border:none\">\n");
      out.write("\t\t\t<div class=\"fn-left mgr20\">\n");
      out.write("\t\t\t\t<span>会员：{{orderDetail.memberName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;\n");
      out.write("\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<!--<div class=\"fn-left mgr20\" style=\"width: 7%;\">\n");
      out.write("\t\t\t\t<span class=\"am-ft-red\" >{{orderDetail.orderStatus}}</span>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"col-md-10 orderTbDetilNav mgt10\" style=\"border:none\">\n");
      out.write("\t\t\t<div class=\"fn-left mgr20\">\n");
      out.write("\t\t\t\t<span class=\"\">收货人姓名：{{orderDetail.logiticInfo.consignee}}</span>\n");
      out.write("\t\t\t\t<span class=\"mgl35\">收货人电话：{{orderDetail.logiticInfo.mobile}}</span>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"col-md-10 orderTbDetilNav mgt10\" style=\"border:none\">\n");
      out.write("\t\t\t<div class=\"fn-left mgr20\">\n");
      out.write("\t\t\t\t<span class=\"\">收货人地址：{{orderDetail.logiticInfo.province}}{{orderDetail.logiticInfo.city}}{{orderDetail.logiticInfo.district}}{{orderDetail.logiticInfo.address}}</span>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"col-md-10\" class=\"orderTbProDetil\">\n");
      out.write("\t\t\t<p class=\"orderTbProTitle\">商品信息</p>\n");
      out.write("\t\t\t<table class=\"table table-hover table-striped\">\n");
      out.write("\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t<th colspan=\"3\">\n");
      out.write("\t\t\t\t\t\t<div class=\"col-md-12\">\n");
      out.write("\t\t\t\t\t\t\t<div style=\"width: 45%;float:left;text-align: center;\">商品</div>\n");
      out.write("\t\t\t\t\t\t\t<div style=\"width: 25%;float:left;text-align: center;\">数量</div>\n");
      out.write("\t\t\t\t\t\t\t<div style=\"width: 30%;float:left;text-align: center;\">单价</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</th>\n");
      out.write("\t\t\t\t\t<th style=\"text-align: center;\">\n");
      out.write("\t\t\t\t\t\t实付金额\n");
      out.write("\t\t\t\t\t</th>\n");
      out.write("\t\t\t\t</tr>\n");
      out.write("\t\t\t\t<tr>\n");
      out.write("\t\t\t\t\t<td colspan=\"3\" class=\"por-info col-md-8\">\n");
      out.write("\t\t\t\t\t\t<div class=\"proDetialOne col-md-12\" style=\"padding: 0;margin: 0;\" ng-repeat=\"orderDetail in orderDetail.orderDetails\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"proDetial col-md-4\" style=\"width: 45%; padding: 0;margin: 0;\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"proDetial\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<p>{{orderDetail.proName}}</p>\n");
      out.write("\t\t\t\t\t\t\t\t\t<p>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span ng-if=\"orderDetail.productSpec.proColorName != ''\">颜色：{{orderDetail.productSpec.proColorName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15\" ng-if=\"orderDetail.productSpec.proSizeName != ''\">尺码：{{orderDetail.productSpec.proSizeName}}</span></p>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"\" ng-if=\"orderDetail.productSpec.item1 != ''\">{{orderDetail.productSpec.item1}}</span></p>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"\" ng-if=\"orderDetail.productSpec.item2 != ''\">{{orderDetail.productSpec.item2}}</span></p>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"\" ng-if=\"orderDetail.productSpec.item3 != ''\">{{orderDetail.productSpec.item3}}</span></p>\n");
      out.write("\t\t\t\t\t\t\t\t\t<p><span>款号：{{orderDetail.proModelid}}</span></p>\n");
      out.write("\t\t\t\t\t\t\t\t\t<p><span>吊牌价：￥{{orderDetail.unitPrice}}</span></p>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"buyProNum col-md-4\" style=\"width: 25%; padding: 0;text-align: center;\"><span>{{orderDetail.amount}}</span></div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"buyProUnit col-md-4\" style=\"width: 25%; padding:  0;text-align: center;\"><span>{{orderDetail.totalPrice}}元</span></div>\n");
      out.write("\t\t\t\t\t\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t\t<td class=\"o2oprice col-md-4\">\n");
      out.write("\t\t\t\t\t\t<span>{{orderDetail.payPrice}}元</span>\n");
      out.write("\t\t\t\t\t</td>\n");
      out.write("\t\t\t\t</tr>\n");
      out.write("\t\t\t</table>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"fn-clear\"></div>\n");
      out.write("\t</div>-->\n");
      out.write("</div>\n");
      out.write("<!--立即发货弹窗-->\n");
      out.write("<div class=\"area-dialog-content\" ng-show=\"postWxProduct\">\n");
      out.write("\t<div class=\"tborder-dialog tborder-dialog-send \" id=\"wxSendDialog\">\n");
      out.write("\t\t<div class=\"tborder-dialog-header fn-clear\">\n");
      out.write("\t\t\t<span class=\"fn-left\">立即发货</span>\n");
      out.write("\t\t\t<a href=\"javascript:;\" class=\"fn-right\" ng-click=\"closeDia()\">\n");
      out.write("\t\t\t\t<img src=\"../static/base/images/closelogo.png\" alt=\"\" />\n");
      out.write("\t\t\t</a>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"tborder-dialog-content\">\n");
      out.write("\t\t\t<div class=\"tborder-dia-line mgb20\">\n");
      out.write("\t\t\t\t<span>物流公司:</span>\n");
      out.write("\t\t\t\t<select name=\"\" id=\"\" class=\"sendcompany\" ng-model=\"logitic\" ng-options=\"logiticMap.logiticCompanyName for logiticMap in logiticMaps\">\n");
      out.write("\t\t\t\t\t\n");
      out.write("\t\t\t\t</select>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"tborder-dia-line mgb20\">\n");
      out.write("\t\t\t\t<span>快递单号:</span>\n");
      out.write("\t\t\t\t<input type=\"text\" ng-model=\"logiticObj.logiticNum\" />\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<span class=\"am-ft-red\">{{warn}}</span>\n");
      out.write("\t\t\t<div class=\"button-content\">\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"btn btn-primary addBrandBtn mgl0\" ng-click=\"updateLogiticInfo()\">确认</button>\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"btn btn-default mgl20\" ng-click=\"closeDia()\">取消</button></div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("</div>\n");
      out.write("<div class=\"maskBgw \" ng-if=\"closeOrder\">\n");
      out.write("\t<div class=\"mask-container\">\n");
      out.write("\t\t<div class=\"mask-top fn-clear\">\n");
      out.write("\t\t\t<p class=\"fn-left\">确认关闭订单</p>\n");
      out.write("\t\t\t<a href=\"javascript:;\">\n");
      out.write("\t\t\t\t<img ng-click=\"closeDia()\" src=\"http://static.qineasy.com/base/images/closelogo.png\" class=\"fn-right\" alt=\"\" />\n");
      out.write("\t\t\t</a>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"mask-content mask-contenta\" style=\"padding:50px 100px;\">\n");
      out.write("\t\t\t<form action=\"\" class=\"info-form fn-clear\" id=\"\">\n");
      out.write("\t\t\t\t<div class=\"continue-frame\">\n");
      out.write("\t\t\t\t\t<div class=\"continue-frame-content\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-14 color666\">订单号：</span>\n");
      out.write("\t\t\t\t\t\t<span>{{closeOrderInfo.orderId}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</form>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"mask-bottom fn-clear\">\n");
      out.write("\t\t\t<button class=\"commit fn-left\" ng-click=\"sureCloseOrder()\">确认</button>\n");
      out.write("\t\t\t<button class=\"cancel fn-left\" ng-click=\"closeDia()\">取消</button>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("</div>\n");
      out.write("<!--立即发货弹窗-->\n");
      out.write("<!--订单详情-->\n");
      out.write("<div class=\"maskBgw \" ng-if=\"refundOrder\">\n");
      out.write("\t<div class=\"mask-container\">\n");
      out.write("\t\t<div class=\"mask-top fn-clear\">\n");
      out.write("\t\t\t<p class=\"fn-left\">确认退款</p>\n");
      out.write("\t\t\t<a href=\"javascript:;\">\n");
      out.write("\t\t\t\t<img ng-click=\"closeDia()\" src=\"http://static.qineasy.com/base/images/closelogo.png\" class=\"fn-right\" alt=\"\" />\n");
      out.write("\t\t\t</a>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"mask-content mask-contenta\" style=\"padding:50px 100px;\">\n");
      out.write("\t\t\t<form action=\"\" class=\"info-form fn-clear\" id=\"\">\n");
      out.write("\t\t\t\t<div class=\"continue-frame\">\n");
      out.write("\t\t\t\t\t<div class=\"continue-frame-content\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-14 color666\">订单号：</span>\n");
      out.write("\t\t\t\t\t\t<span>{{refundOrderInfo.orderId}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</form>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<div class=\"mask-bottom fn-clear\">\n");
      out.write("\t\t\t<button class=\"commit fn-left\" ng-click=\"sureRefundOrder()\">确认</button>\n");
      out.write("\t\t\t<button class=\"cancel fn-left\" ng-click=\"closeDia()\">取消</button>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("</div>\n");
      out.write("<!--订单详情-->\n");
      out.write("\n");
      out.write("<script>\n");
      out.write("\t$(function() {\n");
      out.write("\t\tvar pIndex;\n");
      out.write("\t\t$(\".oderListNava\").on(\"click\", \"li\", function() {\n");
      out.write("\t\t\tpIndex = $(this).index();\n");
      out.write("\t\t\t$(\".oderListNava li\").each(function(index, ele) {\n");
      out.write("\t\t\t\t$(this).removeClass(\"orderActivea\")\n");
      out.write("\t\t\t});\n");
      out.write("\t\t\t$(\".oderListNava li\").eq(pIndex).addClass(\"orderActivea\");\n");
      out.write("\t\t});\n");
      out.write("\t\t$(\"#wxSendDialog\").center();\n");
      out.write("\t\t$(\".mask-container\").center();\n");
      out.write("\t});\n");
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
