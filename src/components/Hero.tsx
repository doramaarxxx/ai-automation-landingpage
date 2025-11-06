import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative border-b bg-background">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-muted-foreground">비개발자를 위한 실전형 AI 트레이닝</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AI를 배우는 게 아니라,<br />
            <span className="text-primary">
              AI로 성과를 만든다
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            비개발자도 2시간 만에 보고서·마케팅·자동화를 해결하는<br />
            결과 중심 AI 컨설팅 프로그램
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              맞춤 진단 미팅 신청하기
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              프로그램 소개 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
