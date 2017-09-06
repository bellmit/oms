<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<div style="margin: 0 auto; width: 96%;">
	<!--ueedit-->
	<div id="forwardaddForm" style="margin-bottom: 15px;">
		<div class="col-md-3 selectBox" style="padding: 0;">
			<div data-selectId="" class="shopparent">
				<span>详情导航模板</span>
				<i class="fa fa-sort-desc fn-right mgr5 mgt5" aria-hidden="true"></i>
			</div>
			<!--下拉框的代码-->
			<div class="simulateSelect fn-hide">
				<div class="searchpart">
					<span class="fangda"><i class="fa fa-search" aria-hidden="true"></i></span>
					<input type="text" class="orgshopName" ng-model="modelName" ng-change="searchModel(modelName)" placeholder="请输入模板名称" />
				</div>
				<div class="fn-clear modelSelectedBottom" ng-if="templateLists.length==0">
					您还没有模板模块
				</div>
				<div class="selectePart">
					<ul>
						
						<li ng-repeat="templateList in templateLists" data-html="{{templateList.content}}" data-Id="{{templateList.templateId}}" class="selectLi">{{templateList.title}}</li>
					</ul>
				</div>
				<div class="fn-clear modelSelectedBottom">
					<a href="javascript:;" ng-click="createNewModel()" class="fn-left am-ft-blue">
						新建模板
					</a>
					<a href="javascript:;" ng-click="manageNewModel()" class="fn-right am-ft-blue">
						管理模板
					</a>
				</div>
			</div>
		</div>
		<div class="fn-clear"></div>
	</div>
	<form>
		<div class="myueEdit">
			<div class="">
				<script type="text/plain" id="editor"></script>
			</div>
			<div class="scanBtnBox addadjustshop fn-clear">
				<button href="javascript:;" class="fn-right" ng-click="preview()">预览</button>
				<button href="javascript:;" class=" fn-right" ng-click="savePcDet()">保存</button>
			</div>
		</div>
	</form>

	<!--ueedit-->
</div>