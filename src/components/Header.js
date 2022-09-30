import React from "react";
import logo from "./utils/girlimg.png";
const Header = () => (
  <div
    style={{
      marginLeft: "15px",
      width: "1300px",
      height: "622px",
      background: "linear-gradient(90deg, #96E9FB 0%, #ABECD6 100%)",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "row",
    }}
  >
    <div style={{ paddingTop: "151.2px", paddingLeft: "126px" }}>
      <h5
        style={{
          width: "122px",
          height: "24px",
          fontSize: "16px",
          fontStyle: "normal",
          lineHeight: "24px",
          letterSpacing: "0.1px",
          color: "#2A7CC7",
          margin: "0px",
        }}
      >
        Summer2020
      </h5>
      <h1
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "58px",
          lineHeight: "80px",
          letterSpacing: "0.2px",
          color: "#252B42",
          margin: "0px",
        }}
      >
        NEW COLLECTION
      </h1>
      <h4
        style={{
          width: "376px",
          height: "60px",

          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "30px",

          letterSpacing: "0.2px",
          color: "#737373",
        }}
      >
        We know how large objects will act,
        <br /> but things on a small scale.
      </h4>
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px 40px",
          gap: "10px",

          width: "221px",
          height: "62px",

          background: "#23A6F0",
          borderRadius: "5px",
        }}
      >
        <span
          style={{
            width: "141px",
            height: "32px",

            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "32px",
            textAlign: "center",
            letterSpacing: "0.1px",

            color: "#FFFFFF",
          }}
        >
          SHOP NOW
        </span>
      </button>
    </div>
    <div style={{}}>
      <div
        style={{
          position: "absolute",
          width: "79.92px",
          height: "79.92px",
          left: "628.67px",
          top: "76.35px",
          background: "#ffffff",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "15.26px",
          height: "15.26px",
          left: "1320.46px",
          top: "183.7px",
          zIndex: "1",
          background: "#977DF4",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "31.24px",
          height: "31.24px",
          left: "1280.21px",
          top: "280.75px",
          zIndex: "1",
          /* light-background-color */
          borderRadius: "50%",
          background: "#FFFFFF",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "15.26px",
          height: "15.26px",
          left: "730.38px",
          top: "480.14px",
          zIndex: "1",
          background: "#977DF4",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "499.88px",
          height: "499.88px",
          left: "700.67px",
          top: "70.35px",
          background: "#ffffff",
          borderRadius: "50%",
        }}
      ></div>

      <img
        src={logo}
        alt="hai"
        style={{
          position: "absolute",
          width: "696px",
          height: "699px",
          // left: "calc(50% - 696px/2 - 0.5px)",

          top: "15px",
        }}
      />
    </div>
  </div>
);
export default Header;
