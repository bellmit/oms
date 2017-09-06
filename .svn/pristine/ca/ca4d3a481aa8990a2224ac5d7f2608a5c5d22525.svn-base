<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="content-section-center content-section-centerBox fn-clear">
	<form class="form-horizontal" id="addOwnBrandForm">
		<div class="registerOwnBox clearfix">
			<div class="box-a-left">商标名称：</div>
			<div class="box-a-right">
				<input ng-model="brandName" name="brandName" class="brandNameStyle" type="text">
				<span class="text-css ">信息审核成功后，商标名称不可修改</span>
			</div>
		</div>
		<div class="registerOwnBox clearfix">
			<div class="box-a-left">品牌简介：</div>
			<div class="box-a-right">
				<textarea ng-model="brandInfo" name="brandInfo" class="brandInfoStyle" type="text">
	        	</textarea>
	        	<span class="text-css ">0/200</span>
			</div>
		</div>
		<div class="registerOwnBox clearfix">
			<div class="box-a-left">商标代码：</div>
			<div class="box-a-right">
				<input ng-model="brandCode" name="brandCode" class="brandCodeStyle" type="text">
				<span class="text-css">请输入商标代码</span>
			</div>
		</div>
		<div class="registerOwnBox clearfix">
			<div class="box-a-left">商标图片：</div>
			<div class="box-a-right fn-clear clearfix">
				<div class="brandlogodesc">
					<p class="text-css">请上传商标LOGO，图片建议大小：512px*512px</p>
					<p class="text-css">支持.jpg .jpeg .png .bmp格式照片，大小不超过2M</p>
				</div>
				<div class="brandLogo">
					<img id="brandLogo" src="http://static.qineasy.com/base/images/add_files02.png" alt="www" />
					<input type="file" class="brandLogoStyle" name="logo" ng-model="file" ngf-select="uploadFilesLogo($files)" />
				</div>
			</div>
		</div>
		<div class="registerOwnBox clearfix">
			<div class="box-a-left">商标所属人/公司：</div>
			<div class="box-a-right">
				<input ng-model="brandBelong" name="brandBelong" class="brandBelongStyle" type="text" ">
	        		</div>
	        	</div>
	        	<div class="registerOwnBox clearfix ">
	        		<div class="box-a-left ">商标注册证书：</div>
	        		<div class="box-a-right fn-clear ">
	        			
	        			<div class="cerdesca ">
	        				<span class="text-css ">请上传商标注册证书</span><br />
	        				<span class="text-css ">支持.jpg,.png,.bemp格式照片,大小不超过2M</span>
	        			</div>
                        <div class="cerlogo" >
	        				<img  id="brandImage" ng-model="brandCertificate" alt=" " src="http://static.qineasy.com/base/images/add_files01.png"/>
	        				<input type="file" class="brandImageStyle" name="addCertificate" ngf-select="uploadFilesCer($files)"/>  
	        			</div>
	        		</div>
	        	</div>  
	        	<div class="registerOwnBox ownBrandBox-btn ">
					<button class="isConfirmJoinBtn offset-btn " ng-click="addOwnBrand(brandName,brandInfo,brandCode,logo,brandBelong,brandCertificate) ">确认</button>
					<button class="isConfirmJoinBtn confirmBtn offset-btn " ng-click="closeForm() ">取消</button>
				</div>
	        </form>
	</div>
