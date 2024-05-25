import logo from "/public/images/Yu-Gi-Oh-logo.webp";

export default function MainLogo() {
  return (
    <>
      <img
        className="object-cover mx-auto block w-72 h-28 sm:w-[400px] sm:h-[143px]"
        src={logo}
        alt="yu-gi-oh logo"
      />
      <h1 className="mb-4 text-4xl font-extrabold leading-none sm:text-6xl   text-white select-none font-Belwe tracking-wider u-text-stroke">
        Duels Advisor
      </h1>
    </>
  );
}
