<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
   <!-- Main content -->
    <div class="content-wrapper newbrand-wrapper-info">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">编辑品牌</h2>
            <a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
        </div>
        <div class="fn-clear"></div>
    
        <section class="container-fluid mgt15 pb10">
            <div class="register-new-box clearfix">
				<div class="box-left">品牌名称：</div>
				<div class="box-right default-name">{{brand.brandName}}</div>
			</div>
			<div class="register-new-box clearfix ">
				<div class="box-left">品牌简介：</div>
				<div class="box-right">
					<textarea class="col-md-6" type="text" name="" maxlength="200" ng-model="brand.brandInfo"></textarea>
					<span class="text-css num-count">{{brand.brandInfo.length}}/200</span>
				</div>
			</div>
		    <div class="register-new-box clearfix" ng-if="brand.brandJoinType=='1'">
		        <div class="box-left"><em class="am-ft-red mgr5">*</em>商标代码：</div>
		        <div class="box-right">
		            <input class="col-md-5" value="" type="text" name="" ng-model="brand.brandCode"/>
		        </div>
		    </div>
			
			<div class="register-new-box clearfix">
				<div class="box-left"><em class="am-ft-red mgr5">*</em>商标图片：</div>
				<div class="box-right">
					<div class="cerdesc">
						<span class="text-css">请上传商标LOGO，图片大小建议：512px*512px</span><br />
						<span class="text-css">支持.jpg .jpeg .png .bmp格式照片，大小不超过2M</span>
					</div>
					<div class="brandLogo" style="height: 80px;">
						<img alt="请选择图片" ng-src="{{brand.logo}}" id="licenseScan" name="licenseScan">
						<input type="file" class="uploadCer" ngf-multiple="false" ngf-select="uploadFilesLogo($files)"/>
					</div>
				</div>
			</div>
			
			<div class="register-new-box clearfix " ng-if="brand.brandJoinType=='1'">
				<div class="box-left"><em class="am-ft-red mgr5">*</em>商标所属人/公司：</div>
				<div class="box-right">
					<input class="col-md-5" value="" type="text" name="" ng-model="brand.brandBelong"/>
				</div>
			</div>
			
			<div class="register-new-box clearfix" ng-if="brand.brandJoinType=='1'">
				<div class="box-left"><em class="am-ft-red mgr5">*</em>商标注册证书：</div>
				<div class="box-right">
					<div class="cerdesc">
						<span class="text-css">请上传商标注册证书，图片大小建议：512px*512px</span><br />
						<span class="text-css">支持.jpg .jpeg .png .bmp格式照片，大小不超过2M</span>
					</div>
					<div class="upload-box licenseScan clearfix">
						<img alt="请选择图片" ng-src="{{brand.brandCertificate}}" id="licenseScan" name="licenseScan">
						<input type="file" class="uploadCer" ngf-multiple="false" ngf-select="uploadFilesCer($files)"/>
					</div>
				</div>
			</div>

            <button type="button" class="btn btn-primary addBrandBtn mgl60" ng-click="saveEdit()">保存</button>
            <button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
        </section>
    </div>
    <div class="fn-clear"></div>
</div>



















