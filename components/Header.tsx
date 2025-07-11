
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="py-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-600 tracking-tight flex items-center justify-center gap-3">
                <span role="img" aria-label="teddy bear emoji">🧸</span>
                Daycare Dream Planner
            </h1>
            <p className="mt-3 text-lg text-slate-600">
                Your AI-powered assistant for creating perfect, personalized daily routines.
            </p>
        </header>
    );
};

export default Header;
