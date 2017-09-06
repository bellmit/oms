<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->


<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">添加人员</h2>
    </div>
    <div class="fn-clear"></div>
	<form id="managerUserForm">
	    <!-- Main content -->
	    <section class="container-fluid">
	        <div class="row">
	            <div class="prodet-nav prodet-content">
	                <div class="prodet-box">
	                    <!-- row1 -->
	                    <div class="row">
	                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>手机号:</div>
	                        <div class="col-md-4 form-group needValInfo">
	                            <input type="text" class="col-md-6 text-overflow" ng-blur="checkUserName()" name="userName" placeholder="手机号" ng-model="manager.userName"/>
		                        <small class="error" ng-show="userNameWarn">该用户已存在！</small>
	                        </div>
	                    </div>
	                    <!-- row2 -->
	                    <div class="row">
	                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>姓名:</div>
	                        <div class="col-md-4 form-group needValInfo">
	                            <input type="text" class="col-md-6 text-overflow" name="trueName" placeholder="姓名" ng-model="manager.trueName"/>
	                        </div>
	                    </div>
	                    <!--row4-->
	                    <div class="row">
	                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>初始密码:</div>
	                        <div class="col-md-4 form-group needValInfo">
	                            <input type="text" onfocus="this.type='password'" autocomplete="off" class="col-md-6 text-overflow" name="password" placeholder="" ng-model="manager.password"/>
	                        </div>
	                    </div>
	                    <!-- row5 -->
	                    <div class="row">
	                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>职位:</div>
	                        <div class="col-md-2 form-group needValInfo">
	                            <select class="col-md-12" name="roleId" ng-model="manager.roleId">
	                                <option value=""></option>
	                                <option ng-repeat="role in roles" value="{{role.roleId}}">{{role.roleName}}</option>
	                            </select>
	                        </div>
	                    </div>
	                    <!-- row6 -->
	                    <div class="row">
	                        <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>店铺/商户:</div>
	                        <div class="col-md-2 form-group needValInfo">
	                            <select class="col-md-12" name="orgId" ng-model="manager.orgId">
	                                <option value=""></option>
                               		<option ng-repeat="org in orgList" value="{{org.orgId}}">{{org.shopName}}</option>
	                            </select>
	                        </div>
	                    </div>
	
	                    <div class="fn-clear"></div>
	                </div>
	            </div>
	        </div>
	        <button type="button" class="btn btn-primary fn-left mgl60" ng-click="add()">保存</button>
	        <button type="button" class="btn btn-default mgl10" ng-click="returnhome()">返回</button>
	    </section>
    </form>
    <!-- /Main content -->
</div>

</div>


<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
<script>
	 $(function(){
		var formArray=[];
    	formArray.push('{"managerUserForm":"/user/addUserOrg"}');
    	initValidate(formArray,cas);
	})
	function back(){
		window.location.href="#/managerUser";
	}
</script>