import React from "react";
import "./Footerbtn.css";

function FooterContent() {
  const [email, setEmail] = React.useState("");
  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit() {
    fetch(
      "https://accio-emailex-default-rtdb.asia-southeast1.firebasedatabase.app//messages.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
  }

  return (
    <div className="Footer-Heddings-And-Names">
      <div className="footer-content">
        <ul>
          <li className="first-list">Company Info</li>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li className="first-list">Legal</li>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li className="first-list">Features</li>
          <li>Business Marketing</li>
          <li>User Analytic</li>
          <li>Live Chat</li>
          <li>Unlimited Support</li>
        </ul>
        <ul>
          <li className="first-list">Resources</li>
          <li>IOS & Android</li>
          <li>Watch a Demo</li>
          <li>Customers</li>
          <li>API</li>
        </ul>
        <ul className="last-footer">
          <li>
            <li className="first-list">Get In Touch</li>
            <li className="last-footers">
              <input
                type="text"
                className="inputs"
                placeholder="Your Email"
                onChange={handleChange}
              />
              <span class="input-group-text" id="inputGroupPrepend">
                <button
                  type="button"
                  className="footer-button"
                  onClick={handleSubmit}
                >
                  Subscribe
                </button>
              </span>
            </li>
          </li>
          <br />
          <li>Lorem impsum dolor amit</li>
        </ul>
      </div>
      <div>
        <p className="CopyRight">
          Made With <span className="Heart">❤</span> at AccioJob
        </p>
      </div>
    </div>
  );
}

export default FooterContent;
