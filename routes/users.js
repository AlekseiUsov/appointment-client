const express = require("express");
const router = express.Router();

// Functions
const { login, registration, getNameSpecialist } = require("../utils/api");

router.post("/login", login);

router.post("/registration", registration);

router.get("/specialist", getNameSpecialist);

module.exports = router;
