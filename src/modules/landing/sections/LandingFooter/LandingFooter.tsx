import "./LandingFooter.scss";

export const LandingFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__menu">
          <ul className="footer__list footer__list--logo">
            <li>Synnexa</li>
          </ul>
          <div className="footer__list">
            <span>Siguenos en</span>
            <ul className="footer__networks">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </div>
          <ul className="footer__list">
            <li><span>Contáctanos por:</span></li>
            <li>+51 937 339 543</li>
            <li>synnexa@gmail.com</li>
          </ul>
        </div>
        <div className="footer__copy">
          <p>Copyright ©️ 2024</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};
