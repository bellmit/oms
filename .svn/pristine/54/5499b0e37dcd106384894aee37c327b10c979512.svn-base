<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">修改采购单</h2>
	</div>
	<!-- search -->
	<div class="listSearch OderlistSearch">
		<div class="row">
			<div class="col-md-12">
				<p class="col-sm-12 control-label mgb10 mgl20">
					采购日期: <span>{{createTime | date:'yyyy-MM-dd'}}</span>
				</p>
				<p class="col-sm-12 control-label mgb10 mgl20">
					采购单号：<span>{{recievingId}}</span>
				</p>
				<p class="col-sm-12 control-label mgl20">
					供货商：<span>{{disWarehName}}</span>
				</p>
			</div>
			<div class="fn-clear"></div>
		</div>
	</div>
	<!-- /search -->

	<!-- Main content -->
	<div class="ManColTable col-lg-12">
		<form>
			<div class="table-responsive PrivTable">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col">款号</th>
						<th scope="col">款名</th>
						<th scope="col">吊牌价</th>
						<th scope="col">折扣<a href="javascript:;" class="mgl5">批量修改</a></th>
						<th scope="col">采购价</th>
						<th scope="col">数量</th>
						<th scope="col">操作</th>
					</tr>
					<tr ng-repeat="xs in addlist track by $index">
                        <td>{{xs.proModelnum}}</td>
                        <td>{{xs.detail[0].proName}}</td>
                        <td>{{xs.detail[0].oldunitPrice}}</td>
                        <td><input class="input-mini" type="text" value="{{xs.detail[0].discount}}" ng-change="change(xs.proModelnum,xs.detail[0].discount,'2')" ng-model="xs.detail[0].discount" /></td>
                        <td><input class="input-mini" type="text" value="{{xs.detail[0].unitPrice}}" ng-change="change(xs.proModelnum,xs.detail[0].unitPrice,'1')" ng-model="xs.detail[0].unitPrice" /></td>
                        <td>{{xs.tatil}}</td>
                        <td>
                            <a href="javascript:;" class="w50 line-btn fn-left" am-bg="blue"   ng-click="editProduct(xs.proModelnum,'1')" >编辑</a>
                            <button type="button"  class="w50 fn-left line-btn-delete" ng-click="deldetail(this)" am-bg="white">删除</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="7">
                            <a href="javasctipt:;" ng-click="addproduct('1')" class="fn-left adjBtn">+&nbsp;选款添加</a>
                        </td>
                    </tr>

                </table>

                <div class="mgb15 fn-left">
                    <button type="button" class="btn btn-primary" ng-click="saveProducts('1')">保存采购单</button>
                    <button type="button" class="btn btn-primary mgl10" ng-click="addAndcommit()">确定并入库</button>
                </div>
                <div class="mgt10 mgr5 fn-right">
                    <span>共<strong>{{tatilprm}}</strong>款,</span>
                    <span><strong>{{tatil}}</strong>件,</span>
                    <span>总计：<strong>{{tatilProce| number:2}}</strong>元</span>
                </div>
            </div>
        </form>

        <div class="fn-clear"></div>
    </div>

</div>

</div>

<!-- /添加采购单--供货商 -->
<!-- /编辑数量弹窗 -->
<!-- 选款添加弹窗 -->
<div class="am-dialog editInvDialog2 fn-hide updateAddDialog">
    <i class=" fa fa-close closeDia" ng-click="closeDia()"></i>
    <div class="am-dialog-wrap">
        <!-- search -->
        <div class="listSearch OderlistSearch mgb15">
            <form class="form-horizontal">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group col-md-10 pl0">
                            <label class="col-sm-4 control-label">请输入选款号：</label>
                            <div class="col-sm-8 pro-search">
                                <input type="text" id="updateAddId" ng-model="hasproModelnum" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <input type="reset" name="reset" style="display: none;" />
                        <div class="col-md-2 am-ft-center searchBox">
                            <button type="button" ng-disabled="hasproModelnum==''"  class="btn fn-left btn-primary searchProType" ng-click="product('1')">搜索</button>
                        </div>
                        <div class="fn-clear"></div>
                    </div>
                </div>
            </form>
        </div>
        <!-- /search -->
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <a href="javascript:;">
                        <img id="updateProUrl" class="media-object" src="../static/base/images/large.png" width="80" alt="商品图片">
                    </a>
                </div>
                <div class="media-body">
                    <div class="editInvTit">
                        <p class="col-sm-12 media-heading">款名:<span>{{mdl.proName}}</span></p>
                        <p class="col-sm-12 media-heading">款号:<span>{{mdl.proModelnum}}</span></p>
                        <p class="col-sm-3 media-heading">品类:<span>{{mdl.sortName}}</span></p>
                        <p class="col-sm-4 media-heading">品牌:<span>{{mdl.brandName}}</span></p>
                        <p class="col-sm-3 media-heading">年份:<span>{{mdl.proYear}}</span></p>
                        <p class="col-sm-3 media-heading">季节:<span>{{mdl.proSeason}}</span></p>
                        <p class="col-sm-4 media-heading">吊牌价:<span>{{mdl.proPrice}}</span></p>
                        <div class="fn-clear"></div>
                    </div>
                </div>
            </li>
        </ul>
           <div class="ManColTable col-lg-12">
            <form id="myform">
                <div class="table-responsive PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th width="80" scope="col">颜色/尺码</th>
                            <th scope="col" ng-repeat="xs in cm">{{xs}}</th>
                        </tr >
                    
                        <tr id="updateTr">
