

import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const Edit = () => {

    const { id } = useParams();

    const navigator = useNavigate();


  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

    const [titleErr, setTitleErr] = useState("");
    const [priceErr, setPriceErr] = useState("");
    const [descriptionErr, setDescriptionErr] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((res) => {
        // console.log(res)
        // setFormData(res, Data);

        //! REMINDER pull from console naming - see res.data to auto fill*
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/api/products/${id}`, formData)
      // .then(res=> console.log(res))
      .then((res) => {
        setFormData({
          title: "",
          price: "",
          description: "",
        });
        //returns back to dashboard
        navigator("/");
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

  //!do we need to add for edit? - adding error style
  const errStyle = {
    color: "red",
    margin: 0,
    padding: 0,
    fontweight: "bold",
  };

//! Do we need to add placeholders in input fields?
  return (
    <div>
      <h2>Update a Product:</h2>
      <fieldset>
        <legend>Editing {formData.title}</legend>
        <form onSubmit={handleSubmit}>
          <p style={errStyle}>{titleErr}</p>
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={formData.title}
            placeholder="{formData.title}"
          />
          <br />
          <p style={errStyle}>{priceErr}</p>
          <label>Price</label>
          <input
            name="price"
            type="float"
            onChange={handleChange}
            value={formData.price}
            placeholder="{formData.price}"
          />
          <br />
          <p style={errStyle}>{descriptionErr}</p>
          <label>Description</label>
          <textarea
            name="description"
            type="text"
            onChange={handleChange}
            value={formData.description}
            placeholder="{formData.description}"
          />
          <br />
          <button>Save</button> 
        </form>
      </fieldset>
    </div>
  );
};


export default Edit