import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { router } from "./routes/routes";
import Loader from "./shared/ui/Loader";

export default function App() {
  const font = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
  
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#f77c51",
          borderRadius: 2,
          fontFamily: font,

          // Alias Token
          colorBgContainer: "#f9ede9",
        },
      }}
    >
      <Provider store={store}>
        <ErrorBoundary message="Error">
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </Provider>
    </ConfigProvider>
  );
}
