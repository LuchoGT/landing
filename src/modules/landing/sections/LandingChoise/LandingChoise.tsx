import { LandingChoise1 } from '@/assets/img/LandingChoise/LandingChoise1';
import './LandingChoise.scss'
import { LandingChoise2 } from '@/assets/img/LandingChoise/LandingChoise2';
import { LandingChoise3 } from '@/assets/img/LandingChoise/LandingChoise3';
import { LandingChoise4 } from '@/assets/img/LandingChoise/LandingChoise4';

export const LandingChoise = () => {
  return (
    <section className="choise">
      <h2>¿Porqué debes elegirnos?</h2>
      <div className="choise__data">
        <ul className="choise__item">
          <li><LandingChoise1/></li>
          <li>
            <span className="span">Resultados comprobados</span>
          </li>
          <li>
            Con un enfoque práctico, garantizamos que cada curso te acerque más
            a tus metas profesionales y personales.
          </li>
        </ul>
        <ul className="choise__item">
          <li><LandingChoise2/></li>
          <li>
            <span className="span">Potencia tu aprendizaje</span>
          </li>
          <li>
            Nuestros cursos están diseñados para ofrecerte conocimientos sólidos
            y aplicables en el mundo real.
          </li>
        </ul>
        <ul className="choise__item">
          <li><LandingChoise3/></li>
          <li>
            <span className="span">Flexibilidad total</span>
          </li>
          <li>
            Aprende a tu propio ritmo con acceso 24/7 a nuestros recursos
            educativos desde cualquier lugar.
          </li>
        </ul>
        <ul className="choise__item">
          <li><LandingChoise4/></li>
          <li>
            <span className="span">Instructores expertos</span>
          </li>
          <li>
            Nuestro equipo de profesionales altamente calificados están
            comprometidos con tu éxito.
          </li>
        </ul>
      </div>
    </section>
  );
};
