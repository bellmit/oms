<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
			<div class="content-wrapper content-wrapper-order disCountCard-content-wrapper">
			  	<div class="col-md-11  addDiscountNav fn-clear">
			  		<div class="addDiscountNav_01 fn-left">
			  			<span class="discound_nav">卡券信息输入</span>
			  		</div>
				    <div class="addDiscountNav_02">
			  			<span class="discound_nav">卡券数量及范围数量</span>
				    </div>
				    <div class="addDiscountNav_03">
			  			<span class="discound_nav">添加成功</span>
				    </div>
			    </div>
			    <div class="fn-clear"></div>
				<div class="col-md-11 newDisCountBox fn-clear">
					<form id="step1">
					<div class="col-md-12 newDisCountComon fn-clear">
						<div>卡券名称:</div>
						<div >
							<input type="text" ng-model="disCountName" name='disCountName' />
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div >类别:</div>
						<div>
							<select class="discountType"  ng-model="couponModality" ng-change="changeType()"  name="couponModality">
								<option value="1">优惠券</option>
								<option value="0">折扣券</option>
							</select>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear" ng-show="showDiscountType=='1'">
						<div >卡券额度:</div>
						<div>
							<label class="checkbox-inline">
									<input type="radio" class="" value="1"  ng-model="amount" id="fixedLimit" name="amount" ng-click="setLimit('1')">固定额度
							</label>
							<label class="checkbox-inline">
									<input type="radio" class="" id="randomLimit" value="0"  ng-model="amount" name="amount" ng-click="setLimit('2')">随机额度
							</label>
							<div ng-show="isLimitshow=='1'">
								<input type="text" class="inputSize" ng-value="" ng-model="fixedLimit" name="fixedLimit" ng-change="isNum('2')"/>&nbsp;元
								<span ng-show="showmess2=='1'" class="am-ft-red">*请输入合理数字</span>
							</div>
							<div ng-show="isLimitshow=='0'">
								<input type="text"  class="inputSize" ng-value="" ng-model="randomMIn" name="randomMIn" ng-change="isNum('3')" />&nbsp;元&nbsp;
								<span class="limitLine">——</span>
								<input type="text" class="inputSize" ng-value="" ng-model="randomMax" name="randomMax" ng-change="isNum('3')"/>&nbsp;元
								<span ng-show="showmess3=='1'" class="am-ft-red">*请输入合理数字</span>
								<span ng-show="showmess3=='2'" class="am-ft-red">*随机最大值不能小于最小值</span>
							</div>
						</div>
						
					</div>
					<div class="col-md-12 newDisCountComon fn-clear" ng-show="showDiscountType=='0'">
						<div >折扣:</div>
						<div>
							<input type="text"  class="inputWidth" ng-model="discount" name="discount" placeholder="0-10" ng-change="isNum('5')"/>&nbsp;折&nbsp;
							<span ng-show="showmess7=='1'" class="am-ft-red">*请输入0-10范围数字</span>
						</div>
						
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div>满额条件:</div>
						<div >
							<span>满</span>
							<input type="text" id="fullAmount" class="inputSize" name="fullAmounta" ng-model="fullAmounta" ng-change="isNum('1')" />
							<span>元使用</span>
							<label class="checkbox-inline mgl10">
								<input type="checkbox" id="notfullAmount"  ng-model="notFullAmount" />
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无门槛使用
							</label>
							<span ng-show="showmess6=='1'" class="am-ft-red">*请输入满额条件</span>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div >有效时间:</div>
						<div class="setEffectTime">
							<input class="laydate-icon " placeholder="开始时间" type="text" id="start"  ng-model="activeTime" name="activeTime"   style="height: 31px;"/>
							<span class="setEffectTimeTitl">——</span>
							<input class="laydate-icon " placeholder="结束时间" name="lapsedTime"  ng-model="lapsedTime" type="text" id="end"   style="height: 31px;"/>
							<span ng-show="showmess5=='1'" class="setEffectTimeTitl1">*请选择生效日期或者结束日期</span>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div >会员限领:</div>
						<div >
							<input type="text" class="inputSize" ng-value="" name="limitCollar" ng-model="limitCollar" ng-change="isNum('4')" />&nbsp;份
							<span ng-show="showmess4=='1'" class="am-ft-red">*请输入合理数字</span>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear" ng-show="showDiscountType=='1'">
						<div class="" >可否叠加:</div>
						<div class="">
							<label class="checkbox-inline" style="width: 162px;">
								<input type="radio" id="isAdd" name="superposition" ng-model="superposition"  value="y"/>可以与促销活动叠加
							</label>
							<label class="checkbox-inline" style="width: 162px;">
								<input type="radio"  id="notAdd"  ng-model="superposition"  name="superposition" value="n"/>不可与促销活动叠加

							</label>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div class="">卡券类型:</div>
						<div class="">
							<label class="checkbox-inline">
								<input type="radio" ng-model="couponType" id="virtual" value="0" name="couponType"/>虚拟券
							</label>
							<label class="checkbox-inline">
								<input type="radio" id="object" ng-model="couponType"  name="couponType" value="1"/>实物券
							</label>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear" ng-if="couponType=='0'">
						<div class="" >是否自动发放:</div>
						<div class="">
							<label class="checkbox-inline">
								<input type="radio"  value="y" id="virtual" ng-model="autoProviding"  name="autoProviding"/>是
							</label>
							<label class="checkbox-inline">
								<input type="radio" id="object" value="n" ng-model="autoProviding" name="autoProviding"/>否
							</label>
						</div>
					</div>
					</form>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div class="col-md-2"></div>
						<div class="col-md-10 discountNextBtn">
							<button class="upStep whiteGroundBlueBtn mgr5" ng-click="goBack()">上一步</button>
							<button ng-click="nextStep(activeTime)">下一步</button>
						</div>
					</div>
					
				</div>
			</div>
		<!--------------- Content end ----------------->
			<script>
				$(function(){
					//选择限量
					$("#fullAmount").click(function(){
						$("#notfullAmount").removeAttr("checked");
					});
					//选择限量
					$("#notfullAmount").click(function(){
						$("#fullAmount").val("");
					})
				})
			</script>
		