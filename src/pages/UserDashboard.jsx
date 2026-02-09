import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function UserDashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!user.email) {
      navigate('/login');
      return;
    }

    setUserName(user.email.split('@')[0]);

    // Get user's registrations
    const allRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const userRegs = allRegistrations.filter(reg => reg.userId === user.id);
    setRegistrations(userRegs);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
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
          <div>
            <h1 style={{ fontSize: '32px', color: '#fff', marginBottom: '4px' }}>👤 Welcome, {userName}!</h1>
            <p style={{ color: '#aaa', fontSize: '14px' }}>Manage your event registrations</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link
              to="/events"
              style={{
                padding: '12px 20px',
                background: '#ff9500',
                color: '#000',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '700',
              }}
            >
              Browse Events
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
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>
              {registrations.filter(r => new Date(r.registeredAt) > new Date()).length}
            </h2>
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
            <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>Past Events</p>
            <h2 style={{ fontSize: '32px', fontWeight: '900' }}>
              {registrations.filter(r => new Date(r.registeredAt) <= new Date()).length}
            </h2>
          </div>
        </div>

        {/* Registrations List */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <h2 style={{ padding: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
            📋 Your Registrations
          </h2>

          {registrations.length === 0 ? (
            <div style={{ padding: '60px 40px', textAlign: 'center' }}>
              <p style={{ color: '#aaa', marginBottom: '20px', fontSize: '16px' }}>
                You haven't registered for any events yet.
              </p>
              <Link
                to="/events"
                style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  background: '#ff9500',
                  color: '#000',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '700',
                }}
              >
                Browse Events →
              </Link>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Event Name</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Registered On</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Status</th>
                    <th style={{ padding: '16px', textAlign: 'left', color: '#aaa', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg) => {
                    const status = new Date(reg.registeredAt) > new Date() ? 'Upcoming' : 'Completed';
                    return (
                      <tr key={reg.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <td style={{ padding: '16px', color: '#fff', fontWeight: '600' }}>{reg.eventTitle}</td>
                        <td style={{ padding: '16px', color: '#aaa', fontSize: '14px' }}>
                          {new Date(reg.registeredAt).toLocaleDateString()}
                        </td>
                        <td style={{ padding: '16px' }}>
                          <span
                            style={{
                              background: status === 'Upcoming' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                              color: status === 'Upcoming' ? '#22c55e' : '#6366f1',
                              padding: '4px 12px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}
                          >
                            {status}
                          </span>
                        </td>
                        <td style={{ padding: '16px' }}>
                          <Link
                            to="/events"
                            style={{
                              color: '#ff9500',
                              textDecoration: 'none',
                              fontWeight: '600',
                              fontSize: '12px',
                            }}
                          >
                            View Event →
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
