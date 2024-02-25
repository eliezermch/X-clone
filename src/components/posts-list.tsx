import React from 'react';
import PostCard from './post-card';
import { Post } from '@/types/posts';

function PostsList({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {posts?.map((post) => {
        const { id, content, user, user_id } = post;

        // Check if user is not null before accessing its properties
        const userName = user ? user.user_name : '';
        const userFullname = user ? user.name : '';
        const avatarUrl = user ? user.avatar_url : '';

        return (
          <PostCard
            key={id}
            id={id}
            postUserId={user_id}
            userName={userName}
            userFullname={userFullname}
            avatarUrl={avatarUrl}
            content={content}
          />
        );
      })}
    </>
  );
}

export default PostsList;
