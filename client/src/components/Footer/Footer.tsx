import React, { useContext } from "react";
import DOMPurify from "dompurify";
import RSLogo from "../../assets/svg/rs_school_js.svg";
import "./Footer.scss";
import { appContext } from "../../App";

export const Footer = () => {
  const { color } = useContext(appContext);

  return (
    <footer>
      <a
        href="https://rs.school/js/"
        rel="noreferrer"
        target={"_blank"}
        className="rs-logo"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(RSLogo) }}
      ></a>
      <div className="devs-links">
        <a
          href="https://github.com/qua1ntman"
          className="dev"
          rel="noreferrer"
          target={"_blank"}
          style={{ color }}
        >
          Mikhail
        </a>
        <a
          href="https://github.com/Olgamalk"
          className="dev"
          rel="noreferrer"
          target={"_blank"}
          style={{ color }}
        >
          Olga
        </a>
        <a
          href="https://github.com/0iskak"
          className="dev"
          rel="noreferrer"
          target={"_blank"}
          style={{ color }}
        >
          Iskak
        </a>
      </div>
    </footer>
  );
};
