import SectionLayout from "../../layout/SectionLayout";
import Login from "./components/Login";
import banner from "../../../public/images/others/banner-monster.webp";

export default function Account() {
  return (
    <SectionLayout title="login" levelTitle={2}>
      <div className="grid place-content-center">
      <div className="absolute h-full w-full after:absolute after:inset-0 after:h-full after:rounded-md after:bg-black/50 backdrop-blur-xl">
        <img
          className="w-full object-cover rounded-md h-full object-center"
          src={banner}
          alt=""
        />
      </div>
      <Login />
      </div>
    </SectionLayout>
  );
}
