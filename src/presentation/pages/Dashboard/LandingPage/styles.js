import styled from "styled-components";
import { Text } from "../../../components/Typography/styles";
import { Switch as switcher } from "antd";
import Card from "../../Auth/LoginPage/LoginCard/styles";
export default styled.div`
  background: ${({ theme }) => theme.dashboard.contentColor};
  padding: ${({ theme }) =>
    `${theme.paddingVertical} ${theme.paddingHorizontal}`};
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
`;

export const Title = styled(Text)`
  margin-bottom: 10px;
`;

export const Description = styled(Text)``;

export const ChartCard = styled(Card)`
  background: ${({ theme }) => theme.dashboard.backgroundPrimaryColor};
  box-shadow: ${({ theme }) => theme.shadow};
  border: none;
`;

export const Switch = styled(switcher)`
  margin-left: 10px;
  margin-right: 10px;
  background: #000 !important;
`;
