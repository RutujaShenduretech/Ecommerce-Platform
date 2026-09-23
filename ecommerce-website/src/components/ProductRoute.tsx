"use client"
import React from 'react';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  children: React.ReactNode;
};

export default function ProtectedRoute({ isAuthenticated, children }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    // Redirect to register/login page if not logged in
    if (typeof window !== 'undefined') {
      window.location.replace('/register');
    }
    return null;
  }

  return <>{children}</>;
}