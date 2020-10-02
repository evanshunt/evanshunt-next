import HeroBanner from "./HeroBanner";
import ContactBlock from "./ContactBlock";
import SideBySideImages from "./SideBySideImages";
import IntroBlock from "./IntroBlock";
import FeaturedProjects from "./FeaturedProjects";
import ServiceCircles from "./ServiceCircles";
import Slider from "./Slider";
import CentreAlignedText from "./CentreAlignedText";
import StaggeredImagesWithText from "./StaggeredImagesWithText";
import FullWidthImage from "./FullWidthImage";
import DecorativeLine from "./DecorativeLine";
import TextBlocks from "./TextBlocks";
import OpenPositions from "./OpenPositions";
import OurTeam from './OurTeam'

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

      case "componentIntroBlock":
        return (
          <IntroBlock
            largeText={component.fields.largeText}
            introText={component.fields.introText}
            centerAlign={component.fields.centerAlign}
            cta={component.fields.cta}
            key={`component-${i}`}
          />
        );

      case "componentFeaturedProjects":
        return (
          <FeaturedProjects
            title={component.fields.title}
            projects={component.fields.project}
            cta={component.fields.cta}
            key={`component-${i}`}
          />
        );

      case "componentSlider":
        return (
          <Slider
            title={component.fields.title}
            slides={component.fields.slides}
            key={`component-${i}`}
          />
        );

      case "componentServiceCircles":
        return (
          <ServiceCircles
            title={component.fields.title}
            smallText={component.fields.smallText}
            circle1Title={component.fields.circle1Title}
            circle1Description={component.fields.circle1Description}
            circle2Title={component.fields.circle2Title}
            circle2Description={component.fields.circle2Description}
            circle3Title={component.fields.circle3Title}
            circle3Description={component.fields.circle3Description}
            circle4Title={component.fields.circle4Title}
            circle4Description={component.fields.circle4Description}
            primaryCta={component.fields.primaryCta}
            secondaryCta={component.fields.secondaryCta}
            key={`component-${i}`}
          />
        );

      case "componentCentreAlignedText":
        return (
          <CentreAlignedText
            title={component.fields.title}
            text={component.fields.text}
            key={`component-${i}`}
          />
        );

      case "componentStaggeredImagesWithText":
        return (
          <StaggeredImagesWithText
            imageAndTextBlocks={component.fields.imageAndTextBlocks}
            key={`component-${i}`}
          />
        );

      case "componentFullWidthImage":
        return (
          <FullWidthImage
            title={component.fields.title}
            image={component.fields.image}
            addPadding={component.fields.addPadding}
            key={`component-${i}`}
          />
        );

      case "componentDecorativeLine":
        return (
          <DecorativeLine
            image={component.fields.image}
            key={`component-${i}`}
          />
        );

      case "componentTextBlocks":
        return (
          <TextBlocks
            textBlocks={component.fields.textBlocks}
            key={`component-${i}`}
          />
        );

        case "componentOpenPositions":
          return (
            <OpenPositions
            title={component.fields.title}
            introText={component.fields.introText}
              key={`component-${i}`}
            />
          );

      case "componentOurTeam":
        return (
          <OurTeam
            title={component.fields.title}
            intro={component.fields.intro}
            leaders={component.fields.leaders}
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
