import { useState } from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { useAccount } from 'wagmi';
import toast from 'react-hot-toast';

const Manufacturer: NextPage = () => {
  const [activeTab, setActiveTab] = useState('mint');
  const [loading, setLoading] = useState(false);
  const { isConnected } = useAccount();

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      toast.error('请先连接钱包');
      return;
    }
    setLoading(true);
    // TODO: 实现铸造逻辑
    setLoading(false);
  };

  const handleUpdateState = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      toast.error('请先连接钱包');
      return;
    }
    setLoading(true);
    // TODO: 实现状态更新逻辑
    setLoading(false);
  };

  const handleCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      toast.error('请先连接钱包');
      return;
    }
    setLoading(true);
    // TODO: 实现证书发行逻辑
    setLoading(false);
  };

  const tabs = [
    { id: 'mint', name: '铸造新珠宝', icon: '💎', description: '创建新的珠宝NFT' },
    { id: 'update', name: '更新状态', icon: '🔄', description: '更新珠宝的状态信息' },
    { id: 'certificate', name: '发行证书', icon: '📜', description: '为珠宝发行数字证书' }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="modern-card animate-fade-in">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl">
            <h3 className="text-lg leading-6 font-medium text-white">
              制造商控制面板
            </h3>
            <p className="mt-1 text-sm text-indigo-100">
              管理珠宝的生命周期，从开采到销售的每个环节
            </p>
          </div>

          {!isConnected ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 animate-bounce">🔒</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">请先连接钱包</h3>
              <p className="text-sm text-gray-500">
                您需要连接钱包才能使用制造商功能
              </p>
            </div>
          ) : (
            <>
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex p-4" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id
                          ? 'border-indigo-500 text-indigo-600 bg-indigo-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      } flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm rounded-t-lg transition-all duration-200 hover-card`}
                    >
                      <div className="flex flex-col items-center space-y-1">
                        <span className="text-2xl mb-2">{tab.icon}</span>
                        <span>{tab.name}</span>
                        <span className="text-xs text-gray-500">{tab.description}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="px-4 py-5 sm:p-6 bg-gray-50">
                {activeTab === 'mint' && (
                  <form onSubmit={handleMint} className="space-y-6">
                    <div className="modern-card">
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="uniqueId" className="block text-sm font-medium text-gray-700">
                            唯一ID
                          </label>
                          <input
                            type="text"
                            name="uniqueId"
                            id="uniqueId"
                            className="modern-input"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                            详细信息
                          </label>
                          <textarea
                            name="details"
                            id="details"
                            rows={3}
                            className="modern-input"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`gradient-button w-full ${loading ? 'opacity-75 cursor-not-allowed' : 'animate hover-card'}`}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <span className="loading-spinner mr-2" />
                          处理中...
                        </span>
                      ) : '铸造新珠宝'}
                    </button>
                  </form>
                )}

                {activeTab === 'update' && (
                  <form onSubmit={handleUpdateState} className="space-y-6">
                    <div className="modern-card">
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="tokenId" className="block text-sm font-medium text-gray-700">
                            Token ID
                          </label>
                          <input
                            type="number"
                            name="tokenId"
                            id="tokenId"
                            className="modern-input"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                            新状态
                          </label>
                          <select
                            name="state"
                            id="state"
                            className="modern-input"
                            required
                          >
                            <option value="1">已切割</option>
                            <option value="2">已认证</option>
                            <option value="3">入库</option>
                            <option value="4">设计完成</option>
                            <option value="5">已售出</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`gradient-button w-full ${loading ? 'opacity-75 cursor-not-allowed' : 'animate hover-card'}`}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <span className="loading-spinner mr-2" />
                          处理中...
                        </span>
                      ) : '更新状态'}
                    </button>
                  </form>
                )}

                {activeTab === 'certificate' && (
                  <form onSubmit={handleCertificate} className="space-y-6">
                    <div className="modern-card">
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="tokenId" className="block text-sm font-medium text-gray-700">
                            Token ID
                          </label>
                          <input
                            type="number"
                            name="tokenId"
                            id="tokenId"
                            className="modern-input"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="certificateFile" className="block text-sm font-medium text-gray-700">
                            证书文件
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors duration-200">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="certificateFile"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <span>上传文件</span>
                                  <input
                                    id="certificateFile"
                                    name="certificateFile"
                                    type="file"
                                    className="sr-only"
                                    required
                                  />
                                </label>
                                <p className="pl-1">或拖放文件</p>
                              </div>
                              <p className="text-xs text-gray-500">支持PNG, JPG, PDF格式</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`gradient-button w-full ${loading ? 'opacity-75 cursor-not-allowed' : 'animate hover-card'}`}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <span className="loading-spinner mr-2" />
                          处理中...
                        </span>
                      ) : '发行证书'}
                    </button>
                  </form>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Manufacturer; 