qyApp.controller("categoryMgtController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.sortList=[
	{"sortId":"130906331","sortName":"服装","attrArr":"货号;品牌;年份;季节","itemList":"颜色;尺码;"},
	{"sortId":"130906332","sortName":"食品","attrArr":"品牌;生产厂家;净重;生产日期;保质期;食品添加剂;适用年龄;产地","itemList":""},
	{"sortId":"130906333","sortName":"玩具","attrArr":"货号;品牌;材质;尺;适用年龄","itemList":""},
	{"sortId":"130906334","sortName":"美妆","attrArr":"货号;品牌;产地;功效;适合肤质;适用年龄","itemList":""}];
	var i=1;
	function getProductSpec(sortId){
		var jsonSortPid = JSON.stringify({
			"sortId": sortId
		});
		$http({
			method: 'post',
			url: pos + 'product/getProductSpec',
			params: {
				keyParams: getKeyParams(jsonSortPid, keyParams),
				jsonObject: getJsonObject(jsonSortPid)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.sortList[i].productSpecGroup = data.data.productSpecGroup;
				var itemList="";
				for(var j=0;j<$scope.sortList[i].productSpecGroup.length;j++){
					if(itemList==""){
						itemList=$scope.sortList[i].productSpecGroup[j].specGroupName;
					}else{
						itemList=itemList+";"+$scope.sortList[i].productSpecGroup[j].specGroupName;
					}
				}
				$scope.sortList[i].itemList=itemList;
				i++;
				if(i<$scope.sortList.length){
					getProductSpec($scope.sortList[i].sortId);
				}	
			} else {
				alertmsg('获取大品类失败', "error");
			}
		});
	}
	
	function getColorAndSize(sortId){
		var json=JSON.stringify({"proModelid":"","sortId":sortId,"nub":"0","size":"0"});
		$http({
			method: 'post',
			url: pos + 'product/getColorAndSize',
			params: {
				keyParams: getKeyParams(json, keyParams),
				jsonObject: getJsonObject(json)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.sortList[0].colorList=data.data.colorInfo.colorList;
				$scope.sortList[0].sizeList=data.data.sizeInfo.sizeList;
				$scope.sortList[0].groupId=data.data.sizeInfo.groupId;
			} else {
				alertmsg('获取服装规格失败', "error");
			}
		});
	}
	getColorAndSize($scope.sortList[0].sortId);
	getProductSpec($scope.sortList[i].sortId);
	
	$scope.editSort=function(obj){
		var sourceArr = [{
			level: 0,
			name: "categoryMgt"
		}];
		var params={
			"source": sourceArr,
			"type": "1",
			"sortInfo":obj.sortInfo
		};
		$state.go("editCategory", {
			uiParams: params
		});
	}



});