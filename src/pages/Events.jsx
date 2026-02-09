import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(savedEvents);
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div style={{ padding: '40px' }}>
        {/* Header */}
        <h1 style={{ fontSize: '32px', color: '#fff', marginBottom: '10px' }}>🎉 Browse Events</h1>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>Discover and register for amazing events</p>

        {/* Search & Filter */}
        <div style={{ marginBottom: '40px' }}>
          {/* Search Bar */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="🔍 Search events or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 149, 0, 0.3)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setCategoryFilter('all')}
              style={{
                padding: '8px 16px',
                background: categoryFilter === 'all' ? '#ff9500' : 'rgba(255, 255, 255, 0.1)',
                color: categoryFilter === 'all' ? '#000' : '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '12px',
              }}
            >
              All Events
            </button>
            {['conference', 'workshop', 'networking', 'seminar', 'webinar'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                style={{
                  padding: '8px 16px',
                  background: categoryFilter === cat ? '#ff9500' : 'rgba(255, 255, 255, 0.1)',
                  color: categoryFilter === cat ? '#000' : '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '12px',
                  textTransform: 'capitalize',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#aaa' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>No events found</p>
            <p style={{ fontSize: '14px' }}>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredEvents.map(event => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 149, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: '100%',
                      height: '160px',
                      background: `linear-gradient(135deg, #1e293b, #0f172a), url('${event.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      padding: '12px',
                    }}
                  >
                    <span
                      style={{
                        background: '#ff9500',
                        color: '#000',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                      }}
                    >
                      {event.category}
                    </span>
                    <span
                      style={{
                        background: '#000',
                        color: '#ff9500',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '700',
                      }}
                    >
                      {event.seatsAvailable}/{event.totalSeats} seats
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '16px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#000', marginBottom: '8px', lineHeight: '1.4' }}>
                      {event.title}
                    </h3>

                    <div style={{ marginBottom: '12px' }}>
                      <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                        📅 {event.date}
                      </p>
                      <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                        📍 {event.location}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid #eee',
                        paddingTop: '12px',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#ff9500' }}>
                        {event.price > 0 ? `$${event.price}` : 'FREE'}
                      </span>
                      <button
                        style={{
                          background: '#ff9500',
                          color: '#000',
                          border: 'none',
                          padding: '6px 14px',
                          borderRadius: '4px',
                          fontWeight: '700',
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
