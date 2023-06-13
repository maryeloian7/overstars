import share from "../resources/AboutUs.gif"

import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="about_container" id="about_us">
      <div className="__container">
        <div className="about_body">
          <div className="about_content">
            <h2 className="about_title">About us</h2>
            <span><img src={share} alt="share" className="adaptive_shape_img"/></span>
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
            <img src={share} alt="share" className="shape_img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
