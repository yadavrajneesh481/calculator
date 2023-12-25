const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("hii i am calculator");
  res.status(200).json({
    msg: "hii i am calculator",
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
