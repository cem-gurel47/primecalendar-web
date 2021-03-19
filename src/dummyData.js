import moment from "moment";

export const dummyEmail = "gurel.cem374@hotmail.com";
export const dummyPassword = "tilko2000";
export const firstName = "Cem";
export const lastName = "Gurel";

//charts
export const data = {
  datasets: [
    {
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
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
};

//Timer
export const dummyTimerData = moment().add(1, "week");
