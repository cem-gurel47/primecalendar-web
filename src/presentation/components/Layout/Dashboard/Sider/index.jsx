import SiderStyles, { Menu, Item } from "./styles";
import { useHistory } from "react-router-dom";
import DashboardImage from "../../../../../assets/Layout/dashboard.svg";
import StatisticsImage from "../../../../../assets/Layout/statistics.svg";
import CalendarImage from "../../../../../assets/Layout/calendar.svg";
import SettingsImage from "../../../../../assets/Layout/settings.svg";
import LogoutImage from "../../../../../assets/Layout/logout.svg";
import { Text } from "../../../Typography/styles";
import { logout } from "../../../../../services/Redux/Auth/api";

//import { useState } from "react";

const Sider = () => {
  const history = useHistory();

  const items = [
    { key: "1", label: "Dashboard", url: "/dashboard", image: DashboardImage },
    {
      key: "2",
      label: "Calendar",
      url: "/dashboard/calendar",
      image: CalendarImage,
    },
    {
      key: "3",
      label: "Statistics",
      url: "/dashboard/statistics",
      image: StatisticsImage,
    },
    {
      key: "4",
      label: "Settings",
      url: "/dashboard/settings",
      image: SettingsImage,
    },
    {
      key: "5",
      label: "Logout",
      url: "/",
      image: LogoutImage,
      onClick: logout,
    },
  ];
  return (
    <SiderStyles collapsible>
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        {items.map(({ key, label, url, image, onClick }) => (
          <Item
            key={key}
            icon={<img src={image} alt="menu-icon" />}
            onClick={() => {
              if (onClick) {
                onClick();
              }
              history.push(url);
            }}
          >
            <Text color="grey">{label}</Text>
          </Item>
        ))}
      </Menu>
    </SiderStyles>
  );
};

export default Sider;
