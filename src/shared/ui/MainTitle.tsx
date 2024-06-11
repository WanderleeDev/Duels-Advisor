import { ICustomClass } from "../interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {}

export default function MainTitle({ customClass }: Props) {
  return (
    <h1
      className={`mb-4 font-extrabold leading-none text-white select-none font-Belwe tracking-wider u-text-stroke ${
        customClass && customClass
      }`}
    >
      Duels Advisor
    </h1>
  );
}
