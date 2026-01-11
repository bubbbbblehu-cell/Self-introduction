import React, { useState } from 'react';
import { Mail, Github, ArrowRight, Phone, MessageSquare, X, Copy, Check } from 'lucide-react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactInfo = "17601332836";
  const photoPath = "./my-photo.jpg";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-slate-900 font-sans flex flex-col items-center relative">
      
      {/* 居中导航栏 */}
      <nav className="w-full py-12 flex justify-center z-40">
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Digital Nomads</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a>
        </div>
      </nav>

      {/* 主体内容 */}
      <main className="flex-1 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center px-10 gap-12 md:gap-24 mb-20">
        
        {/* 左侧：文案区 */}
        <div className="flex-1 text-left space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
              HuJinghua
            </h1>
            <p className="text-blue-600 font-bold uppercase tracking-[0.15em] text-[11px]">
              Product Manager & No-Code Developer
            </p>
            
            <div className="space-y-6 pt-8 border-l border-slate-200 pl-6 mt-6">
              <div className="flex gap-4">
                <span className="text-2xl">🫨</span>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  在宇宙无敌大国企担任<strong className="text-slate-800 underline decoration-slate-200 underline-offset-4">“制造垃圾”</strong>的一方。
                  <br/>
                  <span className="inline-block mt-2 text-[9px] font-bold bg-slate-100 px-2 py-0.5 rounded text-blue-600 uppercase tracking-wider">
                    4年 To B 产品 + 无代码开发经验
                  </span>
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🫧</span>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  曾任数字流浪者。运营 <strong className="text-slate-800">400人</strong> 规模数字游民社区 <span className="font-bold border-b border-blue-200">CDN</span>。
                  举办十余场线上活动，建立深度工作链接。
                </p>
              </div>
            </div>
          </div>

          {/* 交互按钮区域 */}
          <div className="flex items-center gap-6 pt-2">
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-600 transition-all flex items-center gap-2 shadow-md">
              Portfolio <ArrowRight size={14}/>
            </button>
            <div className="flex gap-4">
               <a href="https://github.com/bubbbbbblehu-cell" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors">
                 <Github size={18}/>
               </a>
               {/* 触发弹窗的按钮 */}
               <button 
                onClick={() => setIsModalOpen(true)}
                className="text-slate-300 hover:text-blue-600 transition-colors flex items-center gap-1"
               >
                 <MessageSquare size={18}/>
               </button>
            </div>
          </div>
        </div>

        {/* 右侧：照片区 */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            <div className="w-56 h-72 md:w-64 md:h-[380px] bg-slate-100 rounded-[1.5rem] overflow-hidden shadow-xl border-[6px] border-white relative z-10">
              <img 
                src={photoPath}
                alt="HuJinghua" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/Self-introduction/my-photo.jpg"; }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* 联系方式弹窗 (Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 背景遮罩 */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* 弹窗卡片 */}
          <div className="relative bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors"
            >
              <X size={20}/>
            </button>
            
            <div className="text-center space-y-6">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">联系 HuJinghua</h3>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">WeChat & Phone</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between border border-slate-100">
                <span className="font-mono text-lg font-bold tracking-wider text-slate-700">{contactInfo}</span>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-blue-600"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
              
              <p className="text-[10px] text-slate-400">点击右侧按钮可快速复制号码</p>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full py-8 flex justify-center border-t border-slate-100 mt-auto">
        <div className="text-[8px] font-bold tracking-[0.4em] text-slate-200 uppercase italic">
          Logic & Freedom . 2026
        </div>
      </footer>
    </div>
  );
};

export default App;