const express = require("express");
const app = express();

app.use(express.json());

app.post("/sum", (req, res) => {
  console.log(req.body);
  
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    ans: a + b,
  });
});
app.listen(3000, () => {
  console.log(`The server is running on the port 3000`);

});
