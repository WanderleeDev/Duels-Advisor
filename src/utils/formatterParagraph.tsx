interface Props {
  paragraph: string;
}

export default function FormatterParagraph({ paragraph }: Props) {
  const paragraphFormatter = paragraph.split(".").toSpliced(-1);

  if (paragraph.length < 2) return <p>{paragraph}</p>;

  return (
    <>
      {paragraphFormatter.map((paragraphSlice, i) => (
        <p key={i}>{paragraphSlice}.</p>
      ))}
    </>
  );
}
