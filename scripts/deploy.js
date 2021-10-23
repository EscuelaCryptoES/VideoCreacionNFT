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

  // Deploy
  const EscuelaCryptoES = await ethers.getContractFactory("EscuelaCryptoES");
  const escuelaCryptoES = await EscuelaCryptoES.deploy();
  await escuelaCryptoES.deployed();

  // Address
  console.log("Token ERC721 address:", escuelaCryptoES.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(escuelaCryptoES);
}

function saveFrontendFiles(escuelaCryptoES) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address-escuelaCryptoES.json",
    JSON.stringify({ EscuelaCryptoES: escuelaCryptoES.address }, undefined, 2)
  );

  const EscuelaCryptoESArtifact = artifacts.readArtifactSync("EscuelaCryptoES");

  fs.writeFileSync(
    contractsDir + "/EscuelaCryptoES.json",
    JSON.stringify(EscuelaCryptoESArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
