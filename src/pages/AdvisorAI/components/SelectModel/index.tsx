import { Flex, Radio, Typography } from "antd";
import { useState } from "react";
import { ApiOutlined } from "@ant-design/icons";
import { Models } from "../../interfaces/Models.enum";

export default function SelectModel() {
  const [model, setModel] = useState<Models>(Models["single card"]);
  const { Paragraph } = Typography

  function handleModel(model: Models): void {
    setModel(model);
  }

  return (
    <Flex vertical gap="middle" align="center">
      <div className="text-xl flex items-center gap-2">
        <ApiOutlined aria-hidden="true" />
        Models
      </div>
      <Radio.Group defaultValue={model} buttonStyle="solid">
        {Object.values(Models).map((model) => (
          <Radio.Button
            onClick={() => handleModel(model)}
            key={model}
            value={model}
          >
            {model}
          </Radio.Button>
        ))}
      </Radio.Group>
      <Paragraph className="max-w-[80%] text-pretty text-center">
        {model === Models["single card"] &&
          "Provides information about a specific card."}
        {model === Models.builder &&
          "Builds a deck based on one or more cards and provides strategies for it."}
        {model === Models.strategy &&
          "Generates strategies for one or more cards, including a specific deck."}
      </Paragraph>
    </Flex>
  );
}
