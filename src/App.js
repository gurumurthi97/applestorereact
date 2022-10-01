import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductName from "./components/ProductName";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Footerbtn from "./components/Footerbtn";
function App() {
  const [add, setAdd] = useState(0);
  const [product, setProduct] = useState(0);
  const [data, setData] = useState({});
  let productDetails = [];
  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      // .then((json) => setData(json));
      .then((response) => {
        for (const item in response) {
          productDetails.push(response[item]);
        }
        setData(productDetails);
      });
  }, []);
  // console.log(data);
  let allProductDetails = "";
  if (data.length > 0) {
    allProductDetails = data.map((item) => (
      <Product
        id={item.id}
        productName={item.productName}
        newPrice={item.newPrice}
        oldPrice={item.oldPrice}
        productImage={item.productImage}
        setProduct={setProduct}
        product={product}
        // cart={cart}
        add={add}
        setAdd={setAdd}
      />
    ));
  }
  return (
    <div>
      <Navbar add={add} />
      <Header />
      <ProductName />
      <div className="cardScroller">{allProductDetails}</div>
      <Footer />
      <Footerbtn />
    </div>
  );
}

export default App;
