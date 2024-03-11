const sharebtn = document.getElementById("btn1");
sharebtn.addEventListener("click", function() {
    const shareCont = document.getElementById("share-container");
    const authCont = document.getElementById("author-container")
    if (shareCont.style.display === "none") {
        shareCont.style.display = "flex";
        authCont.style.display = "none";
    } else {
        shareCont.style.display = "none";
        authCont.style.display = "flex"
    }
})

const sharebtn2 = document.getElementById("btn2");
sharebtn2.addEventListener("click", function() {
    const shareCont = document.getElementById("share-container");
    const authCont = document.getElementById("author-container")
    if (shareCont.style.display === "none") {
        shareCont.style.display = "flex";
        authCont.style.display = "none";
    } else {
        shareCont.style.display = "none";
        authCont.style.display = "flex"
    }
})