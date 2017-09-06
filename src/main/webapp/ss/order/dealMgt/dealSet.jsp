<%@ page language="java" pageEncoding="UTF-8" %>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order">
    <div class="col-md-11 pageTitl ">
        <span class="am-ft-14 color666">交易设置</span>
    </div>
    <div class="fn-clear"></div>
    <div class="col-md-11 newDisCountBox newActivityBox dealSetBox mgt0">
        <div class="col-md-12 newDisCountComon ">
            <div>自动确认天数：</div>
            <div class="setEffectTime">
                <input type="text" ng-model="" class="mgr5 w70" placeholder="7"/>
                <span class="am-ft-black">天</span>
                <p class="am-ft-gray">（订单发货后，用户收货的天数，如果在期间未确认收货，系统自动完成收货，默认为7天）</p>
            </div>
        </div>
        <div class="col-md-12 newDisCountComon ">
            <div>完成订单：</div>
            <div>
                <input type="text" ng-model="" class="mgr5 w70" placeholder="7"/>
                <span class="am-ft-black">天内可申请退款</span>
                <p class="am-ft-gray">（订单完成后 ，用户在x天内可以发起退款申请，默认为7天）</p>
            </div>
        </div>
        <div class="col-md-12 newDisCountComon ">
            <div>退款说明：</div>
            <div >
                <textarea class="w400"></textarea>
            </div>
        </div>
        <div class="col-md-12 newDisCountComon ">
            <div style="height: 1px;"></div>
            <div >
                <button class="blueGroundWhiteBtn">保存</button>
            </div>
        </div>
    </div>
