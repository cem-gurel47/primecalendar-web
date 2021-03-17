import StatisticsPageStyles, {
  Title,
  Description,
} from "../LandingPage/styles";
import { Container, Column } from "../../../components/Grid/styles";

const StatisticsPage = () => (
  <StatisticsPageStyles>
    <Container>
      <Column span={24} align="start">
        <Title size="title" weight="bold" color="white">
          Statistics
        </Title>
        <Description color="grey">See detailed comparisons.</Description>
      </Column>
    </Container>
  </StatisticsPageStyles>
);

export default StatisticsPage;
