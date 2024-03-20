import "./LandingWelcome.scss";

export const LandingWelcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <div>
          <h3 className="welcome__title">Bienvenido a Synnexa</h3>
          <h2 className="welcome__subtitle">
            Potenciando conocimientos, impulsando resultados.
          </h2>
          <div className="welcome__text">
            <p>
              En nuestra academia de cursos online, nos dedicamos a potenciar
              tus conocimientos para que alcances resultados extraordinarios.
            </p>
            <p>
              Descubre una experiencia educativa única diseñada para impulsar tu
              éxito.
            </p>
          </div>
        </div>
        <p className="welcome__courses">Ver cursos</p>
      </div>
    </section>
  );
};
