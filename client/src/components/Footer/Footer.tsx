import React from 'react'
import DOMPurify from 'dompurify';
import RSLogo from '../../assets/svg/rs_school_js.svg'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer>
      <div className="rs-logo" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(RSLogo) }}>
      </div>
      <div className="devs-links">
        <a href="https://github.com/qua1ntman" className="dev">Mikhail</a>
        <a href="https://github.com/Olgamalk" className="dev">Olga</a>
        <a href="https://github.com/0iskak" className="dev">Iskak</a>
      </div>
    </footer>
  )
}
