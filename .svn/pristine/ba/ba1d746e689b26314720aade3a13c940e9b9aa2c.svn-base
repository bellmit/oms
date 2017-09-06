qyApp.controller('memberEditController', ['$scope', '$http', '$compile', 'Upload',
    function ($scope, $http, $compile, Upload) {
		var memberInfo=eval('(' +localStorage.memberInfo+ ')');
		localStorage.memberInfo=undefined;
		var userInfo=eval('(' +localStorage.userInfo+ ')');
		var orgId="";
        $scope.member = {
            headpicpath: '',
            memberNo: '',
            memberId: '',
            name: '',
            sex: '',
            gradeId: '',
            telphone: '',
            province: '',
            city: '',
            district: '',
            address: '',
            birthday: '',
            salesId: '',
            brandId: '',
            orgId: '',
            discount: ''
        };
        $scope.grade;
    	$scope.provinceId="";
    	$scope.cityId="";
        function init(memberInfo,user){
        	$scope.member.province=memberInfo.province;
        	$scope.member.city=memberInfo.city;
        	$scope.member.district=memberInfo.district;
        	$scope.member.headpicpath = memberInfo.headpicpath;
	        $("#headpicpath").attr("src", $scope.member.headpicpath);
        	$scope.member.memberId=memberInfo.memberId;
        	$scope.member.memberNo=memberInfo.memberNo;
        	$scope.member.name=memberInfo.name;
        	$scope.member.sex=memberInfo.sex;
        	$scope.member.discount=memberInfo.discount;
        	$scope.member.telphone=memberInfo.telphone;
        	$scope.member.address=memberInfo.address;
        	$("#birthday").val(memberInfo.birthday);
        	$scope.member.salesId=memberInfo.salesId;
        	$scope.member.gradeId=memberInfo.gradeId;
        	$scope.member.orgId=memberInfo.orgId;
        	orgId=userInfo.orgId;
        }
        init(memberInfo,userInfo);
        //请求省文件
        $scope.initprovinces=function(){
	        	for(var i=0;i<$scope.provinces.length;i++){
		  			if($scope.provinces[i].name==$scope.member.province){
		  				$scope.provinceId=$scope.provinces[i].id;
		  			}
		  		}
        }
        $http.get('/oms/static/base/json/province.json').success(function(data)
    	{
    	  $scope.provinces = data;
    	  $scope.initprovinces();
    	})
    	//请求市文件
        $scope.initcitys=function(){
        	if(""!=$scope.provinceId){
	        	for(var i=0;i<$scope.citys[$scope.provinceId].length;i++){
	    			if($scope.citys[$scope.provinceId][i].name==$scope.member.city){
	    				$scope.cityId=$scope.citys[$scope.provinceId][i].id;
	    			}
	    		}
        	}
        }
    	$http.get('/oms/static/base/json/city.json').success(function(data)
    	{
    		$scope.citys = data;
    		$scope.initcitys();
    	})
        
    	//请求区文件
        $http.get('/oms/static/base/json/district.json').success(function(data)
    	{
        	$scope.districts = data;
    	})
      //导购员
        $scope.getGui=function(){
        	var jsonObject = "{\"orgId\":\""+orgId+"\"}";
            $http(
            {
                method: 'post',
                url: cas
                + 'user/findGuideByOrgId',
                params: {
                    keyParams: getKeyParams(
                    jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)
                }

            })
            .success(
            function(data, stauts, headers, 
            config) {
            	if(data.code=="1"){
            		$scope.guides = data.data.guideList;
            	}else{
            		alertmsg(data.msg,"error")
            	}
            })
        }
        $scope.getGui();
        //会员类型
        $scope.getMemberGrade = function() {
        	var jsonObject = "{\"orgId\":\""+orgId+"\"}";
            $http(
            {
                method: 'post',
                url: pos
                + 'membergrade/getMemberGrades',
                params: {
                    keyParams: getKeyParams(
                    jsonObject, keyParams),
                    jsonObject: getJsonObject(jsonObject)

                }

            })
            .success(
            function(data, stauts, headers, 
            config) {
            	if(data.code=="1"){
            		$scope.gradeTypes = data.data.memberGradeList;
                    $scope.initGradeType();
            	}else{
            		alertmsg(data.msg,"error")
            	}
            })
        }
        $scope.initGradeType=function(){
        	if(""!=$scope.member.gradeId&&undefined!=$scope.member.gradeId){
	        	for(var i=0;i<$scope.gradeTypes.length;i++){
	        		if($scope.gradeTypes[i].gradeId==$scope.member.gradeId){
	        			$scope.grade=$scope.gradeTypes[i];
	        		}
	        	}
        	}
        }
        $scope.getMemberGrade();
    	
    	$scope.uploadHeadpicPath = function(files) { 
		    if (files && files.length) {
	   	     $scope.files = files;
	   	     var imageUrl = "member/"+$scope.member.orgId+"/headpic/";
		     jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
	   	       for (var i = 0; i < files.length; i++) {		       
	   	         Upload.upload({
	   	           //服务端接收
	   	        	 url: pos+'imageUpload/addMemberImage',
	   	           //上传的同时带的参数
	   	             data:{ keyParams:getKeyParams(jsonObject,keyParams),
		            	 jsonObject:getJsonObject(jsonObject) } ,
	   	        	 file: files[i]
		   	       }).success(function (data, status, headers, config) {
			   	       if(data.code=="1"){
			   	    	 //上传成功
		   	             $scope.member.headpicpath = data.data.imagesPath;
		   	             $("#headpicpath").attr("src", $scope.member.headpicpath);
				   	   }else{
				   	       alertmsg(data.msg)
				   	   }
		   	       }).error(function (data, status, headers, config) {
		   	           //上传失败
		   	           console.log('error status: ' + status);
		   	       });		        		        
	   	       }
	   	       
	   	     }
	   	}
        //保存
        $scope.updateMember = function (obj) {
        	if(validateForm("memberForm","msg")==true){
	        	$scope.member.birthday=$("#birthday").val();
		    	if($scope.province!=undefined){
		    		$scope.member.province=$scope.province.name;
		    	}
		    	if($scope.city!=undefined){
		    		$scope.member.city= $scope.city.name;
		    	}
		    	if($scope.district!=undefined){
		    		$scope.member.district=$scope.district.name;
		    	}
		    	if($scope.grade!=undefined){
			    	$scope.member.gradeId=$scope.grade.gradeId.toString();;
			    	$scope.member.discount=$scope.grade.discount;
		    	}
		    	$scope.member.headpicpath = $('#headpicpath').attr('src');
	            var jsonObject = JSON.stringify($scope.member);
	            $http({
	                method: "post",
	                url: pos + "member/updateMember",
	                params: {
	                    keyParams: getKeyParams(
	                        jsonObject, keyParams),
	                    jsonObject: getJsonObject(jsonObject)
	                }
	            }).success(function (data, status, header, config) {
	            	if(data.code=="1"){
	            		alertmsg("修改成功");
		            	window.location.href='#/member';
	            	}else{
	            		alertmsg(data.msg,"error")
	            	}
	            })
	        }else{
	        	alertmsg(validateForm("memberForm","msg"),'error');
	        }
        }
    }
]);