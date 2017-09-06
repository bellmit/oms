<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
   <!--content-->
 <div class="content-wrapper content-wrapper-order">
    	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">加入云仓分享联盟</h2>
	    </div>
         <div class="col-md-12 joinNav">
            <div class="joinUion01 ">
            	<span class="joinUNav1">1</span>
            	<span class="joinUNav2">加入联盟</span>
            </div> 
            <div class="joinUion02 ">
            	<span class="joinUNav1">2</span>
            	 <span class="joinUNav2">选择成员</span>
            </div> 
            <div class="joinUion03 joinUion03active">
            	<span class="joinUNav1 activespan">3</span>
            	<span class="joinUNav2">完成</span>    
            </div>          
        </div>
        <div class="fn-clear"></div>
        <div class="col-md-11 join-titl-note joinCpt">
        <p > 
        	<span class="joinMber">成功加入联盟：</span><span>{{cloudName}}&nbsp;&nbsp;</span>
        	<span class="joinMber">品牌：</span><span>{{brandName}}&nbsp;&nbsp;</span>
        	<span class="joinMber">创建商户：</span><span>{{shopName}}</span>
        </p>
        <p >共加入<span ng-if="allSelect">{{counts}}</span>
        	    <span ng-if="partSelect">{{selectedCounts}}</span>
        	个成员，<a href="javascript:;" ng-click="scanJoinedMemberA()"><span>查看加入成员</span></a></p>
        </div>
        <div class="col-md-11 joinCptSet">
               <p>您还没有设置商品的结算价，<a href="javascript:;" ><span>立即设置结算价</span></a></p>
               <p>您还没有设置商品的库存，<a href="javascript:;" ><span>立即设置库存</span></a></p>          
         </div>
          <div class="fn-clear"></div>      
    </div>
      <!-- /content -->