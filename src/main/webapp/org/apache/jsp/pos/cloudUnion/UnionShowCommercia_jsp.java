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

public final class UnionShowCommercia_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper\">\r\n");
      out.write("    <div class=\"col-md-11 pageTitl mgb0\">\r\n");
      out.write("        <h2 class=\"am-ft-16 fn-left\">联盟管理</h2>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"fn-clear\"></div>\r\n");
      out.write("    <!-- search -->\r\n");
      out.write("    <div class=\"listSearch\">\r\n");
      out.write("        <div class=\"row\">\r\n");
      out.write("            <div class=\"col-md-12\">\r\n");
      out.write("                <div class=\"col-md-4 fn-right unionTop\">\r\n");
      out.write("                    <p><a href=\"javascript:;\" ng-click=\"createNewUnion()\">创建联盟</a>或<a href=\"javascript:;\" ng-click=\"JoinNewUnion()\">加入联盟</a></p>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"fn-clear\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <!-- /search -->\r\n");
      out.write("\r\n");
      out.write("    <!-- Main content -->\r\n");
      out.write("    <div class=\"ManColTable col-lg-12 union-tablebox\">\r\n");
      out.write("        <form>\r\n");
      out.write("            <div class=\"table-responsive PrivTable\">\r\n");
      out.write("                <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th scope=\"col\">类型</th>\r\n");
      out.write("                        <th scope=\"col\">联盟名称</th>\r\n");
      out.write("                        <th scope=\"col\">品牌</th>\r\n");
      out.write("                        <th scope=\"col\">创建商户</th>\r\n");
      out.write("                        <th scope=\"col\">已加入成员</th>\r\n");
      out.write("                        <th scope=\"col\">未加入成员</th>\r\n");
      out.write("                        <th scope=\"col\">状态</th>\r\n");
      out.write("                        <th scope=\"col\">操作</th>\r\n");
      out.write("                        <th scope=\"col\">设置</th>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr ng-repeat=\"list in unionList\" ng-class=\"{'':list.cloudStatus==0,'tr-use':list.cloudStatus==1,'tr-dissolve':list.cloudStatus==2}\">\r\n");
      out.write("                        <td ng-if=\"orgid!=list.orgId&&list.cloudStatus!=2\">已加入</td>\r\n");
      out.write("                        <td ng-if=\"orgid==list.orgId&&list.cloudStatus!=2\">已创建</td>\r\n");
      out.write("                        <td ng-if=\"orgid==list.orgId&&list.cloudStatus==2\">已解散</td>\r\n");
      out.write("                        <td ng-value=\"{{list.cloudId}}\">{{list.cloudName}}</td>\r\n");
      out.write("                        <td ng-value=\"{{list.brandId}}\">{{list.brandName}}</td>\r\n");
      out.write("                        <td ng-value=\"{{list.orgId}}\" ng-if=\"orgid==list.orgId&&list.cloudStatus!=2\">\r\n");
      out.write("                            <p>{{list.shopName}}</p>\r\n");
      out.write("                            <p>创建时间：{{list.createDate}}</p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-value=\"{{list.orgId}}\" ng-if=\"orgid!=list.orgId&&list.cloudStatus!=2\">\r\n");
      out.write("                            <p>{{list.shopName}}</p>\r\n");
      out.write("                            <p>加入时间：{{list.jionDate}}</p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-value=\"{{list.orgId}}\" ng-if=\"orgid==list.orgId&&list.cloudStatus==2\">\r\n");
      out.write("                            <p>{{list.shopName}}</p>\r\n");
      out.write("                            <p>{{list.createDate}}</p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"list.cloudStatus!=2\">\r\n");
      out.write("                            <a href=\"javascript:;\" ng-click=\"getJoinedmembers(list)\">{{list.addedCount}}个</a>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"list.cloudStatus==2\">&nbsp;</td>\r\n");
      out.write("                        <td ng-if=\"list.cloudStatus!=2\">\r\n");
      out.write("                            <a href=\"javascript:;\" ng-click=\"getUnjoinedmembers(list.cloudId,list.cloudName,list.brandName,list.brandId,list.shopName,list.createDate)\">{{list.notAddedCount}}个</a>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"list.cloudStatus==2\">&nbsp;</td>\r\n");
      out.write("                        <td ng-if=\"list.cloudStatus==0\">已启用</td>\r\n");
      out.write("                        <td ng-if=\"list.cloudStatus==1\" class=\"am-ft-red\">已停用</td>\r\n");
      out.write("                        <td ng-if=\"list.cloudStatus==2\">已解散</td>\r\n");
      out.write("                        <td ng-if=\"orgid==list.orgId&&list.cloudStatus==0\">\r\n");
      out.write("                            <p><a href=\"javascript:;\" class=\"am-ft-red\" ng-click=\"stopUse(list.cloudId)\">停用</a></p>\r\n");
      out.write("                            <p>\r\n");
      out.write("                                <a href=\"javascript:;\" class=\"exitUnionBtn\" ng-click=\"dismissUnion(list.cloudId,list.cloudName)\">解散联盟</a>\r\n");
      out.write("                            </p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"orgid!=list.orgId&&list.cloudStatus!=2\">\r\n");
      out.write("                            <p><a href=\"javascript:;\" class=\"exitUnionBtn\" ng-click=\"quitUnion(list.cloudId,list.cloudName,list.orgId,list.brandId)\">退出联盟</a></p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"orgid==list.orgId&&list.cloudStatus==1\">\r\n");
      out.write("                            <p><a href=\"javascript:;\" ng-click=\"beginUse(list.cloudId)\">启用</a></p>\r\n");
      out.write("                            <p><a href=\"javascript:;\" class=\"exitUnionBtn\" ng-click=\"quitUnion(list.cloudId,list.cloudName,list.orgId)\">解散联盟</a></p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"orgid==list.orgId&&list.cloudStatus==2\">\r\n");
      out.write("                            &nbsp;\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"orgid==list.orgId&&list.cloudStatus!=2\">\r\n");
      out.write("                            <p><a href=\"javascript:;\" ng-click=\"proManagerSet(this.list)\">商品管理</a></p>\r\n");
      out.write("                            <p><a href=\"javascript:;\" ng-click=\"rulesSet(list.cloudId,list.orgId)\">派单配置</a></p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"orgid!=list.orgId&&list.cloudStatus!=2\">\r\n");
      out.write("\r\n");
      out.write("                            <p><a href=\"javascript:;\" ng-click=\"rulesSet(list.cloudId,list.orgId)\">查看派单配置</a></p>\r\n");
      out.write("                        </td>\r\n");
      out.write("                        <td ng-if=\"orgid==list.orgId&&list.cloudStatus==2\">&nbsp;</td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                </table>\r\n");
      out.write("            </div>\r\n");
      out.write("        </form>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 退出、解散联盟提示弹窗 -->\r\n");
      out.write("<div class=\"am-dialog addColordialog exitUnion-dialog\" id=\"dismissUnion-dialog\">\r\n");
      out.write("    <i ng-click=\"closedialog()\" class=\"fa fa-close closeDia\"></i>\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <div class=\"am-dialog-header\">\r\n");
      out.write("            <h3 class=\"am-ft-left\">解散联盟</h3>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"am-dialog-body\">\r\n");
      out.write("            <h5 class=\"am-dialog-brief mgb20\" id=\"exitTitl\">您正在解散‘柒牌云仓联盟’！</h5>\r\n");
      out.write("            <h5 class=\"am-dialog-brief\" id=\"exitSelectrs\">请选择解散原因：</h5>\r\n");
      out.write("            <form id=\"reasonVal\">\r\n");
      out.write("                <div class=\"am-dialog-brief\">\r\n");
      out.write("                    <div class=\"col-sm-4 checkbox\">\r\n");
      out.write("                        <label>\r\n");
      out.write("                            <input type=\"checkbox\" name=\"causeContent\" value=\"接单率太低\">\r\n");
      out.write("                            接单率太低\r\n");
      out.write("                        </label>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"col-sm-4 checkbox\">\r\n");
      out.write("                        <label>\r\n");
      out.write("                            <input type=\"checkbox\" name=\"causeContent\" value=\"结算价太低\">\r\n");
      out.write("                            结算价太低\r\n");
      out.write("                        </label>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"col-sm-4 checkbox\">\r\n");
      out.write("                        <label>\r\n");
      out.write("                            <input type=\"checkbox\" name=\"causeContent\" value=\"云仓商品太少\">\r\n");
      out.write("                            云仓商品太少\r\n");
      out.write("                        </label>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"col-sm-4 checkbox\">\r\n");
      out.write("                        <label>\r\n");
      out.write("                            <input type=\"checkbox\" name=\"causeContent\" value=\"门店位置较偏僻\">\r\n");
      out.write("                            门店位置较偏僻\r\n");
      out.write("                        </label>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"col-sm-4 checkbox\">\r\n");
      out.write("                        <label>\r\n");
      out.write("                            <input type=\"checkbox\" name=\"causeContent\" value=\"云仓库存太少\">\r\n");
      out.write("                            云仓库存太少\r\n");
      out.write("                        </label>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"fn-clear\"></div>\r\n");
      out.write("\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"am-dialog-brief other-reason\">\r\n");
      out.write("                    <label class=\"fn-left\">其他原因:</label>\r\n");
      out.write("                    <input type=\"text\" class=\"fn-left\" name=\"causeContent\" placeholder=\"请输入...\">\r\n");
      out.write("                    <div class=\"fn-clear\"></div>\r\n");
      out.write("                </div>\r\n");
      out.write("                <p class=\"am-ft-red qnote\">解散联盟后会清除此联盟所有记录，请谨慎操作！</p>\r\n");
      out.write("            </form>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"am-dialog-footer\">\r\n");
      out.write("        <a href=\"javascript:;\" class=\"btn btn-primary confmBtn\" id=\"\">确定</a>\r\n");
      out.write("        <a href=\"javascript:;\" class=\"btn btn-default close-log mgl10\" ng-click=\"closedialog()\">取消</a>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<!-- /退出、解散联盟提示弹窗 -->\r\n");
      out.write("\r\n");
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
