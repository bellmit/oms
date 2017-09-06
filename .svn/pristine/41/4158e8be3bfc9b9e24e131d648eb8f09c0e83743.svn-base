<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!-- 主要 -->
<div class="wrapper" style="position: inherit;">
<!--------------- Content start ----------------->
    <div class="content-wrapper" >
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">充值卡</h2>
        </div>
        <div class="fn-clear"></div>
        <!-- content info start -->
        <section class="container-fluid">
            <div class="row">
                <!-- search start -->
                <form class="form-horizontal" id="">
                <div class="productSearch productSearch-type2 voucherList-search">
                        <div class="row">
                        	  <div class="fn-left">
                                    <span class="">卡号：</span>
                                    <input type="text" ng-model="search.cardNum" class="" name="" style="width: 180px;height: 30px;"/>
                            </div>
                            <div class="fn-left mgl20">
                                    <span class="">状态：</span>
                                    <select name="proStatus" ng-model="search.status" class=" h30">
                                    	<option value="">请选择</option>
                                    	<option value="0">未激活</option>
                                    	<option value="1">已激活</option>
                                    	<option value="2">已使用</option>
                                    	<option value="3">已作废</option>
                                    </select>
                            </div>
                             <div class="fn-left mgl20">
                                    <span class="fn-left">录入时间：</span>
                                    <input class="laydate-icon " type="text"  onclick="laydate({max: laydate.now()})" name="beginDate" id="beginDate" value="" readonly="readonly" placeholder="" style="height: 30px;width: 110px;" />
									<span class="mgl5 mgr5">至</span>
									<input class="laydate-icon " type="text"  onclick="laydate({max: laydate.now()})" name="endDate" id="endDate" value="" readonly="readonly" placeholder="" style="height: 30px;width: 110px;" />
                            </div>
                            <div class="fn-left mgl20">
                                <button type="button" class="grey-btn mgr20" ng-click="getChargeCard()">查询</button>
                            </div>
                        </div>
                </div>
                </form>
                <!-- List start -->
           <div class="proList-nav proList-nav-wd">
            <div class="proTop"> 
                <span class="fn-left">查询结果（共{{count}}条记录）</span>
                <button  type="button" class="line-btn fn-right mgl10" ng-click="showFrametype('5','')">批量导入</button>
                <button  type="button" class="line-btn fn-right mgl10" ng-click="">下载导入模版</button>
                <button  type="button" class="line-btn fn-right" ng-click="showFrametype('3','')">添加充值卡</button>
                <div class="fn-clear"></div>
            </div>
            <form id="wdProductListForm">
                     <table class="table table-hover table-striped unoinListTable voucherListTable" >
                    <tr class="">
                        <th scope="col" style="width: 4%;"></th>
                        <th scope="col" style="width: 12%;">卡号</th>
                        <th scope="col" style="width: 10%;">密码</th>
                        <th scope="col" style="width: 10%;">金额</th>
                        <th scope="col" style="width: 18%;">录入时间</th>
                        <th scope="col" style="width: 20%;">备注</th>
                        <th scope="col" style="width: 13%;">状态</th>
                        <th scope="col" >操作</th>
                    </tr>
                    <tr ng-repeat="chargeCard in chargeCardList">
                    	<td>
                    		<input type="checkbox" class="mgr0 fn-right mgl5 code_checkbox" ng-disabled="chargeCard.status!='0'" ng-click="setCheck(this)"/>
                    	</td>
                    	<td>{{chargeCard.cardNum}}</td>
                    	<td>{{chargeCard.password}}</td>
                    	<td>{{chargeCard.amount}}</td>
                    	<td>{{chargeCard.createTime}}</td>
                    	<td>{{chargeCard.memo}}</td>
                    	<td>
                    		<span class="color666" ng-if="chargeCard.status=='0'">未激活</span>
                    		<span class="am-ft-green" ng-if="chargeCard.status=='1'">已激活</span>
                    		<span class="am-ft-gray" ng-if="chargeCard.status=='2'">已使用</span>
                    		<span class="am-ft-gray" ng-if="chargeCard.status=='3'">已作废</span>
                    	</td>
                    	<td>
                    		<div class="handle-pointer" ng-if="chargeCard.status=='0'">
	                    		<span class="am-ft-d4 " ng-click="showFrametype('1',this)">激活</span>
	                    		<span class="am-ft-gray"  ng-click="showFrametype('6',this)">删除</span>
                    		</div>
                    		<div  class="handle-pointer" ng-if="chargeCard.status=='1'">
	                    		<span class="am-ft-d4" ng-click="showFrametype('2',this)">作废</span>
                    		</div>
                    	</td>
                    </tr>
                </table>
              <!-- List end -->
            </form>
            <div class="fn-clear"></div>
            </div>
          <div class="soldOut-batch fn-left" style="width: 33%;">
          		<label class="label-input am-ft-d4">
                    <input type="checkbox" id="selectAll" name="" value=""  ng-click="setCheckAll()"/>全选
          		</label>
                    <button type="button" class="btn btn-default  white-blue-btn" ng-click="showFrametype('4','')">批量激活</button>
                    <button type="button" class="btn btn-default white-blue-btn" ng-click="batchDown()">导出excel</button>
                <div class="fn-clear"></div>
            </div>
        </div>
        </section>
	    <!--分页 start-->
	    <div class="pagelist priv-pagelist" style="width: 92.5% !important;">
	    	<div id="paging"></div>    
	    </div>
	    <!--分页 end-->
   </div>
    <!--激活-->
