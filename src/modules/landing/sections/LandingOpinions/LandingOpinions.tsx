import "./LandingOpinions.scss";
import cara from "@assets/img/cara.png";

export const LandingOpinions = () => {

  const opinions = [
    {
      name: "Sayuri Giraldo",
      role: "QA Tester",
      text: 'Totalmente recomendado, desde la primera clase logra captar tu atención, he aprendido mucho más de lo que esperaba, mi profe todo un capo en la materia.',
    },
    {
      name: 'Juan Pérez',
      role: 'Desarrollador Frontend',
      text: 'Excelente experiencia, los cursos son muy completos y la plataforma es fácil de usar. ¡Muy recomendado!',
    },
    {
      name: 'María López',
      role: 'Diseñadora UX/UI',
      text: 'Increíble calidad de enseñanza, aprendí muchas técnicas nuevas que ahora aplico en mi trabajo diario. ¡Gracias!',
    },
  ]
  return (
    <section className="opinions">
      <h2>Testimonios de nuestros alumnos</h2>
      <div className="opinions__container">
        {
          opinions.map((opinion,index) => (
            <div className="opinions__card" key={index}>
              <div className="opinions__header">
                <figure>
                  <img src={cara} alt="cara" />
                </figure>
                <div>
                  <span>{opinion.name}</span>
                  <p>{opinion.role}</p>
                </div>
              </div>
              <p className="opinions__text">
                {opinion.text}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  );
};
