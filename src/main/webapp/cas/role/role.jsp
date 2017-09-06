<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<style>

    .am-dialog {

        top: 50%;
        left: 480px;
        width: 370px;
        height:380px;
        width:450px;
        overflow-y:scroll;
    }
</style>

<!--Ztree-->
<jsp:include page="../../public/ztreeStyle.jsp" />
<!--遮罩 start-->

<!--遮罩 end-->
<!-- 头部 -->
<!--------------- Content start ----------------->
<div class="content-wrapper">
    <!-- Main content -->
    <section class="container-fluid">
        <div class="row">
            <!----------------- Left node start ------------------>
            <!----- tree start ---->
            <div class="treeMenu roleTreeMenu fn-left ">
                <div class="zTreeDemoBackground left">
                    <ul id="treeDemo" class="ztree"></ul>
                </div>
            </div>
            <!----- tree end
            ----->
            <!----------------- Left node end ------------------>

            <!----------------- Rightnav start ------------------>

            <div class="nextTable roleNextTable col-lg-10 fn-right">
                <div class="rightNav-titl">
                    <h2 class="am-ft-12 am-ft-darkgray fn-left">详细信息</h2>
                    <p class="titlline"></p>
                </div>
                <div class="table-responsive PrivTable">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th width="40%" align="center" bgcolor="#CCCCCC" valign="middle"
                                scope="row">角色名称</th>
                            <td width="60%" align="left" valign="middle" id="roleName"></th>
                        </tr>
                        <tr>
                            <th width="40%" align="center" bgcolor="#CCCCCC" valign="middle"
                                scope="row">角色描述</th>
                            <td id="roleDesc"></td>
                            <div class="fn-clear"></div>
                        </tr>
                        <tr>
                            <td style="border:none;">&nbsp;</td>
                            <td style="border:none;">&nbsp;</td>
                        </tr>
                        <tr>
                            <!-- 					<th width="40%" align="center" valign="middle" bgcolor="#CCCCCC"
                                    scope="row">组键名称</th>
                                <td width="60%" align="left" valign="middle">组键路径</td> -->
                            <th scope="col">组键名称</th>


                            <th scope="col">组键路径</th>
                        </tr>

                        <tr>
                            <!-- id="roletr" -->
                            <td id="privName">
                                <!-- {{item.privName}} -->
                            </td>
                            <td id="url">
                                <!-- {{item.url}} -->
                            </td>
                        </tr>

                        <tr class="partTr" id="tr">
                            <td colspan="3">
                                <button type="button" class="btn btn-primary fn-left"  onclick="open_dialog(this);" >修改</button>
                                <button type="button" class="btn fn-left btn-danger" onclick="open_dialog(this);" id="delete">删除</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
        <!----------------- Rightnav end ------------------>

        <div class="fn-clear"></div>

    </section>
</div>

<!--------------------- Right content end  ------------------------->


<!------------------右键菜单 start--------------------->
<div id="rMenu">
    <ul>
        <li id="m_add" onclick="open_dialog(this);">新增角色</li>
        <li id="m_del" onclick="open_dialog(this);">删除角色</li>
        <li id="m_check" onclick="open_dialog(this);">修改角色</li>

    </ul>
</div>
<!------------------右键菜单 end--------------------->
<!------------------Dialog start--------------------->

<style>
    #userdialog{
        height:350px;
        overflow-y: scroll;
    }
</style>
<form action="" id="myform" method="post">
    <div class="am-dialog addColordialog" id="userdialog">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">角色修改</h3>
            </div>
            <div class="am-input needValInfo">
                <label class="fn-left">角色名称：</label>
                <input class="fn-left" type="text" name="roleName" value="" placeholder="" />
                <div class="fn-clear"></div>
            </div>

            <div class="am-input needValInfo">
                <label class="fn-left">角色描述：</label>
                <input class="fn-left" type="text" name="roleDesc" value="" placeholder="" />
                <div class="fn-clear"></div>
            </div>

            <div class="am-input needValInfo">
                <label class="fn-left">权限选择：</label>
                <!--下拉选择 头  -->

                <div class="col-md-8 example-anoth" role="main">
                    <section>

                        <div class="s2-example">

                            <select class="js-example-programmatic-multi js-states form-control select_2" multiple="multiple" name="privlist">
                                <optgroup label="权限列表">
                                    <option ng-repeat="xx in x" value="{{xx.privId}}">
                                        {{xx.privName}}
                                    </option>
                                </optgroup>
                            </select>

                            <div class="btn-group btn-group-sm" role="group" aria-label="Programmatic setting and clearing Select2 options">
                                <button type="button" class="select_all btn btn-default">
                                    全选
                                </button>
                            </div>

                            <div class="btn-group btn-group-sm" role="group" aria-label="Programmatic setting and clearing Select2 options">
                                <button type="button" class="js-programmatic-multi-clear btn btn-default">重置</button>
                            </div>
                        </div>

                    </section>

                </div>

            </div>
            <!-- 下拉选择  尾 -->

            <div class="dialogBtn am-flexbox" id="dialog">
                <button type="button" class="am-flexbox-item btn am-button alterOv" id="msave" am-bg="blue" onclick="javascript:save(this)">
                    确认
                </button>
                <button type="button" class="am-flexbox-item btn am-button"
                        id="closeDialog" am-bg="white">取消</button>
                <input type="reset" name="reset" style="display: none;" />
                <div class="fn-clear"></div>
            </div>
        </div>

        <input class="fn-left" type="hide" name="roleId" value="" placeholder="xxxx" id="roleId" style="display: none" />

    </div>