<div class="maskBgw " ng-if="model.isShowFrame=='1'">
<div class="mask-container mask-containera">
	<div class="mask-top fn-clear">
		<p class="fn-left">激活</p>
		<a href="javascript:;">
			<img ng-click="closedialog()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
		</a>
	</div>
	<div class="mask-content mask-contenta" style="padding-right: 100px;">
		<form action="" class="info-form fn-clear" id="">
			<div class="continue-frame">
				<div class="continue-frame-content">
					<span class="am-ft-14 color666">卡号：</span>
					<span>{{editCard.cardNum}}</span>
				</div>
				<div>
					<span class="am-ft-14 color666">金额：</span>
					<input type="text" class="mgr5 w70 h30" ng-model="editCard.amount"/>
					<span>元</span>
				</div>
				<div>
					<span class="am-ft-14 color666">备注：</span>
					<input type="text" class="w200 h30" ng-model="editCard.memo"/>
				</div>
			</div>
		</form>
	</div>
	<div class="mask-bottom fn-clear">
		<span class="am-ft-red">{{warn}}</span>
		<button class="commit fn-left" ng-click="updateCardOne('1')">确认</button>
		<button class="cancel fn-left" ng-click="closedialog()">取消</button>
	</div>
</div>
</div>
    <!--/激活-->
    <!--作废-->
<div class="maskBgw " ng-if="model.isShowFrame=='2'">
<div class="mask-container mask-containera mask-containerb">
	<div class="mask-top fn-clear">
		<p class="fn-left">确认作废</p>
		<a href="javascript:;">
			<img ng-click="closedialog()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
		</a>
	</div>
	<div class="mask-content mask-contenta" style="padding-right: 100px;padding-bottom: 45px;">
		<form action="" class="info-form fn-clear" id="">
			<div class="continue-frame">
				<div class="continue-frame-content">
					<span class="am-ft-14 color666">卡号：</span>
					<span>{{editCard.cardNum}}</span>
				</div>
				<div>
					<span class="am-ft-14 color666">金额：</span>
					<span>{{editCard.amount}}元</span>
				</div>
			</div>
		</form>
	</div>
	<div class="mask-bottom fn-clear">
		<button class="commit fn-left" ng-click="updateCardOne('2')">确认</button>
		<button class="cancel fn-left" ng-click="closedialog()">取消</button>
	</div>
</div>
</div>
   <!--/作废-->
   <!--添加充值卡-->
   <div class="maskBgw " ng-if="model.isShowFrame=='3'">
<div class="mask-container mask-containera mask-containere" >
	<div class="mask-top fn-clear">
		<p class="fn-left">添加充值卡</p>
		<a href="javascript:;">
			<img ng-click="closedialog()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
		</a>
	</div>
	<div class="mask-content mask-contenta" style="padding-right: 100px;">
		<form action="" class="info-form fn-clear" id="">
			<div class="continue-frame">
				<div class="continue-frame-content">
					<span class="am-ft-14 color666" >卡号：</span>
					<input type="text" class="mgr5 w160 h30" ng-model="addCard.cardNum"/>
				</div>
				<div>
					<span class="am-ft-14 color666" >密码：</span>
					<input type="text" class="mgr5 w160 h30" ng-model="addCard.password" />
				</div>
				<div>
					<span class="am-ft-14 color666" >金额：</span>
					<input type="text" class="mgr5 w70 h30" ng-model="addCard.amount"/>
					<span>元</span>
				</div>
			</div>
		</form>
	</div>
	<div class="mask-bottom fn-clear">
		<span class="am-ft-red">{{warn}}</span>
		<button class="commit fn-left" ng-click="addChargeCard()">确认</button>
		<button class="cancel fn-left" ng-click="closedialog()">取消</button>
	</div>
</div>
</div>
   <!--/添加充值卡-->
  <!--批量激活-->
  <div class="maskBgw " ng-if="model.isShowFrame=='4'">
