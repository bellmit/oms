<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--商户资料-->
<div class="content-wrapper content-wrapper-commerciaInfo mgb15" ng-show="obj.commercialInfo=='show'">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">商户资料</h2>
            <a href="javascript:;" class="btn btn-primary fn-right" ng-click="editCommercialInfo()">编辑</a>
        </div>
        <div class="fn-clear"></div>
        <div class="ManColTable col-lg-12">
            <div class="commercia-info">
                <!-- row1 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14 mgt25">商户logo：</div>
                    <div class="col-md-3 form-group memImg needValInfo">
                        <img ng-src="{{shopList[0].shopLogo}}" />
                    </div>
                </div>
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">商户全称：</div>
                    <p>{{shopList[0].shopName}}</p>
                </div>
                <!-- row2 -->
                <div class="row fn-clear">
                    <div class="nowraps-text inprodet-titl am-ft-14 fn-left">商户简介：</div>
                    <p class="fn-left" style="width:700px;overflow: hidden;">{{shopList[0].shopInfo}}</p>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">详细地址：</div>
                    <p>{{shopList[0].province}}{{shopList[0].city}}{{shopList[0].district}}{{shopList[0].shopAddr}}</p>
                </div>
                <!-- row5 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">联系人：</div>
                    <p>{{shopList[0].contacts}}</p>
                </div>
                <!-- row6 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">联系电话：</div>
                    <p>{{shopList[0].shopTel}}</p>
                </div>
                <div class="fn-clear"></div>
            </div>
            <div class="fn-clear"></div>
        </div>
        <div class="fn-clear"></div>
    </div>
<!--商户资料-->
	
<div ng-show="obj.commercialInfoEdit=='show'">
	<!--商户资料编辑-->
	<jsp:include page="commercialInfoEdit.jsp"/>
</div>