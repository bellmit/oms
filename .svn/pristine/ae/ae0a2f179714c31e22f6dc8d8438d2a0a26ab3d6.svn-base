<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper content-wrapper-post">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">发布商品</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="showPostProductList()">返回</a>
	</div>

	<div class="col-md-11 pageTitl removeBottom">
		<div class="col-md-9">
			<div class="storeProLeftImg fn-left">
				<img ng-src="{{model.mainPic}}" ng-if="model.mainPic != '' " />
				<img src="http://static.qineasy.com/base/images/img_default_goods.png" ng-if="model.mainPic == '' " />
			</div>
			<div class="storeProLeftDetil fn-left">
				<p class="forwardTop-rightTitl">{{model.proName}}</p>
				<p class="inDetil">款号：{{model.proModelnum}}</p>
				<span class="">吊牌价：￥{{model.proPrice}}</span>
				<span class="mgr5 mgl20">品类：{{model.sortName}}</span>
			</div>
		</div>
	</div>
	<div class="fn-clear"></div>

	<p class="am-ft-red post-note">发布前，请为该商品补充必要的扩展属性</p>
	<!--已选店铺-->
	<div class="stores-selcect">
		<span class="fn-left">已选要发布的店铺：</span>
		<div class="stores-selcect-list" ng-repeat="pub in publishs">
			<img ng-if="pub.shopType == '4'" src="../static/base/images/logo_tmall.png" />
			<img ng-if="pub.shopType == '2'" src="../static/base/images/logo_taobao.png" />
			<img ng-if="pub.shopType == '5'" src="../static/base/images/logo_jindong.png" />
			<img ng-if="pub.shopType == '0'" src="../static/base/images/logo_1688.png" />
			<img ng-if="pub.shopType == '1'" src="../static/base/images/logo_AliExpress.png" />
			<img ng-if="pub.shopType == '5'" src="../static/base/images/logo_amazon.png" />
			<p>{{pub.shopName}}</p>
		</div>
		<div class="fn-clear"></div>
	</div>
	<div class="stores-selcect">
		<span class="fn-left">宝贝卖点：</span>
		<div class="stores-selcect-list">
			<p>宝贝卖点不在无线商品详情页中显示</p>
			<textarea ng-model="sellPoint"></textarea>
		</div>
		<div class="fn-clear"></div>
	</div>

	<!-- =============== 信息填写 start ======================= -->
	<div class="extent-content">
		<!---------扩展信息-------->
		<h3>填写基本的扩展信息</h3>
		<div class="prodet-nav prodet-content">
			<div id="proInfo" class="prodet-box prodet-box-bg">
				<div id="ashow" class="row" ng-repeat="attr in attrList" ng-if="attr.required == '0'">
					<div class="nowraps-text inprodet-titl"><em class="am-ft-red mgr5">*</em><input type="hidden" value="{{attr.attrId}}"><span>{{attr.attrName}}</span>：</div>
					<div class="col-md-2 form-group" ng-if="attr.attrValue.length > 0">
						<select class="col-md-12" ng-model="attr.value">
							<option value="">请选择</option>
							<option ng-repeat="value in attr.attrValue" value="{{value.attrValueId}}">{{value.attrValueName}}</option>
						</select>
					</div>
					<div class="col-md-2 form-group" ng-if="attr.attrValue.length == 0">
						<input class="col-md-10 mgr5" type="text" name="attrValue" value="" ng-model="attr.value" />
					</div>
				</div>
				<hr />
				<!-- 
				<div id="otherAttr" class="row new-property" ng-repeat="cust in customAttr" ng-if="customAttr.length > 0">
					<input class="col-md-1" type="text" name="" value="" placeholder="属性" ng-model="cust.attrId" />
					<em class="fn-left">:</em>
					<input class="col-md-2" type="text" name="" value="" placeholder="属性值" ng-model="cust.attrValue" />
					<a href="javascript:;" class="fn-left" ng-click="delCustomSort($event)">删除</a>
				</div>
				<p id="addCustomSort">
					<a href="javascript:;" ng-click="addCustomSort()">+添加商品属性</a>
					<span class="am-ft-gray mgl10">如果您觉得我们提供的属性无法满足您的需求，您可以手动添加产品属性</span>
				</p> -->
				<div class="fn-clear"></div>
			</div>
		</div>
		<h3>填写宝贝规格</h3>
		<div class="prodet-nav prodet-content">
			<div id="proInfo" class="prodet-box prodet-box-bg">
				<h5>颜色分类</h5>
				<p class="mgt20 pdl20">
					<span class="am-ft-red">选择标准色可以增加搜索/导购机会</span>
					<span>标准色还可填写颜色备注信息(偏深，偏亮等)</span>
					<a href="javascript:;" class="pdl15">查看详情</a>
				</p>
				<div id="addColor" class="pdl20 mgt10" class="propostcolor">
					<div id="skuColor" class="mgb20" ng-repeat="color in colorOrg" ng-show="colorOrg.length>0">
						<input type="hidden" value="{{colorList.attrId}}"/>
						<!--<input type="text" />-->
						<select style="width:250px" ng-change="chkColor()" ng-model="color.attrValueId">
							<option value="">请选择</option>
							<option ng-repeat="value in colorList.attrValue" value="{{value.attrValueId}}">{{value.attrValueName}}</option>
						</select>
						<!-- 
						<input type="text" class="mgl15" placeholder="备注(如偏深偏浅等)" />
						<button style="position:  relative;color:#333;width:56px;height:28px;background-color:#EFEFEF ;border: 1px solid #666;line-height: 28px;display: inline-block;text-align: center;">上传图片
							<input type="file" class="proPostFile" style="opacity: 0;position:absolute;width: 56px;height: 28px;bottom: 0;left: 0;"/>
						</button>
						 -->
					</div>
					<div id="skuColor" class="mgb20" ng-repeat="attr in attrList" ng-if="attr.attrName=='颜色分类'">
						<input type="hidden" value="{{attr.attrId}}"/>
						<!--<input type="text" />-->
						<select style="width:250px" ng-change="chkColor()" ng-model="color">
							<option value="">请选择</option>
							<option ng-repeat="value in attr.attrValue" value="{{value.attrValueId}}">{{value.attrValueName}}</option>
						</select>
						<!-- 
						<input type="text" class="mgl15" placeholder="备注(如偏深偏浅等)" />
						<button style="position:  relative;color:#333;width:56px;height:28px;background-color:#EFEFEF ;border: 1px solid #666;line-height: 28px;display: inline-block;text-align: center;">上传图片
							<input type="file" class="proPostFile" style="opacity: 0;position:absolute;width: 56px;height: 28px;bottom: 0;left: 0;"/>
						</button>
						 -->
					</div>
					
					<input id="addFlag" type='hidden'/>
				</div>
				<h5>尺码</h5>
				<p class="mgt20 pdl20">
					<span class="am-ft-red">选择标准尺码可以增加搜索/导购机会</span>
					<span>标准尺码还可填写颜色备注信息(偏大，偏小等)</span>
					<a href="javascript:;" class="pdl15">查看详情</a>
				</p>
				<div class="fn-clear mgt20">
					<label for="common" class="mgl20 fn-left">
						<input type="radio" name="size" class="mgr5 mgt0" style="vertical-align: middle;" checked id="common"/>
						通用
					</label>
					<!-- 
					<label for="china" class="mgl20 fn-left">
						<input type="radio" name="size" class="mgr5 mgt0" style="vertical-align: middle;" id="china"/>
						中国码
					</label>
					<label for="eng" class="mgl20 fn-left">
						<input type="radio" name="size" class="mgr5 mgt0" style="vertical-align: middle;" id="eng"/>
						英码
					</label>
					<label for="america" class="mgl20 fn-left">
						<input type="radio" name="size"  class="mgr5 mgt0" style="vertical-align: middle;" id="america"/>
						美码
					</label>
					<label for="junma" class="mgl20 fn-left">
						<input type="radio" name="size" class="mgr5 mgt0" style="vertical-align: middle;" id= "junma"/>
						均码
					</label>
					 -->
				</div>
				<div id="addSize" class="pdl20 mgt10" class="propostcolor" ng-repeat="attr in attrList" ng-if="attr.attrName=='尺码'">
					<div class="mgb20 fn-clear pt20 pdl20" style="background-color: #fff;">
						<div id="skuSize" class="fn-left mgr20 pdr20 mgb15" ng-repeat="value in attr.attrValue" ng-if="value.attrValueName.endsWith('A')">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;" value="{{attr.attrId}}" ng-click="chkSize()" ng-checked="sizeCheck(value.attrValueId)">
							<input type="hidden" value="{{value.attrValueId}}" />
							<span>{{value.attrValueName}}</span>
							<input type="text" style="width:60px" />
						</div>
					</div>
					<!-- 
					<div class="mgb20 fn-clear pt20 pdl20" style="background-color: #fff;">
						中国码
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>

					</div>
					<div class="mgb20 fn-clear pt20 pdl20" style="background-color: #fff;">
						英码
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>

					</div>
					<div class="mgb20 fn-clear pt20 pdl20" style="background-color: #fff;">
						美码
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>

					</div>
					<div class="mgb20 fn-clear pt20 pdl20" style="background-color: #fff;">
						均码
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<span>145/80A</span>
							<input type="text" style="width:60px" />
						</div>

					</div>
					
					<div class="mgb20 mgt20">
						<div class="fn-left mgr20 pdr20 mgb15">
							<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;">
							<input type="text" style="width:90px" placeholder="自定义尺码" />
							<p class="mgt20">
								<a href="javascript:;">+添加尺码尺寸对照表</a>
							</p>
						</div>
					</div> -->
				</div>

				<div class="fn-clear"></div>
				
				<div ng-show="showSaleFlag==1">
					<h5>宝贝销售规格</h5>
					<p class="mgt20 pdl20">
						<span class="am-ft-red">该类目下，颜色分类，尺码，请全选或全不选，如果只选一部分则无法保存对应的价格和库存，库存为0的宝贝规格，在商品详情页不展示</span>
					</p>
					<!-- 
					<div class="mgt20 mgb20">
						<span>批量填充</span>
						<input type="text" placeholder="价格" class="mgr10">
						<input type="text" placeholder="数量" class="mgr10">
						<input type="text" placeholder="商家编码" class="mgr10">
						<input type="text" placeholder="条形码" class="mgr10">
						<button style="color:#333;width:56px;height:28px;background-color:#EFEFEF ;border: 1px solid #666;line-height: 28px;display: inline-block;text-align: center;">确定</button>
					</div>
					 -->
					<div id="showSku">
						<table class="table table-hover table-striped table-bordered storeProSKU">
							<tr>
								<th scope="col">颜色分类</th>
								<th scope="col">尺码</th>
								 <th scope="col"><em class="am-ft-red"> *</em>价格(元)</th> 
								<th scope="col">数量(件)</th>
								<th scope="col">商品编码</th>
								<th scope="col">商品条形码</th>
							</tr>
							<tr id="skuTr" ng-repeat="colors in ColorNumAndName">
								<td><input type="hidden" value="{{colors.attrId}}"><input type="hidden" value="{{colors.attrValueId}}"><span>{{colors.attrValueName}}</span></td>
								<td>
									<div ng-repeat="sizes in SizeNumAndName" class="mgb10 color-size"><span>{{sizes.attrValueName}}</span>
										<input type="hidden" name="sizeAttrId" value="{{sizes.attrId}}" />
										<input type="hidden" name="sizeAttrValueId" value="{{sizes.attrValueId}}">
									</div>
								</td>
								<td>
									<div ng-repeat="skuPriceInfo in skuInfo" class="mgb10 color-size" ng-if="skuPriceInfo.color == colors.attrValueId">
										<input type="text" name="skuPrice" value="" ng-change="changePrice();" ng-model="skuPriceInfo.skuPrice"/>
									</div>
								</td>
								<td>
									<div ng-repeat="skuCountInfo in skuInfo" class="mgb10 color-size" ng-if="skuCountInfo.color == colors.attrValueId">
										<input type="text" name="skuCount" value="" ng-change="changeCount();" ng-model="skuCountInfo.amountOnSale"/>
									</div>
								</td>
								<td>
									<div ng-repeat="sizes in SizeNumAndName" class="mgb10 color-size">
										<input type="text" name="skuNum" value="" />
									</div>
								</td>
								<td>
									<div ng-repeat="sizes in SizeNumAndName" class="mgb10 color-size">
										<input type="text" name="skuCode" value="" />
									</div>
								</td>
							</tr>
						</table>
					</div>

				</div>
				<div class="stores-selcect mgt20 mgb20">
				<span class="fn-left">一口价：</span>
				<div class="stores-selcect-list col-md-10">
					<!-- <p>本类目下，宝贝的价格不得低于7.00元</p> -->
					<div>
						<table class="table table-hover table-striped table-bordered storeProSKU">
							<tr>
								<th scope="col"><em class="am-ft-red">*</em>价格(元)</th>
								<th scope="col"><em class="am-ft-red">*</em>总件数(件)</th>
								<th scope="col">商家编码</th>
								<th scope="col">商品条形码</th>
							</tr>
							<tr>
								<td><input value="" ng-model="price"/></td>
								<td><input value="" ng-model="count"/></td>
								<td><input value=""/></td>
								<td><input value=""/></td>
							</tr>
						</table>
					</div>
				</div>
				<div class="fn-clear"></div>
			</div>
				
				<div>
					<h5 class="mgb20">地区</h5>
					<div class="mgl15 mgb20">
						<span class="mgr20">地区:</span>
						<select ng-model="provinceName" ng-change="initprovinces()" style="width: 200px;" class="mgr20">
							<option value="">请选择省份</option>
                            <option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
						</select>
						<select ng-model="cityName" style="width: 200px;"  class="mgr20">
							<option value="">请选择城市</option>
							<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
						</select>
					</div>					
				</div>
				<!-- 
				<div>
					<h5>宝贝物流服务</h5>
					<div class="mgl15">
						<div class="fn-clear mgt20 ">
							<div class="fn-left mgr15 ">
								<em class="am-ft-red">*</em>
								提取方式
							</div>
							<div class="fn-left">
								<p class="mgb20">
									<input type="checkbox" class="mgr5 mgt0" style="vertical-align: middle;"/>
									<span>使用物流配送</span>
								</p>
								<p>
									<span class="am-ft-black mgr15">物流设置</span>
									<span>为了提升消费者购物体验，淘宝要求全网商品设置运费模板如何使用
										<a href="javascript:;">使用模板</a>
										，查看
										<a href="javascript:;">视频教程</a>
									</span>
								</p>
								<p class="mgt15 pdl20 pt20 pb20 mgb20"  style="background: #fff;">
									<em class="am-ft-red">*</em>
									<span>运费模板</span>
									<select name="" style="width:200px">
										<option value="">请选择</option>
									</select>
									<button style="position:  relative;color:#333;width:56px;height:28px;background-color:#EFEFEF ;border: 1px solid #666;line-height: 28px;display: inline-block;text-align: center;">上传图片
									</button>
								</p>
								<p>
								电子交易凭证：<a href="javascript:;">电子交易凭证</a>
								</p>
							</div>
							
							
							
						</div>
						
					</div>					
				</div> -->
				<div>
					<h5>售后保障信息</h5>
					<div class="mgl15">
						<div class="fn-clear mgt20 ">
							<div class="fn-left mgr15 ">
								售后服务
							</div>
							<div class="fn-left">
								<!-- 
								<p class="mgb20">
									<input type="checkbox" class="mgr5 mgt0" style="vertical-align: middle;"/>
									<span>提供发票</span>
								</p>
								<p class="mgb20">
									<input type="checkbox" class="mgr5 mgt0" style="vertical-align: middle;"/>
									<span>保修服务</span>
								</p>
								 -->
								<p class="mgb20">
									<input type="checkbox" class="mgr5 mgt0" style="vertical-align: middle;" id="sellPromise"/>
									<span>退换货承诺，凡使用支付宝服务付款购买本店商品，若存在质量问题或与描述不符，本店将主动提供退换货服务并承担来回运费</span>
								</p>
								<p class="mgb20">
									<input type="checkbox" class="mgr5 mgt0" style="vertical-align: middle;" id="newprepay"/>
									<span>服务承诺：该类商品，必须支持【七天退货】服务，承诺更好服务可通过【<a href="javascript:;">交易合约</a>】设置</span>
								</p>
							</div>
						</div>
						
					</div>					
				</div>
				<!-- 
				<div>
					<h5>宝贝其他信息</h5>
					<div class="mgl15 mgt20">
						<p class="fn-clear mgb20">
							<span class="fn-left mgr15">库存计数</span>
							<label for="paixia" class="fn-left mgr15">
								<input type="radio" class="mgt0 mgr5" style="vertical-align: middle;" name="count" id="paixia"/>
								买家拍下减库存
							</label>
							<label for="fukuan" class="fn-left mgr15">
								<input type="radio" class="mgt0 mgr5" style="vertical-align: middle;" name="count" id="fukuan"/>
								买家付款减库存
							</label>
						</p>
						<p class="fn-clear mgb20">
							<span class="fn-left  mgr15"><em class="am-ft-red">*</em>上架时间</span>
							<label for="like" class="fn-left mgr15">
								<input type="radio" class="mgt0 mgr5" style="vertical-align: middle;" name="shangjia" id="like"/>
								立刻上架
							</label>
							<label for="dingshi" class="fn-left mgr15">
								<input type="radio" class="mgt0 mgr5" style="vertical-align: middle;" name="shangjia" id="dingshi"/>
								定时上架
							</label>
							<label for="fangru" class="fn-left mgr15">
								<input type="radio" class="mgt0 mgr5" style="vertical-align: middle;" name="shangjia" id="fangru"/>
								放入仓库
							</label>
						</p>
						<p class="fn-clear mgb20">
							<span class="fn-left  mgr15">会员打折</span>
							<label for="bucanyu" class="fn-left mgr15">
								<input type="radio" class="mgt0 mgr5" style="vertical-align: middle;" name="discount" id="bucanyu"/>
								不参与会员打折
							</label>
							<label for="canyu" class="fn-left mgr15">
								<input type="radio" class="mgt0 mgr5" style="vertical-align: middle;" name="discount" id="canyu"/>
								参与会员打折
							</label>
						</p>
						<p class="fn-clear mgb20">
							<span class="fn-left  mgr15">橱窗推荐</span>
							<label for="chuchuang" class="fn-left mgr15">
								<input type="checkbox" class="mgt0 mgr5" style="vertical-align: middle;" id="chuchuang"/>
								不参与会员打折
							</label>
							<span class="am-ft-gray">
								您的橱窗使用情况：共【32】个，已使用【2】个
							</span>
						</p>
						
					</div>					
				</div>
    			 -->
			</div>
		</div>
		<!---------销售信息-------->
		<div class="forwarderBasicBtn">
			<button class="btn btn-primary" ng-click="publishProduct();" ng-show="!onlyShow">保存并发布</button>
			<button class="btn btn-primary" ng-click="proInfoSave()">保存</button>
			<button class="btn btn-default" ng-click="showPostProductList()">返回</button>
		</div>
		<div class="fn-clear"></div>
	</div>
	<!-- =============== 信息填写 end ======================= -->

</div>

</div>

<div class="fn-clear"></div>
</div>