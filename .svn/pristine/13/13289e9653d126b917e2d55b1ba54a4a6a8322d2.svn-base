<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--品牌管理-->
<!--------------- Content start ----------------->
<div>
    <a href="javascript:;" class="line-btn forwardTop-goBack" ng-click="goback()" ng-if="userInfo.orgType == 6">返回</a>
    <div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
          <div class="forwardTop-content" ng-if="userInfo.orgType == 6">
			<div class="forwardTop-left">
				 <img ng-src="{{orgManage.shopLogo}}" ng-if="orgManage.shopLogo != '' " />
                 <img src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="oneOrgManage.shopLogo == '' " />
			</div>
			<div class="forwardTop-right">
				<div class="forwardTop-righttop">
					<p href="javascript:;" class="forwardTop-rightTitl">{{orgManage.shopName}}</p>
					<div class="fn-clear"></div>
				</div>
				<p class="am-ft-black forwardTop-middle">
					<span class="stores-count">店铺数：<a href="javascript:;">{{orgManage.shopNum}}</a>个</span>
					<span class="mgl10">运营人员：{{orgManage.userName}}
						<!--<a href="javascript:;" class="mgl5 allotOprate">更换</a></span>-->
				</p>
				<p class="fn-clear">
					<span class="fn-left">联系电话：{{orgManage.shopTel}}</span>
					<span class="fn-left mgl35">详细地址：{{orgManage.province}}{{orgManage.city}}{{orgManage.district}}{{orgManage.shopAddr}}</span> 
					<span class="fn-right am-ft-gray">商户添加时间：{{orgManage.openDate}}</span>
				</p>
			</div>
		</div>  
            
            
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">品牌管理</h2>
            <a href="javascript:;" class="btn btn-primary fn-right" ng-click="addBrandShow();">添加品牌</a>
        </div>
        <div class="fn-clear"></div>
        <div class="ManColTable col-lg-12">
            <ul>
                <li class="folder-item brand-item" ng-repeat="brand in brandList" onmouseover="check(this);" onmouseout="checkout(this);">
                    <img ng-if="brand.logo=='../static/base/images/icon_upload.png'" class="folderImg"  src="http://static.qineasy.com/base/images/img_default_brand.png" />
                    <img ng-if="brand.logo!='../static/base/images/icon_upload.png'" class="folderImg"  ng-src="{{brand.logo}}" />
                    <p class="folderName">{{brand.brandName}}</p>
                    <a href="javascript:;" class="editMask" ng-click="editBrandShow(brand.brandId,brand.brandName,brand.logo)">编辑</a>
                </li>
                <li class="fn-clear"></li>
            </ul>
            <div class="fn-clear"></div>
        </div>
    </div>
    <div class="fn-clear"></div>
    </div>
</div>
<!--品牌管理-->