# Planora - Event Management Platform 🎉

A modern event management platform built with React that allows admins to create and manage events, and users to discover and register for events in real-time.

## 🎯 Complete Workflow

### Admin Workflow
1. **Login** → Go to `/login` and use any email containing "admin" (e.g., `admin@example.com`)
2. **Dashboard** → Redirected to `/admin-dashboard` showing all events and registrations
3. **Create Event** → Click "+ Create Event" to add new events (title, date, location, seats)
4. **Track Registrations** → Dashboard shows live registration count and available seats
5. **Manage Events** → Edit or delete events from management page

### User Workflow
1. **Browse Events** → Visit `/events` to see all available events
2. **Event Details** → Click an event to see full details and seat availability
3. **Register** → Click "Register Now" button
4. **Login** → If not logged in, redirected to `/login` (use any email without "admin")
5. **Registration Confirmed** → Automatically redirected to dashboard
6. **Track Status** → View all registered events in user dashboard
7. **Real-time Updates** → Seat count decreases immediately after registration

## 🎨 Key Features

### Real-time Features
- ✅ Instant seat count updates after registration
- ✅ Live registration count on admin dashboard
- ✅ Status tracking (Upcoming/Attended events)
- ✅ Available seats display on event cards

### Admin Features
- 📊 Dashboard with total events, registrations, and seats stats
- ➕ Create events with all details
- 📝 Edit/Delete existing events
- 📋 View all events with registration counts
- 👥 See real-time seat availability

### User Features
- 🔍 Search events by title or location
- 🏷️ Filter events by category (Conference, Workshop, Networking, etc.)
- 📋 Browse all available events
- 🎫 Register for events with one click
- 📊 Track all registrations (Upcoming & Attended)
- 💳 View event prices (Free or Paid)

## 📱 Pages & Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Landing page with featured events |
| `/events` | Events | Browse all events with search & filters |
| `/events/:id` | EventDetails | View event details and register |
| `/login` | Login | Authentication (Admin/User based on email) |
| `/register` | Register | Create new user account |
| `/admin-dashboard` | AdminDashboard | Admin stats and event overview |
| `/create-event` | CreateEvent | Admin form to create events |
| `/manage-events` | ManageEvents | Admin interface to edit/delete events |
| `/user-dashboard` | UserDashboard | User's registered events summary |
| `/my-registrations` | MyRegistrations | Detailed registration history |

## 🔐 Authentication

- **Email-based Role Detection:**
  - Email contains "admin" → Admin role
  - Other emails → User role
- **localStorage for Demo:**
  - `currentUser` - Stores logged-in user data
  - `events` - All created events
  - `registrations` - User registrations

### Demo Credentials
- Admin: `admin@example.com` (any password)
- User: `user@example.com` (any password)

## 🛠️ Example Workflow (TechFest 2026)

### Step 1: Admin Creates Event
- Login with `admin@example.com`
- Go to Admin Dashboard
- Click "+ Create Event"
- Fill details:
  - Title: "TechFest 2026"
  - Date: "2026-02-15"
  - Location: "Seminar Hall"
  - Total Seats: "100"
  - Category: "Conference"

### Step 2: User Registers for Event
- Login with `user@example.com`
- Browse events or go to `/events`
- See "TechFest 2026" with "100 seats available"
- Click event → Click "Register Now"
- Registration confirmed
- Dashboard shows "1 registration"

### Step 3: Admin Sees Real-time Update
- Admin dashboard shows:
  - Total Registrations: 1
  - TechFest 2026: 1 registration
  - Available Seats: 99/100

### Step 4: Multiple Registrations
- More users register
- Each registration:
  - Increases registration count
  - Decreases available seats
  - Updates in real-time

## 💾 Data Structure

### Event Object
```javascript
{
  id: 1234567890,
  title: "TechFest 2026",
  date: "2026-02-15",
  location: "Seminar Hall",
  category: "conference",
  totalSeats: 100,
  seatsAvailable: 99,
  registrations: 1,
  price: 0,
  description: "Annual tech conference",
  imageUrl: "https://..."
}
```

### Registration Object
```javascript
{
  id: 1234567890,
  userId: 9876543210,
  userEmail: "user@example.com",
  eventId: 1234567890,
  eventTitle: "TechFest 2026",
  registeredAt: "2024-01-20T10:30:00Z"
}
```

## 🎨 Design System

### Color Palette
- **Dark Navy Base:** `#0f172a`, `#1e293b`
- **Accent Orange:** `#ff9500`
- **Text:** White `#fff`, Gray `#aaa`
- **Success:** `#22c55e`
- **Error:** `#dc2626`
- **Info:** `#3b82f6`

### Typography
- **Heading (H1):** 32px, fontWeight 700
- **Heading (H2):** 18px, fontWeight 700
- **Body:** 14px, color #aaa
- **Buttons:** 600 fontWeight, 12-16px

### Components
- Cards with hover lift effect (translateY -8px)
- Gradient overlays on images
- Rounded corners (6-10px)
- Semi-transparent backgrounds (rgba)
- Smooth transitions (0.3s ease)

## 🚀 Getting Started

1. **Run the Application**
```bash
cd planora
npm install
npm start
```

2. **Test Admin Flow**
- Open `http://localhost:3000`
- Click "Register" button in navbar
- Create admin account (email with "admin")
- Create an event with 100 seats
- View admin dashboard

3. **Test User Flow**
- Open new browser tab or logout
- Login with non-admin email
- Browse events at `/events`
- Register for an event
- View user dashboard at `/user-dashboard`

## 📊 Test Data

Create an event "TechFest 2026" and register multiple users to see:
- Seat count decreasing (100 → 99 → 98...)
- Registration count increasing (1 → 2 → 3...)
- Real-time updates in both admin and user dashboards

## 🔧 File Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation header
├── layouts/
│   └── MainLayout.jsx      # Main wrapper with navbar
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Events.jsx          # Event browsing (user)
│   ├── EventDetails.jsx    # Single event details
│   ├── Login.jsx           # Authentication
│   ├── Register.jsx        # User registration
│   ├── AdminDashboard.jsx  # Admin overview
│   ├── CreateEvent.jsx     # Create new event
│   ├── ManageEvents.jsx    # Edit/delete events
│   ├── UserDashboard.jsx   # User profile
│   └── MyRegistrations.jsx # Registration history
├── App.js                  # Main app with routing
└── index.js               # Entry point
```

## 🔄 State Management

Currently using **localStorage** for demo. To scale to production:
1. Replace localStorage with API calls
2. Use context API or Redux for state management
3. Implement WebSocket for real-time updates
4. Add proper backend database

## 📞 Features Implemented

✅ Admin authentication & dashboard  
✅ Event creation with all details  
✅ Real-time seat availability  
✅ User registration flow  
✅ Event search & filtering  
✅ Registration history tracking  
✅ Admin event management (edit/delete)  
✅ Professional dark theme UI  
✅ Mobile responsive design  
✅ Smooth animations & transitions  

---

**Planora** - Making Events Memorable ✨
