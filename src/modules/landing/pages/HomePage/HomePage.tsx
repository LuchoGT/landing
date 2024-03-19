import { Carousel } from "../../components/Carousel/Carousel";
import { LandingCourses } from "../../sections/LandingCourses/LandingCourses";
import { LandingOpinions } from "../../sections/LandingOpinions/LandingOpinions";
import { LandingQuestions } from "../../sections/LandingQuestions/LandingQuestions";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <main className="main">
      <div className="welcome">
        <div className="welcome__container">
          <div>
            <h3 className="welcome__title">Bienvenido a Synnexa</h3>
            <h2 className="welcome__subtitle">Potenciando conocimientos, impulsando resultados</h2>
            <p className="welcome__text">
              En nuestra academia de cursos online, nos dedicamos a potenciar
              tus conocimientos para que alcances resultados extraordinarios.
              Descubre una experiencia educativa única diseñada para impulsar tu
              éxito.
            </p>
          </div>
          <p className="welcome__courses">Ver cursos</p>
        </div>
      </div>
      <div className="container">
          <Carousel/>
          <section className="choise">
            <h2>¿Porqué debes elegirnos?</h2>
            <div className="choise__data">
              <ul className="choise__item">
                <li>
                  🌍
                </li>
                <li><span className="span">Resultados comprobados</span></li>
                <li>Con un enfoque práctico, garantizamos que cada curso te acerque más a tus metas profesionales y personales.</li>
              </ul>
              <ul className="choise__item">
                <li>
                  🌍
                </li>
                <li><span className="span">Potencia tu aprendizaje</span></li>
                <li>Nuestros cursos están diseñados para ofrecerte conocimientos sólidos y aplicables en el mundo real.</li>
              </ul>
              <ul className="choise__item">
                <li>
                  🌍
                </li>
                <li><span className="span">Flexibilidad total</span></li>
                <li>Aprende a tu propio ritmo con acceso 24/7 a nuestros recursos educativos desde cualquier lugar.</li>
              </ul>
              <ul className="choise__item">
                <li>
                  🌍
                </li>
                <li><span className="span">Instructores expertos</span></li>
                <li>Nuestro equipo de profesionales altamente calificados están comprometidos con tu éxito.</li>
              </ul>
            </div>
          </section>
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
