import { Link } from "react-router-dom";
import CardIrregular from "./components/CardIrregular";
import catalogBanner from "/public/images/others/catalog-banner.jpg";
import Marker from "../../shared/ui/Mark";
import logo from "/public/duelAdvisor.webp";
import deckBuilder from "../../../public/images/others/deck-builder.webp";
import versus from "../../../public/images/others/versus.jpg";
import builderIa from "../../../public/images/others/builder-ia.webp";
import SectionLayout from "../../layout/SectionLayout";

interface ISectionData {
  name: string;
  image: string;
  to: string;
}

export default function EntryPanel() {
  const sections: ISectionData[] = [
    {
      name: "Catalog",
      image: catalogBanner,
      to: "/advisor/catalog",
    },
    {
      name: "Advisor AI",
      image: builderIa,
      to: "/advisor/advisor-ai",
    },
    {
      name: "Duel Simulator",
      image: versus,
      to: "/advisor/duel-simulator",
    },
    {
      name: "My Deck",
      image: deckBuilder,
      to: "/advisor/my-deck",
    },
  ];

  return (
    <SectionLayout title="Duel Advisor">
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-[50%] u-custom-shadow p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 hidden xl:block">
        <Marker image={logo} width={80} height={80} />
      </div>
      <div className="grid sm:grid-cols-2 gap-16 md:gap-24 relative ">
        {sections.map(({ to, image, name }, i) => (
          <Link
            className="w-fit mx-auto hover:scale-105 active:scale-95 transition-transform rounded-lg overflow-hidden"
            to={to}
            key={i}
          >
            <CardIrregular
              customClass={
                i % 2 !== 0
                  ? "animate-fade-in-left after:border-t-2 after:border-r-2"
                  : "animate-fade-in-right after:border-l-2 after:border-b-2"
              }
              image={image}
              alt={`${name} image`}
              orientation={i % 2 !== 0 ? "left" : "right"}
            >
              {name}
            </CardIrregular>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}
