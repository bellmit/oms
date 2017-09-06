<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
    <!-- Main content -->
    <div class="content-wrapper">
	    <div class="ManColTable col-lg-12">
	    	<div class="cashier_box">
	    		<img src="http://base-static.oss-cn-hangzhou.aliyuncs.com/base/images/cashier_img.png" />
	    		<div class="cashier_intro">
	    			<p class="intro_titl">稳定 · 易用 · 全通道智能POS机  </p>
	    			<p>智能收银、快速退换货、管理会员</p>
	    			<p>O2O订单、库存查询</p>
	    		</div>
	    	</div>

	    	<a href="javascript:;" class="btn btn-primary cashier_btn" ng-click="toPcPos()">打开PC收银台</a>
	    </div>
	</div>    


<script type="text/javascript">
	$(function(){
		redirectPro("cashier");
		window.open(qineasy+"pc-pos/public/home.jsp");
	})
</script>

