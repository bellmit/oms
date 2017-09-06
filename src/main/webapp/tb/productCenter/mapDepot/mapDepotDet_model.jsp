<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<div class="content-wrapper content-wrapper-order content-wrapper-itemshow2 content-wrapper-itemshow2">
	<div class="det-top fn-left" ng-if="userInfo.orgType == '6'">
		<img ng-src="{{orgInfo.shopLogo}}" ng-if="orgInfo.shopLogo != '' " >
		<img src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="orgInfo.shopLogo == '' " />
		<h3>{{orgInfo.shopName}}</h3>
		<span>商户添加时间：{{orgInfo.openDate}}</span>
	</div>
	<div class="col-md-11 pageTitl removeBottom storeBasicInfo">
		<div class="col-md-12 storeProLeft" style="border:none">
			<div class="storeProLeftImg fn-left">
				<img ng-src="{{materialMod.mainPic}}" ng-if="materialMod.mainPic != '' " />
				<img src="http://static.qineasy.com/base/images/img_default_goods.png" ng-if="materialMod.mainPic == '' " />
			</div>
			<div class="storeProLeftDetil fn-left">
				<p>{{materialMod.proName}}</p>
				<p class="inDetil">款号：{{materialMod.proModelnum}}</p>
				<p class="inDetil">品牌：{{materialMod.brandName}}</p>
				<span class="">年份：{{materialMod.proYear}}</span>
				<span class="">季节：{{materialMod.proSeason}}</span>
				<span class="">吊牌价：{{materialMod.proPrice}}元</span>
				<span class="">品类：{{materialMod.sortName}}</span>
			</div>
			<a href="javascript:;" class="line-btn  fn-right" ng-click="gobackByRoute()">返回</a>
		</div>
		
	</div>
	<!-- <div class="col-md-11 storeProNavBar fn-clear">
		<div ng-class="{true:'storeSetBackground'}[false]">基本信息</div>
		<div ng-class="{true:'storeSetBackground'}[true]">素材图片</div>
		<div ng-class="{true:'storeSetBackground'}[false]">正式图片库</div>
		<div ng-class="{true:'storeSetBackground'}[false]">pc端标准详情</div>
		<div ng-class="{true:'storeSetBackground'}[false]">手机端标准详情</div>
		<div ng-class="{true:'storeSetBackground'}[false]">发布店铺</div>
	</div> -->
<!--素材管理-->
		<div class="col-md-11 storeProBox publicImgBox mgl20">
			<div class="col-md-12 mgb10 select-wrap">
				<label class="storeProLabel"> 
				<input type="checkbox" id="selectAllM" ng-click="selectAll('M')" /> 
				<span>全选</span>
				</label> 
				<a href="javascript:;" class="mgl10" ng-click="downLoadPic()"> 
				<i class="downLoad-icon">
					<img src="http://static.qineasy.com/base/images/icon_download.png" />
				</i>
					下载选中
				</a>
			</div>
			<div class="col-md-12 fodderMainRow fodderMainRow4">
				<!--上传文件-->
				<div class="fodderMain fodderMain-default" ng-if="userInfo.roleId == '1' || userInfo.roleId == '2'">
					<div class="fodderMainImg">
						<img src="http://static.qineasy.com/base/images/icon_addimg.png" />
					</div>
						<a href="javascript:;">上传文件</a>
					<input type="file" ngf-select="addFilesModel($files)" ngf-multiple="true" />
				</div>
				<!--文件-->
				<div class="fodderMain" index="{{$index}}" foldtype="proimg"  ng-repeat="attr in attrList" ng-model="attr" id="material{{attr.proAttrId}}M">
					<div class="fodderMainImg " ng-click="doSelect(this,'M')">
						<img ng-src="{{attr.proAttrValue}}" />
						<div class="cover" ng-if="userInfo.orgType == '1'">
							<a href="javascript:;" class="scan am-ft-white a-dis">预览</a> 
							<a href="javascript:;" class="am-ft-white a-dis" ng-click="downloadone(this.attr)">下载</a> 
						</div>
						<div class="cover" ng-if="userInfo.orgType == '6'">
							<a href="javascript:;" class="scan am-ft-white mgr20">预览</a> 
							<a href="javascript:;" class="am-ft-white mgr20" ng-click="downloadone(this.attr)">下载</a> 
							<a href="javascript:;" class="delete am-ft-white" ng-click="delImage(attr.proAttrId)">删除</a>
						</div>
						<input id="materialcheck{{attr.proAttrId}}M" type="checkbox" class="code_checkbox" ng-show="false"/>
					</div>
					<input id="" type="hidden" class="code_checkbox" />
					<div class="fodderMainInfo">
						<input type="text" value="{{attr.proAttrFilePath}}"
							class="fodderMainTitle fodderPubEdit" placeholder="" ng-model="attr.proAttrFilePath" ng-blur='updateFolder(this)' />
					</div>
				</div>
			</div>
		</div>
	<!--分页 start-->
	    <div class="pagelist priv-pagelist">
	    	<div id="pagingModel"></div>
	    </div>
	<!--分页 end-->
	
	
	
	
	
	
</div>
  <!--图片预览蒙层-->
<div class="showScanImg" id="showScanImg">
	<div style="position: relative;overflow-y: auto;width:100%;height:100%">
	<i class="fa fa-times-circle" id="closeScanImg" style="position:fixed; top:40px;right:40px;z-index:2"></i>
	<i class="fa fa-angle-left" id="prevImg" style="z-index: 2;"></i>
	<img src="" alt="" id="showImg"/>
	<i class="fa fa-angle-right" id="nextImg" style="z-index: 2;"></i>
	</div>
</div>
  <!--图片预览蒙层-->