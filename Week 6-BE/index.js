const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Define Middleware to ensure product name has similar format
app.use((req, res, next) => {
  if (req.body.name) {
    req.body.name = req.body.name.split(" ").join("_").toLowerCase();
  }
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>This is the Product Inventory API</h1>");
});

// Use product routes
app.use("/products", productRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server is running at ${PORT}...`));
