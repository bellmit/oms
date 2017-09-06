<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!--------------- Content start ----------------->
<div class="content-wrapper commercia-content">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">免费开通商户</h2>
    </div>
    <div class="fn-clear"></div>
    <!-- Main content -->
    <section class="container-fluid">
    <form id="commerciaForm">
        <div class="row">
            <div class="prodet-nav prodet-content">
                <div class="prodet-box">
                    <div class="commercia-info mgt0">
                        <!-- row1 -->
                        <div class="row mgt15">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>企业名称:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-8 text-overflow shopName mgl0" name="shopName" value=""/>
                            </div>
                        </div>
                        <!-- row2 -->
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>企业简介:</div>
                            <div class="col-md-5 form-group needValInfo">
                                <textarea class="mgb0 shopInfo" placeholder="请输入..." name="shopInfo"></textarea>
                            </div>
                        </div>
                        <!-- row3 -->
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>联系人:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-8 text-overflow contacts" name="contacts" value=""/>
                            </div>
                        </div>
                        <!--row4-->
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>联系方式:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-8 text-overflow shopTel" name="shopTel" value=""/>
                            </div>
                        </div>
                        <!-- row5 -->
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>通讯地址:</div>
                            <div class="col-md-8 form-group needValInfo">
                            <select class="col-md-3 mgr5 shopAddr1" ng-options="province.name for province in provinces" ng-model="province" ng-change="member.city='';member.district='';">
                                <option value="">请选择省</option>
                            </select>
                            <select class="col-md-3 mgr5 shopAddr2" ng-options="city.name for city in citys[province.id]" ng-model="city" ng-change="member.district='';">
                                <option value="">请选择市</option>
                            </select>
                            <select class="col-md-3 mgr5 shopAddr3" ng-options="district.name for district in districts[city.id]" ng-model="district">
                                <option value="">请选择区</option>
                            </select>
                            </div>
                        </div>
                        <!-- row7 -->
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>详细地址:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-12 text-overflow shopAddrDet" name="shopAddr" value=""/>
                            </div>
                        </div>
                        <div class="fn-clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary mgl20" ng-click="AddCommercial()">确认商户信息并开通</button>
   	</form>
    </section>

</div>

</div>

<!-- 工具提示 start-->
    <div class="alert alert-danger alert-dismissible fade in fn-hide" role="alert">
    <button type="button" class="close">
    <span>×</span>
    </button>
    <h4>保存失败!</h4>
    <p>输入的内容不能为空</p>
    </div>
<!-- 工具提示 end -->

<script>
	$(function(){
		var formArray=[];
    	formArray.push('{"commerciaForm":"/shop/addShopAndOrg"}');
    	initValidate(formArray,pos);
	})
//关闭工具提示
$('.close').click(function() {
    $('.alert,.maskBg').hide();
});

</script>
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />