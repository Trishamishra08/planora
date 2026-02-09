import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    const user = {
      email,
      id: Date.now(),
      role: email.includes('admin') ? 'admin' : 'user',
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    
    if (user.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/events');
    }
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
            Sign In
          </h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Welcome back to Planora
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

          <form onSubmit={handleLogin}>
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
              <small style={{ color: '#999', marginTop: '4px', display: 'block' }}>
                💡 Try: admin@example.com (for admin) or user@example.com (for user)
              </small>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#000' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
              <small style={{ color: '#999', marginTop: '4px', display: 'block' }}>
                Any password works for demo
              </small>
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
              Sign In
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <p style={{ color: '#666', marginBottom: '12px' }}>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#ff9500', textDecoration: 'none', fontWeight: '600' }}>
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
