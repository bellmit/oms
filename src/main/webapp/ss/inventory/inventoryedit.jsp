<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->
<!--  -->
<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">继续盘点</h2>
        <!--<a href="javascript:;" class="line-btn fn-right" ng-click="editcallback()">返回</a>-->
    </div>
    <!-- search -->
    <div class="listSearch OderlistSearch">
        <div class="row">
            <div class="col-md-12">
                <p class="col-sm-12 control-label mgb10 mgl20">盘点日期:<span>{{createDate | date:'yyyy-MM-dd'}}</span></p>
                <p class="col-sm-12 control-label mgb10 mgl20">盘点单号：<span>{{inventoryId}}</span></p>
                <p class="col-sm-12 control-label mgl20">盘点人：<span>{{userName}}</span></p>
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
                        <th scope="col">品名</th>
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
                        <td>{{inventoryDetail.invtNum}}</td>
                        <td><span class="am-ft-red">{{inventoryDetail.diffNum}}</span></td>
                        <td>
                            <a href="javascript:;" class="w50 line-btn fn-left adjBtn" am-bg="blue" data="{{inventoryDetail.proModelid}}" ng-click="inventoryDetailEdit($event,this,'1')">编辑</a>
                            <button type="button" class="w50 fn-left line-btn-delete" am-bg="white" id="{{inventoryDetail.proModelid}}" onclick="dele(id)">删除</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="10">
                            <a href="javascript:;" class="fn-left addOderBtn" ng-click="addProduct('1')">+&nbsp;添加盘点商品</a>
                        </td>
                    </tr>

                </table>

                <div class="mgb15 fn-left">
                    <button type="button" class="btn btn-primary" ng-click="saveInvetory('edit')">保存盘点</button>
                    <button type="button" class="btn btn-primary mgl10 endInvent" ng-click="endInventory()">结束盘点并生成调整单</button>
                </div>
            </div>
        </form>

        <div class="fn-clear"></div>
    </div>

</div>

</div>

<!-- 添加盘点单--时间 -->
<div class="am-dialog addColordialog addInvdialog">
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">添加盘点单</h3>
        </div>
        <div class="am-input needValInfo">
            <label class="fn-left">设置盘点时间：</label>
            <input class="fn-left col-md-6 am-ft-center" type="date" name="" value="" placeholder="" /><br/>
            <p class="am-ft-gray mgt10">提示：系统将根据盘点时间计算库存。</p>
            <p class="am-ft-red">确认盘点时间后将不可更改，请慎重！</p>
            <div class="fn-clear"></div>
        </div>
        <div class="dialogBtn am-flexbox">
            <button type="button" class="am-flexbox-item btn am-button alterOv" am-bg="blue">确认</button>
            <button type="button" class="am-flexbox-item btn am-button closeDialog" am-bg="white">取消</button>
            <div class="fn-clear"></div>
        </div>
    </div>
</div>

<!-- /添加盘点单--时间 -->

<!-- 添加盘点商品弹窗 -->
<div class="maskBga"  ng-show="showdialog=='show'"></div>
<div class="am-dialog addColordialog addInvDialog InvDialog-max addEditColordialog2" id="addpreductdialogB" style="display: block;width:550px;height:600px" ng-show="showdialog=='show'">
<!--<div class="am-dialog addColordialog addInvDialog InvDialog-max addEditColordialog2" id="addpreductdialogB" style="display: block;" ng-show="showdialog=='show'">-->
    <form id="addProduct">
        <!--<i class="fa-close"  ng-click="closeInventoryProduct()"></i>-->
        <img src="../static/base/images/closelogo.png" alt="" class="closeImg fn-right" style="padding: 20px;" ng-click="closeInventoryProduct()"/>
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
            	<button class="btn btn-primary serBtn" ng-click="getInventoryProduct(this)">查询</button>
                <div class="fn-clear"></div>
            </div>
        </div>
        </form>

        <!--查询结果-->
        <section class="container-fluid">
            <div class="row">
            	<form id="inventoryProduct">
            		<input type="hidden" name="inventoryId" value="{{inventoryId}}" />
            		<input type="hidden" name="createDate" value="{{createDate}}" />
                <div class="searResultTab" style="max-height: 279px;overflow-y: auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th class="col-lg-2">
                            	<input ng-click="chooseUnJoinedMember(this.proModelnum,products,'all')" ng-model="unJoinedgetchecked" class="fn-left" type="checkbox" name="selectAll" />
                            	全选
                            </th>
                            <th class="col-lg-2">款号</th>
                            <th class="col-lg-3">款名</th>
                            <th class="col-lg-1">品类</th>
                            <th class="col-lg-2">品牌</th>
                            <th class="col-lg-1">年份</th>
                            <th class="col-lg-1">季节</th>
                        </tr>
                        <tr ng-repeat="product in products">
                            <td>
                            	<input type="checkbox" ng-click="chooseUnJoinedMember(this.product.proModelnum,products,'one')" name="proModelnum" id="{{$index + 1}}" ng-checked="product.allunJoinedgetchecked"  value="{{product.proModelnum}}" />                            	                            	                 	
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
				    	<div id="pagingA"></div>    
				    </div>
				    <!--分页 end-->                                      
                </div>
                <div class="fn-clear" style="padding-left:15px;position: absolute;bottom: 10px;">
                	<a href="javascript:;" class="btn btn-primary saveButton" ng-click="addInventoryProduct('1')">添加盘点商品</a>
                	<a href="javascript:;" class="fn-left btn btn-default mgl10" ng-click="closeInventoryProduct()">取消</a>
                </div>
                </form>
            </div>
        </section>
