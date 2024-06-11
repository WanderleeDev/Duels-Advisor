import Marquee from "../../shared/ui/Marquee";

export default function DuelSimulator() {
  const contentMarque = ["coming", "soon!"];
  const classNameMarquees = [
    "rotate-[45deg] shadow",
    "rotate-[205deg]",
    "rotate-[20deg] translate-y-32",
    "rotate-[270deg]",
    "rotate-[340deg]",
    "rotate-[340deg] -translate-y-[30rem]",
  ];
  return (
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-black to-slate-800">
      <div className="grid place-content-center place-items-center select-none h-screen gap-8 overflow-hidden">
        {
          classNameMarquees.map((marquee, i) => (
            <div key={i} className={marquee}>
              <Marquee content={contentMarque} />
            </div>
          ))
        }
      </div>
    </div>
  );
}
