<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
   <!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-order">
    	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">加入云仓分享联盟</h2>
	    </div>
        <div class="col-md-12 joinNav">
            <div class="joinUion01 joinUion01active">
            	<span class="joinUNav1 activespan">1</span>
            	<span class="joinUNav2 ">加入联盟</span>
            </div> 
             <div class="joinUion02 ">
            	<span class="joinUNav1">2</span>
            	 <span class="joinUNav2">选择成员</span>
            </div> 
             <div class="joinUion03 ">
            	<span class="joinUNav1">3</span>
            	<span class="joinUNav2">完成</span>    
            </div>          
        </div>
        <div class="fn-clear"></div>
        <p class="join-titl-note">加入已有的云仓分享联盟，将有权和参与的商户和门店共同分享云仓库存里的商品。</p>
       
        <!-- Main content -->
        <div class="ManColTable col-lg-12">
            <!-- 加入联盟 -->
            <div class="table-responsive">
                <div class="">
                    <table class="table table-hover table-striped">
                        <tr class="unionList">
                            <th scope="col">品牌</th>
                            <th scope="col">联盟名称</th>
                            <th scope="col">创建商户</th>
                            <th scope="col">创建时间</th>
                            <th scope="col">加入联盟</th>                
                        </tr>
                        <!-- 显示已有联盟-->
                        <tr class="" ng-repeat="list in unionListB">
                            <td >
                            	<input type="hidden" ng-value="list.cloudId" ng-model="cloudIdjoin" disabled="disabled" id="uCloudId"/>
                            	<input type="hidden" ng-value="list.brandId" ng-model="brandIdjoin" disabled="disabled" id="ubrandId"/>
                                <span>{{list.brandName}}</span>
                            </td>
                            <td><span class="">{{list.cloudName}}</span></td>
                            <td >
                                <span>{{list.shopName}}</span>
                            </td>
                            <td >
                                <span>{{list.createDate}}</span>                           
                            </td>
                            <td >
                                <button class="btn btn-primary joinUBtn" ng-click="joinUnion(this)" ng-if="list.isJoined=='1'" disabled="disabled">加入联盟</button>
                                 <button class="btn btn-primary joinUBtn" ng-click="joinUnion(this)" ng-if="list.isJoined=='0'" >加入联盟</button>
                            </td>
                        </tr>
                          
                       
                    </table>

                    <div class="fn-clear"></div>
                </div>
              
            </div>
             
            <div class="fn-clear"></div>
            <!-- /加盟联盟 -->
        </div>
        
        <!-- /Main content -->
    </div>
