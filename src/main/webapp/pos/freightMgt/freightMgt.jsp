<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--运费模板管理页面-->
<div class="content-wrapper  fn-clear">
	<div class="wx-content pdl20 fn-clear">
		<div class="wx-head col-md-10 mgb10 pl0 pr0 fn-clear">
			<div class="wx-title fn-left">运费模板管理</div>
			<button class="selectOrderBtn fn-right" ng-click="addFreightTemplate()">添加运费模版</button>
		</div>
		<div class="freight-none col-md-10 mgb10 pl0 pr0 fn-clear" ng-if="logiticTemplateLists.length == 0">
			<span style="color:#bbb">
				<i class="fa fa-volume-up" aria-hidden="true"></i>
				您还没有添加运费模版
			</span>
			<a href="javascript:;" ng-click="addFreightTemplate()">立即添加</a>
		</div>
		<div class="freight-list col-md-10 mgb20 pl0 pr0 " ng-if="logiticTemplateLists.length > 0">
			<div ng-repeat="logiticTemplateList in logiticTemplateLists track by $index">
				<div class="freight-list-top fn-clear">
					<div class="freight-title fn-left">
						{{logiticTemplateList.logiticTemplateName}}
					</div>
					<div class="freight-time fn-right">
						<span class="freight-time-a">最后编辑时间：{{logiticTemplateList.createTime}}</span>
						<a href="javascript:;" class="am-ft-blue mgl10" ng-click="editFreight(logiticTemplateList)">编辑</a>
						<a href="javascript:;" class="am-ft-gray mgl10" ng-click="deleteFreight(logiticTemplateList)">删除</a>
					</div>
				</div>
				<table class="table freight-table table-hover table-striped table-bordered">
					<tr>
						<th class="col-md-4">运送到</th>
						<th class="col-md-2">
							<span ng-if="logiticTemplateList.calType == '1'">首件(个)</span>
							<span ng-if="logiticTemplateList.calType == '0'">首重(KG)</span>
						</th>
						<th class="col-md-2">运费(元)</th>
						<th class="col-md-2">
							<span ng-if="logiticTemplateList.calType == '1'">续件(个)</span>
							<span ng-if="logiticTemplateList.calType =='0'">续重(KG)</span>
						</th>
						<th class="col-md-2">运费(元)</th>
					</tr>
					<tr ng-repeat="detail in logiticTemplateList.details track by $index">
						<td>
							<span ng-if="$index==0">
								默认运费
							</span>
							<span ng-if="$index>0">
								<span ng-repeat="location in detail.locationArr track by $index">
								<span>{{location.locationName}}</span>
							<span ng-if="$index+1 != detail.locationArr.length">
									、
								</span>
							</span>
							</span>
						</td>
						<td>
							{{detail.baseAmount}}
						</td>
						<td>
							{{detail.basePrice}}
						</td>
						<td>
							{{detail.addAmount}}
						</td>
						<td>
							{{detail.addPrice}}
						</td>
					</tr>
					<tr>
						<td colspan="5">
							<span>适用微店:</span>
							<span ng-if="logiticTemplateList.orgList.length ==1">无</span>
							<span ng-if="logiticTemplateList.orgList.length>1" ></span>
								<span class="freight-user mgl10" ng-if="org.orgId != orgId" ng-repeat="org in logiticTemplateList.orgList">
							<!--<span class="freight-user mgl10" ng-if="org.orgId != orgId" ng-repeat="org in logiticTemplateList.orgList">-->
							<img ng-src="{{org.shopUrl}}" alt="" />
						<span>{{org.orgName}}</span>
							</span>
							</span>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>

<!--运费模板管理页面-->