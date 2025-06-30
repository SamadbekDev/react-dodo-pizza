import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";
import ProductModal from "./components/product_modal/ProductModal";


function App({ products, dispatch }) {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => {
      dispatch({
        type: "GET_PRODUCT",
        payload: res.data,
      });
    });
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main className="container">
        {products.map(({ title, data, fixedPrice, btnText }) => (
          <ProductList
            title={title}
            data={data}
            fixedPrice={fixedPrice}
            btnText={btnText}
            setModalActive={setModalActive}
            key={Math.random()}
          />
        ))}
        <ProductModal active={modalActive} setModalActive={setModalActive} />
      </main>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
