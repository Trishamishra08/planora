# Quick Start Guide - Planora Event Management Platform

## 🚀 Getting Started in 5 Minutes

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation
```bash
cd planora
npm install
npm start
```

The app will open at `http://localhost:3000`

---

## 🧪 Quick Test - TechFest 2026 Example

Follow this exact flow to test the complete system:

### 1️⃣ Admin Creates Event (TechFest 2026)

**Step 1.1: Login as Admin**
- Click "Login" button in navbar
- Email: `admin@example.com`
- Password: (any password works)
- ✅ Redirected to `/admin-dashboard`

**Step 1.2: Create Event**
- Click "+ Create Event" button
- Fill the form:
  - Title: `TechFest 2026`
  - Date: `2026-02-15`
  - Location: `Seminar Hall`
  - Category: `Conference`
  - Total Seats: `100`
  - Price: `0`
  - Description: `Annual technology conference featuring latest innovations`
- Click "Create Event" button
- ✅ Event created and appears in dashboard

**Step 1.3: View Admin Dashboard**
- See stats:
  - Total Events: **1**
  - Total Registrations: **0**
  - Available Seats: **100**
- View events table showing:
  - Event Name: TechFest 2026
  - Date: 2026-02-15
  - Total Seats: 100
  - Registrations: 0
  - Available: 100

---

### 2️⃣ User Registers for Event

**Step 2.1: Open New Browser Tab** (or logout)
- Prevents confusion between admin/user sessions

**Step 2.2: Browse Events**
- Click "Events" in navbar (or go to `/events`)
- See event card: "TechFest 2026"
- Card shows: "100 seats available"

**Step 2.3: View Event Details**
- Click on TechFest 2026 event card
- Page shows:
  - Event title, date, location
  - Registrations: 0/100
  - Available seats: 100
  - Category badge
  - "Register Now" button

**Step 2.4: Register for Event**
- Click "Register Now" button
- If not logged in:
  - Redirected to `/login`
  - Email: `user@example.com`
  - Password: (any password)
  - Login successful
  
- After login, registration processes:
  - ✅ Registration saved
  - ✅ Seats decremented (100 → 99)
  - ✅ Redirected to `/user-dashboard`

**Step 2.5: View User Dashboard**
- See stats:
  - Total Registrations: **1**
  - Upcoming Events: **1**
  - Past Events: **0**
- See registration table:
  - Event: TechFest 2026
  - Status: Upcoming

---

### 3️⃣ Admin Sees Real-time Update

**Step 3.1: Switch Back to Admin Tab**
- Go to Admin Dashboard
- **Refresh the page** (in current implementation)

**Step 3.2: Verify Updates**
- Dashboard stats now show:
  - Total Registrations: **1** ⬆️ (was 0)
  - Available Seats: **99** ⬇️ (was 100)
- Events table shows:
  - TechFest 2026: 1 registration
  - Available: 99 seats

---

### 4️⃣ Multiple Users Register

**Step 4.1: Create Multiple User Accounts**
- Open new browser tabs
- Register different user accounts:
  - `john@example.com`
  - `jane@example.com`
  - `bob@example.com`

**Step 4.2: Register Each User**
- Browse events
- Register for TechFest 2026
- Each registration:
  - Increases registration count (0 → 1 → 2 → 3...)
  - Decreases available seats (100 → 99 → 98 → 97...)

**Step 4.3: Admin Dashboard Updates**
- After each registration, dashboard shows:
  - Total Registrations: increases
  - Available Seats: decreases
  - Registration table: updated counts

---

## 📊 Complete Workflow Summary

```
┌─────────────────────────────────────────────────────────────┐
│  ADMIN FLOW                                                 │
├─────────────────────────────────────────────────────────────┤
│  1. Login (admin@example.com)                               │
│  2. → Admin Dashboard                                       │
│  3. → Create Event (100 seats)                              │
│  4. → Dashboard shows: 1 event, 0 registrations             │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  USER FLOW                                                  │
├─────────────────────────────────────────────────────────────┤
│  1. Browse Events (/events)                                 │
│  2. Click Event (TechFest 2026)                             │
│  3. → Event Details page                                    │
│  4. Click "Register Now"                                    │
│  5. Login (user@example.com) if needed                      │
│  6. → Registration confirmed                                │
│  7. Seats: 100 → 99                                         │
│  8. → User Dashboard (1 registration)                       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  REAL-TIME UPDATE (Admin Side)                              │
├─────────────────────────────────────────────────────────────┤
│  Dashboard shows:                                           │
│  - Total Registrations: 1 (increased)                       │
│  - Available Seats: 99 (decreased)                          │
│  - Event Status: 1/100 registered                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔑 Key Features Demonstrated

✅ **Admin Authentication** - Email-based role detection (contains "admin")
✅ **Event Creation** - Admin can create events with full details
✅ **Real-time Seat Updates** - Seats decrement immediately on registration
✅ **User Registration** - One-click registration with auto-login
✅ **Dashboard Tracking** - Both admin and user dashboards show live stats
✅ **Search & Filter** - Users can search and filter events
✅ **Event Management** - Admin can edit and delete events
✅ **Registration History** - Users can view all registrations

---

## 🎨 Testing Different Scenarios

### Scenario 1: Event Full (0 Seats)
1. Create event with "1" seat
2. User 1 registers → Seats: 0
3. User 2 tries to register → Button shows "Event Full" (disabled)

### Scenario 2: Multiple Events
1. Create "TechFest 2026" (100 seats)
2. Create "Webinar 2026" (50 seats)
3. Admin dashboard shows total: 2 events
4. Events page shows both with different seat counts

### Scenario 3: Search & Filter
1. Create multiple events with different categories
2. Use search bar on `/events` page
3. Filter by category buttons
4. See real-time filtering

---

## 📱 All Available Routes

| URL | Action | User Type |
|-----|--------|-----------|
| `/` | View home page | Public |
| `/events` | Browse all events | Public/User |
| `/events/:id` | View event details | Public/User |
| `/login` | Login page | Public |
| `/register` | Create account | Public |
| `/admin-dashboard` | Admin overview | Admin only |
| `/create-event` | Create new event | Admin only |
| `/manage-events` | Edit/delete events | Admin only |
| `/user-dashboard` | View registrations | User only |
| `/my-registrations` | Registration history | User only |

---

## 🐛 Troubleshooting

### "Event not found" on EventDetails
- Event might be deleted by admin
- Go back to `/events` and select existing event

### Registration not updating dashboard
- Refresh the page (`F5` or `Ctrl+R`)
- Current implementation uses localStorage (requires refresh)

### Can't login as admin
- Email must contain "admin" (e.g., `admin@example.com`)
- Check browser console for any errors

### Lost all data
- Data is in localStorage
- Clear cache or use incognito mode for fresh start
- Command: `localStorage.clear()` in console

---

## 🚀 Next Steps

After testing the basic flow:

1. **Try Admin Features**
   - Go to `/manage-events`
   - Click "Edit" on an event
   - Change seats and click "Save Changes"
   - See dashboard update

2. **Try User Features**
   - Go to `/my-registrations`
   - View upcoming and attended events
   - See registration history with dates

3. **Try Search & Filter**
   - On `/events` page
   - Search for event by name
   - Filter by category buttons

4. **Try Multiple Users**
   - Open 3-4 browser tabs
   - Register different users
   - See real-time seat count decrease

---

**Enjoy using Planora! 🎉✨**

For questions or issues, check the WORKFLOW.md file for detailed documentation.
