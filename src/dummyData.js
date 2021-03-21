import moment from "moment";

export const dummyEmail = "test@test.com";
export const dummyPassword = "test1234";
export const firstName = "Tester";
export const lastName = "Test";

//charts

//Timer
export const dailyData = {
  dummyTimerData: moment().add(1, "day"),
  progress: 79,
  doughnut: {
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Study", "Sports", "Leisure", "Books", "Social Activity"],
  },
  distribution: {
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#2800B4",
          "#8190B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
          "#35000F",
          "#17924F",
        ],
        data: [12, 16, 8, 11, 5, 8, 12],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
};

export const weeklyData = {
  dummyTimerData: moment().add(7, "hours"),
  progress: 32,
  doughnut: {
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [15, 29, 70, 101, 56],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Study", "Sports", "Leisure", "Books", "Social Activity"],
  },
  distribution: {
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#fff0B4",
          "#2800B4",
          "#8190B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#fff14F",
          "#35000F",
          "#17924F",
        ],
        data: [10, 9, 12, 6, 8, 11, 12],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: dailyData.distribution.labels,
  },
};
