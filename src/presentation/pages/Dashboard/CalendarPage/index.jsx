import CalendarPageStyles, { Title, Description } from "../LandingPage/styles";
import { Container, Column } from "../../../components/Grid/styles";

const CalendarPage = () => (
  <CalendarPageStyles>
    <Container>
      <Column span={24} align="start">
        <Title size="title" weight="bold" color="white">
          Calendar
        </Title>
        <Description color="grey">
          Create and manage your plan here.
        </Description>
      </Column>
    </Container>
  </CalendarPageStyles>
);

export default CalendarPage;
