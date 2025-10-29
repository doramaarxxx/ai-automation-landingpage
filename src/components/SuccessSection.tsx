import { Clock, TrendingUp, FileText } from 'lucide-react';

export default function SuccessSection() {
  const cases = [
    {
      icon: Clock,
      title: "보고서 자동화",
      company: "중견 제조업 기획팀",
      before: "주간 보고서 작성에 4시간 소요",
      after: "AI 자동화로 30분으로 단축",
      result: "주간 3.5시간 절약",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "마케팅 콘텐츠 자동화",
      company: "스타트업 마케팅팀",
      before: "SNS 콘텐츠 기획 및 제작 병목",
      after: "AI 기반 콘텐츠 자동 생성 시스템 구축",
      result: "전환율 35% 상승",
      color: "cyan"
    },
    {
      icon: FileText,
      title: "고객 응대 자동화",
      company: "전자상거래 CS팀",
      before: "반복적인 고객 문의 처리에 하루 2시간",
      after: "AI 챗봇 및 자동 응답 시스템 도입",
      result: "응대 시간 70% 감소",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-700'
      },
      cyan: {
        bg: 'bg-cyan-50',
        icon: 'text-cyan-600',
        badge: 'bg-cyan-100 text-cyan-700'
      },
      indigo: {
        bg: 'bg-indigo-50',
        icon: 'text-indigo-600',
        badge: 'bg-indigo-100 text-indigo-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            실제 성과 사례
          </h2>
          <p className="text-lg text-slate-600">
            이미 많은 기업과 실무자들이 성과를 경험했습니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mb-6">
                  {item.company}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-medium text-slate-500 mb-1">Before</div>
                    <p className="text-sm text-slate-700">{item.before}</p>
                  </div>

                  <div className="h-px bg-slate-200"></div>

                  <div>
                    <div className="text-xs font-medium text-slate-500 mb-1">After</div>
                    <p className="text-sm text-slate-700">{item.after}</p>
                  </div>
                </div>

                <div className={`inline-block px-4 py-2 ${colors.badge} rounded-full font-semibold text-sm`}>
                  {item.result}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 italic">
            * 실제 컨설팅 결과를 바탕으로 작성되었습니다. 개별 성과는 업무 환경에 따라 달라질 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
