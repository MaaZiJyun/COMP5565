import { useState } from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { useAccount } from 'wagmi';

interface VerificationResult {
  isValid: boolean;
  tokenId?: number;
  state?: string;
  uniqueId?: string;
  currentOwner?: string;
  certificates?: Array<{
    issuer: string;
    timestamp: number;
    isValid: boolean;
  }>;
  history?: Array<{
    timestamp: number;
    actor: string;
    action: string;
    details: string;
  }>;
}

const Verify: NextPage = () => {
  const [searchId, setSearchId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const { isConnected } = useAccount();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert('请先连接钱包');
      return;
    }
    setLoading(true);
    // TODO: 实现验证逻辑
    // 模拟数据
    setResult({
      isValid: true,
      tokenId: 1,
      state: '已认证',
      uniqueId: searchId,
      currentOwner: '0x1234...5678',
      certificates: [
        {
          issuer: '0xabcd...efgh',
          timestamp: Date.now(),
          isValid: true
        }
      ],
      history: [
        {
          timestamp: Date.now() - 86400000,
          actor: '0x9876...5432',
          action: '开采',
          details: '原石开采完成'
        },
        {
          timestamp: Date.now() - 43200000,
          actor: '0x5432...1098',
          action: '切割',
          details: '切割打磨完成'
        }
      ]
    });
    setLoading(false);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('zh-CN');
  };

  const formatAddress = (address: string) => {
    return address;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="modern-card animate-fade-in">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl">
            <h3 className="text-lg leading-6 font-medium text-white">
              珠宝真伪验证
            </h3>
            <p className="mt-1 text-sm text-indigo-100">
              输入珠宝上的唯一ID，验证其真实性和追踪其历史记录
            </p>
          </div>

          <div className="px-4 py-5 sm:p-6 space-y-6">
            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label htmlFor="searchId" className="block text-sm font-medium text-gray-700">
                  唯一ID
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="searchId"
                    id="searchId"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    className="modern-input"
                    placeholder="输入珠宝上的唯一ID"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading || !isConnected}
                className={`gradient-button w-full ${loading ? 'opacity-75 cursor-not-allowed' : 'animate hover-card'}`}
              >
                {!isConnected ? '请先连接钱包' : loading ? (
                  <span className="flex items-center justify-center">
                    <span className="loading-spinner mr-2" />
                    验证中...
                  </span>
                ) : '验证'}
              </button>
            </form>

            {result && (
              <div className="mt-8 animate-scale-in">
                <div className={`rounded-xl p-4 ${result.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {result.isValid ? (
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <h3 className={`text-sm font-medium ${result.isValid ? 'text-green-800' : 'text-red-800'}`}>
                        {result.isValid ? '验证通过' : '验证失败'}
                      </h3>
                    </div>
                  </div>
                </div>

                {result.isValid && (
                  <div className="mt-6 space-y-8">
                    <div className="modern-card">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">基本信息</h4>
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Token ID</dt>
                          <dd className="mt-1 text-sm text-gray-900">{result.tokenId}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">当前状态</dt>
                          <dd className="mt-1">
                            <span className="status-badge success">
                              {result.state}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">当前所有者</dt>
                          <dd className="mt-1 text-sm text-gray-900">{formatAddress(result.currentOwner!)}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="modern-card">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">证书记录</h4>
                      <div className="overflow-hidden">
                        <table className="modern-table">
                          <thead>
                            <tr>
                              <th>发行者</th>
                              <th>时间</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.certificates?.map((cert, index) => (
                              <tr key={index}>
                                <td>{formatAddress(cert.issuer)}</td>
                                <td>{formatDate(cert.timestamp)}</td>
                                <td>
                                  <span className={`status-badge ${cert.isValid ? 'success' : 'error'}`}>
                                    {cert.isValid ? '有效' : '已撤销'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="modern-card">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">历史记录</h4>
                      <div className="flow-root">
                        <ul className="-mb-8">
                          {result.history?.map((event, index) => (
                            <li key={index}>
                              <div className="relative pb-8">
                                {index !== result.history!.length - 1 && (
                                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" aria-hidden="true" />
                                )}
                                <div className="relative flex space-x-3">
                                  <div>
                                    <span className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center ring-8 ring-white">
                                      <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                    <div>
                                      <p className="text-sm text-gray-500">
                                        {event.action} <span className="font-medium text-gray-900">{formatAddress(event.actor)}</span>
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">{event.details}</p>
                                    </div>
                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                      {formatDate(event.timestamp)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Verify; 