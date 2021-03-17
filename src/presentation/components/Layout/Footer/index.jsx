import FooterStyles, { Store, StoreContainer } from "./styles";
import { Column } from "../../Grid/styles";
import AppStoreImage from "../../../../assets/Layout/appstore.svg";
import GooglePlayImage from "../../../../assets/Layout/googleplay.svg";

const Footer = () => (
  <FooterStyles>
    <Column>
      <StoreContainer>
        <Store src={AppStoreImage} alt="app-store" />
        <Store src={GooglePlayImage} alt="google-play" />
      </StoreContainer>
    </Column>
  </FooterStyles>
);

export default Footer;
