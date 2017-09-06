/*! 
 * QinYi Validate.js
 * @Author yao
 */

//加载验证规则数据
function getValidate(formArray,pro){
    var json="";
    var jsonObject=JSON.stringify(formArray);   
	jsonObject ="{\"array\":"+jsonObject+"}";
	$.ajax({
		async : false,
		type : "post",
		url : pro+"base/getValidateRules",
		data : {
			keyParams:getKeyParams(jsonObject,keyParams),
			jsonObject:getJsonObject(jsonObject)
		},
		success : function(data) {
			json=JSON.parse(data).data.validate;
		}
	});
	return json;
}

//初始化验证规则
function initValidate(formArray,pro,vtype){   			
	var json=getValidate(formArray,pro);
		
	for(var k in json){
		var j=json[k];
		for(var id in j){
			var n=JSON.parse(j[id]);
			for(var key in n){
				var validateType="";
				var tmp=n[key];
				for (var i =0;i<tmp.length;i++){					
					var msg="";
					for(var k in tmp[i]){
						if(k=="msg"){
							msg="!"+tmp[i][k];
							continue;
						}										
						if(validateType==""){												
	  						validateType=k+":"+tmp[i][k]+msg;
	  					}else{  						
	  						validateType=validateType+";"+k+":"+tmp[i][k]+msg;
	  					}
					}		
				}
				$("#"+id+" [name='"+key+"']").attr("validateType",validateType);
				if(vtype=='blur'){
					$("#"+id+" [name='"+key+"']").blur(function(){
						validate(this);
					});
				}
			}			
		}		
	}		
}

//验证表单规则
function validate(v){
	var flag=true;
	var value=$(v).val();
	var validateType=$(v).attr("validateType");
	var typeArray=validateType.split(";");
	var datatype=$(v).attr("datatype");
	if(datatype!="*"){
		$.each(typeArray,function(i,n){
			var arr=n.split("!");   			
			var validate=arr[0].split(":");
			var msg=arr[1];
			if(validate[0]=="require"){
				if($(v).attr("type")=="text"&&value==null||value==""){
					if($(v).parent().hasClass('needValInfo')){
						$(v).parent().next('.errowTip').remove();
						$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}else{
						$(v).next('.errowTip').remove();
						$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}
					flag=false;
					return false;
				}
				if($(v).attr("type")=="radio"){
					var name=$(v).attr("name");						
					$.each($("input[name="+name+"]"),function(r,d){							
						if($(d).prop("checked")){
							flag=true;
							return false;
						}else{
							flag=false;
						}
					})
					return false;
				}
			}
			if(validate[0]=="regex"){
				var reg = validate[1];
				if(value.match(reg)==null){
					if($(v).parent().hasClass('needValInfo')){
						$(v).parent().next('.errowTip').remove();
						$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}else{
						$(v).next('.errowTip').remove();
						$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}
					flag=false;
					return false;
				}
			}
			if(validate[0]=="enum"){
				var num=validate[1];
				var arr=num.split(",");
				if(arr.indexOf(value)==-1){
					if($(v).parent().hasClass('needValInfo')){
						$(v).parent().next('.errowTip').remove();
						$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}else{
						$(v).next('.errowTip').remove();
						$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}
					flag=false;
					return false;
				}
			}
			if(validate[0]=="length"){
				var length=validate[1];
				if(value.length!=parseInt(length)){
					if($(v).parent().hasClass('needValInfo')){
						$(v).parent().next('.errowTip').remove();
						$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}else{
						$(v).next('.errowTip').remove();
						$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}
					flag=false;
					return false;
				}
			}
			if(validate[0]=="integer"){
				var reg ="^-?\\d+$";
				if(value.match(reg)==null){
					if($(v).parent().hasClass('needValInfo')){
						$(v).parent().next('.errowTip').remove();
						$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}else{
						$(v).next('.errowTip').remove();
						$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}
					flag=false;
					return false;
				}
			}
			if(validate[0]=="range"){
				var num =validate[1].split(",");
				if(value<num[0]||value>num[1]){
					if($(v).parent().hasClass('needValInfo')){
						$(v).parent().next('.errowTip').remove();
						$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}else{
						$(v).next('.errowTip').remove();
						$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
					}
					flag=false;
					return false;
					}
				}
			})
	}	
		if(flag==true){
			if($(v).attr("type")=="text"){
				if($(v).parent().hasClass('needValInfo')){
					$(v).parent().next('.errowTip').remove();
				}else{
					$(v).next('.errowTip').remove();
				}
			}
			if($(v).attr("type")=="radio"){
				var name=$(v).attr("name");						
				
				if($(v).parent().hasClass('needValInfo')){
					$("input[name="+name+"]").parent().next('.errowTip').remove();
				}else{
					$("input[name="+name+"]").next('.errowTip').remove();
				}
			}			
		}
}

