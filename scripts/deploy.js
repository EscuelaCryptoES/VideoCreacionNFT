// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  const ArtMaker = await ethers.getContractFactory("ArtMaker");
  const artMaker = await ArtMaker.deploy();
  await artMaker.deployed();

  console.log("Token ERC721 address:", artMaker.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(artMaker);
}

function saveFrontendFiles(artMaker) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address-artMaker.json",
    JSON.stringify({ ArtMaker: artMaker.address }, undefined, 2)
  );

  const ArtMakerArtifact = artifacts.readArtifactSync("ArtMaker");

  fs.writeFileSync(
    contractsDir + "/ArtMaker.json",
    JSON.stringify(ArtMakerArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
