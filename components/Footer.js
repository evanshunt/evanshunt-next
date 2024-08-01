import React from 'react'

// site wide Footer
const Footer = () => {
  
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="footer-main">
      
      <div className="footer-flex">
        
        <div className="footer-left">
          <a href="/">
            <svg id="footer-logo-eh" viewBox="0 0 119 120" aria-label="evanshunt">
              <g id="footer-eh">
              <path d="M91.96 33.84V86.75H82.68V63.59H72.81V86.84H63.46V33.86H72.77V55.41H82.62V33.84H91.96ZM55.57 61.75V62.75H36.23C36.23 63.59 36.22 64.3 36.23 65.01C36.29 68.27 36.21 71.55 36.47 74.8C36.71 77.81 38.43 79.28 41.16 79.29C43.93 79.31 45.56 77.9 45.91 74.87C46.18 72.48 46.18 70.06 46.3 67.49H55.57C55.49 71.83 56.22 76.18 54.35 80.29C52.36 84.68 48.63 86.66 44.09 87.27C40.94 87.7 37.79 87.55 34.76 86.4C30.11 84.62 27.45 81.21 26.98 76.29C26.7 73.33 26.81 70.33 26.8 67.34C26.78 60.24 26.77 53.14 26.8 46.05C26.83 37.55 31.15 32.85 39.62 32.2C41.34 32.07 43.13 32.12 44.83 32.42C51.35 33.56 55.42 37.57 55.48 44.25C55.53 50.16 55.57 61.74 55.57 61.74M45.76 44.05C45.56 41.55 43.78 40.34 41.34 40.3C38.74 40.25 36.98 41.34 36.65 43.93C36.2 47.52 36.24 51.18 36.06 54.87H45.82C45.82 51.2 46.03 47.61 45.75 44.06M59.37 119.19C26.63 119.19 0 92.55 0 59.82C0 27.09 26.63 0.440002 59.37 0.440002C92.11 0.440002 118.74 27.07 118.74 59.81C118.74 92.55 92.11 119.18 59.37 119.18M59.37 7.25C30.39 7.25 6.81 30.83 6.81 59.81C6.81 88.79 30.39 112.37 59.37 112.37C88.35 112.37 111.93 88.79 111.93 59.81C111.93 30.83 88.36 7.25 59.37 7.25Z" fill="#E43E30"/>
              </g>
            </svg>
          </a>
          <a href="https://www.modop.com/" target="_blank" rel="noreferrer">
            <svg id="footer-logo-modop"  data-name="Layer 1" viewBox="0 0 109 29" aria-label='part of the mod op company'>
              <path d="M16.15 9.22C16.15 9.99 16.48 10.15 17.72 10.26V10.63H13.85V10.29C14.79 10.18 14.96 10.11 14.96 9.39V2.99C14.96 2.27 14.78 2.21 13.85 2.09V1.75H17.19C19.46 1.75 20.54 2.98 20.54 4.34C20.54 5.89 19.44 6.99 17.24 6.99H16.15V9.21V9.22ZM16.15 6.58H16.98C18.57 6.58 19.23 5.78 19.23 4.39C19.23 3.19 18.57 2.17 16.98 2.17H16.15V6.58Z" fill="#77787B"/>
              <path d="M25.87 9.22C25.87 9.78 26 10.05 26.36 10.05C26.56 10.05 26.75 9.97 26.94 9.89L27 10.08C26.7 10.53 26.27 10.75 25.79 10.75C25.17 10.75 24.8 10.31 24.74 9.6C24.3 10.12 23.59 10.75 22.71 10.75C21.72 10.75 21.1 10.11 21.1 9.17C21.1 8.11 21.9 7.67 22.89 7.29L24.71 6.61V5.75C24.71 4.88 24.38 4.25 23.55 4.25C22.83 4.25 22.53 4.73 22.53 5.38C22.53 5.59 22.56 5.78 22.62 6.04L21.95 6.14C21.64 6.04 21.46 5.8 21.46 5.44C21.46 4.49 22.45 3.94 23.72 3.94C25.16 3.94 25.87 4.56 25.87 5.89V9.24V9.22ZM24.72 9.34V6.96L23.2 7.58C22.57 7.83 22.2 8.19 22.2 8.86C22.2 9.53 22.58 10.01 23.3 10.01C23.82 10.01 24.2 9.77 24.72 9.34Z" fill="#77787B"/>
              <path d="M29.22 9.67C29.22 10.16 29.51 10.26 30.35 10.3V10.63H27.22V10.3C27.89 10.26 28.09 10.16 28.09 9.67V5.14L27.27 4.7V4.56L29.13 3.93H29.28L29.23 5.72C29.93 4.43 30.23 3.93 30.94 3.93C31.17 3.93 31.33 4.02 31.42 4.13V5.08H31.24C30.47 5.08 29.94 5.14 29.23 6V9.67H29.22Z" fill="#77787B"/>
              <path d="M33.7 4.05H35.51V4.53H33.7V8.71C33.7 9.64 34.04 10.02 34.75 10.02C35.14 10.02 35.41 9.91 35.75 9.65L35.86 9.8C35.53 10.28 34.97 10.73 34.19 10.73C33.28 10.73 32.58 10.24 32.58 8.88V4.51H31.72V4.33C32.44 3.94 33.02 3.26 33.44 2.46H33.69V4.03L33.7 4.05Z" fill="#77787B"/>
              <path d="M38.82 7.5C38.82 5.33 40.15 3.92 41.83 3.92C43.6 3.92 44.76 5.26 44.76 7.17C44.76 9.34 43.43 10.75 41.75 10.75C39.98 10.75 38.82 9.44 38.82 7.5ZM43.56 7.49C43.56 5.82 42.99 4.32 41.76 4.32C40.64 4.32 40.02 5.48 40.02 7.19C40.02 8.9 40.59 10.36 41.81 10.36C42.94 10.36 43.56 9.2 43.56 7.49Z" fill="#77787B"/>
              <path d="M47.34 9.67C47.34 10.16 47.63 10.26 48.47 10.3V10.63H45.34V10.3C46.01 10.26 46.21 10.16 46.21 9.67V4.54H45.28V4.36L46.21 3.98V3.13C46.21 1.58 47.08 0.730003 48.45 0.730003C49.32 0.730003 49.78 1.05 49.78 1.64C49.78 1.92 49.64 2.15 49.41 2.27H48.75C48.78 2.14 48.79 2.02 48.79 1.84C48.79 1.36 48.63 1.03 48.18 1.03C47.65 1.03 47.35 1.51 47.35 2.42V4.05H48.98V4.53H47.35V9.66L47.34 9.67Z" fill="#77787B"/>
              <path d="M53.66 4.05H55.47V4.53H53.66V8.71C53.66 9.64 54 10.02 54.71 10.02C55.1 10.02 55.37 9.91 55.71 9.65L55.82 9.8C55.49 10.28 54.93 10.73 54.15 10.73C53.24 10.73 52.54 10.24 52.54 8.88V4.51H51.68V4.33C52.4 3.94 52.98 3.26 53.4 2.46H53.65V4.03L53.66 4.05Z" fill="#77787B"/>
              <path d="M56.93 1.94L56.11 1.5V1.36L57.92 0.730003H58.07V5.13C58.66 4.47 59.4 3.93 60.37 3.93C61.53 3.93 62.08 4.64 62.08 6V9.67C62.08 10.16 62.28 10.26 62.95 10.3V10.63H60.07V10.3C60.74 10.26 60.94 10.16 60.94 9.67V5.99C60.94 5.06 60.56 4.66 59.81 4.66C59.17 4.66 58.55 5.01 58.07 5.43V9.66C58.07 10.15 58.27 10.25 58.94 10.29V10.62H56.06V10.29C56.73 10.25 56.93 10.15 56.93 9.66V1.94Z" fill="#77787B"/>
              <path d="M68.64 6.43V6.7H64.44C64.35 8.75 65.36 9.91 66.68 9.91C67.59 9.91 68.13 9.48 68.58 8.78L68.73 8.86C68.43 9.96 67.55 10.76 66.24 10.76C64.45 10.76 63.42 9.31 63.42 7.54C63.42 5.47 64.63 3.94 66.26 3.94C67.89 3.94 68.64 5.03 68.64 6.44V6.43ZM64.48 6.33H67.54C67.54 5.19 67.15 4.33 66.16 4.33C65.17 4.33 64.61 5.2 64.48 6.33Z" fill="#77787B"/>
              <path d="M22.4 21.15C22.4 20.32 22.12 19.92 21.41 19.92C20.83 19.92 20.36 20.22 19.92 20.58V24.84C19.92 25.31 20.1 25.4 20.73 25.43V25.8H17.68V25.43C18.31 25.39 18.5 25.3 18.5 24.84V21.15C18.5 20.32 18.21 19.92 17.5 19.92C16.92 19.92 16.45 20.22 16.01 20.58V24.84C16.01 25.31 16.2 25.4 16.83 25.43V25.8H13.76V25.43C14.39 25.39 14.59 25.3 14.59 24.84V20.33L13.79 19.89V19.71L15.84 19.05H16.05L16 20.26C16.57 19.6 17.21 19.05 18.24 19.05C19.15 19.05 19.66 19.44 19.83 20.3C20.4 19.64 21.12 19.05 22.13 19.05C23.28 19.05 23.8 19.75 23.8 21.1V24.84C23.8 25.31 24 25.4 24.63 25.43V25.8H21.57V25.43C22.2 25.39 22.38 25.3 22.38 24.84V21.15H22.4Z" fill="#231F20"/>
              <path d="M25.08 22.64C25.08 20.48 26.44 19.05 28.21 19.05C29.98 19.05 31.28 20.38 31.28 22.32C31.28 24.49 29.92 25.92 28.15 25.92C26.38 25.92 25.08 24.61 25.08 22.63V22.64ZM29.8 22.71C29.8 20.94 29.29 19.47 28.16 19.47C27.12 19.47 26.59 20.59 26.59 22.28C26.59 23.97 27.1 25.52 28.22 25.52C29.26 25.52 29.8 24.39 29.8 22.71Z" fill="#231F20"/>
              <path d="M35.83 16.71V16.52L37.84 15.9H38.04V24.52C38.04 24.95 38.07 25.06 38.6 25.11L38.93 25.14V25.47L36.83 25.92H36.58L36.63 24.75C36.12 25.44 35.49 25.92 34.59 25.92C33.05 25.92 32.05 24.64 32.05 22.8C32.05 20.46 33.41 19.06 35.2 19.06C35.82 19.06 36.31 19.24 36.63 19.53V17.14L35.83 16.71ZM33.42 22.25C33.42 23.79 34.09 24.98 35.34 24.98C35.87 24.98 36.3 24.8 36.63 24.46V21.22C36.63 20.13 36.1 19.49 35.29 19.49C34.14 19.49 33.42 20.59 33.42 22.25Z" fill="#231F20"/>
              <path d="M41.92 22.64C41.92 20.48 43.28 19.05 45.05 19.05C46.82 19.05 48.12 20.38 48.12 22.32C48.12 24.49 46.76 25.92 44.99 25.92C43.22 25.92 41.92 24.61 41.92 22.63V22.64ZM46.63 22.71C46.63 20.94 46.12 19.47 44.99 19.47C43.95 19.47 43.42 20.59 43.42 22.28C43.42 23.97 43.93 25.52 45.05 25.52C46.09 25.52 46.63 24.39 46.63 22.71Z" fill="#231F20"/>
              <path d="M49.4 20.33L48.6 19.89V19.71L50.64 19.05H50.87L50.82 20.2C51.28 19.54 51.96 19.05 52.94 19.05C54.51 19.05 55.44 20.21 55.44 22.1C55.44 24.5 53.99 25.93 52.17 25.93C51.64 25.93 51.13 25.79 50.82 25.53V27.49C50.82 28 51.06 28.06 51.91 28.12V28.49H48.57V28.12C49.2 28.08 49.4 27.99 49.4 27.53V20.34V20.33ZM54.02 22.66C54.02 21.18 53.48 19.93 52.15 19.93C51.64 19.93 51.14 20.17 50.82 20.51V23.99C50.82 25.04 51.29 25.52 52.14 25.52C53.3 25.52 54.02 24.27 54.02 22.66Z" fill="#231F20"/>
              <path d="M1.35999 26.96V0.559998" stroke="#E43E30" id="footer-logo-separator"/>
              <path d="M61.86 25.02C62.7 25.02 63.28 24.63 63.71 23.97L63.86 24.05C63.48 25.24 62.66 25.93 61.49 25.93C59.85 25.93 58.73 24.65 58.73 22.74C58.73 20.66 59.91 19.09 61.8 19.09C62.99 19.09 63.69 19.61 63.69 20.43C63.69 20.76 63.54 21.06 63.28 21.2H62.56C62.59 21.06 62.61 20.91 62.61 20.67C62.61 20.06 62.39 19.48 61.57 19.48C60.43 19.48 59.74 20.67 59.74 22.18C59.74 23.88 60.55 25.03 61.86 25.03V25.02Z" fill="#77787B"/>
              <path d="M64.36 22.66C64.36 20.48 65.69 19.07 67.38 19.07C69.16 19.07 70.32 20.41 70.32 22.33C70.32 24.51 68.99 25.92 67.3 25.92C65.53 25.92 64.36 24.6 64.36 22.66ZM69.11 22.65C69.11 20.98 68.54 19.47 67.31 19.47C66.18 19.47 65.56 20.64 65.56 22.35C65.56 24.06 66.13 25.53 67.36 25.53C68.49 25.53 69.11 24.36 69.11 22.65Z" fill="#77787B"/>
              <path d="M79.46 21.14C79.46 20.23 79.14 19.81 78.39 19.81C77.74 19.81 77.22 20.17 76.74 20.58V24.83C76.74 25.32 76.94 25.43 77.62 25.46V25.79H74.73V25.46C75.4 25.42 75.6 25.32 75.6 24.83V21.14C75.6 20.23 75.28 19.81 74.54 19.81C73.89 19.81 73.37 20.17 72.89 20.58V24.83C72.89 25.32 73.09 25.43 73.76 25.46V25.79H70.87V25.46C71.54 25.42 71.75 25.32 71.75 24.83V20.29L70.93 19.85V19.71L72.79 19.08H72.94L72.89 20.28C73.49 19.62 74.12 19.08 75.12 19.08C76.01 19.08 76.49 19.49 76.67 20.32C77.27 19.66 77.98 19.08 78.98 19.08C80.12 19.08 80.6 19.79 80.6 21.16V24.84C80.6 25.33 80.8 25.44 81.47 25.47V25.8H78.58V25.47C79.25 25.43 79.46 25.33 79.46 24.84V21.15V21.14Z" fill="#77787B"/>
              <path d="M82.64 20.29L81.82 19.85V19.71L83.68 19.08H83.83L83.78 20.21C84.27 19.54 84.96 19.08 85.91 19.08C87.51 19.08 88.41 20.3 88.41 22.12C88.41 24.47 86.99 25.92 85.23 25.92C84.67 25.92 84.14 25.77 83.78 25.46V27.49C83.78 28.01 84.03 28.09 84.91 28.15V28.48H81.77V28.15C82.44 28.11 82.65 28.01 82.65 27.52V20.29H82.64ZM87.26 22.64C87.26 21.21 86.73 19.81 85.28 19.81C84.71 19.81 84.13 20.09 83.77 20.49V23.95C83.77 25.08 84.32 25.55 85.22 25.55C86.46 25.55 87.26 24.27 87.26 22.63V22.64Z" fill="#77787B"/>
              <path d="M93.86 24.39C93.86 24.95 93.99 25.23 94.35 25.23C94.55 25.23 94.74 25.15 94.93 25.07L94.99 25.26C94.69 25.72 94.25 25.93 93.77 25.93C93.15 25.93 92.78 25.49 92.72 24.78C92.28 25.3 91.57 25.93 90.68 25.93C89.69 25.93 89.07 25.28 89.07 24.35C89.07 23.28 89.87 22.84 90.87 22.46L92.7 21.78V20.92C92.7 20.04 92.37 19.41 91.53 19.41C90.81 19.41 90.5 19.89 90.5 20.54C90.5 20.76 90.53 20.95 90.59 21.2L89.92 21.3C89.6 21.2 89.43 20.96 89.43 20.6C89.43 19.65 90.42 19.09 91.7 19.09C93.14 19.09 93.86 19.71 93.86 21.04V24.4V24.39ZM92.71 24.5V22.12L91.19 22.74C90.56 22.99 90.19 23.35 90.19 24.02C90.19 24.69 90.57 25.17 91.29 25.17C91.81 25.17 92.19 24.93 92.71 24.5Z" fill="#77787B"/>
              <path d="M100.09 21.14C100.09 20.2 99.71 19.81 98.96 19.81C98.31 19.81 97.69 20.17 97.21 20.58V24.83C97.21 25.32 97.41 25.43 98.08 25.46V25.79H95.19V25.46C95.86 25.42 96.07 25.32 96.07 24.83V20.29L95.25 19.85V19.71L97.11 19.08H97.26L97.21 20.28C97.81 19.62 98.54 19.08 99.52 19.08C100.69 19.08 101.23 19.75 101.23 21.12V24.83C101.23 25.32 101.43 25.43 102.11 25.46V25.79H99.22V25.46C99.89 25.42 100.09 25.32 100.09 24.83V21.14Z" fill="#77787B"/>
              <path d="M107.36 20.29C107.41 20.15 107.44 20.05 107.44 19.95C107.44 19.65 107.19 19.61 106.55 19.53V19.2H108.59V19.53C108.12 19.64 108.04 19.75 107.94 20L105.25 27.11C104.89 28.04 104.51 28.56 103.75 28.56C103.37 28.56 102.94 28.33 102.84 27.93V27.56C103.06 27.62 103.23 27.67 103.57 27.67C104.24 27.67 104.7 27.48 105 26.62L105.24 25.97L102.69 20C102.58 19.73 102.51 19.64 102.04 19.53V19.2H104.84V19.53C104.21 19.61 103.95 19.64 103.95 19.95C103.95 20.05 103.98 20.15 104.03 20.31L105.75 24.61L107.34 20.3L107.36 20.29Z" fill="#77787B"/>
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