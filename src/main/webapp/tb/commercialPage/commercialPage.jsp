<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper fn-clear content-wrapper-order content-wrapper-itemshow2 content-wrapper-itemshow2">
	<div class="col-md-11 pageTitl mgb0" style="border:none">
		<h2 class="am-ft-16 fn-left">我的页面</h2>
	</div>
	
	<div class="col-md-11 loadingFormal_border" ng-show="pageCount==0">
		<div class="loadingFormal">
			<img src="../static/base/images/icon_wait.png">
			<span style="font-size: 16px;">代运营未上传页面</span>
		</div>
	</div>
	
	<div class="col-md-11 storeProBox publicImgBox mgl20 pt0" ng-show="pageCount>0">
		<div class="col-md-12 mgb10 select-wrap">
			<label class="storeProLabel"> 
				<input type="checkbox" id="selectAllM" ng-model="selectall" ng-click="doselect('all',pageLists)" /> 
				<span>全选</span>
				</label>
			<a href="javascript:;" class="mgl10" ng-click="downLoadPic()">
				<i class="downLoad-icon" >
					<img src="http://static.qineasy.com/base/images/icon_download.png" />
				</i> 下载
			</a>
		</div>
		<div class="col-md-12 fodderMainRow fodderMainRow4">
			<!--<div class="fodderMain" ng-class="{true:'currentFodderMain'}[selected=='selected']" index="{{$index}}" foldtype="proimg" ng-repeat="pageList in pageLists" ng-model="attr" id="material{{attr.proAttrId}}M">-->
			<div class="fodderMain"   index="{{$index}}" foldtype="proimg" ng-repeat="pageList in pageLists track by $index" ng-model="attr" id="material{{attr.proAttrId}}M">
				<div class="fodderMainImg"  ng-click="doselect('one',this,$index)" style="background-color: #ffffff;margin-top: 8px;">
					<img ng-src="{{pageList.templateImage}}" />
					<div class="cover">
						<a href="javascript:;" class="scan am-ft-white a-dis">预览</a>
						<a href="javascript:;" class="am-ft-white a-dis" ng-click="downloadone(this.pageList)">下载</a>
					</div>
				</div>
				<input id="" type="hidden" class="code_checkbox" />
				<div class="fodderMainInfo" style="text-align: center;line-height: 30px;height:30px;width:160px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
					{{pageList.title}}
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
		<img src="" alt="" id="showImg" />
		<i class="fa fa-angle-right" id="nextImg" style="z-index: 2;"></i>
	</div>
</div>
<!--/图片预览蒙层-->