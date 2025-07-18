const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose");
const User = require("./users");

mongoose.connect(
  "mongodb+srv://arzoojain:C62XkeO01VxbAfDl@cluster1.q2vgonx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
);

const db = mongoose.connection;
db.once("open", async () => {
  if ((await User.countDocuments().exec()) > 0) return;

  Promise.all([
    User.create({ name: "Arzoo" }),
    User.create({ name: "Aastha" }),
    User.create({ name: "Mansi" }),
    User.create({ name: "Jidnya" }),
    User.create({ name: "Vineet" }),
    User.create({ name: "Manas" }),
    User.create({ name: "Shreyas" }),
    User.create({ name: "Devansh" }),
    User.create({ name: "Madhura" }),
    User.create({ name: "Alice" }),
    User.create({ name: "Verity" }),
    User.create({ name: "Amir" }),
    User.create({ name: "Hassan" }),
  ]).then(() => {
    console.log("Added Users");
  });
});

// const users = [
//   {
//     id: 1,
//     name: "Arzoo",
//   },
//   {
//     id: 2,
//     name: "Aastha",
//   },
//   {
//     id: 3,
//     name: "Mansi",
//   },
//   {
//     id: 4,
//     name: "Jidnya",
//   },
//   {
//     id: 5,
//     name: "Manas",
//   },
//   {
//     id: 6,
//     name: "Vint",
//   },
//   {
//     id: 7,
//     name: "Shreyas",
//   },
//   {
//     id: 8,
//     name: "Amir",
//   },
//   {
//     id: 9,
//     name: "Hassan",
//   },
//   {
//     id: 10,
//     name: "Verity",
//   },
//   {
//     id: 11,
//     name: "Pip",
//   },
//   {
//     id: 12,
//     name: "Ravi",
//   },
//   {
//     id: 13,
//     name: "Rachel",
//   },
// ];

// const posts = [
//   {
//     id: 1,
//     name: "post1",
//   },
//   {
//     id: 2,
//     name: "post2",
//   },
//   {
//     id: 3,
//     name: "post3",
//   },
//   {
//     id: 4,
//     name: "post4",
//   },
//   {
//     id: 5,
//     name: "post5",
//   },
//   {
//     id: 6,
//     name: "post6",
//   },
//   {
//     id: 7,
//     name: "post7",
//   },
//   {
//     id: 8,
//     name: "post8",
//   },
//   {
//     id: 9,
//     name: "post9",
//   },
//   {
//     id: 10,
//     name: "post10",
//   },
//   {
//     id: 11,
//     name: "post11",
//   },
//   {
//     id: 12,
//     name: "post12",
//   },
//   {
//     id: 13,
//     name: "post13",
//   },
// ];

const paginatedResults = (model) => {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < await model.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};

app.get("/users", paginatedResults(User), (req, res, next) => {
  res.json(res.paginatedResults);
});

// app.get("/posts",paginatedResults(posts),(req,res,next)=>{
//     res.json(res.paginatedResults);
// })

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
