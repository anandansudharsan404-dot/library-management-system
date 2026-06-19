const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { checkLogin, generateMemberID, createCategoryRoute } = require("./src/utils");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // absolute path
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // unique filename
  },
});
const upload = multer({ storage });

// Session store
var sessionStore = new MySQLStore({
  host: "localhost",
  user: "root",
  password: "password",
  database: "library",
  createDatabaseTable: true,
});

app.use(
  session({
    secret: "superSecretKey123",
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

// Serve uploaded files
app.use("/uploads", express.static(uploadDir));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "library",
});

db.connect((err) => {
  if (err) console.log("Database connection failed:", err);
  else console.log("MySQL Connected");
});


app.get("/libraryloginURL", (req, res) => {
  res.render("login", { error: null });
});

app.post("/libraryloginURL", async (req, res) => {
  const { username, password } = req.body;
  // ADMIN


  // USER
  const sql = "SELECT * FROM registration WHERE mobile = ? OR email = ? ";


  db.query(sql, [username, username], async (err, results) => {
    if (err) return res.send("Error in login");

    if (results.length > 0) {
      let savePassword = results[0].passwords;
      let isCorrectPassword = await bcrypt.compare(password, savePassword);

      console.log('password comapare :>', password, savePassword, isCorrectPassword);
      if (!isCorrectPassword) {
        return res.send(`
        <script>
          alert("wrong password!");
          window.location.href = "/libraryloginURL";
        </script>
      `);
      }
      if (username === "kkcrtc@gmail.com") {
        req.session.isAdmin = true;
        req.session.username = username;
        req.session.joinedDate = "Dec 2025";
        return res.send(`
      <script>
        alert("Admin Login Successful!");
        window.location.href = "/library";
      </script>
    `);
      }
      const user = results[0];

      req.session.isAdmin = false;
      req.session.username = username;
      req.session.joinedDate = user.created_at;
      req.session.memberID = user.memberID;

      return res.send(`
        <script>
          alert("Login Successful!");
          window.location.href = "/library";
        </script>
      `);
    }

    res.send(`
      <script>
        alert("Invalid username or password!");
        window.location.href = "/libraryloginURL";
      </script>
    `);
  });
});


// REGISTRATION
app.post("/registration", async (req, res) => {
  const { fullName, dob, gender, mobile, email, membership, passwords, bookTypes } = req.body;
  const mql = "SELECT * FROM registration WHERE mobile = ? OR email = ? ";



  const memberID = generateMemberID();



  let encryptedPassword = await bcrypt.hash(passwords, saltRounds);

  console.log(encryptedPassword)
  const sql = `INSERT INTO registration 
    (fullName, dob, gender, mobile, email, membership, passwords, memberID, bookTypes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  db.query(mql, [mobile, email], (err, existing) => {
    if (existing?.length) {
      return res.send('existing');
    }

    db.query(sql, [fullName, dob, gender, mobile, email, membership, encryptedPassword, memberID, bookTypes], (err, result) => {
      if (err) {
        console.log(err)
        return res.send("Error saving user");
      }
      res.send("success");

    });
  });


});


app.get("/education", (req, res) => {
  console.log("EDUCATION API HIT");

  db.query("SELECT * FROM education", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});


app.delete("/education", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE EDUCATION API HIT", bookId);

  db.query("DELETE FROM education WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});



app.get("/fiction", (req, res) => {
  console.log("Fiction API HIT");

  db.query("SELECT * FROM fiction", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

app.delete("/fiction", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE fiction API HIT", bookId);

  db.query("DELETE FROM fiction WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});

app.get("/skilldevelopment", (req, res) => {
  console.log("Skilldevelopment API HIT");

  db.query("SELECT * FROM skilldevelopment", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

app.delete("/skilldevelopment", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE skilldevelopment API HIT", bookId);

  db.query("DELETE FROM skilldevelopment WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});

app.get("/competitiveexams", (req, res) => {
  console.log("competitiveexams API HIT");

  db.query("SELECT * FROM competitiveexams", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

app.delete("/competitiveexams", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE competitiveexams API HIT", bookId);

  db.query("DELETE FROM competitiveexams WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});


app.get("/references", (req, res) => {
  console.log("references API HIT");

  db.query("SELECT * FROM recommendation", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

app.delete("/references", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE references API HIT", bookId);

  db.query("DELETE FROM recommendation WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});


app.get("/artslifestyle", (req, res) => {
  console.log("artslifestyle API HIT");

  db.query("SELECT * FROM artslifestyle", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

app.delete("/artslifestyle", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE artslifestyle API HIT", bookId);

  db.query("DELETE FROM artslifestyle WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});


app.get("/childrenteens", (req, res) => {
  console.log("childrenteens API HIT");

  db.query("SELECT * FROM childrenteens", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

app.delete("/childrenteens", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE childrenteens API HIT", bookId);

  db.query("DELETE FROM childrenteens WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});

app.get("/NonFiction", (req, res) => {
  console.log("NonFiction API HIT");

  db.query("SELECT * FROM nonfiction", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

app.delete("/NonFiction", (req, res) => {
  const bookId = req.query.ID;
  console.log("DELETE NonFiction API HIT", bookId);

  db.query("DELETE FROM nonfiction WHERE BookID = ?", [bookId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ success: true, message: "Record deleted successfully" });
  });
});

// CATEGORY SETUP 
const map = [
  ["education", "education"],
  ["fiction", "fiction"],
  ["skilldevelopment", "skilldevelopment"],
  ["competitiveexams", "competitiveexams"],
  ["references", "recommendation"],
  ["artslifestyle", "artslifestyle"],
  ["childrenteens", "childrenteens"],
  ["NonFiction", "nonfiction"]
];
map.forEach(([route, collection]) =>
  createCategoryRoute(app, db, route, collection)
);



// ADD BOOK
// app.post("/addbook", (req, res) => {
//   const { title, author, category, cover } = req.body;

//   const categoryMap = {
//     "Education": "education",
//     "Fiction": "fiction",
//     "Skill Development": "skilldevelopment",
//     "Competitive Exams": "competitiveexams",
//     "References": "recommendation",
//     "Arts & Lifestyle": "artslifestyle",
//     "Children & Teens": "childrenteens",
//     "Non-Fiction": "nonfiction"
//   };

//   const tableName = categoryMap[category];

//   const needAuthor = ["Fiction", "Non-Fiction", "Skill Development", "Children & Teens", "References"];

//   let sql, params;

//   if (needAuthor.includes(category)) {
//     sql = `INSERT INTO ${tableName} (BookName, Author, CoverImage) VALUES (?, ?, ?)`;
//     params = [title, author, cover];
//   } else {
//     sql = `INSERT INTO ${tableName} (BookName, CoverImage) VALUES (?, ?)`;
//     params = [title, cover];
//   }

//   db.query(sql, params, (err) => {
//     if (err) return res.send("Error adding book");

//     res.send(`
//       <script>
//         alert("Book added successfully");
//         window.location.href = "/library";
//       </script>
//     `);
//   });
// });

app.post("/addbook", upload.single("cover"), (req, res) => {
  const { title, author, category } = req.body;
  const coverFile = req.file;

  if (!coverFile) {
    return res.status(400).json({ error: "No image uploaded" });
  }

  const categoryMap = {
   "Education": "education",
    "Fiction": "fiction",
    "Skill Development": "skilldevelopment",
    "Competitive Exams": "competitiveexams",
    "References": "references",
    "Arts & Lifestyle": "artslifestyle",
    "Children & Teens": "childrenteens",
    "Non-Fiction": "nonfiction",
  };

  const tableName = categoryMap[category];
  const needAuthor = ["Fiction", "Non-Fiction", "Skill Development", "Children & Teens", "References"];

 
  let checkSql, checkParams;
  if (needAuthor.includes(category)) {
    checkSql = `SELECT * FROM ${tableName} WHERE BookName = ? AND Author = ?`;
    checkParams = [title, author];
  } else {
    checkSql = `SELECT * FROM ${tableName} WHERE BookName = ?`;
    checkParams = [title];
  }

  db.query(checkSql, checkParams, (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Error checking book" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "Book already exists in library" });
    }

    
    let insertSql, insertParams;
    if (needAuthor.includes(category)) {
      insertSql = `INSERT INTO ${tableName} (BookName, Author, CoverImage) VALUES (?, ?, ?)`;
      insertParams = [title, author, `/uploads/${coverFile.filename}`];
    } else {
      insertSql = `INSERT INTO ${tableName} (BookName, CoverImage) VALUES (?, ?)`;
      insertParams = [title, `/uploads/${coverFile.filename}`];
    }

    db.query(insertSql, insertParams, (err) => {
      if (err) {
        console.error("DB error:", err);
        return res.status(500).json({ error: "Error adding book" });
      }
      res.json({ message: "Book added successfully with image!" });
    });
  });
});


//Rent Book
app.post("/rentbook", (req, res) => {
  const { category, educationbook, fictionbook } = req.body;
  const userId = req.session.memberID;

  let sql, params;


  if (category === "Fiction") {
    sql = `INSERT INTO rentbook (user_Id, category, book) VALUES (?, ?, ?)`;
    params = [userId, category, fictionbook];
  } else {
    sql = `INSERT INTO rentbook (user_Id, category, book) VALUES (?, ?, ?)`;
    params = [userId, category, educationbook];
  }

  db.query(sql, params, (err) => {
    if (err) {
      console.error(err);
      return res.send("Error renting book");
    }

    res.send(`
      <script>
        alert("Book rented successfully");
        window.location.href = "/library";
      </script>
    `);
  });
});




app.get("/library", checkLogin, async (req, res) => {
  var { session } = req;
  const tables = [
    "education", "fiction", "skilldevelopment", "competitiveexams",
    "recommendation", "artslifestyle", "childrenteens", "NonFiction"
  ];

  try {
    // Fetch all books from all tables
    const bookPromises = tables.map(table => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ${table}`, (err, rows) => {
          if (err) return reject(err);
          resolve(rows.map(r => r.book_name));
        });
      });
    });

    const results = await Promise.all(bookPromises);
    const allBooks = results.flat();


    const our_library = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM our_library", (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });


    let pinnedBooks = [];

    if (!session.isAdmin) {
      pinnedBooks = await new Promise((resolve, reject) => {
        db.query(
          "SELECT book_name, book_url FROM pinned_books WHERE user_id = ?",
          [session.memberID],
          (err, rows) => {
            if (err) return reject(err);
            // resolve(rows.map(r => [r.book_name, r.book_url]));
            resolve(rows);
          }
        );
      });
    }

    let rentbooks = [];

    if (!session.isAdmin) {
      rentbooks = await new Promise((resolve, reject) => {
        db.query(
          "SELECT book FROM rentbook WHERE user_id = ?",
          [session.memberID],
          (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
          }
        );
      });

    }

    res.render("library", {
      session,
      totalBooks: allBooks.length,
      allBooks,
      pinnedBooks: pinnedBooks,
      rentbooks,
      our_library: our_library
    });

  } catch (err) {
    console.error("LIBRARY FETCH ERROR:", err);
    res.status(500).send("Error fetching library books");
  }
});
app.get("/our_library", async (req, res) => {
  try {
    const rows = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM our_library", (err, rows) => {
        console.log("our_library API HIT");
        if (err) return reject(err);
        resolve(rows);
      });
    });

    res.json(rows);
  } catch (error) {
    console.error("OUR_LIBRARY ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});



/* ------------------------------
            PIN BOOK
------------------------------ */

app.post("/pinbook", (req, res) => {
  const { bookName, bookLink } = req.body;
  const userId = req.session.memberID;


  if (!userId || !bookName || !bookLink) {
    return res.json({ success: false, message: "Missing data" });
  }

  const sql = `
    INSERT INTO pinned_books (user_id, book_name, book_url)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE 
      book_name = VALUES(book_name),
      book_url = VALUES(book_url)
  `;

  db.query(sql, [userId, bookName, bookLink], (err) => {
    if (err) {
      console.error(err);
      return res.json({ success: false });
    }


    res.json({ success: true });
  });
});

// LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/libraryloginURL");
  });
});
// RATING PAGE
// Serve rating page
app.get("/rating", checkLogin, (req, res) => {
  res.render("rating");
});

app.post("/rating", checkLogin, (req, res) => {
  const { rating } = req.body;
  const userId = req.session.memberID;
  if (req.session.isAdmin) {
    return res.json({ success: false, message: "Admin cannot rate" });
  }


  if (!rating) {
    return res.status(400).json({ success: false, message: "No rating provided" });
  }

  const sql = `
        INSERT INTO ratings (user_id, rating)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE rating = VALUES(rating)
    `;

  db.query(sql, [userId, rating], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    res.json({ success: true, message: `Rating ${rating} saved!` });
  });
});

app.post("/save-rating", checkLogin, (req, res) => {

  // ADMIN BLOCK – Admin can't rate books
  if (req.session.isAdmin) {
    return res.json({ success: false, message: "Admin cannot rate books" });
  }

  const { bookName, rating } = req.body;
  const userId = req.session.memberID;

  const sql = `
        INSERT INTO book_ratings (user_id, book_name, rating)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE rating = VALUES(rating)
    `;

  db.query(sql, [userId, bookName, rating], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: true });
    }
    res.json({ success: true });
  });
});

app.get("/get-rating", checkLogin, (req, res) => {
  // Admin should always see 0 rating
  if (req.session.isAdmin) {
    return res.json({ rating: 0 });
  }

  const userId = req.session.memberID;
  const bookName = req.query.book;

  const sql = "SELECT rating FROM book_ratings WHERE user_id = ? AND book_name = ?";

  db.query(sql, [userId, bookName], (err, result) => {
    if (err) return res.json({ rating: 0 });
    res.json({ rating: result[0]?.rating || 0 });
  });
});


// Get current rating
app.get("/rating-data", checkLogin, (req, res) => {
  const userId = req.session.memberID;
  if (req.session.isAdmin) {
    return res.json({ rating: 0 }); // Admin always sees 0
  }
  db.query(
    "SELECT rating FROM ratings WHERE user_id = ?",
    [userId],
    (err, result) => {
      if (err) return res.status(500).json({ rating: 0 });
      res.json({ rating: result.length ? result[0].rating : 0 });
    }
  );
});
// ADD BOOK PAGE
app.get("/addbook", checkLogin, (req, res) => {
  res.render("addbook");
});

app.get("/rentbook", checkLogin, (req, res) => {
  res.render("rentbook");
});


// REGISTRATION PAGE (NO LOGIN REQUIRED)
app.get("/registration", (req, res) => {
  res.render("registration");
});


// HOME
app.get("/", (req, res) => {
  res.send("Home Page Working");
});

app.get("/ajaxPage", (req, res) => {
  res.render("ajaxPage");
})

app.post("/ajaxPage", (req, res) => {

  res.send("error");
})


// START SERVER
app.listen(PORT, () => console.log("Server running at http://localhost:" + PORT));