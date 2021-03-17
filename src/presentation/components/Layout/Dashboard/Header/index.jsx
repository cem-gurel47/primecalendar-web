import DashboardHeaderStyles, {
  ProfilePicture,
  ProfileContainer,
} from "./styles";
import { Column } from "../../../Grid/styles";
import { useHistory } from "react-router-dom";
import { LogoColumn, LogoText, Logo, LogoContainer } from "../../Header/styles";
import LogoImage from "../../../../../assets/Other/logo.png";
import { UserOutlined } from "@ant-design/icons";
import { Text } from "../../../Typography/styles";

const DashboardHeader = () => {
  const history = useHistory();
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));
  const name = localStorageUser
    ? localStorageUser.firstName + " " + localStorageUser.lastName
    : sessionStorageUser.firstName + " " + sessionStorageUser.lastName;

  return (
    <DashboardHeaderStyles>
      <LogoColumn md={18}>
        <LogoContainer onClick={() => history.push("/dashboard")}>
          <Logo src={LogoImage} alt="logo" />
          <LogoText size="title" color="white">
            PRIME CALENDAR
          </LogoText>
        </LogoContainer>
      </LogoColumn>
      <Column md={6} align="flex-end">
        <ProfileContainer>
          <Text color="white">{name}</Text>
          <ProfilePicture
            icon={<UserOutlined />}
            alt="profile-pic"
            shape="square"
          />
        </ProfileContainer>
      </Column>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
