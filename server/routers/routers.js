const express = require("express");
module.exports.routers = (app) => {
  app.use(express.json({ extended: true, limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  app.use("/api/upload", require("./fileUpload/fileUpload"));
  app.use("/api/chapter", require("./chapters/router"));
  app.use("/api/level", require("./levels/router"));
  app.use("/api/section", require("./sections/router"));
};
