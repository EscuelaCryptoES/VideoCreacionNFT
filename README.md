# VideoCreacionNFT

This repository contains YouTube NFT EscuelaCryptoES video (Build your own NFT).

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/EscuelaCryptoES/VideoCreacionNFT.git
cd VideoCreacionNFT
npm install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

**Happy _buidling_!**
