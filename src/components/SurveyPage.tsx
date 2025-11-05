import { useState } from 'react';
import { X, CheckSquare, Square, CheckCircle, AlertCircle } from 'lucide-react';

interface SurveyPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurveyPage({ isOpen, onClose }: SurveyPageProps) {
  const [q1, setQ1] = useState<string[]>([]);
  const [q1Other, setQ1Other] = useState('');
  const [q2, setQ2] = useState<string[]>([]);
  const [q2Other, setQ2Other] = useState('');
  const [q2Example, setQ2Example] = useState('');
  const [q3, setQ3] = useState('');
  const [q3Example, setQ3Example] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState<string[]>([]);
  const [q5Other, setQ5Other] = useState('');
  const [q5Example, setQ5Example] = useState('');
  const [q6, setQ6] = useState('');
  const [q7, setQ7] = useState('');
  const [q8, setQ8] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleCheckbox = (value: string, list: string[], setter: (val: string[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter(item => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Survey submitted:', {
        q1: [...q1, q1Other].filter(Boolean),
        q2: { options: [...q2, q2Other].filter(Boolean), example: q2Example },
        q3: { option: q3, example: q3Example },
        q4,
        q5: { options: [...q5, q5Other].filter(Boolean), example: q5Example },
        q6,
        q7,
        q8,
      });

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('설문 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Error submitting survey:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">AI 도입 진단</h2>
              <p className="text-sm text-slate-600 mt-1">귀사의 AI 도입 가능성을 진단해드립니다</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          {status === 'success' ? (
            <div className="flex-1 flex items-center justify-center p-12">
              <div className="text-center">
                <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-slate-900 mb-4">제출 완료!</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  설문에 응답해 주셔서 감사합니다.<br />
                  담당자가 검토 후 빠른 시일 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30"
                >
                  확인
                </button>
              </div>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <h3 className="font-semibold text-blue-900 mb-2">📊 AI 관련 질문</h3>
                <p className="text-sm text-blue-700">AI와 자동화 도입에 대한 귀사의 현황을 파악합니다</p>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    1. AI나 자동화 도입을 생각해본 적은 있지만 실행하지 못한 이유가 있다면 무엇인가요?
                  </span>
                  <span className="text-sm text-slate-600 block mb-3">(복수 선택 가능)</span>
                </label>

                <div className="space-y-2">
                  {[
                    '무엇부터 해야 할지 몰라서',
                    '내부 인력/시간이 부족해서',
                    '투자 대비 효과(ROI)가 확실하지 않아서',
                    '우리 회사에는 필요 없다고 판단해서',
                    '시도했지만 실패한 경험이 있어서',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleCheckbox(option, q1, setQ1)}
                      className="flex items-start gap-3 w-full p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-left"
                    >
                      {q1.includes(option) ? (
                        <CheckSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-slate-700">{option}</span>
                    </button>
                  ))}
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-200">
                    {q1.includes('기타') ? (
                      <CheckSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-slate-700">기타:</span>
                      <input
                        type="text"
                        value={q1Other}
                        onChange={(e) => {
                          setQ1Other(e.target.value);
                          if (e.target.value && !q1.includes('기타')) {
                            setQ1([...q1, '기타']);
                          } else if (!e.target.value && q1.includes('기타')) {
                            setQ1(q1.filter(item => item !== '기타'));
                          }
                        }}
                        className="flex-1 px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="직접 입력"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    2. AI나 자동화 프로젝트를 시작할 때, 성공했다고 판단할 기준(ROI 기준)은 무엇인가요?
                  </span>
                </label>

                <div className="space-y-2">
                  {[
                    '인건비 절감 (직원 업무 시간 감소)',
                    '업무 효율성 향상 (처리 속도, 오류율 감소 등)',
                    '매출 증가 또는 리드 전환율 향상',
                    '고객 만족도 상승',
                    '조직 내 AI 활용 문화 확산',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleCheckbox(option, q2, setQ2)}
                      className="flex items-start gap-3 w-full p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-left"
                    >
                      {q2.includes(option) ? (
                        <CheckSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-slate-700">{option}</span>
                    </button>
                  ))}
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-200">
                    {q2.includes('기타') ? (
                      <CheckSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-slate-700">기타:</span>
                      <input
                        type="text"
                        value={q2Other}
                        onChange={(e) => {
                          setQ2Other(e.target.value);
                          if (e.target.value && !q2.includes('기타')) {
                            setQ2([...q2, '기타']);
                          } else if (!e.target.value && q2.includes('기타')) {
                            setQ2(q2.filter(item => item !== '기타'));
                          }
                        }}
                        className="flex-1 px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="직접 입력"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mt-3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    📝 예시 답안
                  </label>
                  <textarea
                    value={q2Example}
                    onChange={(e) => setQ2Example(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="예: 업무 시간이 30% 이상 줄어들면 성공이라고 생각해요."
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    3. 해당 기능에 대해 지불 의사가 있는 금액대는 어느 정도인가요?
                  </span>
                  <span className="text-sm text-slate-600 block mb-3">(하나 선택)</span>
                </label>

                <div className="space-y-2">
                  {[
                    '10만~100만 원',
                    '100만~500만 원',
                    '500만~1,000만 원',
                    '1,000만~3,000만 원',
                    '3,000만 원 이상',
                    '상황에 따라 다름 (예: 매출 규모, 인원 수, 효과 정도 등)',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setQ3(option)}
                      className={`flex items-center gap-3 w-full p-3 rounded-lg border transition-all text-left ${
                        q3 === option
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        q3 === option ? 'border-blue-600' : 'border-slate-400'
                      }`}>
                        {q3 === option && <div className="w-3 h-3 rounded-full bg-blue-600" />}
                      </div>
                      <span className="text-slate-700">{option}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mt-3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    📝 예시 답안
                  </label>
                  <textarea
                    value={q3Example}
                    onChange={(e) => setQ3Example(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="예: 파일럿 단계에서는 100만 원 이내, 확실한 성과가 나면 500만 원 이상도 가능합니다."
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4">
                <h3 className="font-semibold text-cyan-900 mb-2">🧩 업무 관련 질문</h3>
                <p className="text-sm text-cyan-700">귀사의 업무 프로세스와 개선 가능성을 분석합니다</p>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    4. 현재 귀사의 주요 업무나 프로세스는 어떤 것들이 있는지 간단히 설명해 주시겠어요?
                  </span>
                </label>
                <textarea
                  value={q4}
                  onChange={(e) => setQ4(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="예: 고객 문의 응대, 주문 처리, 재고 관리, 마케팅 콘텐츠 제작이 주요 업무입니다."
                />
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    5. 그 업무들 중에서 특히 반복적이고 루틴한 작업이 있다면 말씀 부탁드립니다.
                  </span>
                  <span className="text-sm text-slate-600 block mb-3">(복수 선택 가능)</span>
                </label>

                <div className="space-y-2">
                  {[
                    '데이터 입력 / 정리 (엑셀, CRM 등)',
                    '이메일·메신저 응답',
                    '보고서 작성 / 정리',
                    '회의록, 일정 관리',
                    '재고 / 발주 / 송장 관리',
                    '고객 문의 / 견적 대응',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleCheckbox(option, q5, setQ5)}
                      className="flex items-start gap-3 w-full p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-left"
                    >
                      {q5.includes(option) ? (
                        <CheckSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-slate-700">{option}</span>
                    </button>
                  ))}
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-200">
                    {q5.includes('기타') ? (
                      <CheckSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-slate-700">기타:</span>
                      <input
                        type="text"
                        value={q5Other}
                        onChange={(e) => {
                          setQ5Other(e.target.value);
                          if (e.target.value && !q5.includes('기타')) {
                            setQ5([...q5, '기타']);
                          } else if (!e.target.value && q5.includes('기타')) {
                            setQ5(q5.filter(item => item !== '기타'));
                          }
                        }}
                        className="flex-1 px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="직접 입력"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mt-3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    📝 예시 답안
                  </label>
                  <textarea
                    value={q5Example}
                    onChange={(e) => setQ5Example(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="예: 매일 비슷한 고객 문의를 복붙해서 답변하고 있습니다."
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    6. 반복적인 작업 외에 정말 핵심적이고 가치 있는 업무나 스킬 중에서 더 발전시키고 싶으신 부분이 있으시다면 어떤 게 있을까요?
                  </span>
                </label>
                <textarea
                  value={q6}
                  onChange={(e) => setQ6(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="예: 브랜딩이나 신규 고객 유입 전략을 더 고도화하고 싶어요."
                />
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    7. 각 작업마다 보통 얼마나 시간이 소요되는지 말씀해 주시겠어요?
                  </span>
                </label>
                <textarea
                  value={q7}
                  onChange={(e) => setQ7(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="예: 엑셀 정리에 하루 2시간, 고객 응대에 하루 1시간 정도 쓰고 있어요."
                />
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-lg font-semibold text-slate-900 mb-3 block">
                    8. 이 작업들에 들어가는 비용이나 리소스가 어느 정도인지도 말씀해주시면 감사하겠습니다.
                  </span>
                </label>
                <textarea
                  value={q8}
                  onChange={(e) => setQ8(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="예: 해당 업무를 위해 주 1회 아르바이트를 쓰고 있어요 (월 약 80만 원)."
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <div className="flex gap-3 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                disabled={status === 'loading'}
                className="flex-1 py-3 px-6 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    제출 중...
                  </>
                ) : (
                  '제출하기'
                )}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </>
  );
}
