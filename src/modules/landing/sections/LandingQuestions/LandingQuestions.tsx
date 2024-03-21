import { useState } from "react";
import './LandingQuestions.scss'
export const LandingQuestions = () => {

    const [question, setQuestion] = useState(false);

    const toggleComponente = () => {
        setQuestion(!question);
        console.log('aaa');
        
      };

      
  return (
    <section className="questions">
      <h2>Preguntas frecuentes</h2>
      <div className="questions__container">
        <ul>
          <li onClick={toggleComponente}>
            <p>
              ¿Cuánto tiempo tengo acceso al material del curso después de la
              inscripción?
            </p>
            <p>👇</p>
          </li>
          {
              question &&
              <div className="questions__reply">
                  <h1>Componente abierto</h1>
                  <p>Aquí va el contenido del componente.</p>
              </div>
          }
          <li>
            <p>¿Cómo se evalúa mi progreso en el curso?</p>
            <p>👇</p>
          </li>
          <li>
            <p>¿Hay pruebas o exámenes al final de cada curso?</p>
            <p>👇</p>
          </li>
          <li>
            <p>¿Ofrecen opciones de pago flexibles?</p>
            <p>👇</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
