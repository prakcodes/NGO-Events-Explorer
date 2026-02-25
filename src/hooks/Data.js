import { useState, useEffect } from 'react';
import { CATEGORIES, LOCATIONS, IMAGE_URLS } from '../constants';

export const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();

                const mappedEvents = data.slice(0, 12).map((post, index) => {
                    const date = new Date();
                    // Mix of upcoming and past dates
                    if (index % 4 === 0) {
                        date.setFullYear(date.getFullYear() - 1);
                    } else {
                        date.setDate(date.getDate() + (index * 5));
                    }

                    return {
                        id: post.id,
                        title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
                        description: post.body,
                        date,
                        location: LOCATIONS[index % LOCATIONS.length],
                        category: CATEGORIES[index % CATEGORIES.length],
                        image: IMAGE_URLS[index % IMAGE_URLS.length]
                    };
                });

                setEvents(mappedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return { events, loading };
};
