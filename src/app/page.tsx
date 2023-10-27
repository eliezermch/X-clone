import { AuthButtonServer } from '@/components/auth-button-server';
import PostCard from '@/components/post-card';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect('/login');
  }

  const { data: posts } = await supabase.from('posts').select('*, user:users(name, avatar_url, user_name)');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      {posts?.map((post) => {
        const { id, content, user } = post;

        const { user_name: userName, name: userFullname, avatar_url: avatarUrl } = user;
        return (
          <PostCard key={id} userName={userName} userFullname={userFullname} avatarUrl={avatarUrl} content={content} />
        );
      })}
    </main>
  );
}
