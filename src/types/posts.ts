import { type Database } from '@/types/database';

type PostsEntity = Database['public']['Tables']['posts']['Row'];
type UserEntity = Database['public']['Tables']['users']['Row'];

export type User = {
  name: string;
  avatar_url: string;
  user_name: string;
};

export type Post = PostsEntity & {
  user: User | null; // Allow the user to be null in the Post type
};
