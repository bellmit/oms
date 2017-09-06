<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<a href="javascript:;" class="line-btn forwardTop-goBack ng-scope" ng-click="gobackByRoute()" >返回</a>
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2 fn-clear">
<div class="col-lg-11 col-lg-11 pl0 pr0 mgl20 mgb10">
	<div class="forwardTop-content fn-left">
		<div class="forwardTop-left">
			<img ng-src="{{pageInfo.shopLogo}}" />
			<!--<img src="http://static.qineasy.com/base/images/img_default_company.png"/>-->
		</div>
		<div class="forwardTop-right fn-clear" style="width:80%">
			<div class="fn-left">
				<div class="forwardTop-righttop">
					<p href="javascript:;" class="forwardTop-rightTitl">{{pageInfo.shopName}}</p>
					<div class="fn-clear"></div>
				</div>
				<p>
					<span>联系电话：{{pageInfo.contacts}}&nbsp;&nbsp;{{pageInfo.shopTel}}</span>
				</p>
				<p>
					<span class="fn-left">详细地址：{{pageInfo.province}}  {{pageInfo.city}}  {{pageInfo.district}}{{pageInfo.shopAddr}}</span>
				</p>
			</div>
			<div class="fn-right info-right" style="margin-right: 0px;">
				<p>
					<span class="am-ft-gray">销售人员：{{pageInfo.businessUserName}} </span>
				</p>
				<p>
					<span class="am-ft-gray">添加时间：{{pageInfo.createTime}}</span>
				</p>
			</div>
		</div>
	</div>
</div>

	<div class="contractSummmary fn-clear col-lg-11 pl0 pr0 mgl20 mgb10">
		<div class="fn-left contractCount">
			合同列表({{count}})
		</div>
		<div class="fn-right fn-clear">
			<p class="fn-left  mgr5">
				<span>总金额：</span>
				<span class="moneyAmount"> {{contractAmount}}元</span>
			</p>
			<a href="javascript:;" class="btn fn-right btn-primary" ng-click="goRoute('orgInfo','contractAdd',{},'1')">添加合同</a>
		</div>
	</div>

	<div class="col-lg-11 pl0 pr0 mgl20">
		<table class="table contractTable">
			<tr>
				<th>类型</th>
				<th>合同编号</th>
				<th>商户名称</th>
				<th>服务区域</th>
				<th>服务类型</th>
				<th>产品类型</th>
				<th>合同金额</th>
				<th>已收金额</th>
				<th>合同期限</th>
				<th>签单人</th>
				<th>服务状态</th>
				<th>处理状态</th>
			</tr>
			<tr class="inServer" ng-repeat="contract in contractList track by $index">
				<td ng-if="contract.contractType=='0'">新</td>
				<td ng-if="contract.contractType=='1'">续</td>
				<td>{{contract.contractNum}}</td>
				<td><a href="javascript:;" ng-click="contractInfo(contract)">{{contract.shopName}}</a></td>
				<td>{{contract.serviceArea}}</td>
				<td>{{contract.serviceType}}</td>		
				<td>{{contract.productType}}</td>
				<td>{{contract.totalprice}}</td>
				<td>{{contract.payAmount}}</td>
				<td>{{contract.begindate}}至{{contract.enddate}}</td>
				<td>{{contract.signName}}</td>
				<td class="status2" ng-if='contract.contractStatus=="0"'>待审核</td>
				<td class="status1" ng-if='contract.contractStatus=="1"'>待分配</td>
				<td class="status1" ng-if='contract.contractStatus=="2"'>待确认</td>
				<td class="status1" ng-if='contract.contractStatus=="3"'>服务中</td>
				<td class="status3" ng-if='contract.contractStatus=="4"'>已完成</td>
				<td class="status3" ng-if='contract.contractStatus=="5"'>暂停</td>
				<td class="status3" ng-if='contract.contractStatus=="6"'>已终止</td>
				<td class="status3" ng-if='contract.contractStatus=="7"'>服务暂停</td>
				<td class="status3" ng-if='contract.contractStatus=="8"'>服务终止</td>
				
				<td class="status2" ng-if='contract.contractStatus=="0"'>待处理</td>
				<td class="status1" ng-if='contract.contractStatus=="1"'>待处理</td>
				<td class="status1" ng-if='contract.contractStatus=="2"'>待处理</td>
				<td class="status1" ng-if='contract.contractStatus=="3"'>已处理</td>
				<td class="status3" ng-if='contract.contractStatus=="4"'>已完成</td>
				<td class="status3" ng-if='contract.contractStatus=="5"'>暂停</td>
				<td class="status3" ng-if='contract.contractStatus=="6"'>已终止</td>
				<td class="status3" ng-if='contract.contractStatus=="7"'>服务暂停</td>
				<td class="status3" ng-if='contract.contractStatus=="8"'>服务终止</td>
		</tr>	
		</table>
	</div>
</div>