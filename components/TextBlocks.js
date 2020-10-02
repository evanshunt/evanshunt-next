import ReactMarkdown from "react-markdown";

const TextBlocks = ({ textBlocks }) => {
  return (
    <section className="text-blocks">
      {textBlocks.map((text, i) => (
        <div className="block" key={`block-${i}`}>
          <ReactMarkdown source={text.fields.markdown} />
        </div>
      ))}
    </section>
  );
};

export default TextBlocks;
