import { Tooltip } from "antd";
import { IListBasic } from "../interfaces/IListBasic.interface";

export default function ListBasic({ list, title }: IListBasic) {
  return (
    <div>
      {title && <h3 className="font-semibold">{title}</h3>}
      <ul className="flex gap-4 py-2 items-center flex-wrap">
        {list.map(({ text, icon }) => (
          <li key={text}>
            <Tooltip title={text} placement="bottom">
              <img className="size-8 aspect-square" src={icon} alt={text} />
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}
