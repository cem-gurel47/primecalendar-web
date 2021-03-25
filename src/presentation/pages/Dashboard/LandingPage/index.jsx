import { useState } from "react";
import DashboardLandingPageStyles, {
  Title,
  Description,
  ChartCard,
  Switch,
} from "./styles";
import { Container, Column } from "../../../components/Grid/styles";
import { Text } from "../../../components/Typography/styles";
import Distribution from "./Charts/Distribution";
import Doughnut from "./Charts/Doughnut";
import Progress from "./Charts/Progress";
import Timer from "./Charts/Timer";
import Event from "./Charts/Event";
import {
  dailyData,
  weeklyData,
  eventOne,
  eventTwo,
  eventThree,
} from "../../../../dummyData";

const DashboardLandingPage = () => {
  const [data, setData] = useState(dailyData);

  return (
    <DashboardLandingPageStyles>
      <Container gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Column span={12} align="start">
          <Title size="title" weight="bold" color="white">
            Dashboard
          </Title>
          <Description color="grey">
            General information about your plan.
          </Description>
        </Column>
        <Column span={12} align="flex-end">
          <Container>
            <Text color={data !== dailyData ? "white" : "grey"}>Weekly</Text>
            <Switch
              checked={data === dailyData}
              onClick={() =>
                setData(data === dailyData ? weeklyData : dailyData)
              }
            />
            <Text color={data === dailyData ? "white" : "grey"}>Daily</Text>
          </Container>
        </Column>
        <Column span={12} xl={8} align="start" data-aos="zoom-in">
          <Event status={1} event={eventOne} />
        </Column>
        <Column span={12} xl={8} align="start" data-aos="zoom-in">
          <Event status={2} event={eventTwo} />
        </Column>
        <Column span={12} xl={8} align="start" data-aos="zoom-in">
          <Event status={3} event={eventThree} />
        </Column>
        <Column span={12} xl={9} align="start">
          <ChartCard
            title={<Text color="white">Average By Type</Text>}
            data-aos="zoom-in"
          >
            <Doughnut data={data.doughnut} />
          </ChartCard>
        </Column>
        <Column span={12} xl={9} align="start">
          <ChartCard
            title={<Text color="white">Distribution</Text>}
            data-aos="zoom-in"
          >
            <Distribution data={data.distribution} />
          </ChartCard>
        </Column>
        <Column
          span={12}
          xl={6}
          align="flex-end"
          data-aos="zoom-in"
          justify="space-between"
        >
          <Progress value={data.progress} />
          <Timer finishDate={data.dummyTimerData} />
        </Column>
      </Container>
    </DashboardLandingPageStyles>
  );
};

export default DashboardLandingPage;
