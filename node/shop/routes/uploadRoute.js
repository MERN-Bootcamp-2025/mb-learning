const express = require("express");
const handleCSVUpload = require("../controllers/uploadController");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); //uploaded files will temporarily be stored 
// here before procesing

router.post("/upload", upload.single("file"), handleCSVUpload);

//upload.single('file) => Midleware to handle one file with the field name "file"
// (same name on the frontend) n input tag
//call the method after the file is added- 
//it parses the CSV, inserts data into db and retuns a response

module.exports = router;
