<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<div class="wrapper" style="position: inherit;">

<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">修改门店</h2>
    </div>

    <!-- Main content -->
    <section class="container-fluid">
     <form id="storeForm">
        <div class="row">
            <div class="prodet-nav prodet-content">
                <div class="prodet-box">
                    <!-- row0 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店编号:</div>
                        <div class="col-md-5 form-group needValInfo">
                            <input type="text" class="col-md-4 text-overflow shopNum" name="shopNum" value="{{storeDetail.shopNum}}" ng-model="storeDetail.shopNum"/>
                        </div>
                    </div>                  
                    <!-- row1 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店名称:</div>
                        <div class="col-md-5 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow" name="shopName" value="{{storeDetail.shopName}}" ng-model="storeDetail.shopName"/>
                        </div>
                    </div>
                    <!-- row2 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店简介:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <textarea class="mgb0 shopInfo" placeholder="请输入..." name="shopInfo" value="{{storeDetail.shopInfo}}" ng-model="storeDetail.shopInfo"></textarea>
                        </div>
                    </div>
                    <!-- row2.5 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店面积:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow acreage mgr20" name="acreage" value="{{storeDetail.acreage}}" ng-model="storeDetail.acreage"/>平方米
                        </div>
                    </div>
                    <!-- row3 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店负责人:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow contacts" name="contacts" value="{{storeDetail.contacts}}" ng-model="storeDetail.contacts"/>
                        </div>
                    </div>
                    <!--row4-->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>电话:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow shopTel" name="shopTel" value="{{storeDetail.shopTel}}" ng-model="storeDetail.shopTel"/>
                        </div>
                    </div>
                    <!-- row6 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店地址:</div>
                        <div class="col-md-8 form-group needValInfo">
                        <!-- <select class="col-md-3 mgr5 shopAddr1" ng-options="province.name for province in provinces" ng-model="province" ng-change="member.city='';member.district='';">
                            <option value="">请选择省</option>
                        </select>
                        <select class="col-md-3 mgr5 shopAddr2" ng-options="city.name for city in citys[province.id]" ng-model="city" ng-change="member.district='';">
                            <option value="">请选择市</option>
                        </select>
                        <select class="col-md-3 shopAddr3" ng-options="district.name for district in districts[city.id]" ng-model="district">
                            <option value="">请选择区</option>
                        </select> -->
                        <select class="col-md-3 mgr5 shopAddr1" ng-model="storeDetail.province" ng-change="storeDetail.city='';storeDetail.district='';initprovinces()" >
							<option value=""></option>
							<option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
						</select>
						<select class="col-md-3 mgr5 shopAddr2" ng-model="storeDetail.city" ng-change="storeDetail.district='';initcitys()" >
							<option value=""></option>
							<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
						</select>  
						<select class="col-md-3 mgr5 shopAddr3" ng-model="storeDetail.district" >
							<option value=""></option>
							<option ng-repeat="district in districts[cityId]" value="{{district.name}}">{{district.name}}</option>
						</select>  
                        </div>
                    </div>
                    <!-- row7 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>详细地址:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-12 text-overflow shopAddr" name="shopAddr" value="{{storeDetail.shopAddr}}" ng-model="storeDetail.shopAddr"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary fn-left" ng-click="update(this)">确认</button>
        <button type="button" class="btn btn-default fn-left mgl10" ng-click="returnback()">返回</button>
        </form>
    </section>
    <!-- /Main content -->
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
    	formArray.push('{"storeForm":"/shop/addShopAndOrg"}');
    	initValidate(formArray,pos);
	})
    //弹窗居中
    $('.EditDialog').center();
    //关闭工具提示
    $('.close').click(function() {
        $('.alert,.maskBg').hide();
    });

</script>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />