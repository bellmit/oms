qyApp.controller("classifyListController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$scope.model={
		'addClassify':'0'
	}
	/*初始化参数*/
	/*增加一个属性区分状态  1编辑状态  0不可编辑*/
	angular.forEach($scope.list,function(e){
		e.status='0';
	})
	/*编辑分类商品*/
	$scope.setClassifyPro=function(obj){
		var sourceArr = [{
			level: 0,
			name: "classifyList"
		}];
		var params={
			"source": sourceArr,
			"type": "1",
			"modelGroup":obj.modelGroup,
		};
		$state.go("addClassifyPro", {
			uiParams: params
		});
	}
	/*添加分类*/
	$scope.addFlag=false;
	$scope.addClassifyPro=function(){
		if($scope.addFlag){
			alertmsg("请先处理上一条数据", "error");
			return;
		}
		$scope.addFlag=true;
		$scope.addModelGroupObj={
			"orgId":shopOrgId,
			"groupName":"",
			"groupIndex":$scope.modelGroupList.length
		}
	}
	//取消
	$scope.closeDia=function(){
		$scope.addFlag=false;
		$scope.addModelGroupObj={};
		$scope.editModelGroupObj={};
	}
	//编辑
	$scope.editModelGroup=function(index){
		if($scope.addFlag){
			alertmsg("请先处理上一条数据", "error");
			return;
		}
		$scope.modelGroupList[index].edit="1";
		$scope.editModelGroupObj=$scope.modelGroupList[index];
	}
	//取消编辑
	$scope.cancelEdit=function(index){
		if($scope.addFlag){
			alertmsg("请先处理上一条数据", "error");
			return;
		}
		$scope.closeDia();
		$scope.modelGroupList[index].edit=undefined;
	}
	//添加图片
	$scope.uploadWork=function(files,obj){
		if(files){
			var fileUrl = JSON.parse(keyParams).orgId + "/work/"
			jsonObject = "{\"fileUrl\":\"" + fileUrl + "\"}";
			if(files && files.length) {
				$scope.files = files;
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						//服务端接收
						url: pos + 'imageUpload/addShopImage',
						//上传的同时带的参数
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						//上传成功
						console.log(data);
						if(data.code == "1") {
								$scope.imageName=data.data.imageName;
								$scope.groupLogo=data.data.imagesPath;
								var changedArr=[];
								var changedArrObj={};
								changedArrObj.groupIndex=obj.groupIndex;
								changedArrObj.groupName=obj.groupName;
								changedArrObj.modelGroupId=obj.modelGroupId;
								changedArrObj.groupLogo=$scope.groupLogo;
								changedArr.push(changedArrObj);
								var json={
									"modelGroupArr":changedArr
								}
								$scope.updateModelGroup(json);
								$scope.getModelGroup();
						} else {
							alertmsg("上传Work失败", "error");
						}
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}
			}
		}
		
	}
	//删除分类图片
	$scope.deletePic=function(obj){
		var changedArr=[];
		var changedArrObj={};
		changedArrObj.groupIndex=obj.groupIndex;
		changedArrObj.groupName=obj.groupName;
		changedArrObj.modelGroupId=obj.modelGroupId;
		changedArrObj.groupLogo='';
		changedArr.push(changedArrObj);
		var json={
			"modelGroupArr":changedArr
		}
		$scope.updateModelGroup(json);
		$scope.getModelGroup();
	}
	/*位置移动*/
	$scope.uptodown=function(type,index){
		if($scope.addFlag){
			alertmsg("请先保存", "error");
			return;
		}
		var lang=$scope.modelGroupList.length;
		var changedArr=[];
		if(type=='1'&&index>0){
			$scope.modelGroupList[index].groupIndex="0";
			changedArr.push($scope.modelGroupList[index]);
			for(var i=0;i<index;i++){
				$scope.modelGroupList[i].groupIndex=Number($scope.modelGroupList[i].groupIndex)+1;
				changedArr.push($scope.modelGroupList[i]);
			}
		}else if(type=='2'&&index>0){
			$scope.modelGroupList[index].groupIndex=Number($scope.modelGroupList[index].groupIndex)-1;
			$scope.modelGroupList[index-1].groupIndex=Number($scope.modelGroupList[index-1].groupIndex)+1;
			changedArr.push($scope.modelGroupList[index]);
			changedArr.push($scope.modelGroupList[index-1]);
		}else if(type=='3'&&index<lang-1){
			$scope.modelGroupList[index].groupIndex=Number($scope.modelGroupList[index].groupIndex)+1;
			$scope.modelGroupList[index+1].groupIndex=Number($scope.modelGroupList[index+1].groupIndex)-1;
			changedArr.push($scope.modelGroupList[index]);
			changedArr.push($scope.modelGroupList[index+1]);
		}else if(type=='4'&&index<lang-1){
			$scope.modelGroupList[index].groupIndex=lang-1;
			changedArr.push($scope.modelGroupList[index]);
			for(var i=index+1;i<lang;i++){
				$scope.modelGroupList[i].groupIndex=Number($scope.modelGroupList[i].groupIndex)-1;
				changedArr.push($scope.modelGroupList[i]);
			}
		}
		if(changedArr.length>0){
			var json={
				"modelGroupArr":changedArr
			}
			$scope.updateModelGroup(json);
		}
		
	}
	
	
	$scope.saveUpdate=function(){
		var arr=[];
		arr.push($scope.editModelGroupObj);
		var json={
			"modelGroupArr":arr
		}
		$scope.updateModelGroup(json);
	}
	
	//
	$scope.sortGroupIndex=function(modelGroup){
	     return Number(modelGroup.groupIndex);
	}
	
	var shopOrgId="11713";//
	/**
	 * getModelGroup:获取分类规格组
	 * addModelGroup:添加分类规格组
	 * updateModelGroup:更新分组规格
	 */
	$scope.getModelGroup =function(){
		var jsonObject={
			"pOrgId":keyParams.orgId,
			"orgId":shopOrgId
		}
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'modelGroup/getModelGroup',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.modelGroupList){
					$scope.modelGroupList = data.data.modelGroupList;
					console.log($scope.modelGroupList);
					$scope.count=data.data.count;
				}else{
					$scope.modelGroupList=[];
					$scope.count="0";
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.addModelGroup =function(){
		var jsonObject=JSON.stringify($scope.addModelGroupObj);
		$http({
			method: 'post',
			url: pos + 'modelGroup/addModelGroup',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				//刷新数据
				$scope.closeDia();
				$scope.getModelGroup();
			} else {
				alertmsg("添加失败", "error")
			}
		});
	}
	
	$scope.updateModelGroup =function(jsonObject){
		var jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'modelGroup/updateModelGroup',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				//刷新数据
				$scope.closeDia();
				$scope.getModelGroup();
			} else {
				alertmsg("添加失败", "error")
			}
		});
	}
	
	$scope.deleteModelGroup =function(index){
		var jsonObject=JSON.stringify($scope.modelGroupList[index]);
		$http({
			method: 'post',
			url: pos + 'modelGroup/deleteModelGroup',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				//刷新数据
				var changedArr=[];
				if(index<$scope.modelGroupList.length-1){
					for(var i=index+1;i<$scope.modelGroupList.length;i++){
						$scope.modelGroupList[i].groupIndex=Number($scope.modelGroupList[i].groupIndex)-1;
						changedArr.push($scope.modelGroupList[i]);
					}
				}
				if(changedArr.length>0){
					var json={
						"modelGroupArr":changedArr
					}
					$scope.updateModelGroup(json);
				}else{
					$scope.getModelGroup();
				}
				$scope.closeDia();
			} else {
				alertmsg("添加失败", "error")
			}
		});
	}
	
	load=function(){
		$scope.getModelGroup();
	}
	
	load();
})
