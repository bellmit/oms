<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- 主要 -->
<body class="skin-blue sidebar-mini">
<div class="wrapper" style="position: inherit;">
    
	

    <!--------------- Content start ----------------->
    <div class="content-wrapper">

        <!-- Main content -->
        <section class="container-fluid">
            <div class="row">

        <!-- content info start -->
        <div class="table-responsive orderTable">
        <form id="ruleform" method="post">
            <table class="table table-hover table-striped table-bordered" id="ruletable">
                <tr>
					<th width="8%" scope="col">选择</th>
					<th scope="col">规则名称</th>
					<th scope="col">规则说明</th>
				</tr>	                
                <tr>
                    <td colspan="3">
                        <button type="button"  class="btn btn-primary saveButton" onclick="save()">保存</button>
                    </td>
                </tr>
            </table>
        </form>
        </div>
        
        <script type="text/javascript">
        	
			$(function(){
				loadRule();
				isSelected();
			})
						
			function loadRule(){
				var tr=$("#ruletable tr").first();			
				var html=[];
				var url=pos+"stockrule/getstockRule";				
				$.ajax({
					async:false,
					type:"post",
					url:url,
					data : {jsonObject : "{orgId:1}"},
					success : function(data) {
						var stockRule = eval("(" + data + ")").data["stockRules"];
						$.each(stockRule,function(i,n){
						html.push("<tr>");
						if(stockRule[i].isSelected=="1"){
							html.push("<td><input type='checkbox' name='stockRuleid' checked='checked' value='"+stockRule[i].stockRuleid+"' /></td>");
						}else{
							html.push("<td><input type='checkbox' name='stockRuleid' value='"+stockRule[i].stockRuleid+"' /></td>");
						}						
						html.push("<td><p>"+stockRule[i].ruleName+"</p></td>");
						html.push("<td><div data-toggle='tooltip' data-placement='top' title='"+stockRule[i].ruleMemo+"'>"+stockRule[i].ruleMemo+"</div></td>");
						html.push("</tr>");				
					})
					$(tr).after(html.join(""));	
					}
			  	});				
			}
			
			function isSelected(){
				var checkboxs=$("input[name=stockRuleid]");
				checkboxs.click(function(){
                	var flag=$(this).prop("checked");
                	checkboxs.prop("checked",false);
                	if(flag){
                		$(this).prop("checked",true);        		
                	}else{
                		$(this).prop("checked",false);
                	}
            	});
			}
			
			function save(){
				var data1 = $("#ruleform").serializeJson();
				var url=pos+"stockrule/updateSelected";
				$.post(url,{jsonObject:data1},function(data){
					var json = $.parseJSON(data);
					alertmsg(json.msg);
				});
			}
		</script>
        <!-- content info end -->

        <!-------right content end--------->

        <div class="fn-clear"></div>
    </div>
        </section>
    </div>
    <!--------------- Content start ----------------->
</div>

</body>
</html>
