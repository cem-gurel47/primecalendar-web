import styled from "styled-components";
import { ProgressSpinner } from "primereact/progressspinner";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.fullHeight ? "100vh" : "200px")};
  width: 100%;
  background: ${({ theme, type }) =>
    type === "dashboard"
      ? theme.dashboard.backgroundPrimaryColor
      : theme.backgroundPrimaryColor};
`;

export default styled(ProgressSpinner)`
  @keyframes ui-progress-spinner-color {
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
`;
