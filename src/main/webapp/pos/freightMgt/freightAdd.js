qyApp.controller('freightAddController', function($state, $stateParams, $scope, $http, $compile,$timeout, Upload) {
	$scope.calType = "1";
	$scope.orgId = angular.fromJson(keyParams).orgId;
	$scope.shopProp = "2";
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.routeState.push({
			name: "freightAdd",
			level: "2"
		})
	}
	/*查询微店列表*/
	$scope.getWxStore = function() {
		var jsonObject = {
			shopProp: $scope.shopProp,
			orgId: $scope.orgId,
			nub: "0",
			size: "0"
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/getMerchantShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				angular.forEach(data.data.shopList, function(ele, index) {
					ele.createTime = ele.createTime.substr(0, ele.createTime.length - 2);
				})
				$scope.shopLists = data.data.shopList;
				if($scope.shopLists.length > 0) {
					$scope.shopListCount = $scope.shopLists[0].count;
				} else {
					$scope.shopListCount = "0";
				}
			} else {
				alertmsg("获取门店失败", "error");
			}
		});
	};
	$scope.getWxStore();
	/*选择模板所使用的微店*/
	$scope.chooseOrgIdArr = [];
	$scope.chooseOrgId = function(orgId) {
		var orgIdIndex = $scope.chooseOrgIdArr.indexOf(orgId);
		if(orgIdIndex == -1) {
			$scope.chooseOrgIdArr.push(orgId)
		} else {
			$scope.chooseOrgIdArr.splice(orgIdIndex, 1);
		}
		$scope.orgIdStr = "";
		angular.forEach($scope.chooseOrgIdArr, function(ele, index) {
			$scope.orgIdStr = $scope.orgIdStr + "," + ele;
		})
		$scope.orgIdStr = $scope.orgIdStr.substring(1);
	}
	$scope.details_default_count = {
		locationType: "0",
		baseAmount: "",
		basePrice: "",
		addAmount: "",
		addPrice: ""
	}
	$scope.details_default_weight = {
			locationType: "0",
			baseAmount: "",
			basePrice: "",
			addAmount: "",
			addPrice: ""
		}
		/*点击为指定城市设置运费按件数*/
	$scope.detail_countArr = [];
	$scope.addCity_count = function() {
			$scope.detail_countArr.push({
				locationType: "1",
				baseAmount: "",
				basePrice: "",
				addAmount: "",
				addPrice: "",
				locationArr: []
			});
		}
		/*点击为指定城市设置运费按重量*/
	$scope.detail_weightArr = [];
	$scope.addCity_weight = function() {
			$scope.detail_weightArr.push({
				locationType: "1",
				baseAmount: "",
				basePrice: "",
				addAmount: "",
				addPrice: "",
				locationArr: []
			});
		}
		/*点击删除重量模板城市*/
	$scope.deletedetail_weightArr = function(index) {
			$scope.detail_weightArr.splice(index, 1);
		}
		/*点击删除数量模板城市*/
	$scope.deletedetail_countArr = function(index) {
			$scope.detail_countArr.splice(index, 1);
		}
		/*查询地区*/
	$scope.loadArea = function(type) {
		$scope.areaArr = [];
		$scope.specialAreaArr = [];
		var jsonObject = {
			appId: "",
			type: "",
			typeSecond: type
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'typeBase/getLocationTreeCap',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				if(type == "-1") {
					$scope.bigAreas = data.data.types;
					angular.forEach($scope.bigAreas, function(ele, index) {
						ele.locationType = "0";
						ele.doSelect = false;
						var jsonObject = {
							appId: "",
							type: "",
							typeSecond: ele.locationId
						}
						jsonObject = angular.toJson(jsonObject);
						$http({
							method: 'post',
							url: pos + 'typeBase/getLocationTreeCap',
							params: {
								keyParams: getKeyParams(jsonObject, keyParams),
								jsonObject: getJsonObject(jsonObject)
							}
						}).success(function(data) {
							angular.forEach(data.data.types, function(ele, index) {
								ele.doSelect = false;
								ele.locationType = "1";
								ele.selectCount = 0;
							})
							$scope.areaObj = {
								pArea: ele,
								cArea: data.data.types
							}
							$scope.areaArr.push($scope.areaObj);
						})
					});
				} else if(type == "-2") {
					$scope.specialAreas = data.data.types;
					angular.forEach($scope.specialAreas, function(ele, index) {
						ele.locationType = "0";
						ele.doSelect = false;
						if(ele.locationId == "9998" || ele.locationId == "9999") {
							var jsonObject = {
								appId: "",
								type: "",
								typeSecond: ele.locationId
							}
							jsonObject = angular.toJson(jsonObject);
							$http({
								method: 'post',
								url: pos + 'typeBase/getLocationTreeCap',
								params: {
									keyParams: getKeyParams(jsonObject, keyParams),
									jsonObject: getJsonObject(jsonObject)
								}
							}).success(function(data) {
								angular.forEach(data.data.types, function(ele, index) {
									ele.doSelect = false;
									ele.locationType = "1";
								})
								$scope.areaObj = {
									pArea: ele,
									cArea: data.data.types
								}
								$scope.specialAreaArr.push($scope.areaObj);
							})
						}
					})
				}
			} else {
				alertmsg("获取门店失败", "error");
			}
		});
	};
	/*查询大区*/
	$scope.loadArea("-1");
	/*查询港澳台特殊区域*/
	$scope.loadArea("-2");
	/*查询每个大区所对应的城市*/
	$scope.cityObj = {};
	$scope.loadCity = function(obj, pObj, event, index) {
			$scope.loadCityPindex = index;
			event.stopPropagation();
			$(".area-name").css({
				"background-color": "#fff"
			})
			var jsonObject = {
				appId: "",
				type: "",
				typeSecond: obj.locationId
			}
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'typeBase/getLocationTreeCap',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					if(!$scope.cityObj[obj.locationId]) {
						$scope.cityObj[obj.locationId] = data.data.types;
					};
					angular.forEach(data.data.types, function(ele, index) {
							ele.ppLocationId = pObj.pArea.locationId;
							ele.locationType = "2";
							ele.doSelect = false;
						})
						/*当省份为选中状态时,其下面的城市都是选中状态*/
					if(pObj.cArea[index].doSelect == true) {
						angular.forEach($scope.cityObj[obj.locationId], function(ele, index) {
							ele.doSelect = true;
						})
					};
					/*当选中的有城市时,将该城市设置为选中状态*/
					angular.forEach($scope.selectArr, function(ele, index) {
						var _ele = ele;
						angular.forEach($scope.cityObj[obj.locationId], function(ele, index) {
							if(_ele.locationId == ele.locationId) {
								ele.doSelect = true;
							}
						})
					})
					$scope.cityLists = $scope.cityObj[obj.locationId];
					$(event.target).parents(".area-name").css({
						"background-color": "#e5f7fa"
					}).append($(".area-city-content"));
					$(".area-city-content").css({
						"display": "block",
						"top": "39px",
						"left": "0"
					})
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
		/*	点击选项框选择区域"1":大区,"2":省,"3":市区*/
	$scope.selectArr = [];
	$scope.selectArea = function(type, obj, index) {
			if(type == "1") {
				$scope.pIndex = index;
				if(obj.pArea.doSelect == true) {
					/*把大区加进去,把省与城市删除*/
					$scope.selectArr.push(obj.pArea);
					angular.forEach(obj.cArea, function(ele, index) {
						ele.doSelect = true;
						ele.selectCount = ele.nextCount;
					})
					for(var i = 0; i < $scope.selectArr.length; i++) {
						if(obj.pArea.locationId == $scope.selectArr[i].pLocationId) {
							$scope.selectArr.splice(i, 1);
							i--;
						}
					}
					for(var i = 0; i < $scope.selectArr.length; i++) {
						if(obj.pArea.locationId == $scope.selectArr[i].ppLocationId) {
							$scope.selectArr.splice(i, 1);
							i--;
						}
					}
					/*该大区下所有城市的选中效果要为选中状态*/
					angular.forEach($scope.cityObj, function(ele, index) {
						var cityArr = ele;
						angular.forEach(cityArr, function(ele, index) {
							ele.doSelect = true;
						})
					})

				} else {
					angular.forEach($scope.selectArr, function(ele, index) {
						if(ele.locationId == obj.pArea.locationId) {
							$scope.selectArr.splice(index, 1);
						}
					});
					for(var i = 0; i < $scope.selectArr.length; i++) {
						if(obj.pArea.locationId == $scope.selectArr[i].pLocationId) {
							$scope.selectArr.splice(i, 1);
							i--;
						}
					}
					for(var i = 0; i < $scope.selectArr.length; i++) {
						if(obj.pArea.locationId == $scope.selectArr[i].ppLocationId) {
							$scope.selectArr.splice(i, 1);
							i--;
						}
					}
					angular.forEach($scope.cityObj, function(ele, index) {
						var cityArr = ele;
						angular.forEach(cityArr, function(ele, index) {
							ele.doSelect = false;
						})
					})
					angular.forEach(obj.cArea, function(ele, index) {
						ele.doSelect = false;
						ele.selectCount = 0;
					})
				}
			} else if(type == "2") {
				$scope.provinceId = index;
				if(obj.pArea.doSelect == true) {

					/*当大区为选中的情况*/
					angular.forEach($scope.selectArr, function(ele, index) {
						if(ele.locationId == obj.pArea.locationId) {
							$scope.selectArr.splice(index, 1);
						}
					})
					angular.forEach(obj.cArea, function(ele, index) {
						if(ele.doSelect == true) {
							$scope.selectArr.push(ele);
							ele.selectCount = ele.nextCount;
						} else if(ele.doSelect == false) {
							ele.selectCount = 0;
						}
					});
					if($scope.cityObj[obj.cArea[index].locationId]) {
						angular.forEach($scope.cityObj[obj.cArea[index].locationId], function(ele) {
							ele.doSelect = false;
						})
					}
					obj.pArea.doSelect = false;
				} else if(obj.pArea.doSelect == false) {
					$scope.provinceFlag = true;
					angular.forEach(obj.cArea, function(ele, index) {
						if(ele.doSelect == false) {
							$scope.provinceFlag = false;
						}
					});
					/*把这个省对应的城市删除掉*/
					for(var i = 0; i < $scope.selectArr.length; i++) {
						if(obj.cArea[$scope.provinceId].locationId == $scope.selectArr[i].pLocationId) {
							$scope.selectArr.splice(i, 1);
							i--;
						}
					}
					/*当$scope.provinceFlag=false的时候,该大区有未选中的省份*/
					if($scope.provinceFlag == true) {
						for(var i = 0; i < $scope.selectArr.length; i++) {
							if($scope.selectArr[i].pLocationId == obj.pArea.locationId) {
								$scope.selectArr.splice(i, 1);
								i--;
							};
						}
						$scope.selectArr.push(obj.pArea);
						if($scope.cityObj[obj.cArea[index].locationId]) {
							angular.forEach($scope.cityObj[obj.cArea[index].locationId], function(ele) {
								ele.doSelect = true;
							})
						}
						obj.pArea.doSelect = true;
						angular.forEach(obj.cArea, function(ele, index) {
							ele.selectCount = ele.nextCount;
						});
					} else if($scope.provinceFlag == false) {
						if(obj.cArea[index].doSelect == true) {
							$scope.selectArr.push(obj.cArea[index]);
							obj.cArea[index].selectCount = obj.cArea[index].nextCount;
							if($scope.cityObj[obj.cArea[index].locationId]) {
								angular.forEach($scope.cityObj[obj.cArea[index].locationId], function(ele) {
									ele.doSelect = true;
								})
							}
						} else if(obj.cArea[index].doSelect == false) {
							obj.cArea[index].selectCount = 0;
							angular.forEach($scope.selectArr, function(ele, index) {
								if(obj.cArea[$scope.provinceId].locationId == ele.locationId) {
									$scope.selectArr.splice(index, 1);
								}
							})
							if($scope.cityObj[obj.cArea[index].locationId]) {
								angular.forEach($scope.cityObj[obj.cArea[index].locationId], function(ele) {
									ele.doSelect = false;
								})
							}
						}
					}
				}
			} else if(type == "3") {
				$scope.ccIndex = index;
				$scope.ccpLocationId = obj.pLocationId;
				/*获取城市所对应的省份在$scope.areaArr中的位置*/
				angular.forEach($scope.areaArr, function(ele, index) {
					var bigEle = ele;
					$scope.bigIndex_a = index;
					angular.forEach(bigEle.cArea, function(ele, index) {
						if(ele.locationId == $scope.ccpLocationId) {
							$scope.smallIndex = index;
							$scope.bigIndex = $scope.bigIndex_a;
						}
					})
				})
				$scope.rightObj = $scope.areaArr[$scope.bigIndex];
				$scope.rightPobj = $scope.areaArr[$scope.bigIndex].cArea[$scope.smallIndex];
				//				如果大区是选中状态
				if($scope.rightObj.pArea.doSelect == true) {
					$scope.rightObj.pArea.doSelect = false;
					$scope.rightPobj.doSelect = false;
					/*把大区的那个对象删除掉*/
					angular.forEach($scope.selectArr, function(ele, index) {
							if(ele.locationId == $scope.rightObj.pArea.locationId) {
								$scope.selectArr.splice(index, 1)
							}
						})
						/*把选中的省份加入到数组中*/
					angular.forEach($scope.areaArr[$scope.bigIndex].cArea, function(ele, index) {
						if(ele.doSelect == true) {
							$scope.selectArr.push(ele);
						}
					});
					/*把选中的城市加入到数组中*/
					$scope.selectCityCount = 0;
					angular.forEach($scope.cityObj[$scope.rightPobj.locationId], function(ele, index) {
						if(ele.doSelect == true) {
							$scope.selectArr.push(ele);
							$scope.selectCityCount++;
						}
					});
					$scope.rightPobj.selectCount = $scope.selectCityCount;
				} else if($scope.rightObj.pArea.doSelect == false) {
					/*当大区不选中,省份选中的时候,点击城市,需要把selectare里面的省份对象删除掉,把城市加进去*/
					if($scope.rightPobj.doSelect == true) {
						$scope.rightPobj.doSelect = false;
						angular.forEach($scope.selectArr, function(ele, index) {
							if(ele.locationId == $scope.rightPobj.locationId) {
								$scope.selectArr.splice(index, 1);
							}
						});
						$scope.selectCityCount = 0;
						angular.forEach($scope.cityObj[$scope.rightPobj.locationId], function(ele, index) {
							if(ele.doSelect == true) {
								$scope.selectArr.push(ele);
								$scope.selectCityCount++;
							}
						});
						$scope.rightPobj.selectCount = $scope.selectCityCount;
					} else if($scope.rightPobj.doSelect == false) {
						//						判断某个省份下的城市是否全部选中
						$scope.cityFlag = true;
						angular.forEach($scope.cityObj[$scope.rightPobj.locationId], function(ele, index) {
							if(ele.doSelect == false) {
								$scope.cityFlag = false;
							}
						});
						/*某个省份下的城市全部选中$scope.cityFlag=true;否则是false*/
						if($scope.cityFlag == false) {
							if(obj.doSelect == true) {
								$scope.selectArr.push(obj);
								$scope.selectCityCount = 0;
								angular.forEach($scope.cityObj[$scope.rightPobj.locationId], function(ele, index) {
									if(ele.doSelect == true) {
										$scope.selectCityCount++;
									}
								});
								$scope.rightPobj.selectCount = $scope.selectCityCount;
							} else if(obj.doSelect == false) {
								angular.forEach($scope.selectArr, function(ele, index) {
									if(ele.locationId == obj.locationId) {
										$scope.selectArr.splice(index, 1);
									}
								});
								$scope.selectCityCount = 0;
								angular.forEach($scope.cityObj[$scope.rightPobj.locationId], function(ele, index) {
									if(ele.doSelect == true) {
										$scope.selectCityCount++;
									}
								});
								$scope.rightPobj.selectCount = $scope.selectCityCount;
							}
						} else if($scope.cityFlag == true) {
							/*	当某个省份下面的城市全部选中时,删除该省份下全部的城市对象,加入这个省的对象*/
							for(var i = 0; i < $scope.selectArr.length; i++) {
								if($scope.selectArr[i].pLocationId == $scope.rightPobj.locationId) {
									$scope.selectArr.splice(i, 1);
									i--;
								}
							};
							$scope.selectCityCount = 0;
							angular.forEach($scope.cityObj[$scope.rightPobj.locationId], function(ele, index) {
								if(ele.doSelect == true) {
									$scope.selectCityCount++;
								}
							});
							$scope.rightPobj.selectCount = $scope.selectCityCount;
							$scope.selectArr.push($scope.rightPobj);
							$scope.rightPobj.doSelect = true;
							/*当$scope.provinceFlag=true时,大区中的省份全部选中*/
							$scope.provinceFlag = true;
							angular.forEach($scope.rightObj.cArea, function(ele, index) {
								if(ele.doSelect == false) {
									$scope.provinceFlag = false;
								}
							});
							if($scope.provinceFlag == true) {
								/*把省份数据删除,把大区数据加进去*/
								for(var i = 0; i < $scope.selectArr.length; i++) {
									if($scope.selectArr[i].pLocationId == $scope.rightObj.pArea.locationId) {
										$scope.selectArr.splice(i, 1);
										i--;
									};
								}
								$scope.selectArr.push($scope.rightObj.pArea);
								$scope.rightObj.pArea.doSelect = true;
							}
						}
					}
				}
			}
			$(".area-dialog").center();
		}
		//	对所有区域(地区,省份,城市选中状态进行清零)
	$scope.clearCheck = function() {
			//		大区和省份清除选中状态
			//		$scope.specialAreaArr
			angular.forEach($scope.areaArr, function(ele, index) {
				var _ele = ele;
				_ele.pArea.doSelect = false;
				angular.forEach(_ele.cArea, function(ele, index) {
					ele.doSelect = false;
					ele.selectCount = 0;
				})
			});
			angular.forEach($scope.specialAreaArr, function(ele, index) {
				var _ele = ele;
				_ele.pArea.doSelect = false;
				angular.forEach(_ele.cArea, function(ele, index) {
					ele.doSelect = false;
					ele.selectCount = 0;
				})
			})
			angular.forEach($scope.cityObj, function(ele, index) {
				var _ele = ele;
				angular.forEach(_ele, function(ele, index) {
					ele.doSelect = false;
				})
			})
		}
		/*在城市弹窗点击关闭按钮*/
	$scope.closeCityDialog = function() {
		$(".area-city-content").hide();
		$(".area-name").css({
			"background-color": "#fff"
		})
	}
	$scope.showAreaDialog = "hide";
	$scope.addArea = function(index) {
			$scope.areaTempIndex = index;
			$scope.showAreaDialog = 'show';
			/*获取对应地区的城市列表*/
			if($scope.calType == "1") {
				$scope.locationSelectArr = $scope.detail_countArr[$scope.areaTempIndex].locationArr;
			} else if($scope.calType == "0") {
				$scope.locationSelectArr = $scope.detail_weightArr[$scope.areaTempIndex].locationArr;
			};
			$scope.locationSelectArr_1 = angular.copy($scope.locationSelectArr)
			$scope.selectArr = $scope.locationSelectArr_1;
			/*将省份中城市未全部选中时计算选中城市的数量*/
			angular.forEach($scope.areaArr, function(ele, index) {
					var ele_1 = ele;
					angular.forEach(ele_1.cArea, function(ele, index) {
						var ele_2 = ele;
						$scope.selectCount = 0;
						angular.forEach($scope.selectArr, function(ele, index) {
							if(ele.pLocationId) {
								if(ele.pLocationId == ele_2.locationId) {
									$scope.selectCount++;
									ele_2.selectCount = $scope.selectCount;
								}
							}
						})
					})
				})
				/*根据selectArr把选中的大区,省份选中$scope.areaArr*/
			angular.forEach($scope.selectArr, function(ele, index) {
				for(var i = 0; i < $scope.areaArr.length; i++) {
					if(ele.locationId == $scope.areaArr[i].pArea.locationId) {
						$scope.areaArr[i].pArea.doSelect = true;
					}
				}
			});
			angular.forEach($scope.areaArr, function(ele, index) {
					if(ele.pArea.doSelect == true) {
						angular.forEach(ele.cArea, function(ele, index) {
							ele.doSelect = true;
							ele.selectCount = ele.nextCount;
						})
					}
				})
				/*把选中的省份选中*/
			angular.forEach($scope.areaArr, function(ele, index) {
					angular.forEach(ele.cArea, function(ele, index) {
						for(var i = 0; i < $scope.selectArr.length; i++) {
							if(ele.locationId == $scope.selectArr[i].locationId) {
								ele.doSelect = true;
								ele.selectCount = ele.nextCount;
							}
						}
					})
				})
				/*根据selectArr把选中的大区,省份选中$scope.areaArr*/
			angular.forEach($scope.selectArr, function(ele, index) {
				for(var i = 0; i < $scope.specialAreaArr.length; i++) {
					if(ele.locationId == $scope.specialAreaArr[i].pArea.locationId) {
						$scope.specialAreaArr[i].pArea.doSelect = true;
					}
				}
			});
			angular.forEach($scope.specialAreaArr, function(ele, index) {
					if(ele.pArea.doSelect == true) {
						angular.forEach(ele.cArea, function(ele, index) {
							ele.doSelect = true;
						})
					}
				})
				/*把选中的省份选中*/
			angular.forEach($scope.specialAreaArr, function(ele, index) {
					angular.forEach(ele.cArea, function(ele, index) {
						for(var i = 0; i < $scope.selectArr.length; i++) {
							if(ele.locationId == $scope.selectArr[i].locationId) {
								ele.doSelect = true;
							}
						}
					})
				})
				/*将选中的相应的城市回显*/
		}
		/*关闭选择城市的弹窗*/
	$scope.closeDia = function() {
			$scope.showAreaDialog = 'hide';
			$scope.clearCheck();
			$scope.closeCityDialog();
		}
		/*在选择区域弹窗点击确认按钮*/
	$scope.sureAddArea = function() {
			if($scope.calType == "1") {
				$scope.detail_countArr[$scope.areaTempIndex].locationArr = angular.copy($scope.selectArr);
				$scope.showAreaDialog = 'hide';
				$scope.clearCheck();
				$scope.closeCityDialog();
			} else if($scope.calType == "0") {
				$scope.detail_weightArr[$scope.areaTempIndex].locationArr = angular.copy($scope.selectArr);
				$scope.showAreaDialog = 'hide';
				$scope.clearCheck();
				$scope.closeCityDialog();
			}
		}
		/*点击保存模板按钮*/
	$scope.saveFreightTemp = function() {
		if($scope.orgIdStr == undefined) {
			$scope.orgIdStr = "";
		}
		if($scope.logiticTemplateName == undefined) {
			$scope.logiticTemplateName = "";
		}
		if($scope.calType == "1") {
			$scope.details_default = $scope.details_default_count;
			$scope.details = $scope.detail_countArr;
		} else if($scope.calType == "0") {
			$scope.details_default = $scope.details_default_weight;
			$scope.details = $scope.detail_weightArr;
		};
		if($scope.logiticTemplateName == ""){
			alertmsg("请输入运费模板名称","error");
			return false;
		}
		if($scope.details_default.addAmount=="" || $scope.details_default.addPrice == "" || $scope.details_default.baseAmount == "" || $scope.details_default.basePrice == ""){
			alertmsg("请设置默认运费","error");
			return false;
		};
		for(var i = 0 ; i<$scope.details.length;i++){
				if($scope.details[i].locationArr.length == 0 || $scope.details[i].addAmount == "" || $scope.details[i].addPrice == "" || $scope.details[i].baseAmount == "" || $scope.details[i].basePrice == "") {
						alertmsg("请补全运费信息", "error");
						return false;
					}
			}
		$scope.details_right = [$scope.details_default].concat($scope.details);
		var jsonObject = {
			orgId: $scope.orgIdStr,
			logiticTemplateName: $scope.logiticTemplateName,
			calType: $scope.calType,
			details: $scope.details_right
		};
		jsonObject = angular.toJson(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'logiticTemplate/addLogiticTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.goback()
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}

	/*点击继续添加微店页面*/
	$scope.goback = function() {
		$stateParams.uiParams.routeState.splice($stateParams.uiParams.routeState.length - 1, 1);
		$state.go($stateParams.uiParams.routeState[$stateParams.uiParams.routeState.length - 1].name, {
			uiParams: {
				routeState: $stateParams.uiParams.routeState,
				routeParams: $scope.jsonObject,
				type: "2"
			}
		})
	}

})