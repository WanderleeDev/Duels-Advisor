import { List, Card } from "antd";
import formatterCurrency from "../../../../utils/formatterCurrency";
import replaceText from "../../../../utils/replaceText";
import { ICardPrice } from "../../../../redux/models/cardDB.model";
import randomColor from "../../../../utils/randomColor";
import Section from "../../../../shared/containers/Section";
import { ICustomClass } from "../../../../shared/interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {
  card_prices: ICardPrice[];
  title?: string;
}

export default function ListCard({ card_prices, title, customClass }: Props) {
  const HeaderCard = ({ text }: { text: string }) => (
    <div
      className="p-4 font-medium rounded-t-lg text-lg capitalize"
      style={{ background: randomColor() }}
    >
      {replaceText(text, { searchValue: "_price" })}
    </div>
  );

  return (
    <Section
      levelTitle={3}
      title={title}
      customClass={customClass && customClass}
    >
      <List
        dataSource={card_prices}
        renderItem={(item) => (
          <div className="flex flex-wrap gap-4">
            {Object.entries(item).map(([key, value]) => (
              <List.Item className="grow shrink" key={key}>
                <Card
                  hoverable
                  cover={<HeaderCard text={key} />}
                  className="w-full text-center bg-white"
                >
                  <span className="first-letter:text-amber-500 first-letter:font-semibold first-letter:pr-2 block text-lg first-letter:text-base">
                    {formatterCurrency(Number(value))}
                  </span>
                </Card>
              </List.Item>
            ))}
          </div>
        )}
      />
    </Section>
  );
}
