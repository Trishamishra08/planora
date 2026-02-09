# Planora - Visual Flow Guide 🎯

## Complete User Journey Maps

### 📊 Admin Journey

```
┌─────────────────────────────────────────────────────────┐
│ HOME PAGE (/)                                           │
│ - Hero section with featured events                    │
│ - "Why Planora?" section                               │
│ - How It Works guide                                   │
│ [Click Register or Login in Navbar]                    │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ LOGIN PAGE (/login)                                     │
│ - Email: admin@example.com (contains "admin")          │
│ - Password: (any)                                       │
│ - [Submit]                                              │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ ADMIN DASHBOARD (/admin-dashboard)                      │
│                                                         │
│ [+ Create Event]                [Logout]               │
│                                                         │
│ ┌─────────────┬──────────┬──────────────┐              │
│ │ Total Events│Registrations│Available Seats│             │
│ │      1      │     0    │     100     │              │
│ └─────────────┴──────────┴──────────────┘              │
│                                                         │
│ Events Table:                                           │
│ ┌──────────────┬──────┬──────┬─────────┬────────┐      │
│ │Name         │Date  │Total │Reg      │Action  │      │
│ ├──────────────┼──────┼──────┼─────────┼────────┤      │
│ │TechFest2026 │2/15  │100   │0        │[Delete]│      │
│ └──────────────┴──────┴──────┴─────────┴────────┘      │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ CREATE EVENT PAGE (/create-event)                       │
│                                                         │
│ Title: [TechFest 2026_________]                         │
│ Date: [2026-02-15__________]                            │
│ Location: [Seminar Hall_____]                           │
│ Category: [Conference ↓]                                │
│ Total Seats: [100________]                              │
│ Price: [0________]                                      │
│ Image URL: [___________________]                        │
│ Description: [Annual tech conference___________________│
│               _______________________________________]  │
│                                                         │
│ [Create Event]              [Cancel]                    │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ BACK TO ADMIN DASHBOARD                                 │
│                                                         │
│ Stats Updated:                                          │
│ ┌─────────────┬──────────┬──────────────┐              │
│ │ Total Events│Registrations│Available Seats│             │
│ │      1      │     0    │     100     │              │
│ └─────────────┴──────────┴──────────────┘              │
│                                                         │
│ New Event Appears in Table                              │
│ ┌──────────────┬──────┬──────┬─────────┬────────┐      │
│ │TechFest2026 │2/15  │100   │0        │[Delete]│      │
│ └──────────────┴──────┴──────┴─────────┴────────┘      │
│                                                         │
│ Waiting for user registrations...                       │
└─────────────────────────────────────────────────────────┘
```

---

### 👤 User Journey

