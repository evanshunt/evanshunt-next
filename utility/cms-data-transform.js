function CMSDataTransform() {
  // Keep functions alphabetically sorted and names should follow
  // transformContentfulMachineNameData where ContentfulMachineName is the
  // machine name of the Contentful Content Type or Field Name

  // COPIED FROM STAMPEDE FOR REFERENCE
  // this.transformAccordionsComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     accordionItems: this.transformAccordionItemsData(
  //       componentData.fields.accordionItems
  //     )
  //   };
  // };

  // this.transformAccordionItemsData = accordionItemsData => {
  //   return accordionItemsData.map(item => {
  //     return {
  //       id: item.sys.id,
  //       title: item.fields.title,
  //       ...(item.fields.accordionContent && {
  //         accordionContent: this.transformComponentsData(
  //           item.fields.accordionContent
  //         )
  //       })
  //     };
  //   });
  // };

  // this.transformCarouselComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     ...(componentData.fields.carouselItems && {
  //       carouselItems: this.transformCarouselItemsData(
  //         componentData.fields.carouselItems
  //       )
  //     })
  //   };
  // };

  // this.transformCarouselItemsData = data => {
  //   return data.map(item => {
  //     return {
  //       title: item.fields.title,
  //       ...(item.fields.carouselImage && {
  //         imageURL: item.fields.carouselImage.fields.file.url
  //       }),
  //       carouselCaption: item.fields.carouselCaption
  //     };
  //   });
  // };

  // this.transformColumnsComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     darkMode: componentData.fields.darkMode,
  //     ...(componentData.fields.column1 && {
  //       column1: this.transformComponentsData(componentData.fields.column1)
  //     }),
  //     ...(componentData.fields.column2 && {
  //       column2: this.transformComponentsData(componentData.fields.column2)
  //     })
  //   };
  // };

  // this.transformComponentsData = components => {
  //   return components.map(component => {
  //     const componentType = component.sys.contentType.sys.id;
  //     switch (componentType) {
  //       case "accordionsComponent":
  //         return this.transformAccordionsComponentData(component);
  //       case "carouselComponent":
  //         return this.transformCarouselComponentData(component);
  //       case "columnsComponent":
  //         return this.transformColumnsComponentData(component);
  //       case "embeddedContentComponent":
  //         return this.transformEmbeddedContentComponentData(component);
  //       case "factsComponent":
  //         return this.transformFactsComponentData(component);
  //       case "imageComponent":
  //         return this.transformImageComponentData(component);
  //       case "logosComponent":
  //         return this.transformLogosComponentData(component);
  //       case "richTextComponent":
  //         return this.transformRichTextComponentData(component);
  //       case "tableComponent":
  //         return this.transformTableComponentData(component);
  //       case "videoComponent":
  //         return this.transformVideoComponentData(component);
  //     }
  //   });
  // };

  // this.transformCTAData = data => {
  //   return data.map(item => {
  //     return {
  //       title: item.fields.title,
  //       url: item.fields.url
  //     };
  //   });
  // };

  // this.transformEmbeddedContentComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     markup: componentData.fields.markup
  //   };
  // };

  // this.transformFactsComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     facts: this.transformValueData(componentData.fields.facts)
  //   };
  // };

  // this.transformImageComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     margins: componentData.fields.margins,
  //     ...(componentData.fields.image && {
  //       imageURL: componentData.fields.image.fields.file.url,
  //       description: componentData.fields.image.fields.description
  //     })
  //   };
  // };

  // this.transformLogosComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     ...(componentData.fields.logos && {
  //       logos: this.transformLogoData(componentData.fields.logos)
  //     })
  //   };
  // };

  // this.transformLogoData = data => {
  //   return data.map(item => {
  //     return {
  //       title: item.fields.title,
  //       ...(item.fields.image && {
  //         imageURL: item.fields.image.fields.file.url
  //       }),
  //       link: item.fields.link
  //     };
  //   });
  // };
  
  // this.transformPageMetaData = data => {
  //   // Todo: Would love to see pages supply this function a fallback image (say, banner image) 
  //   // incase the social media image is not set so that the logic is handled in one place
  //   return {
  //     seoTitle: data.fields.seoTitle,
  //     ...(data.fields.pageDescription && {
  //       pageDescription: data.fields.pageDescription
  //     }),
  //     ...(data.fields.socialMediaImage && {
  //       socialMediaImage:
  //         data.fields.socialMediaImage.fields.file.url
  //     })
  //   }
  // }

  // this.transformPlaceData = data => {
  //   return {
  //     title: data.fields.title,
  //     ...(data.fields.image && {
  //       image: data.fields.image.fields.file.url
  //     }),
  //     location: data.fields.location,
  //     description: data.fields.description
  //   }
  // };

  // this.transformRichTextComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     alignment: componentData.fields.alignment,
  //     content: componentData.fields.content,
  //     badge: componentData.fields.badge,
  //     ...(componentData.fields.ctas && {
  //       ctas: this.transformCTAData(componentData.fields.ctas)
  //     })
  //   };
  // };

  // this.transformScheduledEventData = data => {
  //   return data.map(item => {
  //     return {
  //       title: item.fields.title,
  //       place: this.transformPlaceData(item.fields.place),
  //       admissionType: item.fields.admissionType,
  //       ...(item.fields.dates && {
  //         dates: this.transformScheduledEventTimeData(item.fields.dates)
  //       })
  //     };
  //   })
  // };

  // this.transformScheduledEventTimeData = data => {
  //   return data.map(item => {
  //     return {
  //       ticketPurchaseLink: item.fields.ticketPurchaseLink,
  //       dateTime: item.fields.dateTime
  //     };
  //   });
  // };

  // this.transformTableComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     table: componentData.fields.table,
  //     rightAlignColumns: componentData.fields.rightAlignColumns
  //   };
  // };

  // this.transformValueData = data => {
  //   return data.map(item => {
  //     return {
  //       label: item.fields.label,
  //       value: item.fields.value
  //     };
  //   });
  // };

  // this.transformVideoComponentData = componentData => {
  //   return {
  //     type: componentData.sys.contentType.sys.id,
  //     title: componentData.fields.title,
  //     displayTitle: componentData.fields.displayTitle,
  //     videoURL: componentData.fields.videoUrl,
  //     videoPosterTitle: componentData.fields.videoPoster.fields.title,
  //     videoPosterURL: componentData.fields.videoPoster.fields.file.url,
  //     videoHasLightBackground: componentData.fields.videoHasLightBackground
  //   };
  // };
}

module.exports = CMSDataTransform;
