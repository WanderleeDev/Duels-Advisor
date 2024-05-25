import { useLoaderData } from "react-router-dom";
import GridCard from "../../layout/GridCard";

export default function Catalog() {
  const data = useLoaderData()
  console.log(data);
  
  const cards = Array<string>(100).fill("");

  return (
    <section className="overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4 u-scrollStyle pr-2">
      {cards.map((_, index) => (
        <GridCard key={index} />
      ))}
    </section>
  );
}
