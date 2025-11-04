import { Menu } from 'lucide-react';

interface HeaderProps {
  onSurveyClick: () => void;
}

export default function Header({ onSurveyClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg" />
            <span className="text-xl font-bold text-slate-900">AI Consulting</span>
          </div>

          <button
            onClick={onSurveyClick}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            <Menu className="w-5 h-5" />
            AI 도입 진단
          </button>
        </div>
      </div>
    </header>
  );
}
