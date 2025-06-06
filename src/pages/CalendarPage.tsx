import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  type: 'interview' | 'assessment' | 'deadline' | 'other';
}

const CalendarPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events] = useState<Event[]>(sampleEvents);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Add empty days for the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getEventsByDate = (date: Date) => {
    if (!date) return [];
    
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Calendar</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{formatMonthYear(currentMonth)}</h2>
          <div className="flex gap-2">
            <button 
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {weekDays.map(day => (
            <div key={day} className="text-center font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          
          {days.map((day, index) => (
            <div 
              key={index} 
              className={`min-h-[100px] border border-gray-100 p-2 ${
                day ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {day && (
                <>
                  <div className={`text-right ${
                    new Date().toDateString() === day.toDateString() 
                      ? 'bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-auto'
                      : 'text-gray-700'
                  }`}>
                    {day.getDate()}
                  </div>
                  <div className="mt-1">
                    {getEventsByDate(day).map(event => (
                      <div 
                        key={event.id} 
                        className={`text-xs p-1 mb-1 rounded truncate ${
                          event.type === 'interview' ? 'bg-blue-100 text-blue-800' :
                          event.type === 'assessment' ? 'bg-purple-100 text-purple-800' :
                          event.type === 'deadline' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {event.time} - {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-gray-800 mb-3">Upcoming Events</h3>
          <div className="space-y-3">
            {events
              .filter(event => new Date(event.date) >= new Date())
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 3)
              .map(event => (
                <div key={event.id} className="flex items-start p-3 border border-gray-200 rounded-lg">
                  <div className="mr-3 text-center">
                    <div className="font-bold text-gray-800">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.time}</p>
                    <div className={`text-xs mt-1 inline-block px-2 py-1 rounded-full ${
                      event.type === 'interview' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'assessment' ? 'bg-purple-100 text-purple-800' :
                      event.type === 'deadline' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Google Technical Interview',
    date: new Date(2023, 5, 15),
    time: '10:00 AM',
    type: 'interview',
  },
  {
    id: '2',
    title: 'Microsoft Coding Assessment',
    date: new Date(2023, 5, 18),
    time: '2:00 PM',
    type: 'assessment',
  },
  {
    id: '3',
    title: 'Apple Application Deadline',
    date: new Date(2023, 5, 20),
    time: '11:59 PM',
    type: 'deadline',
  },
  {
    id: '4',
    title: 'LinkedIn Phone Screen',
    date: new Date(2023, 5, 22),
    time: '11:00 AM',
    type: 'interview',
  },
  {
    id: '5',
    title: 'Amazon System Design Interview',
    date: new Date(2023, 5, 25),
    time: '1:00 PM',
    type: 'interview',
  },
];

export default CalendarPage;