import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchUserDataByUsername } from '../actions/fetch-user-data-by-username';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database';
import NewsSection from '@/components/news-section';
import MenuSection from '@/components/menu-section';

const Username = async ({ params }: { params: { username: string } }) => {
  const useData = await fetchUserDataByUsername(params.username);

  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect('/login');
  }

  return (
    <main className="flex w-full justify-center">
      <div className="relative flex min-h-screen w-full max-w-[1440px] flex-row items-center justify-center">
        <MenuSection session={session} />
        <NewsSection />
      </div>
    </main>
  );
};

export default Username;
