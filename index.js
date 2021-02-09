const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/", require("./routers/web"));
app.use("/", require("./routers/service"));
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
