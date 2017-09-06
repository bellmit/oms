<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
    <!-- Main content -->
    <div class="content-wrapper">
    <div class="col-lg-11 pageTitl">
        <h2 class="am-ft-16">品牌管理</h2>
    </div>
    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form id="brandForm col-lg-12">
            <div class="table-responsive  brandTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">品牌信息</th>
                        <th scope="col">品牌类型</th>
                        <th scope="col">状态</th>
                        <th scope="col">授权码</th>
                    </tr>
                    <tr ng-repeat="productInfo in brandList">
                        <td class="fn-clear">
                        	<span>{{$index+1}}.</span>
                        	<img ng-src="{{productInfo.logo}}" alt="" />
                        	<div class="productdesc">
                        		<h4><a href="javascript:;">{{productInfo.brandName}}</a></h4>
                        		<p>{{productInfo.brandInfo}}</p>
                        	</div>
                        </td>
                        <td>
                        	{{productInfo.brandJoinType}}
                        </td>
                        <td>      
                        	{{productInfo.brandReviewStatus}}
                        </td>
                        <td>
                        	{{productInfo.brandLicense}}
                        </td>
                    </tr>
                    <tr class="addTr">
                        <td colspan="6">
                            <a href="javascript:;" class="fn-left addLineColor" ng-click="addtr(this)">+&nbsp;添加品牌</a>
                        </td>
                    </tr>
                </table>
                <div class="fn-clear"></div>
            </div>
        </form>
        <div class="fn-clear"></div>
    </div>
    <div class="fn-clear"></div>
</div>
</div>
<!--添加品牌时的选择弹窗-->
<!--添加品牌时的选择弹窗-->
<!--弹框-->
	<div class="maskBga" ng-show="show"></div>
	<div class="sure-to-join" ng-show="show">
		<div class="top clearfix">
			<div class="warning">提示</div>
			<div class="close-log" ng-click="close()">
				<img src="http://static.qineasy.com/base/images/closelogo.png"/>
			</div>
		</div>
		<div class="join-text">
			<p>请选择添加:</p>
		</div>
		<div class="type-select clearfix">
			<a href="javascript:;" class="join-brand" ng-click="ownBrandSelect()">自有品牌</a>
			<a href="javascript:;" class="own-brand" ng-click="joinBrandSelect()">加盟品牌</a>
		</div>
	</div>
<!--添加品牌时的选择弹窗-->
</div>
<jsp:include page="../../public/accredit_join_brand_step_join.jsp"/> 
<jsp:include page="../../public/footstyle.jsp"/> 