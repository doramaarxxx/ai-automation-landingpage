import { AlertCircle, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onCTAClick: () => void;
}

export default function ProblemSection({ onCTAClick }: ProblemSectionProps) {
  const problems = [
    {
      quote: "AI 써보라는데, 어디서부터 시작해야 할지 모르겠다.",
      context: "너무 많은 정보에 압도당한 마케팅 팀장"
    },
    {
      quote: "ChatGPT 써봤지만 실무엔 안 녹는다.",
      context: "프롬프트 강의만 3개 들은 기획자"
    },
    {
      quote: "성과를 내야 하는데, 나는 개발자가 아니다.",
      context: "AI 도입 KPI를 받은 인사팀 실무자"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            이런 고민, 하고 계신가요?
          </h2>
          <p className="text-lg text-slate-600">
            AI 활용, 배우는 것보다 실전이 어렵습니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <AlertCircle className="w-12 h-12 text-slate-400 mb-4" />
              <blockquote className="text-lg font-medium text-slate-900 mb-3 leading-relaxed">
                "{problem.quote}"
              </blockquote>
              <p className="text-sm text-slate-500">— {problem.context}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-lg"
          >
            나에게 맞는 AI 적용법 진단받기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
