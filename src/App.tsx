// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
// import './styles/global.css'; // Se você tiver um CSS global

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> ou similar se usar Context para auth */}
      <AppRoutes />
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;