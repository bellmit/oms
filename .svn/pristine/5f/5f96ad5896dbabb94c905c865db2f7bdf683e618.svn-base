<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-commerciaInfo mgb15">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">商户资料</h2>
        </div>
        <div class="fn-clear"></div>

        <div class="ManColTable col-lg-12">
            <div class="commercia-info">
                <!-- row1 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14 mgt25">商户logo：</div>
                    <div class="col-md-3 form-group memImg needValInfo">
                        <input type="file" ngf-select="uploadHeadpicPath($files)" />
                        <img class="media-object" ng-src="{{shopList[0].shopLogo}}" alt="请选择图片" id="shopLogo" />
                    </div>
                </div>
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">商户全称：</div>
                    <p>{{shopList[0].shopName}}</p>
                </div>
                <!-- row2 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">商户简介：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <textarea class="mgb0" ng-model="shopList[0].shopInfo" style="width: 380px; height:90px">{{shopList[0].shopInfo}}</textarea>
                    </div>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">通讯地址：</div>
                    <div class="col-md-8 form-group needValInfo">
                        <select class="col-md-3 mgr5" ng-model="shopList[0].province" ng-change="shopList[0].district='';shopList[0].city='';initprovinces()" >
                            <option value=""></option>
                            <option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
                        </select>
                        <select class="col-md-3 mgr5" ng-model="shopList[0].city" ng-change="shopList[0].district='';initcitys()" >
                            <option value=""></option>
                            <option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
                        </select>
                        <select class="col-md-3 mgr5" ng-model="shopList[0].district" >
                            <option value=""></option>
                            <option ng-repeat="district in districts[cityId]" value="{{district.name}}">{{district.name}}</option>
                        </select>
                    </div>
                </div>
                <!--row4-->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">详细地址：</div>
                    <div class="col-md-5 form-group needValInfo">
                        <input type="text" class="col-md-8 text-overflow" name="" placeholder="{{shopList[0].shopAddr}}" value="" ng-model="shopList[0].shopAddr" />
                    </div>
                </div>
                <!-- row5 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">联系人：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <input type="text" class="col-md-8 text-overflow" name="" placeholder="{{shopList[0].contacts}}" value="" ng-model="shopList[0].contacts" />
                    </div>
                </div>
                <!-- row6 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">联系电话：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <input type="text" class="col-md-8 text-overflow" name="" placeholder="{{shopList[0].shopTel}}" value="" ng-model="shopList[0].shopTel" />
                    </div>
                </div>
                <div class="fn-clear"></div>
            </div>
            <button type="button" class="btn btn-primary addBrandBtn" ng-click="updateComercia()">确认修改</button>
            <button type="button" class="btn btn-default mgl10" ng-click="goBack()">取消</button>
            <div class="fn-clear"></div>
        </div>
        <div class="fn-clear"></div>
    </div>

