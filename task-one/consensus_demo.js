function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Mock validators
const miner = { name: "Alice (Miner)", power: getRandomInt(1000, 10000) };
const staker = { name: "Bob (Staker)", stake: getRandomInt(100, 1000) };
const delegates = ["Carol", "Dave", "Eve"];
const votes = Array.from({ length: 10 }, () => delegates[getRandomInt(0, 2)]);

console.log("Miner power :", miner.power);
console.log("Staker stake:", staker.stake);
console.log("Votes cast  :", votes);

// PoW: highest power
console.log("PoW Consensus:");
console.log(`${miner.name} selected (highest hash power)`);

// PoS: highest stake
console.log("PoS Consensus:");
console.log(`${staker.name} selected (largest stake)`);

// DPoS: most votes
const voteCount = {};
for (const vote of votes) {
  voteCount[vote] = (voteCount[vote] || 0) + 1;
}
const winner = Object.entries(voteCount).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
console.log("DPoS Consensus:");
console.log(`${winner} selected (most voted delegate)`);
