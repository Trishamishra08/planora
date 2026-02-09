import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user.role !== 'admin') {
      navigate('/login');
    }

    const savedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(savedEvents);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const handleDeleteEvent = (id) => {
    const updated = events.filter(e => e.id !== id);
    setEvents(updated);
    localStorage.setItem('events', JSON.stringify(updated));
  };

  return (
    <MainLayout>
      <div style={{ padding: '40px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            borderBottom: '2px solid #ff9500',
            paddingBottom: '20px',
          }}
        >
          <h1 style={{ fontSize: '32px', color: '#fff' }}>📊 Admin Dashboard</h1>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link
              to="/create-event"
              style={{
                padding: '12px 20px',
                background: '#ff9500',
                color: '#fff',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '700',
              }}
            >
              + Create Event
            </Link>
            <button
              onClick={handleLogout}
              style={{
                padding: '12px 20px',
                background: '#666',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </div>
        </div>
        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 149, 0, 0.15)',
              border: '1px solid rgba(255, 149, 0, 0.3)',
              borderRadius: '10px',
              padding: '20px',
              color: '#fff',
            }}
          >
            <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>Total Events</p>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>{events.length}</h2>
          </div>

          <div
            style={{
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '10px',
              padding: '20px',
              color: '#fff',
            }}
          >
            <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>Total Registrations</p>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>
              {events.reduce((sum, e) => sum + (e.registrations || 0), 0)}
            </h2>
          </div>

          <div
            style={{
              background: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '10px',
              padding: '20px',
              color: '#fff',
            }}
          >
            <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>Available Seats</p>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>
              {events.reduce((sum, e) => sum + (e.seatsAvailable || e.totalSeats), 0)}
            </h2>
          </div>
        </div>

        {/* Events List */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <h2 style={{ padding: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
            📋 Events Management
          </h2>

          {events.length === 0 ? (
            <p style={{ padding: '40px', textAlign: 'center', color: '#aaa' }}>
              No events created yet. <Link to="/create-event" style={{ color: '#ff9500' }}>Create one →</Link>
            </p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Event Name</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Date</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Total Seats</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Registrations</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Available</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '16px', color: '#fff' }}>{event.title}</td>
                      <td style={{ padding: '16px', color: '#aaa' }}>{event.date}</td>
                      <td style={{ padding: '16px', color: '#aaa' }}>{event.totalSeats}</td>
                      <td style={{ padding: '16px', color: '#ff9500', fontWeight: '700' }}>
                        {event.registrations || 0}
                      </td>
                      <td style={{ padding: '16px', color: '#aaa' }}>
                        {event.seatsAvailable || event.totalSeats}
                      </td>
                      <td style={{ padding: '16px' }}>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          style={{
                            background: '#c33',
                            color: '#fff',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
