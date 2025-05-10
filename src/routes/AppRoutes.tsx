// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
// import ProtectedRoute from './ProtectedRoute'; // Um componente para rotas protegidas

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Exemplo de rota protegida:
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      */}
    </Routes>
  );
};

export default AppRoutes;