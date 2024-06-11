import { Image } from "antd";
import placeholderCard from "/public/images/others/placeholder-card.webp";
import { ICustomClass } from "../../../../shared/interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {
  image: string;
  alt: string;
}

export default function CardImage({ image, alt, customClass }: Props) {
  return (
    <div
      className={`mx-auto size-32 xs:size-44 sm:size-60 xl:size-80 ${
        customClass && customClass
      }`}
    >
      <Image
        className="border-[#475e6b] border-[.3rem] u-custom-shadow rounded-md bg-gray-400 block mx-auto aspect-square"
        fallback={placeholderCard}
        alt={alt}
        src={image}
      />
    </div>
  );
}
