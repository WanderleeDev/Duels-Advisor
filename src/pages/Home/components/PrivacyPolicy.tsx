export default function PrivacyPolicy() {
  const data: string[] = [
    "  Data Collection: Duel Advisor does not collect any kind of User's Personal Information. All data used by the tools are for public use, ensuring privacy and user safety.",
    " Source of data: Assets related to Duels Monster are used for educational and practical purposes. These assets allow you to put to the test knowledge gained in React and other web technologies.",
    "Focus on React: Duel Advisor focuses on providing recommendations and solutions specific to projects developed with React. This includes good practices, architecture, optimization, and state management.",
  ];
  return (
    <div className=" flex flex-col gap-4 text">
      <p>
        Duel Advisor is a tool designed to provide advice on the realm of duels.
        Here are some key points:
      </p>
      <ul className="list-decimal grid gap-2">
        {data.map((item) => (
          <li
            className="list-inside marker:text-blue-400 marker:font-semibold"
            key={item}
          >
            <p className="inline text-balance">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
