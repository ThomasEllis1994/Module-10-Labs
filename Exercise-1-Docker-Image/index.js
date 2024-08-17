// import express from "express";
const express = require("express");
const app = express();

app.use(express.json());
const port = 8080;
// app.use("/", express.static("public"));
app.use("/", (req, res) => {
    res.send({ status: 200, message: "Module-10 Expirimentation" });
});
//changed above for test

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
