<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>

<!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-order fn-clear">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">增加云仓门店</h2>
            <a href="javascript:;" class="line-btn fn-right mgt5" ng-click="callback()">返回</a>
        </div>
        <div class="fn-clear"></div>
        <!-- search -->
        <section class="container-fluid">
          <form id="storeAdd">
            <div class="row">
                <div class="prodet-nav">
                    <div class="prodet-box pb0 pl0">
                        <!----row1---->
                        <div class="row">
                            <div class="col-md-1 inprodet-titl am-ft-12">门店名称：</div>
                            <div class="col-md-2 form-group needValInfo">
                                <input class="col-md-12" id="shopDetName" name="shopName" type="text" placeholder="请输入" style="width: 180px;" />
                            </div>
                            <div class="col-md-1 inprodet-titl am-ft-12 mgl-20">地&nbsp;&nbsp;&nbsp;区：</div>
                            <div class="col-md-2 form-group needValInfo">
                            <select class="col-md-12" name="province" ng-options="province.name for province in provinces" ng-model="province" >
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
                            <div class="col-md-1 mgl-10"><button class="btn btn-primary" ng-click="getShops('addSearch')">查询</button></div>
                        </div>
    
                    </div>
                </div>
            </div>
          </form>
        </section>
        <!-- /search -->
    
        <!-- Main content -->
        <div class="ManColTable col-lg-12">
            <form id="shop">
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
                            <th scope="col">操作</th>
                        </tr>
                        <tr ng-repeat="shop in shopList">
                            <td width="20"><input class="checkAdd" name="orgId" shopid="{{shop.orgId}}" ng-checked="selectAll" type="checkbox" value="{{shop.orgId}}" /></td>
                            <td>{{shop.orgId}}</td>
                            <td>{{shop.shopNum}}</td>
                            <td>{{shop.shopName}}</td>
                            <td>{{shop.shopType}}</td>
                           	<td>{{shop.discount}}</td>
                            <td>{{shop.province}}{{shop.city}}{{shop.district}}</td>
                            <td>{{shop.shopAddr}}</td>
                            <td><a href="javascript:;" ng-click="editShops($event)" id="{{shop.orgId}}" name="addShop">增加</a></td>
                        </tr>
                        <tr>
                            <td colspan="8">
                                <div class="fn-left">
                                    <input ng-model="selectAll" class="fn-left selectAll" type="checkbox" />
                                    <span class="fn-left mgl10 mgr20">全选</span>
                                    <a class="fn-left" href="javascript:;" ng-click="addShops($event)">批量增加</a>
                                </div>
                            </td>
                        </tr>
    
                    </table>
                </div>
            </form>
            <!--分页 start-->
            <div class="pagelist priv-pagelist">
                <div id="pagingAdd"></div>
            </div>
            <!--分页 end-->
            <div class="fn-clear"></div>
        </div>
    
        <!-- /Main content -->
    </div>
