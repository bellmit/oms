    var loadformByNode = function(obj){		
        $.each(obj, function(key, value) {
			$("#"+key).html(value);
		})
	}
	

	var loadform1 = function(formContent,url,obj){
		var data1=formContent;
		$.ajax({
        async: true,
        type : "post",
        url : url,
        data:{jsonObject:data1},
        success : function(data) {
        	 var json = eval('(' + data + ')'); 
        	 var anObject = json.data[obj][0];
        	 	for(var key in anObject){
        	 		$("input[name="+key+"]").val(anObject[key]);
        	 	}
				//$.each(anObject,function(name,value) {
				//$("input[name="+name+"]").val(value);
			},
        error: function(data){
        	alert(data);
        }
    });
	}
	
	var loadform = function(formContent,url){
		var data1=formContent;
		$.ajax({
        async: false,
        type : "post",
        url : url,
        data:{jsonObject:data1},
        success : function(data) {
        	 var json = eval('(' + data + ')'); 
        	 var anObject = json.data.content;//对json数组each
				$.each(anObject,function(name,value) {
				$("input[name="+name+"]").val(value);
				if($(this).attr("type") == "checkbox"){
					if(name == $(this).attr("name")){
						if(name == "Y"){
							$(this).attr("checked","checked");
						}else{
							$(this).attr("checked","checked");
						}
					}
				}
			});
        },
        error: function(data){
        	alert(data);
        }
    });
	}


