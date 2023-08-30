import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ReactMarkdown from "react-markdown";

const AccordionComponent = ({ title, accordionItems }) => {
  return (
    <section className="accordion container-medium">
      {title && <p className="title">{title}</p>}
      <Accordion preExpanded={["accordion0"]} allowZeroExpanded={true}>
        {accordionItems.map((accordion, i) => (
          <AccordionItem key={`accordion${i}`} uuid={`accordion${i}`}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {accordion.fields.title}
                <span className="toggle-icon" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ReactMarkdown>{accordion.fields.content}</ReactMarkdown>
              {accordion.fields.servicesList && (
                <ul className="services-list">
                  {accordion.fields.servicesList.map((service, i) => (
                    <li key={`service${i}`}>{service}</li>
                  ))}
                </ul>
              )}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default AccordionComponent;
