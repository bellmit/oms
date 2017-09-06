<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2 paddingleft20"> 
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">素材管理(共{{count}}个商户)</h2>
       <!--  <select class="itemshow-order">
        	<option>按时间排序</option>
        	<option>按名称排序</option>
        </select> -->
        <div class="OderlistSearch fn-right">
               <div class="col-md-12 searchBox pl0">
                   <input type="text" class="col-sm-11 mgt-8" ng-model="shopName" placeholder="商户名称" value="" />
                   <a href="javascript:;" class="fn-left search-icon" ng-click="initCommercialManager()">查询</a>
               </div>
               <div class="fn-clear"></div>
        </div>
    </div>
    
    <div class="fn-clear"></div>

    <div class="ManColTable">
        <ul>
            <li class="folder-item" ng-repeat="orgManage in orgManageList" ng-model="orgManage">
                <a href="javascript:;" ng-click="getmateriaDet(this)">
                    <img class="folderImg" src="../static/base/images/icon_folder.png" />
                    <p class="folderName">{{orgManage.shopName}}</p>
                    <img class="compLogo" ng-src="{{orgManage.shopLogo}}" ng-if="orgManage.shopLogo != '' " />
                    <img class="compLogo" src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="orgManage.shopLogo == '' " />
                </a>
            </li>
            <li class="fn-clear"></li>
        </ul>
        <!--分页 start-->
		    <div class="pagelist priv-pagelist">
		    	<div id="paging"></div>    
		    </div>
		<!--分页 end-->
        <div class="fn-clear"></div>
    </div>
</div>
<!--<div class="fn-clear"></div>-->
<!--------------- /Content end ----------------->