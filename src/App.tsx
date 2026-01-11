import React from 'react';
import { Mail, Github, ArrowRight, MessageCircle } from 'lucide-react';

const App = () => {
  // 核心路径逻辑：由于你的项目部署在 /Self-introduction/ 路径下
  // 我们使用相对路径来确保无论在本地还是 GitHub Pages 都能拿到照片
  const photoPath = "./my-photo.jpg";

  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-slate-900 font-sans flex flex-col items-center">
      
      {/* 居中导航栏 */}
      <nav className="w-full py-12 flex justify-center z-50">
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">Digital Nomads</a>
          <a href="#" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">Portfolio</a>
        </div>
      </nav>

      {/* 主体内容：左右分栏布局 */}
      <main className="flex-1 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center px-10 gap-16 mb-20">
        
        {/* 左侧：文案区 */}
        <div className="flex-1 text-left space-y-10 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter text-slate-900 uppercase">
              HuJinghua <br/>
              <span className="text-blue-600 italic font-medium">Product Manager</span>
            </h1>
            
            <div className="space-y-8 py-4 border-l-2 border-slate-100 pl-6">
              {/* 国企经历 */}
              <div className="flex gap-4 group">
                <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">🫨</span>
                <p className="text-lg text-slate-600 leading-relaxed">
                  在宇宙无敌大国企的几千个卑微乙方的一方中担任<strong className="text-slate-900 underline decoration-blue-200 underline-offset-4">“制造垃圾”</strong>。
                  <br/>
                  <span className="inline-block mt-2 text-xs font-bold bg-blue-50 px-2 py-1 rounded text-blue-600 uppercase tracking-wider">
                    4年 To B 产品 + 无代码开发经验
                  </span>
                  <br/>
                  擅长复杂流程梳理、数据中台搭建。
                </p>
              </div>

              {/* 数字游民经历 */}
              <div className="flex gap-4 group">
                <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">🫧</span>
                <p className="text-lg text-slate-600 leading-relaxed">
                  做过半年多数字流浪者。期间和伙伴运营了近 <strong className="text-slate-900">400人</strong> 左右的数字游民社区 <span className="font-extrabold text-slate-800 border-b-2 border-blue-200">CDN</span>。
                  <br/>
                  举办了十余场线上活动，为几十位伙伴建立了工作链接。
                </p>
              </div>
            </div>
          </div>

          {/* 按钮与社交链接 */}
          <div className="flex items-center gap-6">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl hover:-translate-y-1">
              探索作品集 <ArrowRight size={18}/>
            </button>
            <div className="flex gap-4">
               <a href="https://github.com/bubbbbbblehu-cell" className="p-3 bg-white border border-slate-100 rounded-full text-slate-400 hover:text-slate-900 shadow-sm transition-all"><Github size={20}/></a>
               <a href="mailto:hujinghua@example.com" className="p-3 bg-white border border-slate-100 rounded-full text-slate-400 hover:text-blue-600 shadow-sm transition-all"><Mail size={20}/></a>
            </div>
          </div>
        </div>

        {/* 右侧：个人照片区 */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            {/* 照片容器 */}
            <div className="w-72 h-96 md:w-80 md:h-[480px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 border-[12px] border-white relative z-10">
              <img 
                src={photoPath}
                alt="HuJinghua" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 如果路径错误，尝试另一种常见的部署路径引用方式
                  e.currentTarget.src = "/Self-introduction/my-photo.jpg";
                }}
              />
            </div>
            {/* 装饰气泡 */}
            <div className="absolute -bottom-4 -left-8 bg-white p-4 rounded-2xl shadow-xl -rotate-6 hidden md:flex items-center gap-3 border border-slate-50 z-20">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Living & Creating</span>
            </div>
          </div>
        </div>

      </main>

      {/* 底部版权 */}
      <footer className="w-full py-10 flex justify-center border-t border-slate-100">
        <div className="text-[9px] font-bold tracking-[0.5em] text-slate-300 uppercase italic">
          Logic & Freedom . HuJinghua . 2026
        </div>
      </footer>
    </div>
  );
};

export default App;