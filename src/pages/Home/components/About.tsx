import DevStamp from "./DevStamp";
import ListBasic from "./ListBasic";
import { IDataItem } from "../interfaces/IListBasic.interface";
import react from "/public/images/technologies/react.svg";
import typescript from "/public/images/technologies/typescript.svg";
import tailwindcss from "/public/images/technologies/tailwindcss.svg";
import redux from "/public/images/technologies/redux.svg";
import hookForm from "/public/images/technologies/react-hook-form.svg";
import routerDom from "/public/images/technologies/react-router-dom.svg";
import vite from "/public/images/technologies/vite.svg";

export default function About() {
  const mainTools: IDataItem[] = [
    { text: "react", icon: react },
    { text: "typescript", icon: typescript },
    { text: "tailwindcss", icon: tailwindcss },
  ];
  const otherTools: IDataItem[] = [
    { text: "redux", icon: redux },
    { text: "react hook form", icon: hookForm },
    { text: "react router-dom", icon: routerDom },
    { text: "vite", icon: vite },
  ];

  return (
    <article className="grid gap-4">
      <h2 className="font-semibold">Duels Advisor</h2>
      <p>
        Project carried out with the aim of putting into practice what has been
        learned in
        <a
          className="underline px-1 text-blue-500 font-semibold inline-block"
          href="https://www.coursera.org/professional-certificates/meta-front-end-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coursera
        </a>
        for the react developer course and based on a previous project with a
        similar theme
        <a
          className="underline px-1 text-blue-500 font-semibold"
          href="https://prototype-card-view.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          (previous version)
        </a>
      </p>
      <ListBasic title="Technologies Used" list={mainTools} />
      <ListBasic title="Complementary technologies" list={otherTools} />
      <div className="bg-slate-800 py-4 rounded-md flex justify-center">
        <DevStamp />
      </div>
    </article>
  );
}
