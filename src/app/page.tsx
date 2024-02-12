import MenuSection from '@/components/menu-section';
import NavMenu from '@/components/nav-menu';
import NewsSection from '@/components/news-section';
import PostSection from '@/components/post-section';
import { Database } from '@/types/database';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect('/login');
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false });

  return (
    <main className="flex w-full justify-center">
      <div className="relative flex min-h-screen w-full max-w-[1440px] flex-row items-center justify-center">
        <MenuSection session={session} />
        <PostSection session={session} posts={posts} />
        <NewsSection />
      </div>
    </main>
  );
}
