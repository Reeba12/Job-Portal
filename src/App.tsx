import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from '@/components/Navbar';

// Pages
import Dashboard from '@/pages/Dashboard';
import JobsPage from '@/pages/JobsPage';
import CompaniesPage from '@/pages/CompaniesPage';
import CalendarPage from '@/pages/CalendarPage';
import DocumentsPage from '@/pages/DocumentsPage';
import MessagesPage from '@/pages/MessagesPage';
import NotificationsPage from '@/pages/NotificationsPage';

// Types
interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { path: '/', element: <Dashboard /> },
  { path: '/jobs', element: <JobsPage /> },
  { path: '/companies', element: <CompaniesPage /> },
  { path: '/calendar', element: <CalendarPage /> },
  { path: '/documents', element: <DocumentsPage /> },
  { path: '/messages', element: <MessagesPage /> },
  { path: '/notifications', element: <NotificationsPage /> },
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5F5]">
        <Navbar />
        <div className="pt-16">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;