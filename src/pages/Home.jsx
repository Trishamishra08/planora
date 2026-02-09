import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <div
        style={{
          padding: "25px 40px 35px 40px",
          background: "linear-gradient(135deg, rgba(26,26,26,0.85) 0%, rgba(45,45,45,0.8) 100%), url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          minHeight: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "0",
        }}
      >
        <h1 style={{ 
          fontSize: "42px", 
          marginBottom: "14px",
          fontWeight: "900",
          lineHeight: "1.1",
          maxWidth: "800px",
        }}>
          Unforgettable
          <br />
          <span style={{ color: "#ff9500" }}>Experiences</span>
          <br />
          Await You
        </h1>

        <p style={{ 
          fontSize: "18px", 
          maxWidth: "600px", 
          lineHeight: "28px",
          color: "#ccc",
          marginBottom: "30px",
          fontWeight: "300",
        }}>
          Curate, discover, and manage events that leave lasting impressions. 
          From intimate gatherings to grand celebrations.
        </p>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link
            to="/events"
            style={{
              padding: "14px 28px",
              background: "#ff9500",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "15px",
              transition: "background 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#ff8500")}
            onMouseLeave={(e) => (e.target.style.background = "#ff9500")}
          >
            Explore Events →
          </Link>

          <input
            type="text"
            placeholder="Search events..."
            style={{
              padding: "12px 18px",
              borderRadius: "6px",
              border: "none",
              width: "280px",
              fontSize: "14px",
              background: "rgba(255,255,255,0.95)",
            }}
          />
        </div>
      </div>

      {/* FEATURED EVENTS */}
      <div style={{ marginTop: "60px", padding: "40px", background: "#f5f5f5", borderRadius: "12px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "#000" }}>
          🔥 Featured Events
        </h2>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          Discover trending events and register instantly.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              border: "none",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              color: "#000",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                height: "120px",
                background: "linear-gradient(135deg, #ff9a56 0%, #ff6b9d 100%)",
                position: "relative",
                backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "#ff9500",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                Music
              </div>

              {/* Price Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "#000",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                $89
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "#000" }}>TechFest 2026</h3>
              <p style={{ color: "#ff9500", marginBottom: "8px", fontSize: "14px" }}>📅 15 Feb 2026</p>
              <p style={{ color: "#666", marginBottom: "15px", fontSize: "14px" }}>📍 Seminar Hall</p>
              <Link to="/events/1" style={{ color: "#ff9500", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                View Details →
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              border: "none",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              color: "#000",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                  height: "120px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                position: "relative",
                backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "#667eea",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                Conference
              </div>

              {/* Price Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "#000",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                $299
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "14px" }}>
              <h3 style={{ fontSize: "15px", marginBottom: "8px", color: "#000" }}>Hackathon Night</h3>
              <p style={{ color: "#667eea", marginBottom: "8px", fontSize: "14px" }}>📅 20 Feb 2026</p>
              <p style={{ color: "#666", marginBottom: "15px", fontSize: "14px" }}>📍 Lab Block</p>
              <Link to="/events/2" style={{ color: "#667eea", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                View Details →
              </Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              border: "none",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              color: "#000",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                height: "160px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                position: "relative",
                backgroundImage: "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=300&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "#f5576c",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                Wedding
              </div>

              {/* Price Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "#000",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Free
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "14px" }}>
              <h3 style={{ fontSize: "15px", marginBottom: "8px", color: "#000" }}>GDG Dev Meetup</h3>
              <p style={{ color: "#f5576c", marginBottom: "8px", fontSize: "14px" }}>📅 25 Feb 2026</p>
              <p style={{ color: "#666", marginBottom: "15px", fontSize: "14px" }}>📍 Auditorium</p>
              <Link to="/events/3" style={{ color: "#f5576c", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={{ marginTop: "60px", padding: "60px 40px", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderRadius: "12px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "#fff", textAlign: "center" }}>
          💡 Why Planora?
        </h2>
        <p style={{ color: "#aaa", marginBottom: "50px", textAlign: "center" }}>
          Built for secure, efficient and real-time event handling.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 149, 0, 0.3)",
              borderRadius: "12px",
              padding: "30px",
              color: "#fff",
              transition: "transform 0.3s, background 0.3s, border 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 149, 0, 0.15)";
              e.currentTarget.style.border = "1px solid #ff9500";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 149, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.border = "1px solid rgba(255, 149, 0, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "#ff9500" }}>🔐 Role-Based Access</h3>
            <p style={{ color: "#aaa", lineHeight: "20px" }}>
              Admin can manage events & registrations while users can only browse
              and register securely.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 149, 0, 0.3)",
              borderRadius: "12px",
              padding: "30px",
              color: "#fff",
              transition: "transform 0.3s, background 0.3s, border 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 149, 0, 0.15)";
              e.currentTarget.style.border = "1px solid #ff9500";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 149, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.border = "1px solid rgba(255, 149, 0, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "#ff9500" }}>⚡ Real-Time Registration</h3>
            <p style={{ color: "#aaa", lineHeight: "20px" }}>
              Seats and registrations update instantly, preventing overbooking
              and confusion.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 149, 0, 0.3)",
              borderRadius: "12px",
              padding: "30px",
              color: "#fff",
              transition: "transform 0.3s, background 0.3s, border 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 149, 0, 0.15)";
              e.currentTarget.style.border = "1px solid #ff9500";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 149, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.border = "1px solid rgba(255, 149, 0, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "#ff9500" }}>📊 Admin Dashboard</h3>
            <p style={{ color: "#aaa", lineHeight: "20px" }}>
              Admin gets complete stats like total events, total registrations
              and user details.
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ marginTop: "60px", padding: "0 40px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#fff" }}>
          🚀 How It Works
        </h2>

        <div style={{ lineHeight: "32px", fontSize: "16px", color: "#ccc", maxWidth: "700px" }}>
          <p>
            <span style={{ color: "#ff9500", fontWeight: "700", marginRight: "12px" }}>1</span>
            Admin creates events and publishes them.
          </p>
          <p>
            <span style={{ color: "#ff9500", fontWeight: "700", marginRight: "12px" }}>2</span>
            Users browse events and open event details.
          </p>
          <p>
            <span style={{ color: "#ff9500", fontWeight: "700", marginRight: "12px" }}>3</span>
            Users register and seats update automatically.
          </p>
          <p>
            <span style={{ color: "#ff9500", fontWeight: "700", marginRight: "12px" }}>4</span>
            Admin tracks registrations in real-time.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "80px",
          padding: "40px",
          borderTop: "1px solid #333",
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Planora • Event Management System
      </div>
    </MainLayout>
  );
}
