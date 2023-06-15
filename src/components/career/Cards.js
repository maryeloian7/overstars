import "./Career.css";

const Card = (prop) => {
  return (
    <div className="card__container">
      <div className="card_bloc">
        <div className="card__img">
          <img src={prop.img} alt="" className="card__imga"/>
        </div>
        <div className="card_title">{prop.title}</div>
        <div className="card_text">
          <ul className="card_list">
            <li className="card_points">{prop.text1}</li>
            <li className="card_points">{prop.text2}</li>
            <li className="card_points">{prop.text3}</li>
            <li className="card_points">{prop.text4}</li>
            <li className="card_points">{prop.text5}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
