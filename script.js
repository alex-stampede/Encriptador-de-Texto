document.getElementById("encrypt-btn").addEventListener("click", function () {
  const text = document.getElementById("input-text").value;
  const encryptedText = encryptText(text);
  showOutput(encryptedText);
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
  const text = document.getElementById("input-text").value;
  const decryptedText = decryptText(text);
  showOutput(decryptedText);
});

document.getElementById("copy-btn").addEventListener("click", function () {
  const outputText = document.getElementById("output-text");
  outputText.select();
  document.execCommand("copy");
});

function encryptText(text) {
  let result = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return result;
}

function decryptText(text) {
  let result = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return result;
}

function showOutput(text) {
  document.getElementById("output-text").value = text;
  document.getElementById("image-placeholder").style.display = "none";
  document.getElementById("output-placeholder").style.display = "block";
}
