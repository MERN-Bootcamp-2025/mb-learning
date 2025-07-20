const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { error } = require("console");
const Book = require("../models/Book");

const handleCSVUpload = (req, res) => {
  const results = [];

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filepath = path.join(__dirname, "../", req.file.path);

  fs.createReadStream(filepath)
    .pipe(csv())
    .on("data", (data) => {
      console.log("Parsed Row:", data);
      results.push(data);
    })
    .on("end", async () => {
      fs.unlinkSync(filepath);
      try {
        // if (results.length === 0) {
        //   return res
        //     .status(400)
        //     .json({ error: "CSV file is empty or invalid" });
        // }
        // const inserted = await Book.insertMany(results);
        // res.json({
        //   message: "CSV data inserted into MongoDB",
        //   insertedCount: inserted.length,
        // });

        //delete all existing data, so whenever you add a new file it won't concat the data
        await Book.deleteMany({});
        //insert all new books from CSV
        let insertedCount = 0;
        for (let book of results) {
          // const exists = await Book.findOne({
          //     "Book Name": book["Book Name"],
          //     "Author": book["Author"]
          // });

          //check that it contans both "Book Name" and "Author" keys
          if (book["Book Name"] && book["Author"]) {
            await Book.create(book);
            insertedCount++;
          }
        }
        res.json({
          message: "Old data cleared. New CSV processed",
          insertedCount,
        });
      } catch (err) {
        console.error("MongoDB Insertion Error", err);
        res.status(500).json({ error: "Failed to insert data into mongodb." });
      }
    })
    .on("error", (err) => {
      console.error("CSV Parsing error", err);
      res.status(500).json({ error: "Failed to parse csvI" });
    });
};

module.exports = handleCSVUpload;
