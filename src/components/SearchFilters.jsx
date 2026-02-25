import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

const SearchFilters = ({
    searchText,
    setSearchText,
    filter,
    setFilter,
    showRegisteredOnly,
    setShowRegisteredOnly
}) => (
    <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center max-w-2xl">
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={20} />
                <input
                    type="text"
                    placeholder="Search by name or location..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="h-14 w-full rounded-2xl border border-black/5 bg-white pl-12 pr-4 text-lg shadow-sm ring-rose-500/20 transition-all placeholder:text-black/30 focus:border-rose-300 focus:outline-none focus:ring-4"
                />
            </div>

            <div className="flex items-center gap-3 px-2">
                <button
                    onClick={() => setShowRegisteredOnly(!showRegisteredOnly)}
                    className={cn(
                        "relative h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2",
                        showRegisteredOnly ? "bg-rose-500" : "bg-black/10"
                    )}
                >
                    <div className={cn(
                        "absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200",
                        showRegisteredOnly ? "translate-x-5" : "translate-x-0"
                    )} />
                </button>
                <span className="text-sm font-bold text-black/60">Registered only</span>
            </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white p-1.5 shadow-sm">
            {['all', 'upcoming', 'past'].map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={cn(
                        "px-6 py-2.5 rounded-xl text-sm font-semibold transition-all capitalize",
                        filter === f
                            ? "bg-rose-500 text-white shadow-md shadow-rose-200"
                            : "text-black/50 hover:bg-black/5"
                    )}
                >
                    {f}
                </button>
            ))}
        </div>
    </div>
);

export default SearchFilters;
