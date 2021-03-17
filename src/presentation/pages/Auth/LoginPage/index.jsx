import LoginPageStyles from "./styles";
import { Image } from "../../LandingPage/styles";
import { Container, Column } from "../../../components/Grid/styles";
import LoginImage from "../../../../assets/Auth/login-page.svg";
import LoginCard from "./LoginCard";

const LoginPage = () => {
  return (
    <LoginPageStyles>
      <Container>
        <Column md={12} data-aos="fade-right">
          <Image src={LoginImage} alt="login-image" />
        </Column>
        <Column xs={24} md={12} data-aos="fade-left">
          <LoginCard />
        </Column>
      </Container>
    </LoginPageStyles>
  );
};

export default LoginPage;
