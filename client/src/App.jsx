import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/errors/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl font-bold">Login Coming Soon</h1>
          </div>
        }
      />

      <Route
        path="/register"
        element={
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl font-bold">Register Coming Soon</h1>
          </div>
        }
      />

      <Route
        path="/dashboard"
        element={
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl font-bold">Dashboard Coming Soon</h1>
          </div>
        }
      />

      <Route path="/404" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;