</div>
<!-- /添加盘点商品弹窗 -->
<!-- 编辑弹窗 -->
<div class="am-dialog editInvDialog InvDialog-max fn-hide" id="dialogA" style="min-width: 980px;">
    <!--<i class="fa fa-close fn-right" id="closedialogA"></i>-->
    <img src="../static/base/images/closelogo.png" alt=""  id="closedialogA" class="closeImg fn-right" style="padding:0px 10px;position: absolute;right: 0px;z-index: 22;">
    
    <div class="am-dialog-wrap">
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <img class="media-object" src="http://static.qineasy.com/base/images/add_files02.png" ng-src="{{productInfo.proUrl}}" width="80" alt="商品图片">
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
        <div class="ManColTable col-lg-12" style="max-height:300px;overflow-y:auto;width: 100%!important;">
            <form id="editInventoryDetForm">
            	<input type="hidden" name="inventoryId" ng-model="inventoryId" value="{{inventoryId}}" />
            	<input type="hidden" name="proModelid" ng-model="proModelid" value="{{proModelid}}" />        	
                <div class="PrivTable">
                    <table class="table table-striped table-bordered addInvinfo">
                        <tr>
                            <th width="72" scope="col" id="size">颜色/尺码</th>
                            <th scope="col" ng-repeat="size in sizes">{{size}}</th>                            
                        </tr>                        
                        <tr id="sumRow">
                            <th scope="row">合计</th>
                            <td colspan="{{sizes.length}}">{{sumInvtNum}}/{{sumStkNum}}</td>
                        </tr>
                    </table>

                </div>
            </form>
            <div class="fn-clear"></div>
        </div>
    </div>
    <div class="dialogBtn am-flexbox">
        <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" ng-click="editInventoryDetail('1')">确认</button>
        <button type="button" class="am-flexbox-item btn am-button" am-bg="white" ng-click="closeEdit('1')">取消</button>
        <div class="fn-clear"></div>
    </div>
</div>
<!-- /编辑弹窗 -->

<!-- 结束盘点并生成调整单弹窗-->
<div class="am-dialog createInvDialog fn-hide createInvDialog1" id="inventAddOrder" style="min-width: 800px;">
    <!--<i class="fa fa-close" id="closeinventAddOrder"></i>-->
    <img src="../static/base/images/closelogo.png" alt=""  id="closeinventAddOrder" class="closeImg fn-right" style="padding:0px 10px; position: absolute;right:0;top:10px;">
    
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
            <a href="javascript:void(0);" class="btn btn-primary mgb15" ng-click="editProductWareh('1')">调整库存</a>
            <a href="javascript:void(0);" class="btn btn-default mgl10 mgb15" ng-click="closeEditWareh('1')">取消</a>
            <div class="fn-clear"></div>
        </div>
    </div>
</div>

<!-- /结束盘点并生成调整单弹窗-->

<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide" id="EditDialog">
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
    //弹窗居中
//  $('.EditDialog').center();
//  $('.editInvDialog').center();    
//  $('.addInvDialog').center();
	
//  $('.createInvDialog').center();
//class="am-dialog addColordialog addInvDialog InvDialog-max addAddColordialog2"
    $(function(){        
//		$("#addpreductdialogB").centera();
        //关闭弹窗
//      $('.closeDia').click(function(){
//          $('.addInvDialog,.editInvDialog,.maskBg').hide();
//          $('.createInvDialog,.maskBg').hide();
//          
//      });

    })
//  function closeInventoryProduct(){
//  	$('.addColordialog,.maskBg').hide();
//  }
    
    function dele(id){
    	$("#proModelid").val(id);
    	$('#EditDialog,.maskBg').show();
    }
    $("#closeinventAddOrder").click(function(){
    	$("#inventAddOrder,.maskBg").hide();
    })
    $("#closedialogA").click(function(){
    	$("#dialogA,.maskBg").hide();
    })
/*     function closeEditWareh(){
    	 $('.createInvDialog,.maskBg').hide();
    } */
    
/*     function closeEdit(){
    	$('.editInvDialog,.maskBg').hide();
    } */
</script>