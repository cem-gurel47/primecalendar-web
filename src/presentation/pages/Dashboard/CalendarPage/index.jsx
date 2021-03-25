import CalendarPageStyles, {
  Title,
  Description,
  Switch,
} from "../LandingPage/styles";
import { Container, Column } from "../../../components/Grid/styles";
import { Text } from "../../../components/Typography/styles";
import { useState } from "react";
import WeeklyCalendar from "./WeeklyCalendar";
import DailyCalendar from "./DailyCalendar";

const CalendarPage = () => {
  const [showDailyCalendar, setShowDailyCalendar] = useState(true);

  return (
    <CalendarPageStyles>
      <Container>
        <Column span={12} align="start">
          <Title size="title" weight="bold" color="white">
            Calendar
          </Title>
          <Description color="grey">
            Create and manage your plan here.
          </Description>
        </Column>
        <Column span={12} align="flex-end">
          <Container>
            <Text color={!showDailyCalendar ? "white" : "grey"}>Weekly</Text>
            <Switch
              checked={showDailyCalendar}
              onClick={() => setShowDailyCalendar(!showDailyCalendar)}
            />
            <Text color={showDailyCalendar ? "white" : "grey"}>Daily</Text>
          </Container>
        </Column>
        <Column span={24}>
          {showDailyCalendar ? <DailyCalendar /> : <WeeklyCalendar />}
        </Column>
      </Container>
    </CalendarPageStyles>
  );
};

export default CalendarPage;
