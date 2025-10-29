import { Calendar, Mail, Phone } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            무료 진단 미팅 신청
          </h2>
          <p className="text-lg text-slate-600">
            지금 신청하시면 30분 무료 진단 미팅을 제공해드립니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">문의 폼 작성</h3>
              <InquiryForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
              <Calendar className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">진단 미팅 안내</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                비대면 화상 미팅으로 진행되며, 30분 내외로 진행됩니다.
                담당자가 연락드려 일정을 조율해드립니다.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <Mail className="w-10 h-10 text-slate-600 mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">이메일 문의</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">
                빠른 상담을 원하시면 직접 이메일로 문의하세요
              </p>
              <a
                href="mailto:maardoramaar@gmail.com"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                maardoramaar@gmail.com
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <Phone className="w-10 h-10 text-slate-600 mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">전화 문의</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">
                평일 오전 9시 ~ 오후 6시
              </p>
              <a
                href="tel:02-1234-5678"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                02-1234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
