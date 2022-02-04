let QRCode = localStorage.getItem("jpbqr");
const QRPlaceHolder = document.querySelector(".qr-placeholder");
const QRImage = document.querySelector(".qr-code img");

if (localStorage.length > 0) {
    QRPlaceHolder.style.display = "none";
    QRImage.style.display = "";
    QRImage.src = JSON.parse(QRCode);
} else {
    QRPlaceHolder.style.display = "";
    QRImage.style.display = "none";
}