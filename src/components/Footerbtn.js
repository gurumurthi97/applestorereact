import React, { useState } from "react";
import "./Footerbtn.css";

function FooterContent() {
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
              <input type="text" className="inputs" placeholder="Your Email" />
              <span class="input-group-text" id="inputGroupPrepend">
                <button type="button" className="footer-button">
                  Subscribe
                </button>
              </span>
            </li>
          </li>
          <br />
          <li>Lorem impsum dolor amit</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterContent;
