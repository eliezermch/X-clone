import React from 'react';
import PostCard from './post-card';
import { type Post } from '@/types/posts';

function PostsList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts?.map((post) => {
        const { id, content, user } = post;

        const { user_name: userName, name: userFullname, avatar_url: avatarUrl } = user;
        return (
          <PostCard key={id} userName={userName} userFullname={userFullname} avatarUrl={avatarUrl} content={content} />
        );
      })}
    </>
  );
}

export default PostsList;
