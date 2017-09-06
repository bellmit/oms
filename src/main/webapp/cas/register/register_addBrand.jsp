  <%@page contentType="text/html" pageEncoding="UTF-8"%>
<!--遮罩 start-->
<!-- Top -->
<div class="contentNav">
    <div class="content-section">
    	<div class="dredge">注册新商户</div>
    	<div class="clearfix set-nav">
    		<div class="set "><span class="set-bgcolor ">1</span>填写商户资料</div>
    		<div class="set line-bottom"><span class="set-bgcolor show-bgcolor">2</span>设置品牌</div>
    		<div class="set"><span class="set-bgcolor">3</span>完成</div>	
    	</div>
    	<div class="line"></div>
    	<div class="content fn-clear">
    		<div class="content-section-center fn-clear " id="brandList">
    			<div class="fn-clear">
    				<div class="brand-total">品牌类型：</div>
	        		<div class="brand-type">
	        			<button class="btn-css"  ng-class="{true:'btn-change'}[btnClass=='active']" ng-click="ownBranda()" >自有品牌</button>     	
	        			<button class="btn-css"  ng-class="{true:'btn-change'}[btnClass=='notactive']" ng-click="joinBranda()">加盟品牌</button>
	        		</div>
    			</div>
    	    <div>   				
    		<!--加盟品牌-->
    		<div ng-show="isJoinBrand">
    		  <div class="join-brand-nav clearfix">
    			<span>品牌信息</span>
    			<span>加盟类型</span>
    			<span>状态</span>
    		   </div>
    		   <div ng-repeat="joinBrandList in joinBrand track by $index" class="content-section-center-second brand-list-backgroung joinBrandInfo fn-clear">
    				 <div class="accredit_brand_join">
    				 	<div class="brand-number">{{$index+1}}.</div>
    				 	<div class="brand-logo joinBrandLogo">
    				 		<img ng-src="{{joinBrandList.logo}}" alt="" />
    				 	</div>
    				 	<div class="brand-details" style="width:295px">
    				 		<p style="text-align: left;">{{joinBrandList.brandName}}</p>
    				 		<p style="word-wrap : break-word;white-space:normal;line-height: 20px;font-size: 14px;text-align: left;height: 60px;overflow: hidden;text-overflow:ellipsis;">{{joinBrandList.brandInfo}}</p>
    				 	</div>
    				 </div>
    				 <div class="accredit_brand_join accredit_brand_offset">
    				 	<p>{{joinBrandList.brandJoinType}}</p>
    				 </div>
    				 <div class="accredit_brand_join accredit_brand_offset">
    				 	{{joinBrandList.brandReviewStatus}}
    				 </div>
	        	</div>

    		</div>
    		<!--自有品牌-->
    		<div ng-show="isOwnBrand">
    		<div class="own-brand-nav" >
    			<span>品牌信息</span>
    			<span>商标代码</span>
    			<span>商标所属人/公司</span>
    			<span>商标注册证书</span>
    		</div>
    		<div class="content-section-center-second brand-list-backgroung fn-clear" ng-repeat="ownBrandList in ownBrand track by $index">
    			<div class="accredit_brand ">
    				 	<div class="brand-number">{{$index+1}}.</div>
    				 	<div class="brand-logo personBrandLogo">
    				 		<img ng-src="{{ownBrandList.logo}}" alt="" />
    				 	</div>
    				 	<div class="brand-details"  style="width:295px">
    				 		<p style="text-align: left;">{{ownBrandList.brandName}}</p>
    				 		<p style="word-wrap : break-word;white-space:normal;line-height: 20px;font-size: 14px;text-align: left;height: 60px;overflow: hidden;text-overflow:ellipsis;">{{ownBrandList.brandInfo}}</p>		
    				 	</div>
    			 </div>
    				 <div class="accredit_brand ">
    				 	<p>{{ownBrandList.brandCode}}</p>
    				 	
    				 </div>
    				 <div class="accredit_brand ">
    				 	<p>{{ownBrandList.brandBelong}}</p>
    				 	
    				 </div>
    				 <div class="accredit_brand brandCer">
    				 	<img ng-src="{{ownBrandList.brandCertificate}}" />
    				 </div>
    			</div>	 
	        </div>
	      </div>
    		 <div class="addBrand-btn" >	        
	            	<button type="button" ng-click="addBrand()">+添加品牌</button>	            
	         </div> 			
	         <div class="content-section-center">        		
    				<button  class="step-gray" ng-click="nextStep()" style="background-color: #012A3C;">下一步</button>

    		 </div>
    		 </div>
    	 </div>
    </div>
<jsp:include page="../../public/accredit_join_brand_step_join.jsp" />
    
</div>	
  </div>

<!---- Content end ---->
<!--添加自有品牌弹框-->

