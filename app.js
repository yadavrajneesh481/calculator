const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("hii i am calculator");
  res.status(200).json({
    msg: "hii i am calculator",
  });
});
app.get("/plus/:num1/:num2", (req, res) => {
  const num1 = req.params.num1;
  const n1 = parseInt(num1);
  const num2 = req.params.num2;
  const n2 = parseInt(num2);
  res.status(200).json({
    add: "This is addition result" + n1 + n2,
  });
});

app.get("/subtract/:num1/:num2", (req, res) => {
  const num1 = req.params.num1;
  const n1 = parseInt(num1);
  const num2 = req.params.num2;
  const n2 = parseInt(num2);
  res.status(200).json({
    subtract: n1 - n2,
  });
});
app.get("/division/:num1/:num2", (req, res) => {
  try {
    const num1 = req.params.num1;
    const n1 = parseInt(num1);
    const num2 = req.params.num2;
    const n2 = parseInt(num2);
    const ans = n1 / n2;

    if (ans == Infinity) throw new Error("Divide by zero error.");
    else console.log("Not error");

    app.get("/multiply/:num1/:num2", (req, res) => {
      const num1 = req.params.num1;
      const n1 = parseInt(num1);
      const num2 = req.params.num2;
      const n2 = parseInt(num2);
      res.status(200).json({
        multiply: n1 * n2,
      });
    });
    res.status(200).json({
      division: ans,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
