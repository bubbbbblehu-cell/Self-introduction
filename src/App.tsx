import React from 'react';
import { Mail, Github, Scissors, StickyNote, PenTool, Heart, ArrowRight } from 'lucide-react';

const App = () => {
  return (
    /* 背景层：占满全屏的桌面质感 */
    <div className="min-h-screen w-full bg-[#E5E1D8] text-[#333] font-mono flex items-center justify-center p-0 md:p-6">
      
      {/* 核心画布：自适应屏幕大小，最大宽度限制以保持 PM 的严谨感 */}
      <div className="w-full h-full min-h-screen md:min-h-[90vh] max-w-[1400px] bg-[#F4F1EA] shadow-[0_0_50px_rgba(0,0,0,0.1)] border-x md:border border-[#d1cdc2] flex flex-col relative overflow-hidden">
        
        {/* 顶部居中导航栏 */}
        <nav className="w-full py-10 flex flex-col items-center z-10">
          <div className="text-3xl font-black tracking-[0.2em] uppercase italic mb-6 border-b-4 border-[#333] pb-1">
            MIA-LU . PM
          </div>
          <div className="flex justify-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>

        {/* 主体内容区：纵向居中排列 */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative">
          
          {/* 装饰：散落在画布上的元素 */}
          <div className="absolute top-10 left-10 opacity-10 -rotate-12 hidden lg:block">
            <PenTool size={180} />
          </div>
          <div className="absolute bottom-10 right-10 opacity-10 rotate-12 hidden lg:block">
            <StickyNote size={200} />
          </div>

          {/* Hero Section：视觉焦点 */}
          <section className="text-center max-w-4xl relative mb-16">
            {/* 模拟半透明胶带 */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-12 bg-white/30 backdrop-blur-md border border-white/40 rotate-1 flex items-center justify-center pointer-events-none">
              <span className="text-[9px] tracking-[0.5em] text-slate-400 font-bold uppercase">Work in Progress</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tighter">
              用手作的心<br/>
              做数字产品
            </h1>
            
            <p className="text-lg md:text-2xl leading-relaxed opacity-60 mb-12 font-medium italic max-w-2xl mx-auto">
              “Every wireframe is a sketch, every feature is a story. Welcome to my digital craftsmanship.”
            </p>

            <div className="flex justify-center">
              <button className="group bg-[#333] text-white px-12 py-5 font-bold rounded-full hover:bg-black transition-all flex items-center gap-4 shadow-xl">
                查看我的作品集 
                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18}/>
                </div>
              </button>
            </div>
          </section>

          {/* 分割线 */}
          <div className="w-full max-w-md h-px border-t-2 border-dashed border-[#d1cdc2] mb-16 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4F1EA] px-4">
               <Heart size={20} className="text-red-300 fill-red-300" />
            </div>
          </div>

          {/* 个人简介卡片 */}
          <section className="w-full max-w-2xl bg-white/40 p-10 border border-dashed border-[#d1cdc2] rounded-2xl backdrop-blur-sm">
             <div className="flex items-center gap-4 mb-6">
                <span className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></span>
                <span className="font-black text-xs uppercase tracking-widest opacity-40">Profile Introduction</span>
             </div>
             <p className="text-xl md:text-2xl leading-[1.8] font-medium opacity-90 italic">
                你好，我是 MIA-LU。一名深耕产品定义与用户体验的 PM。我致力于将理性的逻辑架构，转化为感性的交互细节。
             </p>
          </section>
        </main>

        {/* 底部信息栏 */}
        <footer className="w-full py-12 flex flex-col items-center">
          <div className="flex gap-12 mb-8">
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Mail size={24}/></a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Github size={24}/></a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Scissors size={24}/></a>
          </div>
          <div className="text-[10px] font-black tracking-[0.4em] opacity-30 uppercase">
            © 2026 Crafted with Logic & Soul
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;