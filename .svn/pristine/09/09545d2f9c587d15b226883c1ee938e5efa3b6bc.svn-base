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
			<div class="AddproTabnav mgb10">
				<a href="javascript:;" class="btn fn-right btn-primary"  ng-click="addData('saleManage','commercialAdd',{},'1')">添加商户</a>		
				<div class="fn-clear"></div>
			</div>
			<div>
					<div class="saleSearch">
						<form id='search'>
							<div class="clientName">
								<span>商户名称：</span><input type="text" name='inputId'
									placeholder="请输入商户名称" />
							</div>
							<div class="clientInfo fn-clear">
								<p class="fn-left pdr20 mgt20">
									<span>服务区域：</span>
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
									<span>销售人：</span> <select name="" ng-init="saler=''"
										ng-model="saler"
										ng-options="userList.userId as userList.trueName   for userList in userLists">
									</select>
								</p>
						
								<p class="fn-left mgt20">
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
								</p>
								<p class="fn-left pdl15 mgt20">
									<button class="selectContractBtn" ng-click="searchData()">查询</button>
								</p>
							</div>
						</form>
					</div>
					<div class="productCenterInfo" >
						<table class="table clientTable">
							<tr>
								<th scope="col" width="34%">商户</th>
								<th scope="col" width="10%">合同总数</th>
								<th scope="col" width="13%">合同总金额</th>
								<!--<th class="col-lg-1">服务类型</th>-->
								<th scope="col" width="12%">到期时间</th>
								<th scope="col" width="11%">销售人员</th>
								<th scope="col" width="10%">状态</th>
								<th scope="col" >操作</th>
							</tr>
							<tr ng-repeat="shopList in shopLists track by $index" ng-class="{'服务中':'inServer','已到期':'notinServer'}[shopList.status]">
								<td class="fn-clear pl0 pr0 pt0 pb0">
									<div class="fn-left shopLoge">
										<img ng-src="{{shopList.shopLogo}}" alt="" />
									</div>
									<div class="fn-left shopInfo">
										<p class="shopNamea"><a href="javascript:;" ng-click="addData('saleManage','orgInfo',this.shopList,'1')">{{shopList.shopName}}</a></p>
										<p class="shopPhone">
											<span>联系电话：</span>
											<span>{{shopList.shopTel}}</span>
										</p>
										<p class="shopAddr">
											<span>{{shopList.province}}</span> &nbsp;&nbsp;
											<span>{{shopList.city}}</span>
										</p>
									</div>
								</td>
								<td class="deepColor">{{shopList.contractCount}}份</td>
								<td class="deepColor">{{shopList.totalprice}}元</td>
								<!--<td>客服托管（无字段）</td>-->
								<td>
									<span ng-if="shopList.enddate != ''">{{shopList.enddate}}</span>
									<span ng-if="shopList.enddate == ''">——</span>
								</td>
								<td>
									<span ng-if="shopList.businessUserName != ''">{{shopList.businessUserName}}</span>	
									<span ng-if="shopList.businessUserName == ''">——</span>	
								</td>
								<td >{{shopList.status}}</td>
								<td><a href="javascript:;" ng-click="addData('saleManage','orgInfo',this.shopList,'1')">查看详情</a></td>
							</tr>
						</table>
						<div class="pagelist priv-pagelist">
							<div id="paging2"></div>
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