//批量验证表单规则
function validateForm(id,info){
	var array=$("#"+id+" [validateType]");
	var flag=true;
	var validateInfo=[];
	$('.errowTip').remove();
	$.each(array,function(k,v){		
		var value=$(v).val();
		var validateType=$(v).attr("validateType");
		var typeArray=validateType.split(";");
		var datatype=$(v).attr("datatype");
		if(datatype!="*"){
			$.each(typeArray,function(i,n){
				var arr=n.split("!");   			
				var validate=arr[0].split(":");
				var msg=arr[1];
				if(validate[0]=="require"){
					if($(v).attr("type")=="text"&&value==null||value==""){
						if(info=="msg"){
							validateInfo.push(msg);
						}else{
							if($(v).parent().hasClass('needValInfo')){
								$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}else{
								$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}
						}
						flag=false;
						return false;
					}
					if($(v).attr("type")=="radio"){
						var name=$(v).attr("name");						
						$.each($("input[name="+name+"]"),function(r,d){							
							if($(d).prop("checked")){
								flag=true;
								return false;
							}else{
								flag=false;
							}
						})
						if(!flag){
							if(info=="msg"){
								if(validateInfo.indexOf(msg)==-1){
									validateInfo.push(msg);
								}								
							}else{
								if($(v).parent().hasClass('needValInfo')){
									$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
								}else{
									$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
								}
							}
						}
						return false;
					}					
				}
				if(validate[0]=="regex"){
					var reg = validate[1];
					if(value.match(reg)==null){
						if(info=="msg"){
							validateInfo.push(msg);
						}else{
							if($(v).parent().hasClass('needValInfo')){
								$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}else{
								$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}
						}
						flag=false;
						return false;
					}
				}
				if(validate[0]=="enum"){
					var num=validate[1];
					var arr=num.split(",");
					if(arr.indexOf(value)==-1){
						if(info=="msg"){
							validateInfo.push(msg);
						}else{
							if($(v).parent().hasClass('needValInfo')){
								$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}else{
								$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}
						}
						flag=false;
						return false;
					}
				}
				if(validate[0]=="length"){
					var length=validate[1];
					if(value.length!=parseInt(length)){
						if(info=="msg"){
							validateInfo.push(msg);
						}else{
							if($(v).parent().hasClass('needValInfo')){
								$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}else{
								$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}
						}
						flag=false;
						return false;
					}
				}
				if(validate[0]=="integer"){
					var reg ="^-?\\d+$";
					if(value.match(reg)==null){
						if(info=="msg"){
							validateInfo.push(msg);
						}else{
							if($(v).parent().hasClass('needValInfo')){
								$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}else{
								$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}
						}
						flag=false;
						return false;
					}
				}
				if(validate[0]=="range"){
					var num =validate[1].split(",");
					if(value<num[0]||value>num[1]){
						if(info=="msg"){
							validateInfo.push(msg);
						}else{
							if($(v).parent().hasClass('needValInfo')){
								$(v).parent().after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}else{
								$(v).after('<small class="errowTip">&Cross;&nbsp;&nbsp;'+msg+'</small>');
							}
						}
						flag=false;
						return false;
	    				}
	    			}
	    		})
			}		
    	})
    	if(validateInfo.length>0){    		
    		return validateInfo.join(",");
    	}else{
    		return flag;
    	}    	
    }
