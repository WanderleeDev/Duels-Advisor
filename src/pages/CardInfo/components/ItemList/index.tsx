import Marker from "../../../../shared/ui/Mark";
import replaceText from "../../../../utils/replaceText";
import placeholderCard from "/public/images/others/placeholder-card.webp";

interface Props {
  text: string;
  children: React.ReactNode;
  customClass?: string;
}

export default function ItemList({ text, children, customClass }: Props) {
  return (
    <div className={`flex gap-2 ${customClass}`}>
      <div className="flex gap-1 items-center">
        <Marker image={placeholderCard} />
        <strong className="capitalize">
          {replaceText(replaceText(text, { searchValue: "set_" }), {
            searchValue: "_",
          })}
          :{" "}
        </strong>
      </div>
      {children}
    </div>
  );
}
