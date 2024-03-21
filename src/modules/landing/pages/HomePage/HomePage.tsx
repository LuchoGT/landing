import { Carousel } from "../../components/Carousel/Carousel";
import { LandingCarousel } from "../../sections/LandingCarousel/LandingCarousel";
import { LandingChoise } from "../../sections/LandingChoise/LandingChoise";
import { LandingCourses } from "../../sections/LandingCourses/LandingCourses";
import { LandingOpinions } from "../../sections/LandingOpinions/LandingOpinions";
import { LandingQuestions } from "../../sections/LandingQuestions/LandingQuestions";
import { LandingWelcome } from "../../sections/LandingWelcome/LandingWelcome";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <main className="main">
      <LandingWelcome/>
      <div className="container">
          <LandingCarousel/>
          <LandingChoise/>
          <section className="banner">
            <div className="banner__container">
              <div className="banner__item">
                <ul>
                  <li><span>¿Quién será tu profesor?</span></li>
                  <li>*Expertos en el Campo</li>
                  <li>*Trayectoria comprobada</li>
                  <li>*Comprometidos con tu éxito</li>
                </ul>
              </div>
              <div className="banner__item">
                <ul>
                  <li><span>Importancia del certificado</span></li>
                  <li>*Validación de Habilidades</li>
                  <li>*Reconocimiento Profesional</li>
                  <li>*Diferenciación en el Mercado Laboral</li>
                </ul>
              </div>
            </div>
          </section>
          <LandingCourses/>
          <LandingQuestions/>
          <LandingOpinions/>
      </div>
    </main>
  );
};
