import React from 'react';
import { Layout, Rocket, BarChart3, Users, ExternalLink, Mail, Github } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans">
      {/* 导航栏 */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            YourName.PM
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#work" className="hover:text-blue-600 transition-colors">项目案例</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">核心能力</a>
            <a href="mailto:your@email.com" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all">
              <Mail size={14} /> 联系我
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Opportunities
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            用逻辑定义产品 <br />
            <span className="text-slate-400">以用户创造价值</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl">
            你好，我是 [你的名字]。一名深耕 [某领域] 的产品经理。我擅长从 0 到 1 拆解复杂需求，通过数据洞察驱动增长，致力于构建直觉化且具备商业价值的产品体验。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all">
              查看精选案例
            </a>
            <div className="flex items-center gap-6 px-4">
              <Github className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
              <div className="w-px h-6 bg-slate-200"></div>
              <span className="text-sm font-medium text-slate-500 underline decoration-slate-200 underline-offset-4">
                下载简历 (PDF)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 核心能力 (Product Stack) */}
      <section id="skills" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold">需求洞察与建模</h3>
              <p className="text-slate-500 leading-relaxed">擅长通过用户访谈与竞品分析抽象底层逻辑，构建高扩展性的产品架构与 PRD 文档。</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold">数据驱动决策</h3>
              <p className="text-slate-500 leading-relaxed">熟练使用 SQL 与 A/B Test 工具，通过埋点分析定位流失点，实现核心转化率的量化提升。</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold">跨职能团队协同</h3>
              <p className="text-slate-500 leading-relaxed">具备出色的技术沟通能力，精准把控研发节奏，确保产品迭代按时、高质量上线。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 项目展示 (Case Studies) */}
      <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">精选案例分析</h2>
            <p className="text-slate-500 text-lg">不仅是功能堆砌，更是针对业务痛点的深度解构</p>
          </div>
        </div>

        <div className="grid gap-8">
          {/* 案例 1 */}
          <div className="group bg-white border border-slate-200 rounded-[32px] overflow-hidden hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
            <div className="md:flex">
              <div className="p-12 md:w-3/5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-wider rounded-md text-slate-600">移动社交</span>
                  <span className="px-3 py-1 bg-blue-50 text-[10px] font-bold uppercase tracking-wider rounded-md text-blue-600">增长优化</span>
                </div>
                <h3 className="text-3xl font-bold group-hover:text-blue-600 transition-colors leading-tight">
                  “如何通过重构匹配算法，提升社交 APP 次日留存 22%？”
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  针对用户匹配路径过长的问题，我重新定义了推荐权重模型。通过引入用户行为特征向量，缩短了 35% 的触达路径...
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-2 font-bold text-slate-900 border-b-2 border-blue-400 pb-1 hover:gap-4 transition-all">
                    阅读复盘文档 <ExternalLink size={16} />
                  </button>
                </div>
              </div>
              <div className="bg-slate-50 md:w-2/5 min-h-[300px] flex items-center justify-center border-l border-slate-100">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4 font-black text-slate-200">DATA</div>
                  <div className="h-2 w-48 bg-slate-200 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 Crafted with Logic & Design by YourName</p>
      </footer>
    </div>
  );
};

export default Portfolio;