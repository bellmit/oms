/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-29 03:10:52 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.ss.inventory;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class inventoryaddOrder_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--遮罩 start-->\r\n");
      out.write("<!--  -->\r\n");
      out.write("<!--遮罩 end-->\r\n");
      out.write("<!--------------- Content start ----------------->\r\n");
      out.write("<div class=\"content-wrapper\" id=\"inventoryContent\" style=\"display: none\">\r\n");
      out.write("    <div class=\"col-md-11 pageTitl\">\r\n");
      out.write("        <h2 class=\"am-ft-16 fn-left\">添加盘点单</h2>\r\n");
      out.write("    <a href=\"javascript:;\" class=\"line-btn fn-right\" ng-click=\"callback()\">返回</a>\r\n");
      out.write("    </div>\r\n");
      out.write("    <!-- search -->\r\n");
      out.write("    <div class=\"listSearch OderlistSearch\">\r\n");
      out.write("        <div class=\"row\">\r\n");
      out.write("            <div class=\"col-md-12\">\r\n");
      out.write("                <p class=\"col-sm-12 control-label mgb10 mgl20\">盘点日期：<span> {{createDate | date:'yyyy-MM-dd'}}</span></p>\r\n");
      out.write("                <p class=\"col-sm-12 control-label mgb10 mgl20\">盘点单号：<span> {{inventoryId}}</span></p>\r\n");
      out.write("                <p class=\"col-sm-12 control-label mgl20\">盘点人：<span> {{userName}}</span></p>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <!-- /search -->\r\n");
      out.write("\r\n");
      out.write("    <!-- Main content -->\r\n");
      out.write("    <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("        <form>\r\n");
      out.write("            <div class=\"PrivTable\">\r\n");
      out.write("                <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <th scope=\"col\">款号</th>\r\n");
      out.write("                        <th scope=\"col\">款名</th>\r\n");
      out.write("                        <th scope=\"col\">品类</th>\r\n");
      out.write("                        <th scope=\"col\">品牌</th>\r\n");
      out.write("                        <th scope=\"col\">年份</th>\r\n");
      out.write("                        <th scope=\"col\">季节</th>\r\n");
      out.write("                        <th scope=\"col\">库存</th>\r\n");
      out.write("                        <th scope=\"col\">盘点数</th>\r\n");
      out.write("                        <th scope=\"col\">差异</th>\r\n");
      out.write("                        <th scope=\"col\">操作</th>\r\n");
      out.write("                    </tr>\r\n");
      out.write("                    <tr ng-repeat=\"inventoryDetail in inventoryDetailSums\">\r\n");
      out.write("                    \t<td>{{inventoryDetail.proModelid}}</td>\r\n");
      out.write("                        <td>{{inventoryDetail.proName}}</td>\r\n");
      out.write("                        <td>{{inventoryDetail.sortName}}</td>\r\n");
      out.write("                        <td>{{inventoryDetail.brandName}}</td>\r\n");
      out.write("                        <td>{{inventoryDetail.proYear}}</td>\r\n");
      out.write("                        <td>{{inventoryDetail.proSeason}}</td>\r\n");
      out.write("                        <td>{{inventoryDetail.stkNum}}</td>\r\n");
      out.write("                        <td ng-if=\"inventoryDetail.invtNum ==''\">{{inventoryDetail.stkNum}}</td>\n");
      out.write("                        <td ng-if=\"inventoryDetail.invtNum !=''\">{{inventoryDetail.invtNum}}</td>\r\n");
      out.write("                        <td><span class=\"am-ft-red\">{{inventoryDetail.diffNum}}</span></td>\r\n");
      out.write("                        <td>\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"w50 line-btn fn-left adjBtn\" am-bg=\"blue\" data=\"{{inventoryDetail.proModelid}}\" ng-click=\"inventoryDetailEdit($event,'2')\">编辑</a>\r\n");
      out.write("                            <button type=\"button\" class=\"w50 fn-left line-btn-delete\" am-bg=\"white\" id=\"{{inventoryDetail.proModelid}}\" onclick=\"dele(id)\">删除</button>\r\n");
      out.write("                        </td>\r\n");
      out.write("                    </tr>                    \r\n");
      out.write("                    <tr>\r\n");
      out.write("                        <td colspan=\"10\">\r\n");
      out.write("                            <a href=\"javascript:;\" class=\"fn-left addOderBtn\" ng-click=\"addProduct('2')\">+&nbsp;添加盘点商品</a>\r\n");
      out.write("                        </td>\r\n");
      out.write("                    </tr>\r\n");
      out.write("\r\n");
      out.write("                </table>\r\n");
      out.write("\r\n");
      out.write("                <div class=\"mgb15 fn-left\">\r\n");
      out.write("                    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveInvetory('add')\">保存盘点</button>\r\n");
      out.write("                    <button type=\"button\" class=\"btn btn-primary mgl10 endInvent\" ng-click=\"endInventory2()\">结束盘点并生成调整单</button>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </form>\r\n");
      out.write("\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 添加盘点单--时间 -->\r\n");
      out.write("<div class=\"am-dialog addColordialog addInv-datedialog addColordialog2\" id=\"timeset\">\r\n");
      out.write("    <!--<i class=\"fa fa-close closeDia\" id=\"closeDia\" ng-click=\"closeDialog()\"></i>-->\n");
      out.write("    <i class=\"fa fa-close fn-right\"  style=\"padding: 15px;font-size: 14px;\" ng-click=\"closeDialog()\"></i>\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <div class=\"am-dialog-header\">\r\n");
      out.write("            <h3 class=\"am-ft-center\">添加盘点单</h3>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"am-input needValInfo\">\r\n");
      out.write("            <label class=\"fn-left\" style=\"width:32%;\">设置盘点时间：</label>\r\n");
      out.write("            <!--<input class=\"fn-left col-md-6 am-ft-center laydate-icon\" type=\"text\" onclick=\"laydate({max: laydate.now()})\" name=\"addCreateDate\" value=\"\" ng-model=\"createDate\" readonly=\"readonly\" placeholder=\"点击设置时间\" /><br/>-->\n");
      out.write("            <input class=\"fn-left col-md-6 am-ft-center laydate-icon\" type=\"text\" onclick=\"laydate({max: laydate.now()})\" name=\"addCreateDate\" value=\"\"  readonly=\"readonly\" placeholder=\"点击设置时间\" /><br/>\r\n");
      out.write("            <p class=\"am-ft-red mgt10\">提示：系统将根据盘点时间计算库存。</p>\r\n");
      out.write("            <p class=\"am-ft-red\">确认盘点时间后将不可更改，请慎重！</p>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("            <button type=\"button\" class=\"am-flexbox-item btn am-button alterOv\" am-bg=\"blue\" ng-click=\"setDate()\">确认</button>\r\n");
      out.write("            <button type=\"button\" class=\"am-flexbox-item btn am-button closeDialog\" am-bg=\"white\" ng-click=\"closeDialog()\">取消</button>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<!-- /添加盘点单--时间 -->\r\n");
      out.write("<!-- 添加盘点商品弹窗 -->\r\n");
      out.write("<div class=\"maskBga\"  ng-show=\"showdialoga=='show'\"></div>\r\n");
      out.write("<div class=\"am-dialog addColordialog addInvDialog InvDialog-max addAddColordialog2\" id=\"addpreductdialogA\" style=\"display: block;height:600px;width:550px\" ng-show=\"showdialoga=='show'\">\r\n");
      out.write("    <form id=\"addProducta\">\r\n");
      out.write("        <img src=\"../static/base/images/closelogo.png\" alt=\"\" class=\"closeImg fn-right\" style=\"padding: 20px;\" ng-click=\"closeInventoryProducta()\"/>\r\n");
      out.write("        <!--<i class=\"fa fa-close closeDia\"></i>-->\r\n");
      out.write("        <div class=\"am-dialog-wrap\">\r\n");
      out.write("            <div class=\"am-dialog-header\">\r\n");
      out.write("                <h3 class=\"am-ft-center\">添加盘点商品</h3>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"am-input\">\r\n");
      out.write("                <label class=\"fn-left\">大品类：</label>\r\n");
      out.write("                <select class=\"col-md-2 mgr5\" name=\"proGrandparentSortId\" ng-change=\"sortIdchange()\" ng-model=\"selected\" >\r\n");
      out.write("                \t<option value=\"\" selected=\"selected\"></option>\r\n");
      out.write("                \t<option ng-repeat=\"i in items\" value=\"{{i.sortId}}\">{{i.sortName}}</option>\r\n");
      out.write("                </select>\r\n");
      out.write("                <label class=\"fn-left mgl10\">中品类：</label>\r\n");
      out.write("                <select class=\"col-md-2 mgr5\" name=\"proParentSortId\" ng-change=\"sortIdCchange()\" ng-model=\"selectedc\" >\r\n");
      out.write("                <option value=\"\" selected=\"selected\"></option>\r\n");
      out.write("                <option ng-repeat=\"i in itemsc\" value=\"{{i.sortId}}\">{{i.sortName}}</option>                   \r\n");
      out.write("                </select>\r\n");
      out.write("                <label class=\"fn-left mgl10\">小品类：</label>\r\n");
      out.write("                <select class=\"col-md-2 mgr5\" name=\"proSortId\"  ng-model=\"selectedg\" >\r\n");
      out.write("                <option value=\"\" selected=\"selected\"></option>\r\n");
      out.write("                <option ng-repeat=\"i in itemsg\" value=\"{{i.sortId}}\">{{i.sortName}}</option>\r\n");
      out.write("                </select>\r\n");
      out.write("                <div class=\"fn-clear\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"am-input\">\r\n");
      out.write("                <label class=\"fn-left\">品牌：</label>\r\n");
      out.write("                <select class=\"col-md-2 mgr5\" name=\"brandId\" ng-model=\"brand\" >\r\n");
      out.write("                <option value=\"\" selected=\"selected\"></option>\r\n");
      out.write("                <option ng-repeat=\"b in brands\" value=\"{{b.brandId}}\">{{b.brandName}}</option>                   \r\n");
      out.write("                </select>\r\n");
      out.write("\r\n");
      out.write("                <label class=\"fn-left mgl10\">年份：</label>\r\n");
      out.write("                <!-- <input class=\"fn-left laydate-icon mgt5\" type=\"text\" onclick=\"laydate()\" name=\"proYear\" readonly=\"readonly\" placeholder=\"商品年份\" /> -->\r\n");
      out.write("                \t <select class=\"col-md-2 mgr5\" name=\"proYear\" ng-model=\"year\" >\r\n");
      out.write("\t\t                <option value=\"\" selected=\"selected\"></option>\r\n");
      out.write("\t\t                <option ng-repeat=\"year in years\" value=\"{{year.proYear}}\">{{year.proYear}}</option>                   \r\n");
      out.write("\t\t             </select>\r\n");
      out.write("                <label class=\"fn-left mgl10\">季节：</label>\r\n");
      out.write("                <select class=\"col-lg-2 mgr5\" name=\"proSeason\">\r\n");
      out.write("                \t<option value=\"\" selected=\"selected\"></option>\r\n");
      out.write("                    <option value=\"春\">春</option>\r\n");
      out.write("                    <option value=\"夏\">夏</option>\r\n");
      out.write("                    <option value=\"秋\">秋</option>\r\n");
      out.write("                    <option value=\"冬\">冬</option>\r\n");
      out.write("                </select>\r\n");
      out.write("                \r\n");
      out.write("                <div class=\"fn-clear\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"am-input\">\r\n");
      out.write("                <label class=\"fn-left\">款号：</label>\r\n");
      out.write("                <input class=\"fn-left col-lg-2\" type=\"text\" name=\"proModelnum\" placeholder=\"请输入款号\" />\r\n");
      out.write("                <input type=\"hidden\" ng-model=\"proModelnum1\" name=\"proModelnum1\" value=\"{{proModelnum1}}\" />\r\n");
      out.write("\t            <button class=\"btn btn-primary serBtn\" ng-click=\"getInventoryProduct('')\">查询</button>\r\n");
      out.write("\t            <div class=\"fn-clear\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        </form>\r\n");
      out.write("        <!--查询结果-->\r\n");
      out.write("        <section class=\"container-fluid\">\r\n");
      out.write("            <div class=\"row\">\r\n");
      out.write("            \t<form id=\"addInventoryProduct\">\r\n");
      out.write("            \t\t<input type=\"hidden\" name=\"inventoryId\" value=\"{{inventoryId}}\" />\r\n");
      out.write("            \t\t<input type=\"hidden\" name=\"createDate\" value=\"{{createDate}}\" />  \r\n");
      out.write("                <div class=\"searResultTab\" style=\"max-height:280px;\">\r\n");
      out.write("                    <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("                        <tr>\r\n");
      out.write("                            <th class=\"col-lg-2\"><input ng-click=\"chooseUnJoinedMember(this.proModelnum,products,'all')\" ng-model=\"unJoinedgetchecked\" class=\"fn-left\" type=\"checkbox\" name=\"selectAll\" />全选</th>\r\n");
      out.write("                            <th class=\"col-lg-2\">款号</th>\r\n");
      out.write("                            <th class=\"col-lg-3\">款名</th>\r\n");
      out.write("                            <th class=\"col-lg-1\">品类</th>\r\n");
      out.write("                            <th class=\"col-lg-2\">品牌</th>\r\n");
      out.write("                            <th class=\"col-lg-1\">年份</th>\r\n");
      out.write("                            <th class=\"col-lg-1\">季节</th>\r\n");
      out.write("                        </tr>\r\n");
      out.write("                        <tr ng-repeat=\"product in products\">\r\n");
      out.write("                            <td>\r\n");
      out.write("                            \t<input ng-click=\"chooseUnJoinedMember(this.product.proModelnum,products,'one')\" ng-checked=\"product.allunJoinedgetchecked\" type=\"checkbox\"  name=\"proModelnum\" id=\"{{$index + 1}}\" value=\"{{product.proModelnum}}\" />                          \t                 \t\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td>\r\n");
      out.write("                                <p>{{product.proModelnum}}</p>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td>\r\n");
      out.write("                                <p>{{product.proName}}</p>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td>\r\n");
      out.write("                                <p>{{product.sortName}}</p>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td>\r\n");
      out.write("                                <p>{{product.brandName}}</p>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td>\r\n");
      out.write("                                <p>{{product.proYear}}</p>\r\n");
      out.write("                            </td>\r\n");
      out.write("                            <td>\r\n");
      out.write("                                <p>{{product.proSeason}}</p>\r\n");
      out.write("                            </td>\r\n");
      out.write("                        </tr>                       \r\n");
      out.write("                    </table>\r\n");
      out.write("                \t<!--分页 start-->\r\n");
      out.write("\t\t\t\t    <div class=\"pagelist priv-pagelist\" style=\"\">\r\n");
      out.write("\t\t\t\t    \t<div id=\"pagingB\"></div>    \r\n");
      out.write("\t\t\t\t    </div>\r\n");
      out.write("\t\t\t\t    <!--分页 end-->                    \r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"fn-clear\" style=\"padding-left:15px;position:absolute;bottom:10px;\">\r\n");
      out.write("                \t<a href=\"javascript:;\" class=\"btn btn-primary saveButton\" ng-click=\"addInventoryProduct('2')\">添加盘点商品</a>\r\n");
      out.write("                \t<a href=\"javascript:;\" class=\"fn-left btn btn-default mgl10\" ng-click=\"closeInventoryProducta()\">取消</a>\r\n");
      out.write("                </div>\r\n");
      out.write("                </form>\r\n");
      out.write("            </div>\r\n");
      out.write("        </section>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("<!-- /添加盘点商品弹窗 -->\r\n");
      out.write("<!-- 编辑弹窗 -->\r\n");
      out.write("<div class=\"am-dialog fn-hide addEditInvDialog\" id=\"dialogB\" style=\"min-width:980px;\">\r\n");
      out.write("    <img src=\"../static/base/images/closelogo.png\" alt=\"\"   ng-click=\"closeEdit('2')\" class=\"closeImg fn-right\" style=\"padding:0px 10px;position: absolute;z-index:22;right: 0px;\">\r\n");
      out.write("    <!--<i class=\"fa fa-close\" ng-click=\"closeEdit('2')\"></i>-->\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <ul class=\"media-list\">\r\n");
      out.write("            <li class=\"media\">\r\n");
      out.write("                <div class=\"media-left\">\r\n");
      out.write("                    <img class=\"media-object\" ng-src=\"{{productInfo.proUrl}}\" width=\"80\" alt=\"商品图片\">\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"media-body\">\r\n");
      out.write("                    <div class=\"editInvTit\">\r\n");
      out.write("                        <p class=\"col-sm-12 media-heading\">款名:<span>{{productInfo.proName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-12 media-heading\">款号:<span>{{productInfo.proModelnum}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">品类:<span>{{productInfo.sortName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">品牌:<span>{{productInfo.brandName}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">年份:<span>{{productInfo.proYear}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">季节:<span>{{productInfo.proSeason}}</span></p>\r\n");
      out.write("                        <p class=\"col-sm-3 media-heading\">吊牌价:<span>{{productInfo.proPrice}}</span></p>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </li>\r\n");
      out.write("        </ul>\r\n");
      out.write("        <div class=\"Man\tColTable col-lg-12\">\r\n");
      out.write("            <form id=\"addEditInventoryDetForm\">\r\n");
      out.write("            \t<input type=\"hidden\" name=\"inventoryId\" ng-model=\"inventoryId\" value=\"{{inventoryId}}\" />\r\n");
      out.write("            \t<input type=\"hidden\" name=\"proModelid\" ng-model=\"proModelid\" value=\"{{proModelid}}\" />        \t\r\n");
      out.write("                <div class=\"PrivTable\" style=\"max-height:300px;overflow:auto;\">\r\n");
      out.write("                    <table class=\"table table-striped table-bordered addInvinfo\">\r\n");
      out.write("                        <tr>\r\n");
      out.write("                            <th width=\"80\" scope=\"col\" id=\"size\">颜色/尺码</th>\r\n");
      out.write("                            <th scope=\"col\" ng-repeat=\"size in sizes\">{{size}}</th>                            \r\n");
      out.write("                        </tr>                        \r\n");
      out.write("                        <tr id=\"addSumRow\">\r\n");
      out.write("                            <th scope=\"row\">合计</th>\r\n");
      out.write("                            <td colspan=\"{{sizes.length}}\" style=\"text-align: center;\">{{sumInvtNum}}/{{sumStkNum}}</td>\r\n");
      out.write("                        </tr>\r\n");
      out.write("                    </table>\r\n");
      out.write("\r\n");
      out.write("                </div>\r\n");
      out.write("            </form>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("        <button type=\"button\" class=\"am-flexbox-item btn am-button\" am-bg=\"blue\" ng-click=\"editInventoryDetail('2')\">确认</button>\r\n");
      out.write("        <button type=\"button\" class=\"am-flexbox-item btn am-button\" am-bg=\"white\" ng-click=\"closeEdit('2')\">取消</button>\r\n");
      out.write("        <div class=\"fn-clear\"></div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("<!-- /编辑弹窗 -->\r\n");
      out.write("<!-- 结束盘点并生成调整单弹窗-->\r\n");
      out.write("<div class=\"am-dialog createInvDialog InvDialog-max fn-hide createInvDialog1\" id=\"inventAddOrder2\">\r\n");
      out.write("    <!--<i class=\"fa fa-close\" id=\"closeinventAddOrder2\"></i>-->\r\n");
      out.write("    <img src=\"../static/base/images/closelogo.png\" alt=\"\"  id=\"closeinventAddOrder2\" class=\"closeImg fn-right\" style=\"padding:0px 10px;position: absolute;right: 0px;\">\r\n");
      out.write("    <div class=\"am-dialog-wrap\">\r\n");
      out.write("        <div class=\"ManColTable col-lg-12\">\r\n");
      out.write("            <div class=\"row\">\r\n");
      out.write("                <div class=\"col-md-12 mgt10\">\r\n");
      out.write("                    <label class=\"col-sm-5 control-label\">盘点时间：<span> {{createDate | date:'yyyy-MM-dd'}}</span></label>\r\n");
      out.write("                    <label class=\"col-sm-5 control-label\">盘点单号：<span> {{inventoryId}}</span></label>\r\n");
      out.write("                    <label class=\"col-sm-5 control-label\">盘点人：<span> {{userName}}</span></label>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <form id=\"updateInventoryForm\">\r\n");
      out.write("            \t<input type=\"hidden\" name=\"inventoryId\" ng-model=\"inventoryId\" value=\"{{inventoryId}}\" />\r\n");
      out.write("            \t<input type=\"hidden\" name=\"stkNum\" id=\"sumStkNums\" />\r\n");
      out.write("            \t<input type=\"hidden\" name=\"invtNum\" id=\"sumInvtNums\" />\r\n");
      out.write("            \t<input type=\"hidden\" name=\"diffNum\" id=\"sumDiffNums\" />\r\n");
      out.write("                <div class=\"PrivTable\" style=\"max-height:300px;overflow:auto;\">\r\n");
      out.write("                    <table class=\"table table-hover table-striped table-bordered\">\r\n");
      out.write("                        <tr>\r\n");
      out.write("                            <th scope=\"col\">款号</th>\r\n");
      out.write("                            <th scope=\"col\">款名</th>\r\n");
      out.write("                            <th scope=\"col\">颜色</th>\r\n");
      out.write("                            <th scope=\"col\">尺码</th>\r\n");
      out.write("                            <th scope=\"col\">库存</th>\r\n");
      out.write("                            <th scope=\"col\">盘点数</th>\r\n");
      out.write("                            <th scope=\"col\">差异</th>\r\n");
      out.write("                        </tr>\r\n");
      out.write("                        <tr ng-repeat=\"inventoryDetail in inventoryDetails\">\r\n");
      out.write("\t                    \t<td>{{inventoryDetail.proModelid}}</td>\r\n");
      out.write("\t                        <td>{{inventoryDetail.proName}}</td>\r\n");
      out.write("\t                        <td>{{inventoryDetail.proColorName}}</td>\r\n");
      out.write("\t                        <td>{{inventoryDetail.proSizeName}}</td>\r\n");
      out.write("\t                        <td>{{inventoryDetail.stkNum}}</td>\r\n");
      out.write("\t                        <td><i class=\"am-ft-orange\">{{inventoryDetail.invtNum}}</i></td>\r\n");
      out.write("\t                        <td><i class=\"am-ft-red\">{{inventoryDetail.diffNum}}</i></td>\r\n");
      out.write("                    \t</tr>\r\n");
      out.write("                    </table>\r\n");
      out.write("\r\n");
      out.write("                </div>\r\n");
      out.write("            </form>\r\n");
      out.write("            <a href=\"javascript:void(0);\" class=\"btn btn-primary mgb15\" ng-click=\"editProductWareh2()\">调整库存</a>\r\n");
      out.write("            <a href=\"javascript:void(0);\" class=\"btn btn-default mgl10 mgb15\" onclick=\"closeEditWareh()\">取消</a>\r\n");
      out.write("            <div class=\"fn-clear\"></div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div >\r\n");
      out.write("\r\n");
      out.write("<!-- /结束盘点并生成调整单弹窗-->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!--弹窗 start-->\r\n");
      out.write("<div class=\"am-dialog EditDialog fn-hide\">\r\n");
      out.write("    <form id=\"delInventoryDetForm\">\r\n");
      out.write("        <div class=\"am-dialog-wrap\">\r\n");
      out.write("            <div class=\"am-dialog-header\">\r\n");
      out.write("                <h3 class=\"am-ft-center\">确定删除？</h3>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"dialogBtn am-flexbox\">\r\n");
      out.write("            \t<input type=\"hidden\" name=\"inventoryId\" value=\"{{inventoryId}}\" />\r\n");
      out.write("            \t<input type=\"hidden\" name=\"proModelid\" id=\"proModelid\" />\r\n");
      out.write("                <button type=\"button\" class=\"am-flexbox-item btn am-button SavEdit deletGroup\" am-bg=\"blue\" ng-click=\"delInventoryDetail()\">确认</button>\r\n");
      out.write("                <button type=\"button\" class=\"am-flexbox-item btn am-button\" onclick=\"Dialhide()\" am-bg=\"white\">取消</button>\r\n");
      out.write("                <div class=\"fn-clear\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </form>\r\n");
      out.write("</div>\r\n");
      out.write("<!--弹窗 end-->\r\n");
      out.write("\r\n");
      out.write("<script>\r\n");
      out.write("   /*  $('.addInv-datedialog,.maskBg').show(); */\r\n");
      out.write("    //弹窗居中\r\n");
      out.write("//  $('.EditDialog').center();\r\n");
      out.write("//  $('.addInvDialog').center();\r\n");
      out.write("//  $('.addEditInvDialog').center();\r\n");
      out.write("//  $('.addInv-datedialog').center();\r\n");
      out.write("//  $('.createInvDialog').center();\r\n");
      out.write("    //\t添加盘点商品弹窗居中\r\n");
      out.write("//\t$(\"addpreductdialogA\").centera();\r\n");
      out.write("//class=\"am-dialog addColordialog addInvDialog InvDialog-max addAddColordialog2\"\r\n");
      out.write("/*     $(function(){\r\n");
      out.write("        //编辑数量\r\n");
      out.write("         $('.adjBtn').click(function(){\r\n");
      out.write("            $('.editInvDialog,.maskBg').show();\r\n");
      out.write("        }); \r\n");
      out.write("\r\n");
      out.write("        //关闭弹窗\r\n");
      out.write("         $('.closeDia').click(function(){\r\n");
      out.write("            $('.editInvDialog,.maskBg').hide();\r\n");
      out.write("            $('.addInv-datedialog,.maskBg').hide();\r\n");
      out.write("            $('.addColordialog,.maskBg').hide();\r\n");
      out.write("            $('.createInvDialog,.maskBg').hide(); \r\n");
      out.write("        }); \r\n");
      out.write("        \r\n");
      out.write("        $('#closeDia').click(function(){\r\n");
      out.write("        \twindow.location.href='#/inventory';\r\n");
      out.write("        });        \r\n");
      out.write("    }) */\r\n");
      out.write("    \r\n");
      out.write("/*     function closeDialog(){\r\n");
      out.write("    \twindow.location.href='#/inventory';\r\n");
      out.write("    } */\r\n");
      out.write("    \r\n");
      out.write("//  function closeInventoryProduct(){\r\n");
      out.write("//  \t$('.addColordialog,.maskBg').hide();\r\n");
      out.write("//  }\r\n");
      out.write("    \r\n");
      out.write("    function closeEditWareh(){\r\n");
      out.write("    \t $('#inventAddOrder2,.maskBg').hide();\r\n");
      out.write("    } \r\n");
      out.write("   $(\"#closeinventAddOrder2\").click(function(){\r\n");
      out.write("    \t$(\"#inventAddOrder2,.maskBg\").hide();\r\n");
      out.write("    })\r\n");
      out.write("    function dele(id){\r\n");
      out.write("    \t$(\"#proModelid\").val(id);\r\n");
      out.write("    \t$('#EditDialog,.maskBg').show();\r\n");
      out.write("    }\r\n");
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
