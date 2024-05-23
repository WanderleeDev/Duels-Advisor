import React, { Suspense, useState } from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import type { MenuProps } from "antd";
// theme
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import getAvailableRoutes from "../utils/getAvailableRoutes";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const itemss: MenuItem[] = getAvailableRoutes().map((route) =>
  getItem(route.replace("-", " "), route)
);

// const items: MenuItem[] = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer, borderRadiusLG }
  // } = theme.useToken()

  function navigateTo(key: string): void {
    navigate(key);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="capitalize"
          onClick={({ key }) => navigateTo(key)}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={itemss}
        />
      </Sider>
      <Layout>
        <Header className="bg-white text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white select-none font-Belwe tracking-wider u-text-stroke text-center">
          Duels Advisor
        </Header>
        <Content className="pt-8 mx-4">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <ErrorBoundary>
              <Suspense fallback="CARGANDO ...">
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </div>
        </Content>
        <Footer className="text-center">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
