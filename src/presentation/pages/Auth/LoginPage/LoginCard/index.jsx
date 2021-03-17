import LoginCardStyles, {
  EmailInput,
  PasswordInput,
  Form,
  Text,
  CreateAccountText,
  Checkbox,
  LoginButton,
  Container,
  ForgotAccountText,
  LoginFailed,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  dummyEmail,
  dummyPassword,
  firstName,
  lastName,
} from "../../../../../dummyData";
import Provider from "../../Provider";
import { login } from "../../../../../services/Redux/Auth/api";

const LoginCard = () => {
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const tryLogin = (e) => {
    const { email, password } = e;

    if (email === dummyEmail && password === dummyPassword) {
      login({ firstName, lastName, email, rememberMe });
      history.push("/dashboard");
    } else {
      setShowErrorMessage(true);
    }
  };

  const { Item } = Form;
  return (
    <LoginCardStyles title={<Text weight="medium">Login</Text>}>
      <Form onFinish={tryLogin}>
        <Text>
          Don't have an account?{" "}
          <CreateAccountText onClick={() => history.push("/signup")}>
            Create One.
          </CreateAccountText>
        </Text>
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
          <PasswordInput placeholder="password" />
        </Item>
        {showErrorMessage ? (
          <LoginFailed message="Invalid Credentials" type="error" showIcon />
        ) : null}
        <Container>
          <Checkbox
            checked={rememberMe}
            onClick={() => setRememberMe(!rememberMe)}
          />
          <Text>Remember me</Text>
        </Container>
        <LoginButton htmlType="submit" type="primary">
          <Text color="white">Login</Text>
        </LoginButton>
        <Provider provider="Google" />
        <Provider provider="Facebook" />
      </Form>

      <ForgotAccountText size="13px">Forgot your password?</ForgotAccountText>
    </LoginCardStyles>
  );
};

export default LoginCard;
