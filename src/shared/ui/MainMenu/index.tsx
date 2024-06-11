import { HomeFilled, PoweroffOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/interface";
import { NavLink, useNavigate } from "react-router-dom";
import getAvailableRoutes from "../../../utils/getAvailableRoutes";
import { Menu } from "antd";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import "./mainMenu.css";

export default function MainMenu() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  const isRegister = true;
  let items: ItemType[] = getAvailableRoutes().map((route) => ({
    label: route.replace("-", " "),
    key: `/advisor/${route}`,
    icon: (
      <NavLink to={`/advisor/${route}`}>
        <HomeFilled />
      </NavLink>
    ),
  }));

  if (isRegister) {
    items = [
      ...items,
      {
        label: "Signout",
        key: "signout",
        icon: <PoweroffOutlined />,
        danger: true,
      },
    ];
  }

  function handleCLickItemMenu(key: string): void {
    if (key !== "signout") return navigate(key);

    console.log("signout");
  }

  return (
    <Sider
      className="z-50 h-full"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        className="capitalize sticky top-0"
        defaultValue={"/advisor"}
        onClick={({ key }) => handleCLickItemMenu(key)}
        theme="dark"
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}