<div class="mask-container mask-containera mask-containerc" >
	<div class="mask-top fn-clear">
		<p class="fn-left">批量激活</p>
		<a href="javascript:;">
			<img ng-click="closedialog()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
		</a>
	</div>
	<div class="mask-content mask-contenta" style="padding-right: 100px;">
		<form action="" class="info-form fn-clear" id="">
			<div class="continue-frame">
				<div class="continue-frame-content">
					<span class="am-ft-14 color666">已选中：</span>
					<span>{{checkChargeCardArr.length}}张会员卡</span>
				</div>
				<div>
					<span class="am-ft-14 color666" style="margin-left: 14px;">金额：</span>
					<input type="text" class="mgr5 w70 h30" ng-model="editCardBatch.amount"/>
					<span>元</span>
				</div>
				<div>
					<span class="am-ft-14 color666" style="margin-left: 14px;">备注：</span>
					<input type="text" class="w200 h30" ng-model="editCardBatch.memo"/>
				</div>
			</div>
		</form>
	</div>
	<div class="mask-bottom fn-clear">
		<span class="am-ft-red">{{warn}}</span>
		<button class="commit fn-left" ng-click="updateCardBatch()">确认</button>
		<button class="cancel fn-left" ng-click="closedialog()">取消</button>
	</div>
</div>
</div>
  <!--/批量激活-->
  <!--导入充值卡-->
    <div class="maskBgw " ng-if="model.isShowFrame=='5'">
<div class="mask-container mask-containera mask-containerd" >
	<div class="mask-top fn-clear">
		<p class="fn-left">导入充值卡</p>
		<a href="javascript:;">
			<img ng-click="closedialog()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
		</a>
	</div>
	<div class="mask-content mask-contenta" style="padding: 50px 100px;">
		<form action="" class="info-form fn-clear" id="">
			<div class="continue-frame">
				<div class="checkContractInfo fn-clear">
					<span class="am-ft-14 color666 fn-left" style="margin-left: 14px;">添加文件：</span>
					<!--上传文件-->
					<div class="checkContractInfoFile checkContractInfoFile_data mgt-10 fn-hide">
						<input ngf-select="uploadWork($files,'1')" name="files" type="file" value="" >
						<button class="addFileBtn">上传文件</button>
					</div>
					<!--上传成功-->
					<div class="checkContractInfoUpload mgt-10" >
						<img src="../static/base/images/icon_file.png" />
						<span class="mgl5" id="" >附件1.png</span>
						<!--<span class="mgl5" id="fileName1" ng-if="fileName1.length<8">{{fileName1}}</span>
						<span class="mgl5" id="fileName1" ng-if="fileName1.length>=8">{{fileName1 |limitTo:8}}...</span>-->
						<!--<img src="../static/base/images/icon_download1.png"/>-->
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class="mask-bottom fn-clear">
		<button class="commit fn-left" ng-click="">确认</button>
		<button class="cancel fn-left" ng-click="closedialog()">取消</button>
	</div>
</div>
</div>
  <!--/导入充值卡-->
  <!--删除-->
  <div class="maskBgw " ng-if="model.isShowFrame=='6'">
<div class="mask-container mask-containera mask-containerf">
	<div class="mask-top fn-clear">
		<p class="fn-left">确认删除</p>
		<a href="javascript:;">
			<img ng-click="closedialog()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
		</a>
	</div>
	<div class="mask-content mask-contenta" style="padding:50px 100px;">
		<form action="" class="info-form fn-clear" id="">
			<div class="continue-frame">
				<div class="continue-frame-content">
					<span class="am-ft-14 color666">卡号：</span>
					<span>{{deleteCard.cardNum}}</span>
				</div>
			</div>
		</form>
	</div>
	<div class="mask-bottom fn-clear">
		<button class="commit fn-left" ng-click="deleteChargeCard()">确认</button>
		<button class="cancel fn-left" ng-click="closedialog()">取消</button>
	</div>
</div>
</div>
  <!--/删除-->
   <!--充值成功/激活成功-->
    <div class="tips-success" ng-if="showResult!='0'">
   		<span ng-if="showResult=='1'">充值成功</span>
   		<span ng-if="showResult=='2'">激活成功</span>
   		<span ng-if="showResult=='3'">删除成功</span>
   		<span ng-if="showResult=='4'">已作废</span>
   	</div>
  <!--/充值成功/激活成功-->
<script type="text/javascript">
    $(".isTipsFrame").center();
    $(".tips-success").center();
    $(".mask-container").center();
    $(".mask-containerb").center();
    $(".mask-containerc").center();
    $(".mask-containerd").center();
    $(".mask-containere").center();
    $(".mask-containerf").center();
  
</script>