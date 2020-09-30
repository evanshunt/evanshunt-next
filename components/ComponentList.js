import HeroBanner from "./HeroBanner";

const renderComponents = (components) => {
  return components.map((component, i) => {
    switch (component.sys.contentType.sys.id) {
      case "componentHero":
        return (
          <HeroBanner
            smallText={component.fields.smallText}
            largeText={component.fields.largeText}
            gradientHero={component.fields.gradientHero}
            gradientColour={component.fields.gradientColour && component.fields.gradientColour[0]}
            backgroundImage={component.fields.backgroundImage && component.fields.backgroundImage.fields.file.url}
            backgroundVideo={component.fields.video && component.fields.video.fields.file.url}
            key={`component-${i}`}
          />
        );

      default:
        return (
          <p key={`component-${i}`}>
            Component {component.sys.contentType.sys.id} not defined in code
          </p>
        );
    }
  });
};

export default renderComponents;
