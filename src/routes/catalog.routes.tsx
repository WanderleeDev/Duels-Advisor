import { RouteObject } from "react-router-dom";
import { IResCardData, IResCardDataById } from "../redux/models/cardDB.model";
import React from "react";

const LazyCatalog = React.lazy(() => import("../pages/Catalog"));
const LazyCardInfo = React.lazy(() => import("../pages/CardInfo"));

export const catalogRouter: RouteObject[] = [
  {
    path: "",
    index:true,
    element: <LazyCatalog />,
    id: "gallery",
    loader: async () => {
      const res = await fetch(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0"
      );
      if (!res.ok) return res;

      return (await res.json()) as IResCardData;
    },
  },
  {
    path: "/advisor/catalog/:id",
    element: <LazyCardInfo />,
    id: "catalog-card",
    loader: async ({ params }) => {
      let urlParams = new URLSearchParams();
      if (!params.id) {
        return new Error("No id provided");
      }

      urlParams.set("id", params.id);
      const res = await fetch(
        `${
          import.meta.env.VITE_YUGIOH_API
        }/cardinfo.php?${urlParams.toString()}`
      );
      if (!res.ok) return res.statusText;

      return (await res.json()) as IResCardDataById;
    },
  },
];

export default catalogRouter;
