import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import toast from 'react-hot-toast';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const navigation = [
    { name: '首页', href: '/' },
    { name: '制造商面板', href: '/manufacturer' },
    { name: '消费者验证', href: '/verify' },
    { name: '追踪历史', href: '/history' },
  ];

  const handleConnect = async () => {
    try {
      await open();
    } catch (error) {
      toast.error('连接钱包失败');
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      toast.success('已断开连接');
    } catch (error) {
      toast.error('断开连接失败');
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-indigo-600">珠宝追踪系统</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      router.pathname === item.href
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              {isConnected ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                  <button
                    onClick={handleDisconnect}
                    className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                  >
                    断开连接
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleConnect}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  连接钱包
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-white shadow-lg mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 珠宝追踪系统. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 