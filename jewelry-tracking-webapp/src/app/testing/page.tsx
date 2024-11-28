"use client";
import React, { useState } from "react";
import { BrowserProvider, ethers } from "ethers";
import { Contract } from "ethers";

const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "TestCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "createTest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "tests",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

interface TestEvent {
  id: string;
  number: number;
  created_at: string;
}

const TestForm = () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [events, setEvents] = useState<TestEvent[]>([]); // Updated type here
  const [loading, setLoading] = useState(false); // 控制加载状态
  const [form, setForm] = useState({
    id: "",
    number: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 请求用户切换到正确的网络
  // const switchNetwork = async (chainId: number) => {
  //   try {
  //     await window.ethereum.request({
  //       method: "wallet_switchEthereumChain",
  //       params: [{ chainId: ethers.toBeHex(chainId) }], // 转为十六进制的 chainId
  //     });
  //   } catch (switchError: any) {
  //     // 如果网络未添加到钱包中
  //     if (switchError.code === 4902) {
  //       alert("Network not found in Metamask. Please add it manually.");
  //     } else {
  //       console.error("Failed to switch network:", switchError);
  //     }
  //   }
  // };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!form.id || !form.number) {
      alert("Please fill all fields!");
      return;
    }

    try {
      // Metamask Provider
      //   const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, contractABI, signer);

      // Contract Instance
      //   const contract = new ethers.Contract(
      //     contractAddress,
      //     contractABI,
      //     signer
      //   );

      const network = await provider.getNetwork();
      console.log("Connected to network:", network.chainId); // 确保 chainId 与合约部署的网络一致

      // 检查并自动切换网
      if (network.chainId.toString() !== "31337") {
        alert("Switching network to Sepolia...");
        // await switchNetwork(31337); 
      } else {
        // Call Smart Contract Function
        const tx = await contract.createTest(form.id, parseInt(form.number));
        console.log("Transaction submitted:", tx);

        // 等待交易确认并获取收据
        const receipt = await tx.wait();

        // 检查交易状态
        if (receipt.status === 1) {
          alert("Transaction confirmed successfully");
        } else {
          alert("Transaction failed");
        }

        // 检查交易日志
        console.log("Transaction Logs:", receipt.logs);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Are you connected to the correct network?");
    }
  };

  const fetchData = async () => {
    setLoading(true); // 设置加载状态
    try {
      const response = await fetch("/api/testingEvents"); // 调用后端 API
      const data = await response.json();
      setEvents(data); // 更新状态，存储数据
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // 关闭加载状态
    }
  };

  return (
    <>
      <div>
        <h1>Test Contract Submission</h1>
        <form onSubmit={handleSubmit}>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Number:</label>
          <input
            type="number"
            name="number"
            value={form.number}
            onChange={handleInputChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div style={{ padding: "20px" }}>
        <h1>PostgreSQL Events</h1>
        <button onClick={fetchData} disabled={loading}>
          {loading ? "Loading..." : "Fetch Events"}
        </button>
        <table
          //   border="1"
          cellPadding="10"
          style={{ marginTop: "20px", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Number</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.number}</td>
                <td>{new Date(event.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TestForm;
