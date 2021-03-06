<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>


<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order fn-clear" ng-hide="numA==1">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">云仓门店(<span>{{count}}</span>)</h2>
        <button type="button" class="btn fn-right btn-primary" ng-click="HugeTableStoreAdd()">+&nbsp;&nbsp;增加门店</button>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <section class="container-fluid">
      <form id="store">
        <div class="row">
            <div class="prodet-nav">
                <div class="prodet-box pb0 pl0 mgl20">
                    <!----row1---->
                    <div class="row">
                        <div class="col-md-1 inprodet-titl am-ft-12">门店名称：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <input class="col-md-12" name="" id="shopName" type="text" placeholder="请输入" />
                        </div>
                        <div class="col-md-1 inprodet-titl am-ft-12 mgl-20">地&nbsp;&nbsp;&nbsp;区：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" name="province" ng-options="province.name for province in provinces" ng-model="province">
                                <option value="">请选择省</option>
                            </select>
                        </div>
                        <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" name="city" ng-options="city.name for city in citys[province.id]" ng-model="city">
                                <option value="">请选择市</option>
                            </select>
                        </div>
                        <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" name="district" ng-options="district.name for district in districts[city.id]" ng-model="district">
                                <option value="">请选择区</option>
                            </select>
                        </div>
                    </div>
                    <!----row2---->
                    <div class="row">
                        <div class="col-md-1 inprodet-titl am-ft-12">云仓库存：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <div class="col-md-5 pl0 pr0 needValInfo">
                                <input class="col-md-11" name="startStockNum" id="stock-begin" type="text" placeholder="" />
                            </div>
                            <div class="col-md-1">-</div>
                            <div class="col-md-5 pl0 pr0 needValInfo">
                                <input class="col-md-11" name="endStockNum" id="stock-end" type="text" placeholder="" />
                            </div>
                        </div>
                        <div class="col-md-1 inprodet-titl am-ft-12">接单率：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <div class="col-md-4 pl0 pr0 needValInfo">
                                <input class="col-md-10" name="startSingleRate" id="singleRate-begin" type="text" placeholder="" />
                            </div>
                            <span class="fn-left">&incare;</span>

                            <div class="col-md-1">-</div>
                            <div class="col-md-4 form-group pl0 pr0 needValInfo">
                                <input class="col-md-10" name="endSingleRate" id="singleRate-end" type="text" placeholder="" />
                            </div>
                            <span class="fn-left">&incare;</span>
                        </div>
                        <div class="col-md-1 inprodet-titl am-ft-12 mgl-20">状&nbsp;&nbsp;&nbsp;态：</div>
                        <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" name="o2oStatus" ng-model="seletedsit" ng-options="a.Statusid as a.statusName for a in situations">
                                <option value="">请选择</option>
                            </select>
                        </div>
                        <div class="col-md-1 mgl-10"><button class="btn btn-primary" ng-click="getShops('search')">查询</button></div>
                    </div>
                </div>
            </div>
        </div>
      </form>
    </section>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12 mgt-20">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">门店编号</th>
                        <th scope="col">商户编号</th>
                        <th scope="col">门店名称</th>
                        <th scope="col">经营模式</th>
                        <th scope="col">折扣</th>
                        <th scope="col">地区</th>
                        <th scope="col">地址</th>
                        <th scope="col">云仓库存</th>
                        <th scope="col">接单率</th>
                        <th scope="col">状态</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="shop in shopList">
                        <td>{{shop.orgId}}</td>
                        <td>{{shop.shopNum}}</td>
                        <td>{{shop.shopName}}</td>
                        <td><span ng-if="shop.shopType == 1">直营店</span><span ng-if="shop.shopType == 2">加盟店</span></td>
                        <td>{{shop.discount}}</td>
                        <td>{{shop.province}}{{shop.city}}{{shop.district}}</td>
                        <td>{{shop.shopAddr}}</td>
                        <td>{{shop.stockNum}}</td>
                        <td>{{shop.singleRate}}</td>
                        <td>
                        	<span ng-if="shop.o2oStatus==0">未加入</span>
                            <span ng-if="shop.o2oStatus==1">正常接单</span>
                            <span ng-if="shop.o2oStatus==2" class="{{red}}">停止接单</span>
                        </td>
                        <td><a href="javascript:;" class="am-ft-red" ng-click="editShops($event)" id="{{shop.orgId}}" name="remove">移除</a></td>
                    </tr>
                </table>
            </div>
        </form>
        <!--分页 start-->
            <div class="pagelist priv-pagelist">
                <div id="paging"></div>
            </div>
        <!--分页 end-->
        <div class="fn-clear"></div>
    </div>

    <!-- /Main content -->
</div>


<!-- 删除弹窗 start-->
<div class="am-dialog del-dialog fn-hide">
    <form>
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button btn-con" am-bg="blue">确认</button>
                <button type="button" class="am-flexbox-item btn am-button" onclick="dialogHide()" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!-- 删除弹窗 end-->

    <!-- 增加门店 -->
    <div class="default" ng-hide="numA==0" ng-init="numA=0" ng-show="numA==1">
    <jsp:include page="HugeTable-store-add.jsp" />
    </div>
    <!-- /增加门店 -->

<script type="text/javascript">
    //弹窗
    $('.am-dialog').center();
    function dialogHide(){
        $('.del-dialog,.maskBg').hide();
    }
</script>

