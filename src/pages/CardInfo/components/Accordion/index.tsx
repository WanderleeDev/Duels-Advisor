import { Space, Collapse, CollapseProps, Tag } from "antd";
import Section from "../../../../shared/containers/Section";
import { ICardSet } from "../../../../redux/models/cardDB.model";
import ItemList from "../ItemList";
import { ICustomClass } from "../../../../shared/interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {
  title?: string;
  data: ICardSet[];
}

export default function Accordion({ title, customClass, data }: Props) {
  const accordionData: CollapseProps["items"] = data?.map((card, i) => ({
    key: `${card.set_code}${i}`,
    label: card.set_name,
    children: Object.entries(card).map(([key, value], i) => (
      <ItemList key={value + i} text={key}>
        {i === 3 ? <Tag color="orange">{value}</Tag> : value}
      </ItemList>
    )),
  }));

  return (
    <Section customClass={customClass && customClass} title={title} levelTitle={3}>
      <Space className="grid gap-4 truncate" direction="horizontal">
        <Collapse
          className="grid gap-x-20 lg:grid-cols-2"
          size="large"
          items={accordionData}
          collapsible="header"
        />
      </Space>
    </Section>
  );
}
