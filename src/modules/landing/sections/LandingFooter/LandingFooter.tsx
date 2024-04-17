import { Link } from "react-router-dom";
import "./LandingFooter.scss";
import { LandingLogoWhite } from "@/assets/img/LandingLogo/LandingLogoWhite";
import { LandingFb } from "@/assets/icon/LandingSocials/LandingFb";
import { LandingLink } from "@/assets/icon/LandingSocials/LandingLink";
import { LandingIg } from "@/assets/icon/LandingSocials/LandingIg";
import { LandingPhone } from "@/assets/icon/LandingContact/LandingPhone";
import { LandingEmail } from "@/assets/icon/LandingContact/LandingEmail";

export const LandingFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__menu">
          <figure className="footer__list footer__list--logo">
            <LandingLogoWhite/>
          </figure>
          <div className="footer__list">
            <span>Siguenos en</span>
            <ul className="footer__networks">
              <li>
                <Link to='/'><LandingFb/></Link>
              </li>
              <li>
                <Link to='/'><LandingLink/></Link>
              </li>
              <li>
                <Link to='/'><LandingIg/></Link>
              </li>
            </ul>
          </div>
          <div className="footer__list">
            <span>Contáctanos por:</span>
            <ul className="footer__contact">
              <li>
                <LandingPhone/>
                +51 937 339 543
              </li>
              <li>
                <LandingEmail/>
                synnexa@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copy">
          <p>Copyright ©️ 2024</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};
