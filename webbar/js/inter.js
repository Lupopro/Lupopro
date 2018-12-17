var myChart = echarts.init(document.getElementById("inter"));

var data = [{
		value: 15496,
		name: '安徽',
		selected: true
	},
	{
		value: 10569,
		name: '福建',
		selected: true
	},
	{
		value: 12571,
		name: '甘肃',
		selected: true
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

var geoCoordMap = {
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
};

var convertData = function(data) {
	var res = [];
	for(var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if(geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};

var convertedData = [
	convertData(data),
	convertData(data.sort(function(a, b) {
		return b.value - a.value;
	}).slice(0, 30))
];

option = {
	backgroundColor: '#404a59',
	animation: true,
	animationDuration: 1000,
	animationEasing: 'cubicInOut',
	animationDurationUpdate: 1000,
	animationEasingUpdate: 'cubicInOut',
	title: [{
		text: '外地人口分布',
		left: 'center',
		textStyle: {
			color: '#fff'
		}
	}, {
		id: 'statistic',
		right: 120,
		top: 40,
		width: 100,
		textStyle: {
			color: '#fff',
			fontSize: 16
		}
	}],
	toolbox: {
		iconStyle: {
			normal: {
				borderColor: '#fff'
			},
			emphasis: {
				borderColor: '#b1e4ff'
			}
		},
		feature: {
			dataZoom: {},
			brush: {
				type: ['rect', 'polygon', 'clear']
			},
			saveAsImage: {
				show: true
			}
		}
	},
	brush: {
		outOfBrush: {
			color: '#abc'
		},
		brushStyle: {
			borderWidth: 2,
			color: 'rgba(0,0,0,0.2)',
			borderColor: 'rgba(0,0,0,0.5)',
		},
		seriesIndex: [0, 1],
		throttleType: 'debounce',
		throttleDelay: 300,
		geoIndex: 0
	},
	geo: {
		map: 'china',
		left: '10',
		right: '35%',
		// center: [117.98561551896913, 31.205000490896193],
		// zoom: 2.5,
		label: {
			emphasis: {
				show: false
			}
		},
		roam: true,
		itemStyle: {
			normal: {
				areaColor: '#323c48',
				borderColor: '#111'
			},
			emphasis: {
				areaColor: '#2a333d'
			}
		}
	},
	tooltip: {
		trigger: 'item'
	},
	grid: {
		right: 40,
		top: 100,
		bottom: 40,
		width: '30%'
	},
	xAxis: {
		type: 'value',
		scale: true,
		position: 'top',
		boundaryGap: false,
		splitLine: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			margin: 2,
			textStyle: {
				color: '#aaa'
			}
		},
	},
	yAxis: {
		type: 'category',
		name: '人数',
		nameGap: 16,
		axisLine: {
			show: false,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisTick: {
			show: false,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisLabel: {
			interval: 0,
			textStyle: {
				color: '#ddd'
			}
		},
		data: []
	},
	series: [{
			type: 'scatter',
			coordinateSystem: 'geo',
			data: convertedData[0],
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: false
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#ddb926'
				}
			}
		},
		{
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: convertData(data.sort(function(a, b) {
				return b.value - a.value;
			}).slice(0, 30)),
			// symbolSize: function (val) {
			//     return val[2] / 500;
			// },
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#ff3300',
					shadowBlur: 10,
					shadowColor: '#FF7F00'
				}
			},
			zlevel: 1
		}, {
			id: 'bar',
			zlevel: 2,
			type: 'bar',
			symbol: 'none',
			itemStyle: {
				normal: {
					color: '#ddb926'
				}
			},
			data: []
		}
	]
};

myChart.on('brushselected', renderBrushed);

// myChart.setOption(option);

setTimeout(function() {
	myChart.dispatchAction({
		type: 'brush',
		areas: [{
			geoIndex: 0,
			brushType: 'polygon',
			coordRange: [
				[119.72, 34.85],
				[119.68, 34.85],
				[119.5, 34.84],
				[119.19, 34.77],
				[118.76, 34.63],
				[118.6, 34.6],
				[118.46, 34.6],
				[118.33, 34.57],
				[118.05, 34.56],
				[117.6, 34.56],
				[117.41, 34.56],
				[117.25, 34.56],
				[117.11, 34.56],
				[117.02, 34.56],
				[117, 34.56],
				[116.94, 34.56],
				[116.94, 34.55],
				[116.9, 34.5],
				[116.88, 34.44],
				[116.88, 34.37],
				[116.88, 34.33],
				[116.88, 34.24],
				[116.92, 34.15],
				[116.98, 34.09],
				[117.05, 34.06],
				[117.19, 33.96],
				[117.29, 33.9],
				[117.43, 33.8],
				[117.49, 33.75],
				[117.54, 33.68],
				[117.6, 33.65],
				[117.62, 33.61],
				[117.64, 33.59],
				[117.68, 33.58],
				[117.7, 33.52],
				[117.74, 33.5],
				[117.74, 33.46],
				[117.8, 33.44],
				[117.82, 33.41],
				[117.86, 33.37],
				[117.9, 33.3],
				[117.9, 33.28],
				[117.9, 33.27],
				[118.09, 32.97],
				[118.21, 32.7],
				[118.29, 32.56],
				[118.31, 32.5],
				[118.35, 32.46],
				[118.35, 32.42],
				[118.35, 32.36],
				[118.35, 32.34],
				[118.37, 32.24],
				[118.37, 32.14],
				[118.37, 32.09],
				[118.44, 32.05],
				[118.46, 32.01],
				[118.54, 31.98],
				[118.6, 31.93],
				[118.68, 31.86],
				[118.72, 31.8],
				[118.74, 31.78],
				[118.76, 31.74],
				[118.78, 31.7],
				[118.82, 31.64],
				[118.82, 31.62],
				[118.86, 31.58],
				[118.86, 31.55],
				[118.88, 31.54],
				[118.88, 31.52],
				[118.9, 31.51],
				[118.91, 31.48],
				[118.93, 31.43],
				[118.95, 31.4],
				[118.97, 31.39],
				[118.97, 31.37],
				[118.97, 31.34],
				[118.97, 31.27],
				[118.97, 31.21],
				[118.97, 31.17],
				[118.97, 31.12],
				[118.97, 31.02],
				[118.97, 30.93],
				[118.97, 30.87],
				[118.97, 30.85],
				[118.95, 30.8],
				[118.95, 30.77],
				[118.95, 30.76],
				[118.93, 30.7],
				[118.91, 30.63],
				[118.91, 30.61],
				[118.91, 30.6],
				[118.9, 30.6],
				[118.88, 30.54],
				[118.88, 30.51],
				[118.86, 30.51],
				[118.86, 30.46],
				[118.72, 30.18],
				[118.68, 30.1],
				[118.66, 30.07],
				[118.62, 29.91],
				[118.56, 29.73],
				[118.52, 29.63],
				[118.48, 29.51],
				[118.44, 29.42],
				[118.44, 29.32],
				[118.43, 29.19],
				[118.43, 29.14],
				[118.43, 29.08],
				[118.44, 29.05],
				[118.46, 29.05],
				[118.6, 28.95],
				[118.64, 28.94],
				[119.07, 28.51],
				[119.25, 28.41],
				[119.36, 28.28],
				[119.46, 28.19],
				[119.54, 28.13],
				[119.66, 28.03],
				[119.78, 28],
				[119.87, 27.94],
				[120.03, 27.86],
				[120.17, 27.79],
				[120.23, 27.76],
				[120.3, 27.72],
				[120.42, 27.66],
				[120.52, 27.64],
				[120.58, 27.63],
				[120.64, 27.63],
				[120.77, 27.63],
				[120.89, 27.61],
				[120.97, 27.6],
				[121.07, 27.59],
				[121.15, 27.59],
				[121.28, 27.59],
				[121.38, 27.61],
				[121.56, 27.73],
				[121.73, 27.89],
				[122.03, 28.2],
				[122.3, 28.5],
				[122.46, 28.72],
				[122.5, 28.77],
				[122.54, 28.82],
				[122.56, 28.82],
				[122.58, 28.85],
				[122.6, 28.86],
				[122.61, 28.91],
				[122.71, 29.02],
				[122.73, 29.08],
				[122.93, 29.44],
				[122.99, 29.54],
				[123.03, 29.66],
				[123.05, 29.73],
				[123.16, 29.92],
				[123.24, 30.02],
				[123.28, 30.13],
				[123.32, 30.29],
				[123.36, 30.36],
				[123.36, 30.55],
				[123.36, 30.74],
				[123.36, 31.05],
				[123.36, 31.14],
				[123.36, 31.26],
				[123.38, 31.42],
				[123.46, 31.74],
				[123.48, 31.83],
				[123.48, 31.95],
				[123.46, 32.09],
				[123.34, 32.25],
				[123.22, 32.39],
				[123.12, 32.46],
				[123.07, 32.48],
				[123.05, 32.49],
				[122.97, 32.53],
				[122.91, 32.59],
				[122.83, 32.81],
				[122.77, 32.87],
				[122.71, 32.9],
				[122.56, 32.97],
				[122.38, 33.05],
				[122.3, 33.12],
				[122.26, 33.15],
				[122.22, 33.21],
				[122.22, 33.3],
				[122.22, 33.39],
				[122.18, 33.44],
				[122.07, 33.56],
				[121.99, 33.69],
				[121.89, 33.78],
				[121.69, 34.02],
				[121.66, 34.05],
				[121.64, 34.08]
			]
		}]
	});
}, 0);

function renderBrushed(params) {
	var mainSeries = params.batch[0].selected[0];

	var selectedItems = [];
	var categoryData = [];
	var barData = [];
	var maxBar = 30;
	var sum = 0;
	var count = 0;

	for(var i = 0; i < mainSeries.dataIndex.length; i++) {
		var rawIndex = mainSeries.dataIndex[i];
		var dataItem = convertedData[0][rawIndex];
		var pmValue = dataItem.value[2];

		sum += pmValue;
		count++;

		selectedItems.push(dataItem);
	}

	selectedItems.sort(function(a, b) {
		return a.value[2] - b.value[2];
	});

	for(var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
		categoryData.push(selectedItems[i].name);
		barData.push(selectedItems[i].value[2]);
	}

	this.setOption({
		yAxis: {
			data: categoryData
		},
		xAxis: {
			axisLabel: {
				show: !!count
			}
		},
		series: {
			id: 'bar',
			data: barData
		}
	});
}

myChart.setOption(option);