import { Menu } from 'lucide-react';

interface HeaderProps {
  onSurveyClick: () => void;
}

export default function Header({ onSurveyClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold">AI Consulting</span>
          </div>

          <button
            onClick={onSurveyClick}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Menu className="h-4 w-4" />
            AI 도입 진단
          </button>
        </div>
      </div>
    </header>
  );
}
