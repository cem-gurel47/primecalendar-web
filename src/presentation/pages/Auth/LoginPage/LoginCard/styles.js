import styled from "styled-components";
import {
  Card,
  Form as form,
  Input,
  Checkbox as checkbox,
  Button,
  Alert,
} from "antd";
import { Text as text } from "../../../../components/Typography/styles";

export default styled(Card)`
  width: 100%;
  max-width: 400px;
  padding-bottom: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};

  .ant-card-head {
    width: 100%;
    text-align: center;
  }

  .ant-card-body {
    padding: 10px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const EmailInput = styled(Input)`
  width: 100%;
  margin-top: 10px;
`;

export const PasswordInput = styled(Input.Password)`
  width: 100%;
`;

export const Form = styled(form)`
  padding: 12px;
  padding-bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-form-item {
    width: 100%;
  }
`;

export const Text = styled(text)``;

export const ClickableText = styled(text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CreateAccountText = styled(ClickableText)``;

export const Checkbox = styled(checkbox)`
  margin-right: 10px;
`;

export const LoginButton = styled(Button)`
  height: 40px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: -10px;
`;

export const ForgotAccountText = styled(ClickableText)``;

export const LoginFailed = styled(Alert)`
  width: 100%;
  margin-bottom: 20px;
  margin-top: -10px;
`;
