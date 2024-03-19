import model from "@assets/img/model.png";
import './Courses.scss'

export const Courses = () => {
  return (
    <div className="course">
      <div className="course__container">
        <p>Testing QA Manual</p>
        <img src={model} alt="model" />
      </div>
      <div className="course__container">
        <p>Automatización de pruebas con Selenium Webdriver</p>
        <img src={model} alt="model" />
      </div>
      <div className="course__container">
        <p>Curso 3</p>
        <img src={model} alt="model" />
      </div>
      <div className="course__container">
        <p>Curso 4</p>
        <img src={model} alt="model" />
      </div>
      <div className="course__container"> 
        <p>Curso 5</p>
        <img src={model} alt="model" />
      </div>
      <div className="course__container">
        <p>Curso 6</p>
        <img src={model} alt="model" />
      </div>
    </div>
  );
};
