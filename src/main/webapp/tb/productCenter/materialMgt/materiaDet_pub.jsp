<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="forwardTop-content fn-left" ng-if="userInfo.orgType == '6'">
			<div class="forwardTop-left">
				 <img ng-app="" ng-src="{{orgInfo.shopLogo}}" ng-if="orgInfo.shopLogo != '' " />
                 <img src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="orgInfo.shopLogo == '' " />
			</div>
			<div class="forwardTop-right">
				<div class="forwardTop-righttop">
					<p href="javascript:;" class="forwardTop-rightTitl">{{orgInfo.shopName}}</p>
					<div class="fn-clear"></div>
				</div>
				<p class="am-ft-black">
					<span class="stores-count">店铺数：<a href="javascript:;">{{orgInfo.shopNum}}个</a></span>
					<span class="mgl10">运营人员：{{orgInfo.userName}}<!-- <a href="javascript:;"
						class="mgl5 allotOprate">更换</a> --></span>
				</p>
				<p>联系电话：{{orgInfo.shopTel}}</p>
				<p>
					<span class="fn-left">详细地址：{{orgInfo.province}}{{orgInfo.city}}{{orgInfo.district}}{{orgInfo.shopAddr}}</span> 
					<span class="fn-right am-ft-gray">商户添加时间：{{orgInfo.openDate}}</span>
				</p>
			</div>
		</div>
	<div class="col-lg-12">
		
		<div class="fn-clear"></div>
		<div class="col-md-11 publicImgTitle">
			<div class="col-md-11">
				<p class="am-ft-16 mgt10">公用图片</p>
			</div>
			<div class="col-md-1">
				<button class="whiteGroundBlueBtn mgb10" ng-click="gobackByRoute()">返回</button>
			</div>
		</div>
		<div class="fn-clear"></div>
		<!--缺省-->
		<!--<div class="col-md-11 mgt20 pl0 pr0" ng-if="attrList.length==0">  
					    <div class="col-md-12 dafaultWapper">
							<div class="loadingFormal">
								<img src="../static/base/images/icon_wait.png">
								<span style="font-size:16px;">您还没有为该商品上传任何正式图片<a href="javascript:;">立即上传</a></span>
							</div>
						</div>
				    </div>-->

		<div class="col-md-11 storeProBox publicImgBox">
			<div class="col-md-12 mgb10 select-wrap">
				<label class="storeProLabel">
				<input type="checkbox" id="selectAllP" ng-click="selectAll('P')" /> 
				<span >全选</span>
				</label> 
				<a href="javascript:;" class="morehandles" ng-click="downLoadPic()"> 
					<i class="downLoad-icon">
						<img src="http://static.qineasy.com/base/images/icon_download.png" />
					</i>
					下载选中
				</a>

			</div>
			<div class="col-md-12 fodderMainRow fodderMainRow3">
				<!--新建文件夹-->
				<div class="fodderMain fodderMain-default" id="addFolder" ng-click="addFolderPub()" ng-if="userInfo.roleId == '3' || userInfo.roleId == '4'">
					<div class="fodderMainImg">
						<img src="http://static.qineasy.com/base/images/icon_addfolder.png" />
					</div>
						<a href="javascript:;">新建文件夹</a>
				</div>
				<!--上传文件-->
				<div class="fodderMain fodderMain-default" id="addFilesPub" ng-if="userInfo.roleId == '3' || userInfo.roleId == '4'">
					<div class="fodderMainImg">
						<img src="http://static.qineasy.com/base/images/icon_addimg.png" />
					</div>
						<a href="javascript:;">上传文件</a>
					<input type="file" ngf-select="addFiles($files)" ngf-multiple="true" />
				</div>
				<!--文件夹-->
				<div class="fodderMain"  ng-repeat="attr in attrList" ng-model="attr" ng-if="attr.proAttrValue == ''">
					<div class="fodderMainImg " ng-click="getmateriaDetPubSingle(attr.proAttrId)">
						<img src="http://static.qineasy.com/base/images/icon_newfolder.png" />
						<input id="" type="hidden" class="code_checkbox" />
					</div>
					<div class="fodderMainInfo">
						<input type="text" value="{{attr.proAttrFilePath}}"
							class="fodderMainTitle fodderPubEdit" ng-model="attr.proAttrFilePath" placeholder="" ng-blur='updateFolder(this)'/>
					</div>
				</div>
				<!--文件-->
				<div class="fodderMain" index="{{$index}}" foldtype="proimg" ng-model="attr" ng-repeat="attr in attrList" ng-if="attr.proAttrValue != ''" id="material{{attr.proAttrId}}P">
					<div class="fodderMainImg " ng-click="doSelect(this,'P')" >
						<img ng-src="{{attr.proAttrValue}}" />
						<div class="cover" ng-if="userInfo.orgType == '6'">
							<a href="javascript:;" class="scan am-ft-white a-dis">预览</a>
							<a href="javascript:;" class="am-ft-white a-dis"  ng-click="downloadone(this.attr)">下载</a> 
						</div>
						<div class="cover" ng-if="userInfo.orgType == '1'">
							<a href="javascript:;" class="scan am-ft-white mgr20">预览</a>
							<a href="javascript:;" class="am-ft-white mgr20"  ng-click="downloadone(this.attr)">下载</a> 
							<a href="javascript:;" class="delete am-ft-white" ng-click="delImage(attr.proAttrId)">删除</a>
						</div>
						<input id="materialcheck{{attr.proAttrId}}P" type="checkbox" class="code_checkbox" ng-show="false"/>
					</div>
					<input id="" type="hidden" class="code_checkbox" />
					<div class="fodderMainInfo">
						<input type="text" value="{{attr.proAttrFilePath}}"
							class="fodderMainTitle fodderPubEdit" ng-model="attr.proAttrFilePath" placeholder="" ng-blur='updateFolder(this)'/>
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
    <!--图片预览蒙层-->
<div class="showScanImg" id="showScanImg">
	<div style="position: relative;overflow-y: auto;width:100%;height:100%">
	<i class="fa fa-times-circle" id="closeScanImg" style="position:fixed; top:40px;right:40px"></i>
	<i class="fa fa-angle-left" id="prevImg"></i>
	<img src="" alt="" id="showImg"/>
	<i class="fa fa-angle-right" id="nextImg"></i>
	</div>
</div>
<!--/图片预览蒙层-->
