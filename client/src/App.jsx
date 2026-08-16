import { Navigate, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './routes/ProtectedRoute';

import DashboardLayout from './layouts/DashboardLayout';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Dashboard from './pages/dashboard/Dashboard';
import Clients from './pages/dashboard/Clients';
import Projects from './pages/dashboard/Projects';
import Tasks from './pages/dashboard/Tasks';
import AIAssistant from './pages/dashboard/AIAssistant';
import Settings from './pages/dashboard/Settings';

import NotFound from './pages/errors/NotFound';

const App = () => {
  /*
   * Temporary authentication state.
   *
   * This will be replaced by AuthContext
   * in Sprint 2.4.
   */
  const isAuthenticated = false;
  const isLoading = false;

  return (
    <Routes>
      {/* ========================= */}
      {/* Public Routes */}
      {/* ========================= */}

      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />

      <Route
        path="/register"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />
        }
      />

      {/* ========================= */}
      {/* Protected Routes */}
      {/* ========================= */}

      <Route
        element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
          />
        }
      >
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/dashboard/clients" element={<Clients />} />

          <Route path="/dashboard/projects" element={<Projects />} />

          <Route path="/dashboard/tasks" element={<Tasks />} />

          <Route path="/dashboard/ai" element={<AIAssistant />} />

          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* ========================= */}
      {/* 404 */}
      {/* ========================= */}

      <Route path="/404" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;
