import styled from "styled-components";
import { Container } from "../../../../../components/Grid/styles";
import { CircularProgress } from "@material-ui/core";

export default styled(Container)`
  padding: 20px;
  align-items: center;
  background: ${({ theme }) => theme.dashboard.backgroundPrimaryColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  max-width: 220px;
  height: 122px;
`;

export const ProgressBar = styled(CircularProgress)`
  width: 75px !important;
  height: 75px !important;
  margin-right: 10px;
  color: ${({ theme }) => theme.primaryColor} !important;
`;

export const Img = styled.img`
  top: 45px;
  left: 70px;
  position: absolute;
  width: 40px;
  height: 40px;
`;
