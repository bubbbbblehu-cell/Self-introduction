import React from 'react';
import { Mail, Github, ArrowRight, Globe } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-slate-900 font-sans flex flex-col items-center">
      
      {/* 居中导航栏 */}
      <nav className="w-full py-12 flex justify-center">
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Digital Nomads</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a>
        </div>
      </nav>

      {/* 主体：左右分栏 */}
      <main className="flex-1 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center px-10 gap-20">
        
        {/* 左侧：文案 */}
        <div className="flex-[1.2] space-y-10 order-2 md:order-1">
          <header className="space-y-4">
             <h1 className="text-5xl font-black tracking-tighter">MIA-LU</h1>
             <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Product Manager & No-Code Developer</p>
          </header>

          <section className="space-y-8">
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🫨</span>
                <span className="font-bold text-slate-400 text-xs uppercase tracking-widest">Enterprise Background</span>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                在宇宙无敌大国企的几千个卑微乙方的一方中担任<strong className="text-slate-900">“制造垃圾”</strong>。
                拥有 <span className="text-slate-900 font-bold">4年 To B 产品 + 无代码开发经验</span>，擅长复杂流程梳理与数据中台搭建。
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🫧</span>
                <span className="font-bold text-slate-400 text-xs uppercase tracking-widest">Digital Nomad Life</span>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                做过半年多数字流浪者。期间和伙伴运营了近 <strong className="text-slate-900">400人</strong> 左右的数字游民社区 <strong className="text-blue-500">CDN</strong>。
                举办了十余场线上活动，为几十位伙伴建立了工作链接。
              </p>
            </div>
          </section>

          <div className="flex items-center gap-6">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl">
              探索作品集 <ArrowRight size={18}/>
            </button>
          </div>
        </div>

        {/* 右侧：照片 */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="relative group">
            <div className="w-72 h-96 md:w-80 md:h-[480px] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 border-[12px] border-white">
              {/* 这里的 src 指向你 public 文件夹里的照片 */}
              <img 
                src="./my-photo.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg rotate-6 border border-slate-100 font-bold text-xs">
               📍 2026 Space
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 text-[9px] font-bold tracking-[0.4em] text-slate-300 uppercase italic">
        © Logic & Freedom . MIA-LU
      </footer>
    </div>
  );
};

export default App;