import "../ourProjects/OurProjects.css";
import Slider from "./Slider";

const OurProjects = () => {
  return (
    <div className="projects" id="games">
      <div className="project__bloc">
        <div className="__container">
          <div className="title__projects">Our projects</div>
          <div className="slider__content">
            <Slider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
