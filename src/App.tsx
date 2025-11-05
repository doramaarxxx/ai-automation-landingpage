import { useRef, useState } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ComparisonSection from './components/ComparisonSection';
import SuccessSection from './components/SuccessSection';
import ContactSection from './components/ContactSection';
import MeetingBookingPanel from './components/MeetingBookingPanel';
import Header from './components/Header';
import SurveyPage from './components/SurveyPage';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openBooking = () => {
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const openSurvey = () => {
    setIsSurveyOpen(true);
  };

  const closeSurvey = () => {
    setIsSurveyOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSurveyClick={openSurvey} />
      <div className="pt-16">
        <Hero onCTAClick={openBooking} />
      </div>
      <ProblemSection onCTAClick={scrollToContact} />
      <SolutionSection />
      <ComparisonSection />
      <SuccessSection />
      <div ref={contactRef}>
        <ContactSection onBookingClick={openBooking} />
      </div>

      <MeetingBookingPanel
        isOpen={isBookingOpen}
        onClose={closeBooking}
      />

      <SurveyPage isOpen={isSurveyOpen} onClose={closeSurvey} />

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">결과 중심 AI 컨설팅</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                비개발자를 위한 실전형 AI 트레이닝.<br />
                배우는 것이 아닌, 성과를 만드는 AI 교육.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">문의</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>이메일: contact@example.com</p>
                <p>전화: 02-1234-5678</p>
                <p>평일 오전 9시 ~ 오후 6시</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">프로그램</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>맞춤 진단 미팅</li>
                <li>실행 플랜 제안</li>
                <li>성과 확인 및 유지보수</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 AI Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