<!--                             <th scope="row">合计</th>
                            <td colspan="3">888</td>
 -->                        </tr> 
 						<input type="reset" name="reset" style="display: none;" />
 
                    </table>

                </div>

            </form>
            <div class="fn-clear"></div>
        </div>
    </div>
    <div class="dialogBtn am-flexbox">
        <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" ng-click="addAddDetail('0')">确认</button>
        <button type="button" class="am-flexbox-item btn am-button closeDia2" am-bg="white" ng-click="closeDia()">取消</button>
        <div class="fn-clear"></div>
    </div>
</div>
<!-- /选款添加弹窗 -->
<!-- 编辑数量弹窗 修改-->
<div class="am-dialog updateEditInvDialog fn-hide">
    <i class="fa fa-close closeDia"></i>
    <div class="am-dialog-wrap">
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <a href="javascript:;">
                        <img id="updateEditProUrl" class="media-object" src="../static/base/images/large.png" width="80" alt="商品图片">
                    </a>
                </div>
                <div class="media-body">
                    <div class="editInvTit">
                        <p class="col-sm-12 media-heading">款名:<span>{{mdl.proName}}</span></p>
                        <p class="col-sm-12 media-heading">款号:<span>{{mdl.proModelnum}}</span></p>
                        <p class="col-sm-3 media-heading">品类:<span>{{mdl.sortName}}</span></p>
                        <p class="col-sm-3 media-heading">品牌:<span>{{mdl.brandName}}</span></p>
                        <p class="col-sm-3 media-heading">年份:<span>{{mdl.proYear}}</span></p>
                        <p class="col-sm-3 media-heading">季节:<span>{{mdl.proSeason}}</span></p>
                        <p class="col-sm-3 media-heading">吊牌价:<span>{{mdl.proPrice}}</span></p>
                        <input type="reset" name="reset" style="display: none;" />
                    </div>
                </div>
            </li>
        </ul>
        <div class="ManColTable col-lg-12">
            <form>
                <div class="table-responsive PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th width="80" scope="col">颜色/尺码</th>
                            <th scope="col" ng-repeat="xs in cm">{{xs}}</th>
                        </tr >
                    
                        <tr id="updateTr2">
<!--                             <th scope="row">合计</th>
                            <td colspan="3">888</td>
 -->                        </tr> 
                    </table>
                </div>
            </form>
            <div class="fn-clear"></div>
        </div>
    </div>
    <div class="dialogBtn am-flexbox">
        <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" ng-click="UpdateProductDetail('1')">确认</button>
        <button type="button" class="am-flexbox-item btn am-button closeDia2" am-bg="white" >取消</button>
        <div class="fn-clear"></div>
    </div>
</div>
<!-- /编辑数量弹窗 -->


<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue">确认</button>
                <button type="button" class="am-flexbox-item btn am-button"  am-bg="white" >取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->


<script>


function edit(){
	$('.editInvDialog2,.maskBg').show();
	};
	$('.editInvDialog3').center();
	$('.editInvDialog2').center();

    //弹窗居中
    $('.EditDialog,.addPurdialog').center();
    $('.editInvDialog').center();
    //编辑数量
/*     $('.adjBtn').click(function(){
        $('.editInvDialog,.maskBg').show();
    }); */
/*     $('.closeDialog').click(function(){
        $('.maskBg,.addPurdialog').fadeOut();
    }); */
	    //关闭弹窗
    $('.closeDia').click(function(){
		  $('.editInvDialog2,.maskBg').hide();
          $('.editInvDialog3,.maskBg').hide();
          $('.editInvDialog,.maskBg').hide();
          $('.updateEditInvDialog,.maskBg').hide();
          $("#addAddId").val('');
          $("#updateAddId").val('');
    });
     $('.closeDia2').click(function(){
		 $('.addEditInvDialog,.maskBg').hide();
         $('.updateEditInvDialog,.maskBg').hide();
         $('.editInvDialog,.maskBg').hide();
         $("#addAddId").val('');
         $("#updateAddId").val('');
    });
    
</script>