import styled from "styled-components";
import { Container } from "../../Grid/styles";
import { Text } from "../../Typography/styles";
import { between } from "polished";
import { Column } from "../../Grid/styles";

export default styled(Container)`
  height: ${({ theme }) =>
    between(theme.headerHeightMin, theme.headerHeightMax)};
  display: flex;
  background: ${({ theme }) => theme.backgroundPrimaryColor};
  padding-left: ${({ theme }) => theme.paddingHorizontal};
  padding-right: ${({ theme }) => theme.paddingHorizontal};
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor}`};
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export const LogoText = styled(Text)``;

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LoginText = styled(Text)`
  cursor: pointer;
  &:hover {
    color: #fff !important;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const LogoColumn = styled(Column)`
  align-items: start;
  @media only screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const LoginColumn = styled(Column)`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
