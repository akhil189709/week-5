const express = require("express");
const app = express();
const port = 3000;

function loggerMidddleware(req, res, next) {

  // kind of method:
  console.log(req.method);

  //url of the request:
  console.log(req.originalUrl);

  //current timestamp
  console.log(new Date());

  //host name
  console.log(req.hostname);
  
  next();
}

app.use(loggerMidddleware);

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
