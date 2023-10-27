import React from 'react';
import { AuthButtonServer } from '@/components/auth-button-server';

function Login() {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Sign in X</h1>
      <AuthButtonServer />
    </section>
  );
}

export default Login;
