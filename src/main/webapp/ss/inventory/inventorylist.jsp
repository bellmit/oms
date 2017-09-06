<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
<div class="content-wrapper" ng-hide="numA==1||numB==1||numC==1">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">盘点单管理<span></span></h2>
        <a href="javascript:;" class="btn fn-right btn-primary" ng-click="toaddOrder()">添加盘点单</a>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
        <div class="listSearch">
            <form class="form-horizontal" id="inventoryForm">
                <div class="row">
                    <div class="col-md-11">
                        <div class="form-group col-md-6">
                            <label class="col-sm-3 control-label">盘点单号：</label>
                            <div class="mgl-10 col-sm-9 pro-search">
                                <input type="text" name="inventoryId" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="form-group col-md-5">
                            <label class="col-sm-4 control-label">盘点时间：</label>
                            <div class="mgl-20 col-sm-8 pro-search">
                                <input class="laydate-icon form-control" type="text" onclick="laydate({max: laydate.now()})" name="createDate" value="" ng-model="createDatea" readonly="readonly" placeholder="选择时间" style="height: 34px;" />
                            </div>
                        </div>
                        <div class="col-md-1 am-ft-center searchBox">
                            <button type="button" class="btn fn-left btn-primary" ng-click="getInventory()">查询</button>
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
                        <th scope="col">盘点单号</th>
                        <th scope="col">盘点时间</th>
                        <th scope="col">库存数量</th>
                        <th scope="col">盘点数量</th>
                        <th scope="col">差异</th>
                        <th scope="col">盘点人</th>
                        <th scope="col">状态</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="inventory in inventorys">
                        <td>{{inventory.inventoryId}}</td>
                        <td>{{inventory.createDate}}</td>
                        <td>{{inventory.stkNum}}</td>
                        <td>{{inventory.invtNum}}</td>
                        <td><span class="am-ft-red">{{inventory.diffNum}}</span></td>
                        <td>{{inventory.oprName}}</td>
                        <td class="am-ft-red">{{inventory.status}}</td>
                        <td ng-if="inventory.status=='正在盘点'">
                            <a href="javascript:void(0)" data="{{inventory.inventoryId}},{{inventory.createDate}},{{inventory.oprName}}" class="col-md-4 line-btn" ng-click="inventoryEdit($event)">继续盘点</a>
                            <a href="javascript:void(0)" class="col-md-4 line-btn adjBtn" data="{{inventory.inventoryId}},{{inventory.stkNum}},{{inventory.invtNum}},{{inventory.diffNum}}" ng-click="storage($event,this)">调整入库</a>
                            <a href="javascript:;" class="col-md-4 line-btn-delete" id="{{inventory.inventoryId}}" ng-click="delInventory(inventory.inventoryId)">删除</a>
                        </td>
                        <td ng-if="inventory.status=='已完成'">
                            <a href="javascript:void(0)" data="{{inventory.inventoryId}},{{inventory.createDate}},{{inventory.oprName}}" ng-click="viewDetails($event)">查看详情</a>
                        </td>
                    </tr>
                </table>
				<!--分页 start-->
			    <div class="pagelist priv-pagelist">
			    	<div id="paging"></div>    
			    </div>
			    <!--分页 end-->
            </div>

        </form>
        <div class="fn-clear"></div>
    </div>

</div>

<!-- 调整库存弹窗-->
<div class="am-dialog createInvDialoglist InvDialog-max fn-hide createInvDialoglist0" id="adjustStock">
    <!--<i class="fa fa-close " id="claseadjustStock"></i>-->
    <img src="../static/base/images/closelogo.png" alt=""  id="claseadjustStock" class="closeImg fn-right" style="padding:0px 10px;position: absolute;right: 0px;">
    <div class="am-dialog-wrap">
        <div class="ManColTable col-lg-12">
            <div class="row">
                <div class="col-md-12 mgt10">
                    <label class="col-sm-5 control-label">盘点时间：{{createDate}}</label>
                    <label class="col-sm-5 control-label">盘点单号：{{inventoryId}}</label>
                    <label class="col-sm-5 control-label">盘点人：{{oprName}}</label>
                    <label></label>
                </div>
            </div>
            <form id="updateInventoryForm">
            	<input type="hidden" name="inventoryId" ng-model="inventoryId" value="{{inventoryId}}" />
            	<input type="hidden" name="stkNum" id="sumStkNums" />
            	<input type="hidden" name="invtNum" id="sumInvtNums" />            	
            	<input type="hidden" name="diffNum" id="sumDiffNums" />
                <div class="PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th scope="col">款号</th>
                            <th scope="col">款名</th>
                            <th scope="col">颜色</th>
                            <th scope="col">尺码</th>
                            <th scope="col">库存</th>
                            <th scope="col">盘点数</th>
                            <th scope="col">差异</th>
                        </tr>
                        <tr ng-repeat="inventoryDetail in inventoryDetails">
	                    	<td>{{inventoryDetail.proModelid}}</td>
	                        <td>{{inventoryDetail.proName}}</td>
	                        <td>{{inventoryDetail.proColorName}}</td>
	                        <td>{{inventoryDetail.proSizeName}}</td>
	                        <td>{{inventoryDetail.stkNum}}</td>                    
	                        <td><i class="am-ft-orange">{{inventoryDetail.invtNum}}</i></td>
	                        <td><i class="am-ft-red">{{inventoryDetail.diffNum}}</i></td>	                        
                    	</tr>
                    </table>

                </div>
            </form>
            <a href="javascript:void(0);" class="btn btn-primary mgb15" ng-click="editProductWareh('0')">调整库存</a>
            <a href="javascript:void(0);" class="btn btn-default mgl10 mgb15" ng-click="closeEditWareh('0')">取消</a>
            <div class="fn-clear"></div>
        </div>
    </div>
</div>

<!-- /调整库存弹窗-->

<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
            	<input type="hidden" id="inventoryId" />
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue" ng-click="delInventory()">确认</button>
                <button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->

<!--盘点单管理的查看详情代码开始-->
<div class="default" ng-hide="numA==0" ng-init="numA=0" ng-show="numA==1">
	<jsp:include page="inventorydetail.jsp"/> 
</div> 
<div class="default" ng-hide="numB==0" ng-init="numB=0" ng-show="numB==1">
	<jsp:include page="inventoryedit.jsp" />
</div>
<div class="default" ng-hide="numC==0" ng-init="numC=0" ng-show="numC==1">
	<jsp:include page="inventoryaddOrder.jsp" />
</div> 
<!--盘点单管理的查看详情代码结束-->

<script>
    //弹窗居中
//  $('.createInvDialoglist').center();
//  //$('.EditDialog').center();
//  $('.addInv-datedialog').center();
//  $('.addEditColordialog2').center();
//  $('.addAddColordialog2').center();
//  $('.createInvDialog').center();
//  $('#inventAddOrder').center();
//  $('#inventAddOrder2').center();

//	关闭调整库存弹窗
     $('#claseadjustStock').click(function(){
        $('#adjustStock,.maskBg').hide();
    });
    
/*     function dele(id){
    	$("#inventoryId").val(id);
    	$('.EditDialog,.maskBg').show();
    }  */      
	
</script>
