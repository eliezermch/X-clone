import CardCoverImage from '@/components/card-cover-image';
import CardImage from '@/components/card-image';
import ComposePost from '@/components/compose-post';
import NavMenu from '@/components/nav-menu';
import PostsList from '@/components/posts-list';
import UserProfile from '@/components/user-profile';
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
    <main className="flex min-h-screen flex-row gap-3 items-center justify-between">
      <section className="fixed max-w-[275px] w-full min-h-screen flex flex-col justify-between items-end self-start pt-3 pb-4">
        <NavMenu />
        <UserProfile
          userAvatarUrl={session.user.user_metadata.avatar_url}
          userName={session.user.user_metadata.name}
          userFullName={session.user.user_metadata.user_name}
        />
      </section>
      <section className="max-w-[600px] w-full mx-auto border-l border-t border-r border-white/20 min-h-screen mt-4">
        <ComposePost userAvatarUrl={session.user.user_metadata.avatar_url} />
        <PostsList posts={posts} />
      </section>
      <section className="fixed max-w-[350px] w-full min-h-screen flex flex-col gap-6 right-0 items-center self-start pt-3">
        <CardCoverImage />
        <CardImage />
      </section>
    </main>
  );
}
