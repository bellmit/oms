<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="">
	<!--<div style="width:320px;margin: 0 auto;">-->
	<!--<button class="blueGroundWhiteBtn" style="margin-left: 428px;" ng-click="insertPcHtml()">
		导入电脑端详情
	</button>-->
	<div style="width:320px;margin: 0 auto;">
		<div class="publish-article-content">
			<div class="title-tips  mgl20 mgb5">摘要</div>
			<input type="text" id="title" class="mobileDescTitle mgb10" placeholder="文章标题">
			<div class="title-tips paddingleft20 mgb5" style="padding-top: 10px; border-top:1px solid #DEDEDE">正文</div>
			<input type="hidden" id="target">
			<div class="article-content" id="content">
			</div>
			<div class="footer-btn g-image-upload-box" style="position: relative;">
				<div class="upload-button">
					<span class="upload"><i class="upload-img"></i>插入图片</span>
					<!--<input class="input-file" id="imageUpload" type="file" name="fileInput" capture="camera" accept="image/*" style="position:absolute;height:40px;top:0px;left:0;opacity:0;width:100%;">-->
					<button class="input-file" ng-click="openPicDialog()" id="mobilEditFrameb" type="file" style="position:absolute;height:40px;top:0px;left:0;opacity:0;width:100%;">
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
<button class="blueGroundWhiteBtn" style="margin-left: 428px;" ng-click="insertPcHtml()">
		导入电脑端详情
	</button>
<button id="saveMobileDesc" class="blueGroundWhiteBtn  mgt15" style="margin-left: 30px;">保存</button>
<!--点击图片编辑时的弹窗-->
<div class="dialog-content mobileEditContent fn-hide">
	<div class="mobilePicDialog">
		<div class="dialog-head fn-clear">
			<p class="fn-left mgt10 mgb10 mgl20">请选择图片</p>
			<p class="fn-right mgr20 mgt10 mgb10">
				<img class="closeDiaUpload" src="../static/base/images/closelogo.png" />
			</p>
		</div>
		<div class="dialog_tab fn-clear mgt20">
			<p class="fn-left tabSelected mgl20">上传新图片</p>
			<p class="fn-left mgl20">从正式图库中选择</p>
		</div>
		<div class="localImgBox  uploadTabBox mgr5 mgt10">
			<div class="uploadWarm fn-clear">
				<p class="fn-right mgr20">
					上传后的图片将存入正式图库
				</p>
			</div>
			<div class="uploadImgBox" style="position: relative;">
				<input type="file" id="mobileUploadImg" ngf-select="mobileUploadImg($files)" ngf-multiple="true" multiple="multiple" style="position: absolute;top: 30px;left: 300px;height: 50px;display: block;opacity: 0;">
				<button type="button" class="btn btn-info addSizeGroup uploadImgBtn">点击上传</button>
				<p>提示：文件大小请不要超过<span class="am-ft-red">3M</span>，<br /> 移动端尺寸为宽度
					<span class="am-ft-red">480-1242之间，高度小于1546</span>，仅支持<span class="am-ft-red">JPG、GIF、PNG</span>格式；<br /> 建议上传无线详情图片750px以上，效果更佳
				</p>
			</div>
		</div>
		<div class="onlineImgBox uploadTabBox fn-clear fn-hide">
			<div class="imgBox  fn-left" ng-repeat="attrList in attrLists" ng-class="{true:'imgSelected'}[selectedimg]" ng-click="chooseImg(this)">
				<img ng-src="{{attrList.url}}" alt="" />
				<div class="sizeCover">
					{{attrList.width}}X{{attrList.height}}
				</div>
			</div>
		</div>
		<div class="selectedImgBox mgt15">
			<p>已选择<span class="am-ft-blue">{{imgSrcArr.length}}</span>张图片（拖动可修改插入顺序）</p>
			<div class="selectedImgList fn-clear" id="selectedImgList">
					
			</div>
		</div>
		<div class="bottom_btn mgb20 mgr20 mgt20 fn-clear">
			<button class="whiteGroundBlueBtn fn-right mgl20 insertImg" id="imageUpload">插入</button>
			<button class="whiteGroundBlueBtn closeDiaUpload fn-right">取消</button>
		</div>
	</div>
</div>
<!--编辑图片-->