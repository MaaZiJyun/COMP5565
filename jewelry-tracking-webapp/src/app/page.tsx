"use client";

import React, { useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import contractABI from "../../contracts/CertificateManager.json";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

interface Certificate {
  id: string;
  batchCode: string;
  state: string;
  price: string;
  description: string;
  productionDate: string;
  signature: string;
}

// Add this type declaration at the top of your file, after the imports
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Home() {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const dummyData: Certificate = {
    id: "CERT123", // Unique identifier for the certificate
    batchCode: "BATCH999", // Batch code linked to this certificate
    state: "New", // The state of the certificate (e.g., New, Processed, etc.)
    price: "1000", // Price as a string (if price in contract is string)
    description: "Gold Product Testing Certificate", // Description
    productionDate: Date.now().toString(), // Current date in UNIX timestamp (in seconds)
    signature: "0xABC123EF4567890", // Dummy signature to signify ownership
  };

  // Log the data
  console.log("Dummy data for testing:", dummyData);

  const [formData, setFormData] = useState<Certificate>({
    id: "",
    batchCode: "",
    state: "",
    price: "",
    description: "",
    productionDate: "",
    signature: "",
  });
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const connectWallet = async () => {
    setFormData(dummyData);

    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log(accounts);
    setProvider(provider);
    setAccount(accounts[0]);
  };

  const createCertificate = async () => {
    if (!provider || !account) {
      alert("Please connect your wallet!");
      return;
    }

    const signer = await provider.getSigner();
    const contract = new Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
    try {
      const tx = await contract.createCertificate(
        formData.id,
        formData.batchCode,
        formData.state,
        formData.price,
        formData.description,
        Math.floor(new Date(formData.productionDate).getTime() / 1000),
        formData.signature
      );
      alert(`Transaction sent: ${tx.hash}`);
      await tx.wait();
      alert("Certificate successfully created on the blockchain!");
    } catch (error) {
      console.error("Error creating certificate:", error);
      alert("Error creating certificate.");
    }
  };

  const fetchCertificates = async () => {
    try {
      const baseUrl = process.env.API_BASE_URL || "http://localhost:3001"; // Use NEXT_PUBLIC_ prefix
      if (!baseUrl) {
        throw new Error("API base URL is not defined");
      }
      const response = await fetch(`${baseUrl}/api/certificates`);
      if (!response.ok) {
        throw new Error("Failed to fetch certificates");
      }
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Wallet Connection */}
        <div className="flex justify-center mb-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={connectWallet}
          >
            {account ? `Connected: ${account}` : "Connect Wallet"}
          </button>
        </div>

        {/* Create Certificate */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Create Certificate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              name="batchCode"
              placeholder="Batch Code"
              value={formData.batchCode}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-2 rounded"
              type="date"
              name="productionDate"
              placeholder="Production Date"
              value={``}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              name="signature"
              placeholder="Signature"
              value={formData.signature}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full"
              onClick={createCertificate}
            >
              Create Certificate
            </button>
          </div>
        </div>

        {/* Fetch Certificates */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Fetch Certificates
          </h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
            onClick={fetchCertificates}
          >
            Fetch All Certificates
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="border border-gray-300 p-4 rounded shadow-sm bg-gray-50"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  ID: {cert.id}
                </h3>
                <p className="text-sm text-gray-600">
                  Batch Code: {cert.batchCode}
                </p>
                <p className="text-sm text-gray-600">State: {cert.state}</p>
                <p className="text-sm text-gray-600">Price: {cert.price}</p>
                <p className="text-sm text-gray-600">
                  Description: {cert.description}
                </p>
                <p className="text-sm text-gray-600">
                  Production Date:{" "}
                  {new Date(cert.productionDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Signature: {cert.signature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
