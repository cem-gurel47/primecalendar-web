import styled from "styled-components";
import { between } from "polished";
import { Button as button } from "antd";

export const Button = styled(button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${between("10px", "20px")};
  height: 45px;
  width: 120px;
`;

export const ScrollImage = styled.img`
  width: 30px;
  height: 40px;
  margin-bottom: 10px;
`;
