<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">修改人员</h2>
    </div>
    <div class="fn-clear"></div>
	<form id="updatemanagerUserForm">
	    <!-- Main content -->
	    <section class="container-fluid">
	        <div class="row">
	            <div class="prodet-nav prodet-content">
	                <div class="prodet-box">
	                    <!-- row1 -->
	                    <div class="row">
	                        <div class="col-md-1 inprodet-titl am-ft-14">用户名:</div>
	                        <div class="col-md-4 form-group needValInfo">
	                            <label type="text" class="col-md-6 text-overflow"   disabled >{{manager.userName}}</label>
	                        </div>
	                    </div>
	                    <!-- row2 -->
	                    <div class="row">
	                        <div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>姓名:</div>
	                        <div class="col-md-4 form-group needValInfo">
	                            <input type="text" class="col-md-6 text-overflow" name="trueName" ng-model="manager.trueName"/>
	                        </div>
	                    </div>
	                    <!-- row5 -->
	                    <div class="row">
	                        <div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>职位:</div>
	                        <div class="col-md-2 form-group needValInfo">
	                           <select class="col-md-12" name="roleId" ng-model="roleId" ng-options="role.roleId as role.roleName for role in roles">
	                                <!--<option ng-repeat="role in roles" value="{{role.roleId}}">{{role.roleName}}</option>-->
	                            </select>
	                        </div>
	                    </div>
	                    <!-- row6 -->
	                    <div class="row">
	                        <div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>店铺:</div>
	                        <div class="col-md-2 form-group needValInfo">
	                        	<input type="text" disabled="disabled" value="{{orgName}}" />
	                            <!--<select class="col-md-12" name="orgId" ng-model="manager.orgId">
	                            	  <option value=""></option>
                                	  <option ng-repeat="org in orgList" value="{{org.orgId}}">{{org.shopName}}</option>
	                            </select>-->
	                        </div>
	                    </div>
	
	                    <div class="fn-clear"></div>
	                </div>
	            </div>
	        </div>
	        <button type="button" class="btn btn-primary fn-left mgl60" ng-click="update()">确认修改</button>
	        <button type="button" class="btn btn-default mgl10" ng-click="returnhome()">返回</button>
	    </section>
    </form>
    <!-- /Main content -->
</div>
</div>
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
<script>
	function back(){
		window.location.href="#/managerUser";
	}
	$(function(){
		var formArray=[];
    	formArray.push('{"updatemanagerUserForm":"/user/updateUser"}');
    	initValidate(formArray,cas);
	})
</script>
