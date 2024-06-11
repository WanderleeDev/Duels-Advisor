import LazyLoad from "react-lazyload";
import placeholderCard from "/public/images/others/placeholder-card.webp";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
}

export default function GridCard({ image, title }: Props) {
  const Placeholder = () => <img src={placeholderCard} alt={title} />;
  const [isViewInfo, setIsViewInfo] = useState(false);

  const handleMouseEnter = () => setIsViewInfo(true);

  const handleMouseLeave = () => setIsViewInfo(false);

  return (
    <div className="relative">
      <LazyLoad once={true} height={150} placeholder={<Placeholder />}>
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full object-cover"
          alt={title}
          src={image}
        />
      </LazyLoad>
      {isViewInfo && (
        <article className="absolute w-[300px] h-48 backdrop-blur-sm bg-black/30 border-white/90 border-2 bottom-0 rounded-md left-2/4 -translate-x-2/4 translate-y-2/4 animate-fade-in animate-duration-200 z-10"></article>
      )}
    </div>
  );
}
