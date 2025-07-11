
import React from 'react';
import type { RoutineItem } from '../types';

interface IconProps {
    className?: string;
}

const MealIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21h10" /><path d="M4 3h16" /><path d="m18 3 1.95 11.25a2.46 2.46 0 0 1-2.4 2.75H6.46a2.45 2.45 0 0 1-2.41-2.75L6 3" /><path d="M7 21a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2" />
    </svg>
);

const PlayIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16.48 18.1-2.2-1.6a1.42 1.42 0 0 0-1.25-.3L9 17.5l-2.79-3.48a1.42 1.42 0 0 0-1.42-1.42l-2.2.4a1.42 1.42 0 0 1-1.1-2.3l1.4-2.8a1.42 1.42 0 0 1 2.3-1.1l2.2.4a1.42 1.42 0 0 0 1.42-1.42L7.51 3 10.9 2.7a1.42 1.42 0 0 1 1.6 1.25l1.3 3.9a1.42 1.42 0 0 0 2.5 0l1.3-3.9a1.42 1.42 0 0 1 1.6-1.25L22.5 3l-1.3 3.9a1.42 1.42 0 0 0 .1 1.2l1.4 2.8a1.42 1.42 0 0 1-1.1 2.3l-2.2-.4a1.42 1.42 0 0 0-1.42 1.42L15.8 18.5l-1.32-.4Z" />
    </svg>
);

const LearnIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
);

const NapIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a6 6 0 0 0 3.5-10.7" /><path d="M12 3a6 6 0 0 0-3.5 10.7" /><path d="M19 17a3 3 0 0 1-3-3 3 3 0 0 1 3-3" /><path d="m5 7 1-1" /><path d="m5 17 1 1" />
    </svg>
);

const OutdoorIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /><path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
    </svg>
);

const TransitionIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 4 3 3-3 3" /><path d="M18 7H3" /><path d="m9 20-3-3 3-3" /><path d="M6 17h15" />
    </svg>
);

export const ActivityIcon: React.FC<{ type: RoutineItem['activityType']; className?: string }> = ({ type, className = "w-6 h-6" }) => {
    switch (type) {
        case 'meal': return <MealIcon className={className} />;
        case 'play': return <PlayIcon className={className} />;
        case 'learn': return <LearnIcon className={className} />;
        case 'nap': return <NapIcon className={className} />;
        case 'outdoor': return <OutdoorIcon className={className} />;
        case 'transition': return <TransitionIcon className={className} />;
        default: return null;
    }
};
