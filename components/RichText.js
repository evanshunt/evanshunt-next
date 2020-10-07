import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichText = (props) => {
  return (
    <div className="rich-text">
      {documentToReactComponents(props.content)}
    </div>
  );
};

export default RichText;
