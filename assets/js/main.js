$(function () {
  $("#navigation").load("../../component/sideNav.html");
});
$(function () {
  $("#header__right").load("../../component/topNav.html");
});
$(document).ready(function () {
  $("#content").css("display", "none");

  $("#content").fadeIn(2000);

  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("#content").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});

// #CHART
const ctx = document.getElementById("chart1");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          
          color: "rgb(0, 0, 0)",
          boxWidth: 50,
          boxHeight: 30,
          font: {
            size: 20
          }
        },
      },
    },
  },
});

const ctx2 = document.getElementById("chart2");
new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          
          color: "rgb(0, 0, 0)",
          boxWidth: 50,
          boxHeight: 30,
          font: {
            size: 20
          }
        },
      },
    },
  },
});

const ctx3 = document.getElementById("chart3");
new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          
          color: "rgb(0, 0, 0)",
          boxWidth: 50,
          boxHeight: 30,
          font: {
            size: 20
          }
        },
      },
    },
  },
});