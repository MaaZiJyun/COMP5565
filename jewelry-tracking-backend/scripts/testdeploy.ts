import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MainContract = await ethers.getContractFactory("TestContract");
  const contract = await MainContract.deploy();

  console.log("Deploy transaction hash:", contract.deploymentTransaction().hash);

  // 等待区块确认部署
  const receipt = await contract.deploymentTransaction().wait();
  console.log("Contract deployed at:", await contract.getAddress());
  console.log("Transaction receipt:", receipt);
}

main().catch((err) => console.error(err));
