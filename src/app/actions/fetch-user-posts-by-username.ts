'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const fetchUserPostsByUsername = async (userId: string) => {
  try {
    const supabase = createServerActionClient({ cookies });
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*, user:users(name, avatar_url, user_name)')
      .eq('user_id', userId) // Filter posts by user_id
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return posts;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export { fetchUserPostsByUsername };
