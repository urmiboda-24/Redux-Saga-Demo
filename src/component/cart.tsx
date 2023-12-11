import { useSelector, useDispatch } from "react-redux";
import { increaseQuntity } from "../redux/cartAction";
import { it } from "node:test";
import { addToCart, decreaseQuntity, removeFromCart } from "../redux/action";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.CartData);
  const handleIncreaseQuntity = (data: any) => {
    dispatch(addToCart(data));
  };
  const handleDecreaseQuntity = (item: any) => {
    //dispatch(removeFromCart(item));
    dispatch(decreaseQuntity(item));
  };
  const handleRemoveItem = (data: any) => {
    dispatch(removeFromCart(data));
  };
  const totalAmount: number =
    cartData.length > 0
      ? cartData.reduce((total: number, item: any) => {
          return total + item.price;
        }, 0)
      : 0;

  return (
    <>
      <Link to="/">Listing</Link>
      {cartData.length > 0 ? (
        <div className="grid-container cart-container">
          <div className="grid-item">
            <table>
              <tr className="tableHeader">
                <th className="tableHeaderNameTitle">Name</th>
                <th className="tableHeaderImgTitle">Image</th>
                <th className="tableHeaderPriceTitle">Price</th>
                <th className="tableHeaderBrandTitle">Brand</th>
                <th className="tableHeaderActionTitle">Action</th>
              </tr>
              {cartData?.map((item: any) => (
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.thumbnail} alt="Denim Jeans" />
                  </td>
                  <td>${item.price}</td>
                  <td>{item.brand}</td>
                  <td className="cartActionBtnContainer">
                    <div>
                      <button onClick={() => handleIncreaseQuntity(item)}>
                        +
                      </button>
                    </div>
                    <div>
                      <button onClick={() => handleDecreaseQuntity(item)}>
                        -
                      </button>
                    </div>
                    <div>
                      {/* <button onClick={() => handleRemoveItem(item)}>
                        Remove Item
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="cartToatalAmonutContainer">
            <p>Total Amount: ${totalAmount}</p>
          </div>
        </div>
      ) : (
        <span className="emptyCartMsg">No Item In Cart</span>
      )}
    </>
  );
};
export default Cart;
