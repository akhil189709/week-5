const express = require("express");
const app = express();
const port = 3000;


let requests = 0;
function numberOfRequests(req, res, next) {
  // console.clear();
  requests++;
  req.name = "AkhilKumar";
  console.log(`number of requests: ${requests}`);
  next();
}

app.use(numberOfRequests);

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  console.log(req.name);

  res.json({
    ans: a + b,
  });
});

app.get("/substract", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.get("/multiply", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a * b,
  });
});

app.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a / b,
  });
});

app.listen(port);
