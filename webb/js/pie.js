var myChart=echarts.init(document.getElementById("pie"));
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
var option = {
	title:{
		text:"外来人口分布比例",
		left:"center"
	},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:["安徽省","福建省","甘肃省","广东省","贵州省","海南省","河北省",
        "河南省","黑龙江省","湖北省","湖南省","吉林省","江苏省","江西省","辽宁省",
        "青海省","山东省","山西省","陕西省","四川省","云南省","浙江省","广西","内蒙古",
        "宁夏","西藏","新疆","重庆"]
    },
    series: [
        {
            name:'省份',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:2377, name:'重庆', selected:true},
                {value:997624, name:'外省'}
            ]
        },
        {
            name:'省份',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:15496, name:'安徽省'},
                {value:10569, name:'福建省'},
                {value:12571, name:'甘肃省'},
                {value:9796, name:'广东省'},
                {value:68672, name:'贵州省'},
                {value:3869, name:'海南省'},
                {value:11723, name:'河北省'},
                {value:25359, name:'河南省'},
                {value:6854,name:'黑龙江省'},
                {value:38680,name:'湖北省'},
                {value:27151,name:'湖南省'},
                {value:4793,name:'吉林省'},
                {value:12640,name:'江苏省'},
                {value:16822,name:'江西省'},
                {value:5071,name:'辽宁省'},
                {value:3640,name:'青海省'},
                {value:10780,name:'山东省'},
                {value:9191,name:'山西省'},
                {value:14622,name:'陕西省'},
                {value:625063,name:'四川省'},
                {value:23571,name:'云南省'},
                {value:11059,name:'浙江省'},
                {value:7361,name:'广西'},
                {value:5581,name:'内蒙古'},
                {value:2602,name:'宁夏'},
                {value:3433,name:'西藏'},
                {value:10655,name:'新疆'},
                {value:2377,name:'重庆'}
            ]
        }
    ]
};
myChart.setOption(option);