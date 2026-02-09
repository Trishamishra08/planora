import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user.role !== 'admin') {
      navigate('/login');
    }

    const savedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(savedEvents);
  }, [navigate]);

  const handleEditStart = (event) => {
    setEditingId(event.id);
    setEditData({
      title: event.title,
      date: event.date,
      location: event.location,
      totalSeats: event.totalSeats,
      price: event.price,
      description: event.description,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = (eventId) => {
    const updated = events.map(e => 
      e.id === eventId 
        ? { ...e, ...editData, totalSeats: parseInt(editData.totalSeats), price: parseFloat(editData.price) }
        : e
    );
    setEvents(updated);
    localStorage.setItem('events', JSON.stringify(updated));
    setEditingId(null);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const updated = events.filter(e => e.id !== id);
      setEvents(updated);
      localStorage.setItem('events', JSON.stringify(updated));
    }
  };

  return (
    <MainLayout>
      <div style={{ padding: '40px' }}>
        {/* Header */}
        <h1 style={{ fontSize: '32px', color: '#fff', marginBottom: '10px' }}>🔧 Manage Events</h1>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>Edit or remove your events</p>

        {events.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#aaa' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>No events to manage</p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gap: '20px',
            }}
          >
            {events.map(event => (
              <div
                key={event.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '24px',
                }}
              >
                {editingId === event.id ? (
                  // Edit Mode
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '20px' }}>Edit Event</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ display: 'block', color: '#aaa', fontSize: '12px', marginBottom: '6px' }}>Title</label>
                        <input
                          type="text"
                          name="title"
                          value={editData.title}
                          onChange={handleEditChange}
                          style={{
                            width: '100%',
                            padding: '10px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#aaa', fontSize: '12px', marginBottom: '6px' }}>Date</label>
                        <input
                          type="date"
                          name="date"
                          value={editData.date}
                          onChange={handleEditChange}
                          style={{
                            width: '100%',
                            padding: '10px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#aaa', fontSize: '12px', marginBottom: '6px' }}>Location</label>
                        <input
                          type="text"
                          name="location"
                          value={editData.location}
                          onChange={handleEditChange}
                          style={{
                            width: '100%',
                            padding: '10px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#aaa', fontSize: '12px', marginBottom: '6px' }}>Total Seats</label>
                        <input
                          type="number"
                          name="totalSeats"
                          value={editData.totalSeats}
                          onChange={handleEditChange}
                          style={{
                            width: '100%',
                            padding: '10px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#aaa', fontSize: '12px', marginBottom: '6px' }}>Price</label>
                        <input
                          type="number"
                          name="price"
                          value={editData.price}
                          onChange={handleEditChange}
                          step="0.01"
                          style={{
                            width: '100%',
                            padding: '10px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', color: '#aaa', fontSize: '12px', marginBottom: '6px' }}>Description</label>
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                        rows="3"
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        onClick={() => handleSaveEdit(event.id)}
                        style={{
                          padding: '10px 20px',
                          background: '#22c55e',
                          color: '#000',
                          border: 'none',
                          borderRadius: '6px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '14px',
                        }}
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        style={{
                          padding: '10px 20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#fff',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '14px',
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                      <div>
                        <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                          {event.title}
                        </h3>
                        <p style={{ color: '#aaa', fontSize: '14px' }}>
                          📅 {event.date} | 📍 {event.location}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: '#ff9500', fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                          {event.registrations || 0}/{event.totalSeats} Registered
                        </p>
                        <p style={{ color: '#aaa', fontSize: '12px' }}>
                          Available: {event.seatsAvailable || event.totalSeats}
                        </p>
                      </div>
                    </div>

                    <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '12px' }}>
                      💰 {event.price > 0 ? `$${event.price}` : 'FREE'}
                    </p>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        onClick={() => handleEditStart(event)}
                        style={{
                          padding: '8px 16px',
                          background: '#3b82f6',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '12px',
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        style={{
                          padding: '8px 16px',
                          background: '#c33',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '12px',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
