import { Tooltip } from "antd";

interface Props {
  title?: string;
  list: string[];
}

export default function ListBasic({ list, title }: Props) {
  return (
    <div>
      {title && <h3 className="font-semibold">{title}</h3>}
      <ul className="flex gap-4 py-2 items-center flex-wrap">
        {list.map((item) => (
          <li key={item}>
            <Tooltip title={item} placement="bottom">
              <img
                className="size-8 aspect-square"
                src={`/public/images/technologies/${item.replaceAll(
                  " ",
                  "-"
                )}.svg`}
                alt={item}
              />
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}