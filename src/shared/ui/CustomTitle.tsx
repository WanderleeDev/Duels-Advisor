import { Divider, Typography } from "antd";
import Marker, { IMarker } from "./Mark";
import { IDivider } from "../interfaces/IDivider.interface";

interface Props extends Partial<IMarker>, Partial<IDivider> {
  title: string;
  levelTitle?: 1 | 2 | 5 | 3 | 4;
  hasDivider?: boolean;
}

export default function CustomTitle({
  title,
  hasDivider,
  levelTitle,
  ...marker
}: Props) {
  const { Title } = Typography;
  const { alt, customClass, height, image, width, ...divider } = marker;
  const { classNameDivider, dashed, orientation } = divider;
  const BasicTitle = (): JSX.Element => (
    <div className="grid gap-2 items-center grid-cols-[auto_1fr]">
      <Marker
        customClass={customClass}
        width={width}
        alt={alt}
        height={height}
        image={image}
      />
      <Title
        className="animate-slide-in-left font-Belwe capitalize"
        style={{ margin: "0", fontWeight: "100" }}
        level={levelTitle ?? 2}
      >
        {title}
      </Title>
    </div>
  );

  if (!hasDivider) return <BasicTitle />;

  return (
    <Divider
      className={classNameDivider}
      orientation={orientation ?? "left"}
      orientationMargin="0"
      dashed={dashed ?? false}
      style={{ border: "#9e9e9d" }}
    >
      <BasicTitle />
    </Divider>
  );
}
