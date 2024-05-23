import CardAnimated from "./CardAnimated";

export default function Loader() {
  return (
    <section className="grid place-content-center bg-stone-800 gap-12 min-h-dvh w-full">
      <CardAnimated />
      <h1 className="font-Belwe text-white text-3xl font-medium text-center">
        Loading ...
      </h1>
    </section>
  );
}
