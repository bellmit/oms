<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->
<jsp:include page="../../public/ztreeStyle.jsp" />
<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
        <div class="content-wrapper">
        <!-- Main content -->
            <section class="container-fluid">
                <div class="row">
                <!-------right content end--------->
                    <!----- tree start ---->

                    <!----- tree end ----->

                <div class="nextTable">
                    <div class="rightNav-titl">
                        <h2 class="am-ft-12 am-ft-darkgray fn-left">详细信息</h2>
                        <p class="titlline"></p>
                    </div>
                    <div class="table-responsive PrivTable">
                        <form id="Tableform" method="post">
                        <table class="table table-hover table-striped table-bordered">
                            <tr>
                                <!-- <th width="8%" scope="col">选择</th> -->
                                <th scope="col">名称</th>
                                <th scope="col">应用描述</th>
                                <th width="15%" scope="col">操作</th>
                            </tr>
                            <tr ng-repeat="item in items">
                                <!-- <td><input type="checkbox" name="selectSave" /></td> -->
                                <td style="display: none" class="appId">{{item.appId}}</td>
                                <td class="appName">{{item.appName}}</td>
                                <td class="appDesc">{{item.appDesc}}</td>
                                <td>
                                    <button type="button" class="line-btn fn-left alterBtn" am-bg="blue" ng-click="update(this)" id="{{item.appId}}">修改</button>
                                    <button type="button" class="fn-left line-btn-delete" am-bg="white" onclick="dele(this)" id="{{item.appId}}">删除</button>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">                               	  
                                    <button type="button" class="btn fn-left btn-primary" onclick="open_dialog('新增')">新增</button> 
                                </td>
                            </tr>
                        </table>
                        </form>
                    </div>
                    <div class="fn-clear"></div>
                </div>


                <!-------right content end--------->

                <div class="fn-clear"></div>
                </div>
            </section>
        </div>
        <!------------------用户新增修改 Dialog start--------------------->
	<form id="myform" method="post">
		<div class="am-dialog addColordialog" id="userdialog">
			<div class="am-dialog-wrap">
			<div class="am-dialog-header">
            	<h3 class="am-ft-center">应用信息</h3>
       		</div>
			<div class="am-input needValInfo">
        <label class="fn-left">应用名称：</label>
        <input class="fn-left" type="hidden" id="appId" name="appId">
        <input class="fn-left" type="text" name="appName" value="" placeholder="应用名称" >
        <div class="fn-clear"></div>
    </div>

    <div class="am-input needValInfo">
        <label class="fn-left">应用描述：</label>
        <input class="fn-left" type="text" name="appDesc" value="" placeholder="应用描述" />
        <div class="fn-clear"></div>
    </div>

			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv"
					id="msave" am-bg="blue" ng-click="save(this)"></button>
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
					<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
			</div>
		</div>
	</form>
<!-- 删除模态层 -->
<div class="am-dialog addColordialog" id="deldialog">
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">是否删除</h3>
        </div>
        <div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv1"
					am-bg="blue" ng-click="del(this)">确定</button>
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
					<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
    </div>
</div>
<script>
	//打开新增修改模态层
		function open_dialog(obj){
			if(obj == '新增'){
				$("input[type=reset]").trigger("click");
			}
			 $('#userdialog').fadeIn();
			 $('.maskBg').fadeIn();
			 $('#msave').html(obj);
		}
		
   function dele(obj){
  	    var appId=obj.id;
  	    $("#appId").val(appId);
	    $('#deldialog').fadeIn();
		$('.maskBg').fadeIn();
	}
</script>
<script>
	jQuery.fn.center = function () {
            this.css({
                "position" :"fixed",
                "top" : 50 + "%",
                "marginTop" : ("-" + this.height() / 2) + "px",
                "left" : ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px"
            });
            return this;
        };
        $(".addColordialog").center();

        $('.alterBtn').click(function(){
            $('.maskBg,#userdialog').fadeIn();
        });
        $('#closeDialog,.alterOv,.alterOv1').click(function(){
            $('.maskBg,#userdialog,#deldialog').fadeOut();
        });
</script>
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" /> 