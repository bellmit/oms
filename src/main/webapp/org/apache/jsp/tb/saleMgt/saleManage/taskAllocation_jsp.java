/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2017-03-25 08:35:52 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.tb.saleMgt.saleManage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class taskAllocation_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!--------------- Content start ----------------->\n");
      out.write("<div class=\"contractCreate-wraper contractCreate-wraperaa fn-clear contractCreate-wraper-info\">\n");
      out.write("\t<div class=\"col-md-11 fn-clear addContractBox\" >\n");
      out.write("\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t<div class=\"contractInfo col-md-12\">\n");
      out.write("\t\t\t\t<div class=\"infoLine infoLinea fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t合同编号：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<span class=\"color333 fn-left\">20160912001231</span>\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t合同类型：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<span class=\"color333\">新签</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLine infoLineb fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t商戶名称：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<span class=\"color333\">西西小可 潮品女装</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLine infoLinee fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"fn-left infoTitile\">\n");
      out.write("\t\t\t\t\t\t任务分配：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"fn-left\" style=\"width: 80%;\">\n");
      out.write("\t\t\t\t\t\t<div class=\"task-Info\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"infoLineBox fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"task-info-nav\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\">新签分配－客服</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-gray\">（服务部门：合肥客服部>V2部>女装一组   小王）</span>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"col-md-12 task-info-content\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"checkContractInfo col-md-11 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\" id=\"financeService\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">1</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">分配区域</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">计划上线时间：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">2017-03-10 10:00</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务区域：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">武汉</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务部门：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">女装一组</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">备注：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333 memoa\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">吴国飞</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">客服部</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">2016-10-11</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\" id=\"financeService\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">2</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">部门分配</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">执行人：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">女装一组 小王</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务区域：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">武汉</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">备注：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333 memoa\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">主管</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">女装一组</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">2016-10-11</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">3</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">执行人接收</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">接受人意见：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">同意</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">实际上线时间：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">2017－01-09 10:30</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">小王</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">女装一组</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">2016-10-11</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<div class=\"task-Info\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"infoLineBox fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"task-info-nav\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-black\">新签分配－美工</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"am-ft-gray\">（服务部门：合肥客服部>V2部>女装一组   小王）</span>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"col-md-12 task-info-content\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"checkContractInfo col-md-11 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\" id=\"financeService\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">1</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">分配区域</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear \">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">计划上线时间：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">2017-03-10 10:00</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务区域：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">武汉</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务部门：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">女装一组</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">备注：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333 memoa\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">吴国飞</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">客服部</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">2016-10-11</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"am-ft-14 color999 fn-hide\">待执行</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\" id=\"financeService\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">2</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">部门分配</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear \">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">执行人：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">女装一组 小王</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">服务区域：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">武汉</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">备注：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333 memoa\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注这是一段很长的备注</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">主管</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">女装一组</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">2016-10-11</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractInfo fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"hasContractNo\">3</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"am-ft-14 am-ft-black\">执行人接收</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfo fn-left fn-clear passContractInfo-task\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBox passContractInfoBoxR fn-clear fn-hide\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">接受人意见：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">同意</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color999\">实际上线时间：</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"color333\">2017－01-09 10:30</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"passContractInfoBoxR1 task-info-footer  fn-clear\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">小王</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mgl15 mgr15\">女装一组</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">2016-10-11</span>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"am-ft-14 color999 \">待执行</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"w800 fn-left mgl0 line-cut\" ></div>\t\n");
      out.write("\t\t\t\t\t\t<!--区域分配-->\n");
      out.write("\t<div class=\"fn-clear addContractBox border-blue w800 fn-left mgl0\" >\n");
      out.write("\t\t<form id='areaAssignForm'>\n");
      out.write("\t\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t\t<div class=\"contractBaseInfo\">分配区域</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<div class=\"contractInfo col-md-9 \">\n");
      out.write("\t\t\t\t<div class=\"infoLine infoLinef fn-clear\"></div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t计划上线时间：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" name=\"planDate\" id=\"planDate\" class=\"fn-left laydate-icon form-control effectdatatime\" placeholder=\"上线时间\" onclick=\"laydate()\" style=\"width: 120px;\"/>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t服务部门：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div>\n");
      out.write("\t\t\t\t\t\t<select class=\"col-md-2 mgr10\" ng-model=\"depart1\" ng-options='depart.areaName as depart.areaName for depart in departAreaList' ng-change=\"getDepartList(depart1)\">\n");
      out.write("\t\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t<select class=\"col-md-2 mgr10\" ng-show=\"parts1.length != 0\" ng-options=\"n.departId as n.departName for n in parts1\" ng-model=\"selectKe1\" ng-change=\"sortIdChange(selectKe1,1)\">\n");
      out.write("\t\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t<select class=\"col-md-2 mgr10\" ng-show=\"parts2.length != 0\" ng-options=\"x.departId as x.departName for x in parts2\" ng-model=\"selectKe2\" ng-change=\"sortIdChange(selectKe1,2)\">\n");
      out.write("\t\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t<select class=\"col-md-2 mgr10\" ng-show=\"parts3.length != 0\" ng-options=\"a.departId as a.departName for a in parts3\" ng-model=\"selectKe3\" ng-change=\"sortIdChange(selectKe3,3)\">\n");
      out.write("\t\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t<em class=\"am-ft-red mgr5\"></em> 合同备注：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<textarea name=\"remark\" ng-model=\"remark\" rows=\"3\" cols=\"3\" style=\"width: 68%;\"></textarea>\n");
      out.write("\t\t\t\t\t<span> <i ng-if=\"remark.length==undefined\">0</i> <i\n");
      out.write("\t\t\t\t\t\tng-if=\"remark.length!=undefined\">{{remark.length}}</i> /200\n");
      out.write("\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t确认人：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-gray\">{{userInfo.trueName}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\" style=\"height: 1px;\">\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"fn-left\">\n");
      out.write("\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary \" >确认</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</form>\n");
      out.write("\t</div>\n");
      out.write("\t<!--/区域分配-->\n");
      out.write("\t<!--主管分配-->\n");
      out.write("\t\t<div class=\"col-md-11 fn-clear addContractBox border-blue w800 fn-left mgl0\" >\n");
      out.write("\t\t<form id=\"assignedForm\">\n");
      out.write("\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t<div class=\"contractBaseInfo\">部门主管</div>\n");
      out.write("\t    </div>\n");
      out.write("\t    <div class=\"contractInfo col-md-9 mgt0\">\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt15 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t执行人：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<div class=\"infoLineInfo\" id=\"assigned\">\n");
      out.write("\t\t\t\t\t\t\t<select name=\"\" ng-model=\"depart2\" ng-options=\"n.departId as n.departName for n in departList\">\n");
      out.write("\t\t\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("\t\t\t\t\t\t\t</select>\n");
      out.write("\t\t\t\t\t\t\t<select name=\"userId\" ng-model=\"user\" ng-options=\"u.userId as u.trueName for u in userList\">\n");
      out.write("\t\t\t\t\t\t\t\t<option value=\"\">请选择</option>\n");
      out.write("\t\t\t\t\t\t\t</select> \n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<!--<div class=\"infoLineBox mgt0 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t工作安排：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<div class=\"checkContractInfoUpload\" ng-if=\"fileName!=undefined&&fileName!=''\">\n");
      out.write("\t\t\t\t\t\t\t<img src=\"../static/base/images/icon_file.png\"/>\n");
      out.write("\t\t\t\t\t\t\t\t<span class=\"mgl5\" id=\"fileName\" ng-if=\"fileName.length<8\">{{fileName}}</span>\n");
      out.write("\t\t\t\t\t\t\t\t<span class=\"mgl5\" id=\"fileName\" ng-if=\"fileName.length>=8\">{{fileName |limitTo:8}}...</span>\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"../static/base/images/icon_download1.png\"/>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t<div class=\"checkContractInfoFile\">\n");
      out.write("\t\t\t\t\t\t\t<input ngf-select=\"uploadWork($files)\" name=\"files\" type=\"file\" value=\"\" />\t\t\t\t\t\t\n");
      out.write("\t\t\t\t\t\t\t<button class=\"addFileBtn\">上传附件</button>\t\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>-->\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt0 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t备注：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<textarea ng-model='memo1' name=\"memo\" rows=\"3\" cols=\"3\" style=\"width: 400px;\"></textarea>\n");
      out.write("\t\t\t\t\t\t<span> <i ng-if=\"memo1.length==undefined\">0</i> \n");
      out.write("\t\t\t\t\t\t\t<i ng-if=\"memo1.length!=undefined\">{{memo1.length}}</i> /200\n");
      out.write("\t\t\t\t\t\t</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t确认人：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-gray\">{{contractTask.execDepartName}}</span>\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-gray\">{{contractTask.managerUserName}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\" style=\"height: 1px;\">\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\" fn-left\">\n");
      out.write("\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary \" >确认</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t</form>\n");
      out.write("\t</div>\n");
      out.write("\t<!--/主管分配-->\n");
      out.write("\t<!--执行人接收-->\n");
      out.write("\t<div class=\"col-md-11 fn-clear addContractBox border-blue w800 fn-left mgl0\" >\n");
      out.write("\t<form id=\"execForm\">\n");
      out.write("\t\t<div class=\"fn-clear col-md-12 contractBaseInfoBox\">\n");
      out.write("\t\t\t<div class=\"contractBaseInfo\">执行人接收</div>\n");
      out.write("\t    </div>\n");
      out.write("\t    <div class=\"contractInfo col-md-9 mgt0 \">\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt15 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t接收人意见：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<div class=\"infoLineInfo\">\n");
      out.write("\t\t\t\t\t\t\t<label class=\"fn-left mgr10 \">\n");
      out.write("\t\t\t\t\t\t\t\t<input name=\"managerResult\" type=\"radio\" value=\"0\" />同意\n");
      out.write("\t\t\t\t\t\t\t</label>\n");
      out.write("\t\t\t\t\t\t\t<label>\n");
      out.write("\t\t\t\t\t\t\t\t<input name=\"managerResult\" type=\"radio\" value=\"1\" />不同意\n");
      out.write("\t\t\t\t\t\t\t</label>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgt0 mgb10 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t实际上线时间：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<input type=\"text\"  class=\"fn-left laydate-icon form-control effectdatatime\"\n");
      out.write("\t\t\t\t\t\t\tname='finishTime' placeholder=\"实际上线时间\" onclick=\"laydate()\" style=\"width: 120px;\"/>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\">\n");
      out.write("\t\t\t\t\t\t确认人：\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\"checkContractInfo fn-left\">\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-gray\">{{contractTask.execDepartName}}</span>\n");
      out.write("\t\t\t\t\t\t<span class=\"am-ft-gray\">{{userInfo.trueName}}</span>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t\t<div class=\"infoLineBox mgb15 mgt0 fn-clear\">\n");
      out.write("\t\t\t\t\t<div class=\"infoTitile\" style=\"height: 1px;\">\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t<div class=\" fn-left\">\n");
      out.write("\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary \" >确认</button>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t\t</form>\n");
      out.write("\t</div>\n");
      out.write("\t<!--/执行人接收-->\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t</div>\n");
      out.write("\t</div>\n");
      out.write("\t\n");
      out.write("\t\n");
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
