import React from "react";
import "./Product.css";
function Product(props) {
  return (
    <div className="Products">
      <div className="rectangle">
        <div>
          <img className="image" src={props.productImage} alt="images" />
        </div>
        <div>
          <p className="productName">{props.productName}</p>
        </div>
        <div className="Stars">
          <div>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#FFAC4B"
              />
            </svg>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#FFAC4B"
              />
            </svg>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#FFAC4B"
              />
            </svg>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#FFAC4B"
              />
            </svg>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#FFAC4B"
              />
            </svg>
          </div>
          <div className="rate">
            <span className="strickRate">{props.oldPrice}/-</span>
            <span className="actuallRate">{props.newPrice}/-</span>
          </div>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              props.setAdd(props.add + 1);
              console.log("hai");
            }}
          >
            <span className="CartName">ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
