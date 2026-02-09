import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    totalSeats: '',
    category: 'conference',
    description: '',
    imageUrl: '',
    price: '0',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      ...formData,
      totalSeats: parseInt(formData.totalSeats),
      seatsAvailable: parseInt(formData.totalSeats),
      registrations: 0,
      price: parseFloat(formData.price),
    };

    const events = JSON.parse(localStorage.getItem('events') || '[]');
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));

    navigate('/admin-dashboard');
  };

  return (
    <MainLayout>
      <div style={{ maxWidth: '600px', margin: '40px auto', padding: '40px' }}>
        <h1 style={{ fontSize: '32px', color: '#fff', marginBottom: '10px' }}>➕ Create Event</h1>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>Add a new event to your platform</p>

        <form onSubmit={handleSubmit}>
          {/* Event Title */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Event Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., TechFest 2026"
              required
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Date */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Event Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Location */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Seminar Hall"
              required
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Category */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            >
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="networking">Networking</option>
              <option value="seminar">Seminar</option>
              <option value="webinar">Webinar</option>
            </select>
          </div>

          {/* Total Seats */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Total Seats
            </label>
            <input
              type="number"
              name="totalSeats"
              value={formData.totalSeats}
              onChange={handleChange}
              placeholder="e.g., 100"
              required
              min="1"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Price */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Price (Free/Paid)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0 for free event"
              min="0"
              step="0.01"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Image URL */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '8px' }}>
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Event description..."
              rows="4"
              style={{
                width: '100%',
                padding: '12px',
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

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: '14px',
                background: '#ff9500',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Create Event
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin-dashboard')}
              style={{
                flex: 1,
                padding: '14px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
