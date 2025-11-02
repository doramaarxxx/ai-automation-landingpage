import { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        onSuccess();
        onClose();
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: name,
            },
          },
        });

        if (error) throw error;
        onSuccess();
        onClose();
      }
    } catch (err: any) {
      setError(err.message || '오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setError(null);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {isLogin ? '로그인' : '회원가입'}
            </h2>
            <p className="text-sm text-slate-600">
              {isLogin
                ? '미팅 예약을 위해 로그인이 필요합니다'
                : '간편하게 회원가입하고 미팅을 예약하세요'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  이름
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="홍길동"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                이메일
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                비밀번호
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
              {!isLogin && (
                <p className="text-xs text-slate-500 mt-1">최소 6자 이상 입력하세요</p>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '처리중...' : isLogin ? '로그인' : '회원가입'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={toggleMode}
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              {isLogin ? (
                <>
                  계정이 없으신가요?{' '}
                  <span className="text-blue-600 font-semibold">회원가입</span>
                </>
              ) : (
                <>
                  이미 계정이 있으신가요?{' '}
                  <span className="text-blue-600 font-semibold">로그인</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
