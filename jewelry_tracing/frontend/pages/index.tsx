import Layout from '../components/Layout';
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  const features = [
    {
      title: '透明追踪',
      description: '从原石开采到成品销售，全程可追踪',
      icon: '💎',
      href: '/history',
      color: 'bg-blue-500'
    },
    {
      title: '数字证书',
      description: '区块链保证的数字证书，永久有效且不可篡改',
      icon: '📜',
      href: '/verify',
      color: 'bg-green-500'
    },
    {
      title: '真伪验证',
      description: '扫描珠宝上的唯一ID，即可验证真伪',
      icon: '✅',
      href: '/verify',
      color: 'bg-purple-500'
    },
    {
      title: '供应链管理',
      description: '完整的供应链管理系统，确保每个环节可控可追溯',
      icon: '🔄',
      href: '/manufacturer',
      color: 'bg-pink-500'
    }
  ];

  const steps = [
    {
      title: '开采',
      description: '原石由矿业公司开采',
      icon: '⛏️'
    },
    {
      title: '切割',
      description: '由专业切割师傅进行切割打磨',
      icon: '💎'
    },
    {
      title: '认证',
      description: '权威机构进行品质认证',
      icon: '📜'
    },
    {
      title: '设计',
      description: '珠宝设计师进行创意设计',
      icon: '✨'
    },
    {
      title: '制作',
      description: '工匠精心打造成品',
      icon: '🛠️'
    },
    {
      title: '销售',
      description: '通过可信渠道销售给消费者',
      icon: '🏪'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">区块链珠宝</span>{' '}
                  <span className="block text-indigo-200 xl:inline">追踪系统</span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  使用区块链技术，为每件珠宝建立唯一身份标识，
                  实现从原石开采到成品销售的全程追踪，确保珠宝的真实性和价值。
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/verify"
                      className="gradient-button animate hover-card"
                    >
                      开始验证
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/manufacturer"
                      className="gradient-button animate hover-card bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                    >
                      制造商入口
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="gradient-text text-base tracking-wide uppercase">功能特点</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              更好的珠宝追踪方式
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href}>
                  <div className="modern-card hover-card animate-fade-in">
                    <div className="space-y-4">
                      <div className={`p-3 ${feature.color} rounded-lg inline-block text-white text-3xl`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="gradient-text text-base tracking-wide uppercase">追踪流程</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              珠宝全生命周期追踪
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform -translate-y-1/2"></div>
            
            <div className="relative grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {steps.map((step, index) => (
                <div key={step.title} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full glassmorphism flex items-center justify-center text-2xl relative z-10">
                      {step.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">准备开始使用？</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            立即体验区块链珠宝追踪系统，为您的珠宝提供全方位的保障。
          </p>
          <Link
            href="/verify"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto hover-card gradient-button animate"
          >
            开始使用
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 