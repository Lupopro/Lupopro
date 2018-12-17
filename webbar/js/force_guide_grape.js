var myChart = echarts.init(document.getElementById("force_guide_grape"));

var peo_data = [{
		value: 15496,
		name: '安徽',
		selected:true
	},
	{
		value: 10569,
		name: '福建',
		selected:true
	},
	{
		value: 12571,
		name: '甘肃',
		selected:true
	},
	{
		value: 9796,
		name: '广东'
	},
	{
		value: 68672,
		name: '贵州'
	},
	{
		value: 3869,
		name: '海南'
	},
	{
		value: 11723,
		name: '河北'
	},
	{
		value: 25359,
		name: '河南'
	},
	{
		value: 6854,
		name: '黑龙江'
	},
	{
		value: 38680,
		name: '湖北'
	},
	{
		value: 27151,
		name: '湖南'
	},
	{
		value: 4793,
		name: '吉林'
	},
	{
		value: 12640,
		name: '江苏'
	},
	{
		value: 16822,
		name: '江西'
	},
	{
		value: 5071,
		name: '辽宁'
	},
	{
		value: 3640,
		name: '青海'
	},
	{
		value: 10780,
		name: '山东'
	},
	{
		value: 9191,
		name: '山西'
	},
	{
		value: 14622,
		name: '陕西'
	},
	{
		value: 625063,
		name: '四川'
	},
	{
		value: 23571,
		name: '云南'
	},
	{
		value: 11059,
		name: '浙江'
	},
	{
		value: 7361,
		name: '广西'
	},
	{
		value: 5581,
		name: '内蒙古'
	},
	{
		value: 2602,
		name: '宁夏'
	},
	{
		value: 3433,
		name: '西藏'
	},
	{
		value: 10655,
		name: '新疆'
	},
	{
		value: 2377,
		name: '重庆'
	}
]

var to_from_data = [
	[{
			name: '重庆'
		},
		{
			value: 15496,
			name: '安徽'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 10569,
			name: '福建'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 12571,
			name: '甘肃'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 9796,
			name: '广东'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 68672,
			name: '贵州'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 3869,
			name: '海南'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 11723,
			name: '河北'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 25359,
			name: '河南'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 6854,
			name: '黑龙江'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 38680,
			name: '湖北'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 27151,
			name: '湖南'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 4793,
			name: '吉林'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 12640,
			name: '江苏'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 16822,
			name: '江西'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 5071,
			name: '辽宁'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 3640,
			name: '青海'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 10780,
			name: '山东'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 9191,
			name: '山西'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 14622,
			name: '陕西'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 625063,
			name: '四川'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 23571,
			name: '云南'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 11059,
			name: '浙江'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 7361,
			name: '广西'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 5581,
			name: '内蒙古'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 2602,
			name: '宁夏'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 3433,
			name: '西藏'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 10655,
			name: '新疆'
		}
	],
	[{
			name: '重庆'
		},
		{
			value: 2377,
			name: '重庆'
		}
	]
]

var geo_data = {
	"安徽": [117.2461, 32.0361],
	"福建": [118.3008, 25.9277],
	"甘肃": [95.7129, 40.166],
	"广东": [113.4668, 22.8076],
	"贵州": [106.6113, 26.9385],
	"海南": [109.9512, 19.2041],
	"河北": [115.4004, 37.9688],
	"河南": [113.4668, 33.8818],
	"黑龙江": [128.1445, 48.5156],
	"湖北": [112.2363, 31.1572],
	"湖南": [111.5332, 27.3779],
	"吉林": [126.4746, 43.5938],
	"江苏": [120.0586, 32.915],
	"江西": [116.0156, 27.29],
	"辽宁": [122.3438, 41.0889],
	"青海": [96.2402, 35.4199],
	"山东": [118.7402, 36.4307],
	"山西": [112.4121, 37.6611],
	"陕西": [109.5996, 35.6396],
	"四川": [102.9199, 30.1904],
	"云南": [101.8652, 25.1807],
	"浙江": [120.498, 29.0918],
	"广西": [108.2813, 23.6426],
	"内蒙古": [117.5977, 44.3408],
	"宁夏": [105.9961, 37.3096],
	"西藏": [88.7695, 31.6846],
	"新疆": [84.9023, 41.748],
	"重庆": [107.7539, 30.1904],

}

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

	var convertData = function(data) {
		var res = [];
		console.log(data);
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geo_data[dataItem[0].name];
			var toCoord = geo_data[dataItem[1].name];
			if(fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};
	var color = ['#a6c84c', '#ffa022', '#46bee9'];
	var series = [];
	[
		["重庆", to_from_data]
	].forEach(function(item, i) {
		series.push({
			name: item[0],
			type: "lines",
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: "#fff",
				symbloSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.01
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0],
			type: "lines",
			zlevel: 2,
			symbol: ["none", "arrow"],
			symbolSize: 10,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.6,
					curvenenss: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0],
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
//			symbolSize: function(val) {
//				return val[2] / 8;
//			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geo_data[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		}
		);
	});

	var option = {
		backgroundColor: "#ffffff",
		title: {
			text: "外来人口分布关系图",
			left: "center"
		},
//		tooltip:{
//			trigger:"item"
//		},
		dataRange:{
			orient:"horizontal",
			min:0,
			max:70000,
			text:["高","低"],
			splitNumber:0
		},
		toolbox:{
			show:true,
			orient:"vertical",
			x:"right",
			y:"center",
			feature:{
				mark:{show:true},
				dataView:{
					show:true,
					readOnly:false
				}
			}
		},
		geo: {
			map: "china",
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					label:{show:true},
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					label:{show:true},
					areaColor: '#2a333d'
				}
			}
		},
		series: series
	};

		myChart.setOption(option);