```
┌─────────────────────────────────────────────────────────┐
│ HOME PAGE (/)                                           │
│ - Browse featured events section                        │
│ [Click Events in Navbar]                                │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ EVENTS PAGE (/events)                                   │
│                                                         │
│ 🔍 [Search events or location__________]               │
│                                                         │
│ [All Events][Conference][Workshop][Networking]...      │
│                                                         │
│ ┌──────────────────────┐  ┌──────────────────────┐     │
│ │ TechFest 2026        │  │ Other Events...       │     │
│ │ [Event Image]        │  │ [Event Image]        │     │
│ │ Conference | 100/100 │  │                      │     │
│ │ 📅 2026-02-15        │  │                      │     │
│ │ 📍 Seminar Hall      │  │                      │     │
│ │ FREE                 │  │                      │     │
│ │ [View Details]       │  │ [View Details]       │     │
│ └──────────────────────┘  └──────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ EVENT DETAILS PAGE (/events/:id)                        │
│                                                         │
│ ← Back to Events                                        │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [Event Image - Full Width]                         │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ TechFest 2026                                           │
│ [Conference] [100 seats available]                      │
│                                                              │
│ ┌────────────┬──────────┬────────────┐                 │
│ │ 📅 Date    │ 📍 Location│ 👥 Registrations│               │
│ │ 2026-02-15 │Seminar Hall│0 / 100    │                 │
│ └────────────┴──────────┴────────────┘                 │
│                                                         │
│ About This Event                                        │
│ Annual technology conference featuring latest          │
│ innovations in AI, Web3, and Cloud Computing.          │
│                                                         │
│ Price: FREE                                             │
│                                                         │
│ [Register Now]              [Cancel]                    │
└─────────────────────────────────────────────────────────┘
                     ↓
           [Check if Logged In]
                     ↓
          ┌──────────────────────┐
          │ Not Logged In?        │
          │ ↓ Redirect to Login   │
          └──────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ LOGIN PAGE (/login)                                     │
│                                                         │
│ Email: [user@example.com_________]                      │
│ Password: [_________________]                           │
│                                                         │
│ [Login]                                                 │
│                                                         │
│ New user? [Register here]                               │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ REGISTRATION PROCESSING                                 │
│                                                         │
│ ✓ User authenticated                                    │
│ ✓ Registration saved to database                        │
│ ✓ Seats decremented: 100 → 99                           │
│ ✓ Registrations increased: 0 → 1                        │
│ ✓ Redirecting to user dashboard...                      │
└─────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ USER DASHBOARD (/user-dashboard)                        │
│                                                         │
│ Welcome, user!                                          │
│ [Browse Events]             [Logout]                    │
│                                                         │
│ ┌──────────┬──────────────┬──────────┐                 │
│ │Total Reg │Upcoming Events│Past Events│                 │
│ │    1     │      1       │    0     │                 │
│ └──────────┴──────────────┴──────────┘                 │
│                                                         │
│ Your Registrations:                                     │
│ ┌────────────┬──────────┬──────────┐                   │
│ │Event       │Registered│Status    │                   │
│ ├────────────┼──────────┼──────────┤                   │
│ │TechFest2026│Jan 20    │Upcoming  │                   │
│ └────────────┴──────────┴──────────┘                   │
└─────────────────────────────────────────────────────────┘
```

---

### 🔄 Real-time Update Flow

```
USER DASHBOARD                    ADMIN DASHBOARD
(Browser Tab 1)                   (Browser Tab 2)
─────────────────                 ──────────────────

┌──────────────────┐              ┌──────────────────┐
│ Total Reg: 1     │              │ Total Reg: 0     │
│ Seats Left: 99   │              │ Seats Left: 100  │
└──────────────────┘              └──────────────────┘
       ↓                                  ↓
  [Register]                    [Waiting...]
  [Register]
  [Register]
       ↓                                  ↓
┌──────────────────┐              ┌──────────────────┐
│ Total Reg: 3     │              │ Total Reg: 3     │
│ Seats Left: 97   │              │ Seats Left: 97   │
└──────────────────┘              │ (After Refresh)  │
                                   └──────────────────┘
```

---

## 🎨 Page Component Structure

### Home Page (/)
```
┌─────────────────────────────────────────┐
│ NAVBAR                                  │
│ Planora ✨     Home Events Login Register│
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ HERO SECTION                            │
│ Unforgettable Experiences Await You     │
│ [Search] [Explore Events]               │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ FEATURED EVENTS SECTION                 │
│ ┌──────────┬──────────┬──────────┐      │
│ │Event 1   │Event 2   │Event 3   │      │
│ │[Image]   │[Image]   │[Image]   │      │
│ └──────────┴──────────┴──────────┘      │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ WHY PLANORA? SECTION                    │
│ ┌──────────┬──────────┬──────────┐      │
│ │Easy Setup│Real-time │Community │      │
│ │Updates   │Discovery │Trusted   │      │
│ └──────────┴──────────┴──────────┘      │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ HOW IT WORKS SECTION                    │
│ 1. Browse Events  2. Register  3. Enjoy │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ FOOTER                                  │
│ © 2024 Planora. All rights reserved.     │
└─────────────────────────────────────────┘
```

