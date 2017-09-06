<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--------------- Content start ----------------->

<div class="content-wrapper" ng-hide="numA==1||numB==1||numC==1">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">
			所有采购单<span>({{counts}})</span>
		</h2>
		<a href="javascript:;" ng-click="addPurchse()" class="btn fn-right btn-primary">添加采购单</a>
	</div>
	<div class="fn-clear"></div>
	<!-- search -->
	<div class="listSearch mgt0">
		<form class="form-horizontal">
			<div class="row">
				<div class="col-md-12">
					<div class="form-group col-md-6">
						<label class="col-sm-3 pr0 control-label">采购单号：</label>
						<div class="col-sm-8 mgl-20 pl0 pro-search">
							<input type="text" class="form-control" placeholder="" id="id" />
						</div>
					</div>
					<div class="form-group col-md-5">
						<label class="col-sm-2 pr0 control-label">时间：</label>
						<div class="col-sm-9 pro-search">
							<!-- <input type="date" class="form-control" placeholder="" id="data" /> -->
							<input class="laydate-icon form-control" type="text" id="data" onclick="laydate({max: laydate.now()})" name="createDate" value="" ng-model="createDate" readonly="readonly" placeholder="选择时间" style="height: 34px;" />
						</div>
					</div>
					<div class="col-md-1 am-ft-center searchBox">
						<button type="button" class="btn fn-left btn-primary"
							ng-click="getAll()">查询</button>
					</div>
					<div class="fn-clear"></div>
				</div>
			</div>
		</form>
	</div>

	<!-- /search -->

	<!-- Main content -->
	<div class="ManColTable col-lg-12">
		<form>
			<div class="PrivTable">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col">采购单号</th>
						<th scope="col">采购时间</th>
						<th scope="col">供货商</th>
						<th scope="col">入库仓库</th>
						<th scope="col">采购数量</th>
						<th scope="col">采购总金额</th>
						<th scope="col">状态</th>
						<th scope="col">操作</th>
						<th scope="col">确认</th>
					</tr>

					<tr ng-repeat="xs in x">
						<td>{{xs.recievingId}}</td>
						<td>{{xs.createTime}}</td>
						<td>{{xs.disWarehName}}</td>
						<td>{{xs.rcvWarehName}}</td>
						<td>{{xs.ttlRcvQty}}</td>
						<td>{{xs.ttlRcvVal}}</td>
						<td ng-if="xs.status=='0'" class="am-ft-red">正在添加</td>
						<td ng-if="xs.status=='1'">已完成</td>
						<td ng-if="xs.status=='1'"><a href="javascript:;" ng-click="queryDetails(xs.recievingId)">查看详情</a></td>
						<td ng-if="xs.status=='0'"><a href=""
							class="w50 line-btn fn-left adjBtn" am-bg="blue"
							ng-click="updateDetails(xs.recievingId)">修改</a>
							<button type="button" class="w50 fn-left line-btn-delete"
								am-bg="white" ng-click="del(this)">删除</button></td>
						<td ng-if="xs.status=='0'"><button type="button"
								class="btn btn-primary" ng-click="commit(this)">确认并入库</button></td>
						<td ng-if="xs.status=='1'"></button></td>

					</tr>

				</table>
				<div class="fn-clear"></div>
				
				<div class="pagelist priv-pagelist">
					<div id="paging"></div>
				</div>
				<!--分页 end-->
			</div>

		</form>
		<!--分页 start-->

	</div>

</div>

</div>

<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
	<form id="myform">
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">确定删除？</h3>
			</div>
			<div class="dialogBtn am-flexbox">
				<button type="button"
					class="am-flexbox-item btn am-button SavEdit deletGroup"
					am-bg="blue">确认</button>
				<button type="button" class="am-flexbox-item btn am-button"
					onclick="Dialhide()" am-bg="white">取消</button>
				<div class="fn-clear"></div>
			</div>
		</div>
	</form>
</div>
<!--弹窗 end-->
<!--商品管理添加和修改-->
<div class="default" ng-hide="numA==0" ng-init="numA=0" ng-show="numA==1">
	<jsp:include page="addpurchse.jsp"/> 
</div> 
<div class="default" ng-hide="numB==0" ng-init="numB=0" ng-show="numB==1">
	<jsp:include page="updatepurchse.jsp" />
</div>
<div class="default" ng-hide="numC==0" ng-init="numC=0" ng-show="numC==1">
	<jsp:include page="purchsedetail.jsp" />
</div>

<script>
	//弹窗居中
	$('.EditDialog').center();
</script>
