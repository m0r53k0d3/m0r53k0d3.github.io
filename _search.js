function search() {
    if(query(document.getElementById("search").value)) {
        window.location.href = "./success.html"
    } else {
        window.location.href = "./fail.html"
    }
}


function query(word) {
    return false;
}
