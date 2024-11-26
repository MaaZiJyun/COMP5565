import { useState } from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';

interface HistoryRecord {
  tokenId: number;
  uniqueId: string;
  timestamp: number;
  actor: string;
  action: string;
  details: string;
}

const History: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState<HistoryRecord[]>([
    {
      tokenId: 1,
      uniqueId: "DIAMOND123",
      timestamp: Date.now() - 86400000 * 3,
      actor: "0x1234...5678",
      action: "开采",
      details: "原石开采完成"
    },
    {
      tokenId: 1,
      uniqueId: "DIAMOND123",
      timestamp: Date.now() - 86400000 * 2,
      actor: "0x5678...9012",
      action: "切割",
      details: "切割打磨完成"
    },
    {
      tokenId: 2,
      uniqueId: "DIAMOND456",
      timestamp: Date.now() - 86400000,
      actor: "0x9012...3456",
      action: "认证",
      details: "品质认证完成"
    }
  ]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('zh-CN');
  };

  const formatAddress = (address: string) => {
    return address;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              供应链历史记录
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              查看所有珠宝的供应链历史记录
            </p>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Token ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            唯一ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            操作者
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            操作
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            详情
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            时间
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {records.map((record, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {record.tokenId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {record.uniqueId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatAddress(record.actor)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {record.action}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {record.details}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(record.timestamp)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History; 