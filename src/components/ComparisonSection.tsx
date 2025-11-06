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
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            일반 AI 강의와 무엇이 다른가요?
          </h2>
          <p className="text-lg text-muted-foreground">
            지식이 아닌 성과, 이론이 아닌 실전에 집중합니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 border-b bg-muted">
              <div className="p-4 font-semibold">항목</div>
              <div className="p-4 font-semibold border-l text-center">일반 AI 강의</div>
              <div className="p-4 font-semibold border-l bg-primary/10 text-center">본 프로그램</div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== comparisons.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="p-4 font-medium">
                  {item.category}
                </div>
                <div className="p-4 text-muted-foreground border-l text-center flex items-center justify-center gap-2">
                  <X className="h-4 w-4 shrink-0" />
                  <span>{item.traditional}</span>
                </div>
                <div className="p-4 font-medium border-l bg-primary/5 text-center flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>{item.ours}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border bg-muted/50 p-6">
            <p className="text-center text-sm leading-relaxed">
              <span className="font-semibold">결과 중심 접근:</span> 배운 내용을 실무에 적용하지 못하면 의미가 없습니다.
              우리는 당신의 업무 성과를 직접 만드는 것에 집중합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
