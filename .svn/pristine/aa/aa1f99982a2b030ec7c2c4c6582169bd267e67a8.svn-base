<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">添加会员</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="goback('addmember')">返回</a>
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
                                <input type="file" ngf-select="uploadHeadpicPath($files)" />
                                <img class="media-object" src="page/../../static/base/images/large.png" width="80" alt="请选择头像" ng-model="addmember.headpicpath" id="addheadpicpath">
							</div>
						</div>
						<!-- row2 -->
						<!-- row3 -->
						<!--row4-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>手机号:</div>
							<div class="col-md-6 form-group needValInfo">
								<input type="text" class="col-md-4 text-overflow mgr5" name="telphoneadd" placeholder="手机号" ng-value="addmember.telphone" ng-model="addmember.telphone" ng-blur="checkMember()"/>
								<span class="error" ng-show="memberWarn">该会员已存在！</span>
							</div>
						</div>
						<!-- row5 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>姓名:</div>
							<div class="col-md-6 form-group needValInfo">
								<input type="text" class="col-md-4 text-overflow" name="trueName"
									placeholder="姓名" value="" ng-model="addmember.name" />
							</div>
						</div>
						<!-- row6 -->
						<div class="row addMember-row">
							<div class="nowraps-text mgb0 inprodet-titl am-ft-14">性别:</div>
							<div class="col-md-3 form-group mgb0 needValInfo">
								<div class="col-md-5">
                                    <label class="radio-inline">
                                        <input class="searchtp" type="radio" name="sex" ng-model="addmember.sex" value="M" /> 男
                                    </label>
								</div>
								<div class="col-md-5">
                                    <label class="radio-inline">
                                        <input class="searchtp" type="radio" name="sex" ng-model="addmember.sex" value="F" /> 女
                                    </label>
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
                                <select class="col-md-3" ng-options="province.name for province in provinces" ng-model="province" ng-change="addmember.city='';addmember.district='';" ></select>
                                <select class="col-md-3" ng-options="city.name for city in citys[province.id]" ng-model="city" ng-change="addmember.district='';" ></select>
                                <select class="col-md-3" ng-options="district.name for district in districts[city.id]" ng-model="district" ></select>
                            </div>
						</div>
						<!----row9---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">
								<!--<em class="am-ft-red mgr5">*</em>-->
								详细地址:</div>
							<div class="col-md-8 form-group needValInfo">
								<input type="text" class="col-md-10 text-overflow" name="" placeholder="详细地址" value="" ng-model="addmember.address" />
							</div>
						</div>
						<!-- row10 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>导购:</div>
							<div class="col-md-2 form-group needValInfo">
								<select class="col-md-12 guide_selc" name="guide" ng-model="selectguide">
									<option value="">请选择</option>
									<option ng-repeat="guide in guides" value="{{guide.userId}}">{{guide.trueName}}</option>
								</select>
							</div>
						</div>
                        <!-- row11 -->
                        <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14">会员卡信息:</div>
                            <div class="col-md-10 form-group pro-property">
                                <div class="row">
                                    <div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>会员卡类型:</div>
                                    <div class="col-md-4 form-group needValInfo">
                                        <select class="col-md-10" ng-model="selectgrade" name="gradeName"  >
                                            <option ng-value="">请选择</option>
                                            <option ng-repeat="gradeType in gradeTypes" value="{{gradeType.gradeId}},{{gradeType.memberUnionId}}">{{gradeType.memberUnionName}}<span ng-if="gradeType.memberUnionName!=''">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{gradeType.gradeName}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row addMember-row">
                                    <div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>会员卡号:</div>
                                    <div class="col-md-6 form-group needValInfo">
                                        <label class="radio-inline">
                                            <input class="searchtp" num="1" type="radio" name="searchType" value="" checked="checked" ng-click="getMemberNo()" /> 自动获取卡号
                                        </label>
                                        <label class="radio-inline">
                                            <input class="searchtp" num="2" type="radio" name="searchType" value="" /> 手机号
                                        </label>
                                        <label class="radio-inline">
                                            <input class="searchtp" num="3" type="radio" name="searchType" value="" /> 实物卡卡号
                                        </label>
                                        <p class="col-md-12 am-ft-black mgt5" style="font-size: 14px;" id="typeName1">自动获取的会员卡号为：<span>{{autoMemberNo}}</span></p>
                                        <div class="col-md-10 mgt5 form-group fn-hide" id="typeName3">
                                            <input type="text" class="col-md-12" name="memberNo" placeholder="请输入实物卡卡号" ng-blur="checkMember()" ng-value="addmember.memberNo" ng-model="addmember.memberNo" />
                                            <small class="error col-md-5" ng-show="memberNoWarn">该会员已存在！</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</form>
		<button type="button" class="btn btn-primary fn-left mgl60" ng-click="addMember()">确认</button>
		<button type="button" class="btn btn-default mgl10" ng-click="returnMember('addMember')">取消</button>
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
        //会员卡号选择
        $('.searchtp').change(function(){
            if($(this).prop('checked') && $(this).attr('num')==1){
                $('#typeName1').show();
                $('#typeName3').hide();
            }else if($(this).prop('checked') && $(this).attr('num')==3 ){
                $('#typeName3').show();
                $('#typeName1').hide();
            }else{
                $('#typeName3').hide();
                $('#typeName1').hide();
                $('.guide_selc').css({'margin-top':0});
            }
        });

	})

</script>
