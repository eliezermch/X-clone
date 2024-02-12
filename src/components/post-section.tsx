import PostsList from '@/components/posts-list';
import ComposePost from '@/components/compose-post';
import { Session } from '@supabase/supabase-js';

interface Props {
  session: Session;
  posts:
    | {
        content: string;
        created_at: string;
        id: string;
        user_id: string;
        user: {
          name: string;
          avatar_url: string;
          user_name: string;
        } | null;
      }[]
    | null;
}

const PostSection = ({ session, posts }: Props) => {
  return (
    <section className="min-w-[140px] max-w-[540px] w-full min-h-screen mt-4 mr-4 lg:ml-2 lg:mr-10">
      <ComposePost userAvatarUrl={session.user.user_metadata.avatar_url} />
      <PostsList posts={posts} />
    </section>
  );
};

export default PostSection;
