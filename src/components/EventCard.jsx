import React from 'react';
import { Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const EventCard = ({ event, isRegistered, onRegister }) => {
    const isPast = event.date < new Date();

    return (
        <div className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                <img
                    src={event.image}
                    alt={event.title}
                    onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${event.id}/800/600`;
                        e.target.onerror = null;
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-rose-500 backdrop-blur-sm">
                        {event.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="mb-4 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-500 uppercase tracking-tight">
                        <Calendar size={14} />
                        {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="line-clamp-2 text-xl font-bold leading-tight group-hover:text-rose-500 transition-colors">
                        {event.title}
                    </h3>
                </div>

                <div className="mb-6 flex items-center gap-1.5 text-sm text-black/50">
                    <MapPin size={16} />
                    {event.location}
                </div>

                <button
                    onClick={() => onRegister(event.id)}
                    disabled={isRegistered || isPast}
                    className={cn(
                        "group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl py-4 text-sm font-bold transition-all",
                        isRegistered
                            ? "bg-emerald-50 text-emerald-600 cursor-default"
                            : isPast
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-black text-white hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-200 active:scale-95"
                    )}
                >
                    {isRegistered ? (
                        <>
                            <CheckCircle size={18} />
                            Registered
                        </>
                    ) : isPast ? (
                        <>Registration Closed</>
                    ) : (
                        <>
                            Register Now
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default EventCard;
