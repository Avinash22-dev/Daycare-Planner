
import React, { useState } from 'react';
import type { ChildInfo } from '../types';

interface RoutineFormProps {
    onSubmit: (info: ChildInfo) => void;
    isLoading: boolean;
}

const RoutineForm: React.FC<RoutineFormProps> = ({ onSubmit, isLoading }) => {
    const [formData, setFormData] = useState<ChildInfo>({
        name: 'Leo',
        age: '2-3y',
        wakeUpTime: '07:00',
        bedTime: '19:30',
        napSchedule: 'one-long',
        interests: 'Building with blocks, listening to stories, and playing with water.',
        dietaryNeeds: 'No nuts. Loves bananas and yogurt.',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Tell Us About Your Little One</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Child's Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" placeholder="e.g., Leo" required />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-1">Age Group</label>
                        <select id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition">
                            <option value="6-12m">6-12 Months</option>
                            <option value="1-2y">1-2 Years</option>
                            <option value="2-3y">2-3 Years</option>
                            <option value="3-4y">3-4 Years</option>
                            <option value="4-5y">4-5 Years</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="wakeUpTime" className="block text-sm font-medium text-slate-700 mb-1">Wake-up Time</label>
                        <input type="time" id="wakeUpTime" name="wakeUpTime" value={formData.wakeUpTime} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" required />
                    </div>
                    <div>
                        <label htmlFor="bedTime" className="block text-sm font-medium text-slate-700 mb-1">Bedtime</label>
                        <input type="time" id="bedTime" name="bedTime" value={formData.bedTime} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" required />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="napSchedule" className="block text-sm font-medium text-slate-700 mb-1">Nap Schedule</label>
                    <select id="napSchedule" name="napSchedule" value={formData.napSchedule} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition">
                        <option value="one-long">One long nap</option>
                        <option value="two-short">Two short naps</option>
                        <option value="no-nap">No nap</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-slate-700 mb-1">Interests & Favorite Activities</label>
                    <textarea id="interests" name="interests" value={formData.interests} onChange={handleChange} rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" placeholder="e.g., Puzzles, drawing, dinosaurs" required></textarea>
                </div>

                <div>
                    <label htmlFor="dietaryNeeds" className="block text-sm font-medium text-slate-700 mb-1">Dietary Needs or Preferences</label>
                    <textarea id="dietaryNeeds" name="dietaryNeeds" value={formData.dietaryNeeds} onChange={handleChange} rows={2} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" placeholder="e.g., Allergic to peanuts, loves fruit"></textarea>
                </div>

                <div className="pt-4">
                    <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:transform-none">
                        {isLoading ? 'Dreaming up a schedule...' : 'Generate Routine'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RoutineForm;
