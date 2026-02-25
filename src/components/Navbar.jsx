import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

const Navbar = ({ registeredCount }) => (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500 text-white shadow-lg shadow-rose-200">
                    <Users size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight">Kindred<span className="text-rose-500">Events</span></span>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-sm font-medium text-rose-600 transition-all hover:bg-rose-100">
                    <CheckCircle size={16} />
                    <span>{registeredCount} Registered</span>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;
