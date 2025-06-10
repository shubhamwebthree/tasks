# task-one

```
node block_simulation.js
```
Output

```
=== Original chain ===
Block 0 hash: 0000ff4db58e2ef78df3be08bed76faa50e8f085350a9a70e612eb43de97484c, prev: 0
Block 1 hash: 00002c7525f2f88e412080b80158f6c8849b7b6c747fffd31c8512b01f5e0ac8, prev: 0000ff4db58e2ef78df3be08bed76faa50e8f085350a9a70e612eb43de97484c
Block 2 hash: 000017613d0a0ae378a9a8e0179b6ab1fce7a83aa77331fccee3f37386484616, prev: 00002c7525f2f88e412080b80158f6c8849b7b6c747fffd31c8512b01f5e0ac8
Chain valid: true

=== After tampering Block 1 ===
Block 0 hash: 0000ff4db58e2ef78df3be08bed76faa50e8f085350a9a70e612eb43de97484c, prev: 0
Block 1 hash: 0000c3c66c658ca5edb44611f5f0fda6a0a5591604ce04abb68a6110adfd5079, prev: 0000ff4db58e2ef78df3be08bed76faa50e8f085350a9a70e612eb43de97484c
Block 2 hash: 000017613d0a0ae378a9a8e0179b6ab1fce7a83aa77331fccee3f37386484616, prev: 00002c7525f2f88e412080b80158f6c8849b7b6c747fffd31c8512b01f5e0ac8
Chain valid: false

=== After re-mining downstream ===
Block 0 hash: 0000ff4db58e2ef78df3be08bed76faa50e8f085350a9a70e612eb43de97484c, prev: 0
Block 1 hash: 0000c3c66c658ca5edb44611f5f0fda6a0a5591604ce04abb68a6110adfd5079, prev: 0000ff4db58e2ef78df3be08bed76faa50e8f085350a9a70e612eb43de97484c
Block 2 hash: 000038a358c0693ceb51856c3f8314fa63f894fcdc7a81d89cd3959a13101d28, prev: 0000c3c66c658ca5edb44611f5f0fda6a0a5591604ce04abb68a6110adfd5079
Chain valid: true
```


```
node mining_simulation.js
```
Output
```
Mined successfully!
Data : lb9vfm8q
Nonce: 16620
Hash : 000080bcd3e73f00524e5443239ef25435ece01968b8b05fb677946256be36a4
Time : 0.11 s
```
```
node consensus_demo.js
```
Output 
```
Miner power : 1796
Staker stake: 228
Votes cast  : [
  'Carol', 'Eve',
  'Dave',  'Carol',
  'Eve',   'Carol',
  'Dave',  'Carol',
  'Eve',   'Dave'
]
PoW Consensus:
Alice (Miner) selected (highest hash power)
PoS Consensus:
Bob (Staker) selected (largest stake)
DPoS Consensus:
Carol selected (most voted delegate)
```

