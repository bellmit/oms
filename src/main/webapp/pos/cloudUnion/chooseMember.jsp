<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
    <!--加入联盟首页-->
<div class="content-wrapper fn-clear">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">创建云仓分享联盟</h2>
    </div>
    <div class="col-md-12 joinNav">
        <div class="joinUion01 col-md-4">
           <span class="joinUNav1">1</span>
            <span class="joinUNav2">创建联盟</span>
        </div> 
        <div class="joinUion02 col-md-4 joinUion02active">
            <span class="joinUNav1 activespan">2</span>
            <span class="joinUNav2">选择成员</span>
        </div> 
        <div class="joinUion03 col-md-4">
           <span class="joinUNav1">3</span>
            <span class="joinUNav2">完成</span>    
        </div>          
    </div>
    <div class="fn-clear"></div>
    <!-- Main content -->
    <div class="chooseMemberContent col-md-11 ">
        <div class="fn-clear chooseMemberTitle" >
            <div class="fn-left"><span class="unionNameTitle fn-left">成功创建云仓分享联盟：</span><span class="unionName">{{cloudName}}</span></div>
            <div class="fn-left"><span class="brandNameTitle fn-left">品牌：</span><span class="brandName">{{brandName}}</span></div>
        </div>
        <div class="unionMemberList">
            <p>接下来请选择成员：</p>
            <div class="col-lg-12 unionMemberListTable">
                <form action="" id="productTable">
                    <table class="table  table-hover table-striped table-bordered">
                        <tr>
                            <th></th>
                            <th>成员编号</th>
                            <th>成员名称</th>
                             <th>类型</th>
                            <th>地址</th>
                            <th>已有联盟</th>
                        </tr>
                        <tr ng-repeat="cloudUnion in cloudUnionList">
                            <td>
                                <input ng-disabled="cloudUnion.cloudName!=''" id="selectedShop" ng-click="chooseShop(this,cloudUnion.orgId,cloudUnionList,'one')" ng-checked="cloudUnion.getchecked" ng-value="cloudUnion.orgId" type="checkbox" name="productInfo" />
                            </td>
                            <td>{{cloudUnion.shopNum}}</td>
                            <td>{{cloudUnion.shopName}}</td>
                            <td>
                            	<span ng-if="cloudUnion.orgType=='1'">商户</span>
                            	<span ng-if="cloudUnion.orgType=='4'">店铺</span>
                            </td>
                            <td>{{cloudUnion.province}} {{cloudUnion.city}} {{cloudUnion.district}} {{cloudUnion.shopAddr}}</td>
                            <td>{{cloudUnion.cloudName}}</td>
                        </tr>
                    </table>
                    
		            <div class="pagelist priv-pagelist fn-left price-pagelist">
			            <div class="fn-clear fn-left selectAll-paging">
			                <input type="checkbox"  id="selectedAllShop" ng-checked="getchecked" name="selectAll" id="selectAll" class="fn-left selectAllMember" ng-click="chooseShop(this,cloudUnion.orgId,cloudUnionList,'all')" ng-model="getchecked"/>
			                <label for="selectedAllShop" class="fn-left">全选当前页</label>
			            </div>
		                <div id="paging">分页</div>
		            </div>
		            <div class="fn-clear">
		            <!--"-->
		                <a href="javascript:;" class="fn-left addSeletedMember addMemberbuttom" ng-click="selectMemberA('selected')">添加选中成员</a>
		                <a href="javascript:;" class="fn-left addAllMember addMemberbuttom" ng-click="selectMemberA('all')">添加全部成员</a>
		            </div>
                </form>
            </div>
            
        </div>
    </div>

</div>
    <!--添加加盟品牌弹框-->
<div class="joinUnionDialogMask"  ng-show="defaultObj.joinUnionDialogMaskB=='show'">
    <div class="joinUnionDialog" id="joinUnionDialogMaskB">
        <div class="top fn-clear">
            <span class="fn-left">加入成员</span>
            <span class="fn-right" ng-click="closedialog()"><img src="http://static.qineasy.com/base/images/closelogo.png" alt=""></span>
        </div>
        <div class="contenta fn-clear">
            <div class="fn-left sureIcon">
                <span>!</span>
            </div>
            <div class="fn-left sureText" ng-if="addMemberType=='selected'">
                <p>请确认是否加入当前选中成员？</p>
                <div class="selectedMenber"><span>已选成员：</span><span>{{unionListCount}}&nbsp;&nbsp;   个</span></div>
                 <div class="unSelectedMenber selectedMenber"><span>未选成员：</span><span>&nbsp;&nbsp;{{cloudUnionCount-unionListCount}}&nbsp;&nbsp;个</span><span>其中有<i>&nbsp;&nbsp;{{joinedCount}}&nbsp;&nbsp;个</i>成员因为已有联盟无法加入</span></div>
            </div>
            <div class="fn-left sureText" ng-if="addMemberType=='all'">
                <p>请确认是否加入全部成员？</p>
                <div class="selectedMenber"><span>全部成员：</span><span>&nbsp;&nbsp;{{cloudUnionCount}}&nbsp;&nbsp;个</span></div>
                 <div class="unSelectedMenber selectedMenber"><span>其中有<i>&nbsp;&nbsp;{{joinedCount}}&nbsp;&nbsp;个</i>成员因为已有联盟无法加入</span></div>
            </div>
        </div>
        <div class="diaLogButton fn-clear">
            <button class="cancelButton fn-right" ng-click="closedialog()">取消</button>
            <button class="sureButton fn-right" ng-click="sureOperation()">确认</button>
        </div>

    </div>
</div>