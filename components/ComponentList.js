import HeroBanner from "./HeroBanner";
import ContactBlock from "./ContactBlock";
import SideBySideImages from "./SideBySideImages";

const renderComponents = (components) => {
  return components.map((component, i) => {
    switch (component.sys.contentType.sys.id) {
      case "componentHero":
        return (
          <HeroBanner
            smallText={component.fields.smallText}
            largeText={component.fields.largeText}
            gradientHero={component.fields.gradientHero}
            gradientColour={
              component.fields.gradientColour &&
              component.fields.gradientColour[0]
            }
            backgroundImage={
              component.fields.backgroundImage &&
              component.fields.backgroundImage.fields.file.url
            }
            backgroundVideo={
              component.fields.video && component.fields.video.fields.file.url
            }
            key={`component-${i}`}
          />
        );

      case "componentContactBlock":
        return (
          <ContactBlock
            addressTitle={component.fields.addressTitle}
            address={component.fields.address}
            directionsLink={component.fields.directionsLink}
            cta1Title={component.fields.cta1Title}
            cta1={component.fields.cta1}
            cta2Title={component.fields.cta2Title}
            cta2={component.fields.cta2}
            key={`component-${i}`}
          />
        );

      case "componentSideBySideImages":
        return (
          <SideBySideImages
            images={component.fields.images}
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
