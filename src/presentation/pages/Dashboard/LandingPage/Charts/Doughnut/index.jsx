import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ data }) => (
  <Doughnut
    data={data}
    options={{
      responsiveAnimationDuration: 1000,

      legend: {
        display: true,
        position: "right",
      },
    }}
  ></Doughnut>
);

export default DoughnutChart;
