import React from 'react';
import { Search } from 'lucide-react';

export const LoadingSpinner = () => (
    <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-500 border-t-transparent" />
    </div>
);

export const EmptyResults = () => (
    <div className="flex h-96 flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-black/5 p-6">
            <Search size={48} className="text-black/20" />
        </div>
        <h3 className="text-2xl font-bold">No events found</h3>
        <p className="text-black/40">Try adjusting your search or filters to find what you're looking for.</p>
    </div>
);
