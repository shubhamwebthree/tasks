const crypto = require("crypto");

const DIFFICULTY = 4; // adjust between 3–6 for speed

function getRandomData() {
  return Math.random().toString(36).substring(2, 10);
}

function mineBlock(data) {
  let nonce = 0;
  let start = Date.now();

  while (true) {
    const input = `${data}|${nonce}`;
    const hash = crypto.createHash("sha256").update(input).digest("hex");

    if (hash.startsWith("0".repeat(DIFFICULTY))) {
      const elapsed = (Date.now() - start) / 1000;
      console.log("Mined successfully!");
      console.log("Data :", data);
      console.log("Nonce:", nonce);
      console.log("Hash :", hash);
      console.log("Time :", elapsed.toFixed(2), "s");
      break;
    }
    nonce++;
  }
}

mineBlock(getRandomData());
