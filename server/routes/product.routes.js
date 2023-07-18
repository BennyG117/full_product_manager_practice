const productController = require("../controllers/product.controller");

//! below is added first to test along with routes.js
const root = require("./routes");

module.exports = (app) => {
  //default test server check
  app.get("/", root);

  //create - post
  app.post("/api/products", productController.postCreateProduct);

  //get all - get
  app.get("/api/products", productController.getAllProducts);

  //get one - get w/ id
  app.get("/api/products/:id", productController.getOneProducts);

  //update - put w/ id
  app.put("/api/products/:id", productController.putUpdateProduct);

  //delete - delete w/ id
  app.delete("/api/products/:id", productController.deleteProduct);
};
