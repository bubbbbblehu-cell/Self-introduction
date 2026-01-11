import React, { useState } from 'react';
import { Mail, Github, ArrowRight, X, Copy, Check, MessageCircle, ExternalLink } from 'lucide-react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactInfo = "17601332836";
  const photoPath = "./my-photo.jpg";

  // 预留的6个作品集占位数据
  const projects = [
    { id: 1, title: "项目名称 01", desc: "点击右侧箭头编辑项目描述...", tag: "To B 产品" },
    { id: 2, title: "项目名称 02", desc: "点击右侧箭头编辑项目描述...", tag: "数据中台" },
    { id: 3, title: "项目名称 03", desc: "点击右侧箭头编辑项目描述...", tag: "无代码开发" },
    { id: 4, title: "项目名称 04", desc: "点击右侧箭头编辑项目描述...", tag: "社区运营" },
    { id: 5, title: "项目名称 05", desc: "点击右侧箭头编辑项目描述...", tag: "产品定义" },
    { id: 6, title: "项目名称 06", desc: "点击右侧箭头编辑项目描述...", tag: "用户研究" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-slate-900 font-sans flex flex-col items-center">
      
      {/* 居中导航栏 */}
      <nav className="w-full py-12 flex justify-center z-50">
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Digital Nomads</a>
        </div>
      </nav>

      {/* Hero Section: 个人简介 (V1 核心比例) */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center px-10 gap-16 mb-32 pt-10">
        <div className="flex-1 text-left space-y-10 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 uppercase">
              HuJinghua <br/>
              <span className="text-blue-600 italic">Product Manager</span>
            </h1>
            
            <div className="space-y-8 py-4 border-l-2 border-slate-100 pl-6">
              <div className="flex gap-4 group">
                <span className="text-3xl">🫨</span>
                <p className="text-lg text-slate-600 leading-relaxed">
                  在宇宙无敌大国企担任<strong className="text-slate-900 underline decoration-slate-200 underline-offset-4">“制造垃圾”</strong>的一方。
                  <br/>
                  <span className="inline-block mt-2 text-xs font-bold bg-blue-50 px-2 py-1 rounded text-blue-600 uppercase tracking-wider">
                    4年 To B 产品 + 无代码开发经验
                  </span>
                </p>
              </div>
              <div className="flex gap-4 group">
                <span className="text-3xl">🫧</span>
                <p className="text-lg text-slate-600 leading-relaxed">
                  曾任数字流浪者。运营 <strong className="text-slate-900">400人</strong> 规模数字游民社区 <span className="font-extrabold text-slate-800 border-b-2 border-blue-200">CDN</span>。
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#portfolio" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl hover:-translate-y-1">
              探索作品集 <ArrowRight size={18}/>
            </a>
            <div className="flex gap-4 items-center">
               <a href="https://github.com/bubbbbbblehu-cell" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20}/></a>
               <button onClick={() => setIsModalOpen(true)} className="text-slate-400 hover:text-blue-600 transition-colors">
                 <MessageCircle size={22}/>
               </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            <div className="w-72 h-96 md:w-80 md:h-[480px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 border-[12px] border-white relative z-10">
              <img 
                src={photoPath} 
                alt="HuJinghua" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/Self-introduction/my-photo.jpg"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section: 六个窗口 */}
      <section id="portfolio" className="w-full max-w-6xl px-10 mb-32">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Selected Work</h2>
            <div className="h-1 w-12 bg-blue-600"></div>
          </div>
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold italic">V1.0 Edition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-slate-100 group-hover:text-blue-50 transition-colors">
                <ExternalLink size={40} />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{project.tag}</span>
              <h3 className="text-xl font-bold mt-6 mb-3 text-slate-900">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{project.desc}</p>
              <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors gap-2 cursor-pointer">
                READ CASE STUDY <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal & Footer (保持 V1 样式) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900"><X size={20}/></button>
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><MessageCircle size={24} /></div>
              <h3 className="text-lg font-bold">WeChat / Phone</h3>
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between border border-slate-100 font-mono text-lg font-bold">
                {contactInfo}
                <button onClick={copyToClipboard} className="text-slate-400 hover:text-blue-600">{copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full py-10 flex justify-center border-t border-slate-100">
        <div className="text-[9px] font-bold tracking-[0.5em] text-slate-300 uppercase italic">
          Logic & Freedom . HuJinghua . 2026
        </div>
      </footer>
    </div>
  );
};

export default App;