const Product = require("../models/product.model");

module.exports = {
  // temp test
  hello: (req,res)=>{
    res.json("Helllllooooooo World");
  },

  postCreateProduct: (req, res) => {
    Product.create(req.body)
      .then((newItem) => {
        res.json(newItem);
      })
      .catch((err) => {
        console.log(err);
        res.json(err?.errors?.message || err);
      });
  },

  getAllProducts: (req, res) => {
    Product.find()
      .then((items) => {
        res.json(items);
      })
      .catch((err) => {
        console.log(err);
        res.json(err?.errors?.message || err);
      });
  },
  getOneProducts: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneItem) => {
        res.json(oneItem);
      })
      .catch((err) => {
        console.log(err);
        res.json(err?.errors?.message || err);
      });
  },
  putUpdateProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatingItem) => {
        res.json(updatingItem);
      })
      .catch((err) => {
        console.log(err);
        res.json(err?.errors?.message || err);
      });
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((deleteProduct) => {
        res.json(deleteProduct);
      })
      .catch((err) => {
        console.log(err);
        res.json(err?.errors?.message || err);
      });
  }
};
