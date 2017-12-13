$(document).ready(function () {
	 $('#sidebarCollapse').on('click', function () {
		 $('#sidebar').toggleClass('active');
	 });
	 change_opacity();
 });
 function random(){
	var ran =  Math.random()+0.2;
	if(ran > 1)
		ran = 1;
	return ran;
}
var string1 = "%";
var string2 = "";
function change_opacity(){
	var elems = document.querySelectorAll(".btn");
	var length = elems.length;;
	for (var i=0; i < length; i++) {
		var ran = random();
		elems[i].style.opacity = ran;
		ran = ran *100;
		ran = Number(ran).toFixed(1);    
		string2 = ran + string1;
		elems[i].dataset.content = string2;
	}
}
require.config({
	paths: {
		echarts: 'http://echarts.baidu.com/build/dist'
	}
});
var option = {
	title : {
		text: 'Study Time By Week',
	},
	tooltip : {
		trigger: 'axis'
	},
	legend: {
		data:['Time Used']
	},
	calculable : true,
	xAxis : [{
		type : 'category',
		boundaryGap : false,
		data : ['Week1','Week2','Week3','Week4','Week5','Week6','Week7','Week8','Week9','Week10','Week11','Week12','Week13']
	}],
	yAxis : [{
		type : 'value',
		axisLabel : {
			formatter: '{value} minutes'
		}
	}],
	series : [{
		name:'Time Used',
		type:'line',
		data:[
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100),
		Math.round(Math.random()*100)
		],
		markPoint : {
			data : [
				{type : 'max', name: 'Max Time'},
				{type : 'min', name: 'Min Time'}
			]
		},
		markLine : {
			data : [
				{type : 'average', name: 'Average Time'}
			]
		}
	}]
};
var myChart;
require(
	[
		'echarts',
		'echarts/chart/line' 
	],
	function (ec) {
		
		myChart = ec.init(document.getElementById('main')); 
		myChart.setOption(option);
	}
);

$('input[type=radio][name=stuid]').change(function() {
	var option = {
		title : {
			text: 'Study Time By Week',
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['Time Used']
		},
		calculable : true,
		xAxis : [{
			type : 'category',
			boundaryGap : false,
			data : ['Week1','Week2','Week3','Week4','Week5','Week6','Week7','Week8','Week9','Week10','Week11','Week12','Week13']
		}],
		yAxis : [{
			type : 'value',
			axisLabel : {
				formatter: '{value} minutes'
			}
		}],
		series : [{
			name:'Time Used',
			type:'line',
			data:[
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100),
			Math.round(Math.random()*100)
			],
			markPoint : {
				data : [
					{type : 'max', name: 'Max Time'},
					{type : 'min', name: 'Min Time'}
				]
			},
			markLine : {
				data : [
					{type : 'average', name: 'Average Time'}
				]
			}
		}]
	};
	myChart.setOption(option);
	word = $("input[name='stuid']:checked").parent('label').text();
	word = "Student ID: ".concat(word);
	document.getElementById("pannel_heading").innerHTML = word;
	change_opacity();
});
function search() {
	var input, filter, ul, li, a, i, label;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	ul = document.getElementById("StudentSubmenu");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

$(function () { 
	$("[data-toggle='popover']").popover();
});