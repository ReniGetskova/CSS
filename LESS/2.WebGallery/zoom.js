function changeImage(img) {
    window.document.getElementById("zoomedImage").src = "images/image" + img + ".jpg";
    window.document.getElementById("zoomedImage").style.width = "600px";
    window.document.getElementById("zoomedImage").style.height = "445px";
}