import React from 'react';
import { Mail, Github, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-slate-900 font-sans flex flex-col items-center">
      
      {/* 居中导航栏 */}
      <nav className="w-full py-12 flex justify-center z-50">
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Digital Nomads</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* 主体内容：左右分栏布局 */}
      <main className="flex-1 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center px-10 gap-16">
        
        {/* 左侧：深度文案区 */}
        <div className="flex-1 text-left space-y-10 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
              MIA-LU <br/>
              <span className="text-blue-600 italic">Product Manager</span>
            </h1>
            
            <div className="space-y-8 py-4">
              {/* 国企经历 */}
              <div className="flex gap-4 group">
                <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">🫨</span>
                <p className="text-lg text-slate-600 leading-relaxed">
                  在宇宙无敌大国企的几千个卑微乙方的一方中担任<strong className="text-slate-900">“制造垃圾”</strong>。
                  <br/>
                  <span className="text-sm font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                    4年 to B 产品 + 无代码开发经验
                  </span>
                  <br/>
                  擅长复杂流程梳理、数据中台搭建。
                </p>
              </div>

              {/* 数字游民经历 */}
              <div className="flex gap-4 group">
                <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">🫧</span>
                <p className="text-lg text-slate-600 leading-relaxed">
                  做过半年多数字流浪者。期间和伙伴运营了近 <strong className="text-slate-900">400人</strong> 左右的数字游民社区 <span className="underline decoration-blue-300 underline-offset-4 font-bold text-slate-800">CDN</span>。
                  <br/>
                  举办了十余场线上活动，为几十位伙伴建立了工作链接。
                </p>
              </div>
            </div>
          </div>

          {/* 行动按钮 */}
          <div className="flex items-center gap-6">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl">
              探索我的作品 <ArrowRight size={18}/>
            </button>
            <div className="flex gap-4">
               <a href="#" className="p-3 bg-white border border-slate-100 rounded-full text-slate-400 hover:text-blue-600 shadow-sm transition-all"><Github size={20}/></a>
               <a href="#" className="p-3 bg-white border border-slate-100 rounded-full text-slate-400 hover:text-blue-600 shadow-sm transition-all"><Mail size={20}/></a>
            </div>
          </div>
        </div>

        {/* 右侧：个人照片区 */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            {/* 照片容器 */}
            <div className="w-72 h-96 md:w-80 md:h-[480px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* 装饰性元素 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg -rotate-6 hidden md:block border border-slate-50">
               <MessageCircle className="text-blue-500" size={24}/>
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Let's Talk</span>
            </div>
          </div>
        </div>

      </main>

      {/* 底部 */}
      <footer className="w-full py-10 flex justify-center border-t border-slate-100">
        <div className="text-[9px] font-bold tracking-[0.5em] text-slate-300 uppercase italic">
          Logic & Freedom . 2026
        </div>
      </footer>
    </div>
  );
};

export default App;
