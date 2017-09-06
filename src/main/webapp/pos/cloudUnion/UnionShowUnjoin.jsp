<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">联盟管理</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="gobackComercia()">返回</a>
	</div>
	<div class="fn-clear"></div>
	<!-- search -->
	<div class="listSearch OderlistSearch mgt0 pb0">
		<div class="row">
			<div class="col-md-12 mgl20">
				<p class="col-sm-3 control-label mgb10">联盟名称:<span>{{cloudName}}</span></p>
				<p class="col-sm-7 control-label mgb10">品牌:<span>{{brandName}}</span></p>
				<p class="col-sm-3 control-label mgb10">创建商户：<span>{{shopName}}</span></p>
				<p class="col-sm-3 control-label">创建时间：<span>{{createDate}}</span></p>
			</div>
			<div class="fn-clear"></div>
		</div>
	</div>
	<!-- /search  -->
	<!-- Main content -->
	<div class="ManColTable col-lg-12">
		<div class="unionShow-detTitl">
			<span class="fn-left">未加入成员共计 {{unionMemberListCount}} 个：</span>
		</div>
		<form>
			<div class="table-responsive PrivTable">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col" colspan="2">成员编号</th>
						<th scope="col">成员名称</th>
                        <th scope="col">成员类型</th>
						<th scope="col">地址</th>
						<th scope="col">操作</th>
					</tr>
					<tr ng-repeat="unJoinedunionMember in unJoinedunionMemberList">
						<td><input type="checkbox" value="" ng-checked="unJoinedunionMember.allunJoinedgetchecked"   ng-click="chooseUnJoinedMember(this,unJoinedunionMember.orgId,unJoinedunionMemberList,'one')" /></td>
						<td>{{unJoinedunionMember.shopNum}}</td>
						<td>{{unJoinedunionMember.shopName}}</td>
						<td>
							<span ng-if="unJoinedunionMember.orgType=='1'">商户</span>
                            <span ng-if="unJoinedunionMember.orgType=='4'">店铺</span>
						</td>
						<td>
							<p>{{unJoinedunionMember.province}} {{unJoinedunionMember.city}} {{unJoinedunionMember.district}}{{unJoinedunionMember.shopAddr}}</p>
						</td>
						<td>
							<a href="javascript:;" ng-disabled="defaultObj.unjoinedTojoin" ng-click="unjoinedTojoin(this,'one')">加入</a>
						</td>
					</tr>
					<tr>
						<td colspan="6">
							<div class="fn-left mg0 checkbox">
								<label class="pl0 mgl8">
                                    <input id="allUnjoinedMember" type="checkbox" value="" ng-model="unJoinedgetchecked" ng-checked="unJoinedgetchecked" ng-click="chooseUnJoinedMember(this,unJoinedunionMember.orgId,unJoinedunionMemberList,'all')" >
                                    <label for="allUnjoinedMember" class="mgl20">全选当前页</label>
                                </label>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</form>
		<div class="pagelist priv-pagelist fn-left price-pagelist">
			<div id="pagunJoined">分页</div>
		</div>
		<a href="javascript:;" class="btn btn-primary" ng-disabled="defaultObj.unjoinedTojoin" ng-click="unjoinedTojoin(this,'selected')">添加选中成员</a>
		<!-- 分页 -->
		<!--ng-click="sureToAddMember-->
	</div>
	<!-- /分页 -->
	<div class="fn-clear"></div>
</div>

</div>

</div>

<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
	<form>
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">确定解散联盟？</h3>
			</div>
			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue">确认</button>
				<button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
				<div class="fn-clear"></div>
			</div>
		</div>
	</form>
</div>