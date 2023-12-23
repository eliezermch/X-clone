import CardCoverImage from '@/components/card-cover-image';
import CardImage from '@/components/card-image';
import ComposePost from '@/components/compose-post';
import NavMenu from '@/components/nav-menu';
import PostsList from '@/components/posts-list';
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
        <section className="sticky top-0 min-w-[70px] max-w-[275px] min-h-screen flex flex-col justify-between items-end self-start pt-3 pb-4 lg:w-full">
          <NavMenu
            userAvatarUrl={session.user.user_metadata.avatar_url}
            userName={session.user.user_metadata.name}
            userFullName={session.user.user_metadata.user_name}
          />
        </section>
        <section className="min-w-[140px] max-w-[540px] w-full min-h-screen mt-4 mr-4 lg:ml-2 lg:mr-10">
          <ComposePost userAvatarUrl={session.user.user_metadata.avatar_url} />
          <PostsList posts={posts} />
        </section>
        <section className="sticky top-0 min-w-[100px] max-w-[350px] w-full min-h-screen flex-col gap-6 right-0 items-center self-start pt-4 mr-6 hidden sm:flex">
          <CardCoverImage />
          <CardImage />
        </section>
      </div>
    </main>
  );
}
