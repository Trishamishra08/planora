import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useState, useEffect, useRef } from "react";
import "./Home.css";

export default function Home() {
  const [scrollX, setScrollX] = useState(-100);
  const [heroOpacity, setHeroOpacity] = useState(0);
  const [pageLoadTime] = useState(Date.now());
  const animationFrameRef = useRef(null);

  // ✅ CATEGORY animation states
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  // ✅ UPCOMING EVENTS SCROLL REF
  const eventScrollRef = useRef(null);

  // ✅ TESTIMONIALS STATE
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialRef = useRef(null);
  const [showTestimonial, setShowTestimonial] = useState(false);

  // ✅ UPCOMING EVENTS DATA
  const events = [
    {
      id: 1,
      title: "TechFest 2026",
      date: "15 Feb 2026",
      location: "Seminar Hall",
      price: "99 Seats Left",
      tag: "Tech",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=700&fit=crop",
    },
    {
      id: 2,
      title: "Hackathon Night",
      date: "20 Feb 2026",
      location: "Lab Block",
      price: "50 Seats Left",
      tag: "Hackathon",
      img: "https://www.niemanlab.org/images/greaturbanhackcc.jpg",
    },
    {
      id: 3,
      title: "GDG Dev Meetup",
      date: "25 Feb 2026",
      location: "Auditorium",
      price: "Free Entry",
      tag: "Meetup",
      img: "https://miro.medium.com/1*ia0qa3JHM-tw2SV51a_oow.jpeg",
    },
    {
      id: 4,
      title: "Cultural Night",
      date: "28 Feb 2026",
      location: "Open Ground",
      price: "120 Seats Left",
      tag: "Cultural",
      img: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=1200&h=700&fit=crop",
    },
  ];

  // ✅ TESTIMONIALS DATA
  const testimonials = [
    {
      name: "Catherine Williams",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "“Planora made our event management extremely smooth. The UI is clean, registrations are fast and the real-time seat updates are just perfect.”",
    },
    {
      name: "Aarav Mehta",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "“The seat update feature is the best part. Registrations were managed automatically without any confusion.”",
    },
    {
      name: "Sofia Martinez",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "“Planora feels premium. The event browsing experience is fast, simple and very professional.”",
    },
  ];

  // HERO animation (left to right)
  useEffect(() => {
    const animationDuration = 800;

    const updateScroll = () => {
      const elapsedTime = Date.now() - pageLoadTime;

      if (elapsedTime < animationDuration) {
        const animationProgress = elapsedTime / animationDuration;
        const baseOffset = -100 + 100 * animationProgress;
        const scrollOffset = window.scrollY * 0.7;

        setScrollX(baseOffset + scrollOffset);
        setHeroOpacity(animationProgress);

        animationFrameRef.current = requestAnimationFrame(updateScroll);
      } else {
        setScrollX(window.scrollY * 0.7);
        setHeroOpacity(1);
      }
    };

    const handleScroll = () => {
      const elapsedTime = Date.now() - pageLoadTime;
      if (elapsedTime >= animationDuration) {
        setScrollX(window.scrollY * 0.7);
        setHeroOpacity(1);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageLoadTime]);

  // ✅ CATEGORY CARDS animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ UPCOMING EVENTS AUTO SCROLL (LEFT → RIGHT) AND STOP
  useEffect(() => {
    const scrollBox = eventScrollRef.current;
    if (!scrollBox) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setTimeout(() => {
            scrollBox.scrollTo({
              left: scrollBox.scrollWidth,
              behavior: "smooth",
            });
          }, 500);

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(scrollBox);

    return () => observer.disconnect();
  }, []);

  // ✅ TESTIMONIAL SCROLL ANIMATION (down → up)
  useEffect(() => {
    const el = testimonialRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowTestimonial(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ✅ CATEGORY DATA
  const categories = [
    {
      title: "Music Events",
      desc: "Live shows, DJs & concerts",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=60",
      dir: "from-left",
    },
    {
      title: "Tech Fest",
      desc: "Hackathons, meetups & talks",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60",
      dir: "from-left",
    },
    {
      title: "Workshops",
      desc: "Learn skills with experts",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60",
      dir: "from-right",
    },
    {
      title: "Cultural",
      desc: "Dance, drama & celebrations",
      img: "https://images.unsplash.com/photo-1505428160878-8e349f4d301c?auto=format&fit=crop&w=1200&q=60",
      dir: "from-right",
    },
  ];

  return (
    <MainLayout>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-overlay">
          <div
            className="home-hero-content"
            style={{
              transform: `translateX(${scrollX}px)`,
              opacity: heroOpacity,
              transition: "transform 0.15s ease-out",
            }}
          >
            <div className="hero-subtitle">SMART • SECURE • REAL-TIME</div>

            <h1>
              Plan Your Events <br />
              <span>Like a Pro.</span>
            </h1>

            <p className="hero-tagline">
              Planora is a modern Event Management System where admins create
              events, users register instantly, and seats update in real-time —
              making every event smooth, fast, and perfectly organized.
            </p>

            <div className="home-hero-actions">
              <Link to="/events" className="btn-primary">
                Explore Events
              </Link>

              <Link to="/events" className="btn-secondary">
                Register Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="home-section">
        <div className="container">
          <div className="section-head center">
            <h2 className="dual-heading">
              EXPLORE EVENT <span>CATEGORIES</span>
            </h2>
          </div>

          <div className="category-grid">
            {categories.map((c, i) => (
              <div
                className={`category-card image-card ${c.dir} ${
                  visibleCards.has(`cat-card-${i}`) ? "show" : ""
                }`}
                key={i}
                id={`cat-card-${i}`}
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ backgroundImage: `url(${c.img})` }}
              >
                <div className="category-overlay">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="home-section alt-bg">
        <div className="container">
          <div className="section-head center">
            <h2 className="big-heading">UPCOMING EVENTS</h2>
          </div>

          <div className="event-scroll-wrapper">
            {/* LEFT ARROW */}
            <div
              className="scroll-arrow-left"
              onClick={() => {
                if (eventScrollRef.current) {
                  eventScrollRef.current.scrollBy({
                    left: -420,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span>‹</span>
            </div>

            {/* SCROLL */}
            <div className="event-scroll" ref={eventScrollRef}>
              {events.map((e) => (
                <div className="event-card" key={e.id}>
                  <div
                    className="event-img"
                    style={{ backgroundImage: `url(${e.img})` }}
                  >
                    <span className="event-tag">{e.tag}</span>
                    <span className="event-price">{e.price}</span>

                    <div className="event-hover-card">
                      <h3>{e.title}</h3>
                      <p className="event-meta">📅 {e.date}</p>
                      <p className="event-meta">📍 {e.location}</p>

                      <div className="event-actions">
                        <Link to={`/events/${e.id}`} className="btn-view">
                          View Details
                        </Link>

                        <Link to={`/register/${e.id}`} className="btn-register">
                          Register →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <div
              className="scroll-arrow-right"
              onClick={() => {
                if (eventScrollRef.current) {
                  eventScrollRef.current.scrollBy({
                    left: 420,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span>›</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PLANORA */}
  {/* WHY CHOOSE PLANORA */}
<section className="home-section why-planora">
  <div className="container">
    <div className="section-head center">
      <h2 className="dual-heading">
        WHY CHOOSE <span>PLANORA</span>
      </h2>
    </div>

    <div className="why-grid">
      {[
        {
          title: "Fast Registrations",
          desc: "One-click registration with real-time seat updates.",
        },
        {
          title: "Secure System",
          desc: "Role-based access for Admin & Users with clean flow.",
        },
        {
          title: "Smart Event Tracking",
          desc: "Users can explore events and admins monitor registrations.",
        },
        {
          title: "Real-Time Seats",
          desc: "Seat availability updates instantly after registration.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`why-card ${visibleCards.has(`why-card-${i}`) ? "show" : ""}`}
          id={`why-card-${i}`}
          ref={(el) => (cardRefs.current[10 + i] = el)}
          style={{ transitionDelay: `${i * 0.02}s` }}
        >
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* TESTIMONIALS */}
      <section
        ref={testimonialRef}
        className={`home-section testimonials ${showTestimonial ? "show" : ""}`}
      >
        <div className="container">
          <div className="section-head center testimonial-head">
            <h2 className="dual-heading">
              WHAT OUR <span>CLIENTS SAY</span>
            </h2>
          </div>

          <div className="testimonial-box">
            <p key={activeTestimonial} className="testimonial-text">
              {testimonials[activeTestimonial].text}
            </p>

            <div className="testimonial-user">
              <img
                src={testimonials[activeTestimonial].img}
                alt={testimonials[activeTestimonial].name}
              />
              <h4>{testimonials[activeTestimonial].name}</h4>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${activeTestimonial === i ? "active" : ""}`}
                  onClick={() => setActiveTestimonial(i)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR CTA */}
      <section className="home-cta search-cta">
        <div className="container cta-box">
          <h2>Search Your Next Event</h2>
          <p>Find events instantly by name, category or location.</p>

          <div className="search-bar">
            <input type="text" placeholder="Search events..." />
            <Link to="/events" className="search-btn">
              Search →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        © {new Date().getFullYear()} Planora • Event Management System
      </footer>
    </MainLayout>
  );
}
