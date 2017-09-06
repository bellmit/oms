<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">采购单详情</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="callback()">返回</a>
	</div>
	<!-- search -->
	<div class="listSearch OderlistSearch" >
		<div class="row">
			<div class="col-md-12" >
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
			<div class="PrivTable">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col">款号</th>
						<th scope="col">款名</th>
						<th scope="col">吊牌价</th>
						<th scope="col">折扣</th>
						<th scope="col">采购价</th>
						<th scope="col">数量</th>
					</tr>
					<tr ng-repeat="xs in rl">
						<td>{{xs.proModelId}}</td>
						<td>{{xs.proName}}</td>
						<td>{{xs.mkUnitPrice}}</td>
						<td>{{xs.mkDiscRate}}</td>
						<td>{{xs.unitPrice}}</td>
						<td><a href="javascript:;" class="Numdet" ng-click="getDetail2(xs.proModelId,recievingId)">{{xs.rcvQty}}件</a></td>
					</tr>
 						<input type="reset" name="reset" style="display: none;" />
				</table>
				
				<div class="mgt10 mgr5 fn-right">
					<span>共<strong>{{tatilprm}}</strong>款,
					</span> <span><strong>{{tatil}}</strong>件,
					</span> <span>总计：<strong>{{tatilProce| number:2}}</strong>元
					</span>
				</div>
			</div>
		</form>

		<div class="fn-clear"></div>
	</div>

</div>

</div>

<!-- 编辑数量弹窗 -->
<div class="am-dialog editInvDialog fn-hide">
	<i class="fa fa-close closeDia"></i>
	<div class="am-dialog-wrap">
		<ul class="media-list">
			<li class="media">
				<div class="media-left">
					<a href="javascript:;"> <img id="detailProUrl" class="media-object" src="../static/base/images/large.png"
						width="80" alt="商品图片">
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
                        <div class="fn-clear"></div>
                    </div>
                </div>
			</li>
		</ul>
		<div class="ManColTable col-lg-12">
		  <form id="myform">
                <div class="PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th width="80" scope="col">颜色/尺码</th>
                            <th scope="col" ng-repeat="xs in cm">{{xs}}</th>
                        </tr >
                    
                        <tr id="detailtr">
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

</div>
<!-- /编辑数量弹窗 -->
<script>
	//弹窗居中
    $('.editInvDialog').center();
    $(function(){
        $('.Numdet').click(function(){
            $('.editInvDialog,.maskBg').show();
        });
        //关闭弹窗
        $('.closeDia').click(function(){
            $('.editInvDialog,.maskBg').hide();
        });
    })
</script>
