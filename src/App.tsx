import React from 'react';
import { Layout, Rocket, BarChart3, Users, Mail, Github, ArrowRight } from 'lucide-react';

const App = () => {
  return (
    /* 背景层：全屏占满，采用极简主义浅色调 */
    <div className="min-h-screen w-full bg-[#fafafa] text-slate-900 font-sans flex flex-col items-center">
      
      {/* 1. 居中导航目录 */}
      <nav className="w-full py-12 flex justify-center z-50">
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#work" className="hover:text-blue-600 transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* 2. 主体内容：垂直水平居中 */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 max-w-5xl text-center">
        
        {/* 核心标语 */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Product Manager Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter text-slate-900">
            用逻辑定义产品 <br />
            <span className="text-slate-300 italic">以用户创造价值</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            你好，我是 [你的名字]。致力于通过深度洞察与严谨逻辑，打造直觉化且具备商业生命力的数字产品。
          </p>
        </div>

        {/* 居中的行动按钮 */}
        <div className="flex flex-col items-center gap-6">
          <button className="group bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-2xl shadow-slate-200">
            查看我的作品集
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* 社交入口 */}
          <div className="flex gap-8 pt-4">
            <a href="#" className="text-slate-300 hover:text-slate-900 transition-colors"><Mail size={20} /></a>
            <a href="#" className="text-slate-300 hover:text-slate-900 transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </main>

      {/* 3. 底部版权信息 */}
      <footer className="w-full py-10 flex flex-col items-center border-t border-slate-100">
        <div className="text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase">
          © 2026 Designed with Precision
        </div>
      </footer>

      {/* 背景装饰（可选）：极淡的网格线，增加专业感 */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
    </div>
  );
};

export default App;