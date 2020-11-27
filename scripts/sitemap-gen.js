const fs = require('fs')

const generateSitemap = (pathsObj) => {
  const baseUrl = 'https://www.evanshunt.com'
  
  let paths = []
  for(let prop in pathsObj) {
    paths.push(prop)
  }

  // weird indentation here is for the purpose of the generated XML file itself... 
  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paths.map(page => {
    const path = page
      .replace('pages', '')
      .replace('.js', '')
      .replace('.md', '')
    const route = path === '/index' ? '' : path
    return `
      <url>
        <loc>${`${baseUrl}${route}`}</loc>
      </url>
      `
  }).join('')}
</urlset>
`

  fs.writeFileSync('public/sitemap.xml', sitemap.trim())
  console.log('Sitemap generation complete.')
}

module.exports = generateSitemap