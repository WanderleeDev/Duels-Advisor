import React from "react";
import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import accountRouter from "./account.routes";
import catalogRouter from "./catalog.routes";

const LazyMyDeck = React.lazy(() => import("../pages/MyDeck"));
const LazyDuelSimulator = React.lazy(() => import("../pages/DuelSimulator"));
const LazyConfigPage = React.lazy(() => import("../pages/ConfigPage"));
const LazyAdvisorAI = React.lazy(() => import("../pages/AdvisorAI"));
const LazyEntryPanel = React.lazy(() => import("../pages/EntryPanel"));
const LazyNotFound = React.lazy(() => import("../pages/NotFound"));

const advisorRouter: RouteObject[] = [
  {
    path: "/advisor",
    element: <Navigate to={"/advisor/main-room"} replace={true} />,
  },
  {
    path: "/advisor/main-room",
    element: <LazyEntryPanel />,
    id: "main-room",
  },
  {
    path: "/advisor/catalog",
    children: catalogRouter,
    id: "catalog",
  },
  {
    path: "/advisor/config",
    element: <LazyConfigPage />,
    id: "config",
  },
  {
    path: "/advisor/advisor-ai",
    element: <LazyAdvisorAI />,
    id: "advisor-ai",
  },
  {
    path: "/advisor/account",
    id: "account",
    children: accountRouter,
  },
  {
    path: "/advisor/duel-simulator",
    element: <LazyDuelSimulator />,
    id: "duel-simulator",
  },
  {
    path: "/advisor/my-deck",
    element: <LazyMyDeck />,
    id: "my-deck",
  },
  {
    path: "*",
    element: <LazyNotFound />,
  },
];

export default advisorRouter;

// {
//   path: "/advisor/catalog",
//   element: <LazyCatalog />,
//   id: "catalog",
//   loader: async () => {
//     const res = await fetch(
//       "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0"
//     );
//     if (!res.ok) return res;

//     return (await res.json()) as IResCardData;
//   },
// },
// {
//   path: "/advisor/catalog/:id",
//   element: <LazyCardInfo />,
//   id: "catalog-card",
//   loader: async ({ params }) => {
//     let urlParams = new URLSearchParams();
//     if (!params.id) {
//       return new Error("No id provided");
//     }

//     urlParams.set("id", params.id);
//     const res = await fetch(
//       `${
//         import.meta.env.VITE_YUGIOH_API
//       }/cardinfo.php?${urlParams.toString()}`
//     );
//     if (!res.ok) return res.statusText;

//     return (await res.json()) as IResCardDataById;
//   },
// },
