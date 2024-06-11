import { BoxInfoType } from "../../types/BoxInfo.type";
import ContentThemeBackground from "../ContentThemeBackground";
import { ICustomClass } from "../../../../shared/interfaces/ICustomClass.interface";
import { getIcon } from "../../../../utils/getIcon";
import {
  cardTypeIcons,
  monsterTypeIcon,
  extraIcons,
  attributeIcons,
} from "../../../../shared/const/assets";
import InfoItem from "../InfoItem";

interface Props extends Partial<ICustomClass> {
  data: BoxInfoType;
  title?: string;
}

export default function BoxInfo({ data, customClass }: Props) {
  const {
    ygoprodeck_url,
    frameType,
    banlist_info,
    linkmarkers,
    id,
    type,
    atk,
    def,
    level,
    scale,
    linkval,
    ...args
  } = data;

  const basicData = { atk, def, level, scale, linkval };
  const basicData2 = {
    ...monsterTypeIcon,
    ...attributeIcons,
  };

  function filterIcon(icon: string, icons: Record<string, string>): string {
    if ((frameType === "spell" || frameType === "trap") && icon === "Normal") {
      return getIcon(`${icon}c`, icons);
    }

    if (frameType === "spell" && icon === "Ritual") {
      return getIcon(`${icon}c`, icons);
    }

    return getIcon(icon, icons);
  }

  return (
    <ContentThemeBackground customClass={customClass && customClass} type="">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InfoItem
          subTitle={"Type"}
          content={String(type)}
          image={getIcon(frameType, cardTypeIcons)}
        />
        {Object.entries(basicData).map(([key, value]) => (
          <>
            <InfoItem
              key={key}
              subTitle={key}
              content={String(value)}
              image={getIcon(key, extraIcons)}
            />
          </>
        ))}
        {Object.entries(args).map(([key, value]) => (
          <>
            <InfoItem
              key={key}
              subTitle={key}
              content={String(value)}
              image={filterIcon(String(value), basicData2)}
            />
          </>
        ))}
      </ul>
    </ContentThemeBackground>
  );
}
