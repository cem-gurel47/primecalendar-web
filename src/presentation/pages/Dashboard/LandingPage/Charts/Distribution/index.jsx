import { Bar } from "react-chartjs-2";

const DoughnutChart = ({ data }) => (
  <Bar
    data={data}
    options={{
      responsiveAnimationDuration: 1000,
      legend: {
        display: false,
      },
    }}
  ></Bar>
);

export default DoughnutChart;
