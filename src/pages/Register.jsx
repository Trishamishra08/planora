import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError('Please fill all fields');
      return;
    }

    const user = {
      name,
      email,
      id: Date.now(),
      role: 'user',
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/events');
  };

  return (
    <MainLayout>
      <div style={{ maxWidth: '500px', margin: '80px auto', padding: '40px' }}>
        <div
          style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          <h1 style={{ fontSize: '28px', marginBottom: '10px', color: '#000' }}>
            Create Account
          </h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Join Planora and discover amazing events
          </p>

          {error && (
            <div
              style={{
                background: '#fee',
                color: '#c33',
                padding: '12px',
                borderRadius: '6px',
                marginBottom: '20px',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#000' }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#000' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#000' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#ff9500',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#ff8500')}
              onMouseLeave={(e) => (e.target.style.background = '#ff9500')}
            >
              Create Account
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <p style={{ color: '#666', marginBottom: '12px' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#ff9500', textDecoration: 'none', fontWeight: '600' }}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
