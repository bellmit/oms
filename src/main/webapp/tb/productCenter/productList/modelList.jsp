<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<!--商户-->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">模板列表({{templateCount}})</h2>
		<a href="javascript:;" class="btn btn-primary fn-right" ng-click="addModel()">添加模板</a>
		<a href="javascript:;" class="btn btn-primary fn-right mgr20" ng-click="goback()">返回</a>
	</div>

	<div class="fn-clear"></div>
	<!--缺省-->
	<div class="col-md-11 dafaultWapper mgl10" ng-if="templateCount==0">
		<div class="loadingFormal">
			<img src="../static/base/images/icon_notice.png">
			<span style="font-size:16px;">您还没有添加模板<a href="javascript:;" ng-click="addModel()">立即添加</a></span>
		</div>
	</div>
	<div class="ManColTable col-lg-12 content-member-wrapper" ng-if="templateCount!=0">
		<div class="listSearch OderlistSearch mgt0 ng-scope">
			<div class="row">
				<div class="col-md-4 searchBox pl0">
					<input type="text" class="col-sm-10 mgt-8 ng-pristine ng-untouched ng-valid" ng-model="modelName" placeholder="模板名称">
					<a href="javascript:;" class="fn-left search-icon" ng-click="search(modelName)">查询</a>
				</div>
				<div class="fn-clear"></div>
			</div>
		</div>
		<form>
			<div class="table-responsive PrivTable storesMgt-Table">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<!-- <th scope="col">编号</th> -->
						<th class="col-lg-3">模板名称</th>
						<th class="col-lg-3">备注</th>
						<th class="col-lg-2">创建时间</th>
						<th class="col-lg-2">编辑时间</th>
						<th class="col-lg-2">操作</th>
					</tr>
					<tr ng-repeat="templateList in templateLists">
						<!-- <td class="">{{shop.shopNum}}</td> -->
						<td>
							{{templateList.title}}
						</td>
						<td>
							{{templateList.remark}}
						</td>
						<td >
							{{templateList.createTime}}
						</td>
						<td>
							{{templateList.updateTime}}
						</td>
						
						<td>
							<a href="javascript:;" ng-click="editModel(this)">编辑</a>
							<a href="javascript:;" class="mgl10 am-ft-red" ng-click="deleteModel(this)">删除</a>
						</td>
					</tr>
				</table>
			</div>
 <div class="fn-right priv-pagelist">
                <div id="paging"></div>
            </div>
		</form>
		<div class="fn-clear"></div>
	</div>
</div>