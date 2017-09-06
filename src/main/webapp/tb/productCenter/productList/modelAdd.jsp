<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">新增详情模板</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goBack()">返回</a>
	</div>
	<div class="fn-clear"></div>
	<section class="container-fluid" style="margin-bottom:40px;">
		<div class="row">
			<div class="prodet-nav">
				<div class="prodet-box">
					<!-- row1 -->
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>标题：</div>
						<div class="col-md-2 form-group needValInfo">
							<input type="text" class="col-md-12 text-overflow" name="" ng-model="title" placeholder="" maxlength="16" />
						</div>
						<p class="am-ft-gray fn-left mgt10">最多16个汉字</p>
					</div>
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14">备注：</div>
						<div class="col-md-5 form-group needValInfo">
							<input type="text" class="col-md-12 text-overflow" name="" ng-model="remark" placeholder="" maxlength="20" ng-value="" />
						</div>
						<p class="am-ft-gray fn-left mgt10">最多20个汉字</p>
					</div>
					<!-- row3 -->
					<div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>详情：</div>
						<div class="col-md-10 form-group needValInfo">
							<form>
								<div class="myueEdit">
									<div class="">
										<script type="text/plain" id="modelAdd"></script>
									</div>
									<div class="scanBtnBox addadjustshop fn-clear">
										<!--<button href="javascript:;" class="fn-right" ng-click="preview()">预览</button>-->
										<button href="javascript:;" class=" fn-right" ng-click="saveModelData()">保存</button>
									</div>
									<!--<div class="scanBtnBox addadjustshop fn-clear">
											<button href="javascript:;" class=" fn-right" ng-click="saveModelData()">保存</button>
										</div>-->
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<button type="button" class="btn btn-primary addBrandBtn" ng-click="saveModelDatab()">新增模板</button>
		<button type="button" class="btn btn-primary addBrandBtn" ng-click="addAndUse()">新增并立即使用</button>
	</section>
</div>
<div class="fn-clear"></div>