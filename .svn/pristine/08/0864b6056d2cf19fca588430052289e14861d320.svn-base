<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<a href="javascript:;" class="line-btn forwardTop-goBack" ng-click="gobackByRoute()" ng-if="userInfo.orgType == '6'">返回</a>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="forwardTop-content fn-left" ng-if="userInfo.orgType == '6'">
		<div class="forwardTop-left">
			<img ng-src="{{orgInfo.shopLogo}}" ng-if="orgInfo.shopLogo != '' " />
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
	<div class="ManColTable col-lg-12">
		<!--<div class="fn-clear"></div>-->
		<!-- <p class="am-ft-14 am-ft-black">共{{countFolder}}个商品素材</p> -->
		<div class="table-responsive  mgt15">
			<ul>
				<li class="folder-item">
					<a href="javascript:;" ng-click="getmateriaDetPub(this)">
						<img class="folderImg" src="../static/base/images/icon_folder.png" />
						<p class="folderName">公共图片</p>
						<img class="imgPub-icon" src="http://static.qineasy.com/base/images/imgPub.png" />
					</a>
				</li>
				<li class="folder-item" ng-repeat="model in modelList" ng-model="model">
					<a href="javascript:;" ng-click="getmateriaDetModel(this)">
						<img class="folderImg" src="../static/base/images/icon_folder.png" />
						<p class="folderName">{{model.proModelnum}}</p>
					</a>
				</li>
				<li class="fn-clear"></li>
			</ul>
		</div>
		<!--分页 start-->
		<div class="pagelist priv-pagelist">
			<div id="pagingFolder"></div>
		</div>
		<!--分页 end-->
		<!--<div class="fn-clear"></div>-->
	</div>
	<div class="fn-clear"></div>
	<!--------------- /Content end ----------------->
</div>


