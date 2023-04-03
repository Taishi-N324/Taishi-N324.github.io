function drawChart(data, canvasID, text) {
  window.addEventListener('load', () => {
  let context = document.getElementById(canvasID).getContext('2d');
  new Chart(context, {
    type: 'line',
    data: data,
    options: {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: text
        }
      }
    }
  });
}
  )
}


let nl_west_data =  {
  labels: Array.from({length: 23}, (_, i) => 2000 + i),
  datasets: [{
      label: "Arizona Diamondbacks",
      data:  [0.525, 0.568, 0.605, 0.519, 0.315, 0.475, 0.469, 0.556, 0.506, 0.432, 0.401, 0.58, 0.5, 0.5, 0.395, 0.488, 0.426, 0.574, 0.506, 0.525, 0.417, 0.321, 0.457],
      borderColor: 'red',
      backgroundColor: 'red',
    },
    {
      label: "Colorado Rockies",
      data: [0.506, 0.451, 0.451, 0.457, 0.42, 0.414, 0.469, 0.552, 0.457, 0.568, 0.512, 0.451, 0.395, 0.457, 0.407, 0.42, 0.463, 0.537, 0.558, 0.438, 0.433, 0.46, 0.42],
      borderColor: 'purple',
      backgroundColor: 'purple',
      pointRadius: 5,
      pointHitRadius: 10,
      pointStyle: "triangle",
    },
    {
      label: "San Diego Padres",
      data: [0.469, 0.488, 0.407, 0.395, 0.537, 0.506, 0.543, 0.546, 0.389, 0.463, 0.556, 0.438, 0.469, 0.469, 0.475, 0.457, 0.42, 0.438, 0.407, 0.432, 0.617, 0.488, 0.549],
      borderColor: 'yellow',
      backgroundColor: 'yellow',
    },
    {
      label: "Los Angeles Dodgers",
      data: [0.531, 0.531, 0.568, 0.525, 0.574, 0.438, 0.543, 0.506, 0.519, 0.586, 0.494, 0.509, 0.531, 0.568, 0.58, 0.568, 0.562, 0.642, 0.564, 0.654, 0.717, 0.654, 0.685],
      borderColor: "blue",
      backgroundColor: 'blue',
    },
    {
      label: "San Francisco Giants",
      data: [0.599, 0.556, 0.59, 0.621, 0.562, 0.463, 0.472, 0.438, 0.444, 0.543, 0.568, 0.531, 0.58, 0.469, 0.543, 0.519, 0.537, 0.395, 0.451, 0.475, 0.483, 0.66, 0.5],
      borderColor: "orange",
      backgroundColor: 'orange',
    },
  ],
}

let al_west_data = {
  labels: Array.from({length: 23}, (_, i) => 2000 + i),
  datasets: [{
      label: "Houston Astros",
      data:  [null, null, null, null, null, null, null, null, null, null, null, null, null, 0.315, 0.432, 0.531, 0.519, 0.623, 0.636, 0.66, 0.483, 0.586, 0.654],
      borderColor: 'purple',
      backgroundColor: 'purple',
    },
    {
      label: "Los Angeles Angels",
      data: [0.506, 0.463, 0.611, 0.475, 0.568, 0.586, 0.549, 0.58, 0.617, 0.599, 0.494, 0.531, 0.549, 0.481, 0.605, 0.525, 0.457, 0.494, 0.494, 0.444, 0.433, 0.475, 0.451],
      borderColor: 'red',
      backgroundColor: 'red',
      pointRadius: 5,
      pointHitRadius: 10,
      pointStyle: "triangle",
    },
    {
      label: "Oakland Athletics",
      data: [0.565, 0.63, 0.636, 0.593, 0.562, 0.543, 0.574, 0.469, 0.466, 0.463, 0.5, 0.457, 0.58, 0.593, 0.543, 0.42, 0.426, 0.463, 0.599, 0.599, 0.6, 0.531, 0.37],
      borderColor: 'green',
      backgroundColor: 'green',
    },
    {
      label: "Seattle Mariners",
      data: [0.562, 0.716, 0.574, 0.574, 0.389, 0.426, 0.481, 0.543, 0.377, 0.525, 0.377, 0.414, 0.463, 0.438, 0.537, 0.469, 0.531, 0.481, 0.549, 0.42, 0.45, 0.556, 0.556],
      borderColor: "blue",
      backgroundColor: 'blue',
    },
    {
      label: "Texas Rangers",
      data:[0.438, 0.451, 0.444, 0.438, 0.549, 0.488, 0.494, 0.463, 0.488, 0.537, 0.556, 0.593, 0.574, 0.558, 0.414, 0.543, 0.586, 0.481, 0.414, 0.481, 0.367, 0.37, 0.42],
      borderColor: "pink",
      backgroundColor: 'pink',
    },
  ],
}


let canvasID1 = 'NL_West_WinRate_Transition';
let title_nl = 'NL West Winning Percentages of Each Team from 2000-2022';
drawChart(nl_west_data, canvasID1, title_nl);

let canvasID2 = 'AL_West_WinRate_Transition';
let title_al = 'AL West Winning Percentages of Each Team from 2000-2022';
drawChart(al_west_data, canvasID2, title_al);