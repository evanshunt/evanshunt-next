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
            gradientColour={component.fields.gradientColour[0]}
            backgroundImage={component.fields.backgroundImage}
            backgroundVideo={component.fields.backgroundVideo}
            key={`component-${i}`}
          />
        );

      default:
        return (
          <p>
            Component {component.sys.contentType.sys.id} not defined in code
          </p>
        );
    }
  });
};

export default renderComponents;
