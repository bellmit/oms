<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->
<!--  -->
<!--遮罩 end-->

<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">库存调整单<span></span></h2>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <div class="listSearch">
        <form class="form-horizontal" id="inventoryDiffForm">
            <div class="row">
                <div class="col-md-11">
                    <div class="form-group col-md-5" style="margin-left:5px ;">
                        <label class=" control-label  fn-left" style="line-height: 34px;padding: 0;">盘点单号：</label>
                        <div class="col-sm-9 pro-search">
                            <input type="text" name="inventoryId" class="form-control " style="height:34px" placeholder=""/>                            
                        </div>
                    </div>
                    <div class="form-group col-md-5">
                        <label class=" control-label fn-left" style="line-height: 34px;padding: 0;">时间：</label>
                        <div class="col-sm-10 pro-search">
                            <input class="laydate-icon form-control" type="text" onclick="laydate({max: laydate.now()})" name="createDate" value="" readonly="readonly" placeholder="选择时间" style="height: 34px;" />
                        </div>
                    </div>
                    <div class="col-md-1 am-ft-center searchBox">
                        <button type="button" class="btn fn-left btn-primary" ng-click="getInventoryDiff()">查询</button>
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
                        <th scope="col">操作</th>
                    </tr>                   
                    <tr ng-repeat="inventory in inventoryDiffs" >
                    <!--<tr ng-repeat="inventory in inventoryDiffs" ng-if="inventory.status == 1">-->
                        <td>{{inventory.inventoryId}}</td>
                        <td>{{inventory.createDate}}</td>
                        <td>{{inventory.stkNum}}</td>
                        <td>{{inventory.invtNum}}</td>
                        <td><span class="am-ft-red">{{inventory.diffNum}}</span></td>
                        <td>{{inventory.oprName}}</td>
                        <td>
                            <a href="javasctipt:void(0);" class="line-btn" am-bg="blue" data="{{inventory.inventoryId}},{{inventory.createDate}},{{inventory.oprName}}" ng-click="viewDetail($event)">查看详情</a>
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

</div>


<!-- 查看详情弹窗-->
<div class="am-dialog addColordialog createInvDialog InvDialog-max fn-hide">
    <i class="fa fa-close closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">库存调整单</h3>
        </div>
        <div class="ManColTable col-lg-12">
            <div class="row">
                <div class="col-md-12 mgt10">
                    <label class="col-sm-5 control-label">盘点时间：<span>{{createDate | date:'yyyy-MM-dd'}}</span></label>
                    <label class="col-sm-5 control-label">盘点单号：<span>{{inventoryId}}</span></label>
                    <label class="col-sm-5 control-label">盘点人：<span>{{userName}}</span></label>
                </div>
            </div>
            <form>
                <div class="PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th scope="col">SKU编码</th>
                            <th scope="col">款名</th>
                            <th scope="col">颜色</th>
                            <th scope="col">尺码</th>
                            <th scope="col">库存</th>
                            <th scope="col">盘点数</th>
                            <th scope="col">差异</th>
                        </tr>
                      	<tr ng-repeat="inventoryDetail in inventoryDetails" ng-if="inventoryDetail.diffNum!='0'">
	                    	<td>{{inventoryDetail.proNum}}</td>
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
            <div class="fn-clear"></div>
        </div>
    </div>
</div>

<!-- /查看详情弹窗-->

<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue">确认</button>
                <button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->
<script>
    //弹窗居中
    $('.EditDialog,.createInvDialog').center();
    $('.closeDia').click(function(){
        $('.createInvDialog,.maskBg').hide();
    });
</script>
