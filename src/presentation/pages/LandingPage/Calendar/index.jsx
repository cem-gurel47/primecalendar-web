import { SectionStyles, Title, Description, Image } from "../styles";
import { Container, Column } from "../../../components/Grid/styles";
import CalendarImage from "../../../../assets/LandingPage/calendar.svg";

const Calendar = () => (
  <SectionStyles>
    <Container>
      <Column xs={24} md={12} data-aos="flip-left" data-aos-duration="1000">
        <Image src={CalendarImage} alt="time-image" />
      </Column>
      <Column xs={24} md={12} data-aos="flip-right" data-aos-duration="1000">
        <Title weight="bold">ORGANIZE YOUR PLAN</Title>
        <Description size="noble-regular">
          Organize your day and don't worry about missing important events.
        </Description>
      </Column>
    </Container>
  </SectionStyles>
);

export default Calendar;
