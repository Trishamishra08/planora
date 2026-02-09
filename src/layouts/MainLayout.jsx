import Navbar from "../components/Navbar";
export default function MainLayout({ children }) {
  return (
    <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", minHeight: "100vh", color: "#fff" }}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
