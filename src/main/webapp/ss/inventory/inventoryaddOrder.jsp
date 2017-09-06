<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->
<!--  -->
<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper" id="inventoryContent" style="display: none">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">添加盘点单</h2>
    <a href="javascript:;" class="line-btn fn-right" ng-click="callback()">返回</a>
    </div>
    <!-- search -->
    <div class="listSearch OderlistSearch">
        <div class="row">
            <div class="col-md-12">
                <p class="col-sm-12 control-label mgb10 mgl20">盘点日期：<span> {{createDate | date:'yyyy-MM-dd'}}</span></p>
                <p class="col-sm-12 control-label mgb10 mgl20">盘点单号：<span> {{inventoryId}}</span></p>
                <p class="col-sm-12 control-label mgl20">盘点人：<span> {{userName}}</span></p>
            </div>
            <div class="fn-clear"></div>
        </div>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">款号</th>
                        <th scope="col">款名</th>
                        <th scope="col">品类</th>
                        <th scope="col">品牌</th>
                        <th scope="col">年份</th>
                        <th scope="col">季节</th>
                        <th scope="col">库存</th>
                        <th scope="col">盘点数</th>
                        <th scope="col">差异</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="inventoryDetail in inventoryDetailSums">
                    	<td>{{inventoryDetail.proModelid}}</td>
                        <td>{{inventoryDetail.proName}}</td>
                        <td>{{inventoryDetail.sortName}}</td>
                        <td>{{inventoryDetail.brandName}}</td>
                        <td>{{inventoryDetail.proYear}}</td>
                        <td>{{inventoryDetail.proSeason}}</td>
                        <td>{{inventoryDetail.stkNum}}</td>
                        <td ng-if="inventoryDetail.invtNum ==''">{{inventoryDetail.stkNum}}</td>
                        <td ng-if="inventoryDetail.invtNum !=''">{{inventoryDetail.invtNum}}</td>
                        <td><span class="am-ft-red">{{inventoryDetail.diffNum}}</span></td>
                        <td>
                            <a href="javascript:;" class="w50 line-btn fn-left adjBtn" am-bg="blue" data="{{inventoryDetail.proModelid}}" ng-click="inventoryDetailEdit($event,'2')">编辑</a>
                            <button type="button" class="w50 fn-left line-btn-delete" am-bg="white" id="{{inventoryDetail.proModelid}}" onclick="dele(id)">删除</button>
                        </td>
                    </tr>                    
                    <tr>
                        <td colspan="10">
                            <a href="javascript:;" class="fn-left addOderBtn" ng-click="addProduct('2')">+&nbsp;添加盘点商品</a>
                        </td>
                    </tr>

                </table>

                <div class="mgb15 fn-left">
                    <button type="button" class="btn btn-primary" ng-click="saveInvetory('add')">保存盘点</button>
                    <button type="button" class="btn btn-primary mgl10 endInvent" ng-click="endInventory2()">结束盘点并生成调整单</button>
                </div>
            </div>
        </form>

        <div class="fn-clear"></div>
    </div>

</div>

<!-- 添加盘点单--时间 -->
<div class="am-dialog addColordialog addInv-datedialog addColordialog2" id="timeset">
    <!--<i class="fa fa-close closeDia" id="closeDia" ng-click="closeDialog()"></i>-->
    <i class="fa fa-close fn-right"  style="padding: 15px;font-size: 14px;" ng-click="closeDialog()"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">添加盘点单</h3>
        </div>
        <div class="am-input needValInfo">
            <label class="fn-left" style="width:32%;">设置盘点时间：</label>
            <!--<input class="fn-left col-md-6 am-ft-center laydate-icon" type="text" onclick="laydate({max: laydate.now()})" name="addCreateDate" value="" ng-model="createDate" readonly="readonly" placeholder="点击设置时间" /><br/>-->
            <input class="fn-left col-md-6 am-ft-center laydate-icon" type="text" onclick="laydate({max: laydate.now()})" name="addCreateDate" value=""  readonly="readonly" placeholder="点击设置时间" /><br/>
            <p class="am-ft-red mgt10">提示：系统将根据盘点时间计算库存。</p>
            <p class="am-ft-red">确认盘点时间后将不可更改，请慎重！</p>
            <div class="fn-clear"></div>
        </div>
        <div class="dialogBtn am-flexbox">
            <button type="button" class="am-flexbox-item btn am-button alterOv" am-bg="blue" ng-click="setDate()">确认</button>
            <button type="button" class="am-flexbox-item btn am-button closeDialog" am-bg="white" ng-click="closeDialog()">取消</button>
            <div class="fn-clear"></div>
        </div>
    </div>
