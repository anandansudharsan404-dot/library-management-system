function gfg(n) {
    remove();
    let cls = "";
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";

    let stars = document.getElementsByClassName("star");
    for (let i = 0; i < n; i++) {
        stars[i].className = "star " + cls;
    }

    document.getElementById("output").innerText = "Rating is: " + n + "/5";
    document.getElementById("tnx").style.display = "block";

    // Send rating to server
    fetch("/rating", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: n }) // IMPORTANT: stringify!
    })
    .then(res => res.json())
    .then(data => console.log("Server response:", data))
    .catch(err => console.error(err));
}

// Remove previous highlights
function remove() {
    let stars = document.getElementsByClassName("star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    fetch("/rating-data")
        .then(res => res.json())
        .then(data => {
            if (data.rating) gfg(data.rating); // highlight stars
        });
});
