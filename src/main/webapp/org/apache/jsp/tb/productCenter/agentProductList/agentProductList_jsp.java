/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-24 06:02:09 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.productCenter.agentProductList;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class agentProductList_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--商户管理主页-->\r\n");
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper content-member-wrapper sku-content-wrapper content-forward-wrapper\">\r\n");
      out.write("    <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("        <div class=\"col-lg-12 pl0 pr0\">\r\n");
      out.write("            <h2 class=\"am-ft-16 fn-left\">商品中心（共{{count}}条记录）</h2>\r\n");
      out.write("            <div class=\"OderlistSearch skulistSearch mgt0 fn-right \" ng-if=\"count>0\">\r\n");
      out.write("\t\t\t\t<!--<div class=\"\">-->\r\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear pl0 pr0\" style=\"width:350px\">\r\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\" style=\"line-height: 14px;\" class=\"fn-right search-button\" ng-click=\"search(shopName)\">查询</a>\r\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" class=\"col-sm-8  fn-right agentSearch\" ng-model=\"shopName\" placeholder=\"请输入商户名称查询\" value=\"\" />\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"fn-clear\"></div>\r\n");
      out.write("\t\t\t\t<!--</div>-->\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("            \r\n");
      out.write("            \r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("\r\n");
      out.write("        <!--缺省-->\r\n");
      out.write("\t\t<div class=\"col-md-12 dafaultWapper\" ng-if=\"count==0\">\r\n");
      out.write("\t\t\t<div class=\"loadingFormal\">\r\n");
      out.write("\t\t\t\t<img src=\"../static/base/images/icon_wait.png\" />\r\n");
      out.write("\t\t\t\t<span style=\"font-size: 16px;\">暂无记录</span>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("        <!-- 商户列表 -->\r\n");
      out.write("        <div class=\"col-lg-12\" style=\"padding: 0;\">\r\n");
      out.write("            <div class=\"productCenterInfo\">\r\n");
      out.write("                <table class=\"table table-hover table-striped productTable\" ng-if=\"count>0\">\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th width=\"40%\" colspan=\"2\">商户</th>\r\n");
      out.write("                        <th width=\"10%\">全部商品</th>\r\n");
      out.write("                        <th width=\"10%\">未发布商品</th>\r\n");
      out.write("                        <!-- <th width=\"10%\">素材图片</th>\r\n");
      out.write("                        <th width=\"10%\">正式图库</th> -->\r\n");
      out.write("                        <!--<th width=\"10%\">运营人员</th>-->\r\n");
      out.write("                        <!-- <th width=\"10%\">操作</th> -->\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <!--未分配-->\r\n");
      out.write("                    <tr ng-repeat=\"orgManage in orgManageList\" ng-model=\"orgManage\">\r\n");
      out.write("                        <td class=\"orgManageProImgC\">\r\n");
      out.write("                           <img ng-if=\"orgManage.shopLogo!=''\" ng-click=\"showPostProductList(this,'1')\" ng-src=\"{{orgManage.shopLogo}}\" class=\"productImg\" title=\"\" alt=\"\" />\r\n");
      out.write("                           <img ng-if=\"orgManage.shopLogo==''\" ng-click=\"showPostProductList(this,'1')\" src=\"http://static.qineasy.com/base/images/img_default_company.png\" class=\"productImg\" title=\"\" alt=\"\" />\r\n");
      out.write("                        <td class=\"comProducInfo\">\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"productTitl\" ng-click=\"showPostProductList(this,'1')\">{{orgManage.shopName}}</a>\r\n");
      out.write("                            <!--<p class=\"am-ft-black\">店铺数：<a href=\"javascript:;\" ng-click=\"showStoreAmount(this)\">{{orgManage.shopNum}}个</a></p>-->\r\n");
      out.write("                            <p>联系电话：{{orgManage.shopTel}}</p>\r\n");
      out.write("                            <p>详细地址：{{orgManage.province}}{{orgManage.city}}{{orgManage.district}}{{orgManage.shopAddr}}</p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td><a href=\"javascript:;\" ng-click=\"showPostProductList(this,'1')\">{{orgManage.allPublishNum}}个</a></td>\r\n");
      out.write("                        <td><a href=\"javascript:;\"  ng-click=\"showPostProductList(this,'3')\">{{orgManage.unPublishNum}}个</a></td>\r\n");
      out.write("                        <!-- <td><a href=\"javascript:;\" ng-click=\"showProMateriaPic(this)\">素材图片</a></td>\r\n");
      out.write("                        <td><a href=\"javascript:;\" ng-click=\"showFormalPics(this)\">正式图库</a></td> -->\r\n");
      out.write("                        <!--<td ng-if=\"orgManage.userName==''\"><a href=\"javascript:;\" class=\"allotOprate\" ng-click=\"slecetUser(this)\">分配</a></td>\r\n");
      out.write("                        <td ng-if=\"orgManage.userName!=''\">{{orgManage.userName}}</td>-->\r\n");
      out.write("                        <!-- <td><a href=\"javascript:;\" class=\"am-ft-red deloperateList\">删除</a></td> -->\r\n");
      out.write("                    </tr>\r\n");
      out.write("                </table>\r\n");
      out.write("                 <!--分页 start-->\r\n");
      out.write("\t\t\t    <div class=\"pagelist priv-pagelist\">\r\n");
      out.write("\t\t\t    \t<div id=\"pagingMain\"></div>    \r\n");
      out.write("\t\t\t    </div>\r\n");
      out.write("\t\t\t    <!--分页 end-->\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <!-- /商品列表 -->\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- 分配运营人员弹窗  -->\r\n");
      out.write("<div class=\"am-dialog forwardMgt-Dialog fn-hide\" id=\"forwardMgt-Dialog\">\r\n");
      out.write("    <i class=\"fa fa-close closeDia\" id=\"closeDia\"></i>\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <div class=\"am-dialog-header\">\r\n");
      out.write("            <h3>选择运营人员</h3>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"note-Dialog\">请选择<strong>“{{selectShopName}}”</strong>的运营人员：</div>\r\n");
      out.write("        <div class=\"am-dialog-body\">\r\n");
      out.write("            <div class=\"table-responsive forwComMgt-table\">\r\n");
      out.write("                <table class=\"table table-striped addInvinfo\" style=\"max-height:300px;overflow-y:auto\">\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th scope=\"col\" width=\"50\">&nbsp;</th>\r\n");
      out.write("                        <th scope=\"col\">手机号</th>\r\n");
      out.write("                        <th scope=\"col\">昵称</th>\r\n");
      out.write("                        <th scope=\"col\">负责商户</th>\r\n");
      out.write("                        <th scope=\"col\">已完成商品</th>\r\n");
      out.write("                        <th scope=\"col\">未完成商品</th>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr ng-repeat=\"user in userList\" ng-click=\"clickUser(this)\">\r\n");
      out.write("                        <td><i class=\"fa fa-line-check-white\"></i></td>\r\n");
      out.write("                        <td>{{user.telphone}}</td>\r\n");
      out.write("                        <td>{{user.trueName}}</td>\r\n");
      out.write("                        <td>{{user.orgNum}}个</td>\r\n");
      out.write("                        <td>{{user.doneProNum}}个</td>\r\n");
      out.write("                        <td>{{user.unDoProNum}}个</td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                </table>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"am-dialog-footer\">\r\n");
      out.write("            <a href=\"javascript:;\" class=\"btn btn-default closedialog\">取消</a>\r\n");
      out.write("            <a href=\"javascript:;\" class=\"btn btn-primary mgl20\" ng-click=\"doOrgManage()\">确定</a>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<!-- /分配运营人员弹窗  -->\r\n");
      out.write("\r\n");
      out.write("<!--删除弹窗-->\r\n");
      out.write("<div class=\"am-dialog DelDialog fn-hide\">\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <div class=\"am-dialog-body\">\r\n");
      out.write("            <h2 class=\"am-dialog-brief\">是否确定删除</h2>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("            <button type=\"button\" class=\"am-flexbox-item btn am-button\" am-bg=\"blue\">确认</button>\r\n");
      out.write("            <button type=\"button\" class=\"am-flexbox-item btn am-button closedialog\" am-bg=\"white\">取消</button>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<!--/删除弹窗-->\r\n");
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