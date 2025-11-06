import { Calendar, Mail } from 'lucide-react';
import InquiryForm from './InquiryForm';

interface ContactSectionProps {
  onBookingClick: () => void;
}

export default function ContactSection({ onBookingClick }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            무료 진단 미팅 신청
          </h2>
          <p className="text-lg text-muted-foreground">
            지금 신청하시면 30분 무료 진단 미팅을 제공해드립니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">문의 폼 작성</h3>
              <InquiryForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-semibold mb-2">진단 미팅 안내</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                비대면 화상 미팅으로 진행되며, 30분 내외로 진행됩니다.
                담당자가 연락드려 일정을 조율해드립니다.
              </p>
              <button
                onClick={onBookingClick}
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                일정 바로 예약하기
              </button>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <Mail className="h-10 w-10 text-muted-foreground mb-4" />
              <h4 className="font-semibold mb-2">이메일 문의</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                빠른 상담을 원하시면 직접 이메일로 문의하세요
              </p>
              <a
                href="mailto:maardoramaar@gmail.com"
                className="text-sm text-primary hover:underline font-medium"
              >
                maardoramaar@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
