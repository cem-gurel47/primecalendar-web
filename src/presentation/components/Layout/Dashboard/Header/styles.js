import styled from "styled-components";
import HeaderStyles from "../../Header/styles";
import { Avatar } from "antd";

export default styled(HeaderStyles)`
  background: ${({ theme }) => theme.dashboard.backgroundPrimaryColor};
  border-bottom: 0px;
`;

export const ProfilePicture = styled(Avatar)`
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
