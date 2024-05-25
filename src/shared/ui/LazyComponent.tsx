import React from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Suspense } from "react";

interface Props {
  routeComponent: string;
}

function LazyComponent({ routeComponent }: Props) {
  const Componente = React.lazy(() => import(routeComponent));
  return (
    <ErrorBoundary>
      <Suspense fallback={"Cargando..."}>
        <Componente />
      </Suspense>
    </ErrorBoundary>
  );
}

export default LazyComponent;
