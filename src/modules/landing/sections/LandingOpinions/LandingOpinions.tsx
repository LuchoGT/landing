import "./LandingOpinions.scss";
import cara from "@assets/img/cara.png";

export const LandingOpinions = () => {
  return (
    <section className="opinions">
      <h2>Testimonios de nuestros alumnos</h2>
      <div className="opinions__card">
        <div className="opinions__header">
          <figure>
            <img src={cara} alt="cara" />
          </figure>
          <span>Sayuri Giraldo</span>
          <p>QA Tester</p>
        </div>
        <p className="opinions__text">
          Totalmente recomendado, desde la primera clase logra captar tu
          atención, he aprendido mucho más de lo que esperaba, mi profe todo un
          capo en la materia.
        </p>
      </div>
    </section>
  );
};
