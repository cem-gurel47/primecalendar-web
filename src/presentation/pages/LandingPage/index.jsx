import LandingPageStyles from "./styles";
import { Container } from "../../components/Grid/styles";
import BannerSection from "./BannerSection";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Notifications from "./Notifications";

const LandingPage = () => {
  return (
    <LandingPageStyles>
      <Container>
        <BannerSection />
      </Container>
      <Container>
        <Calendar />
      </Container>
      <Container>
        <Statistics />
      </Container>
      <Container>
        <Notifications />
      </Container>
    </LandingPageStyles>
  );
};

export default LandingPage;
