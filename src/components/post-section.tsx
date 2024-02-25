import PostsList from '@/components/posts-list';
import ComposePost from '@/components/compose-post';
import { Post } from '@/types/posts';

interface Props {
  avatar: string;
  posts: Post[] | null;
}

const PostSection = ({ avatar, posts }: Props) => {
  return (
    <section className="min-w-[140px] max-w-[540px] w-full min-h-screen mt-4 mr-4 lg:ml-2 lg:mr-10">
      <ComposePost userAvatarUrl={avatar} />
      <PostsList posts={posts} />
    </section>
  );
};

export default PostSection;
