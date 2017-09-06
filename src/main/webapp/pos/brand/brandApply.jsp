<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
   <!-- Main content -->
    <div class="content-wrapper newbrand-wrapper">
    	<!--------我的品牌-------->
	    <div class="col-md-11 pageTitl">
	        <h2 class="am-ft-16 fn-left">我的品牌（2）</h2>
	    </div>
	    <!-- Main content -->
	    <div class="ManColTable col-lg-12">
	    	<!--<div class="new-mybrand">-->
	    		<!--自有-->
	    		<!--<div class="brand-item">
	    			<div class="brand-item-top">
	    				<a href="javascript:;"><img src="http://static.qineasy.com/base/images/img_default_brand.png" /></a>
	    				<a href="javascript:;" class="brand-titl">长颈鹿</a>
	    				<p>自有品牌</p>
	    			</div>
	    			<div class="brand-item-mid">福建柒牌集团有限公司，始创于1979年，经过三十余载的创业、发展，现已成为一家以服饰研究、设计和制造...</div>
	    			<p>
	    				<span class="am-ft-black fn-left mgl10">授权码：149C9DBT</span>
	    				<a href="javascript:;" class="fn-right mgr10">查看详情</a>
	    			</p>
	    			<img class="icon-brand-type" src="http://static.qineasy.com/base/images/icon_brand_self.png" />
	    		</div>-->
	    		<!--加盟-->
	    		<!--<div class="brand-item">
	    			<div class="brand-item-top">
	    				<a href="javascript:;"><img src="http://static.qineasy.com/base/images/img_default_brand.png" /></a>
	    				<a href="javascript:;" class="brand-titl">唐狮</a>
	    				<p>自主加盟品牌</p>
	    			</div>
	    			<div class="brand-item-mid">唐狮以“打造同行业最优秀品牌”为己任。唐狮将继续以时尚的设计和强有力的品牌推广，打造具有强势竞争力...</div>
	    			<p>
	    				<span class="am-ft-black fn-left mgl10">授权码：149C9DBT</span>
	    				<a href="javascript:;" class="fn-right mgr10">查看详情</a>
	    			</p>
	    			<img class="icon-brand-type" src="http://static.qineasy.com/base/images/icon_brand_join.png" />
	    		</div>-->
	    		<!--待审核-->
	    		<!--<div class="brand-item brand-item-wait">
	    			<div class="brand-item-top">
	    				<img src="http://static.qineasy.com/base/images/img_default_brand.png" />
	    				<p class="brand-titl">西西小可</p>
	    				<p>授权加盟品牌</p>
	    				<p>授权方：杭州勤易科技有限公司</p>
	    			</div>
	    			<p class="impower-tip">等待授权方审核</p>	   			
	    		</div>-->
	    		<!--添加品牌-->
	    		<!--<div class="brand-item brand-item-add">
	    			<a href="javascript:;" ng-click="addtr(this)">+&nbsp;添加品牌</a>    				   			
	    		</div>
	    		<div class="fn-clear"></div>-->
	    	<!--</div>-->
	    	
	    	<!-----------品牌授权申请审核------------>
	    	<!--<div class="col-md-11 pageTitl">
		        <h2 class="am-ft-16 fn-left">品牌授权申请审核（7）</h2>
		    </div>-->
		    <!--<div class="newBrandTable">
		    	<table class="table table-hover table-striped">
		    		<tr>
		    			<th>品牌名称</th>
		    			<th>申请商户</th>
		    			<th>申请时间</th>
		    			<th>操作</th>
		    		</tr>
		    		<tr class="activeUse">
		    			<td><img src="http://static.qineasy.com/base/images/img_default_brand.png" />长颈鹿</td>
		    			<td>宁波小美服饰有限公司</td>
		    			<td>2016-11-2  10:30</td>
		    			<td>
		    				<a href="javascript:;" class="line-btn fn-left">拒绝</a>
		    				<a href="javascript:;" class="fn-left btn btn-primary">通过</a>
		    			</td>
		    		</tr>
		    		<tr>
		    			<td><img src="http://static.qineasy.com/base/images/img_default_brand.png" />长颈鹿</td>
		    			<td>宁波小美服饰有限公司</td>
		    			<td>2016-11-2  10:30</td>
		    			<td class="am-ft-green">已通过</td>
		    		</tr>
		    		<tr class="unUse">
		    			<td><img src="http://static.qineasy.com/base/images/img_default_brand.png" />长颈鹿</td>
		    			<td>宁波小美服饰有限公司</td>
		    			<td>2016-11-2  10:30</td>
		    			<td>已拒绝</td>
		    		</tr>
		    	</table>
		    </div>-->
	        <form id="brandForm">
	            <div class="table-responsive  brandTable ">
	
	                <table class="table table-hover table-striped table-bordered">
	                    <tr>
	                        <th scope="col" class="col-lg-3">品牌名称</th>
	                        <th scope="col" class="col-lg-3">申请方名称</th>
	                        <th scope="col" class="col-lg-3">审核状态</th>
	                        <th scope="col" class="col-lg-3">操作</th>
	                    </tr>
	                   <tr ng-repeat="apply in applys" ng-model="apply" >
	                        <td id="brandName">
	                       
	                        <input type="hidden"  value="{{apply.brandId}}" disabled />
	                        	{{apply.brandName}}
	                        </td>
	                        <td>
	                       
								{{apply.applyOrgName}}
							</td>
	                        <td>
	                        
	                        	<input   value="待审核" ng-if="apply.brandApplyStatus == 1" class="brandCheck"  disabled />
	                       		<input   value="已通过" ng-if="apply.brandApplyStatus == 2" class="brandPass" disabled />
	                       		<input   value="已拒绝" ng-if="apply.brandApplyStatus == 3" class="brandRefused" disabled />
	                        </td>
	                        <td ng-if="apply.brandApplyStatus == 1">
	                        	<div class="brandBtnCenter fn-clear">
	                        		 <button type="button" class="brandBtnPass   fn-left" ng-click="adopted(this)">通过</button>
	                                 <button type="button" class="brandBtnRefused  fn-left "  ng-click="refused(this)">拒绝</button>
	                        	</div>
	                          
	                        </td>
	                        <td ng-if="apply.brandApplyStatus != 1">
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

<!--添加品牌弹窗-->
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
<!--/添加品牌弹窗-->

<jsp:include page="../../public/accredit_join_brand_step_join.jsp"/> 
<jsp:include page="../../public/footstyle.jsp"/> 