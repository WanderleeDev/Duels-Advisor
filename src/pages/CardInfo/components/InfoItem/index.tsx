import Marker from "../../../../shared/ui/Mark";

interface Props {
  subTitle: string;
  content: string;
  image: string;
}

export default function InfoItem({ content, subTitle, image }: Props) {
  return (
    <>
      {content !== 'undefined' && (
        <li
          key={subTitle}
          className="grid bg-black/50 backdrop-blur-sm rounded p-2 text-amber-300 text-base border-[.1rem] border-black/30 gap-2 grid-cols-[1fr_auto]"
        >
          <span className="capitalize font-semibold col-[1/2]">
            {subTitle}:
          </span>
          <div
            className={`col-[2/3] row-[1/3] self-center hover:scale-125 transition-transform duration-200 ${
              subTitle === "Type" && "bg-white"
            }`}
          >
            <Marker image={image} width={30} />
          </div>
          <span className="text-white font-semibold text-sm truncate block col-[1/2] row-[2/3]">
            {content}
          </span>
        </li>
      )}
    </>
  );
}
