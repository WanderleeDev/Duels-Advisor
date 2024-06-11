import { ICustomClass } from "../interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {
  header?: React.ReactNode;
  children: React.ReactNode;
}

export default function AutoGrid({ children, customClass, header }: Props) {
  return (
    <>
      {header && header}
      <div
        className={`grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-4 md:gap-12 overflow-y-scroll u-scrollStyle pr-2 overflow-x-hidden ${customClass}`}
      >
        {children}
      </div>
    </>
  );
}
