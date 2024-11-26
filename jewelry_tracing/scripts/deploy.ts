import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 部署 JewelryAccessControl
  const JewelryAccessControl = await ethers.getContractFactory("JewelryAccessControl");
  const accessControl = await JewelryAccessControl.deploy();
  await accessControl.waitForDeployment();

  // 部署 JewelryNFT
  const JewelryNFT = await ethers.getContractFactory("JewelryNFT");
  const jewelryNFT = await JewelryNFT.deploy();
  await jewelryNFT.waitForDeployment();

  // 部署 CertificateRegistry
  const CertificateRegistry = await ethers.getContractFactory("CertificateRegistry");
  const certificateRegistry = await CertificateRegistry.deploy();
  await certificateRegistry.waitForDeployment();

  console.log("JewelryAccessControl deployed to:", await accessControl.getAddress());
  console.log("JewelryNFT deployed to:", await jewelryNFT.getAddress());
  console.log("CertificateRegistry deployed to:", await certificateRegistry.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 