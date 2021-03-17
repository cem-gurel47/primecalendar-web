import { Container, Column } from "../../../components/Grid/styles";
import { SectionStyles, Title, Description, Image } from "../styles";
import { Button, ScrollImage } from "./styles";
import { useHistory } from "react-router-dom";
import TimeImage from "../../../../assets/LandingPage/landing-page.svg";
import Scroll from "../../../../assets/LandingPage/scroll.svg";

const BannerSection = () => {
  const history = useHistory();
  return (
    <SectionStyles colorful>
      <Container>
        <Column
          xs={24}
          md={12}
          align="start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Title weight="bold" color="white">
            PRIME CALENDAR
          </Title>
          <Description color="white" size="noble-regular">
            Manage your time like a pro.
          </Description>
          <Button type="primary" onClick={() => history.push("/signup")}>
            Start
          </Button>
        </Column>
        <Column xs={24} md={12} data-aos="fade-left" data-aos-duration="1000">
          <Image src={TimeImage} alt="time-image" />
        </Column>
        <Column span={24} data-aos="zoom-up" data-aos-duration="1000">
          <ScrollImage src={Scroll} alt="scroll-image" />
          <Description color="white">Scroll down to explore.</Description>
        </Column>
      </Container>
    </SectionStyles>
  );
};

export default BannerSection;
