import MainTitle from "./MainTitle";
import logo from "/public/images/others/Yu-Gi-Oh-logo.webp";

export default function MainLogo() {
  return (
    <>
      <img
        className="object-cover mx-auto block w-72 h-28 sm:w-[400px] sm:h-[143px]"
        src={logo}
        alt="yu-gi-oh logo"
      />
      <MainTitle customClass="text-4xl sm:text-6xl" />
    </>
  );
}