</div>
<!--------------- Content end ----------------->
<!--添加商品-->
<div class="addGoodsAndStoreCover " ng-if='showFrame=="1"||showFrame=="2"'>
    <!--<div class="AddGoodsAndStoreItem fn-clear  fn-hide" >-->
    <div class="AddGoodsAndStoreItem fn-clear" ng-if='showFrame=="1"'>
        <div class="addItemTitle">
            <span>添加限定商品</span>
            <div>
                <img src="../static/base/images/closelogo.png" ng-click="closeDia()"/>
            </div>
        </div>
        <!-- search start -->
        <div class="productSearch productSearch-type2 fn-clear" style="background: none;">
            <form class="form-horizontal" id="productForm">
                <div class="">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">品牌：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="brand" name="brandId" class="selectpicker" multiple data-actions-box="true">
                                    <option>7m</option>
                                    <option>8m</option>
                                    <option>9m</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">年份：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="proYear" name="proYear" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-4 control-label">季节：</label>
                            <div class="col-sm-8 pro-search">
                                <select id="proSeason" name="proSeason" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>春</option>
                                    <option>夏</option>
                                    <option>秋</option>
                                    <option>冬</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">波段：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="proStage" name="proStage" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>第一波段</option>

                                    <option>第二波段</option>

                                    <option>第三波段</option>

                                    <option>第四波段</option>

                                    <option>第五波段</option>

                                    <option>第六波段</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">廓形：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="proProfile" name="proProfile" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-4 control-label">所属平台：</label>
                            <div class="col-sm-8 pro-search">
                                <select id="proPlatform" name="proPlatform" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>淘宝</option>
                                    <option>京东</option>
                                    <option>亚马逊</option>
                                    <option>唯品会</option>
                                    <option>当当</option>
                                    <option>天猫</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">品类：</label>
                            <div class="col-sm-9 pro-search">
                                <input type="text" name="proSortId" value="" readonly="" style="display: none"/>
                                <input class="col-md-12" type="text" name="type" value="" readonly=""/>
                                <i class="fa fa-plus select_category" onclick="selectCategory()"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">款号：</label>
                            <div class="col-sm-9 pro-search">
                                <input class="col-md-12" type="text" name="proModelnum" value=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 am-ft-left searchBox searchBox1">
                        <button type="button" class="btn btn-primary" ng-click="getProListTB()">查询</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-12 addGoodsTableBox">
            <form id="proInfo">
                <table class="addGoodsTable">
                    <tr>
                        <th scope="col" width="7%"></th>
                        <th scope="col" width="15%">款号</th>
                        <th scope="col" width="19%">商品名称</th>
                        <th scope="col" width="16%">品牌</th>
                        <th scope="col" width="20%">品类</th>
                        <th scope="col" width="10%">年份</th>
                        <th>季节</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="productInfo" ng-checked="pro.getChecked"
                                   ng-click="selectProduct(this,'1')"/>
                        </td>
                        <td>4564564</td>
                        <td>女装雪纺春款2016<span ng-if="pro.proName.length>8">...</span></td>
                        <td>唐狮</td>
                        <td>大衣</td>
                        <td>2016</td>
                        <td>春</td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="col-md-12 checkAllBar">
            <label>
                <input type="checkbox" ng-model="currentPage" ng-checked="currentPage"
                       ng-click="selectProduct(products,'2')"/>
                全选当前页
            </label>
            <label>
                <input type="checkbox" ng-model="allPage" ng-checked="allPage"/>
                全选所有页
            </label>
            <div class="priv-pagelist fn-left" style="margin: 0;width: 64%;">
                <div id="paging"></div>
            </div>
        </div>
        <div class="fn-clear"></div>
        <div class="AddsGoodsItemBoundary"></div>
        <div class="AddsGoodsBtnBox">
            <button ng-click="closeDia()">取消</button>
            <button ng-click="addPro()">完成</button>
        </div>
    </div>
    <!--/添加商品-->
    <!--添加赠品-->
    <div class="AddGoodsAndStoreItem fn-clear fn-hide">
        <!--<div class="AddGoodsAndStoreItem fn-clear " ng-if='showFrame=="1"'  >-->
        <div class="addItemTitle">
            <span>选择赠品</span>
            <div>
                <img src="../static/base/images/closelogo.png" ng-click="closeDia()"/>
            </div>
        </div>
        <!-- search start -->
        <div class="productSearch productSearch-type2 fn-clear" style="background: none;">
            <form class="form-horizontal" id="productForm">
                <div class="col-md-12">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">品牌：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="brand" name="brandId" class="selectpicker" multiple data-actions-box="true">
                                    <option>7m</option>
                                    <option>8m</option>
                                    <option>9m</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">年份：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="proYear" name="proYear" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">季节：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="proSeason" name="proSeason" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>春</option>
                                    <option>夏</option>
                                    <option>秋</option>
                                    <option>冬</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">波段：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="proStage" name="proStage" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>第一波段</option>
                                    <option>第二波段</option>
                                    <option>第三波段</option>
                                    <option>第四波段</option>
                                    <option>第五波段</option>
                                    <option>第六波段</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">廓形：</label>
                            <div class="col-sm-9 pro-search">
                                <select id="proProfile" name="proProfile" class="selectpicker" multiple
                                        data-actions-box="true">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">品类：</label>
                            <div class="col-sm-9 pro-search">
                                <input type="text" name="proSortId" value="" readonly="" style="display: none"/>
                                <input class="col-md-12" type="text" name="type" value="" readonly=""/>
                                <i class="fa fa-plus select_category" onclick="selectCategory()"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="col-sm-3 control-label">款号：</label>
                            <div class="col-sm-9 pro-search">
                                <input class="col-md-12" type="text" name="proModelnum" value=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 ">
                    </div>
                    <div class="col-md-4 am-ft-left searchBox searchBox1">
                        <button type="button" class="btn btn-primary" ng-click="getProListTB()">查询</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-12 addGoodsTableBox">
            <form id="proInfo">
                <table class="addGoodsTable">
                    <tr>
                        <th scope="col" width="7%"></th>
                        <th scope="col" width="15%">款号</th>
                        <th scope="col" width="19%">商品名称</th>
                        <th scope="col" width="16%">品牌</th>
                        <th scope="col" width="20%">品类</th>
                        <th scope="col" width="10%">年份</th>
                        <th>季节</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="productInfo" ng-checked="pro.getChecked"
                                   ng-click="selectProduct(this,'1')"/>
                        </td>
                        <td>4564564</td>
                        <td>女装雪纺春款2016<span ng-if="pro.proName.length>8">...</span></td>
                        <td>唐狮</td>
                        <td>大衣</td>
                        <td>2016</td>
                        <td>春</td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="col-md-12 checkAllBar">
            <label>
                <input type="checkbox" ng-model="currentPage" ng-checked="currentPage"
                       ng-click="selectProduct(products,'2')"/>
                全选当前页
            </label>
            <label>
                <input type="checkbox" ng-model="allPage" ng-checked="allPage"/>
                全选所有页
            </label>
            <div class="priv-pagelist fn-left" style="margin: 0;width: 64%;">
                <div id="paging"></div>
            </div>
        </div>
        <div class="fn-clear"></div>
        <div class="AddsGoodsItemBoundary"></div>
        <div class="AddsGoodsBtnBox">
            <button ng-click="closeDia()">取消</button>
            <button ng-click="addPro()">完成</button>
        </div>
    </div>
    <!--/添加赠品-->
    <!--添加门店弹框-->
    <div class="AddGoodsAndStoreItem fn-clear" id="addLimitStore" ng-if='showFrame=="2"'>
        <div class="addItemTitle">
            <span>添加指定门店</span>
            <div>
                <img src="../static/base/images/closelogo.png" ng-click="closeDia()"/>
            </div>
        </div>
        <div class="col-md-12 AddsGoodsscreeningConditionBox AddsGoodsBox2"
             style="margin-bottom: -10px;margin-top: 10px;">
            <div class="AddStoreScreeningCondition addActivityShop" style="width: 23%;">
                <div style="width: 43%;">店铺类型：</div>
                <select style="width: 57%;">
                    <option value="">线上店铺</option>
                    <option value="">线下门店</option>
                    <option value="">所有店铺</option>
                </select>
            </div>
            <div class="AddStoreScreeningCondition addActivityShop" style="width: 27%;">
                <div style="width: 38%;">店铺编号：</div>
                <input name="shopNum" type="text" style="width: 62%;" ng-model="shopNum" placeholder="">
            </div>
            <div class="AddStoreScreeningCondition addActivityShop" style="width: 30%;">
                <div style="width: 36%;">店铺名称：</div>
                <input name="shopName" type="text" style="width: 64%;" ng-model="shopName" placeholder="">
            </div>
            <div class="AddsGoodsscreeningCondition addActivityShop" style="width: 10%;">
                <button ng-click="getShop()">查询</button>
            </div>
        </div>
        <div class="col-md-12 addGoodsTableBox">
            <table class="addGoodsTable">
                <tr>
                    <th scope="col" width="12%"></th>
                    <th scope="col" width="32%">门店编号</th>
                    <th scope="col">门店名称</th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="shop" ng-checked="shop.getChecked"
                               ng-click="selectShop(this,'1')"/>
                    </td>
                    <td>12071</td>
                    <td>城西银泰店</td>
                </tr>
            </table>
        </div>
        <div class="col-md-12 checkAllBar checkAllBar2">

            <label>

                <input type="checkbox" ng-model="allShop" ng-checked="allShop" ng-click="selectShop(shop,'2')"/>

                全选当前页

            </label>

            <label>

                <input type="checkbox"/>

                全选所有页

            </label>

            <div class="pagelist priv-pagelist">

                <div id="paging2"></div>

            </div>

        </div>
        <div class="fn-clear"></div>
        <div class="AddsGoodsBtnBox">
            <!--<button ng-click="closeDia()">取消</button>-->
            <button ng-click="addCard()">完成</button>
        </div>
    </div>
</div>
<!--/添加门店弹框-->
<script type="text/javascript">
    $(function () {
        $('.selectpicker').selectpicker('refresh');
        $(".AddGoodsAndStoreItem").center();
    })
</script>