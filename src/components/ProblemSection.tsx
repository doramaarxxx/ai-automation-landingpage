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
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            이런 고민, 하고 계신가요?
          </h2>
          <p className="text-lg text-muted-foreground">
            AI 활용, 배우는 것보다 실전이 어렵습니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 transition-shadow hover:shadow-md"
            >
              <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
              <blockquote className="text-lg font-medium mb-3 leading-relaxed">
                "{problem.quote}"
              </blockquote>
              <p className="text-sm text-muted-foreground">— {problem.context}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onCTAClick}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            나에게 맞는 AI 적용법 진단받기
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
