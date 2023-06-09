import "./Career.css";
import Card from "./Cards";

import fire from "../../resources/Fire.png";
import hearth from "../../resources/Hearth.png";
import user from "../../resources/User.png";

const Career = () => {
  return (
    <div className="career__container" id="career">
      <div className="body__container">
        <h2 className="career_title">Career</h2>
        <div className="cards__container">
          <Card
            img={fire}
            title="Junior Unity Developer"
            text1="Good understanding of game design and mechanics"
            text2="Bachelor's degree in BSUIR or BSU"
            text3="Gay Orientation"
            text4="Passion for gaming and staying  updated with industry trends"
            text5="Good communication  and teamwork abilities"
          />
          <Card
            img={hearth}
            title="Junior Game Designer"
            text1="Good understanding of game design and mechanics"
            text2="Bachelor's degree in BSUIR or BSU"
            text3="Gay Orientation"
            text4="Passion for gaming and staying  updated with industry trends"
            text5="Good communication  and teamwork abilities"
          />
          <Card
            img={user}
            title="Trainee Cleaner (Trofim)"
            text1="Good understanding of game design and mechanics"
            text2="Bachelor's degree in BSUIR or BSU"
            text3="Gay Orientation"
            text4="Passion for gaming and staying  updated with industry trends"
            text5="Good communication  and teamwork abilities"
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
