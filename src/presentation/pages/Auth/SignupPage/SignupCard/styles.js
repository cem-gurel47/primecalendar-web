import styled from "styled-components";
import { ClickableText } from "../../LoginPage/LoginCard/styles";
import { Input, Button } from "antd";

export const LoginText = styled(ClickableText)``;

export const FirstName = styled(Input)`
  margin-top: 10px;
  width: 50%;
`;

export const LastName = styled(Input)`
  width: 50%;
`;

export const EmailInput = styled(Input)`
  width: 100%;
`;

export const SignupButton = styled(Button)`
  height: 40px;
  width: 100%;
  margin-bottom: 15px;
`;