### Events Page (/events)
```
┌─────────────────────────────────────────┐
│ NAVBAR                                  │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ Browse Events                           │
│                                         │
│ 🔍 [Search_________________]           │
│                                         │
│ [All][Conference][Workshop][Seminar]... │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ EVENT CARDS GRID                        │
│ ┌─────────┬─────────┬─────────┐        │
│ │Event 1  │Event 2  │Event 3  │        │
│ │[Img]    │[Img]    │[Img]    │        │
│ │Details  │Details  │Details  │        │
│ │[Btn]    │[Btn]    │[Btn]    │        │
│ └─────────┴─────────┴─────────┘        │
│ ┌─────────┬─────────┬─────────┐        │
│ │Event 4  │Event 5  │Event 6  │        │
│ │[Img]    │[Img]    │[Img]    │        │
│ │Details  │Details  │Details  │        │
│ │[Btn]    │[Btn]    │[Btn]    │        │
│ └─────────┴─────────┴─────────┘        │
└─────────────────────────────────────────┘
```

### Admin Dashboard (/admin-dashboard)
```
┌─────────────────────────────────────────┐
│ NAVBAR                                  │
└─────────────────────────────────────────┘
┌──────────────────┐ ┌─────────────────┐
│ Admin Dashboard  │ │[+Create][Logout]│
└──────────────────┘ └─────────────────┘
┌────────┬────────────┬──────────┐
│Events  │Registrations│Seats   │
│  1     │     0      │  100    │
└────────┴────────────┴──────────┘

Events Management Table:
┌──────────┬──────┬───┬───┬──────┐
│Name      │Date  │Tot│Reg│Act   │
├──────────┼──────┼───┼───┼──────┤
│TechFest  │2/15  │100│1  │[Del] │
├──────────┼──────┼───┼───┼──────┤
│Webinar   │3/10  │50 │0  │[Del] │
└──────────┴──────┴───┴───┴──────┘
```

---

## 🔑 Key Interactions

### Registration Flow
```
[Register Now] Button
     ↓
Check User Login
     ├─ If NOT logged in → Redirect to /login
     └─ If logged in → Process registration
     ↓
Update Database:
  - Increment registrations count
  - Decrement available seats
  - Save user registration record
     ↓
Redirect to /user-dashboard
```

### Admin Event Management
```
[Edit Button] → Edit Form → [Save Changes]
     ↓
Event Updated in Database
     ↓
Dashboard Refreshes
     ↓
Changes Visible Immediately
```

### Search & Filter
```
[Search Input]
     ↓
Filter Events Matching:
  - Title contains search term
  - Category matches filter
     ↓
Display Filtered Results
```

---

## 📱 Responsive Design Notes

- **Desktop:** Full layout with multiple columns
- **Tablet:** 2-3 column grid, smaller cards
- **Mobile:** Single column, full-width cards
- **Navbar:** Sticky top, always accessible
- **Cards:** Resize based on viewport width

---

## 🎯 User Actions & Their Effects

| User Action | Page | Effect |
|-------------|------|--------|
| Click Event | /events | Navigate to /events/:id |
| Register | EventDetails | Seats --1, Registration +1, Redirect to Dashboard |
| Create Event | CreateEvent | Event saved, Redirect to Admin Dashboard |
| Edit Event | ManageEvents | Event updated in database |
| Delete Event | ManageEvents | Event removed from database |
| Login | Login | Redirect to Dashboard (Admin or User) |
| Logout | Any | Clear session, Redirect to Home |
| Search | Events | Filter events by title/location |
| Filter | Events | Filter events by category |

---

**This visual guide helps understand the complete Planora platform flow!** ✨

For detailed setup, see QUICK_START.md
For full documentation, see WORKFLOW.md
