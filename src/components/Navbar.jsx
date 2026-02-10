import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBaseStyle = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: "13px", // ✅ smaller
    letterSpacing: "1px",
    fontStyle: "italic",
    padding: "8px 14px", // ✅ smaller
    borderRadius: "10px",
    border: "1px solid transparent",
    background: "transparent",
    transition: "all 0.25s ease",
  };

  return (
    <nav
      style={{
        height: "68px", // ✅ smaller navbar height
        padding: "0 26px",
        background: isScrolled ? "rgba(0,0,0,0.95)" : "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.35s ease",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div
        style={{
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          fontFamily: "'Poppins', 'Segoe UI', sans-serif",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "22px", // ✅ smaller
            fontWeight: "900",
            color: "#fff",
            letterSpacing: "-0.5px",
            fontStyle: "italic",
          }}
        >
          Planora
        </Link>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginRight: "90px", // ✅ links thoda left shift
          }}
        >
          <Link
            to="/"
            style={linkBaseStyle}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,0.10)";
              e.target.style.border = "1px solid rgba(255,255,255,0.22)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.border = "1px solid transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            HOME
          </Link>

          <Link
            to="/events"
            style={linkBaseStyle}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,0.10)";
              e.target.style.border = "1px solid rgba(255,255,255,0.22)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.border = "1px solid transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            EVENTS
          </Link>

          <Link
            to="/login"
            style={linkBaseStyle}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,0.10)";
              e.target.style.border = "1px solid rgba(255,255,255,0.22)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.border = "1px solid transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            LOGIN
          </Link>

          {/* REGISTER */}
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, #00d4ff, #0099cc)",
              color: "#fff",
              padding: "9px 18px", // ✅ smaller
              borderRadius: "12px",
              fontWeight: 800,
              fontSize: "13px",
              letterSpacing: "1px",
              fontStyle: "italic",
              transition: "all 0.25s ease",
              boxShadow: "0 7px 18px rgba(0, 212, 255, 0.30)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow =
                "0 10px 24px rgba(0, 212, 255, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow =
                "0 7px 18px rgba(0, 212, 255, 0.30)";
            }}
          >
            REGISTER
          </Link>
        </div>
      </div>
    </nav>
  );
}
