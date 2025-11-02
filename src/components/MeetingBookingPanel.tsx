import { useState } from 'react';
import { X, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface MeetingBookingPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthRequired: () => void;
}

export default function MeetingBookingPanel({ isOpen, onClose, onAuthRequired }: MeetingBookingPanelProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const availableTimeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isDateAvailable = (day: number) => {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date >= today && date.getDay() !== 0 && date.getDay() !== 6;
  };

  const formatDate = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const monthNames = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">미팅 예약</h2>
              <p className="text-sm text-slate-600 mt-1">원하시는 날짜와 시간을 선택하세요</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">날짜 선택</h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={goToPreviousMonth}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                  </button>
                  <div className="text-lg font-semibold text-slate-900">
                    {year}년 {monthNames[month]}
                  </div>
                  <button
                    onClick={goToNextMonth}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-medium text-slate-600 py-2"
                    >
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                    <div key={`empty-${index}`} />
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const dateString = formatDate(day);
                    const isAvailable = isDateAvailable(day);
                    const isSelected = selectedDate === dateString;

                    return (
                      <button
                        key={day}
                        onClick={() => isAvailable && setSelectedDate(dateString)}
                        disabled={!isAvailable}
                        className={`
                          aspect-square rounded-lg text-sm font-medium transition-all
                          ${isSelected
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : isAvailable
                              ? 'bg-white text-slate-900 hover:bg-blue-50 hover:scale-105'
                              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          }
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {selectedDate && (
              <div className="animate-fadeIn">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-900">시간 선택</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {availableTimeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          py-3 px-4 rounded-lg font-medium text-sm transition-all
                          ${isSelected
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-slate-50 text-slate-700 hover:bg-blue-50 hover:scale-105'
                          }
                        `}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {selectedDate && selectedTime && (
            <div className="border-t border-slate-200 p-6 bg-slate-50">
              <div className="bg-white rounded-xl p-4 mb-4 border border-slate-200">
                <div className="text-sm text-slate-600 mb-1">선택한 일정</div>
                <div className="text-lg font-semibold text-slate-900">
                  {selectedDate} {selectedTime}
                </div>
              </div>
              <button
                onClick={async () => {
                  const { data: { user } } = await supabase.auth.getUser();
                  if (!user) {
                    onAuthRequired();
                  } else {
                    console.log('Booking confirmed for:', { user, selectedDate, selectedTime });
                  }
                }}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                예약 확정하기
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
