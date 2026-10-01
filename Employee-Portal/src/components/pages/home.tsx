// import { useState } from 'react';
// import { ArrowDownRight, ArrowUpRight, RefreshCw } from 'lucide-react';

// const weekdayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Home = () => {
//   const [visibleMonth, setVisibleMonth] = useState(() => {
//     const today = new Date();
//     return new Date(today.getFullYear(), today.getMonth(), 1);
//   });

//   const monthLabel = visibleMonth.toLocaleDateString('en-US', {
//     month: 'long',
//     year: 'numeric',
//   });
//   const firstWeekday = (visibleMonth.getDay() + 6) % 7;
//   const daysInMonth = new Date(
//     visibleMonth.getFullYear(),
//     visibleMonth.getMonth() + 1,
//     0,
//   ).getDate();
//   const calendarStart = new Date(
//     visibleMonth.getFullYear(),
//     visibleMonth.getMonth(),
//     1 - firstWeekday,
//   );
//   const calendarDays = Array.from({ length: Math.ceil((firstWeekday + daysInMonth) / 7) * 7 }, (_, index) => {
//     const date = new Date(calendarStart);
//     date.setDate(calendarStart.getDate() + index);
//     return date;
//   });
//   const today = new Date();

//   const changeMonth = (amount: number) => {
//     setVisibleMonth((month) => new Date(month.getFullYear(), month.getMonth() + amount, 1));
//   };

  return (
    // <section className="mx-auto flex min-h-full w-full max-w-[1164px] flex-col rounded-[14px] bg-[#f8f8f8] px-3 pb-1 pt-3 shadow-[0_4px_12px_rgba(25,35,45,0.12)] sm:px-4 sm:pt-3">
    //   <div className="flex h-9 shrink-0 items-center justify-between border-b border-gray-200 px-1 pb-2">
    //     <h1 className="text-[15px] font-medium text-[#293247]">Home Page</h1>
    //     <button
    //       type="button"
    //       onClick={() => setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1))}
    //       aria-label="Reset calendar to current month"
    //       title="Refresh calendar"
    //       className="rounded p-1 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
    //     >
    //       <RefreshCw className="h-4 w-4" />
    //     </button>
    //   </div>

    //   <div className="mx-auto grid w-full max-w-[750px] grid-cols-1 gap-4 px-1 pb-2 pt-3 sm:grid-cols-2 sm:gap-4 sm:px-4 sm:pt-3">
    //     <article className="min-h-[132px] rounded-[10px] bg-[#f6d8cf] px-5 py-4 text-[#df806c] shadow-[0_3px_9px_rgba(35,45,55,0.10)]">
    //       <div className="flex items-center gap-1 text-[28px] font-light leading-none">
    //         <ArrowDownRight className="h-7 w-7 stroke-[1.5]" />
    //         <span>0</span>
    //       </div>
    //       <p className="mt-3 text-[13px] text-[#687582]">Availed Leaves</p>
    //       <div className="mt-7 h-[6px] rounded-full bg-white/75" />
    //     </article>
    //     <article className="min-h-[132px] rounded-[10px] bg-[#bce9eb] px-5 py-4 text-[#00a2aa] shadow-[0_3px_9px_rgba(35,45,55,0.10)]">
    //       <div className="flex items-center gap-1 text-[28px] font-light leading-none">
    //         <ArrowUpRight className="h-7 w-7 stroke-[1.5]" />
    //         <span>0</span>
    //       </div>
    //       <p className="mt-3 text-[13px] text-[#687582]">Remaining Leaves</p>
    //       <div className="mt-7 h-[6px] rounded-full bg-white/75" />
    //     </article>
    //   </div>

    //   <div className="mt-3 flex shrink-0 items-center justify-between gap-3 px-1 pb-2 sm:px-2">
    //     <div className="flex items-center gap-1">
    //       <button type="button" onClick={() => setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1))} className="calendar-control">Today</button>
    //       <button type="button" onClick={() => changeMonth(-1)} className="calendar-control">Back</button>
    //       <button type="button" onClick={() => changeMonth(1)} className="calendar-control">Next</button>
    //     </div>
    //     <h2 className="pr-1 text-[13px] font-medium text-[#354156] sm:pr-10">{monthLabel}</h2>
    //   </div>

    //   <div className="mb-1 grid min-h-[300px] flex-1 grid-cols-7 overflow-hidden rounded-t-[12px] border border-gray-300 sm:min-h-[360px]" style={{ gridTemplateRows: `28px repeat(${calendarDays.length / 7}, minmax(58px, 1fr))` }}>
    //     {weekdayNames.map((day) => (
    //       <div key={day} className="flex h-7 items-center justify-center border-b border-r border-gray-300 bg-[#f4f4f4] text-[11px] font-semibold text-[#273044] last:border-r-0">
    //         {day}
    //       </div>
    //     ))}
    //     {calendarDays.map((date) => {
    //       const isCurrentMonth = date.getMonth() === visibleMonth.getMonth();
    //       const isToday = date.getFullYear() === today.getFullYear()
    //         && date.getMonth() === today.getMonth()
    //         && date.getDate() === today.getDate();

    //       return (
    //         <div
    //           key={date.toISOString()}
    //           className={`relative border-b border-r border-gray-300 p-1.5 text-right text-[11px] last:border-r-0 sm:p-2 ${isToday ? 'bg-[#e4f1fa]' : 'bg-transparent'} ${isCurrentMonth ? 'text-[#495363]' : 'text-gray-400'}`}
    //         >
    //           {String(date.getDate()).padStart(2, '0')}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>
    <div>
      <h1>My Home</h1>
      <p>Welcome to the Home Page</p>
    </div>
  );
};

export default Home;
