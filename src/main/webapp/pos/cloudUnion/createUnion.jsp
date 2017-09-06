<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!--加入联盟首页-->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h class="am-ft-16 fn-left">创建云仓分享联盟</h2>
    </div>
    <div class="col-md-12 joinNav">
        <div class="joinUion01 col-md-4 joinUion01active">
           <span class="joinUNav1 activespan">1</span>
            <span class="joinUNav2">创建联盟</span>
        </div> 
        <div class="joinUion02 col-md-4">
            <span class="joinUNav1">2</span>
            <span class="joinUNav2">选择成员</span>
        </div> 
        <div class="joinUion03 col-md-4">
           <span class="joinUNav1">3</span>
            <span class="joinUNav2">完成</span>    
        </div>          
    </div>
    <div class="fn-clear"></div>

    <!-- Main content -->
    <div class="createUnionContent col-md-11">
        <p>创建云仓分享联盟后，参与的商户和门店将有权共同分享云仓库存里的商品。</p>
        <form action="" class="createUnionForm">
            <div class="fn-clear">
                <span class="fn-left">云仓分享联盟名称：</span>
                <input type="text" class="fn-left" name="cloudName">
                <span class="fn-left unionNameDes">云仓分享联盟名称一旦成立，不可修改</span>
            </div>
            <div class="fn-clear">
                <span class="fn-left">品牌：</span>
                <select name="brandId"  class="fn-left">
                    <option value="">请选择</option>
                    <option  ng-class="{true:'option-status'}[brand.isCanCreateUnion == '1']"   ng-repeat="brand in brandList | orderBy : 'isCanCreateUnion' " ng-value="[brand.brandId,brand.brandName]" ng-disabled="brand.isCanCreateUnion == '1'">
                         {{brand.brandName}}
                   </option>
                </select>
            </div>
        </form>
        <div class="createUnionNext">
            <button ng-click="startChooseMember()">下一步</button>
        </div>
    </div>
</div>
