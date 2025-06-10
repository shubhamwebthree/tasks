const crypto = require("crypto");

const DIFFICULTY_PREFIX = "0000";

class Block {
  constructor(index, data, previousHash = "") {
    this.index = index;
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.computeHash();
  }

  computeHash() {
    while (true) {
      const blockString = JSON.stringify({
        index: this.index,
        timestamp: this.timestamp,
        data: this.data,
        previousHash: this.previousHash,
        nonce: this.nonce,
      });

      const hash = crypto.createHash("sha256").update(blockString).digest("hex");
      if (hash.startsWith(DIFFICULTY_PREFIX)) {
        return hash;
      }
      this.nonce++;
    }
  }
}

function isChainValid(chain) {
  for (let i = 1; i < chain.length; i++) {
    if (chain[i].previousHash !== chain[i - 1].hash) {
      return false;
    }
  }
  return true;
}

function printChain(chain, title) {
  console.log(`\n=== ${title} ===`);
  for (const block of chain) {
    console.log(
      `Block ${block.index} hash: ${block.hash}, prev: ${block.previousHash}`
    );
  }
}

const genesis = new Block(0, "Genesis Block", "0");
const second = new Block(1, "Some data", genesis.hash);
const third = new Block(2, { amount: 42 }, second.hash);
const chain = [genesis, second, third];

printChain(chain, "Original chain");
console.log("Chain valid:", isChainValid(chain));

// Tamper with Block 1
chain[1].data = "HACKED DATA";
chain[1].hash = chain[1].computeHash(); // Recompute tampered block
printChain(chain, "After tampering Block 1");
console.log("Chain valid:", isChainValid(chain));

// Repair by re-mining downstream block
chain[2].previousHash = chain[1].hash;
chain[2].hash = chain[2].computeHash();
printChain(chain, "After re-mining downstream");
console.log("Chain valid:", isChainValid(chain));
