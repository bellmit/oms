<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<div class="wrapper" style="position: inherit;">

   
<!--------------- Content start ----------------->
    <div class="content-wrapper">
        <!-- Main content -->
        <section class="container-fluid">
            <div class="row">

                <!-- content info start -->
                <div class="col-md-3 am-ft-14 categoNav">
                    <p class="col-md-12 am-ft-16 am-ft-center">大品类</p>
                    <div class="categoNav-div">
                        <ul class="categoNav-ul" id="categoNav-ul1">
							<li ng-repeat="large in largeSorts" ng-click="getMiddleSort(this)" id="{{large.sortId}}" ng-model="large">{{large.sortName}}</li>
                        </ul>
                        <div class="categoEdit">
                            <a cloumntype="1" href="javascript:;" class="Et-delete" onclick="dele(this,'1')"><i class="fa fa-trash"></i></a>
                            <a cloumntype="1" href="javascript:;" class="Et-alter" ng-click="update($event,'1')"><i class="fa fa-edit"></i></a>
                            <a cloumntype="1" href="javascript:;" class="Et-add" onclick="add(this,'1')"><i class="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 am-ft-14 categoNav">
                    <p class="col-md-12 am-ft-16 am-ft-center">中品类</p>
                    <div class="categoNav-div">
                        <ul class="categoNav-ul" id="categoNav-ul2">
							<li ng-repeat="middle in middleSorts" ng-click="getSmallSort(this)" id="{{middle.sortId}}" ng-model="middle">{{middle.sortName}}</li>
                        </ul>
                        <div class="categoEdit">
                            <a cloumntype="2" href="javascript:;" class="Et-delete" onclick="dele(this,'2')"><i class="fa fa-trash"></i></a>
                            <a cloumntype="2" href="javascript:;" class="Et-alter" ng-click="update($event,'2')"><i class="fa fa-edit"></i></a>
                            <a cloumntype="2" href="javascript:;" class="Et-add" onclick="add(this,'2')"><i class="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 am-ft-14 categoNav">
                    <p class="col-md-12 am-ft-16 am-ft-center">小品类</p>
                    <div class="categoNav-div">
                        <ul class="categoNav-ul" id="categoNav-ul3">
							<li ng-repeat="small in smallSorts" ng-click="getSortId(this)" id="{{small.sortId}}" ng-model="small">{{small.sortName}}</li>
                        </ul>
                        <div class="categoEdit">
                            <a cloumntype="3" href="javascript:;" class="Et-delete" onclick="dele(this,'3')"><i class="fa fa-trash"></i></a>
                            <a cloumntype="3" href="javascript:;" class="Et-alter"  ng-click="update($event,'3')"><i class="fa fa-edit"></i></a>
                            <a cloumntype="3" href="javascript:;" class="Et-add" onclick="add(this,'3')"><i class="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>

                <!-- content info end -->

                <div class="fn-clear"></div>
            </div>
        </section>
    </div>
<!--------------- Content start ----------------->
</div>

<!-- 删除模态层 -->
    <div class="am-dialog addColordialog" id="deldialog" >
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">是否删除</h3>
            </div>
            <div class="dialogBtn am-flexbox">
            	<input type="hidden" id="deltype">
                <button type="button" class="am-flexbox-item btn am-button alterOv1"
                        am-bg="blue" ng-click="del(this)">确定</button>
                <button type="button" class="am-flexbox-item btn am-button cancelcloseDialog" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </div>
<!-- 删除弹窗 -->
<!-- 新增弹窗 -->
<div class="am-dialog categoAddDialog fn-hide" style="width:400px">
    <form id="addForm">
        <i class="fa fa-plus Cont-add" ng-click="addDiv()"></i>
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">新增</h3>
            </div>
            <div class="am-input am-input-add am-input-def">
                <label class="fn-left">品类名称：</label>
                <input type="hidden" id="addtype">
                <input class="fn-left" type="text" name="sortName" value="" id="addsortName" placeholder="请输入..." />
                <div class="fn-clear"></div>
            </div>
            <div class="dialogBtn am-flexbox" id="adddialogBtn">
                <button type="button" class="am-flexbox-item btn am-button SavEdit" am-bg="blue" ng-click="addSort(this)">确认</button>
                <button type="button" class="am-flexbox-item btn am-button cancelcloseDialog" am-bg="white" id="cancelAddSort">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!-- 新增弹窗 -->
<!-- 修改弹窗 -->
<div class="am-dialog categoEditDialog fn-hide" style="width:400px">
    <form id="">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">修改</h3>
            </div>
            <div class="am-input am-input-add am-input-def">
                <label class="fn-left">品类名称：</label>
                <input type="hidden" id="updatetype">
                <input class="fn-left inPval" type="text" name="sortName" value="{{updateSortName}}" ng-model="updateSortName" pid="sortPid" placeholder="请输入..." />
                <div class="fn-clear"></div>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button SavEdit"  am-bg="blue" ng-click="updateSort(this)">确认</button>
                <button type="button" class="am-flexbox-item btn am-button cancelcloseDialog" am-bg="white" id="categoEditSort">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!-- 修改弹窗 -->

<!--弹窗 end-->
<!----- JS ------>
<script>
 	//删除
    function dele(obj,type){
    	if($(obj).parents('.categoNav-div').find('li').is('.activeCatego')==true){
    		$("#deltype").val(type);
	        $('#deldialog').fadeIn();
	        $('.maskBg').fadeIn();
    	}else{
    		if(type==1){
				alertmsg("请选择一个大品类!","error");
			}else if(type==2){
				alertmsg("请选择一个中品类!","error");
			}else if(type==3){
				alertmsg("请选择一个小品类!","error");
			}
    	}
    }
    //添加
    function add(obj,type){
    		if(type==1){
    			$("#addtype").val(type);
		        $('.categoAddDialog').fadeIn();
		        $('.maskBg').fadeIn();
    		}else if(type!=1){
	    		if($(obj).parents('.categoNav').prev().find('li').is('.activeCatego')==true){
	    		$("#addtype").val(type);
		        $('.categoAddDialog').fadeIn();
		        $('.maskBg').fadeIn();
	    	}else{
	    		if(type==2){
					alertmsg("请选择一个大品类!","error");
				}else if(type==3){
					alertmsg("请选择一个中品类!","error");
				}
	    	}
    	}
    	
    }
    
    $('.SavEdit,.cancelcloseDialog').click(function(){
            $('#deldialog,.maskBg').hide();
    });
    
    //移除新增未保存内容
        $('.cancelcloseDialog').click(function(){
            $('.am-input').not('.am-input-def').remove();
            $('.categoEditDialog').center();
            $('#addsortName').val("");
        });

        //删除新增行
        $('.am-dialog-wrap').delegate(".am-input .delAdd","click",function(){
            var amIput = $(this).parent('.am-input');
            amIput.remove();
        });
        
    $('.categoAddDialog').center();
    $('.categoEditDialog').center();
	$(".addColordialog").center();

    $('.alterBtn').click(function(){
        $('.maskBg,#userdialog').fadeIn();
    });
    $('#closeDialog,.alterOv,.alterOv1').click(function(){
        $('.maskBg,#userdialog,#deldialog').fadeOut();
	});
    
    $('#cancelAddSort').click(function(){
		$('.categoAddDialog,.maskBg').hide();
	})
	$('#categoEditSort').click(function(){
		$('.categoEditDialog,.maskBg').hide();
	})
</script>
