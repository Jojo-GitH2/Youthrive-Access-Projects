const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const products = require("./products.js");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Fruit Shop!</h1>");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:name", (req, res) => {
  const product = products.products.find(
    (product) => product.name === req.params.name.toLowerCase()
  );
  if (!product) {
    res
      .status(404)
      .send(
        `<em>${req.params.name}</em> is not available, kindly check the name again.`
      );
  } else {
    res.json(product);
  }
});
