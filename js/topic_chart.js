function load_chart(){
	var data1 =  Math.floor(Math.random() * (101));
	var data2 =  Math.floor(Math.random() * (101));
	var data3 =  Math.floor(Math.random() * (101));
	var data4 =  Math.floor(Math.random() * (101));
	var data5 =  Math.floor(Math.random() * (101));

	if(myChart!=null){
		myChart.destroy();
	}
	var ctx6 = document.getElementById("timeline");
	ctx6.height=150;
	var myChart = new Chart(ctx6, {
		type: 'line',
		data: {
			labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14"],
			datasets: [{
				label: ["Using Time"],
				backgroundColor: [
					'rgba(88, 161, 245, 0.2)'
				],
				borderColor: [
					'rgba(88, 161, 245, 1)'
				],
				data: [20,35,24,37,33,39,23,37,28,11,8,18,34,43],
			}]
		},
		options: {
			responsive: true, 
			maintainAspectRatio: false,
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var dataset = data.datasets[tooltipItem.datasetIndex];
						var index = tooltipItem.index;
						return dataset.labels[index] + ': ' + dataset.data[index];
					}
				}
			},
			scales: {
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Weeks'
					}
				}],
				yAxes: [{
					stacked: true,
					scaleLabel: {
						display: true,
						labelString: 'Using Hours'
					}
				}]
			}
		}
	});
	var ctx = document.getElementById("chart1");
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ["Complete", "Incomplete"],
			datasets: [{
				data: [data1,100-data1],
				backgroundColor: [
					'rgba(88, 161, 245, 0.2)'
				],
				borderColor: [
					'rgba(88, 161, 245, 1)'
				],
				labels: [
				  'Complete',
				  'Incomplete',
				],
				borderWidth: 2
			}]
		},
		options: {
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var dataset = data.datasets[tooltipItem.datasetIndex];
						var index = tooltipItem.index;
						return dataset.labels[index] + ': ' + dataset.data[index];
					}
				}
			}
		}
	});

	var ctx2 = document.getElementById("chart2");
	var myChart = new Chart(ctx2, {
		type: 'doughnut',
		data: {
			labels: ["Complete", "Incomplete"],
			datasets: [{
				data: [data2,100-data2],
				backgroundColor: [
					'rgba(88, 161, 245, 0.2)'
				],
				borderColor: [
					'rgba(88, 161, 245, 1)'
				],
				labels: [
				  'Complete',
				  'Incomplete',
				],
				borderWidth: 2
			}]
		},
		options: {
			legend: {
				display: false
			},
			rotation: 1 * Math.PI,
			circumference: 1 * Math.PI
		},
	});

	var ctx3 = document.getElementById("chart3");
	var myChart = new Chart(ctx3, {
		type: 'doughnut',
		data: {
			labels: ["Complete", "Incomplete"],
			datasets: [{
				data: [data3,100-data3],
				backgroundColor: [
					'rgba(88, 161, 245, 0.2)'
				],
				borderColor: [
					'rgba(88, 161, 245, 1)'
				],
				labels: [
				  'Complete',
				  'Incomplete',
				],
				borderWidth: 2
			}]
		},
		options: {
			legend: {
				display: false
			},
			rotation: 1 * Math.PI,
			circumference: 1 * Math.PI,
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var dataset = data.datasets[tooltipItem.datasetIndex];
						var index = tooltipItem.index;
						return dataset.labels[index] + ': ' + dataset.data[index];
					}
				}
			}
		},
	});

	var ctx4 = document.getElementById("chart4");
	var myChart = new Chart(ctx4, {
		type: 'doughnut',
		data: {
			labels: ["Complete", "Incomplete"],
			datasets: [{
				data: [data4,100-data4],
				backgroundColor: [
					'rgba(88, 161, 245, 0.2)'
				],
				borderColor: [
					'rgba(88, 161, 245, 1)'
				],
				labels: [
				  'Complete',
				  'Incomplete',
				],
				borderWidth: 2
			}]
		},
		options: {
			legend: {
				display: false
			},
			rotation: 1 * Math.PI,
			circumference: 1 * Math.PI,
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var dataset = data.datasets[tooltipItem.datasetIndex];
						var index = tooltipItem.index;
						return dataset.labels[index] + ': ' + dataset.data[index];
					}
				}
			}
		}
	});

	var ctx5 = document.getElementById("chart5");
	var myChart = new Chart(ctx5, {
		type: 'doughnut',
		data: {
			labels: ["Complete", "Incomplete"],
			datasets: [{
				data: [data5,100-data5],
				backgroundColor: [
					'rgba(88, 161, 245, 0.2)'
				],
				borderColor: [
					'rgba(88, 161, 245, 1)'
				],
				labels: [
				  'Complete',
				  'Incomplete',
				],
				borderWidth: 2,
			}]
		},
		options: {
			legend: {
				display: false
			},
			rotation: 1 * Math.PI,
			circumference: 1 * Math.PI,
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var dataset = data.datasets[tooltipItem.datasetIndex];
						var index = tooltipItem.index;
						return dataset.labels[index] + ': ' + dataset.data[index];
					}
				}
			}
		},
	});

	jQuery(function ($) {
		var val1 = Math.floor((Math.random() * 100)) + '%';
		$('#pb1').width(val1).text(val1);
		var val2 = Math.floor((Math.random() * 100)) + '%';
		$('#pb2').width(val2).text(val2);
		var val3 = Math.floor((Math.random() * 100)) + '%';
		$('#pb3').width(val3).text(val3);
		var val4 = Math.floor((Math.random() * 100)) + '%';
		$('#pb4').width(val4).text(val4);
		var val5 = Math.floor((Math.random() * 100)) + '%';
		$('#pb5').width(val5).text(val5);
		var val6 = Math.floor((Math.random() * 100)) + '%';
		$('#pb6').width(val6).text(val6);
		var val7 = Math.floor((Math.random() * 100)) + '%';
		$('#pb7').width(val7).text(val7);
		var val8 = Math.floor((Math.random() * 100)) + '%';
		$('#pb8').width(val8).text(val8);
		var val9 = Math.floor((Math.random() * 100)) + '%';
		$('#pb9').width(val9).text(val9);
		var val10 = Math.floor((Math.random() * 100)) + '%';
		$('#pb10').width(val10).text(val10);
		var val11 = Math.floor((Math.random() * 100)) + '%';
		$('#pb11').width(val11).text(val11);
		var val12 = Math.floor((Math.random() * 100)) + '%';
		$('#pb12').width(val12).text(val12);
		var val13 = Math.floor((Math.random() * 100)) + '%';
		$('#pb13').width(val13).text(val13);
		var val14 = Math.floor((Math.random() * 100)) + '%';
		$('#pb14').width(val14).text(val14);
		var val15 = Math.floor((Math.random() * 100)) + '%';
		$('#pb15').width(val15).text(val15);
		
	});
}

