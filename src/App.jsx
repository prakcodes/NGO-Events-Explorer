import React, { useState, useMemo } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import EventCard from './components/EventCard';
import { LoadingSpinner, EmptyResults } from './components/States';

import { useEvents } from './hooks/Data';

const App = () => {
  const [registeredIds, setRegisteredIds] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('all');
  const [showRegisteredOnly, setShowRegisteredOnly] = useState(false);

  const { events, loading } = useEvents();

  const handleRegister = (id) => {
    const event = events.find(e => e.id === id);
    const isFutureEvent = event && event.date > new Date();

    if (isFutureEvent && !registeredIds.includes(id)) {
      setRegisteredIds(prev => [...prev, id]);
    }
  };

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const query = searchText.toLowerCase();
      const matchesSearch = event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query);

      const isUpcoming = event.date > new Date();
      const matchesFilter = filter === 'all' ||
        (filter === 'upcoming' && isUpcoming) ||
        (filter === 'past' && !isUpcoming);

      const matchesToggle = !showRegisteredOnly || registeredIds.includes(event.id);

      return matchesSearch && matchesFilter && matchesToggle;
    });
  }, [events, searchText, filter, showRegisteredOnly, registeredIds]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <Navbar registeredCount={registeredIds.length} />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <Hero />

        <SearchFilters
          searchText={searchText}
          setSearchText={setSearchText}
          filter={filter}
          setFilter={setFilter}
          showRegisteredOnly={showRegisteredOnly}
          setShowRegisteredOnly={setShowRegisteredOnly}
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {filteredEvents.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isRegistered={registeredIds.includes(event.id)}
                    onRegister={handleRegister}
                  />
                ))}
              </div>
            ) : (
              <EmptyResults />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
