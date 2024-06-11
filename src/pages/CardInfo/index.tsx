import { useLoaderData } from "react-router-dom";
import { IResCardDataById } from "../../redux/models/cardDB.model";
import ListCard from "./components/ListCard";
import Accordion from "./components/Accordion";
import ContentThemeBackground from "./components/ContentThemeBackground";
import CardImage from "./components/CardImage";
import BoxInfo from "./components/BoxInfo";
import { BoxInfoType } from "./types/BoxInfo.type";
import PendulumDescription from "./components/PendulumDescription";
import FormatterParagraph from "../../utils/formatterParagraph";
import PageTitle from "./components/PageTitle";

export default function CardInfo() {
  const { data } = useLoaderData() as IResCardDataById;
  const {
    desc,
    frameType,
    card_sets,
    card_prices,
    name,
    card_images,
    pend_desc,
    monster_desc,
    linkmarkers,
    ...args
  } = data[0];
  const boxInfoData: BoxInfoType = {
    ...args,
    frameType,
  };

  return (
    <section className="grid gap-6 lg:grid-cols-6 lg:gap-12">
      <PageTitle
        attribute={args.attribute ?? args.type}
        customClass="lg:col-[1/7] lg:row-[1/2]"
        name={name}
      />
      <CardImage
        customClass="lg:col-[1/3] lg:row-[2/3]"
        alt={name}
        image={card_images[0].image_url_cropped}
      />
      <ContentThemeBackground
        customClass=" xl:col-[1/3] xl:row-[3/4] h-fit"
        title="Description"
        type={frameType}
      >
        {monster_desc || pend_desc ? (
          <PendulumDescription
            monster_desc={monster_desc!}
            pend_desc={pend_desc!}
          />
        ) : (
          <FormatterParagraph paragraph={desc} />
        )}
      </ContentThemeBackground>
      <BoxInfo customClass="lg:col-[3/7] lg:row-[2/3]" data={boxInfoData} />
      {card_sets && (
        <Accordion
          customClass="xl:col-[3/7] xl:row-[3/4]"
          title="Sets"
          data={card_sets}
        />
      )}
      {card_prices && (
        <ListCard
          customClass="lg:col-[1/7] lg:row-[4/5]"
          card_prices={card_prices}
          title="Prices"
        />
      )}
    </section>
  );
}
