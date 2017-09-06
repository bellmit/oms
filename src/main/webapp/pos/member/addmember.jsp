<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">添加会员</h2>
	</div>
	<div class="fn-clear"></div>
	<!-- Main content -->
	<section class="container-fluid">
		<form id="memberForm">
			<div class="row">
				<div class="prodet-nav prodet-content">
					<div class="prodet-box">
						<!-- row1 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">头像:</div>
							<div class="col-md-3 form-group memImg needValInfo">
								<input type="file" ngf-select="uploadHeadpicPath($files)" /> <img
								class="media-object" src="page/../../static/base/images/large.png" width="80" alt="请选择头像" id="headpicpath">
							</div>
						</div>
						<!-- row2 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>会员号:</div>
							<div class="col-md-4 form-group needValInfo">
								<input type="text" class="col-md-6 text-overflow" name="memberNo"
									placeholder="会员号" ng-blur="checkMember()" value="" ng-model="member.memberNo" />
								<small class="error col-md-5" ng-show="memberNoWarn">该会员已存在！</small>
							</div>
						</div>
						<!-- row3 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>会员卡类型:</div>
							<div class="col-md-2 form-group needValInfo">
								<select class="col-md-12" ng-model="grade" name="gradeName"
									ng-options="grade.gradeName for grade in gradeTypes" >
									<option value="">请选择</option>
								</select>								
							</div>
						</div>
						<!--row4-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>手机号:</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="telphone"
									placeholder="手机号" value="" ng-model="member.telphone" />
							</div>
						</div>
						<!-- row5 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>姓名:</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="trueName"
									placeholder="姓名" value="" ng-model="member.name" />
							</div>
						</div>
						<!-- row6 -->
						<div class="row">
							<div class="nowraps-text mgb0 inprodet-titl am-ft-14">性别:</div>
							<div class="col-md-3 form-group mgb0 needValInfo">
								<div class="col-md-5">
									<input type="radio" class="col-md-4 text-overflow" name="sex"
										ng-model="member.sex" value="M" /> <label>男</label>
								</div>
								<div class="col-md-5">
									<input type="radio" class="col-md-4 text-overflow" name="sex"
										ng-model="member.sex" value="F" /> <label>女</label>
								</div>
							</div>
						</div>
						<!-- row7 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>生日:</div>
							<div class="col-md-3 form-group needValInfo">
								<input class="fn-left" type="text" id="birthday" name="birthday"
									onclick="laydate()" readonly="readonly" value=""
									placeholder="出生日期" />
							</div>
						</div>
						<!-- row8 -->
						<div class="row Pro-Sorts">
							<div class="nowraps-text inprodet-titl am-ft-14">通讯地址:</div>
							<div class="col-md-8 form-group needValInfo">
								<select class="col-md-3"
									ng-options="province.name for province in provinces"
									ng-model="province"
									ng-change="member.city='';member.district='';" ></select> 
								<select
									class="col-md-3"
									ng-options="city.name for city in citys[province.id]"
									ng-model="city" ng-change="member.district='';" ></select>  
								<select
									class="col-md-3"
									ng-options="district.name for district in districts[city.id]"
									ng-model="district" ></select> 
							</div>
						</div>
						<!----row9---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>详细地址:</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name=""
									placeholder="详细地址" value="" ng-model="member.address" />
							</div>
						</div>
						<!-- row10 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>导购:</div>
							<div class="col-md-2 form-group needValInfo">
								<select class="col-md-12" name="guide" ng-model="member.salesId" >
									<option value="">请选择</option>
									<option ng-repeat="guide in guides" value="{{guide.userId}}">{{guide.trueName}}</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<button type="button" class="btn btn-primary fn-left mgl60"
			ng-click="addMember()">确认</button>
		<button type="button" class="btn btn-default mgl10"
			ng-click="returnMember()">返回</button>
	</section>

</div>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />

<script type="text/javascript">
	function returnMember(){
    	window.location.href="#/member";
    }
    $(function(){
		var formArray=[];
    	formArray.push('{"memberForm":"/member/addMember"}');
    	initValidate(formArray,pos);
	})
</script>
