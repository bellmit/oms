<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-pagemgt">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left" ng-if="useType=='add'">新建页面模板</h2>
		<h2 class="am-ft-16 fn-left" ng-if="useType=='edit'">修改页面模板</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>
	<section class="container-fluid">
		<div class="row">
			<div class="prodet-nav">
				<div class="prodet-box">
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>标题：</div>
						<div class="col-md-2 form-group needValInfo">
							<input type="text" class="col-md-12 text-overflow" name="" ng-model="templateName" placeholder="" maxlength="16" />
						</div>
						<p class="am-ft-gray fn-left mgt10">最多16个汉字</p>
					</div>
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>备注：</div>
						<div class="col-md-5 form-group needValInfo">
							<input type="text" class="col-md-12 text-overflow" ng-model="templateAbs" name="" placeholder="" maxlength="20" />
						</div>
						<p class="am-ft-gray fn-left mgt10">最多20个汉字</p>
					</div>
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>页面：</div>
						
					</div>
					<div class="row">
						<div class="col-md-11 form-group needValInfo" style="margin-left: 60px;">
							<!--编辑器-->
							<!--<script type="text/plain" id="editor"></script>-->
							<div class="">
								<script type="text/plain" id="editor"></script>
							</div>
							<div class="scanBtnBox addadjustshop fn-clear">
								<button href="javascript:;" class="fn-right" ng-click="preview()">预览</button>
								<!--<button href="javascript:;" class=" fn-right" ng-click="savePcDet()">保存</button>-->
							</div>
							<!--/编辑器-->
							<!--/编辑器-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div ng-if="useType=='add'">
			<button type="button" class="btn btn-primary" style="margin-left: 60px;" ng-click="addTemplate()">新增模板</button>
			<!--<button type="button" class="btn btn-primary mgl10">新增并立即使用</button>-->
		</div>
		<div ng-if="useType=='edit'">
			<button type="button" class="btn btn-primary" style="margin-left: 60px;" ng-click="editTemplate()">修改模板</button>
		</div>
	</section>
	<div class="fn-clear"></div>
</div>
<!--------------- Content end ----------------->
</div>
