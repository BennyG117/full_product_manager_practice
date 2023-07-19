import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

//props is onCreateNew = {fetchAllProducts} from the dashboard
const New = (props) => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

const {onCreateNew} = props

  //added for errors:
  const [titleErr, setTitleErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/products", formData)
      // .then(res=> console.log(res))
      .then((res) => {
        setFormData({
          title: "",
          price: "",
          description: "",
        });
        // navigator("/");
        //line below uses props because we deconstructed on L15
        onCreateNew();
      })
      // .catch(err=>console.log(err))
      .catch((err) => {
        const errs = err.response.data.errors;
        if (errs.title) {
          setTitleErr(errs.title.message);
        } else {
          setTitleErr("");
        }
        if (errs.price) {
          setPriceErr(errs.price.message);
        } else {
          setPriceErr("");
        }
        if (errs.description) {
          setDescriptionErr(errs.description.message);
        } else {
          setDescriptionErr("");
        }
      });
  };

  //!adding error style
  const errStyle = {
    color: "red",
    margin: 0,
    padding: 0,
    fontweight: "bold",
  };

  return (
    <div>
      <h2>Add a new Product:</h2>
      <fieldset>
        <legend>New Product</legend>
        <form onSubmit={handleSubmit}>
          <p style={errStyle}>{titleErr}</p>
          <label>Title:</label>
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={formData.title}
          />
          <br />
          <p style={errStyle}>{priceErr}</p>
          <label>Price</label>
          <input
            name="price"
            type="float"
            step="0.01"
            onChange={handleChange}
            value={formData.price}
          />
          <br />
          <p style={errStyle}>{descriptionErr}</p>
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={handleChange}
            value={formData.description}
          />
          <br />
          <button>Create</button>
        </form>
      </fieldset>
    </div>
  );
};

export default New;
