import DevStamp from "./DevStamp";
import ListBasic from "./ListBasic";

export default function About() {
  const mainTools = ["react", "tailwindcss", "typescript"];
  const otherTools = ["redux", "react hook form", "react router-dom", "vite"];

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
