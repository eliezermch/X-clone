'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const fetchUserDataByUsername = async (username: string) => {
  try {
    const supabase = createServerActionClient({ cookies });
    const { data: users, error } = await supabase
      .from('users') // Assuming 'users' is the table name where user data is stored
      .select('*')
      .eq('user_name', username)
      .single();

    if (error) {
      throw error;
    }

    return users;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export { fetchUserDataByUsername };
