//line chart
var ctx = document.getElementById('myChart').getContext('2d');

var data2016 = [3.4, 3.6, 3.2, 3.3, 3.9, 3.8];
var data2017 = [3.8, 3.9, 3.3, 3.2, 3.6, 3.4];
var dataRataRataIPK =[3.6, 3.75, 3.25, 3.25, 3.75, 3.6];
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2016","2017","2018","2019","2020","2021"],
        datasets: [{
            label: 'Angkatan 2016',
            data: data2016,
            borderColor: [
                'rgba(220, 53, 69, 1)',
            ],
            borderWidth: 3
        },
        {
            label: 'Angkatan 2017',
            data: data2017,
            borderColor: [
                'rgba(0, 123, 255, 1)',
            ],
            borderWidth: 3
        },
        {
            label: 'Rata-Rata IPK',
            data: dataRataRataIPK,
            borderColor: [
                'rgba(255, 193, 7, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});