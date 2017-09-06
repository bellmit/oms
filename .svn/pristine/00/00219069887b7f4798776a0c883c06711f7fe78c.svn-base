 ·<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left" >云仓商品管理</h2>
    </div>
    <div class="fn-clear"></div>

    <!-- Main content -->
    <div class="ManColTable col-lg-12 union-productManage">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">联盟</th>
                        <th scope="col">商品</th>
                        <th scope="col">操作</th>
                    </tr>
                   <tr ng-repeat="union in unionList">
                        <td>
                            <p class="am-ft-14 am-ft-black">{{union.cloudName}}</p>
                            <p><span>品牌：{{union.brandName}}</span> 状态：已加入</p>
                            <p>创建者：{{union.shopName}}</p>
                        </td>
                        <td>
                            <div class="w50 fn-left">
                                <p>已参与云仓商品共计：<em class="am-ft-14 am-ft-black">{{union.proTotal-union.limitPro}}款</em></p>
                                <!--<p ng-if="union.limitPro!=''">未参与云仓商品：<em class="am-ft-black" >{{union.limitPro}}款</em></p>-->
                                <p ng-if="union.limitPro ==''">未参与云仓商品：<em class="am-ft-red" >0款</em></p>
                            </div>
                            <div class="w50 fn-left">
                                <div ng-if="union.cloudPro!='0'">
                                	<p ng-if="union.cloudPro!=''">有库存的云仓商品共计：<em class="am-ft-black">{{union.cloudPro}}款</em></p>
	                                <p ng-if="union.cloudPro ==''">有库存的云仓商品共计：<em class="am-ft-red">0款</em></p>
	                                <p ng-if="union.notO2Oprice!=''">其中 <em class="am-ft-red" >{{union.notO2Oprice}}款</em>商品没有设置O2O结算价</p>
	                                <p ng-if="union.notO2Oprice ==''">其中 <em class="am-ft-red" >0款</em>商品没有设置O2O结算价</p>
                                </div>
                                <div ng-if="union.cloudPro=='0'">
									您还没有为联盟中的任何商品设置云仓库存，</br>
									<em class="am-ft-red" >无法进行销售</em>，请设置云仓库存和O2O结算价。
                                </div>
                            </div>
                        </td>
                        <td>
                            <a href="javascript:;" class="btn btn-primary" ng-click="getUnionPro(this)">云仓商品管理</a>
                        </td>
                   </tr>                    
                </table>
            </div>
        </form>
        <div class="fn-clear"></div>
    </div>

</div>



<!--------------- Content end ----------------->
<!--弹窗start-->
   <div class="joinUnionDialogMask" id="joinUnionDialogMaskA" ng-show="defaultObj.joinUnionDialogMaskA=='show'">
    <div class="joinUnionDialog" id="joinUnionDialoga">
        <div class="top fn-clear">
            <span class="fn-left">提示</span>
            <span class="fn-right"  ><img src="http://static.qineasy.com/base/images/closelogo.png" ng-click="closeForm('3')"></span>
        </div>
        <div class="contenta fn-clear">
            <div class="fn-left sureIcon">
                <span>!</span>
            </div>
            <div class="fn-left sureText fn-clear">                   	
            		 <p>您还没有为<span>{{cloudNameD}}（{{brandNameD}}）</span>中的云仓商品设置云仓库存，</p>
            		 <p>无法进行销售，请设置云仓库存和O2O结算价。</p>            		                         	
            </div>
       </div>
        <div class="diaLogButton fn-clear">
            <button class="fn-right iknowBtn" ng-click="skipSetStock()">我知道了</button>                     
        </div>
  </div>
</div>

<!--弹窗end-->
<script>
    //弹窗居中
    $('.joinUnionDialog').center();
    //百度编辑器的js代码
</script>

