# evanshunt-next

This is the codebase for the Evans Hunt website.

## Requirements

* Node.js >= 18.18.2 (Netlify is using Node 10). Use `nvm` to install and switch to version 18. `nvm install 18` and `nvm use 18`
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
* If you see errors when you build out a local copy, double check that inside the next.config.js file the `target: "serverless",` line is commented out.
* To view the static output:
    `docker run --rm -dit -p 80:80 -v "$(pwd)/out":/usr/local/apache2/htdocs/ httpd:2.4`

## Contributing, feature branch rules

* Create a feature branch for your work
* Once work is ready for QA, open a PR into the `dev` branch
* Once merges are done to the dev branch, a deploy is automatically triggered inside Netlify.
* Once work looks good open a PR into Main
* Merge into main.

## Deployment processes

Netlify handles all deploys. The dev branch is using Next.js Preview Mode (details here: https://www.netlify.com/blog/2020/10/27/preview-mode-for-next.js-now-fully-supported-on-netlify/)

When code is pushed into origin/dev, a branch doply is automaitcally generated in Netlify and published to https://dev--evanshunt-com.netlify.app/.

When code is pushed into origin/master is automatically deploys to production.

When content inside of Contentful CMS is published we have a webhook to trigger a build deploy to production. To preview content on our QA instance leave as "draft" or "changed" within Contentful.

## Third-party integrations

* Contentful is used for a headless CMS. Log in with `devs@evanshunt.com` with the credentials in LastPass.
* Using Paid Greensock Plugins - currently on devs@evanshunt.com account. Instructions can be found on GSAP admin dashboard on the right side. Login details for this account are in LastPass.

## Gotchas/trickies

* Some animations look weird while using your local development server. If you need to test animations your best bet is to build out the static files and then check those instead.

## Production notes

Using Netlify for Builds and Servers.

DEV Branch 
Netlify Branch Preview --> https://dev--evanshunt-com.netlify.app/

MASTER Branch
Contentful Preview/Staging Site --> https://preview.evanshunt.com (Using preview.contentful.com to pull draft AND published content)
Production Stie --> https://evanshunt.com

## Team, contacts

* PM: Sabrina Wilson / Kayla Malone / Becky Chittick
* Clients: Dan Evans & Bill Hunt
* Tech Lead: Derek McBurney / Kalen McConnell
* Dev: Justine Matsalla / Matt Robinson / Kalen McConnell / Rainer Brieger
* QA: Quent Roxas

## Changelog
* 18 Aug 2020 Initial repo setup
* 19 Jan 2021 - changing team members, adding details around local export
* 8 July 2021 - changing team members, adding deployment details, LAUNCH