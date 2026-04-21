const input = document.getElementById("inputText");
const button = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");

button.addEventListener("click", () => {
  const data = encodeURIComponent(input.value.trim());

  if (!data) {
    alert("Please enter some text");
    return;
  }

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`;
  qrImage.src = url;
});