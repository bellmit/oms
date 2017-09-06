<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<table class="table lookByClientTable contractTable">
	<tr>
		<th>客户</th>
		<th> 
			<div class="thBox fn-clear">
				<span class="fn-left">销售总金额</span>
				<div class="arrowPart fn-left mgl5">
					<i class="fa fa-angle-up arrowActive"></i>
					<i class="fa fa-angle-down"></i>
				</div>
			</div>
		</th>
		<th>
			<div class="thBox fn-clear">
				<span class="fn-left">合同数</span>
				<div class="arrowPart fn-left mgl5">
					<i class="fa fa-angle-up arrowActive"></i>
					<i class="fa fa-angle-down"></i>
				</div>
			</div>
		</th>
		<th>
			<div class="thBox fn-clear">
				<span class="fn-left">未到期合同数</span>
				<div class="arrowPart fn-left mgl5">
					<i class="fa fa-angle-up arrowActive"></i>
					<i class="fa fa-angle-down"></i>
				</div>
			</div>
		</th>
		<th>
			<div class="thBox fn-clear">
				<span class="fn-left">待收金额</span>
				<div class="arrowPart fn-left mgl5">
					<i class="fa fa-angle-up arrowActive"></i>
					<i class="fa fa-angle-down"></i>
				</div>
			</div>
		</th>
		<th>状态</th>
	</tr>
	<tr class="inServer" ng-repeat="groupList in groupLists">
		<td class="deepColor">{{groupList.shopName}}</td>
		<td class="deepColor">￥{{groupList.allTotalprice}}</td>
		<td>{{groupList.contractCount}}</td>
		<td>{{groupList.notDueCount}}</td>
		<td class="deepColor">￥{{groupList.notPaidAmount}}</td>
		<td>{{groupList.status}}</td>
	</tr>
	<!--<tr class="inServer">
		<td class="deepColor">南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="inServer">
		<td class="deepColor">南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="inServer">
		<td class="deepColor">南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="inServer">
		<td class="deepColor">南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="notinServer">
		<td>南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="notinServer">
		<td>南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="notinServer">
		<td>南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="notinServer">
		<td>南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>
	<tr class="notinServer">
		<td>南京小小服饰有限公司</td>
		<td class="deepColor">￥70,000</td>
		<td>10</td>
		<td>10</td>
		<td>￥30,000</td>
		<td>服务中</td>
	</tr>-->
</table>