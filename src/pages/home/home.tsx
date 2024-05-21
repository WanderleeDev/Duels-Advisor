import { Banner } from "../../shared/ui/Banner";
import InfoLink from "../../shared/ui/InfoLink";
import logo from "../../assets/images/Yu-Gi-Oh-logo.webp";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="absolute z-10 top-7 left-2/4 -translate-x-2/4 w-full">
        <InfoLink />
      </div>
      <section className="bg-white dark:bg-gray-900 min-h-dvh grid place-content-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="animate-slide-up-fade animate-duration-800">
            <img
              className="object-cover mx-auto block"
              src={logo}
              alt="yu-gi-oh logo"
            />
            <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white select-none font-Belwe tracking-wider u-text-stroke">
              Duels Advisor
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200 select-none py-4">
              Card catalog, information, strategies and more, create your custom
              deck and get a tailor-made strategy
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </>
  );
}
