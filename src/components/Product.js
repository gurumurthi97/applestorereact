import React from "react";
import apple from "./utils/Rectangle 2.png";
import "./Product.css";
const Product = () => (
  <div className="divouter">
    <h3 className="header">Products</h3>
    <div className="Scroll">
      <div className="rectangle">
        <div>
          <img src={apple} />
        </div>
        <div>
          <p className="phoneName">Apple iPhone 13 (128GB) - Blue</p>
        </div>
        <div className="star1">
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
        <div className="star2">
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
        <div className="star3">
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
        <div className="star4">
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
        <div className="star5">
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

        <span className="strickRate">59999/-</span>
        <span className="actuallRate">47999/-</span>
      </div>

      <button className="btn">
        <span className="Cart">ADD TO CART</span>
      </button>
    </div>
  </div>
);
export default Product;
