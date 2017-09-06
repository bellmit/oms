<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<div class="wrapper" style="position: inherit;">

<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">新增门店</h2>
    </div>
    <div class="fn-clear"></div>
    <!-- Main content -->
    <section class="container-fluid">
     <form id="addstoreForm">
        <div class="row">
            <div class="prodet-nav">
                <div class="prodet-box">
                    <!-- row0 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店编号:</div>
                        <div class="col-md-5 form-group needValInfo">
                            <input type="text" class="col-md-4 text-overflow addShopNum" name="shopNum" value=""/>
                        </div>
                    </div>  
                    <!-- row1 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店名称:</div>
                        <div class="col-md-5 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow addShopName" name="shopName" value=""/>
                        </div>
                    </div>
                    <!-- row2 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店简介:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <textarea class="mgb0 addShopInfo" placeholder="请输入..." name="shopInfo"></textarea>
                        </div>
                    </div>
                    <!-- row2.5 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店面积:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow addAcreage mgr20" name="acreage" value=""/>平方米
                        </div>
                    </div>
                    <!-- row3 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店负责人:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow addContacts" name="contacts" value=""/>
                        </div>
                    </div>
                    <!--row4-->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>电话:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-8 text-overflow addShopTel" name="shopTel" value=""/>
                        </div>
                    </div>
                    <!-- row6 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>门店地址:</div>
                        <div class="col-md-8 form-group needValInfo">
                        <select class="col-md-3 mgr5 shopAddr1" ng-options="province.name for province in provinces" ng-model="province" ng-change="member.city='';member.district='';">
                            <option value="">请选择省</option>
                        </select>
                        <select class="col-md-3 mgr5 shopAddr2" ng-options="city.name for city in citys[province.id]" ng-model="city" ng-change="member.district='';">
                            <option value="">请选择市</option>
                        </select>
                        <select class="col-md-3 shopAddr3" ng-options="district.name for district in districts[city.id]" ng-model="district">
                            <option value="">请选择区</option>
                        </select>
                        </div>
                    </div>
                    <!-- row7 -->
                    <div class="row">
                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>详细地址:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-12 text-overflow addShopAddr" name="shopAddr" value=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary fn-left" ng-click="AddStore()">确认</button>
        <button type="button" class="btn btn-default fn-left mgl10" ng-click="goback()">返回</button>
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
    	formArray.push('{"addstoreForm":"/shop/addShopAndOrg"}');
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