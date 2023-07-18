import React, { useState, useEffect } from "react";
import New from "./New";
import axios from "axios";
import Delete from "../component/Delete";
import { Form, Link } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);


  const fetchAllProducts = () => {
    axios
      .get("http://localhost:8080/api/products")
      // .then(res=>console.log(res))
      // .catch(err=>console.log(err))

      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

useEffect(fetchAllProducts, []);


  //bring in delete component
  const deletingProduct = (id) => {
    axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then((res) => console.log(res));
    setProducts(products.filter((targetProduct) => targetProduct._id !== id));
  };
  //TODO: ERROR on add a new product*
  // use below to view conole inspect*
  // console.log(products);
  return (
    <div>
      {/*  ERROR HERE NEW PRODUCT NOT SHOWING UNLESS REFRESHED */}
      <New onCreateNew={fetchAllProducts}/>
      {products.length > 0 ? (
        //when using .map below we have to includes key={key} in the return
        products.map((product, key) => {
          return (
            <>
              <Link to={`/viewOne/${product._id}`} key={key}>
                <h2>{product.title} </h2>
              </Link>
              <Delete
                deleteProduct={() => {
                  deletingProduct(product._id);
                }}
              />
            </>
          );
        })
      ) : (
        <p>LOADING...</p>
      )}
    </div>
  );
};

export default Dashboard;
