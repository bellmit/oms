<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="forwardTop-content fn-left" ng-if="userInfo.orgType == '6'">
		<div class="forwardTop-left">
			<img ng-src="{{orgInfo.shopLogo}}" ng-if="orgInfo.shopLogo != '' " />
			<img src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="orgInfo.shopLogo == '' " />
		</div>
		<div class="forwardTop-right">
			<div class="forwardTop-righttop">
				<p href="javascript:;" class="forwardTop-rightTitl">{{orgInfo.shopName}}</p>
				<div class="fn-clear"></div>
			</div>
			<p class="am-ft-black">
				<span class="stores-count">店铺数：<a href="javascript:;">{{orgInfo.shopNum}}个</a></span>
				<span class="mgl10">运营人员：{{orgInfo.userName}}<!-- <a href="javascript:;"
						class="mgl5 allotOprate">更换</a> --></span>
			</p>
			<p>联系电话：{{orgInfo.shopTel}}</p>
			<p>
				<span class="fn-left">详细地址：{{orgInfo.province}}{{orgInfo.city}}{{orgInfo.district}}{{orgInfo.shopAddr}}</span>
				<span class="fn-right am-ft-gray">商户添加时间：{{orgInfo.openDate}}</span>
			</p>
		</div>
	</div>
	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12">
		<!-- 商品列表 -->
		<div>
				<div class="AddproTabnav">
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='1']" ng-click="shiftProductTab('1','3')">在册店铺</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='2']" ng-click="shiftProductTab('2','5')">暂停店铺</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='3']" ng-click="shiftProductTab('3','6')">终止店铺</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='4']" ng-click="shiftProductTab('4')">区域调动</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='5']" ng-click="shiftProductTab('5','')">全部店铺</div>
					<!--<a href="javascript:;" class="btn fn-right btn-primary" ng-show="productTab=='1'" ng-click="addData('saleManage','commercialAdd',{},'1')">添加商户</a>-->		
					<a href="javascript:;" class="btn fn-right btn-primary"  ng-click="addData('saleManage','contractAdd',{},'2')">添加合同</a>
					<div class="fn-clear"></div>
				</div>
				<div>
					<div class="saleSearch">
						<form id='search'>
							<div class="clientName">
								<span>合同编号：</span>
								<input type="text" name='inputId' placeholder="请输入合同编号" />
							</div>
							<div class="clientInfo fn-clear">
								<p class="fn-left pdr20 mgt20">
									<span>区域：</span>
									<!--<select name="" id="" ng-init="province='全部'" ng-model="province" ng-options="provinceList.province as provinceList.province for provinceList in provinceLists">
								</select>-->
									<select name='serviceArea'>
										<option value=''></option>
										<option value='杭州'>杭州</option>
										<option value='武汉'>武汉</option>
										<option value='合肥'>合肥</option>
									</select>
								</p>
								<p class="fn-left pdr20 mgt20" >
									<span>产品：</span> 
									<select name="productType">
										<option value=''></option>
										<option value="客服">客服</option>
										<option value="美工">美工</option>
										<option value="运营<">运营</option>
										<option value="培训">培训</option>
									</select>
								</p>
								<p class="fn-left pdr20 mgt20">
									<span>商户名称：</span>
									<select id="comCiaList" class="selectpicker" data-live-search="true" name="orgId" ng-model="orgManage" ng-change="getShopList()">
										<option value=" ">请选择</option>
									</select>
								</p>
								<!--<p class="fn-left mgt20">
									<span>状态：</span> <select name='contractStatus'>
										<option value=""></option>
										<option value="0">待审核</option>
										<option value="1">待分配</option>
										<option value="2">待确认</option>
										<option value="3">服务中</option>
										<option value="4">已完成</option>
										<option value="5">暂停</option>
										<option value="6">终止</option>
										<option value="7">暂停待审批</option>
										<option value="8">终止待审批</option>
									</select>
								</p>-->
								<p class="fn-left pdl15 mgt20">
									<button class="selectContractBtn" ng-click="searchData()">查询</button>
								</p>
							</div>
						</form>
					</div>
					<div class="productCenterInfo" >
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
							<td class="status3" ng-if='contract.contractStatus=="7"'>暂停待审批</td>
							<td class="status3" ng-if='contract.contractStatus=="8"'>终止待审批</td>
							
							<td class="status2" ng-if='contract.contractStatus=="0"'>待处理</td>
							<td class="status1" ng-if='contract.contractStatus=="1"'>待处理</td>
							<td class="status1" ng-if='contract.contractStatus=="2"'>待处理</td>
							<td class="status1" ng-if='contract.contractStatus=="3"'>已处理</td>
							<td class="status3" ng-if='contract.contractStatus=="4"'>已完成</td>
							<td class="status3" ng-if='contract.contractStatus=="5"'>暂停</td>
							<td class="status3" ng-if='contract.contractStatus=="6"'>已终止</td>
							<td class="status3" ng-if='contract.contractStatus=="7"'>暂停待审批</td>
							<td class="status3" ng-if='contract.contractStatus=="8"'>终止待审批</td>
							<!-- <td class="status2" ng-if='contract.contractStatus>0'>{{contract.contractStatus}}</td>
							<td class="status3" ng-if='contract.contractStatus=="0"'>{{contract.contractStatus}}</td> -->
						</tr>	
					</table>
					<div class="pagelist priv-pagelist">
						<div id="paging1"></div>
					</div>
					</div>
				</div>
				<div class="fn-clear"></div>
			<!--分页 start-->
			<!--分页 end-->
		</div>
		<!-- /商品列表 -->
	</div>
	<div class="fn-clear"></div>
</div>
<!--发布商品弹框-->
<script type="text/javascript">
	$(function(){
		$('.selectpicker').selectpicker('refresh');
	})
</script>