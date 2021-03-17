import SignupCardStyles, {
  Form,
  Text,
  PasswordInput,
} from "../../LoginPage/LoginCard/styles";
import {
  LoginText,
  FirstName,
  LastName,
  SignupButton,
  EmailInput,
} from "./styles";
import { useHistory } from "react-router-dom";
import Provider from "../../Provider";

const SignupCard = () => {
  const history = useHistory();
  const { Item } = Form;
  return (
    <SignupCardStyles title={<Text weight="medium">Signup</Text>}>
      <Form>
        <Text>
          Already have an account?
          <LoginText onClick={() => history.push("/login")}> Login.</LoginText>
        </Text>
        <Item>
          <FirstName placeholder="First Name" />
          <LastName placeholder="Last Name" />
        </Item>
        <Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your e-mail!",
            },
          ]}
        >
          <EmailInput placeholder="E-mail" />
        </Item>
        <Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <PasswordInput placeholder="Password" />
        </Item>
        <Item
          name="password2"
          rules={[
            {
              required: true,
              message: "Please repeat your password!",
            },
          ]}
        >
          <PasswordInput placeholder="Password repeat" />
        </Item>
        <SignupButton type="primary">
          <Text color="white">Create Account</Text>
        </SignupButton>
        <Provider provider="Google" />
        <Provider provider="Facebook" />
      </Form>
    </SignupCardStyles>
  );
};

export default SignupCard;
