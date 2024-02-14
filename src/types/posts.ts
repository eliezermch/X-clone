import { type Database } from '@/types/database';
import { UserPost } from './user';

type PostsEntity = Database['public']['Tables']['posts']['Row'];

export type Post = PostsEntity & {
  user: UserPost | null; // Allow the user to be null in the Post type
};
