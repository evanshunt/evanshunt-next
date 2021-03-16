import React from 'react'

// site wide Footer
const Footer = () => {
  
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="footer-main">
      
      <div className="footer-flex">
        
        <div className="footer-left">
          <svg width="81px" height="80px" viewBox="0 0 81 80" version="1.1" id="footer-logo">
            <title>Monogram</title>
            <defs>
              <filter id="filter-1">
                <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.925490 0 0 0 0 0.015686 0 0 0 0 0.203922 0 0 0 1.000000 0"></feColorMatrix>
              </filter>
            </defs>
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Footer-4" transform="translate(-51.000000, -44.000000)">
                <g id="Monogram" transform="translate(50.000000, 42.500000)">
                  <g transform="translate(1.000000, 1.000000)">
                    <path d="M40.4998037,5.08649861 C20.7287747,5.08649861 4.64343716,20.9728639 4.64343716,40.5005817 C4.64343716,60.0275239 20.7287747,75.9138892 40.4998037,75.9138892 C60.2712253,75.9138892 76.3565628,60.0275239 76.3565628,40.5005817 C76.3565628,20.9728639 60.2712253,5.08649861 40.4998037,5.08649861 L40.4998037,5.08649861 Z M40.4998037,80.5 C18.1681105,80.5 0,62.556575 0,40.5005817 C0,18.4442007 18.1681105,0.5 40.4998037,0.5 C62.8318895,0.5 81,18.4442007 81,40.5005817 C81,62.556575 62.8318895,80.5 40.4998037,80.5 L40.4998037,80.5 Z M31.2176415,29.8794207 C31.0802036,28.1931281 29.8672161,27.3802327 28.203825,27.3499818 C26.433625,27.3181796 25.2273131,28.0546722 25.0078051,29.7968125 C24.702693,32.2172706 24.7266465,34.6776754 24.6076645,37.1636771 L31.2675118,37.1636771 C31.2675118,34.6928009 31.413196,32.2723427 31.2176415,29.8794207 L31.2176415,29.8794207 Z M37.9069398,41.8013695 L37.9069398,42.4785238 L24.7109393,42.4785238 C24.7109393,43.0463095 24.7030857,43.5237305 24.71251,44.0015392 C24.754134,46.2005454 24.7007296,48.4073082 24.8750794,50.5962308 C25.0368634,52.6218761 26.2109756,53.6123985 28.0734553,53.6220943 C29.9602812,53.6329536 31.0758841,52.6847049 31.31267,50.6466489 C31.4999782,49.0363713 31.4936953,47.4043752 31.5789068,45.6727063 L37.9026203,45.6727063 C37.8496085,48.5942431 38.3483117,51.5247 37.0732808,54.2988607 C35.7146091,57.2549146 33.1692595,58.5859532 30.0729802,58.9997697 C27.9258078,59.2863774 25.7751012,59.1913586 23.7127475,58.4110411 C20.5395031,57.2107017 18.7233596,54.9162889 18.4072525,51.6018786 C18.2168028,49.6060962 18.2902339,47.5839413 18.2843437,45.5738092 C18.2705999,40.7914556 18.2658878,36.0098776 18.2843437,31.2279118 C18.3059411,25.4976972 21.2530021,22.3341534 27.0285347,21.8978427 C28.2046104,21.8090292 29.4238807,21.8466489 30.5838565,22.0471579 C35.0337026,22.8162283 37.8091625,25.514374 37.8472525,30.0155496 C37.8806302,33.996255 37.9069398,41.8013695 37.9069398,41.8013695 L37.9069398,41.8013695 Z M62.7278294,23.0031633 L62.7278294,58.6526603 L56.399011,58.6526603 L56.399011,43.047473 L49.66534,43.047473 L49.66534,58.7112229 L43.2846879,58.7112229 L43.2846879,23.017513 L49.6351036,23.017513 L49.6351036,37.5340565 L56.3566016,37.5340565 L56.3566016,23.0031633 L62.7278294,23.0031633 Z" id="Fill-1" fill="#EC0434"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <h3>Strategy. Creative. Technology</h3>
        </div>
        
        <div className="footer-right footer-links">
          <a href="https://www.instagram.com/evanshunt/" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
          <a href="https://www.linkedin.com/company/the-evans-hunt-group-inc-/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://www.facebook.com/evanshunt" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>
          <a href="https://blog.evanshunt.com/" target="_blank" rel="noreferrer" className="footer-link">Medium</a>
        </div>
        
      </div>
      
      <div className="footer-legal">
        <span>&copy; {currentYear} All Rights Reserved.</span>
        <span><a href="https://www.evanshunt.com/EvansHunt_Web_PrivacyPolicy_08-2017.pdf" target="_blank" rel="noreferrer">Privacy Policy</a></span>
      </div>
    </footer>
  )
}

export default Footer