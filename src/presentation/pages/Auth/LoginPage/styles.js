import styled from "styled-components";

export default styled.div`
  height: 100vh;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.paddingVertical} ${theme.paddingHorizontal}`};

  @media only screen and (max-width: 700px) {
    padding: ${({ theme }) =>
      `${theme.paddingVertical} ${theme.paddingHorizontalMobile}`};
  }
`;