</div>
<!-- /添加盘点单--时间 -->
<!-- 添加盘点商品弹窗 -->
<div class="maskBga"  ng-show="showdialoga=='show'"></div>
<div class="am-dialog addColordialog addInvDialog InvDialog-max addAddColordialog2" id="addpreductdialogA" style="display: block;height:600px;width:550px" ng-show="showdialoga=='show'">
    <form id="addProducta">
        <img src="../static/base/images/closelogo.png" alt="" class="closeImg fn-right" style="padding: 20px;" ng-click="closeInventoryProducta()"/>
        <!--<i class="fa fa-close closeDia"></i>-->
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">添加盘点商品</h3>
            </div>
            <div class="am-input">
                <label class="fn-left">大品类：</label>
                <select class="col-md-2 mgr5" name="proGrandparentSortId" ng-change="sortIdchange()" ng-model="selected" >
                	<option value="" selected="selected"></option>
                	<option ng-repeat="i in items" value="{{i.sortId}}">{{i.sortName}}</option>
                </select>
                <label class="fn-left mgl10">中品类：</label>
                <select class="col-md-2 mgr5" name="proParentSortId" ng-change="sortIdCchange()" ng-model="selectedc" >
                <option value="" selected="selected"></option>
                <option ng-repeat="i in itemsc" value="{{i.sortId}}">{{i.sortName}}</option>                   
                </select>
                <label class="fn-left mgl10">小品类：</label>
                <select class="col-md-2 mgr5" name="proSortId"  ng-model="selectedg" >
                <option value="" selected="selected"></option>
                <option ng-repeat="i in itemsg" value="{{i.sortId}}">{{i.sortName}}</option>
                </select>
                <div class="fn-clear"></div>
            </div>
            <div class="am-input">
                <label class="fn-left">品牌：</label>
                <select class="col-md-2 mgr5" name="brandId" ng-model="brand" >
                <option value="" selected="selected"></option>
                <option ng-repeat="b in brands" value="{{b.brandId}}">{{b.brandName}}</option>                   
                </select>

                <label class="fn-left mgl10">年份：</label>
                <!-- <input class="fn-left laydate-icon mgt5" type="text" onclick="laydate()" name="proYear" readonly="readonly" placeholder="商品年份" /> -->
                	 <select class="col-md-2 mgr5" name="proYear" ng-model="year" >
		                <option value="" selected="selected"></option>
		                <option ng-repeat="year in years" value="{{year.proYear}}">{{year.proYear}}</option>                   
		             </select>
                <label class="fn-left mgl10">季节：</label>
                <select class="col-lg-2 mgr5" name="proSeason">
                	<option value="" selected="selected"></option>
                    <option value="春">春</option>
                    <option value="夏">夏</option>
                    <option value="秋">秋</option>
                    <option value="冬">冬</option>
                </select>
                
                <div class="fn-clear"></div>
            </div>
            <div class="am-input">
                <label class="fn-left">款号：</label>
                <input class="fn-left col-lg-2" type="text" name="proModelnum" placeholder="请输入款号" />
                <input type="hidden" ng-model="proModelnum1" name="proModelnum1" value="{{proModelnum1}}" />
	            <button class="btn btn-primary serBtn" ng-click="getInventoryProduct('')">查询</button>
	            <div class="fn-clear"></div>
            </div>
        </div>
        </form>
        <!--查询结果-->
        <section class="container-fluid">
            <div class="row">
            	<form id="addInventoryProduct">
            		<input type="hidden" name="inventoryId" value="{{inventoryId}}" />
            		<input type="hidden" name="createDate" value="{{createDate}}" />  
                <div class="searResultTab" style="max-height:280px;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th class="col-lg-2"><input ng-click="chooseUnJoinedMember(this.proModelnum,products,'all')" ng-model="unJoinedgetchecked" class="fn-left" type="checkbox" name="selectAll" />全选</th>
                            <th class="col-lg-2">款号</th>
                            <th class="col-lg-3">款名</th>
                            <th class="col-lg-1">品类</th>
                            <th class="col-lg-2">品牌</th>
                            <th class="col-lg-1">年份</th>
                            <th class="col-lg-1">季节</th>
                        </tr>
                        <tr ng-repeat="product in products">
                            <td>
                            	<input ng-click="chooseUnJoinedMember(this.product.proModelnum,products,'one')" ng-checked="product.allunJoinedgetchecked" type="checkbox"  name="proModelnum" id="{{$index + 1}}" value="{{product.proModelnum}}" />                          	                 	
                            </td>
                            <td>
                                <p>{{product.proModelnum}}</p>
                            </td>
                            <td>
                                <p>{{product.proName}}</p>
                            </td>
                            <td>
                                <p>{{product.sortName}}</p>
                            </td>
                            <td>
                                <p>{{product.brandName}}</p>
                            </td>
                            <td>
                                <p>{{product.proYear}}</p>
                            </td>
                            <td>
                                <p>{{product.proSeason}}</p>
                            </td>
                        </tr>                       
                    </table>
                	<!--分页 start-->
				    <div class="pagelist priv-pagelist" style="">
				    	<div id="pagingB"></div>    
				    </div>
				    <!--分页 end-->                    
                </div>
                <div class="fn-clear" style="padding-left:15px;position:absolute;bottom:10px;">
                	<a href="javascript:;" class="btn btn-primary saveButton" ng-click="addInventoryProduct('2')">添加盘点商品</a>
                	<a href="javascript:;" class="fn-left btn btn-default mgl10" ng-click="closeInventoryProducta()">取消</a>
                </div>
                </form>
            </div>
        </section>

