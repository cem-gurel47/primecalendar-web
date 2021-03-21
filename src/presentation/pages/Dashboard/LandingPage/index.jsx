import DashboardLandingPageStyles, {
  Title,
  Description,
  ChartCard,
} from "./styles";
import { Container, Column } from "../../../components/Grid/styles";
import { Text } from "../../../components/Typography/styles";
import PieChart from "./Charts/Doughnut";
import Progress from "./Charts/Progress";
import Timer from "./Charts/Timer";
import { dummyTimerData } from "../../../../dummyData";

const DashboardLandingPage = () => (
  <DashboardLandingPageStyles>
    <Container gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      <Column span={24} align="start">
        <Title size="title" weight="bold" color="white">
          Dashboard
        </Title>
        <Description color="grey">
          General information about your plan.
        </Description>
      </Column>
      <Column span={12} xl={8} align="start">
        <ChartCard
          title={<Text color="white">Average By Type</Text>}
          data-aos="zoom-in"
        >
          <PieChart />
        </ChartCard>
      </Column>
      <Column
        span={12}
        xl={6}
        align="flex-start"
        data-aos="zoom-in"
        justify="space-between"
      >
        <Progress />
        <Timer finishDate={dummyTimerData} />
      </Column>
    </Container>
  </DashboardLandingPageStyles>
);

export default DashboardLandingPage;
