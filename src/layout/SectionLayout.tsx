import { ICustomClass } from "../shared/interfaces/ICustomClass.interface";
import CustomTitle from "../shared/ui/CustomTitle";

interface Props extends Partial<ICustomClass> {
  title: string;
  children: React.ReactNode;
  levelTitle?: 1 | 2 | 3 | 4 | 5;
}

export default function SectionLayout({
  children,
  title,
  levelTitle,
  customClass,
}: Props) {
  return (
    <section className={`${customClass ? customClass : 'bg-white'} h-full p-4 md:p-6 rounded-lg shadow-2xl grid gap-8 grid-rows-[auto_1fr]`}>
      <CustomTitle
        customClass={"rotate-[5deg]"}
        width={30}
        title={title}
        levelTitle={levelTitle}
        hasDivider={true}
        dashed={false}
      />
      <div className="relative h-full grid gap-16 ">{children}</div>
    </section>
  );
}
