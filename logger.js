require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const today = new Date();
  const now = today.toTimeString().substring(0, 8);
  console.log(request); //chop off the timezone information
  const result = {
    time: now,
  };
  console.info(`Time requested at ${now}`);
  response.set("Content-Type", "application/json");
  return response.send(result);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.info(`Started on port ${PORT}`);
});
