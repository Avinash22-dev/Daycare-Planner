
import React from 'react';
import { ActivityIcon } from './IconComponents';
import type { RoutineItem } from '../types';

interface RoutineDisplayProps {
  routine: RoutineItem[];
  childName: string;
  onReset: () => void;
}

const activityTypeStyles: { [key in RoutineItem['activityType']]: { bg: string; iconBg: string; text: string; border: string; } } = {
  meal: { bg: 'bg-amber-50', iconBg: 'bg-amber-200', text: 'text-amber-800', border: 'border-amber-200' },
  play: { bg: 'bg-rose-50', iconBg: 'bg-rose-200', text: 'text-rose-800', border: 'border-rose-200' },
  learn: { bg: 'bg-indigo-50', iconBg: 'bg-indigo-200', text: 'text-indigo-800', border: 'border-indigo-200' },
  nap: { bg: 'bg-sky-50', iconBg: 'bg-sky-200', text: 'text-sky-800', border: 'border-sky-200' },
  outdoor: { bg: 'bg-emerald-50', iconBg: 'bg-emerald-200', text: 'text-emerald-800', border: 'border-emerald-200' },
  transition: { bg: 'bg-slate-50', iconBg: 'bg-slate-200', text: 'text-slate-800', border: 'border-slate-200' },
};

const RoutineDisplay: React.FC<RoutineDisplayProps> = ({ routine, childName, onReset }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">A Perfect Day for {childName}</h2>
        <p className="mt-2 text-slate-600">Here’s a personalized routine to make the day fun and structured.</p>
      </div>

      <div className="space-y-4">
        {routine.map((item, index) => {
          const styles = activityTypeStyles[item.activityType] || activityTypeStyles.transition;
          return (
            <div key={index} className={`flex items-start gap-4 p-4 rounded-xl border ${styles.border} ${styles.bg}`}>
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${styles.iconBg} ${styles.text}`}>
                <ActivityIcon type={item.activityType} className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <p className={`font-bold ${styles.text}`}>{item.timeRange}</p>
                <h3 className="text-lg font-semibold text-slate-900 mt-1">{item.activity}</h3>
                <p className="text-slate-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onReset}
          className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
        >
          Create a New Routine
        </button>
      </div>
    </div>
  );
};

export default RoutineDisplay;
