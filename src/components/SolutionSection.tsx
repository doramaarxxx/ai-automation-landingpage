import { Video, FileText, Zap } from 'lucide-react';

export default function SolutionSection() {
  const steps = [
    {
      icon: Video,
      number: "1",
      title: "비대면 니즈 진단 미팅",
      description: "현재 업무 현황과 AI 활용 목표를 30분 내외로 분석합니다.",
      result: "개인/팀 맞춤 진단 리포트"
    },
    {
      icon: FileText,
      number: "2",
      title: "맞춤 실행 플랜 제안",
      description: "진단 결과를 바탕으로 즉시 실행 가능한 AI 활용 시나리오를 설계합니다.",
      result: "실무 적용 가능한 구체적 플랜"
    },
    {
      icon: Zap,
      number: "3",
      title: "실행 및 성과 확인",
      description: "실제 업무에 적용하며 성과를 측정하고, 지속적인 개선을 지원합니다.",
      result: "측정 가능한 실무 성과"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            3단계로 완성되는 AI 실전 적용
          </h2>
          <p className="text-lg text-muted-foreground">
            진단부터 성과까지, 체계적인 프로세스로 확실한 결과를 만듭니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full transition-shadow hover:shadow-md">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold">
                      {step.number}
                    </div>
                    <Icon className="h-10 w-10 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <Zap className="h-4 w-4" />
                      {step.result}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
