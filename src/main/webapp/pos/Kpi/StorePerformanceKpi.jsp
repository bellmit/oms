<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <style>
        .laydate_table{
            display: none;           
         }
        .laydate_body .laydate_box{
            height: 68px;
            width: 266px;
        }
        .laydate_body .laydate_y {
	    	width: 123px;
	    }
	    .laydate_body .laydate_m {
		    width: 100px;
		}
        .laydate_body .laydate_bottom .laydate_btn{
            right: 100px;    
			top: 15px;
        }
		.laydate_body .laydate_bottom .laydate_btn .laydate_ok{
			padding: 2px 5px;
			height: 25px;
			width: 56px;
			text-align: center;
		}
    </style>

<!--------------- Content start ----------------->
   <div class="content-wrapper">
    <div class="col-md-11 pageTitl">

        <span class="am-ft-16 fn-left storeTitle">
                    店铺业绩目标设定
        </span>
    </div>
    <!-- search -->
    <div class="listSearch">
        <form class="form-horizontal">
            <div class="row">
            	 <div class="form-group col-md-4">
                        <label class="col-sm-6 pr0 control-label timeControl">时间（年/月）：</label>
                        <div class="col-sm-6 pl0 pro-search">
                            <input class="laydate-icon form-control timeControlSelect" type="text" id="planDate" name="createDate" 
                               placeholder="选择时间" style="height: 34px;" />
                        </div>
                   </div>
  
                    <div class="fn-clear"></div>               
            </div>
        </form>
    </div>

    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-md-12">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered ">
                    <tr class="">
                        <th  class="col-md-3">店铺</th>
                        <th  class="col-md-3">月目标</th>
                        <th  class="col-md-3">操作</th>
                        <th  class="col-md-3">设置日目标</th>
                    </tr>
                    <tr ng-repeat="shopTarget in shopPlan" >
                        <td >{{shopTarget.shopName}}
                        	 <input type="hidden"  ng-model="shopTarget.planId" disabled />
                        	 <input type="hidden"  ng-model="shopTarget.shopId" disabled />
                        </td>
                        <td>
                        	<input type="text" class="editMonthTarget"  ng-model="shopTarget.planAmount" ng-disabled="disable"/>
                        <td>
                        	<button class="editTarget" type="button" ng-show="isEditTarget" ng-click="editMonthTarget(this)">编辑</button>
                            <button class="editSave" type="button" ng-show="!isEditTarget" ng-click="editSave(this)">保存 </button>
                                                 
                        </td>
                        <td> 
                        	<button class="setDayBtn" type="button" ng-click="setDayTarget(this)">设置日目标 </button>
                        </td>
                    </tr>
                  
                </table>

            </div>

        </form>
        <div class="fn-clear"></div>
    </div>

</div>

</div>

<!--弹窗 start-->
<div class="setDayTargetL fn-hide">
    <div class="setDayTargetTitle">
    	<span>店铺日目标设定</span>
    	<img class="closeDia" src="http://static.qineasy.com/base/images/closelogo.png" />
    </div>
    <div class="setDayTargetContent" >
    	<div class="setDayTargetContentTil">
    		<span>日期：{{planDateY+"年"+planDateM+"月"}}</span>
    		<span>店铺：{{shopName}}</span>
    		<span>月目标：{{planAmount}}</span>
    	</div>
    	<div class="setDayTargetContentTal">
    		<form action="" id="setMonthTarget">
    		<table class="table setDayTargetTal" >
    			<tr >
    				<th class="col-sm-4">日期</th>
    				<th class="col-sm-4">日目标</th>
    				<th class="col-sm-4">占比例</th>
    			</tr>
    			<tr ng-repeat="shopDayTarget in shopDayPlan">
    				<td>
    				{{shopDayTarget.planDate}}
    				</td>
    				<td>
    					<input type="text" name="date{{$index+1}}" ng-value="shopDayTarget.planAmount" ng-change="totalChange()" ng-model="shopDayTarget.planAmount"/>
    				</td>
    				<td>{{shopDayTarget.planAmount/planAmount*100 | number:2}}%</td>
    			</tr>
    			
    		</table>	
    		
    		</form>	
    	</div>	
    	 <div class="setDayTargetTotal">
    			<span>当月合计：{{total}}</span>
    		</div>
    </div>
    <div class="setDayTargetBtn">
    	<button type="button" class="setDayTargetBtny" ng-click="dayTargetSave()">确认</button>
    	<button type="button" class="setDayTargetBtny setDayTargetBtnn" ng-click="resetDayTarget()">重置</button>
    </div>
</div>


<!--弹窗 end-->


   
   
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" /> 

<script>
    //弹窗居中
    $('.setDayTargetL').center();
    $(function(){
    	$('.closeDia,.maskBg').click(function(){
    		$('.setDayTargetL,.maskBg').hide();
    	});
    });

   
</script>