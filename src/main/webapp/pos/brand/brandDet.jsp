<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
   <!-- Main content -->
    <div class="content-wrapper newbrand-wrapper-info">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">品牌详情</h2>
            <a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
        </div>
        <div class="fn-clear"></div>
    
        <section class="container-fluid mgt15 pb10">
            <div class="register-new-box clearfix">
				<div class="box-left">品牌名称：</div>
				<div class="box-right default-name">{{brand.brandName}}</div>
			</div>
			<div class="register-new-box clearfix">
				<div class="box-left" >品牌简介：</div>
				<div class="box-right default-name default-name-extr">
					{{brand.brandInfo}}
				</div>
			</div>
		    <div class="register-new-box clearfix" ng-if="brand.brandJoinType=='1'">
		        <div class="box-left">商标代码：</div>
		        <div class="box-right default-name">{{brand.brandCode}}</div>
		    </div>
			
			<div class="register-new-box clearfix">
				<div class="box-left">商标图片：</div>
				<div class="brandLogo" style="height: 80px;">
					<div class="upload-box licenseScan clearfix">
						<img alt="商标图片" ng-src="{{brand.logo}}"  />	
					</div>
				</div>
			</div>
			
			<div class="register-new-box clearfix " ng-if="brand.brandJoinType=='1'">
				<div class="box-left"><em class="am-ft-red mgr5">*</em>商标所属人/公司：</div>
				<div class="box-right default-name">{{brand.brandBelong}}</div>
			</div>
			
			<div class="register-new-box clearfix" ng-if="brand.brandJoinType=='1'">
				<div class="box-left">商标注册证书：</div>
				<div class="box-right">
					<div class="upload-box licenseScan clearfix">
						<img alt="商标注册证书" ng-src="{{brand.brandCertificate}}" />
					</div>
				</div>
			</div>

            <button ng-if="brand.brandJoinType!='3'" type="button" class="btn btn-primary addBrandBtn mgl60" ng-click="goRoute('brandDetEdit')">编辑</button>
        </section>
    </div>
    <div class="fn-clear"></div>
</div>



















