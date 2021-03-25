import DashboardSettingsPageStyles, {
  Title,
  Description,
} from "../LandingPage/styles";
// import { Form, ProfilePicture } from "./styles";
// import { useState } from "react";
// import { UserOutlined } from "@ant-design/icons";
import { Container, Column } from "../../../components/Grid/styles";

const DashboardSettingsPage = () => {
  //const { Item } = Form;
  //const [photo, setPhoto] = useState(<UserOutlined />);

  return (
    <DashboardSettingsPageStyles>
      <Container>
        <Column span={24} align="start">
          <Title size="title" weight="bold" color="white">
            Settings
          </Title>
          <Description color="grey">Customize your profile.</Description>
        </Column>
        {/* <Column span={24} align="start">
          <Form>
            <Item>
              <ProfilePicture src={photo} alt="profile-photo" />
            </Item>
          </Form>
        </Column> */}
      </Container>
    </DashboardSettingsPageStyles>
  );
};

export default DashboardSettingsPage;
