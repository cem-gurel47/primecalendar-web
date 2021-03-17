import { SectionStyles, Image } from "../../pages/LandingPage/styles";
import { Container, Column } from "../../components/Grid/styles";
import ErrorImage from "../../../assets/Other/error.svg";

const ErrorPage = () => (
  <SectionStyles>
    <Container data-aos="zoom-up" data-aos-duration="1000">
      <Column span={24}>
        <Image src={ErrorImage} alt="error-image" />
      </Column>
    </Container>
  </SectionStyles>
);

export default ErrorPage;
