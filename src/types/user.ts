import { Database } from './database';

export type UserPost = {
  name: string;
  avatar_url: string;
  user_name: string;
};

type UserEntity = Database['public']['Tables']['users']['Row'];

export type User = UserEntity;
