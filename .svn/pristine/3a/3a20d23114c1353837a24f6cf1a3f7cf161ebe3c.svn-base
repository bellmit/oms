<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<style>
	.laydate_table { 
		display: none;
	} 
	#laydate_hms{
		display: none!important;
	}
	.laydate_body .laydate_bottom .laydate_btn{
		top: 15px;
		border-right:none ;
	}
	.laydate_box{
		height: 72px !important;
	}
	.laydate_body .laydate_bottom .laydate_btn a:last-child{
		border-right: 1px solid #DDDDDD;
	}
</style>
	
<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper	saleSumary-wrapper fn-clear">
	<div class="firstTab col-lg-10 mgl20" ng-if='childDepartCount>0'>
		<ul class="fn-clear">
			<li class="fn-left" ng-class="{true:'tabactive'}[productTab=='1']" ng-click="shiftProductTab('1')">部门汇总</li>
			<li class="fn-left" ng-class="{true:'tabactive'}[productTab=='2']" ng-click="shiftProductTab('2')">个人排行</li>
		</ul>
	</div>
	<div class="col-lg-10  pl0 mgt5 mgl20 pr0 saleDetail">
		<div class="col-lg-12 paddinglr0" >
			<div class="searchByTime pdl20 pt10 pb10">
				<div class="fn-left mgr15 summary_laydate">
					<span>时间：</span>
					<input type="text" id="start" placeholder="开始日期" ng-model='begindatea' class="mgr5 laydate-icon "> ~
					<input type="text" id="end" placeholder="结束日期"  ng-model='enddatea' class="mgl5  laydate-icon " />
				</div>
				<div class="fn-left mgr15 ">
					<span>产品类型：</span>
					<select style="" class="width120" ng-model='taskType'>
						<option value="5">全部</option>
						<option value="4">套餐</option>
						<option value="0">客服</option>
						<option value="3">培训</option>
						<option value="2">运营</option>
						<option value="1">美工</option>
					</select>
				</div>
				<button ng-click="searchData('1')" ng-if="productTab=='1'">查询</button>
				<button ng-click="searchData('2')" ng-if="productTab=='2'">查询</button>
			</div>
		</div>
		<div class="col-lg-12 saleSummary mgl0 newSummary" ng-if="productTab=='1'">
			<div class="bread_path summary_bread" >
				<span class="bread_nav" >{{detailDate}}月各部门总销售业绩报表</span>
			</div>
			<table class="table saleSummaryDetail">
				<tr>
					<th scope="col" width="45%">部门</th>
					<th scope="col" width="11%">销售金额</th>
					<th scope="col" width="11%">新签金额</th>
					<th scope="col" width="11%">续签金额</th>
					<th scope="col" width="11%">提成金额</th>
					<th scope="col" width="11%">临时费用</th>
				</tr>
				<tr>
					<td colspan="6" class="pd0 ">
						<table class="summary_table table-border table-grand">
							<tr  ng-repeat='item in list'>
								<td colspan="8" class="pt0 pd0 table-border-bottom">
									<table class="mgb0 table-border table-son">
										<tr ng-repeat='son in item.detailList'>
											<td rowspan="{{item.detailList.length}}" ng-if='$index==0' class="bg-ff" scope="col" width="17%">{{item.departName}}</td>
											<td class="bg-ff"  scope="col" width="17%">{{son.departName}}</td>
											<td colspan="6" class="pb0 pt0" scope="col" >
												<table class="mgb0 grandSon-bg table-border table-grandSon">
													<tr ng-repeat='grandSon in son.detailList'>
														<td scope="col" width="17%">{{grandSon.departName}}</td>
														<td scope="col" width="17%">{{grandSon.serviceAmount}}</td>
														<td scope="col" width="16.5%">{{grandSon.newSignAmount}}</td>
														<td scope="col" width="17%">{{grandSon.reSignAmount}}</td>
														<td scope="col" width="16.8%">{{grandSon.deductAmout}}</td>
														<td scope="col" >{{grandSon.extendAmount}}</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr class="summary_total">
					<td  scope="col" width="45%">合计</td>
					<td  scope="col" width="11%" class="am-ft-orange">{{sum.serviceAmount}}元</td>
					<td  scope="col" width="11%">{{sum.newSignAmount}}元</td>
					<td  scope="col" width="11%">{{sum.reSignAmount}}元</td>
					<td  scope="col" width="11%">{{sum.deductAmout}}元</td>
					<td  scope="col" width="11%">{{sum.extendAmount}}元</td>
				</tr>
			</table>
		</div>	
		<div class="col-lg-12 saleSummary mgl0 newSummary" ng-if="productTab=='2'">
			<div class="bread_path summary_bread" >
				<span class="bread_nav" >{{detailDate}}月个人销售排行榜</span>
			</div>
			<table class="table saleSummaryDetail">
				<tr>
					<th scope="col" width="11%">排名</th>
					<th scope="col" width="11%">姓名</th>
					<th scope="col" width="16%">部门</th>
					<th scope="col" width="12%">销售金额</th>
					<th scope="col" width="12%">新签金额</th>
					<th scope="col" width="12%">续签金额</th>
					<th scope="col" width="12%">提成金额</th>
					<th scope="col" >临时费用</th>
				</tr>
				<tr ng-repeat='sign in rsListSign'>
					<td>{{sign.num}}</td>
					<td>{{sign.trueName}}</td>
					<td>{{sign.departName}}</td>
					<td>{{sign.serviceAmount}}</td>
					<td>{{sign.newSignAmount}}</td>
					<td>{{sign.reSignAmount}}</td>
					<td>{{sign.deductAmout}}</td>
					<td>{{sign.extendAmount}}</td>
				</tr>
				<!--<tr>
					<td>2</td>
					<td>张三</td>
					<td>杭州商务一部</td>
					<td>1000元</td>
					<td>1000元</td>
					<td>1000元</td>
					<td>1000元</td>
					<td>1000元</td>
				</tr>-->
				
			</table>
		</div>	
		<div class="col-md-12 pr0" ng-if="productTab=='2'">
			<div id="paging"></div>
		</div>
	</div>
</div>
<script type="text/javascript">
	function removNext(a){
		$(a).nextAll().remove();
	}
</script>