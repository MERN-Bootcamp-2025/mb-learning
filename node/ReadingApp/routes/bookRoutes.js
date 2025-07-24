const express = require("express");
const router = express.Router();
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.get("/", getBooks);
router.get("/:id", getBookById);

router.post("/", authMiddleware, upload.single("image"), createBook);
router.put("/:id", authMiddleware, upload.single("image"), updateBook);
router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;
