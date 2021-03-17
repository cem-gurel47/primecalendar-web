import ProviderStyles from "./styles";
import Facebook from "../../../../assets/Other/Facebook.svg";
import Google from "../../../../assets/Other/google.svg";
import { Text } from "../../../components/Typography/styles";

const Provider = ({ provider }) => {
  let providerImage = Facebook;

  if (provider === "Google") {
    providerImage = Google;
  }
  return (
    <ProviderStyles>
      <img src={providerImage} alt="Facebook" />
      <Text>Continue with {provider}</Text>
    </ProviderStyles>
  );
};

export default Provider;
