<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="col-lg-12">
		<div class="fn-clear"></div>
		<div class="col-md-11 publicImgTitle">
			<div class="col-md-11">
				<p class="am-ft-16 mgt10">公用图片</p>
			</div>
			<div class="col-md-1">
				<button class="whiteGroundBlueBtn mgb10" ng-click="goback()">返回</button>
			</div>
		</div>
		<div class="fn-clear"></div>
		<div class="col-md-11 storeProBox publicImgBox">
			<!---- 移动弹窗 ---->
			<div class="handleDialog moveDialog fn-hide">
				<h3>移动到<i class="fa fa-close closeHandle"></i></h3>
				<ul>
					<li ng-repeat="fol in attrListFolder" ng-click="moveImages(fol.proAttrId)"><i class="fa fa-folder"></i>{{fol.proAttrFilePath}}</li>
				</ul>
			</div>
			<!---- /移动弹窗 ---->
			<div class="col-md-12 mgb10 select-wrap">
				<label class="storeProLabel">
				<input type="checkbox" id="selectAll" ng-click="selectAll()" /> 
				<span>全选</span>
				</label>
				<a href="javascript:;" class="mgl10 mgr15" ng-click="downLoadPic()">
					<i class="downLoad-icon">
						<img src="http://static.qineasy.com/base/images/icon_download.png" />
					</i> 下载
				</a>
				<span class="divline" ng-if="userInfo.roleId == '1'">|</span>
				
				<a href="javascript:;" ng-if="userInfo.roleId == '1'" class="morehandles shareHandle" ng-click="cancelShare()"> 
					<i class="fa fa-share-alt"></i>
					取消共享
				</a>
				<a href="javascript:;" class="morehandles moveHandle" ng-click="getFolderFile()"> 
					<i class="fa fa-exchange"></i>
					移动
				</a>
				
			</div>
			<div class="col-md-12 fodderMainRow fodderMainRow3">
				<!--文件-->
				<div class="fodderMain"  index="{{$index}}" foldtype="proimg" ng-model="attr" ng-repeat="attr in attrList" ng-if="attr.proAttrValue != ''" id="material{{attr.proAttrId}}">
					<div class="fodderMainImg " ng-click="doSelect(this)">
						<img ng-src="{{attr.proAttrValue}}" />
						<div class="cover">
							<a href="javascript:;" class="scan am-ft-white a-dis">预览</a>
							<a href="javascript:;" class="am-ft-white a-dis" ng-click="downloadone(this.attr)">下载</a>
						</div>
						<input id="materialcheck{{attr.proAttrId}}" type="checkbox" class="code_checkbox" ng-show="false" />						
					</div>				
					<input id="" type="hidden" class="code_checkbox" />
					<div class="fodderMainInfo">
						<input type="text" value="{{attr.proAttrFilePath}}" class="fodderMainTitle fodderPubEdit" ng-model="attr.proAttrFilePath" placeholder="" ng-blur='updateFolder(this)' />
					</div>
				</div>
			</div>
		</div>
		<!--分页 start-->
		<div class="pagelist priv-pagelist">
			<div id="pagingPub"></div>
		</div>
		<!--分页 end-->
		<!--<div class="fn-clear"></div>-->
	</div>
	<div class="fn-clear"></div>
	<!--------------- /Content end ----------------->
	
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
<script type="text/javascript">
	//显示分享、移动弹窗
	/* $('.moveHandle').click(function(){
		$('.moveDialog').show();
	}); */
	
	//关闭分享、移动弹窗
	$('.closeHandle').click(function(){
		$('.handleDialog').hide();
	});
	
</script>