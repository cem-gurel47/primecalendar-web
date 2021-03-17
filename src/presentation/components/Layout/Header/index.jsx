import HeaderStyles, {
  LoginText,
  LogoText,
  Logo,
  LogoContainer,
  LogoColumn,
  LoginColumn,
} from "./styles";
import { useHistory } from "react-router-dom";
import PrimeCalendarLogo from "../../../../assets/Other/logo.png";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderStyles>
      <LogoColumn xs={24} md={18}>
        <LogoContainer onClick={() => history.push("/")}>
          <Logo src={PrimeCalendarLogo} alt="logo" />
          <LogoText size="title" color="white">
            PRIME CALENDAR
          </LogoText>
        </LogoContainer>
      </LogoColumn>
      <LoginColumn md={6} align="flex-end">
        <LoginText color="grey" onClick={() => history.push("/login")}>
          Login
        </LoginText>
      </LoginColumn>
    </HeaderStyles>
  );
};

export default Header;