</div>
<!-- /添加盘点商品弹窗 -->
<!-- 编辑弹窗 -->
<div class="am-dialog fn-hide addEditInvDialog" id="dialogB" style="min-width:980px;">
    <img src="../static/base/images/closelogo.png" alt=""   ng-click="closeEdit('2')" class="closeImg fn-right" style="padding:0px 10px;position: absolute;z-index:22;right: 0px;">
    <!--<i class="fa fa-close" ng-click="closeEdit('2')"></i>-->
    <div class="am-dialog-wrap">
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <img class="media-object" ng-src="{{productInfo.proUrl}}" width="80" alt="商品图片">
                </div>
                <div class="media-body">
                    <div class="editInvTit">
                        <p class="col-sm-12 media-heading">款名:<span>{{productInfo.proName}}</span></p>
                        <p class="col-sm-12 media-heading">款号:<span>{{productInfo.proModelnum}}</span></p>
                        <p class="col-sm-3 media-heading">品类:<span>{{productInfo.sortName}}</span></p>
                        <p class="col-sm-3 media-heading">品牌:<span>{{productInfo.brandName}}</span></p>
                        <p class="col-sm-3 media-heading">年份:<span>{{productInfo.proYear}}</span></p>
                        <p class="col-sm-3 media-heading">季节:<span>{{productInfo.proSeason}}</span></p>
                        <p class="col-sm-3 media-heading">吊牌价:<span>{{productInfo.proPrice}}</span></p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="Man	ColTable col-lg-12">
            <form id="addEditInventoryDetForm">
            	<input type="hidden" name="inventoryId" ng-model="inventoryId" value="{{inventoryId}}" />
            	<input type="hidden" name="proModelid" ng-model="proModelid" value="{{proModelid}}" />        	
                <div class="PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-striped table-bordered addInvinfo">
                        <tr>
                            <th width="80" scope="col" id="size">颜色/尺码</th>
                            <th scope="col" ng-repeat="size in sizes">{{size}}</th>                            
                        </tr>                        
                        <tr id="addSumRow">
                            <th scope="row">合计</th>
                            <td colspan="{{sizes.length}}" style="text-align: center;">{{sumInvtNum}}/{{sumStkNum}}</td>
                        </tr>
                    </table>

                </div>
            </form>
            <div class="fn-clear"></div>
        </div>
    </div>
    <div class="dialogBtn am-flexbox">
        <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" ng-click="editInventoryDetail('2')">确认</button>
        <button type="button" class="am-flexbox-item btn am-button" am-bg="white" ng-click="closeEdit('2')">取消</button>
        <div class="fn-clear"></div>
    </div>
