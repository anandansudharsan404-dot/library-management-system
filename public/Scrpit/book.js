const toggleBtn = document.getElementById("toggleViewBtn");
    const container = document.getElementById("bookContainer");

    let isCardMode = true;

    toggleBtn.addEventListener("click", () => {
        const items = document.querySelectorAll(".book-item");

        if (isCardMode) {
            // 👉 LIST MODE (ONE PER ROW)
            container.classList.add("list-view");

            items.forEach(item => {
                item.classList.remove("col-md-4");
                item.classList.remove("col-sm-6");
                item.classList.add("col-12");
            });

        } else {
            // 👉 CARD MODE (3 PER ROW)
            container.classList.remove("list-view");

            items.forEach(item => {
                item.classList.remove("col-12");
                item.classList.add("col-md-4"); // BACK TO 3 PER ROW
            });

             }

        isCardMode = !isCardMode;
    });
  document.addEventListener("DOMContentLoaded", () => {
    // Find all rating divs
    document.querySelectorAll(".rating").forEach(ratingDiv => {
        const stars = ratingDiv.querySelectorAll("span");
        const bookName = ratingDiv.dataset.book;

        stars.forEach(star => {
            star.addEventListener("click", () => {
                const value = parseInt(star.dataset.value);

                // 1️⃣ Update visual stars
                stars.forEach(s => s.classList.remove("active"));
                stars.forEach(s => {
                    if (parseInt(s.dataset.value) <= value) {
                        s.classList.add("active");
                    }
                });

                // 2️⃣ Send rating to backend
                fetch("/save-rating", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ bookName, rating: value })
                })
                .then(res => res.json())
                .then(data => console.log("Rating saved:", data))
                .catch(err => console.error("Rating error:", err));
            });
        });
    });
});

// 📌 PIN BUTTON HANDLER

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("pin-btn")) {
    const btn = e.target;

    const bookName = btn.dataset.bookName;
    const bookLink = btn.dataset.bookLink;

    try {
      const res = await fetch("/pinbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ bookName, bookLink })
      });

      const data = await res.json();

      if (data.success) {
        alert("Book pinned sucessfully.");
        
      } else {
        alert("Failed to pin book");
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }
});
