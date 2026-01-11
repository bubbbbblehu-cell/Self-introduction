import React from 'react';
import { Mail, Github, ArrowRight, MessageCircle } from 'lucide-react';

const App = () => {
  // 核心路径逻辑
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

      {/* 主体内容：左右分栏 */}
      <main className="flex-1 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center px-10 gap-12 md:gap-20 mb-20">
        
        {/* 左侧：文案区 */}
        <div className="flex-1 text-left space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            {/* 调小后的标题 */}
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">
              HuJinghua
            </h1>
            <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Product Manager & No-Code Developer
            </p>
            
            <div className="space-y-6 pt-6 border-l border-slate-200 pl-6">
              {/* 国企经历 */}
              <div className="flex gap-4">
                <span className="text-2xl">🫨</span>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  在宇宙无敌大国企的几千个卑微乙方的一方中担任<strong className="text-slate-900 underline decoration-slate-200 underline-offset-4">“制造垃圾”</strong>。
                  <br/>
                  <span className="inline-block mt-2 text-[10px] font-bold bg-blue-50 px-2 py-0.5 rounded text-blue-600 uppercase tracking-wider">
                    4年 To B 产品 + 无代码开发经验
                  </span>
                </p>
              </div>

              {/* 数字游民经历 */}
              <div className="flex gap-4">
                <span className="text-2xl">🫧</span>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  做过半年多数字流浪者。期间运营了近 <strong className="text-slate-900">400人</strong> 左右的数字游民社区 <span className="font-extrabold text-slate-800 border-b-2 border-blue-200">CDN</span>。
                  <br/>
                  举办十余场线上活动，为伙伴建立了工作链接。
                </p>
              </div>
            </div>
          </div>

          {/* 按钮与社交链接 */}
          <div className="flex items-center gap-6 pt-4">
            <button className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg hover:-translate-y-0.5">
              查看作品集 <ArrowRight size={16}/>
            </button>
            <div className="flex gap-4">
               <a href="https://github.com/bubbbbbblehu-cell" className="text-slate-300 hover:text-slate-900 transition-colors"><Github size={20}/></a>
               <a href="mailto:your-email@example.com" className="text-slate-300 hover:text-blue-600 transition-colors"><Mail size={20}/></a>
            </div>
          </div>
        </div>

        {/* 右侧：个人照片区 */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            {/* 照片容器 - 略微缩小以配合文字 */}
            <div className="w-64 h-80 md:w-72 md:h-[420px] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700 border-[8px] border-white relative z-10">
              <img 
                src={photoPath}
                alt="HuJinghua" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/Self-introduction/my-photo.jpg";
                }}
              />
            </div>
            {/* 装饰标签 */}
            <div className="absolute -bottom-4 -right-6 bg-white px-4 py-2 rounded-xl shadow-md rotate-3 hidden md:flex items-center gap-2 border border-slate-50 z-20">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available</span>
            </div>
          </div>
        </div>

      </main>

      <footer className="w-full py-8 flex justify-center border-t border-slate-100 mt-auto">
        <div className="text-[9px] font-bold tracking-[0.4em] text-slate-300 uppercase italic">
          Logic & Freedom . HuJinghua . 2026
        </div>
      </footer>
    </div>
  );
};

export default App;