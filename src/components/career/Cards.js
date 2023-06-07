import "./Career.css";

const Cart = (prop) => {
  return (
    <div className="cart__container">
      <div className="cart_bloc">
        <div className="cart__img">
          <img src={prop.img} alt="" />
        </div>
        <div className="cart_title">{prop.title}</div>
        <div className="cart_text">
            <ul className="cart_list">
                <li className="cart_points">{prop.text1}</li>
                <li className="cart_points">{prop.text2}</li>
                <li className="cart_points">{prop.text3}</li>
                <li className="cart_points">{prop.text4}</li>
                <li className="cart_points">{prop.text5}</li>
            </ul>
            </div>
      </div>
    </div>
  );
};

export default Cart;
