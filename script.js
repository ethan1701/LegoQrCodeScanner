function generate_legoLink(userInput) {
  const output = document.getElementById("output");
  const url = `https://lego.com/en-us/scan?id=${userInput}&source=builder`;
  output.innerHTML = `<p>Generated URL:</p><a href="${url}" target="_blank">${url}</a>`;
}

document.addEventListener("DOMContentLoaded", function () {
    const urlForm = document.getElementById("urlForm");
    const inputString = document.getElementById("inputString");

    urlForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userInput = inputString.value;
        generate_legoLink(userInput);
    });
});

function onScanSuccess(decodedText, decodedResult) {
	generate_legoLink(decodedText);
  //console.log(`Code scanned = ${decodedText}`, decodedResult);
  html5QrcodeScanner.clear();
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);
