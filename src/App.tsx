import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import JobsPage from './pages/JobsPage';
import CompaniesPage from './pages/CompaniesPage';
import CalendarPage from './pages/CalendarPage';
import DocumentsPage from './pages/DocumentsPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[#F5F5F5]">
                <Navbar />
                <div className="pt-16">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/jobs" element={<JobsPage />} />
                        <Route path="/companies" element={<CompaniesPage />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        <Route path="/documents" element={<DocumentsPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/notifications" element={<NotificationsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;