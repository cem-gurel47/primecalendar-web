import DashboardSettingsPageStyles, {
  Title,
  Description,
} from "../LandingPage/styles";
import { Container, Column } from "../../../components/Grid/styles";

const DashboardSettingsPage = () => (
  <DashboardSettingsPageStyles>
    <Container>
      <Column span={24} align="start">
        <Title size="title" weight="bold" color="white">
          Settings
        </Title>
        <Description color="grey">Customize your profile</Description>
      </Column>
    </Container>
  </DashboardSettingsPageStyles>
);

export default DashboardSettingsPage;
