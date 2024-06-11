import { Typography } from "antd";
import Marker from "../../../../shared/ui/Mark";
import { ICustomClass } from "../../../../shared/interfaces/ICustomClass.interface";
import { getIcon, iconExists } from "../../../../utils/getIcon";
import replaceText from "../../../../utils/replaceText";
import { attributeIcons } from "../../../../shared/const/assets";
import { useEffect } from "react";

interface Props extends Partial<ICustomClass> {
  name: string;
  attribute?: string;
  level?: 1 | 2 | 5 | 3 | 4;
}

export default function PageTitle({
  name,
  customClass,
  attribute,
  level,
}: Props) {
  const { Title } = Typography;
  const formatterKeyAttribute = replaceText(attribute ?? "", {
    searchValue: " ",
    newValue: "_",
  });
  const iconSelected = getIcon(formatterKeyAttribute, attributeIcons);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header
      className={`flex gap-2 items-center w-full ${customClass && customClass}`}
    >
      <Marker
        customClass={
          iconExists(attribute, attributeIcons) ? "rounded-[50%]" : ""
        }
        image={iconSelected}
        height={40}
        width={40}
        alt={attribute}
      />
      <Title
        style={{ margin: 0, fontWeight: 300 }}
        className="font-Belwe"
        level={level || 2}
      >
        {name}
      </Title>
    </header>
  );
}
