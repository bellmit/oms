<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <a href="javascript:;" class="line-btn forwardTop-goBack" ng-click="goback('commercialStoreList')">返回</a>

    <!--------------- Content start ----------------->
    <div class="content-wrapper">
        <div class="ManColTable col-lg-12">
            <div class="forwardTop-content fn-left">
                <div class="forwardTop-left">
                    <img ng-if="shopLogo==''" src="http://static.qineasy.com/base/images/img_default_company.png" />
                    <img ng-if="shopLogo!=''" ng-src="{{storeData.shopLogo}}" />
                </div>
                <div class="forwardTop-right pdl15">
                    <div class="forwardTop-righttop">
                        <a href="javascript:;" class="forwardTop-rightTitl">{{storeData.shopName}}</a>
                        <p class="fn-right">运营人员：{{storeData.userName}}<a href="javascript:;" class="mgl5 allotOprate" ng-click="slecetUser1()">更换</a></p>
                        <div class="fn-clear"></div>
                    </div>
                    <p class="am-ft-black">店铺数：<span class="mgl10">{{storeData.shopNum}}个</span></p>
                    <p>联系电话：{{storeData.shopTel}}</p>
                    <p>详细地址：{{storeData.province}}{{storeData.city}}{{storeData.district}}{{storeData.shopAddr}}</p>
                </div>
            </div>

            <div class="table-responsive PrivTable storesMgt-Table">
                <p class="am-ft-14 am-ft-black mgb10">店铺列表（{{storeCount}}个）</p>
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <!-- <th scope="col" width="15%">编号</th> -->
                        <th scope="col" width="15%">店铺名称</th>
                        <th scope="col" width="35%">店铺网址</th>
                        <th scope="col">状态</th>
                        <th scope="col">授权</th>
                    </tr>
                     <tr ng-repeat="shop in shopLists">
                            <!-- <td class="am-ft-orange">{{shop.shopNum}}</td> -->
                            <td>
                            	<input type="hidden" value="shop.orgId" />
                                <span class="miniBrand-name">{{shop.shopName}}</span>
                                <img  ng-if="shop.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
                                <img  ng-if="shop.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
                                <img  ng-if="shop.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
                            </td>
                            <td><a href="javascript:;" ng-href="{{shop.shopUrl}}" target="_blank" class="webUrl text-overflow">{{shop.shopUrl}}</a></td>
                            <td class="am-ft-orange">未授权</td>
                            <td>申请进度</td>
                        </tr>
                </table>
            </div>

            <div class="fn-clear"></div>
        </div>
    </div>

    <div class="fn-clear"></div>

