<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
   <!--content-->
 <div class="content-wrapper content-wrapper-order">
    	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">加入云仓分享联盟</h2>
	    </div>
         <div class="col-md-12 joinNav">
            <div class="joinUion01  ">
            	<span class="joinUNav1">1</span>
            	<span class="joinUNav2">加入联盟</span>
            </div> 
             <div class="joinUion02 joinUion02active">
            	<span class="joinUNav1 activespan">2</span>
            	 <span class="joinUNav2">选择成员</span>
            </div> 
             <div class="joinUion03 ">
            	<span class="joinUNav1">3</span>
            	<span class="joinUNav2">完成</span>    
            </div>          
        </div>
        <div class="fn-clear"></div>
        <p class="join-titl-note ">
        	<span class="joinMber">您正在加入</span><span >&nbsp;{{shopName}}&nbsp;</span>
        	<span class="joinMber">创建的云仓分享联盟：</span><span >{{cloudName}}&nbsp;&nbsp;</span>
        	<span class="joinMber">品牌：</span><span>{{brandName}}</span>
        </p>
        <div class="ManColTable col-lg-12">
            <div class="table-responsive">
                <div class="joinMemberList">
                	<p >接下来请选择一起加入的成员：</p>
                	<p>&nbsp;</p>
                    <table class="table table-hover table-striped">
                        <tr class="unionList">
                            <th scope="col" colspan="2" width="23%">成员编号</th>
                            <th scope="col" width="20%">成员名称</th>
                            <th scope="col" width="35%">地址</th>
                            <th scope="col">已有联盟</th>                                  
                        </tr>
                        <tr class="unionMemberList" ng-repeat="unionMember in unionMemberList">              
                            <td width="3%">
                                <input type="checkbox" ng-checked="unionMember.check" ng-value="unionMember.orgId" ng-model="orgId" ng-click="selectMember(unionMember.orgId,unionMemberList,'one')"/>
                            </td>
                            <td width="20%"><span class="">{{unionMember.shopNum}}</span></td>
                            <td width="20%">
                                <span>{{unionMember.shopName}}</span>
                            </td>
                            <td width="35%">
                                <span>{{unionMember.province}}{{unionMember.city}}
                                	{{unionMember.district}}{{unionMember.shopAddr}}</span>
                            </td>
                            <td >
                              <span>{{unionMember.cloudName}}</span>
                            </td>
                        </tr>
                            
                    </table>
                    <div class="fn-clear"></div>
                </div>
              <!--分页 start-->
            <div class="pagelist priv-pagelist">
              <div class="fullsel fn-clear">
				<input type="checkbox" class="fn-left" id="fullsel"
					ng-click="selectMember(unionMember.orgId,unionMemberList,'all')" ng-checked="isChecked" ng-model="isChecked"/>
				<label for="fullsel" style="margin-top: 3px" class="fn-left">全选当前页</label>
			   </div>     
                <div id="pagingMember"></div>
            </div>
              <!--分页 end-->
            <div class="fn-clear">
            	<button class="fn-left addSeletedMember addMemberbuttom
                      " ng-click="addChooseJoinMember('selected')">添加选中成员</button>
            	<button class="fn-left addAllMember addMemberbuttom
                 " ng-click="addChooseJoinMember('all')">添加全部成员</button>
            </div>
          
            </div>
            <div class="fn-clear"></div>
            <!-- /加盟联盟 -->
        </div>
        <!-- /content -->
    </div>
    
    <!--添加弹框-->
 <div class="joinUnionDialogMask" id="joinUnionDialogMaskA" ng-show="defaultObj.joinUnionDialogMaskA=='show'">
    <div class="joinUnionDialog" id="joinUnionDialoga">
        <div class="top fn-clear">
            <span class="fn-left">加入成员</span>
            <span class="fn-right"  ng-click="closedialog()"><img src="http://static.qineasy.com/base/images/closelogo.png" alt=""></span>
        </div>
        <div class="contenta fn-clear">
            <div class="fn-left sureIcon">
                <span>!</span>
            </div>
            <div class="fn-left sureText fn-clear">
            	<div ng-if="partSelect">
            		<p>请确认是否加入当前选中成员？</p>
            		 <div class="selectedMenber">
            		 	<span>已选成员：</span>
            		 	<span>{{selectedCounts}}个</span>
            		 </div>             
                    <div class="unSelectedMenber selectedMenber" >
                    	<span>未选成员：</span>
                    	<span>{{notSelectedCounts}}个</span>
                    	<span>其中有<i>{{joinedCounta}}个</i>成员因为已有联盟无法加入</span>
                    </div>
            	</div>
            	<div ng-if="allSelect">
            		 <p >请确认是否加入全部成员？</p>
            		 <div class="selectedMenber">
            		 	<span>全部成员：</span>
            		 	<span>{{counts}}个</span>
            		 </div>
                     <div class="unSelectedMenber selectedMenber" >
                 	    <span>其中有<i>{{joinedCounta}}个</i>成员因为已有联盟无法加入</span>
                     </div>                 
            	</div>
        </div>
      </div>
        <div class="diaLogButton fn-clear">
            <button class="cancelButton fn-right" ng-click="closedialog()">取消</button>
            <button class="sureButton fn-right" ng-click="sureJoinSelectedmen()" ng-if="allSelect">确认</button>
            <button class="sureButton fn-right" ng-click="sureJoinSelectedmen()" ng-if="partSelect">确认</button>
            
        </div>
  </div>
</div>
  <!--/添加弹框-->

