/*竖向柱状图*/
function barGraphVertical(dataX,dataY,color,title){
	// 基于准备好的dom，初始化echarts实例
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	canvas.width =620;
	var yMax = 50;
	var dataShadow = [];
	for(var i = 0; i < dataY.length; i++) {
		dataShadow.push(yMax);
	};
	var option = {
		 tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        },
        triggerOn:'none',
        formatter: function (params) {
            var tar;
               tar = params[0];
        	return tar.value;
        }
    },
		title: {
			text:title,
			left:'center',
			top:'top'
		},
		xAxis:{
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			data: dataX
		},
		yAxis: {
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle:{
					color:'#aaaaaa'
				},
			},
			name: '（万元）',
			nameLocation:'end',
			nameTextStyle: {
				color: '#666666',
				fontSize: '14px'
			},
			axisLabel: {
				textStyle: {
					color: '#999'
				}
			}
		},
		dataZoom: [{
			type: 'inside'
		}],
		series: [
			{
				type: 'bar',
				barWidth:'50%',
				itemStyle: {
					normal: {
						color: color
					}
				},
				 label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
           	 },
				data: dataY
			}
		]
	};
	return option;
}
/*横向柱状图*/
function barGraphCross(obj,title){
var waterMarkText = 'ECHARTS';
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
//canvas.width =200 ;
//canvas.height = 100;
//ctx.textAlign = 'center';
//ctx.textBaseline = 'middle';
//ctx.globalAlpha = 0.08;
//ctx.font = '20px Microsoft Yahei';
var option = {
    backgroundColor: {
        type: 'pattern',
        image: canvas,
        repeat: 'repeat'
    },
    tooltip: {},
    title: [{
        text: title,
        x: '25%',
        textAlign: 'left',
        textStyle:{
        	color:'#666666',
        	fontSize:14
        }
    }],
    grid: [{
        top: 50,
        width: '50%',
        bottom: '45%',
        left: 10,
        containLabel: true
    }, {
        top: '55%',
        width: '50%',
        bottom: 0,
        left: 10,
        containLabel: true
    }],
    xAxis: [{
    	show: false,
        type: 'value',
        max: obj.all,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
    	axisLine: {
				show: true,
				lineStyle:{
					color:'#aaaaaa'
				},
			},
    	axisTick: {
				show: false
			},
        type: 'category',
        data: Object.keys(obj.charts),
        nameTextStyle:{
        	color:'#333333',
        	fontStyle:'normal',
        	fontFamily:'MicrosoftYaHei'
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
         itemStyle: {
            normal: {
                color: '#FFB27D',
                barBorderRadius:[5,0,0,5]
            }
        },
        data: Object.keys(obj.charts).map(function (key) {
            return obj.charts[key];
        })
    }, {
        type: 'bar',
        barWidth:'60%',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#E0E0E0',
                barBorderRadius:[0,5,5,0]
            }
        },
        data: Object.keys(obj.charts).map(function (key) {
            return obj.all - obj.charts[key];
        })
    }]
}
       return option;
}
/*总业绩与每日业绩*/
function barGraphContrast(dataX,dataY,dataZ,title){
	// 基于准备好的dom，初始化echarts实例
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var option = {
		 tooltip : {
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        },
        triggerOn:'none',
         formatter: function (params) {
            var tar;
               tar = params[0];
        	return tar.value;
        }
    },
     title: [{
        text: title,
        x: '50%',
        textAlign: 'center',
        textStyle:{
        	color:'#666666',
        	fontSize:14
        }
    }],
 	legend: {
 		show:true,
 		z:10,
 		align:'left',
 		left: 10,
        data:[{
        	name:'总业绩',
        	icon:'rect',
        	textStyle: {
			        color: '#A1DDFA'
			    }
        },{
        	name:'当日业绩',
        	icon:'rect',
        	textStyle: {
			        color: '#FFD2D1'
			    }
        }]
    },
    xAxis: {  
    	type: 'category',
        data: dataX,
        axisTick: {show: false},
        axisLine: {
			show: true,
			lineStyle:{
				color:'#aaaaaa'
			},
		},
		axisLabel:{
			textStyle:{
				color:'#666666',
			},
//			formatter:function(val){
//			    return val.split("").join("\n");
//			}
		}
    },
    yAxis: {
    	axisTick: {
				show: false
			},
		axisLine: {
			show: true,
			lineStyle:{
				color:'#aaaaaa'
			},
		},
    	name: '（万元）',
		nameLocation:'end'
    },
    series: [{
    	name:'总业绩',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#A1DDFA'
            }
        },
        silent: true,
        barWidth: 10,
        barGap: '0%', 
         label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: dataZ
    }, {
    	name:'当日业绩',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#FCBDBA'
            }
        },
        barWidth: 10,
        z: 10,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: dataY
    }]
};
	return option;
}
