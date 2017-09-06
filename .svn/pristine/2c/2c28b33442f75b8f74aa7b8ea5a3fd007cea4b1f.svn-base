<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--遮罩 end-->
<!----------------- Content Wrapper start ------------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">查看库存</h2>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <section class="container-fluid">
        <div class="row">
            <div class="prodet-nav">
                <div class="prodet-box pb0">
                    <!----row1---->
                    <div class="row Pro-Sorts">
                    	
                        <div class="col-md-1 inprodet-titl am-ft-12">品牌：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" ng-options="brand.brandId as brand.brandName for brand in brands" ng-model="brand" ng-change="getConditions()">
                            <option value="">请选择</option>
                            </select>
                        </div>
                    	<div class="col-md-1 inprodet-titl am-ft-12">季节：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" ng-options="season.proSeason for season in seasons" ng-model="season1">
                            <option value="">请选择</option>
                            </select>
                        </div>
                        <div class="col-md-1 inprodet-titl am-ft-12">年份：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" ng-options="year.proYear for year in years" ng-model="year1">
                            <option value="">请选择</option>
                            </select>
                        </div>                                    
                    </div>
                    <!请选择--row2---->
                    <div class="row">
                   		<div class="col-md-1 inprodet-titl am-ft-12">大品类：</div>
                         <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" ng-options="gps.proGrandparentSortId as gps.grandparentSortName for gps in grandparentSorts" ng-model="gps" ng-change="getParentSort()">
                            <option value="">请选择</option>
                            </select>
                        </div>
                        <div class="col-md-1 inprodet-titl am-ft-12">中品类：</div>
                         <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" ng-options="ps.proParentSortId as ps.parentSortName for ps in parentSorts" ng-model="ps" ng-change="getSort()">
                            <option value="">请选择</option>
                            </select>
                        </div>
                        <div class="col-md-1 inprodet-titl am-ft-12">小品类：</div>
                         <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" ng-options="sort.proSortId as sort.sortName for sort in sorts" ng-model="sort">
                            <option value="">请选择</option>
                            </select>
                        </div>           
                        <div class="fn-clear"></div>
                    </div>
                    <!-- row3 -->
                    <div class="row">
                    <div class="col-md-1 inprodet-titl am-ft-12">商品款号：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <input type="text" class="col-md-12 text-overflow" name="" id="proModelid" placeholder="" value=""/>
                        </div>
                        <div class="col-md-1 inprodet-titl am-ft-12">库存：</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-5 text-overflow" name="" id="startStock" placeholder="" value=""/>
                            <span class="am-ft-center fn-left">--</span>
                            <input type="text" class="col-md-5 text-overflow" name="" id="endStock" placeholder="" value=""/>
                        </div>
                        <div class="col-md-1 am-ft-center searchBox">
                            <button type="button" class="btn fn-left btn-primary" ng-click="getStock(this)">查询</button>
                        </div>
                    	<div class="fn-clear"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="PrivTable">
                <table class="table table-hover table-striped table-bordered">
                	
                    <tr>
                        <th scope="col">大品类</th>
                        <th scope="col">中品类</th>
                        <th scope="col">小品类</th>
                        <th scope="col">款号</th>
                        <th scope="col">款名</th>
                        <th scope="col">品牌</th>
                        <th scope="col">年份</th>
                        <th scope="col">季节</th>
                        <th scope="col">库存量</th>
                    </tr>
                    
                    <tr ng-repeat="pro in products" class="{{pro.proModelid}}">
                      <td>{{pro.grandparentSortName}}</td>
                      <td>{{pro.parentSortName}}</td>
                      <td>{{pro.sortName}}</td>
                      <td>{{pro.proModelid}}</td>
                      <td>{{pro.proName}}</td>
                      <td>{{pro.brandName}}</td>
                      <td>{{pro.proYear}}</td>
                      <td>{{pro.proSeason}}</td>
                       <td>
                           <a href="javascript:;" class="detPanel" ng-click="getStockDetail(this)" >{{pro.stkOnHand}}<i class="fa fa-angle-down"></i></a>
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
		
<!----------------- Content Wrapper end ------------------->
<script>

    $(function(){
        //库存详情面板
       $('.detPanel').click(function(){
           var thisIcon = $(this).children('.fa');
           var thisPanel = $(this).parents('tr').next('.detPanel-info');
           thisPanel.toggle();
           thisPanel.siblings('.detPanel-info').hide();
           thisIcon.toggleClass('fa-angle-down fa-angle-up');
           $(this).parents('tr').siblings().find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
       })

    })

</script>
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" /> 