import { useSelector, useDispatch } from "react-redux";
import { Cart_Img } from "../assets";
import { emptyCart } from "../redux/action";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: any) => state.CartData);

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  return (
    <div className="header">
      <div className="cart-div">
        <h2>Redux E-comm</h2>
        <button onClick={handleEmptyCart}>Empty Cart</button>
        <Link to="/cart">
          <img src={Cart_Img} alt="cart-img" />
          <span>{result.length}</span>
        </Link>
      </div>
    </div>
  );
};
