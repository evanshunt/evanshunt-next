import React from 'react'

// site wide Footer
const Footer = () => {
  
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="footer-main">
      
      <div className="footer-flex">
        
        <div className="footer-left">
          <a href="https://www.modop.com/" target="_blank" rel="noreferrer">
            <svg id="" viewBox="0 0 240 125" width="250">
              <defs/>
              <path d="M99.75,35.87v52.91h-9.28v-23.16h-9.87v23.25h-9.35v-52.98h9.31v21.55h9.85v-21.57h9.34ZM63.36,63.78v1h-19.34c0,.84-.01,1.55,0,2.26.06,3.26-.02,6.54.24,9.79.24,3.01,1.96,4.48,4.69,4.49,2.77.02,4.4-1.39,4.75-4.42.27-2.39.27-4.81.39-7.38h9.27c-.08,4.34.65,8.69-1.22,12.8-1.99,4.39-5.72,6.37-10.26,6.98-3.15.43-6.3.28-9.33-.87-4.65-1.78-7.31-5.19-7.78-10.11-.28-2.96-.17-5.96-.18-8.95-.02-7.1-.03-14.2,0-21.29.03-8.5,4.35-13.2,12.82-13.85,1.72-.13,3.51-.08,5.21.22,6.52,1.14,10.59,5.15,10.65,11.83.05,5.91.09,17.49.09,17.49M53.56,46.08c-.2-2.5-1.98-3.71-4.42-3.75-2.6-.05-4.36,1.04-4.69,3.63-.45,3.59-.41,7.25-.59,10.94h9.76c0-3.67.21-7.26-.07-10.81M67.16,121.22c-32.74,0-59.37-26.64-59.37-59.37S34.43,2.47,67.16,2.47s59.37,26.63,59.37,59.37-26.63,59.37-59.37,59.37M67.16,9.28c-28.98,0-52.56,23.58-52.56,52.56s23.58,52.56,52.56,52.56,52.56-23.58,52.56-52.56S96.15,9.28,67.16,9.28" fill="#da4027"/>
              <path d="M163.62,107.3c0,.61.26.74,1.24.82v.29h-3.06v-.27c.74-.09.88-.14.88-.71v-5.06c0-.57-.14-.62-.88-.71v-.27h2.64c1.8,0,2.65.97,2.65,2.05,0,1.23-.87,2.1-2.61,2.1h-.86v1.76ZM163.62,105.21h.66c1.26,0,1.78-.63,1.78-1.73,0-.95-.52-1.76-1.78-1.76h-.66v3.49Z"/>
              <path d="M171.3,107.3c0,.44.1.66.39.66.16,0,.31-.06.46-.13l.05.15c-.24.36-.58.53-.96.53-.49,0-.78-.35-.83-.91-.35.41-.91.91-1.61.91-.78,0-1.27-.51-1.27-1.25,0-.84.63-1.19,1.42-1.49l1.44-.54v-.68c0-.69-.26-1.19-.92-1.19-.57,0-.81.38-.81.89,0,.17.02.32.07.52l-.53.08c-.25-.08-.39-.27-.39-.55,0-.75.78-1.19,1.79-1.19,1.14,0,1.7.49,1.7,1.54v2.65ZM170.39,107.39v-1.88l-1.2.49c-.5.2-.79.48-.79,1.01s.3.91.87.91c.41,0,.71-.19,1.12-.53Z"/>
              <path d="M173.95,107.65c0,.39.23.47.89.5v.26h-2.48v-.26c.53-.03.69-.11.69-.5v-3.58l-.65-.35v-.11l1.47-.5h.12l-.04,1.42c.55-1.02.79-1.42,1.35-1.42.18,0,.31.07.38.16v.75h-.14c-.61,0-1.03.05-1.59.73v2.9Z"/>
              <path d="M177.49,103.21h1.43v.38h-1.43v3.31c0,.74.27,1.04.83,1.04.31,0,.52-.09.79-.29l.09.12c-.26.38-.7.74-1.32.74-.72,0-1.27-.39-1.27-1.46v-3.46h-.68v-.14c.57-.31,1.03-.85,1.36-1.48h.2v1.24Z"/>
              <path d="M181.54,105.94c0-1.72,1.05-2.83,2.38-2.83,1.4,0,2.32,1.06,2.32,2.57,0,1.72-1.05,2.83-2.38,2.83-1.4,0-2.32-1.04-2.32-2.57ZM185.29,105.93c0-1.32-.45-2.51-1.42-2.51-.89,0-1.38.92-1.38,2.27s.45,2.51,1.42,2.51c.89,0,1.38-.92,1.38-2.27Z"/>
              <path d="M188.28,107.65c0,.39.23.47.89.5v.26h-2.48v-.26c.53-.03.69-.11.69-.5v-4.06h-.74v-.14l.74-.3v-.67c0-1.23.69-1.9,1.77-1.9.69,0,1.05.25,1.05.72,0,.22-.11.4-.29.5h-.52c.02-.1.03-.2.03-.34,0-.38-.13-.64-.48-.64-.42,0-.66.38-.66,1.1v1.29h1.29v.38h-1.29v4.06Z"/>
              <path d="M193.28,103.21h1.43v.38h-1.43v3.31c0,.74.27,1.04.83,1.04.31,0,.52-.09.79-.29l.09.12c-.26.38-.7.74-1.32.74-.72,0-1.27-.39-1.27-1.46v-3.46h-.68v-.14c.57-.31,1.03-.85,1.36-1.48h.2v1.24Z"/>
              <path d="M195.86,101.54l-.65-.35v-.11l1.43-.5h.12v3.48c.47-.52,1.05-.95,1.82-.95.92,0,1.35.56,1.35,1.64v2.9c0,.39.16.47.69.5v.26h-2.28v-.26c.53-.03.69-.11.69-.5v-2.91c0-.74-.3-1.05-.89-1.05-.51,0-1,.28-1.38.61v3.35c0,.39.16.47.69.5v.26h-2.28v-.26c.53-.03.69-.11.69-.5v-6.11Z"/>
              <path d="M205.12,105.09v.21h-3.32c-.07,1.62.73,2.54,1.77,2.54.72,0,1.15-.34,1.5-.89l.12.06c-.24.87-.93,1.5-1.97,1.5-1.42,0-2.23-1.15-2.23-2.55,0-1.64.96-2.85,2.25-2.85s1.88.86,1.88,1.98ZM201.83,105.01h2.42c0-.9-.31-1.58-1.09-1.58s-1.23.69-1.33,1.58Z"/>
              <path d="M168.56,116.73c0-.66-.22-.97-.78-.97-.46,0-.83.24-1.18.52v3.37c0,.37.14.44.64.47v.29h-2.41v-.29c.5-.03.65-.1.65-.47v-2.92c0-.66-.23-.97-.79-.97-.46,0-.83.24-1.18.52v3.37c0,.37.15.44.65.47v.29h-2.43v-.29c.5-.03.66-.1.66-.47v-3.57l-.63-.35v-.14l1.62-.52h.17l-.04.96c.45-.52.96-.96,1.77-.96.72,0,1.12.31,1.26.99.45-.52,1.02-.99,1.82-.99.91,0,1.32.55,1.32,1.62v2.96c0,.37.16.44.66.47v.29h-2.42v-.29c.5-.03.64-.1.64-.47v-2.92Z"/>
              <path d="M170.68,117.91c0-1.71,1.08-2.84,2.48-2.84s2.43,1.05,2.43,2.59c0,1.72-1.08,2.85-2.48,2.85s-2.43-1.04-2.43-2.6ZM174.41,117.96c0-1.4-.4-2.56-1.3-2.56-.82,0-1.24.89-1.24,2.22s.4,2.56,1.29,2.56c.82,0,1.25-.89,1.25-2.22Z"/>
              <path d="M179.18,113.22v-.15l1.59-.49h.16v6.82c0,.34.02.43.44.47l.26.02v.26l-1.66.36h-.2l.04-.93c-.4.55-.9.93-1.61.93-1.22,0-2.01-1.01-2.01-2.47,0-1.85,1.08-2.96,2.49-2.96.49,0,.88.14,1.13.37v-1.89l-.63-.34ZM177.27,117.6c0,1.22.53,2.16,1.52,2.16.42,0,.76-.14,1.02-.41v-2.56c0-.86-.42-1.37-1.06-1.37-.91,0-1.48.87-1.48,2.18Z"/>
              <path d="M183.99,117.91c0-1.71,1.08-2.84,2.48-2.84s2.43,1.05,2.43,2.59c0,1.72-1.08,2.85-2.48,2.85s-2.43-1.04-2.43-2.6ZM187.72,117.96c0-1.4-.4-2.56-1.3-2.56-.82,0-1.24.89-1.24,2.22s.4,2.56,1.29,2.56c.82,0,1.25-.89,1.25-2.22Z"/>
              <path d="M189.91,116.08l-.63-.35v-.14l1.61-.52h.18l-.04.91c.36-.52.9-.91,1.68-.91,1.24,0,1.98.92,1.98,2.41,0,1.9-1.15,3.03-2.59,3.03-.42,0-.82-.11-1.07-.32v1.55c0,.4.19.45.86.5v.29h-2.64v-.29c.5-.03.66-.1.66-.47v-5.69ZM193.56,117.92c0-1.17-.43-2.16-1.48-2.16-.4,0-.8.19-1.05.46v2.75c0,.83.37,1.21,1.04,1.21.92,0,1.49-.99,1.49-2.26Z"/>
              <path d="M201.09,116.74c0-.74-.3-1.05-.89-1.05-.51,0-1,.28-1.38.61v3.35c0,.39.16.47.69.5v.26h-2.28v-.26c.53-.03.69-.11.69-.5v-3.58l-.65-.35v-.11l1.47-.5h.12l-.04.95c.47-.52,1.05-.95,1.82-.95.92,0,1.35.53,1.35,1.61v2.93c0,.39.16.47.69.5v.26h-2.28v-.26c.53-.03.69-.11.69-.5v-2.91Z"/>
              <path d="M207.18,117.09v.21h-3.32c-.07,1.62.73,2.54,1.77,2.54.72,0,1.15-.34,1.5-.89l.12.06c-.24.87-.93,1.5-1.97,1.5-1.42,0-2.23-1.15-2.23-2.55,0-1.64.96-2.85,2.25-2.85s1.88.86,1.88,1.98ZM203.89,117.01h2.42c0-.9-.31-1.58-1.09-1.58s-1.23.69-1.33,1.58Z"/>
              <path d="M209.03,115.21h1.43v.38h-1.43v3.31c0,.74.27,1.04.83,1.04.31,0,.52-.09.79-.29l.09.12c-.26.38-.7.74-1.32.74-.72,0-1.27-.39-1.27-1.46v-3.46h-.68v-.14c.57-.31,1.03-.85,1.36-1.48h.2v1.24Z"/>
              <path d="M217.36,116.07c.03-.08.04-.17.04-.24,0-.26-.25-.3-.68-.36v-.26h1.62v.26c-.37.09-.43.16-.51.37l-1.82,4.67h-.24l-1.21-3.39-1.27,3.39h-.23l-1.86-4.67c-.09-.21-.14-.28-.51-.37v-.26h2.19v.26c-.44.06-.68.1-.68.36,0,.07,0,.15.04.24l1.19,3.18.97-2.63-.28-.78c-.07-.21-.14-.28-.51-.37v-.26h2.09v.26c-.44.06-.68.09-.68.36,0,.07,0,.14.04.24l1.09,3.16,1.21-3.16Z"/>
              <path d="M218.38,117.94c0-1.72,1.05-2.83,2.38-2.83,1.4,0,2.32,1.06,2.32,2.57,0,1.72-1.05,2.83-2.38,2.83-1.4,0-2.32-1.04-2.32-2.57ZM222.13,117.93c0-1.32-.45-2.51-1.42-2.51-.89,0-1.38.92-1.38,2.27s.45,2.51,1.42,2.51c.89,0,1.38-.92,1.38-2.27Z"/>
              <path d="M225.12,119.65c0,.39.23.47.89.5v.26h-2.48v-.26c.53-.03.69-.11.69-.5v-3.58l-.65-.35v-.11l1.47-.5h.12l-.04,1.42c.55-1.02.79-1.42,1.35-1.42.18,0,.31.07.38.16v.75h-.14c-.61,0-1.03.05-1.59.73v2.9Z"/>
              <path d="M227.78,113.54l-.65-.35v-.11l1.43-.5h.12v7.07c0,.39.16.47.69.5v.26h-2.28v-.26c.53-.03.69-.11.69-.5v-6.11ZM230.41,116.09c.13-.12.25-.23.25-.36,0-.2-.2-.2-.67-.26v-.26h1.98v.26c-.39.09-.57.18-.79.38l-1.52,1.38,2.55,2.99v.19h-1.01l-2.4-2.85,1.61-1.47Z"/>
              <line x1="151.92" y1="121.33" x2="151.92" y2="100.45" fill="none" stroke="#e43d30" />
            </svg>
          </a>
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
        <span><a href="https://assets.ctfassets.net/e7zdud06ixb9/paoadM9w6T4t65ZJJHunc/ad72ebac5baca8e7523c4cda800b9446/EvansHunt_Web_PrivacyPolicy_08-2017.pdf" target="_blank" rel="noreferrer">Privacy Policy</a></span>
      </div>
    </footer>
  )
}

export default Footer