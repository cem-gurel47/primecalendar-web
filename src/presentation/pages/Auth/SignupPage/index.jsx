import SignupPageStyles from "../LoginPage/styles";
import { Image } from "../../LandingPage/styles";
import { Container, Column } from "../../../components/Grid/styles";
import SignupImage from "../../../../assets/Auth/signup-page.svg";
import SignupCard from "./SignupCard";

const SignupPage = () => (
  <SignupPageStyles>
    <Container>
      <Column md={12} data-aos="fade-right">
        <Image src={SignupImage} alt="signup-page" />
      </Column>
      <Column xs={24} md={12} data-aos="fade-left">
        <SignupCard />
      </Column>
    </Container>
  </SignupPageStyles>
);

export default SignupPage;
