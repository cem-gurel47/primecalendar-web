import { SectionStyles, Image, Title, Description } from "../styles";
import { Container, Column } from "../../../components/Grid/styles";
import NotificationsImage from "../../../../assets/LandingPage/notification.svg";

const Notifications = () => (
  <SectionStyles>
    <Container>
      <Column xs={24} md={12} data-aos="fade-left" data-aos-duration="1000">
        <Image src={NotificationsImage} alt="time-image" />
      </Column>
      <Column xs={24} md={12} data-aos="fade-right" data-aos-duration="1000">
        <Title weight="bold">GET NOTIFIED</Title>
        <Description size="noble-regular">
          Get notifications about your plans and don't miss anything.
        </Description>
      </Column>
    </Container>
  </SectionStyles>
);

export default Notifications;
