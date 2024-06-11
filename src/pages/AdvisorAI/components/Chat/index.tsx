import { Input } from "antd";
import ImageUpload from "../ImageUpload";
import {  prompt } from "../../prompt/prompt.enum";

export default function Chat() {
  const { TextArea } = Input;
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };
  console.log(prompt);
  
  return (
    <div className="">
      <div className="py-4">
        <ImageUpload />
      </div>
      <div>
        <label htmlFor="inputBox">
          <span>Info extra (optional)</span>
          <TextArea
          id="inputBox"
            style={{ resize: "none", height: "100" }}
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="Info extra"
          />
        </label>
      </div>
    </div>
  );
}
