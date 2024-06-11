import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import {
  INavigateControl,
  Direction,
} from "../interfaces/INavigateControl.interface";
import { ICustomClass } from "../interfaces/ICustomClass.interface";

interface Props extends Partial<ICustomClass> {}

export default function ControlNavigation({ customClass }: Props) {
  const icons: INavigateControl[] = [
    {
      id: "left",
      icon: <ArrowLeftOutlined />,
      navigateTo: Direction.back,
    },
    {
      id: "right",
      icon: <ArrowRightOutlined />,
      navigateTo: Direction.forward,
    },
  ];

  function navigate(route: Direction): void {
    if (route === Direction.back) return window.history.back();
    if (route === Direction.forward) return window.history.forward();
  }

  return (
    <Flex className={`${customClass && customClass}`} gap={1}>
      {icons.map(({ icon, id, navigateTo }) => (
        <Tooltip
          key={id}
          title={navigateTo === Direction.back ? "Back" : "Forward"}
        >
          <Button
            type="text"
            size="large"
            className={`${
              navigateTo === Direction.back && "rounded-tl-lg rounded-bl-lg"
            }
            ${
              navigateTo === Direction.forward && "rounded-tr-lg rounded-br-lg"
            } bg-orange-300/70 border-2 hover:border-orange-300 hover:text-orange-300/70`}
            icon={icon}
            onClick={() => navigate(navigateTo)}
          />
        </Tooltip>
      ))}
    </Flex>
  );
}
