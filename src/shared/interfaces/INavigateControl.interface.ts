import { ReactNode } from "react";

export interface INavigateControl {
  id: "left" | "right";
  icon: ReactNode;
  navigateTo: Direction;
}

export enum Direction {
  back = "back",
  forward = "forward",
}