<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--品牌管理-->
<!--------------- Content start ----------------->
<div ng-hide="numA!=1">
    <a href="javascript:;" class="line-btn forwardTop-goBack" ng-click="goBack()" ng-if="userInfo.orgType == 6">返回</a>
    <div class="content-wrapper fn-clear content-wrapper-itemshow content-wrapper-itemshow2">
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
            <a href="javascript:;" class="btn btn-primary fn-right" ng-click="goBrandAdd();">添加品牌</a>
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

<div ng-hide="numA!=4">
	<!--代运界面-->
	<div class="content-wrapper content-member-wrapper sku-content-wrapper content-forward-wrapper">
    <div class="col-lg-8">
        <div class="col-md-12 pl0 pr0">
            <h2 class="am-ft-16 fn-left">品牌管理（共{{count}}个商户）</h2>
            <div class="OderlistSearch skulistSearch mgt0 fn-right " ng-if="count>0">
				<!--<div class="">-->
					<div class="fn-clear pl0 pr0" style="width:350px">
						<a href="javascript:;" style="line-height: 14px;" class="fn-right search-button" ng-click="search(shopName)">查询</a>
						<input type="text" class="col-sm-8  agentSearch fn-right" ng-model="shopName"  placeholder="请输入商户名称查询" value="" />
					</div>
					<div class="fn-clear"></div>
				<!--</div>-->
			</div>
        </div>
        <div class="fn-clear"></div>
		<!--缺省-->
		<div class="col-md-12 dafaultWapper" ng-if="count==0">
			<div class="loadingFormal">
				<img src="../static/base/images/icon_wait.png" />
				<span style="font-size: 16px;">暂无记录</span>
			</div>
		</div>
        <!--<div class="listSearch OderlistSearch mgt0" ng-if="count>0">
            <div class="row">
                <div class="col-md-4 searchBox pl0">
                    <input type="text" class="col-sm-10 mgt-8" ng-model="shopName" placeholder="商户名称" value="" />
                    <a href="javascript:;" class="fn-left search-icon" ng-click="search(shopName)">查询</a>
                </div>
                <div class="fn-clear"></div>
            </div>
        </div>-->
        <!-- 品牌列表 -->
        <div class=" col-md-12" style="padding: 0;">
            <div class="productCenterInfo">
                <table class="table table-hover table-striped productTable" ng-if="count>0">
                    <tr>
                        <th width="40%" colspan="2">商户</th>
                        <th width="15%">品牌管理</th>
                    </tr>
                    <!--未分配-->
                    <tr ng-repeat="orgManage in orgManageList" ng-model="orgManage">
                        <td class="orgManageProImgC">
                           <img ng-if="orgManage.shopLogo!=''" ng-src="{{orgManage.shopLogo}}" class="productImg" title="" alt="" />
                           <img ng-if="orgManage.shopLogo==''" src="http://static.qineasy.com/base/images/img_default_company.png" class="productImg" title="" alt="" />
                        </td>
                        <td class="comProducInfo">
                            <p class="productTitl">{{orgManage.shopName}}</p>
                            <p>联系电话：{{orgManage.shopTel}}</p>
                            <p>详细地址：{{orgManage.province}}{{orgManage.city}}{{orgManage.district}}{{orgManage.shopAddr}}</p>
                        </td>
                        <td><a href="javascript:;" ng-click="goBrandDetail(this)">品牌管理</a></td>

                    </tr>
                </table>
                 <!--分页 start-->
			    <div class="pagelist priv-pagelist" ng-show="count > 5">
			    	<div id="pagingMain"></div>    
			    </div>
			    <!--分页 end-->
            </div>
        </div>
        <!-- /品牌列表 -->
    </div>
    <div class="fn-clear"></div>
</div>
</div>
<script type="text/javascript">
	
	function check(obj){
		$(obj).find('.editMask').show();
	}
	
	function checkout(obj){
		$(obj).find('.editMask').hide();
	}
</script>