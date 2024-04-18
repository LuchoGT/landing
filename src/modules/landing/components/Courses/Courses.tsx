import model from "@assets/img/model.png";
import './Courses.scss'

export const Courses = () => {

  const courses = [
    {
      title: "Testing QA Manual"
    },
    {
      title: "Testing QA Manual"
    },
    {
      title: "Testing QA Manual"
    },
    {
      title: "Testing QA Manual"
    },
    {
      title: "Testing QA Manual"
    },
  ]
  return (
    <div className="course">
      {
        courses.map((course,index) => (
          <div className="course__container" key={index}>
            <p>{course.title}</p>
            <img src={model} alt="model" />
          </div>
        ))
      }
    </div>
  );
};
