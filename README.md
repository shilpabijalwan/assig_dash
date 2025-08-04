# Dashboard Application

A modern React-based dashboard application with authentication, call record management, and various administrative features.


## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Routing**: React Router DOM 7.7.1
- **Build Tool**: Vite 7.0.4
- **Icons**: React Icons 5.5.0
- **Styling**: CSS3 with modern design patterns
- **Code Quality**: ESLint with React-specific rules

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assignment
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CallRecordTable.jsx
│   ├── CustomInput.jsx
│   ├── Pagination.jsx
│   ├── PastCallRecord.jsx
│   ├── SearchInput.jsx
│   └── layout/         # Layout components
│       ├── Layout.jsx
│       ├── Layout.css
│       ├── SideBar.jsx
│       └── HorizontalBar.jsx
├── pages/              # Page components
│   ├── dashboard.jsx
│   ├── call-record.jsx
│   ├── earning.jsx
│   ├── settings.jsx
│   ├── help-support.jsx
│   ├── login-page.jsx
│   └── pages.css
├── Routers/            # Routing configuration
│   └── page-router.jsx
├── Hooks/              # Custom React hooks
│   └── useTableData.jsx
├── utils/              # Utility functions and constants
│   └── constants.js
├── assets/             # Static assets
│   └── react.svg
├── App.jsx             # Main App component
├── App.css             # App styles
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🔐 Authentication

The application uses localStorage-based authentication:
- Login credentials are stored in browser localStorage
- Protected routes automatically redirect to login if not authenticated
- Authenticated users are redirected to dashboard from login page

## 📊 Call Record Management

The call record system includes:
- **Upcoming Calls**: View and manage scheduled calls
- **Past Calls**: Historical call records
- **Call Actions**: Schedule, cancel, and manage calls
- **Pagination**: Navigate through large datasets

## 🎨 UI Components

- **Sidebar Navigation**:  sidebar with menu items
- **Horizontal Bar**: Top navigation bar
- **Tab Navigation**: Switch between different views
- **Data Tables**: Responsive tables
- **Pagination**: Page navigation for large datasets

## 🔧 Configuration

### Environment Setup
The application is configured to run on:
- **Development**: `http://localhost:5173`
- **Production**: Configured via Vite build process

### Data Management
- Call records are stored in `src/utils/constants.js`

- Actions include: "call", "calendar", "cancel"

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```
