import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'Villas',   path: '/home' },
  { label: 'Listings', path: '/listings' },
  { label: 'Sign Up',  path: '/signup' },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === '/';
  // Light style: solid background + dark text on app pages; on landing only after scroll
  const useLightStyle = !isLanding || scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
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
          height: '68px',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
          background: useLightStyle ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: useLightStyle ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: useLightStyle ? 'blur(12px)' : 'none',
          boxShadow: useLightStyle ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
        }}
      >
        {/* Logo */}
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
          <span
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '-0.01em',
              color: useLightStyle ? '#1a1a1a' : '#ffffff',
              transition: 'color 0.3s',
            }}
          >
            VillaBnB
          </span>
        </Link>

        {/* Desktop nav links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="villabnb-desktop-nav"
        >
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: useLightStyle
                  ? isActive(path) ? '#FF385C' : '#444'
                  : isActive(path) ? '#ffffff' : 'rgba(255,255,255,0.75)',
                transition: 'color 0.2s',
                position: 'relative',
                paddingBottom: '2px',
              }}
              onMouseEnter={(e) => {
                if (!isActive(path)) {
                  e.currentTarget.style.color = useLightStyle ? '#1a1a1a' : '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(path)) {
                  e.currentTarget.style.color = useLightStyle ? '#444' : 'rgba(255,255,255,0.75)';
                }
              }}
            >
              {label}
              {isActive(path) && (
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

        {/* Sign In button */}
        <Link
          to="/signup"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
            color: useLightStyle ? '#1a1a1a' : '#ffffff',
            border: useLightStyle ? '1.5px solid rgba(0,0,0,0.2)' : '1.5px solid rgba(255,255,255,0.6)',
            borderRadius: '999px',
            padding: '8px 22px',
            transition: 'all 0.2s ease',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = useLightStyle ? '#1a1a1a' : '#ffffff';
            e.currentTarget.style.color = useLightStyle ? '#ffffff' : '#1a1a1a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = useLightStyle ? '#1a1a1a' : '#ffffff';
          }}
          className="villabnb-signin-btn"
        >
          Sign In
        </Link>

        {/* Mobile hamburger */}
        <button
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
                background: useLightStyle ? '#1a1a1a' : '#ffffff',
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
            top: 68,
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
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              style={{
                fontSize: '1rem',
                fontWeight: isActive(path) ? 600 : 400,
                color: isActive(path) ? '#FF385C' : '#333',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                transition: 'color 0.2s',
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
              transition: 'background 0.2s',
            }}
          >
            Sign In
          </Link>
        </div>
      )}

      {/* Responsive styles injected once */}
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