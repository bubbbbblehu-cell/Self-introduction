import React from 'react';
import { Mail, Github, ExternalLink, Scissors, StickyNote, PenTool } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#333] font-mono p-4 md:p-8">
      {/* 顶部导航 - 简约手写感 */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-12 border-b-2 border-dashed border-[#d1cdc2] pb-4">
        <div className="text-xl font-black tracking-tighter uppercase italic">
          YourName.PM
        </div>
        <div className="flex gap-6 text-sm font-bold opacity-70">
          <a href="#" className="hover:line-through">#关于我</a>
          <a href="#" className="hover:line-through">#项目</a>
          <a href="#" className="hover:line-through">#联系</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto">
        {/* Hero Section - 剪贴报风格 */}
        <div className="relative grid md:grid-cols-2 gap-8 mb-20">
          
          {/* 左侧：标语卡片 */}
          <div className="relative bg-white p-8 border-2 border-[#333] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] rotate-[-1deg]">
            {/* 模拟胶带 */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-blue-100/60 backdrop-blur-sm border border-blue-200/50 rotate-2 z-10 flex items-center justify-center text-[10px] text-blue-800 font-bold tracking-widest opacity-80">
              ADHESIVE TAPE
            </div>
            
            <h1 className="text-4xl font-black mb-6 mt-4 leading-tight">
              产品经理的<br/>
              手作日记
            </h1>
            <p className="text-lg leading-relaxed opacity-80 mb-6">
              我是 [你的名字]，一个在逻辑与创意之间寻找平衡的 PM。我喜欢把复杂的产品拆解，像手工零件一样重新组装。
            </p>
            <button className="bg-[#333] text-white px-6 py-2 flex items-center gap-2 hover:bg-black transition-all">
              了解更多 <Scissors size={16}/>
            </button>
          </div>

          {/* 右侧：功能亮点 - 虚线卡片 */}
          <div className="relative border-2 border-dashed border-blue-400 p-8 rounded-xl bg-blue-50/30 flex flex-col justify-center rotate-[1deg]">
             <div className="absolute -top-3 left-6 bg-yellow-200 text-[#856404] text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-300 shadow-sm">
                FEATURE LAUNCH
             </div>
             <h2 className="text-2xl font-bold mb-4">“设身处地：做我自己的用户”</h2>
             <p className="text-sm opacity-70 leading-relaxed mb-6 italic">
                “与其说我在设计功能，不如说我在缝补用户体验中的裂缝。每一个 0 到 1 的迭代，都像是在白纸上落下的第一笔。”
             </p>
             <div className="flex gap-4">
                <div className="px-4 py-2 bg-white border border-[#333] text-xs font-bold rounded shadow-[4px_4px_0px_0px_#333]">
                  查看产品手札
                </div>
             </div>
          </div>
        </div>

        {/* 间隔装饰线 */}
        <div className="w-full h-8 border-y-2 border-dashed border-[#d1cdc2] mb-20 flex items-center justify-center">
            <div className="bg-[#F4F1EA] px-8 text-xs font-bold text-[#d1cdc2] tracking-widest uppercase">
                Works & Logic
            </div>
        </div>

        {/* 关于我部分 */}
        <section className="mb-20 max-w-2xl">
          <div className="inline-block bg-white px-4 py-1 border-2 border-[#333] mb-6 font-bold -rotate-1">
             👩🏻‍💻 文工的我
          </div>
          <p className="text-xl leading-[1.8] font-medium opacity-90">
             我有超过 [X] 年的产品经验。对我来说，好的产品是“逻辑、审美与商业价值的精妙缝合”。我不迷信黑话，我只相信“能解决用户问题的方案”。
          </p>
        </section>

        {/* 底部联系方式 - 标签风格 */}
        <section className="border-t-2 border-[#333] pt-12 pb-24">
           <h3 className="text-2xl font-black mb-8">联系我</h3>
           <div className="flex flex-wrap gap-8">
              <a href="mailto:your@email.com" className="flex items-center gap-2 group underline decoration-2 decoration-blue-400 underline-offset-4 font-bold">
                 <Mail size={20} className="group-hover:rotate-12 transition-transform"/> 
                 Email: yourname@email.com
              </a>
              <a href="https://github.com" className="flex items-center gap-2 group underline decoration-2 decoration-green-400 underline-offset-4 font-bold">
                 <Github size={20} className="group-hover:-rotate-12 transition-transform"/>
                 GitHub: bubbbbbblehu-cell
              </a>
           </div>
        </section>
      </main>

      {/* 装饰性浮动图标 */}
      <div className="fixed bottom-8 right-8 text-[#d1cdc2] flex flex-col gap-4 opacity-50">
          <StickyNote size={32} />
          <PenTool size={32} />
      </div>
    </div>
  );
};

export default App;