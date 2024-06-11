import SectionLayout from "../../layout/SectionLayout";
import Chat from "./components/Chat";
import SelectModel from "./components/SelectModel";

export default function AdvisorAi() {
  return (
    <SectionLayout levelTitle={2} title="advisor AI">
      <div className="w-[80%] mx-auto">
        <SelectModel />
        <Chat />
      </div>
    </SectionLayout>
  );
}
