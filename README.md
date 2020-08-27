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
    `docker run --rm -it -v "$(pwd)":/usr/src/app -w /usr/src/app node:dubnium npm install`
* Run a local webserver that auto-compiles:
    `docker run --rm -it -p 3000:3000 -v "$(pwd)":/usr/src/app -w /usr/src/app node:dubnium npm run dev`
* Export a static copy of the site to `/out`:
    `docker run --rm -it -v "$(pwd)":/usr/src/app -w /usr/src/app node:dubnium npm run build`
    `docker run --rm -it -v "$(pwd)":/usr/src/app -w /usr/src/app node:dubnium npm run export`
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

## Gotchas/trickies

TBD

## Production notes

TBD

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