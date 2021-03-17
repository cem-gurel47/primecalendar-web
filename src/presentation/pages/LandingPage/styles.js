import styled from "styled-components";
import { between } from "polished";
import { Text } from "../../components/Typography/styles";

export default styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const SectionStyles = styled.div`
  width: 100%;
  background: ${({ theme, colorful }) =>
    colorful ? theme.backgroundPrimaryColor : "#fff"};
  padding: ${({ theme }) =>
    `${theme.paddingVertical} ${theme.paddingHorizontal}`};
  height: 100%;
`;

export const Image = styled.img`
  @media only screen and (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
  max-width: 800px;
  max-height: 800px;
`;

export const Title = styled(Text)`
  font-size: ${between("21px", "32px")} !important;
  text-align: center;
`;

export const Description = styled(Text)`
  text-align: center;
  font-size: ${between("14px", "18px")} !important;
`;
