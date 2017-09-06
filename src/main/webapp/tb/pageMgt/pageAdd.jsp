<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-pagemgt">
	<div id="ssss"></div>
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left" ng-if="pageUseType=='add'">添加页面</h2>
		<h2 class="am-ft-16 fn-left" ng-if="pageUseType=='edit'">修改页面</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>
	<section class="container-fluid">
		<div class="row">
			<div class="prodet-nav">
				<div class="prodet-box pl0">
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>标题：</div>
						<div class="col-md-2 form-group needValInfo">
							<input type="text" class="col-md-12 text-overflow" name="" ng-model="pageTitle" placeholder="" maxlength="16" />
						</div>
						<p class="am-ft-gray fn-left mgt10">最多16个汉字</p>
					</div>
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商户：</div>
						<div class="col-md-3 selectBox" style="padding: 0;" id="forwardaddForm">
							<div data-selectId="" class="shopparent" style="width:300px;height:32px">
								<span>请选择</span>
								<i class="fa fa-sort-desc fn-right mgr5 mgt5" aria-hidden="true"></i>
							</div>
							<!--下拉框的代码-->
							<div class="simulateSelect fn-hide" style="width:300px;">
								<div class="searchpart">
									<span class="fangda"><i class="fa fa-search" aria-hidden="true"></i></span>
									<input type="text" class="orgshopName" ng-model="orgshopName" ng-change="searchOrgList()" placeholder="请输入商户名称" />
								</div>
								<div class="selectePart">
									<ul>
										<li style="overflow: hidden;" ng-repeat="orgManageList in orgManageLists" data-Id="{{orgManageList.orgId}}" class="selectLi">{{orgManageList.shopName}}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>页面：</div>
						<div class="col-md-3 form-group needValInfo fn-right">
							<div id="forwardaddForma" style="margin-bottom: 0px;">
								<div class=" selectBox" style="padding: 0;">
									<div data-selectId="" data-selectHtml="" class="shopparent">
										<span>页面模板</span>
										<i class="fa fa-sort-desc fn-right mgr5 mgt5" aria-hidden="true"></i>
									</div>
									<!--下拉框的代码-->
									<div class="simulateSelect fn-hide" style="left:5px;overflow: hidden;">
										<div class="searchpart">
											<span class="fangda"><i class="fa fa-search" aria-hidden="true"></i></span>
											<input type="text" class="orgshopName" ng-model="modelName" ng-change="searchModel(modelName)" placeholder="请输入模板名称" />
										</div>
										<div class="fn-clear modelSelectedBottom" ng-if="templateLists.length==0">
											您还没有页面模块
										</div>
										<div class="selectePart">
											<ul>
												<li style="overflow:hidden ;" ng-repeat="templateList in templateLists" data-html="{{templateList.content}}" data-Id="{{templateList.templateId}}" class="selectLi">{{templateList.title}}</li>
											</ul>
										</div>
										<!--<div class="fn-clear modelSelectedBottom">
											<a href="javascript:;" ng-click="createNewModel()" class="fn-left am-ft-blue">
												新建页面模板
											</a>
											<a href="javascript:;" ng-click="manageNewModel()" class="fn-right am-ft-blue">
												管理页面内模板
											</a>
										</div>-->
									</div>
								</div>
								<div class="fn-clear"></div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-11 form-group needValInfo" style="margin-left: 60px;">
							<!--编辑器-->
							<!--<script type="text/plain" id="editor"></script>-->
							<div class="">
								<script type="text/plain" id="editorpageadd"></script>
								
							</div>
							<div class="scanBtnBox addadjustshop fn-clear">
								<button href="javascript:;" class="fn-right" ng-click="preview()">预览</button>
								<!--<button href="javascript:;" class=" fn-right" ng-click="savePcDet()">保存</button>-->
							</div>
							<!--/编辑器-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<button type="button" class="btn btn-primary mgl35" ng-click="savePage('template/addTemplate')" ng-if="pageUseType=='add'">保存</button>
		<button type="button" class="btn btn-primary mgl35" ng-click="editPage('template/updateTemplate')" ng-if="pageUseType=='edit'">确认修改</button>
		<button type="button" class="btn btn-default mgl10" id="saveAsTempBtn" ng-if="pageUseType=='add'" ng-click="saveTempDia()">另存为模板</button>
	</section>
<iframe name='iframe1' id="iframe1" src="/oms/tb/productCenter/productList/preview.jsp" frameborder="0" border="0" cellspacing="0" style="border-style: none;width: 1937px; height: 0px;"></iframe>
	<div class="fn-clear"></div>
</div>
<!--------------- Content end ----------------->
</div>
<!--另存为模板弹窗-->
<div style="position: fixed;width:100%;height:100%;top:0;background-color:rgba(0,0,0,0.5);z-index: 999;" ng-show="showSaveTemp=='show'">
	<div class="am-dialog forwardMgt-Dialog saveAsTemp-Dialog" id="saveAsTempDialog">
		<i class="fa fa-close closeDia" ng-click="closeDia()"></i>
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3>另存为模板</h3>
			</div>
			<div class="am-dialog-body">
				<div class="form-group">
					<label for="" class="control-label"><em class="am-ft-red mgr5">*</em>标题：</label>
					<div class="col-sm-4 pl0">
						<input type="text" name="" class="form-control col-sm-12" placeholder="模板标题" ng-model="templateName" maxlength="16" />
					</div>
					<p class="am-ft-gray fn-left mgt10">最多16个汉字</p>
					<div class="fn-clear"></div>
				</div>
				<div class="form-group">
					<label for="" class="control-label"><em class="am-ft-red mgr5">*</em>备注：</label>
					<div class="col-sm-7 pl0">
						<input type="text" name="" class="form-control col-sm-12" placeholder="模板备注" ng-model="templateAbs" maxlength="20" />
					</div>
					<p class="am-ft-gray fn-left mgt10">最多20个汉字</p>
					<div class="fn-clear"></div>
				</div>
				<div class="fn-clear"></div>
			</div>
			<div class="am-dialog-footer">
				<a href="javascript:;" class="btn btn-default closedialog" ng-click="closeDia()">取消</a>
				<a href="javascript:;" class="btn btn-primary mgl20" ng-click="saveTemp()">保存</a>
			</div>
		</div>
	</div>
</div>
<!--/另存为模板弹窗-->
