// LOGIN PROTECTOR
function checkLogin(req, res, next) {
    if (!req.session.username) {
        return res.redirect("/libraryloginURL");
    }
    next();
}

// GENERATE MEMBER ID
function generateMemberID() {
    return "MEB" + Math.floor(10000 + Math.random() * 90000);
}

/* ------------------------------------
      CATEGORY ROUTES (SEARCH + PIN)
---------------------------------------*/

function createCategoryRoute(app, db, routeName, tableName) {
    app.get(`/${routeName}`, checkLogin, (req, res) => {
        const userId = req.session.memberID;
        const search = req.query.search ? req.query.search.trim() : "";
        var temp = 'data'; // global, can be change any where
        const tep2 = 0; // global, but cant change

        let sql = `SELECT * FROM ${tableName}`;
        const params = [];

        if (search !== "") {
            sql += " WHERE BookName LIKE ?";
            params.push(`%${search}%`);
        }

        db.query(sql, params, (err, books) => {
            if (err) return res.send("Database error");

            db.query(
                "SELECT book_name, rating FROM book_ratings WHERE user_id = ?",
                [userId],
                (err, savedRatings) => {
                    if (err) return res.send("Rating fetch error");

                    const ratingMap = {};
                    savedRatings.forEach((r) => ratingMap[r.book_name] = r.rating);

                    db.query(
                        "SELECT book_name FROM pinned_books WHERE user_id = ?",
                        [userId],
                        (err, pinnedResults) => {
                            if (err) return res.send("Pin fetch error");

                            const pinnedList = pinnedResults.map((r) => r.book_name);

                            let list = 'somelist'

                            books.sort((a, b) => {
                                const A = pinnedList.includes(a.BookName);
                                const B = pinnedList.includes(b.BookName);
                                return A === B ? 0 : A ? -1 : 1;
                            });

                            const data = {};
                            data[routeName] = books;
                            data.userRatings = ratingMap;
                            data.pinnedList = pinnedList;
                            data.search = search;

                            res.render(routeName, data);
                        }
                    );
                }
            );
        });
    });
}

module.exports = {
    checkLogin,
    generateMemberID,
    createCategoryRoute,
}