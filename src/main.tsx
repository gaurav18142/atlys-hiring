import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { PostProvider } from './context/PostsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </AuthProvider>
  </React.StrictMode>
);
