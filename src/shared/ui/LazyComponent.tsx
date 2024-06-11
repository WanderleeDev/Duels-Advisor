import React from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Suspense } from "react";
import { SyncOutlined } from "@ant-design/icons";
interface Props {
  children: React.ReactNode;
}

function LazyComponent({ children }: Props) {
  const Loading = () => (
    <div className="flex justify-center items-center h-52">
      <SyncOutlined spin className="text-6xl text-blue-600" />
    </div>
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default LazyComponent;
