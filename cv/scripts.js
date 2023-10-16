// Créez les données du graphique
        // Créez les données du graphique
    const data = {
      labels: ["Récolte et stockage de donnée", "Indicateurs et aide à la décision", "Développement projets et outils d'analyses", "Enseignement et partage de connaissance"],
      datasets: [
        {
          label: "Mes compétences",
          data: [9, 10, 6, 7, 5],
          fill: true,
          backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)'
              ]
        },
        /*{
          label: "Concurrente",
          data: [6, 8, 7, 9, 5],
          fill: true,
          backgroundColor: "rgb(255, 0, 0)",
          borderColor: "rgb(255, 0, 0)",
        },*/
      ],
    };

    // Créez le graphique
    const myChartSmall = new Chart(document.getElementById("myChartSmall"), {
      type: "polarArea",
      data,
      options: {
        scale: {
          
        },
      },
    });


// Créez une fonction pour créer un graphique en ligne
function createLineChart(data, options) {
  // Créez un objet graphique
  const myChart = new Chart(document.getElementById("myChartLine"), {
    type: "line",
    data,
    options,
  });
}

// Créez une fonction pour créer un graphique en barres
function createBarChart(data, options) {
  // Créez un objet graphique
  const myChart = new Chart(document.getElementById("myChartBar"), {
    type: "bar",
    data,
    options,
  });
}

// Créez les données du graphique en ligne
const lineData = {
  labels: ["2022-01-01", "2022-07-01", "2023-01-01"],
  datasets: [
    {
      label: "Salaire",
      data: [10000, 15000, 20000],
      fill: false,
      lineTension: 0.1,
    },
  ],
};

// Créez les options du graphique en ligne
const lineOptions = {
  scales: {
    x: {
      ticks: {
        stepSize: 1,
      },
    },
    y: {
      ticks: {
        stepSize: 5000,
      },
    },
  },
};

// Créez les données du graphique en barres
const barData = {
  labels: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  datasets: [
    {
      label: "Maîtrise",
      data: [10, 8, 9, 7, 6],
      fill: false,
      barPercentage: 1,
    },
  ],
};

// Créez les options du graphique en barres
const barOptions = {
  scales: {
    x: {
      ticks: {
        stepSize: 1,
      },
    },
    y: {
      ticks: {
        stepSize: 1,
      },
    },
  },
};

// Créez le graphique en ligne
createLineChart(lineData, lineOptions);

// Créez le graphique en barres
createBarChart(barData, barOptions);


