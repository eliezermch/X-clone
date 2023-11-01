import React from 'react';
import { AuthButtonServer } from '@/components/auth-button-server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session !== null) {
    redirect('/');
  }

  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Sign in X</h1>
      <AuthButtonServer />
    </section>
  );
}

export default Login;
