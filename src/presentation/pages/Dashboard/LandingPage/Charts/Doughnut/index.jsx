import { Doughnut } from "react-chartjs-2";
import { data } from "../../../../../../dummyData";

const DoughnutChart = () => (
  <Doughnut
    data={data}
    options={{
      legend: {
        display: true,
        position: "right",
      },
    }}
  ></Doughnut>
);

export default DoughnutChart;
