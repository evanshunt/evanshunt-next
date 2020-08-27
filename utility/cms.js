const contentful = require("contentful");
// const CMSDataTransform = require("./cms-data-transform");

function CMSApi() {
  console.log("Accessing Contentful space " + process.env.CONTENTFUL_SPACE);
  // let dataTransform;
  // dataTransform = new CMSDataTransform();

  this.client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN
  });

  // COPIED FROM STAMPEDE FOR REFERENCE
  // this.fetchContentPageBySlug = async slug => {
  //   return await this.client
  //     .getEntries({
  //       include: 4,
  //       content_type: "contentPage",
  //       "fields.pageMeta.fields.slug": slug,
  //       "fields.pageMeta.sys.contentType.sys.id": "pageMeta"
  //     })
  //     .then(async results => {
  //       const page = results.items[0];
  //       let json = {};

  //       if (page) {
  //         json = {
  //           site: await this.fetchSiteMeta(),
  //           pageMeta: dataTransform.transformPageMetaData(page.fields.pageMeta),
  //           banner: {
  //             heading: page.fields.banner.fields.heading,
  //             subheading: page.fields.banner.fields.subheading,
  //             imageFocalPoint: page.fields.banner.fields.imageFocalPoint,
  //             alignment: page.fields.banner.fields.alignment,
  //             colour: page.fields.banner.fields.colour,
  //             ...(page.fields.banner.fields.image && {
  //               imageURL: page.fields.banner.fields.image.fields.file.url
  //             }),
  //             ...(page.fields.banner.fields.backgroundVideo && {
  //               videoURL:
  //                 page.fields.banner.fields.backgroundVideo.fields.file.url
  //             }),
  //             ...(page.fields.banner.fields.cta && {
  //               cta: {
  //                 title: page.fields.banner.fields.cta.fields.title,
  //                 url: page.fields.banner.fields.cta.fields.url
  //               }
  //             })
  //           }
  //         };

  //         // Form component data from contentful
  //         if (page.fields.components) {
  //           json.components = dataTransform.transformComponentsData(
  //             page.fields.components
  //           );
  //         }

  //         return json;
  //       }

  //       return null;
  //     });
  // };

  // this.fetchArtistPageBySlug = async slug => {
  //   return await this.client
  //     .getEntries({
  //       include: 3,
  //       content_type: "artistPage",
  //       "fields.pageMeta.fields.slug": slug,
  //       "fields.pageMeta.sys.contentType.sys.id": "pageMeta"
  //     })
  //     .then(async results => {
  //       const page = results.items[0];

  //       if (page) {
  //         return {
  //           site: await this.fetchSiteMeta(),
  //           pageMeta: dataTransform.transformPageMetaData(page.fields.pageMeta),
  //           ...(page.fields.title && {
  //             title: page.fields.title
  //           }),
  //           banner: {
  //             ...(page.fields.image && {
  //               imageURL: page.fields.image.fields.file.url
  //             }),
  //             ...(page.fields.imageFocalPoint && {
  //               imageFocalPoint: page.fields.imageFocalPoint
  //             })
  //           },
  //           richtext: {
  //             ...(page.fields.description && {
  //               content: page.fields.description
  //             })
  //           },
  //           ...(page.fields.link && {
  //             link: page.fields.link
  //           }),
  //           ...(page.fields.facebookUrl && {
  //             facebookUrl: page.fields.facebookUrl
  //           }),
  //           ...(page.fields.instagramUrl && {
  //             instagramUrl: page.fields.instagramUrl
  //           }),
  //           ...(page.fields.twitterUrl && {
  //             twitterUrl: page.fields.twitterUrl
  //           }),
  //           scheduledEvents: dataTransform.transformScheduledEventData(page.fields.scheduledEvents)
  //         };
  //       }

  //       return null;
  //     });
  // };

  // this.fetchVenuePageBySlug = async slug => {
  //   return await this.client
  //     .getEntries({
  //       include: 3,
  //       content_type: "venuePage",
  //       "fields.pageMeta.fields.slug": slug,
  //       "fields.pageMeta.sys.contentType.sys.id": "pageMeta"
  //     })
  //     .then(async results => {
  //       const page = results.items[0];

  //       if (page) {
  //         return {
  //           site: await this.fetchSiteMeta(),
  //           pageMeta: dataTransform.transformPageMetaData(page.fields.pageMeta),
  //           ...(page.fields.title && {
  //             title: page.fields.title
  //           }),
  //           banner: {
  //             heading: page.fields.title,
  //             subheading: page.fields.subheading,
  //             ...(page.fields.image && {
  //               imageURL: page.fields.image.fields.file.url
  //             }),
  //             ...(page.fields.imageFocalPoint && {
  //               imageFocalPoint: page.fields.imageFocalPoint
  //             })
  //           }
  //         };
  //       }
  //       return null;
  //     });
  // };

  // this.fetchContentPages = async slug => {
  //   return await this.client
  //     .getEntries({
  //       include: 3,
  //       content_type: slug
  //     })
  //     .then(results => {
  //       if (results.items) {
  //         return results.items;
  //       }
  //       return [];
  //     });
  // };

  // this.fetchPlaces = async () => {
  //   return await this.client
  //     .getEntries({
  //       content_type: "place"
  //     })
  //     .then(async results => {
  //       if (results.items) {
  //         let places = [];
  //         results.items.forEach(place => {
  //           if (place.fields) {
  //             places.push(dataTransform.transformPlaceData(place))
  //           }
  //         });
  //         return places;
  //       }
  //       return null;
  //     });
  // };

  // this.fetchSiteMeta = async () => {
  //   return await this.client
  //     .getEntries({
  //       include: 3,
  //       content_type: "siteMeta"
  //     })
  //     .then(results => {
  //       if (results.items) {
  //         let site = results.items[0];
  //         if (site.fields) {
  //           return {
  //             footer: {
  //               emailSignupHeader: site.fields.emailSignupHeader,
  //               emailSignupDescription: site.fields.emailSignupDescription,
  //               ...(site.fields.emailSignupPage && {
  //                 emailSignupURL:
  //                   "/" +
  //                   site.fields.emailSignupPage.fields.pageMeta.fields.slug
  //               })
  //             }
  //           };
  //         }
  //       }
  //       return null;
  //     });
  // };

  // this.fetchPageMetaBySlug = async slug => {
  //   return await this.client
  //     .getEntries({
  //       include: 3,
  //       content_type: "pageMeta",
  //       "fields.slug": slug
  //     })
  //     .then(results => {
  //       if (results.items) {
  //         const meta = results.items[0];
  //         return {
  //           seoTitle: meta.fields.seoTitle,
  //           ...(meta.fields.pageDescription && {
  //             pageDescription: meta.fields.pageDescription
  //           }),
  //           ...(meta.fields.socialMediaImage && {
  //             socialMediaImage: meta.fields.socialMediaImage.fields.file.url
  //           })
  //         };
  //       }
  //       return null;
  //     });
  // };

  // this.fetchMapPage = async () => {
  //   return {
  //     site: await this.fetchSiteMeta(),
  //     pageMeta: await this.fetchPageMetaBySlug("map"),
  //     places: await this.fetchPlaces()
  //   };
  // };

  // this.fetchSearchPage = async () => {
  //   return {
  //     site: await this.fetchSiteMeta(),
  //     pageMeta: await this.fetchPageMetaBySlug("search")
  //   };
  // };
}

module.exports = CMSApi;
