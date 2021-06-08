require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;



app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running PORT: ${PORT}`);
});
