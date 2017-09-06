<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">编辑会员信息</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="goback('memberEdit')">返回</a>
	</div>
	<div class="fn-clear"></div>
	<!-- Main content -->
	<section class="container-fluid">
		<form id="updatememberForm">
			<div class="row">
				<div class="prodet-nav prodet-content">
					<div class="prodet-box">
						<!-- row1 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">头像:</div>
							<div class="col-md-3 form-group memImg needValInfo">
								<input type="file" ngf-select="uploadHeadpicPath($files)" /> 
								<img class="media-object" ng-src="{{member.headpicpath}}" ng-model="member.headpicpath" width="80" alt="请选择头像" id="headpicpath">
							</div>
						</div>
						<!--row2-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>手机号:</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="telphone" placeholder="手机号" ng-value="member.telphone" ng-model="member.telphone" readonly="readonly" />
							</div>
						</div>
						<!-- row3 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>姓名:</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="trueName"
									placeholder="姓名" value="" ng-model="member.name" />
							</div>
						</div>
						<!-- row4 -->
						<div class="row addMember-row">
							<div class="nowraps-text mgb0 inprodet-titl am-ft-14">性别:</div>
							<div class="col-md-3 form-group mgb0 needValInfo">
								<div class="col-md-5">
                                    <label class="radio-inline">
                                        <input class="searchtp" type="radio" name="sex" ng-model="member.sex" value="M" /> 男
                                    </label>
								</div>
								<div class="col-md-5">
                                    <label class="radio-inline">
                                        <input class="searchtp" type="radio" name="sex" ng-model="member.sex" value="F" /> 女
                                    </label>
								</div>
							</div>
						</div>
						<!-- row5 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>生日:</div>
							<div class="col-md-3 form-group needValInfo">
								<input class="fn-left" type="text" ng-model="member.birthday" id="updatebirthday" name="birthday"
									onclick="laydate()" value="" placeholder="出生日期" />
							</div>
						</div>
						<!-- row6 -->
						<div class="row Pro-Sorts">
							<div class="nowraps-text inprodet-titl am-ft-14">通讯地址:</div>
							<div class="col-md-8 form-group needValInfo">
								<select class="col-md-3" ng-model="member.province" ng-change="member.city='';member.district='';initprovinces()" >
									<option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
								</select>
								 <select class="col-md-3" ng-model="member.city" ng-change="member.district='';initcitys()" >
									<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
								</select>  
								<select class="col-md-3" ng-model="member.district" >
									<option ng-repeat="district in districts[cityId]" value="{{district.name}}">{{district.name}}</option>
								</select>  
							</div>
						</div>
						<!----row7---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>详细地址:</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name=""
									placeholder="详细地址" value="" ng-model="member.address" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<button type="button" class="btn btn-primary fn-left mgl60" ng-click="updateMember(member)">确认</button>
		<button type="button" class="btn btn-default mgl10" ng-click="returnMember('editMember')">取消</button>
	</section>

</div>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />

<script type="text/javascript">
	function returnMember(){
    	window.location.href="#/member";
    }


</script>
