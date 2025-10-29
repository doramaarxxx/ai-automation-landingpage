import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>비개발자를 위한 실전형 AI 트레이닝</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI를 배우는 게 아니라,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              AI로 성과를 만든다
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            비개발자도 2시간 만에 보고서·마케팅·자동화를 해결하는<br />
            결과 중심 AI 컨설팅 프로그램
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onCTAClick}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              맞춤 진단 미팅 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              프로그램 소개 보기
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
}
