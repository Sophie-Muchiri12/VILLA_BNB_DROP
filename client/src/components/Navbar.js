import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Villas', path: '/home' },
  { label: 'Listings', path: '/listings' },
  { label: 'Sign Up', path: '/signup' },
];

const LIGHT_NAV_PATHS = new Set(['/home', '/listings', '/signup']);

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const path = location.pathname.replace(/\/$/, '') || '/';
  const useLightStyle = LIGHT_NAV_PATHS.has(path) || (path === '/' && scrolled);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [path]);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const isActive = (routePath) => {
    const normalized = routePath.replace(/\/$/, '') || '/';
    return path === normalized;
  };

  const navClass = useLightStyle ? 'villabnb-nav--light' : 'villabnb-nav--dark';

  return (
    <>
      <nav
        key={path}
        className={navClass}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          height: 'var(--navbar-height)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: '#FF385C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
              <path
                d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 8c0 1.93-1.57 3.5-3.5 3.5S6.5 11.93 6.5 10 8.07 6.5 10 6.5s3.5 1.57 3.5 3.5z"
                fill="white"
              />
            </svg>
          </div>
          <span className="villabnb-nav-logo-text" style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
            VillaBnB
          </span>
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="villabnb-desktop-nav"
        >
          {NAV_LINKS.map(({ label, path: linkPath }) => (
            <Link
              key={linkPath}
              to={linkPath}
              className={`villabnb-nav-link${isActive(linkPath) ? ' villabnb-nav-link--active' : ''}`}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: '2px',
              }}
            >
              {label}
              {isActive(linkPath) && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: '#FF385C',
                    borderRadius: 2,
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/signup"
          className="villabnb-signin-btn"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: '999px',
            padding: '8px 22px',
            border: '1.5px solid',
            background: 'transparent',
            transition: 'all 0.2s ease',
          }}
        >
          Sign In
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            flexDirection: 'column',
            gap: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="villabnb-hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                borderRadius: 2,
                transition: 'all 0.3s',
                transformOrigin: 'center',
                transform:
                  menuOpen
                    ? i === 0
                      ? 'translateY(7px) rotate(45deg)'
                      : i === 2
                      ? 'translateY(-7px) rotate(-45deg)'
                      : 'scaleX(0)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            zIndex: 1199,
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            padding: '16px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
          className="villabnb-mobile-menu"
        >
          {NAV_LINKS.map(({ label, path: linkPath }) => (
            <Link
              key={linkPath}
              to={linkPath}
              style={{
                fontSize: '1rem',
                fontWeight: isActive(linkPath) ? 600 : 400,
                color: isActive(linkPath) ? '#FF385C' : '#333',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/signup"
            style={{
              marginTop: 12,
              display: 'inline-flex',
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#ffffff',
              textDecoration: 'none',
              background: '#FF385C',
              borderRadius: '999px',
              padding: '10px 24px',
            }}
          >
            Sign In
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .villabnb-desktop-nav,
          .villabnb-signin-btn {
            display: none !important;
          }
          .villabnb-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;
