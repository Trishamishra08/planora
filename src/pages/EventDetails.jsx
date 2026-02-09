import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const found = events.find(e => e.id === parseInt(id));
    setEvent(found);
  }, [id]);

  const handleRegister = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
      navigate('/login');
      return;
    }

    setIsRegistering(true);

    // Update event seats
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const eventIndex = events.findIndex(e => e.id === parseInt(id));
    
    if (eventIndex !== -1) {
      events[eventIndex].registrations = (events[eventIndex].registrations || 0) + 1;
      events[eventIndex].seatsAvailable = events[eventIndex].seatsAvailable - 1;
      localStorage.setItem('events', JSON.stringify(events));

      // Save registration
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      registrations.push({
        id: Date.now(),
        userId: currentUser.id,
        userEmail: currentUser.email,
        eventId: parseInt(id),
        eventTitle: event.title,
        registeredAt: new Date().toISOString(),
      });
      localStorage.setItem('registrations', JSON.stringify(registrations));

      setEvent(prev => ({
        ...prev,
        registrations: prev.registrations + 1,
        seatsAvailable: prev.seatsAvailable - 1,
      }));

      setTimeout(() => {
        setIsRegistering(false);
        navigate('/user-dashboard');
      }, 500);
    }
  };

  if (!event) {
    return (
      <MainLayout>
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#aaa' }}>
          <p>Event not found</p>
          <Link to="/events" style={{ color: '#ff9500' }}>Back to Events →</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
        {/* Back Button */}
        <Link
          to="/events"
          style={{
            color: '#ff9500',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '20px',
            fontWeight: '600',
          }}
        >
          ← Back to Events
        </Link>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {/* Hero Image */}
          <div
            style={{
              width: '100%',
              height: '300px',
              background: `linear-gradient(135deg, #1e293b, #0f172a), url('${event.imageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          />

          {/* Content */}
          <div style={{ padding: '40px' }}>
            {/* Title & Badges */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div>
                <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>
                  {event.title}
                </h1>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      background: 'rgba(255, 149, 0, 0.2)',
                      color: '#ff9500',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                    }}
                  >
                    {event.category}
                  </span>
                  <span
                    style={{
                      background: event.seatsAvailable > 0 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(220, 38, 38, 0.2)',
                      color: event.seatsAvailable > 0 ? '#22c55e' : '#dc2626',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}
                  >
                    {event.seatsAvailable > 0 ? `${event.seatsAvailable} seats available` : 'Event Full'}
                  </span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '8px' }}>Price</p>
                <p style={{ fontSize: '28px', fontWeight: '700', color: '#ff9500' }}>
                  {event.price > 0 ? `$${event.price}` : 'FREE'}
                </p>
              </div>
            </div>

            {/* Event Details Grid */}
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '8px' }}>📅 Date</p>
                <p style={{ color: '#fff', fontWeight: '600' }}>{event.date}</p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '8px' }}>📍 Location</p>
                <p style={{ color: '#fff', fontWeight: '600' }}>{event.location}</p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '8px' }}>👥 Registrations</p>
                <p style={{ color: '#ff9500', fontWeight: '600', fontSize: '18px' }}>
                  {event.registrations || 0} / {event.totalSeats}
                </p>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '18px', color: '#fff', fontWeight: '700', marginBottom: '12px' }}>
                About This Event
              </h2>
              <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                {event.description || 'No description provided for this event.'}
              </p>
            </div>

            {/* Register Button */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleRegister}
                disabled={event.seatsAvailable <= 0 || isRegistering}
                style={{
                  flex: 1,
                  padding: '16px',
                  background: event.seatsAvailable <= 0 ? '#666' : '#ff9500',
                  color: event.seatsAvailable <= 0 ? '#aaa' : '#000',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: event.seatsAvailable <= 0 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (event.seatsAvailable > 0 && !isRegistering) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(255, 149, 0, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {isRegistering ? 'Registering...' : event.seatsAvailable <= 0 ? 'Event Full' : 'Register Now'}
              </button>

              <button
                onClick={() => navigate('/events')}
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