$("#TopicSubmenu li").click(function() {
	$('#usage_timeline').hide();
	if($(this).text() == "Overall"){
		$('#usage_timeline').show();
	}
	load_chart();
	var word1 = "Overall Information - ".concat($(this).text());
	document.getElementById("overall_heading").innerHTML = word1;
	var word2 = "Reading - ".concat($(this).text());
	document.getElementById("reading_heading").innerHTML = word2;
	var word3 = "Example - ".concat($(this).text());
	document.getElementById("example_heading").innerHTML = word3;
	var word4 = "Quiz - ".concat($(this).text());
	document.getElementById("quiz_heading").innerHTML = word4;
	var word5 = "Coding - ".concat($(this).text());
	document.getElementById("coding_heading").innerHTML = word5;
});
var check_array = new Array("AVT6","AMG219","CER35");
var elements;
var name="student";
$('.limit-checkbox').on('change', function() {
	var temp="";
	var i=0;
	if($(this).is(":checked")){
		if($('.limit-checkbox:checked').length > 3){
			alert("You can only select at most three students");
			this.checked = false;
		}else{
			i = check_array.indexOf("");
			temp = name.concat(i);
			elements = document.getElementsByName(temp);
			for(var j=0; j<elements.length; j++){
				elements[j].textContent = this.name;
			}
			temp = ".".concat(temp);
			$(temp).show();
			check_array[i]=this.name;
		}
	}
	else{
		i = check_array.indexOf(this.name);
		temp = name.concat(i);
		temp = ".".concat(temp);
		check_array[i]="";
		$(temp).hide();
		
	}
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