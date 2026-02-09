import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "14px 24px",
        borderBottom: "2px solid #ff9500",
        background: "#1a1a1a",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO / BRAND */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "900",
            color: "#fff",
            letterSpacing: "0.5px",
          }}
        >
          Planora ✨
        </Link>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#ccc",
              fontWeight: 600,
              fontSize: "15px",
              transition: "all 0.3s ease",
              paddingBottom: "4px",
              borderBottom: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ff9500";
              e.target.style.borderBottomColor = "#ff9500";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#ccc";
              e.target.style.borderBottomColor = "transparent";
            }}
          >
            Home
          </Link>

          <Link
            to="/events"
            style={{
              textDecoration: "none",
              color: "#ccc",
              fontWeight: 600,
              fontSize: "15px",
              transition: "all 0.3s ease",
              paddingBottom: "4px",
              borderBottom: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ff9500";
              e.target.style.borderBottomColor = "#ff9500";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#ccc";
              e.target.style.borderBottomColor = "transparent";
            }}
          >
            Events
          </Link>

          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#ccc",
              fontWeight: 600,
              fontSize: "15px",
              transition: "all 0.3s ease",
              paddingBottom: "4px",
              borderBottom: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ff9500";
              e.target.style.borderBottomColor = "#ff9500";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#ccc";
              e.target.style.borderBottomColor = "transparent";
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              textDecoration: "none",
              background: "#ff6b35",
              color: "white",
              padding: "6px 12px",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "13px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#ff5522")}
            onMouseLeave={(e) => (e.target.style.background = "#ff6b35")}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
