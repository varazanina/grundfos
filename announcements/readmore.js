console.log("Do you want to read moe about me? ;)")

//Read more button
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}

function myButton() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2")

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}