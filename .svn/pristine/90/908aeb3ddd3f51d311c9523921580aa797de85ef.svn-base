/*! 
 * QinYi Base.js
 * @Author yao
 */

//序列化表单
(function($){  
    $.fn.serializeJson=function(){ 
        var serializeObj={};  
        var array=this.serializeArray();  
        var str=this.serialize();  
        $(array).each(function(){  
            if(serializeObj[this.name]){  
                if($.isArray(serializeObj[this.name])){  
                    serializeObj[this.name].push(this.value);  
                }else{  
                    serializeObj[this.name]=[serializeObj[this.name],this.value];  
                }  
            }else{  
                serializeObj[this.name]=this.value;   
            }  
        });  
        return JSON.stringify(serializeObj);  
    };  
})(jQuery);

//超链接传值
function getUrlParam(name){
	 	var url = location.href; 
		//var url=document.referrer;
        var pattern = new RegExp("[?&]" + name +"\=([^&]+)","g");
        var matcher = pattern.exec(url);
        var items = null;
        if(matcher != null){
            try{
                items = decodeURIComponent(decodeURIComponent(matcher[1]));   
            }catch(e){
                try{
                    items = decodeURIComponent(matcher[1]);
                }catch(e){
                    items = matcher[1];
                }
            }
        }
        return items;
    }

//设置Cookie
function setCookie(name,value)
{
    var Days = 5; //此 cookie 将被保存 5 天
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//获取Cookie
function getCookie(name)
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}
//删除Cookie
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

//判断数组与对象
function isArrayorObject(pro) {
    if (pro instanceof Object || pro instanceof Array) {
        return true;
    } else {
        return false;
    }
}


//json元素按字母顺序排序，排除数组与对象元素
function ObjectProcess(original) {
    var temp = {}
    for (var p in original) {
        if (!isArrayorObject(original[p])) {
            temp[p] = original[p];
        }
    }
    var keys = Object.keys(temp).sort();
    var nar = new Array();
    for (var key in keys) {
        nar.push('"' + keys[key] + '":"' + temp[keys[key]] + '"');
    }
    return ('{' + nar.join() + '}')        
}

//获取keyParams
function getKeyParams(jsonObject,keyParams){
	//json 按字母排序
	var jsonSort=ObjectProcess(JSON.parse(jsonObject));
	var paramSort=ObjectProcess(JSON.parse(keyParams));	
	//json encode编码
	var jsonEncode=encodeURIComponent(jsonSort);
	var paramEncode=encodeURIComponent(paramSort);		
	//json md5加密
	var md5=$.md5(jsonEncode+"["+paramEncode+"]");
	
	var param=JSON.parse(paramSort);
	param.md5=md5;
	return encodeURIComponent(ObjectProcess(param));
}

//获取jsonObject
function getJsonObject(jsonObject){
	//var jsonSort=ObjectProcess(JSON.parse(jsonObject));
	return encodeURIComponent(jsonObject);
}

//分页创建
function createPagePlugin(total,pageSize){
	paging = pagePlugin.createPaging({
	    renderTo : 'paging',
	    total:total,
	    pageSize:pageSize
	});
	paging.goPage = function(from ,to){
    	tbhtml="";
    	page(from,to);
        fromRecord=from;
        toRecord=to;
	}	    	
};

//获取系统当前时间
function getNowDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}
 

