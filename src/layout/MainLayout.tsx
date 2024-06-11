import React, { Suspense } from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { FloatButton } from "antd";
// theme
import { Layout, Spin } from "antd";
import { Outlet } from "react-router-dom";
import DevStamp from "../pages/Home/components/DevStamp";
import ControlNavigation from "../shared/ui/ControlNavigation";
import MainTitle from "../shared/ui/MainTitle";
import MainMenu from "../shared/ui/MainMenu";

const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="w-20">
        <MainMenu />
      </div>
      <Layout>
        <Header className="grid grid-cols-[1fr_auto] bg-white items-center">
          <MainTitle customClass="col-[1/3] text-2xl sm:text-4xl lg:text-6xl row-[1/2] text-center" />
          <ControlNavigation customClass="col-[2/3] row-[1/2] hidden md:block" />
        </Header>
        <Content className="pt-8 mx-4 h-full overflow-y-scroll">
          <ErrorBoundary>
            <Suspense fallback={<Spin spinning fullscreen />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </Content>
        <FloatButton.BackTop type="primary" tooltip="scroll to top" />
        <footer className="bg-slate-800 py-4 flex justify-center">
          <DevStamp />
        </footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
