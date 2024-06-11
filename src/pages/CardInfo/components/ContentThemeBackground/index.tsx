import { FrameType } from "../../types/Frame.enum";
import Section from "../../../../shared/containers/Section";
import { ICustomClass } from "../../../../shared/interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {
  children: React.ReactNode;
  type: string;
  title?: string;
}

export default function ContentThemeBackground({
  children,
  type,
  title,
  customClass,
}: Props) {
  const keys = Object.keys(FrameType);
  const color = keys.includes(type)
    ? FrameType[type as keyof typeof FrameType]
    : FrameType.empty;

  return (
    <Section
      customClass={customClass && customClass}
      title={title}
      levelTitle={3}
    >
      <div
        className={`rounded-md h-full p-4 text-pretty border-[.2rem] border-white/70  flex flex-col gap-3 ${color} text-slate-800 overflow-y-auto`}
      >
        {children}
      </div>
    </Section>
  );
}
