'use client';

import { useRouter } from 'next/navigation';
import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { GitHubIcon, GoogleIcon } from './icons';

import { Button } from '@nextui-org/button';
import { useState } from 'react';
import AuthRegisterForm from './auth-register-form.tsx';
import { IconMail } from '@tabler/icons-react';

interface Props {
  session: Session | null;
}

export function AuthButton({ session }: Props) {
  const [signInWithEmail, setSignInWithEmail] = useState<boolean>(false);

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const handleSignInWithEmailState = () => {
    setSignInWithEmail(true);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header>
      {session === null ? (
        <>
          <button
            onClick={handleSignInWithGitHub}
            type="button"
            className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2"
          >
            <GitHubIcon />
            Sign in with Github
          </button>
          {!signInWithEmail && (
            <button
              onClick={handleSignInWithEmailState}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <IconMail className="w-4 h-4 mr-2" />
              Sign in with Email
            </button>
          )}
          {signInWithEmail && <AuthRegisterForm />}
        </>
      ) : (
        <Button className="ml-3" onClick={handleSignOut}>
          Sign Out
        </Button>
      )}
    </header>
  );
}
