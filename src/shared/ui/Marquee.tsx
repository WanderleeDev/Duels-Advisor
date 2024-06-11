import { ICustomClass } from "../interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {
  content: string[];
}

export default function Marquee({ content, customClass }: Props) {
  const contentMarquee = new Array(4).fill(content);
  const IconMarquee = () => <span className="drop-shadow-lg">⚠️</span>;

  return (
    <div
      className={`flex justify-between bg-yellow-500 overflow-hidden relative py-2 w-[100%] ${
        customClass && customClass
      }`}
    >
      {contentMarquee.map((text, i) => {
        return (
          <p
            key={i}
            className="will-change-transform flex items-center text-xl lg:text-4xl font-semibold uppercase whitespace-nowrap px-12 animate-marquee tracking-wide"
          >
            <IconMarquee />
            <span className="text-2xl lg:text-6xl px-2">
              {text[0]}
              <span className="text-slate-900 px-2">{text[1]}</span>
            </span>{" "}
            <IconMarquee />
          </p>
        );
      })}
    </div>
  );
}
