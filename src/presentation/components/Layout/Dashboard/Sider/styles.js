import styled from "styled-components";
import { Layout, Menu as menu } from "antd";

export default styled(Layout.Sider)`
  background: ${({ theme }) => theme.dashboard.backgroundPrimaryColor};
  .ant-layout-sider-trigger {
    background: ${({ theme }) => theme.dashboard.backgroundPrimaryColor};
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: transparent;
  }
`;

export const Menu = styled(menu)`
  background: ${({ theme }) => theme.dashboard.backgroundPrimaryColor};
  border-right: 0px;
`;

export const Item = styled(menu.Item)`
  &:hover {
    background: ${({ theme }) => theme.dashboard.hoverColor};
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
