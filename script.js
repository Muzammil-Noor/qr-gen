let qr;

const input = document.getElementById("data");
const sizeSelect = document.getElementById("size");

function generateQR() {
    const value = input.value.trim();
    const size = parseInt(sizeSelect.value);

    document.getElementById("qr").innerHTML = "";

    if (!value) return;

    qr = new QRCode(document.getElementById("qr"), {
        text: value,
        width: size,
        height: size
    });
}

input.addEventListener("input", generateQR);
sizeSelect.addEventListener("change", generateQR);

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.url) {
        input.value = tabs[0].url;
        generateQR();
    }
});

const params = new URLSearchParams(window.location.search);
const dataFromMenu = params.get("data");

document.getElementById("downloadBtn").addEventListener("click", () => {
    const canvas = qrContainer.querySelector("canvas");

    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});
console.log("script?")
if (dataFromMenu) {
    input.value = dataFromMenu;
    generateQR();
}