</div>
<!-- /编辑弹窗 -->
<!-- 结束盘点并生成调整单弹窗-->
<div class="am-dialog createInvDialog InvDialog-max fn-hide createInvDialog1" id="inventAddOrder2">
    <!--<i class="fa fa-close" id="closeinventAddOrder2"></i>-->
    <img src="../static/base/images/closelogo.png" alt=""  id="closeinventAddOrder2" class="closeImg fn-right" style="padding:0px 10px;position: absolute;right: 0px;">
    <div class="am-dialog-wrap">
        <div class="ManColTable col-lg-12">
            <div class="row">
                <div class="col-md-12 mgt10">
                    <label class="col-sm-5 control-label">盘点时间：<span> {{createDate | date:'yyyy-MM-dd'}}</span></label>
                    <label class="col-sm-5 control-label">盘点单号：<span> {{inventoryId}}</span></label>
                    <label class="col-sm-5 control-label">盘点人：<span> {{userName}}</span></label>
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
            <a href="javascript:void(0);" class="btn btn-primary mgb15" ng-click="editProductWareh2()">调整库存</a>
            <a href="javascript:void(0);" class="btn btn-default mgl10 mgb15" onclick="closeEditWareh()">取消</a>
            <div class="fn-clear"></div>
        </div>
    </div>
</div >

<!-- /结束盘点并生成调整单弹窗-->


<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
    <form id="delInventoryDetForm">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
            	<input type="hidden" name="inventoryId" value="{{inventoryId}}" />
            	<input type="hidden" name="proModelid" id="proModelid" />
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue" ng-click="delInventoryDetail()">确认</button>
                <button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->

<script>
   /*  $('.addInv-datedialog,.maskBg').show(); */
    //弹窗居中
//  $('.EditDialog').center();
//  $('.addInvDialog').center();
//  $('.addEditInvDialog').center();
//  $('.addInv-datedialog').center();
//  $('.createInvDialog').center();
    //	添加盘点商品弹窗居中
//	$("addpreductdialogA").centera();
//class="am-dialog addColordialog addInvDialog InvDialog-max addAddColordialog2"
/*     $(function(){
        //编辑数量
         $('.adjBtn').click(function(){
            $('.editInvDialog,.maskBg').show();
        }); 

        //关闭弹窗
         $('.closeDia').click(function(){
            $('.editInvDialog,.maskBg').hide();
            $('.addInv-datedialog,.maskBg').hide();
            $('.addColordialog,.maskBg').hide();
            $('.createInvDialog,.maskBg').hide(); 
        }); 
        
        $('#closeDia').click(function(){
        	window.location.href='#/inventory';
        });        
    }) */
    
/*     function closeDialog(){
    	window.location.href='#/inventory';
    } */
    
//  function closeInventoryProduct(){
//  	$('.addColordialog,.maskBg').hide();
//  }
    
    function closeEditWareh(){
    	 $('#inventAddOrder2,.maskBg').hide();
    } 
   $("#closeinventAddOrder2").click(function(){
    	$("#inventAddOrder2,.maskBg").hide();
    })
    function dele(id){
    	$("#proModelid").val(id);
    	$('#EditDialog,.maskBg').show();
    }
</script>