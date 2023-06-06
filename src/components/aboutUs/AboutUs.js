import share from "../resources/Shapeshhape.svg"

import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="about_container">
      <div className="__container">
        <div className="about_body">
          <div className="about_content">
            <h2 className="about_title">About us</h2>
            <div className="about_text">
              We are a rapidly growing mobile GayDev studio, driven by our
              passion for creating exceptional gaming experiences. With a team
              of talented and dedicated individuals, we strive to push the
              boundaries of mobile gaming and deliver captivating adventures
              that resonate with players. Join us on our exciting journey as we
              bring to life innovative concepts and redefine the way people
              engage with mobile games.
            </div>
          </div>
          <div className="shape">
            <img src={share} alt="share" className="im"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
