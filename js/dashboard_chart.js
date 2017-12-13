			var data1 =  Math.floor(Math.random() * (101));
			var data2 =  Math.floor(Math.random() * (101));
			var data3 =  Math.floor(Math.random() * (101));
			var ctx1 = document.getElementById("chart1");
			var myChart = new Chart(ctx1, {
				type: 'doughnut',
				data: {
					labels: ["Complete", "Incomplete"],
					datasets: [{
						data: [data1,100-data1],
						backgroundColor: [
							'rgba(0, 132, 255, 1)'
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
							'rgba(0, 132, 255, 1)'
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
			var ctx3 = document.getElementById("chart3");
			var myChart = new Chart(ctx3, {
				type: 'doughnut',
				data: {
					labels: ["Complete", "Incomplete"],
					datasets: [{
						data: [data3,100-data3],
						backgroundColor: [
							'rgba(0, 132, 255, 1)'
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