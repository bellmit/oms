<!--<%@page contentType="text/html" pageEncoding="UTF-8"%>-->
<!--添加自有品牌弹框-->
<div class="ownBrandShadow" ng-show="showOwn">
	<div class="ownBrandBox">
		<div class="ownBrandTitle">
			<span>添加自有品牌</span>
			<span ng-click="closeForm()" class="closea">
				<img src="http://static.qineasy.com/base/images/closelogo.png" alt="" />
			</span>
		</div>
		<div class="ownBrandDetail1">
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
							<textarea  ng-model="brandInfo" name="brandInfo" class="brandInfoStyle" type="text"></textarea>
							<span class="text-css">0/200</span>
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
								<img id="brandLogo" ng-src="{{imagesPath}}" alt="www" />
								<input type="file" class="brandLogoStyle" name="logo" ng-model="file" ngf-select="uploadFilesLogo($files)" />
							</div>
						</div>
					</div>
					<div class="registerOwnBox clearfix">
						<div class="box-a-left">商标所属人/公司：</div>
						<div class="box-a-right">
							<input ng-model="brandBelong" name="brandBelong" class="brandBelongStyle" type="text" >
	        		</div>
	        	</div>
	        	<div class="registerOwnBox clearfix ">
	        		<div class="box-a-left ">商标注册证书：</div>
	        		<div class="box-a-right fn-clear ">
	        			
	        			<div class="cerdesca ">
	        				<span class="text-css ">请上传商标注册证书</span><br />
	        				<span class="text-css ">支持.jpg,.png,.bemp格式照片,大小不超过2M</span>
	        			</div>
                        <div class="cerlogo ">
	        				<img  id="brandImage" ng-model="brandCertificate" alt=" " ng-src="{{imagesPathcer}}"/>
	        				<input type="file" class="brandImageStyle" name="brandCertificate" ngf-select="uploadFilesCer($files)"/>  
	        			</div>
	        			<!--brandCertificate-->
	        		</div>
	        	</div>  
	        	<div class="registerOwnBox ownBrandBox-btn ">
					<button class="isConfirmJoinBtn offset-btn " ng-click="addOwnBrand(brandName,brandInfo,brandCode,logo,brandBelong,brandCertificate) ">确认</button>
					<button class="isConfirmJoinBtn confirmBtn offset-btn " ng-click="closeForm() ">取消</button>
				</div>
	        </form>
	</div>
       	</div>
	</div>
</div>
<!--添加加盟品牌弹框-->	
<div class="joinBrandShadow " ng-show="showJoin ">
	<div class="joinBrandBox ">
		<div class="joinBrandTitle ">
			<span>添加加盟品牌</span>
			<span ng-click="closeForm() "><img src="http://static.qineasy.com/base/images/closelogo.png " alt=" " /></span>
		</div>
		<div class="ownBrandDetail ">
			<div class="addType ">
				<span>加盟类型：</span>
				<input type="radio" name="select" id="personType" ng-click="showOwnJoin()" checked="checked" /><label for="personType">&nbsp;自主加盟&nbsp;&nbsp;</label>
				<input type="radio" name="select" id="companyType" ng-click="showCodeJoin() " /><label for="companyType ">&nbsp;授权加盟</label>
			</div>
			<!--自主加盟-->
			<form action=" " id="selfJoinBrand">
				<div class="joinOwn" ng-show="isOwnjoin">
					<div class="register-new-box clearfix box-offset ">
						<div class="box-left ">品牌名称：</div>
						<div class="box-right ">
							<input class=" " name="brandName" ng-model="selfJoinBrandName" type="text">
							<span class="text-css">信息审核成功后，商标名称不可修改</span>
						</div>
					</div>
					<div>
			
					</div>
					<div class="register-new-box clearfix box-offset ">
						<div class="box-left ">品牌简介：</div>
						<div class="box-right ">
							<textarea name="brandInfo" ng-model="selfJoinBrandDesc" class=" " type="text "></textarea>
							<span>{{selfJoinBrandDesc.length}}/200</span>
						</div>
					</div>
					<div class="register-new-box clearfix box-offset ">
						<div class="box-left ">品牌图片：</div>
						<div class="box-right fn-clear ">
							<div class="brandLogo1desc">
								<span class="text-css ">请上传商标LOGO，图片建议大小：512px*512px</span><br />
								<span class="text-css ">支持.jpg,.png,.bemp格式照片，大小不超过2M</span>
							</div>
							<div class="unload-file brandLogo1 clearfix">
								<!--<img id="brandLogo1 " ng-src="http://static.qineasy.com/base/images/add_files02.png " ng-model="logo1 " alt=" " />-->
								<img id="brandLogo1" ng-src="{{imagesPath1}}" ng-model="logo1" alt=" " />
								<input type="file" ngf-select="uploadFilesLogo1($files)" name="logo" />
							</div>
						</div>
					</div>
				</div>
			</form>
			<!--授权加盟-->
			<form action=" " id="permitJoin">
				<div ng-show="isCodejoin">
					<div class="brandCode">
						<span>品牌授权码：</span>
						<input ng-model="brandLicense" name="brandLicense" ng-mouseleave="getBrandInfo()" ng-change="getBrandInfo()" type="text" style="width: 250px;height:30px;">
						<span class="getBrandName ">{{getBrandName}}</span>
						<p class="text-css ">请输入上级经销商或者品牌方提供的8位品牌授权码</p>
					</div>
				</div>
			</form>

		</div>
		<div class="joinBrandBox-btn ">
			<button class="isConfirmJoinBtn confirmBtn offset-btn " ng-click="addJoinBrand(selfJoinBrandName,selfJoinBrandDesc,selfBrandImg,brandLicense) ">确认</button>
			<button class="isConfirmJoinBtn offset-btn " ng-click="closeForm() ">取消</button>
		</div>
	</div>
</div>
<!--未添加产品，点击下一步-->
<div  class="isConfirmShadow" ng-show="showConfir" >
	<div  class="isConfirmJoin" >
		<div  class="isConfirmJoinTitle">
			<span>提示</span>
			<span ng-click="closeForm()"><img src="http://static.qineasy.com/base/images/closelogo.png "/></span>
		</div>
		<div>
			<img src="http://static.qineasy.com/base/images/light.png "/>
			<span>你还没有添加任何品牌信息，请确认是否跳过。</span>
		</div>
	<div class="isConfirmJoin-btn">
			<button class="isConfirmJoinBtn" ng-click="nexthtml()" >跳过</button>
			<button class="isConfirmJoinBtn confirmBtn" ng-click="closeForm()">否</button>
		</div>
	</div>
</div>
<script>
	$(function(){
        var formArray=[];
         formArray.push('{"addOwnBrandForm ":"/brand/addIndependentBrand "}');
         formArray.push('{"selfJoinBrand ":"/brand/addAutonomyJoinBrand "}');
         formArray.push('{"permitJoin ":"/brand/addLicenseBrand "}');
        initValidate(formArray,pos);
    })
		

</script>