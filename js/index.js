const alertBtn = document.getElementById("alertBtn")

alertBtn.addEventListener("click", event => {
    const alertDiv = document.getElementById("alertDiv");
    alertDiv.style.transition = "height .4s"
    alertDiv.style.height = "0"
    for(let i = 0 ; i < document.querySelectorAll("#alertDiv > * > *").length ; i++ ){
        document.querySelectorAll("#alertDiv > * > *")[i].style.display = "none";
    }
})