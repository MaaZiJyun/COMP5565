import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { JewelryNFT, CertificateRegistry, SupplyChain } from "../typechain-types";

describe("Jewelry Tracing System", function () {
  let jewelryNFT: JewelryNFT;
  let certificateRegistry: CertificateRegistry;
  let supplyChain: SupplyChain;
  let owner: SignerWithAddress;
  let miner: SignerWithAddress;
  let cutter: SignerWithAddress;
  let lab: SignerWithAddress;
  let jeweler: SignerWithAddress;
  let customer: SignerWithAddress;

  beforeEach(async function () {
    [owner, miner, cutter, lab, jeweler, customer] = await ethers.getSigners();

    // Deploy contracts
    const JewelryNFT = await ethers.getContractFactory("JewelryNFT");
    jewelryNFT = await JewelryNFT.deploy();
    await jewelryNFT.deployed();

    const CertificateRegistry = await ethers.getContractFactory("CertificateRegistry");
    certificateRegistry = await CertificateRegistry.deploy();
    await certificateRegistry.deployed();

    const SupplyChain = await ethers.getContractFactory("SupplyChain");
    supplyChain = await SupplyChain.deploy(jewelryNFT.address, certificateRegistry.address);
    await supplyChain.deployed();

    // Setup roles
    const MINER_ROLE = await jewelryNFT.MINER_ROLE();
    const CUTTER_ROLE = await jewelryNFT.CUTTER_ROLE();
    const LAB_ROLE = await jewelryNFT.LAB_ROLE();
    const JEWELER_ROLE = await jewelryNFT.JEWELER_ROLE();

    await jewelryNFT.grantRole(MINER_ROLE, miner.address);
    await jewelryNFT.grantRole(CUTTER_ROLE, cutter.address);
    await jewelryNFT.grantRole(LAB_ROLE, lab.address);
    await jewelryNFT.grantRole(JEWELER_ROLE, jeweler.address);

    await certificateRegistry.grantRole(LAB_ROLE, lab.address);
    await certificateRegistry.grantRole(JEWELER_ROLE, jeweler.address);

    await supplyChain.grantRole(MINER_ROLE, miner.address);
    await supplyChain.grantRole(CUTTER_ROLE, cutter.address);
    await supplyChain.grantRole(LAB_ROLE, lab.address);
    await supplyChain.grantRole(JEWELER_ROLE, jeweler.address);
  });

  describe("Full Supply Chain Flow", function () {
    it("Should complete full jewelry lifecycle", async function () {
      // 1. Miner mints new diamond NFT
      const uniqueId = "DIAMOND123";
      const ipfsHash = "QmTest123";
      await jewelryNFT.connect(miner).mintDiamond(miner.address, uniqueId, ipfsHash);
      const tokenId = 1; // First token

      // Verify minting
      expect(await jewelryNFT.ownerOf(tokenId)).to.equal(miner.address);
      
      // 2. Update to Cut state
      await jewelryNFT.connect(cutter).updateState(tokenId, 1, "QmCutTest123");
      
      // 3. Lab certifies the diamond
      await jewelryNFT.connect(lab).updateState(tokenId, 2, "QmCertTest123");
      await certificateRegistry.connect(lab).issueCertificate(tokenId, "QmCertHash123");

      // 4. Transfer to jeweler and update state
      await jewelryNFT.connect(lab).transferFrom(lab.address, jeweler.address, tokenId);
      await jewelryNFT.connect(jeweler).updateState(tokenId, 3, "QmInStockTest123");

      // 5. Design completion
      await jewelryNFT.connect(jeweler).updateState(tokenId, 4, "QmDesignTest123");

      // 6. Transfer to customer
      await supplyChain.connect(jeweler).transferJewelry(tokenId, customer.address, "Sold to customer");

      // Verify final state
      expect(await jewelryNFT.ownerOf(tokenId)).to.equal(customer.address);
      
      // Verify supply chain history
      const history = await supplyChain.getSupplyChainHistory(tokenId);
      expect(history.length).to.be.gt(0);

      // Verify certificates
      const certs = await certificateRegistry.getValidCertificates(tokenId);
      expect(certs.length).to.equal(1);
    });
  });

  describe("Security Checks", function () {
    it("Should prevent unauthorized role actions", async function () {
      const uniqueId = "DIAMOND456";
      const ipfsHash = "QmTest456";
      
      // Customer should not be able to mint
      await expect(
        jewelryNFT.connect(customer).mintDiamond(customer.address, uniqueId, ipfsHash)
      ).to.be.revertedWith("Caller is not a miner");

      // Mint properly first
      await jewelryNFT.connect(miner).mintDiamond(miner.address, uniqueId, ipfsHash);
      const tokenId = 1;

      // Customer should not be able to update state
      await expect(
        jewelryNFT.connect(customer).updateState(tokenId, 1, "QmTest789")
      ).to.be.revertedWith("Caller is not a cutter");
    });

    it("Should prevent duplicate unique IDs", async function () {
      const uniqueId = "DIAMOND789";
      const ipfsHash = "QmTest789";

      await jewelryNFT.connect(miner).mintDiamond(miner.address, uniqueId, ipfsHash);

      await expect(
        jewelryNFT.connect(miner).mintDiamond(miner.address, uniqueId, ipfsHash)
      ).to.be.revertedWith("Unique ID already exists");
    });
  });
}); 