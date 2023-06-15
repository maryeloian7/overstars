import game from "../../resources/Rectangle.svg";

import "./GameName.css";

const GameName = () => {
  return (
    <div className="game_container" id="about_us">
      <div className="__container">
        <div className="game_body">
          <div className="game_content">
            <h2 className="game_title">Game Name</h2>
            <span>
              <img src={game} alt="share" className="game_shape_img" />
            </span>
            <div className="game_text">
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
            <img src={game} alt="share" className="game_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameName;
