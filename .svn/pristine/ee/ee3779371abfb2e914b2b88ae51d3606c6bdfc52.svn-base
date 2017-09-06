<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">修改密码</h2>
    </div>
    <div class="fn-clear"></div>
	<form id="alertPassForm">
	    <!-- Main content -->
	    <section class="container-fluid">
	        <div class="row">
	            <div class="prodet-nav prodet-content">
	                <div class="prodet-box pl0">
	                    <!-- row1 -->
	                    <div class="col-md-12 mgt20">
	                        <div class="col-md-1 inprodet-titl am-ft-14 mgt10">原密码:</div>
	                        <div class="col-md-3 form-group needValInfo">
	                            <input type="text" onfocus="this.type='password'" autocomplete="off" class="col-md-7 text-overflow" name="password"  ng-model="password.password" required/>
	                        </div>
	                    </div>
	                    <!-- row2 -->
	                    <div class="col-md-12">
	                        <div class="col-md-1 inprodet-titl am-ft-14 mgt10">新密码:</div>
	                        <div class="col-md-3 form-group needValInfo">
	                            <input type="text" onfocus="this.type='password'" autocomplete="off" ng-blur="checkNewPassWord2()" class="col-md-7 text-overflow" name="newPassWord" ng-model="password.newPassWord" required/>
	                        	<small class="error" ng-show="newPassWordWarn3">原密码不能与新密码一样</small>
	                        </div>
	                    </div>
	                    <!--row3-->
	                    <div class="col-md-12">
	                        <div class="col-md-1 inprodet-titl am-ft-14 mgt10">确认密码:</div>
	                        <div class="col-md-3 form-group needValInfo">
	                            <input type="text" onfocus="this.type='password'" autocomplete="off" ng-blur="checkNewPassWord2()" class="col-md-7 text-overflow" name="newPassWord2" ng-model="password.newPassWord2" required/>
		                        <small class="error" ng-show="newPassWordWarn2">请确认密码一致</small>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <button type="button" class="btn btn-primary postProInfo fn-left" ng-click="alertPas()">确认修改</button>
	    </section>
	</form>
</div>

</div>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
<script>
	$(function(){
		var formArray=[];
    	formArray.push('{"alertPassForm":"/user/editPassWord"}');
    	initValidate(formArray,cas);
	})
</script>