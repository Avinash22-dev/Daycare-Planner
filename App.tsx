
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutineForm from './components/RoutineForm';
import RoutineDisplay from './components/RoutineDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { generateRoutine } from './services/geminiService';
import type { AppView, ChildInfo, RoutineItem } from './types';

const App: React.FC = () => {
    const [view, setView] = useState<AppView>('form');
    const [routine, setRoutine] = useState<RoutineItem[]>([]);
    const [childInfo, setChildInfo] = useState<ChildInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateRoutine = useCallback(async (info: ChildInfo) => {
        setIsLoading(true);
        setError(null);
        setChildInfo(info);
        try {
            const generatedRoutine = await generateRoutine(info);
            setRoutine(generatedRoutine);
            setView('routine');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
            setView('form'); // Stay on form view if there's an error
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleReset = () => {
        setView('form');
        setRoutine([]);
        setError(null);
        setChildInfo(null);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 px-4">
            {isLoading && <LoadingSpinner />}
            <Header />
            <main className="flex-grow container mx-auto py-8">
                {error && (
                    <div className="max-w-2xl mx-auto bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6" role="alert">
                        <p className="font-bold">Oh no! Something went wrong.</p>
                        <p>{error}</p>
                    </div>
                )}

                {view === 'form' ? (
                    <RoutineForm onSubmit={handleGenerateRoutine} isLoading={isLoading} />
                ) : (
                    childInfo && <RoutineDisplay routine={routine} childName={childInfo.name} onReset={handleReset} />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
