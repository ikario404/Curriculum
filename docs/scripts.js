// Créez les données du graphique
        // Créez les données du graphique
    const data = {
      labels: ["Qualité", "Rapidité", "Efficacité", "Coût", "Sécurité"],
      datasets: [
        {
          label: "Votre entreprise",
          data: [8, 7, 9, 6, 10],
          fill: true,
          backgroundColor: "rgb(0, 255, 0)",
          borderColor: "rgb(0, 255, 0)",
        },
        {
          label: "Concurrente",
          data: [6, 8, 7, 9, 5],
          fill: true,
          backgroundColor: "rgb(255, 0, 0)",
          borderColor: "rgb(255, 0, 0)",
        },
      ],
    };

    // Créez le graphique
    const myChartSmall = new Chart(document.getElementById("myChartSmall"), {
      type: "radar",
      data,
      options: {
        scale: {
          pointRadius: 1,
          lineTension: 0.1,
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




console.log("SNIIIIIIIIIIIIIIIIF");