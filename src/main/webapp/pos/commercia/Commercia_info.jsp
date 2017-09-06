<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!--------------- Content start ----------------->
<div class="content-wrapper commercia-content">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">商户资料</h2>
    </div>
    <div class="fn-clear"></div>
    <!-- Main content -->
    <section class="container-fluid">
    	<form id="commerciaupdateForm">
        <div class="row">
            <div class="prodet-nav prodet-content">
                <div class="prodet-box">
                    <div class="commercia-info mgt0">
                        <div class="row mgt15">
                            <div class="nowraps-text inprodet-titl am-ft-14">企业名称:</div>
                            <div class="col-md-3 form-group">{{shopList[0].shopName}}</div>
                        </div>
                         <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14">企业授权码:</div>
                            <div class="col-md-3 form-group">{{shopList[0].orgLicense}}</div>
                        </div>
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>企业简介:</div>
                            <div class="col-md-5 form-group needValInfo">
                                <textarea class="mgb0 shopInfo" placeholder="请输入..." name="shopInfo">{{shopList[0].shopInfo}}</textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14">商户编号:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-8 text-overflow shopNum" name="shopNum" ng-model="shopList[0].shopNum" value=""/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>联系人:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-8 text-overflow contacts" name="contacts" ng-model="shopList[0].contacts" value=""/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>联系方式:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-8 text-overflow shopTel" name="shopTel" ng-model="shopList[0].shopTel" value=""/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>通讯地址:</div>
                            <div class="col-md-8 form-group needValInfo">
                            <select class="col-md-3 mgr5" ng-model="shopList[0].province" ng-change="shopList[0].district='';shopList[0].city='';initprovinces()" >
									<option value=""></option>
									<option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
								</select>
								 <select class="col-md-3 mgr5" ng-model="shopList[0].city" ng-change="shopList[0].district='';initcitys()" >
									<option value=""></option>
									<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
								</select>  
								<select class="col-md-3 mgr5" ng-model="shopList[0].district" >
									<option value=""></option>
									<option ng-repeat="district in districts[cityId]" value="{{district.name}}">{{district.name}}</option>
								</select>  
                            </div>
                        </div>
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>详细地址:</div>
                            <div class="col-md-3 form-group needValInfo">
                                <input type="text" class="col-md-12 text-overflow shopAddrDet" name="shopAddr" ng-model="shopList[0].shopAddr" value=""/>
                            </div>
                        </div>
                        <div class="fn-clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary" ng-click="Edit(this)">确认修改商户信息</button>
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
    	formArray.push('{"commerciaupdateForm":"/shop/updateShop"}');
    	initValidate(formArray,pos);
	})
    //关闭工具提示
    $('.close').click(function() {
    $('.alert,.maskBg').hide();
    });

    </script>
    <!-- 尾部 -->
    <jsp:include page="../../public/footstyle.jsp" />