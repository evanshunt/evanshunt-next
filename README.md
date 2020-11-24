# evanshunt-next

This is the codebase for the Evans Hunt website.

## Requirements

* Node.js >= 12.18.3
* Next >= 9.5.2
* Contentful >= 7.14.6
* All other requirements in `package.json`

## Local setup

* Clone this repo
* Copy `.env.sample` to `.env` and place the Contentful API key credentials
* Install all dependencies:
    `npm install`
* Run a local webserver that auto-compiles:
    `npm run dev`
* If you prefer to manually set the port via command line feel free to run:
    `PORT=XXXX npm run dev2`
* Export a static copy of the site to `/out`:
    `npm run build`
    `npm run export`
* To view the static output:
    `docker run --rm -dit -p 80:80 -v "$(pwd)/out":/usr/local/apache2/htdocs/ httpd:2.4`

## Contributing, feature branch rules

TBD

## Deployment processes

TBD

## QA processes

TBD

## Third-party integrations

* Contentful is used for a headless CMS. Log in with `devs@evanshunt.com` with the credentials in LastPass.
* Using Paid Greensock Plugins - currently on Kalen's account TODO: Needs to be swapped with devs@evanshunt.com. Instructions can be found on GSAP admin dashboard on the right side.

## Gotchas/trickies

TBD

## Production notes

Using Netlify for Builds and Servers.

DEV Branch --> https://dev--eh-next-qa.netlify.app/
MASTER Branch --> https://eh-next-qa.netlify.app/

## Production maintenance

TBD

## Team, contacts

* PM: Sabrina Wilson
* Clients: Dan Evans & Bill Hunt
* Tech Lead: Derek McBurney
* Lead Dev: Justine Matsalla
* QA: Neetu Verma

## Changelog
* 18 Aug 2020 Initial repo setup