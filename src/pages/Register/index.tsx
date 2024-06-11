import { Link } from "react-router-dom";
import SectionLayout from "../../layout/SectionLayout";
import FormRegister from "./components/FormRegister";

export default function Register() {
  return (
    <SectionLayout title="register">
      <p>
        Register in the app
        <Link to={"/advisor/account/login"}> Or already have an account</Link>
      </p>
      <FormRegister />
    </SectionLayout>
  );
}
