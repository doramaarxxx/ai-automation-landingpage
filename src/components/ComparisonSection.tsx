import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  const comparisons = [
    {
      category: "접근 방식",
      traditional: "커리큘럼 중심",
      ours: "맞춤 진단 중심"
    },
    {
      category: "결과물",
      traditional: "지식 습득",
      ours: "실무 성과"
    },
    {
      category: "대상",
      traditional: "누구나",
      ours: "실적 압박 실무자"
    },
    {
      category: "종료 후",
      traditional: "수료",
      ours: "성과 + 유지보수"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            일반 AI 강의와 무엇이 다른가요?
          </h2>
          <p className="text-lg text-slate-600">
            지식이 아닌 성과, 이론이 아닌 실전에 집중합니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-slate-900 text-white">
              <div className="p-6 font-semibold">항목</div>
              <div className="p-6 font-semibold border-l border-slate-700 text-center">일반 AI 강의</div>
              <div className="p-6 font-semibold border-l border-blue-600 bg-blue-600 text-center">본 프로그램</div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== comparisons.length - 1 ? 'border-b border-slate-200' : ''
                }`}
              >
                <div className="p-6 font-medium text-slate-900 bg-white">
                  {item.category}
                </div>
                <div className="p-6 text-slate-600 border-l border-slate-200 text-center flex items-center justify-center gap-2">
                  <X className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <span>{item.traditional}</span>
                </div>
                <div className="p-6 text-blue-600 font-medium border-l border-slate-200 bg-blue-50/50 text-center flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{item.ours}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
            <p className="text-center text-slate-700 leading-relaxed">
              <span className="font-semibold text-blue-600">결과 중심 접근:</span> 배운 내용을 실무에 적용하지 못하면 의미가 없습니다.
              우리는 당신의 업무 성과를 직접 만드는 것에 집중합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
