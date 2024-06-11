import { Typography } from "antd";
import { ICustomClass } from "../../../shared/interfaces/ICustomClass.interface";
import React from "react";

type Direction = "left" | "right";

interface Props extends Partial<ICustomClass> {
  image: string;
  alt: string;
  orientation: Direction;
  children: React.ReactNode;
}

export default function CardIrregular({
  image,
  alt,
  customClass,
  children,
  orientation,
}: Props) {
  const cardClass = `h-72 min-h-44 h-full  grid relative rounded-lg after:absolute after:size-20 after:lg:size-28 after:rotate-45 after:bg-white after:hidden after:md:block after:border-current after:top-2/4 after:-translate-y-2/4 after:rounded-lg w-fit border-2 border-current  ${customClass} ${
    orientation === "left"
      ? "after:-translate-x-[54%] after:left-0 after:u-clip-path-rt"
      : "after:translate-x-[54%] after:right-0 after:u-clip-path-lb"
  }`;
  const { Paragraph } = Typography;

  return (
    <div className={cardClass}>
        <img
          className=" w-60  md:w-[30rem] rounded-md object-cover object-center h-full block"
          src={image}
          alt={alt}
        />
      <div className=" col-[1/1] row-[1/1] inset-0  bg-gradient-to-t from-black/90 to-gray-100/10 transition-colors duration-300 absolute">
      <Paragraph
        className={`text-white grid place-content-center h-full self-end col-[1/1] px-4 row-[1/1] z-10 font-Belwe text-xl lg:text-3xl tracking-wider ${
          orientation === "left" ? "justify-self-end" : "justify-self-start"
        }`}
      >
        {children}
      </Paragraph>
      </div>
    </div>
  );
}
