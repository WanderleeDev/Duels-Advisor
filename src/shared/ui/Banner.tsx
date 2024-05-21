import banner from "../../assets/svg/banner.svg";

export const Banner = () => (
  <div className="fixed inset-0">
    <img className="block h-full w-full object-cover" src={banner} alt="banner"></img>
  </div>
);
