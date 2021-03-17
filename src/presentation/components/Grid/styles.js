import styled from "styled-components";
import { Row, Col } from "antd";

export const Container = styled(Row)`
  display: flex;
`;

export const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
`;
