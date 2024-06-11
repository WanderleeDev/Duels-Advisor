import LazyLoad from "react-lazyload";
import placeholder from "/public//images/others/placeholder-card.webp";
import { ICustomClass } from "../interfaces/ICustomClass.interface";

export interface IMarker extends ICustomClass {
  image: string;
  width: number;
  height: number;
  alt: string;
}

export default function Marker({
  image,
  height,
  width,
  alt,
  customClass,
}: Partial<IMarker>) {  
  
  return (
    <LazyLoad className="block" style={{width: width ?? 15}}>
      <img
        className={`block ${customClass ? customClass : ''}`}
        src={image ?? placeholder}
        width={width ?? 15}
        height={height}
        alt={alt ?? 'marker'}
      />
    </LazyLoad>
  );
}
