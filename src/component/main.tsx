import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartDataList, removeFromCart } from "../redux/action";
import { productList, searchProductList } from "../redux/productAction";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart";
export const Main = () => {
  const data = useSelector((state: any) => state.ProductList);
  const cartData = useSelector((state: any) => state.CartData);

  const dispatch = useDispatch();
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  const handleCartData = () => {
    dispatch(cartDataList());
  };
  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const handleSearchChange = (e: any) => {
    dispatch(searchProductList(e.target.value));
  };

  const handleProductList = () => {
    dispatch(productList());
    // setIsData(true);
  };

  useEffect(() => {
    handleProductList();
    handleCartData();
  }, []);
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search Here"
          className="searchContainer"
          onChange={handleSearchChange}
        />
      </div>
      {/* <div>
        <button onClick={() => handleAddToCart(data[1])}>Add To Cart</button>
      </div>
      <div>
        <button onClick={handleEmptyCart}>Empty Cart</button>
      </div>
      <div>
        <button onClick={handleRemoveFromCart}>Remove From Cart</button>
      </div>
      <div>
        <button onClick={handleProductList}>Get Product</button>
      </div> */}
      {/* {data.length > 0 ? ( */}
      <div className="grid-container">
        {data?.products?.map((item: any) => (
          <div key={item.id} className="card grid-item">
            <img src={item.thumbnail} alt="Denim Jeans" />
            <h6>{item.title}</h6>
            <p className="description">
              Brand:{item.brand} Category:{item.category}
            </p>
            <p className="price">${item.price}</p>
            <p className="description">{item.description}</p>
            {cartData.includes(item) === true ? (
              // <Link to="cart">Click to view our about page</Link>
              <Link to="/cart">
                <button>View Cart</button>
              </Link>
            ) : (
              <p>
                <button onClick={() => handleAddToCart(item)}>
                  Add To Cart
                </button>
              </p>
            )}
            <p>
              <button onClick={() => handleRemoveFromCart(item)}>
                Remove From Cart
              </button>
            </p>
          </div>
        ))}
      </div>
      {/* ) : (
        <span className="emptyCartMsg">No Item In Cart</span>
      )} */}
    </div>
  );
};
