/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-02-27 05:53:23 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.productCenter.mapDepot;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class mapDepotDet_005fmodel_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<div class=\"content-wrapper content-wrapper-order content-wrapper-itemshow2 content-wrapper-itemshow2\">\r\n");
      out.write("\t<div class=\"det-top fn-left\" ng-if=\"userInfo.orgType == '6'\">\r\n");
      out.write("\t\t<img ng-src=\"{{orgInfo.shopLogo}}\" ng-if=\"orgInfo.shopLogo != '' \" >\r\n");
      out.write("\t\t<img src=\"http://static.qineasy.com/base/images/img_default_company.png\" ng-if=\"orgInfo.shopLogo == '' \" />\r\n");
      out.write("\t\t<h3>{{orgInfo.shopName}}</h3>\r\n");
      out.write("\t\t<span>商户添加时间：{{orgInfo.openDate}}</span>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"col-md-11 pageTitl removeBottom storeBasicInfo\">\r\n");
      out.write("\t\t<div class=\"col-md-12 storeProLeft\" style=\"border:none\">\r\n");
      out.write("\t\t\t<div class=\"storeProLeftImg fn-left\">\r\n");
      out.write("\t\t\t\t<img ng-src=\"{{materialMod.mainPic}}\" ng-if=\"materialMod.mainPic != '' \" />\r\n");
      out.write("\t\t\t\t<img src=\"http://static.qineasy.com/base/images/img_default_goods.png\" ng-if=\"materialMod.mainPic == '' \" />\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"storeProLeftDetil fn-left\">\r\n");
      out.write("\t\t\t\t<p>{{materialMod.proName}}</p>\r\n");
      out.write("\t\t\t\t<p class=\"inDetil\">款号：{{materialMod.proModelnum}}</p>\r\n");
      out.write("\t\t\t\t<p class=\"inDetil\">品牌：{{materialMod.brandName}}</p>\r\n");
      out.write("\t\t\t\t<span class=\"\">年份：{{materialMod.proYear}}</span>\r\n");
      out.write("\t\t\t\t<span class=\"\">季节：{{materialMod.proSeason}}</span>\r\n");
      out.write("\t\t\t\t<span class=\"\">吊牌价：{{materialMod.proPrice}}元</span>\r\n");
      out.write("\t\t\t\t<span class=\"\">品类：{{materialMod.sortName}}</span>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<a href=\"javascript:;\" class=\"line-btn  fn-right\" ng-click=\"gobackByRoute()\">返回</a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<!-- <div class=\"col-md-11 storeProNavBar fn-clear\">\r\n");
      out.write("\t\t<div ng-class=\"{true:'storeSetBackground'}[false]\">基本信息</div>\r\n");
      out.write("\t\t<div ng-class=\"{true:'storeSetBackground'}[true]\">素材图片</div>\r\n");
      out.write("\t\t<div ng-class=\"{true:'storeSetBackground'}[false]\">正式图片库</div>\r\n");
      out.write("\t\t<div ng-class=\"{true:'storeSetBackground'}[false]\">pc端标准详情</div>\r\n");
      out.write("\t\t<div ng-class=\"{true:'storeSetBackground'}[false]\">手机端标准详情</div>\r\n");
      out.write("\t\t<div ng-class=\"{true:'storeSetBackground'}[false]\">发布店铺</div>\r\n");
      out.write("\t</div> -->\r\n");
      out.write("<!--素材管理-->\r\n");
      out.write("\t\t<div class=\"col-md-11 storeProBox publicImgBox mgl20\">\r\n");
      out.write("\t\t\t<div class=\"col-md-12 mgb10 select-wrap\">\r\n");
      out.write("\t\t\t\t<label class=\"storeProLabel\"> \r\n");
      out.write("\t\t\t\t<input type=\"checkbox\" id=\"selectAllM\" ng-click=\"selectAll('M')\" /> \r\n");
      out.write("\t\t\t\t<span>全选</span>\r\n");
      out.write("\t\t\t\t</label> \r\n");
      out.write("\t\t\t\t<a href=\"javascript:;\" class=\"mgl10\" ng-click=\"downLoadPic()\"> \r\n");
      out.write("\t\t\t\t<i class=\"downLoad-icon\">\r\n");
      out.write("\t\t\t\t\t<img src=\"http://static.qineasy.com/base/images/icon_download.png\" />\r\n");
      out.write("\t\t\t\t</i>\r\n");
      out.write("\t\t\t\t\t下载选中\r\n");
      out.write("\t\t\t\t</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"col-md-12 fodderMainRow fodderMainRow4\">\r\n");
      out.write("\t\t\t\t<!--上传文件-->\r\n");
      out.write("\t\t\t\t<div class=\"fodderMain fodderMain-default\" ng-if=\"userInfo.roleId == '1' || userInfo.roleId == '2'\">\r\n");
      out.write("\t\t\t\t\t<div class=\"fodderMainImg\">\r\n");
      out.write("\t\t\t\t\t\t<img src=\"http://static.qineasy.com/base/images/icon_addimg.png\" />\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<a href=\"javascript:;\">上传文件</a>\r\n");
      out.write("\t\t\t\t\t<input type=\"file\" ngf-select=\"addFilesModel($files)\" ngf-multiple=\"true\" />\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<!--文件-->\r\n");
      out.write("\t\t\t\t<div class=\"fodderMain\" index=\"{{$index}}\" foldtype=\"proimg\"  ng-repeat=\"attr in attrList\" ng-model=\"attr\" id=\"material{{attr.proAttrId}}M\">\r\n");
      out.write("\t\t\t\t\t<div class=\"fodderMainImg \" ng-click=\"doSelect(this,'M')\">\r\n");
      out.write("\t\t\t\t\t\t<img ng-src=\"{{attr.proAttrValue}}\" />\r\n");
      out.write("\t\t\t\t\t\t<div class=\"cover\" ng-if=\"userInfo.orgType == '1'\">\r\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"scan am-ft-white a-dis\">预览</a> \r\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"am-ft-white a-dis\" ng-click=\"downloadone(this.attr)\">下载</a> \r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"cover\" ng-if=\"userInfo.orgType == '6'\">\r\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"scan am-ft-white mgr20\">预览</a> \r\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"am-ft-white mgr20\" ng-click=\"downloadone(this.attr)\">下载</a> \r\n");
      out.write("\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"delete am-ft-white\" ng-click=\"delImage(attr.proAttrId)\">删除</a>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<input id=\"materialcheck{{attr.proAttrId}}M\" type=\"checkbox\" class=\"code_checkbox\" ng-show=\"false\"/>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<input id=\"\" type=\"hidden\" class=\"code_checkbox\" />\r\n");
      out.write("\t\t\t\t\t<div class=\"fodderMainInfo\">\r\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" value=\"{{attr.proAttrFilePath}}\"\r\n");
      out.write("\t\t\t\t\t\t\tclass=\"fodderMainTitle fodderPubEdit\" placeholder=\"\" ng-model=\"attr.proAttrFilePath\" ng-blur='updateFolder(this)' />\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t<!--分页 start-->\r\n");
      out.write("\t    <div class=\"pagelist priv-pagelist\">\r\n");
      out.write("\t    \t<div id=\"pagingModel\"></div>\r\n");
      out.write("\t    </div>\r\n");
      out.write("\t<!--分页 end-->\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("</div>\r\n");
      out.write("  <!--图片预览蒙层-->\r\n");
      out.write("<div class=\"showScanImg\" id=\"showScanImg\">\r\n");
      out.write("\t<div style=\"position: relative;overflow-y: auto;width:100%;height:100%\">\r\n");
      out.write("\t<i class=\"fa fa-times-circle\" id=\"closeScanImg\" style=\"position:fixed; top:40px;right:40px;z-index:2\"></i>\r\n");
      out.write("\t<i class=\"fa fa-angle-left\" id=\"prevImg\" style=\"z-index: 2;\"></i>\r\n");
      out.write("\t<img src=\"\" alt=\"\" id=\"showImg\"/>\r\n");
      out.write("\t<i class=\"fa fa-angle-right\" id=\"nextImg\" style=\"z-index: 2;\"></i>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("  <!--图片预览蒙层-->");
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