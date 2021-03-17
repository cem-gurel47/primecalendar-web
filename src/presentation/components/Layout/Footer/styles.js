import styled from "styled-components";
import { Container } from "../../Grid/styles";

export default styled(Container)`
  width: 100%;
  height: 130px;
  background: ${({ theme }) => theme.footerBackgroundColor};
  padding: ${({ theme }) =>
    `${theme.paddingVertical} ${theme.paddingHorizontal}`};
`;

export const Store = styled.img`
  cursor: pointer;
`;

export const StoreContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;
