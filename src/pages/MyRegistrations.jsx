import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function MyRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!user.email) {
      navigate('/login');
      return;
    }

    setUserName(user.email);

    // Get user's registrations
    const allRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const userRegs = allRegistrations.filter(reg => reg.userId === user.id);
    setRegistrations(userRegs);
  }, [navigate]);

  const upcomingRegs = registrations.filter(r => new Date(r.registeredAt) > new Date());
  const pastRegs = registrations.filter(r => new Date(r.registeredAt) <= new Date());

  return (
    <MainLayout>
      <div style={{ padding: '40px' }}>
        {/* Header */}
        <h1 style={{ fontSize: '32px', color: '#fff', marginBottom: '10px' }}>📝 My Registrations</h1>
        <p style={{ color: '#aaa', marginBottom: '10px' }}>Email: {userName}</p>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>Track all your event registrations</p>

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
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '10px',
              padding: '20px',
              color: '#fff',
            }}
          >
            <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>Total Registrations</p>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>{registrations.length}</h2>
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
            <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>Upcoming Events</p>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>{upcomingRegs.length}</h2>
          </div>

          <div
            style={{
              background: 'rgba(255, 149, 0, 0.15)',
              border: '1px solid rgba(255, 149, 0, 0.3)',
              borderRadius: '10px',
              padding: '20px',
              color: '#fff',
            }}
          >
            <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>Attended Events</p>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>{pastRegs.length}</h2>
          </div>
        </div>

        {/* Upcoming Events */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ padding: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '18px' }}>
            🎯 Upcoming Events ({upcomingRegs.length})
          </h2>

          {upcomingRegs.length === 0 ? (
            <p style={{ padding: '40px', textAlign: 'center', color: '#aaa' }}>No upcoming events</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600', fontSize: '12px' }}>Event</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600', fontSize: '12px' }}>Registered</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600', fontSize: '12px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingRegs.map((reg) => (
                    <tr key={reg.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '16px', color: '#fff', fontWeight: '600' }}>{reg.eventTitle}</td>
                      <td style={{ padding: '16px', color: '#aaa', fontSize: '14px' }}>
                        {new Date(reg.registeredAt).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span
                          style={{
                            background: 'rgba(34, 197, 94, 0.2)',
                            color: '#22c55e',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '600',
                          }}
                        >
                          ✓ Registered
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <h2 style={{ padding: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '18px' }}>
            ✅ Attended Events ({pastRegs.length})
          </h2>

          {pastRegs.length === 0 ? (
            <p style={{ padding: '40px', textAlign: 'center', color: '#aaa' }}>No past events</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600', fontSize: '12px' }}>Event</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600', fontSize: '12px' }}>Attended</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600', fontSize: '12px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pastRegs.map((reg) => (
                    <tr key={reg.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '16px', color: '#fff', fontWeight: '600' }}>{reg.eventTitle}</td>
                      <td style={{ padding: '16px', color: '#aaa', fontSize: '14px' }}>
                        {new Date(reg.registeredAt).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span
                          style={{
                            background: 'rgba(99, 102, 241, 0.2)',
                            color: '#6366f1',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '600',
                          }}
                        >
                          ✓ Attended
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link to="/events" style={{ color: '#ff9500', textDecoration: 'none', fontWeight: '600' }}>
            ← Browse More Events
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
