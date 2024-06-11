import { Typography } from "antd";
import { ICustomClass } from "../interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {
  title?: string;
  levelTitle: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}

export default function Section({
  customClass,
  title,
  children,
  levelTitle,
}: Props) {
  const { Title } = Typography;

  return (
    <section
      className={`grid gap-6 ${
        title ? "grid-rows-[auto_1fr]" : ""
      } ${customClass && customClass}`}
    >
      {title && <Title className="font-Belwe font-light" level={levelTitle}>{title}</Title>}
      <div>{children}</div>
    </section>
  );
}
