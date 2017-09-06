<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper contractCreate-wraper fn-clear contractCreate-wraper-info">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">编辑合同</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="col-md-11 fn-clear addContractBox">
		<!--<form id='contractForm'>-->
			<div class="fn-clear col-md-12 contractBaseInfoBox">
				<div class="contractInfo col-md-12">
					<!-- <div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							<em class="am-ft-red mgr5">*</em>合同编号：
						</div>
						<input type="text" name="contractNum" />
					</div> -->
					<div class="infoLine infoLinea fn-clear">
						<div class="fn-left infoTitile">
							合同类型：
						</div>
						<span class="color333" ng-if="contractInfo.contractType=='0'">新签合同</span>
						<span class="color333" ng-if="contractInfo.contractType=='1'">续签合同</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							商戶名称：
						</div>
						<select id="comCiaList" class="selectpicker" name="orgId" ng-disabled="true">
							<option value="" selected="selected">{{contractInfo.orgInfo.shopName}}</option>
						</select>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							店铺列表：
						</div>
						<form id='shopId'>
						<div class="infoLineccd">
							<p ng-repeat="shop in contractInfo.shopList">
								<label>
									<img ng-if="shop.shopType=='2'" src="../static/base/images/icon_logo_taobao.png" />
									<img ng-if="shop.shopType=='3'" src="../static/base/images/icon_logo_tmall.png"/>
									<img ng-if="shop.shopType=='4'" src="../static/base/images/icon_logo_jindong.png"/>
									<img ng-if="shop.shopType=='0'" src="../static/base/images/icon_1688.png"/>
									<img ng-if="shop.shopType=='1'" src="../static/base/images/icon_AliExpress.png"/>
									<img ng-if="shop.shopType=='5'" src="../static/base/images/icon_amazon.png"/>
									{{shop.shopName}}
								</label>
							</p>
						</div>
						</form>
					</div>
					<div class="infoLine infoLinee fn-clear">
						<div class="fn-left infoTitile">
							产品类型：
						</div>
						<div class="proType_box fn-left">
							<div class="proType_box_a" ng-if="taskInfoKF!=undefined">
								<form id="customer">
									<div class="proType_box_nav">
										<span>客服</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													席位数量：
												</div>
												<div class="proType_details fn-clear">
													<input type="text" class="fn-left colorDisable" ng-model='taskInfoKF.serviceNum' placeholder="" ng-disabled="true" />
													<div class="proType_detailsR">
														<span class="color666 mgl10 colorDisable">席位单价：</span>
														<input type="text"  placeholder="" ng-model="taskInfoKF.unitPrice" class="colorDisable" ng-disabled="true" />
														<span class="color333 colorDisable">元</span>
													</div>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务周期：
												</div>
												<div class="proType_details colorDisable">
													<select class="fn-left colorDisable" ng-model="taskInfoKF.months" ng-disabled="true">
														<option value="1">一个月</option>
														<option value="2">二个月</option>
														<option value="3">三个月</option>
														<option value="4">四个月</option>
														<option value="5">五个月</option>
														<option value="6">六个月</option>
														<option value="7">七个月</option>
														<option value="8">八个月</option>
														<option value="9">九个月</option>
														<option value="10">十个月</option>
														<option value="11">十一个月</option>
														<option value="12">十二个月</option>
													</select>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务类型：
												</div>
												<div class="proType_details">
													<div class="proType_detailsR">
														<label class="mgr5 colorDisable" > 
															<input type="radio" id="zh" ng-disabled="true" name='serviceType'  ng-checked="taskInfoKF.serviceType==0" value='0'/>值守
														</label>
														<label class="mgr5 colorDisable">
															 <input type="radio" id="ti" ng-disabled="true" name='serviceType' value='1' ng-checked="taskInfoKF.serviceType==1"/>提成
														</label>&nbsp;
														<span ng-if='taskInfoKF.serviceType==1' class="color333 colorDisable">
															<input type="text" name='deductRate' ng-disabled="true" class="colorDisable" ng-model="taskInfoKF.deductRate"/>
														%</span>
													</div>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="">
													服务日期：
												</div>
												<div class="proType_details">
													<input type="text" id="beginDateKF" ng-model="taskInfoKF.beginDate"  class="fn-left laydate-icon form-control effectdatatime" name='beginDate' placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input type="text" id="endDateKF" ng-model="taskInfoKF.endDate" class="fn-left laydate-icon form-control effectdatatime" name='endDate' placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务费用：
												</div>
												<div class="proType_details">
														<input type="text" class="colorDisable" ng-disabled="true" ng-model="taskInfoKF.serviceAmount" placeholder="" />
														<span class="colorDisable">元</span>
												</div>
												</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													产品备注：
												</div>
												<div class="proType_details">
													<textarea type="text" class="colorDisable" name='taskMemo' ng-disabled="true" ng-model='taskInfoKF.taskMemo' /></textarea>
													<span class="color999"> <i ng-if="taskInfoKF.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoKF.taskMemo.length!=undefined">{{taskInfoKF.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoKF.contractExtendList" ng-if='taskInfoKF.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
														<!--<div class="checkContractInfoFile checkContractInfoFile_data">
															<input ngf-select="uploadWork($files,'1')" name="files" type="file" value="" ng-disabled="true" />
															<button class="addFileBtn">上传文件</button>
														</div>-->
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="proType_box_a" ng-if="taskInfoMG!=undefined">
								<form id='art'>
									<div class="proType_box_nav">
										<span>美工</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务周期：
												</div>
												<div class="proType_details">
													<select class="fn-left colorDisable" ng-model="taskInfoMG.months" ng-disabled="true">
														<option value="1">一个月</option>
														<option value="2">二个月</option>
														<option value="3">三个月</option>
														<option value="4">四个月</option>
														<option value="5">五个月</option>
														<option value="6">六个月</option>
														<option value="7">七个月</option>
														<option value="8">八个月</option>
														<option value="9">九个月</option>
														<option value="10">十个月</option>
														<option value="11">十一个月</option>
														<option value="12">十二个月</option>
													</select>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务类型：
												</div>
												<div class="proType_details">
													<div class="proType_detailsR">
														<label class="mgr10 colorDisable"> 
															<input type="radio" ng-disabled="true" id="zh" name='serviceType' ng-checked="taskInfoMG.serviceType=='0'"  value='0' ng-click=''/>单项
														</label>
														<label class="mgr5 colorDisable">
															<input type="radio" ng-disabled="true" id="ti" name='serviceType' ng-checked="taskInfoMG.serviceType=='1'" value='1' ng-click='' />包月
														</label>&nbsp;
													</div>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="">
													服务日期：
												</div>
												<div class="proType_details">
													<input type="text" id="beginDateMG" class="fn-left laydate-icon form-control effectdatatime" name='beginDate' ng-model="taskInfoMG.beginDate" placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input type="text" id="endDateMG" class="fn-left laydate-icon form-control effectdatatime" name='endDate' ng-model="taskInfoMG.endDate" placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务费用：
												</div>
												<div class="proType_details colorDisable">
													<input type="text" class="colorDisable" ng-disabled="true" ng-model="taskInfoMG.serviceAmount" placeholder="200" />
													<span class="colorDisable">元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													产品备注：
												</div>
												<div class="proType_details">
													<textarea type="text" class="colorDisable" ng-disabled="true" name='taskMemo' ng-model='taskInfoMG.taskMemo' /></textarea>
													<span class="color999"> <i ng-if="taskInfoMG.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoMG.taskMemo.length!=undefined">{{taskInfoMG.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoMG.contractExtendList" ng-if='taskInfoMG.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="proType_box_a proType_box_ab" ng-if="taskInfoYY!=undefined">
								<form id='operation'>
									<div class="proType_box_nav">
										<span>运营</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" >
													服务日期：
												</div>
												<div class="proType_details">
													<input type="text" id="beginDateYY" class="fn-left laydate-icon form-control effectdatatime" name='beginDate' ng-model="taskInfoYY.beginDate" placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input type="text" id="endDateYY" class="fn-left laydate-icon form-control effectdatatime" name='endDate' ng-model="taskInfoYY.endDate" placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务费用：
												</div>
												<div class="proType_details">
													<input type="text" class="colorDisable" class="colorDisable" ng-model="taskInfoYY.serviceAmount" ng-disabled="true" placeholder="200" />
													<span class="colorDisable">元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													产品备注：
												</div>
												<div class="proType_details">
													<textarea ng-disabled="true" class="colorDisable" type="text" name='taskMemo' ng-model='taskInfoYY.taskMemo' /></textarea>
													<span class="color999 colorDisable"> <i ng-if="taskInfoYY.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoYY.taskMemo.length!=undefined">{{taskInfoYY.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoYY.contractExtendList" ng-if='taskInfoYY.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="proType_box_a proType_box_ab" ng-if="taskInfoPX!=undefined">
								<form id='train'>
									<div class="proType_box_nav">
										<span>培训</span>
									</div>
									<div class="proType_box_under">
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="" >
													服务日期：
												</div>
												<div class="proType_details">
													<input  type="text" id="beginDatePX" class="fn-left laydate-icon form-control effectdatatime" name='beginDate' ng-model="taskInfoPX.beginDate" placeholder="开始日期" onclick="laydate()" />
													<span class="fn-left mgl10 mgr10 am-ft-gray">—</span>
													<input  type="text" id="endDatePX" class="fn-left laydate-icon form-control effectdatatime" name='endDate' ng-model="taskInfoPX.endDate" placeholder="结束日期" onclick="laydate()" />
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													服务费用：
												</div>
												<div class="proType_details">
													<input ng-disabled="true" class="colorDisable" ng-model="taskInfoPX.serviceAmount" type="text" placeholder="200" />
													<span class="colorDisable">元</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													产品备注：
												</div>
												<div class="proType_details">
													<textarea ng-disabled="true" class="colorDisable" type="text" ng-model='taskInfoPX.taskMemo' /></textarea>
													<span class="color999 colorDisable"> <i ng-if="taskInfoPX.taskMemo.length==undefined">0</i> <i
												ng-if="taskInfoPX.taskMemo.length!=undefined">{{taskInfoPX.taskMemo.length}}</i> /200
											</span>
												</div>
											</div>
										</div>
										<div class="proType_box_contenr">
											<div class="proType_detailsBox fn-clear">
												<div class="colorDisable">
													交接单：
												</div>
												<div class="proType_details">
													<div class="checkContractInfo fn-clear">
														<div class="checkContractInfoUpload" ng-repeat="file in taskInfoPX.contractExtendList" ng-if='taskInfoPX.contractExtendList.length>0'>
															<img src="../static/base/images/icon_file.png" />
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length<8">{{file.fileName}}</span>
															<span class="mgl5" id="fileName1" ng-if="file.fileName.length>=8">{{file.fileName |limitTo:8}}...</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							合同费用：
						</div>
						<div class="contractCost fn-left">
							<input type="text" ng-disabled="true" name="totalAmount" ng-model='contractInfo.totalAmount' class="mgr5 colorDisable" style="width: 75px;" />
							<span class="colorDisable">元</span>
						</div>
					</div>
					<div class="infoLine infoLineg fn-clear">
						<div class="fn-left infoTitile">
							合同备注：
						</div>
						<textarea type="text" name='memo' class="colorDisable" ng-disabled="true" ng-model='contractInfo.memo' /></textarea>
						<span class="color999"> <i ng-if="contractInfo.memo.length==undefined">0</i> <i
							ng-if="contractInfo.memo.length!=undefined">{{contractInfo.memo.length}}</i> /200
						</span>
					</div>
					<div class="infoLine infoLinec fn-clear infoLine_bill">
						<div class="fn-left infoTitile">
							签单人：
						</div>
						<div class="contractCost fn-left">
							<input type="text" ng-disabled="true"  ng-model='contractInfo.userName' class="mgr5 colorDisable" style="width: 75px;" />
						</div>
					</div>
					<div class="infoLine infoLinec fn-clear mgt15 mgb15">
						<div class="fn-left infoTitile">
							签订时间：
						</div>
						<input type="text" ng-disabled="true" class="fn-left laydate-icon form-control effectdatatime" name='signDate' ng-model='contractInfo.signDate' placeholder="签单日期" onclick="laydate()" />
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile" style="height: 1px;">
						</div>
						<button type="button" class="btn btn-primary " ng-click="editContract()">确认</button>
						<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
					</div>
				</div>
			</div>
		<!--</form>-->
	</div>
</div>
</div>
<div class="fn-clear"></div>

<script>
	$(function() {
		var formArray = [];
		formArray.push('{"contractForm":"/contract/addContract"}');
		initValidate(formArray, pos);
		$('.selectpicker').selectpicker('refresh');
	})
</script>