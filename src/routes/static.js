const express = require("express");
const router = express.Router();

const staticController = require("../controllers/staticController");

router.get("/", staticController.index);
module.exports = {
    /*
    router.get("/", (req, res, next) => {
        res.send("Welcome to Bloccit from static");
    });*/
   
}