</form>
</div>
<!---------------------Dialog end-------------------->

<!-----------右键菜单 head---------- -->
<script>
    //	验证
    $(function(){
        var formArray=[];
         formArray.push('{"myform":"/role/addRole"}');
         formArray.push('{"myform":"/role/updateRole"}');
        initValidate(formArray,pos);
    })


    function removeRole(Object) {
        var zNode = zTree.getSelectedNodes()[0];

        $("#roleId").val("" + zNode.roleId);

        delete_dialog();
    }
    //	更新的时候数据绑定
    function updateRole(Object) {
        var zNode = zTree.getSelectedNodes()[0];
//		172行的显示内容，text="hide"
        open_dialog(Object)
        $("#roleId").val("" + zNode.roleId);
        $("input[name=roleDesc]").val(
                zNode.roleDesc);
        $("input[name=roleName]").val(
                zNode.roleName);
    }




    //用户新增、修改表单提交
    
 
    function save(obj) {
  
		if(validateForm("myform","msg")==true){
							  var msg = obj.innerHTML

        var url
        var msg1
        if (msg == '新增') {
            url = cas + "role/addRole";
            msg1 = "新增成功"
        }
        if (msg == '新增角色') {
            url = cas + "role/addRole";
            msg1 = "新增成功"
        }
        if (msg == '修改') {
            var id = $("#orgId").val();
            url = cas + "role/updateRole";
            msg1 = "修改成功"
        }
        if (msg == '修改角色') {
            var id = $("#orgId").val();
            url = cas + "role/updateRole";
            msg1 = "修改成功"
        }
        //表单转对象
        var data = $("#myform").serializeJson();
        var  myData=JSON.parse(data);
        var data_privlist=myData['privlist'];
//		<!-----xuelai修改过的代码---->
        <%--<!--//当权限选择只有一个的时候，privlist为一个字符串，当只有当这个为数组的时候才会正常写入数据库-->--%>
    if((typeof data_privlist)=='string'){
        var privlistArr=[];
        privlistArr1=privlistArr.push(data_privlist);

        myData['privlist']= privlistArr;
        data1=JSON.stringify(myData);

    }else{
        data1=data;
    }
    console.log(data1)

        <%--<!--//		传过去的数据是{"roleName":"王五","roleDesc":"店长","privlist":"5","roleId":"3"}
    然后传过来的数据是-->--%>
    $.ajax({
        async: false,
        type: "post",
        url: url,
        data: {
        jsonObject: getJsonObject(data1),
        keyParams: getKeyParams(
        data1, keyParams)

    },
        success: function(data) {
//					{"msg":"增加成功","code":"1"}
        var url = cas + "role/roles";
        var objs = "roles";
        zTreeInit(url, objs);
        alertmsg(msg1);

        var roleId = eval('(' + data1 + ')').roleId;
//					传过来权限的名字ID   privlist
        var privlist=eval('(' + data1 + ')').privlist;

        //加载树节点，选中状态不变
        setTimeout(
        "initZtreeSelect('roleId','" + roleId + "')", 100);
    },
        error: function(e) {
        <!--console.log(e);-->
        alertmsg(e);
    }
    });
					        }else{
	        	alertmsg(validateForm("myform","msg"),'error');
        	}
        
    }
    //	保存函数结束
    $(function() {

        $("#deletTrue")
                .click(
                        function() {
                            var data1 = $("#myform")
                                    .serializeJson();
                            $.ajax({
                                async: false,
                                type: "post",
                                url: cas + "role/delectRole",
                                data: {
                                    jsonObject: getJsonObject(data1),
                                    keyParams: getKeyParams(
                                            data1,
                                            keyParams)

                                },
                                success: function(
                                        data) {
                                    //showmsgbox(4);
                                    var url = cas + "role/roles";
                                    var objs = "roles";
                                    zTreeInit(
                                            url,
                                            objs);
                                    alertmsg("删除成功");
                                },
                                error: function(e) {
                                    console.log(e);
                                }
                            });
                        })
    })

    <!--动态加载树  start-->

    var setting = {
        view: {
            dblClickExpand: true
        },
        check: {
            enable: false
        },
        data: { // 必须使用data
            simpleData: {
                enable: true,
                idKey: "roleId", // id编号命名
                pIdKey: "pRoleId" // 父id编号命名
            },
            key: {
                name: "roleName"
            }
        },
        callback: {
            onRightClick: OnRightClick,
            onClick: OnClick
        }

    };
    var org;

    function OnClick(event, treeId, treeNode,
                     clickFlag) {
        var url = cas + "role/privList";
        var data1 = "{\"roleId\":\"" + treeNode.roleId + "\"}";
        $.post(url,
                {
                    jsonObject: getJsonObject(data1),
                    keyParams: getKeyParams(
                            data1,
                            keyParams)
                },
                function(data) {
                    $("input[type=reset]")
                            .trigger("click");
                    var privData=JSON.parse(data);
                    var privName1=privData.data.privs
                    for(var j=0;j<privData.data.privs.length;j++){
                        $(".select_2").find("option[value="+privName1[j].privId+"]").prop("selected",true).change();
                    }
                    var privs = eval("(" + data + ")").data["privs"];
                    var role = eval("(" + data + ")").data["role"][0];
                    for (var key in role) {
                        $("#" + key).html(
                                role[key]);
                    }
                    $("tr[class=sc]")
                            .remove();
                    $("#roleId")
                            .val(
                                    "" + treeNode.roleId);

                    for (var i = 0; i < privs.length; i++) {
                        var priv = privs[i];
                        var tr = 0;
                        tr = "<tr class='sc'><td>" + priv.privName + "</td><td>" + priv.url + "</td></tr>"
                        $("#tr").before(tr);
//						console.log($("#tr"))
//						这个是权限名字，要使用这个东西

                        var json = eval('(' + data + ')');
                    }

                    for (var key in privs) {
                        $("#" + key).html(
                                privs[key]);
                    }

                })
    }

    $(document).ready(function() {
        var url = cas + "role/roles";
        zTreeInit(url, "roles");
    });

    <!--动态加载树  end-->

    //	打开新增修改模态层绑定删除，修改，增加时间   最新修改代码

    function open_dialog(obj) {
        var msg = obj.innerHTML;
        if (msg == "新增角色") {
            $('#userdialog').fadeIn();
            $('.maskBg').fadeIn();
            $('#msave').html(obj.innerHTML);
            $(".am-ft-center").html(msg);
            $(".select_2").find("option").prop("selected",false).change();
        }
        if (msg == "删除角色") {
            var nodes = zTree.getSelectedNodes();
            if (nodes && nodes.length > 0) {
                delete_dialog();

            } else {
                alertmsg("请选择树节点");
            }
        }
        if (msg == "删除") {
            var nodes = zTree.getSelectedNodes();
            if (nodes && nodes.length > 0) {
                delete_dialog();
            } else {
                alertmsg("请选择树节点");
            }
        }

        if (msg == "修改角色") {
            var zNode = zTree.getSelectedNodes()[0];
            //		172行的显示内容，text="hide"
            $("#roleId").val("" + zNode.roleId);
            $("input[name=roleDesc]").val(
                    zNode.roleDesc);
            $("input[name=roleName]").val(zNode.roleName);
            $('#userdialog').fadeIn();
            $('.maskBg').fadeIn();
            $('#msave').html(obj.innerHTML);
        }
        if (msg == "修改") {
            var nodes = zTree.getSelectedNodes();
            if (nodes && nodes.length > 0) {
                var zNode = zTree.getSelectedNodes()[0];
                //		172行的显示内容，text="hide"
                $("#roleId").val("" + zNode.roleId);
                $("input[name=roleDesc]").val(
                        zNode.roleDesc);
                $("input[name=roleName]").val(zNode.roleName);
                $('#userdialog').fadeIn();
                $('.maskBg').fadeIn();
                $('#msave').html(obj.innerHTML);
//			点击X可以删除默认的标签
                $('#msave').html(obj.innerHTML);
            } else {
                alertmsg("请选择树节点");
            }

        }


    }

    //添加颜色/修改弹窗
    jQuery.fn.center = function() {
        this.css({
            "position": "fixed",
            "top": 50 + "%",
            "marginTop": ("-" + this.height() / 2) + "px",
            "left": ($(window).width() - this
                    .width()) / 2 + $(window).scrollLeft() + "px"
        });
        return this;
    };
    $(".addColordialog").center();

    $('.alterBtn').click(function() {
        $('.maskBg,.addColordialog').fadeIn();
    });
    $('.alterOv,#closeDialog').click(function() {
        $('.maskBg,.addColordialog').fadeOut();
    });

</script> <!------------------Dialog 确定取消 start---------------------> <!-- 删除模态层 -->
<style>
    #deldialog{
        height:150px;
        overflow: hidden;
    }
</style>
<div class="am-dialog addColordialog" id="deldialog">
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">是否删除</h3>
        </div>
        <div class="dialogBtn am-flexbox">
            <button type="button" class="am-flexbox-item btn am-button alterOv" am-bg="blue" id="deletTrue">确定</button>
            <button type="button" class="am-flexbox-item btn am-button" id="closeDialog" am-bg="white">取消</button>
            <input type="reset" name="reset" style="display: none;" />
            <div class="fn-clear"></div>
        </div>
    </div>
</div>
<!------------------Dialog 确定取消 end----------------------->
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />



