const express = require("express");
const next = require("next");
require("dotenv").config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () =>
    console.log(
      `> server is running on ${process.env.NODE_ENV} on port ${port}`
    )
  );
});
