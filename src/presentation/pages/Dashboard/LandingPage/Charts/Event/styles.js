import styled from "styled-components";
import { Column } from "../../../../../components/Grid/styles";
import { Text as text } from "../../../../../components/Typography/styles";

export default styled(Column)`
  padding: ${({ theme }) => theme.cardPadding};
  height: 130px;
  width: 100%;
  background: ${({ theme }) => theme.dashboard.backgroundPrimaryColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Title = styled(text)`
  margin-bottom: 10px;
`;

export const Text = styled(text)``;

export const Img = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 10px;
`;
