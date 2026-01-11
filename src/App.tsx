import React from 'react';
import { Mail, Github, Scissors, StickyNote, PenTool, palette, Heart } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#E5E1D8] text-[#333] font-mono p-4 md:p-12 flex justify-center">
      {/* 主体居中容器 */}
      <div className="w-full max-w-4xl bg-[#F4F1EA] shadow-[20px_20px_60px_#bebab2,-20px_-20px_60px_#ffffff] border border-[#d1cdc2] rounded-sm p-8 md:p-16 relative overflow-hidden">
        
        {/* 顶部居中导航 */}
        <nav className="flex flex-col items-center mb-24 relative">
          <div className="text-3xl font-black tracking-tighter uppercase italic mb-8 border-b-4 border-[#333] pb-2">
            MIA-LU . PM
          </div>
          <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
            <a href="#" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">Portfolio</a>
            <a href="#" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">Contact</a>
          </div>
          {/* 装饰性小圆点 */}
          <div className="absolute -bottom-8 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
        </nav>

        <main className="flex flex-col items-center text-center">
          {/* Hero Section */}
          <section className="max-w-2xl mb-24 relative">
            {/* 模拟胶带 */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/40 backdrop-blur-sm border border-white/50 rotate-[-2deg] z-10 flex items-center justify-center text-[10px] text-slate-400 font-bold opacity-60 pointer-events-none">
               WASHI TAPE
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
              用手作的心<br/>
              做数字产品
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-70 mb-12 font-medium italic">
              “Welcome to my digital workspace. I believe every product should feel as intentional as a hand-drawn illustration.”
            </p>

            <div className="flex justify-center gap-4">
              <button className="bg-[#333] text-white px-10 py-4 font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3">
                查看我的作品集 <Scissors size={18}/>
              </button>
            </div>
          </section>

          {/* 装饰性虚线分段 */}
          <div className="w-full max-w-xs h-px border-t-2 border-dashed border-[#d1cdc2] mb-24 relative">
             <Heart size={16} className="absolute -top-2 left-1/2 -translate-x-1/2 text-red-300 fill-red-300" />
          </div>

          {/* 关于我 - 核心段落 */}
          <section className="max-w-2xl mb-32 text-left bg-white/30 p-8 border border-dashed border-[#d1cdc2] rounded-lg">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-xs font-bold">!</div>
               <span className="font-black text-sm uppercase tracking-widest">Introduction</span>
            </div>
            <p className="text-xl leading-[1.8] font-medium opacity-90 italic">
               你好，我是 MIA-LU。一名深耕产品定义与用户体验的 PM。我喜欢将复杂的技术逻辑，转化为用户指尖温润的直觉体验。对我而言，产品不仅是代码的堆砌，更是对生活的“二次创作”。
            </p>
          </section>

          {/* 底部联系方式 - 居中排列 */}
          <footer className="w-full flex flex-col items-center pt-12 border-t border-[#d1cdc2]/50">
             <div className="flex justify-center gap-10 mb-12">
                <a href="mailto:hello@pm.com" className="flex flex-col items-center gap-2 group">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#eee] group-hover:bg-blue-50 transition-colors">
                      <Mail size={20} />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-tighter">Email</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-2 group">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#eee] group-hover:bg-slate-100 transition-colors">
                      <Github size={20} />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-tighter">GitHub</span>
                </a>
             </div>
             <p className="text-[10px] opacity-40 font-bold tracking-[0.3em] uppercase">
                © 2026 Handmade with Logic
             </p>
          </footer>
        </main>

        {/* 背景装饰 - 散落在四周的工具 */}
        <div className="absolute top-20 -left-4 opacity-10 rotate-12 pointer-events-none">
           <PenTool size={120} />
        </div>
        <div className="absolute bottom-40 -right-8 opacity-10 -rotate-12 pointer-events-none">
           <StickyNote size={150} />
        </div>
      </div>
    </div>
  );
};

export default App;